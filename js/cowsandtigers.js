/**
 * GAME COWS AND TIGERS SURVIVAL
 * ----------------------------
 *
 * CREATE OBJECT HEALTH
 * MAKE OBJECTS ALGORITHM
 */
var cowsandtigers = (function () {

    var devMode = false;


    /**
     * OBJ GAME
     * @param setting
     * @constructor
     */
    function Game(setting) {
        this.setting = setting;
        // --------------
        // Установим режим игры
        devMode = this.setting.devMode || devMode;

        // Установим скорость игрового цикла
        this.timeRender = this.setting.timeRender || 500;

        // Создадим новую сцену
        this.scene = new Scene(this.setting);
    }


    /**
     * GAME LOOP
     */
    Game.prototype.run = function () {
        // Создадим игровое поле на сцене
        this.scene.build();

        if (!devMode) {
            // Главный Loop
            setInterval(() => {
                this.scene.actionOnMap();
                this.scene.render();
            }, this.timeRender);
        } else {
            this.scene.actionOnMap();
            this.scene.render();
        }
    };
    // ------------------------------------------


    /**
     * Игровая сцена
     * @param setting
     * @constructor
     */
    function Scene(setting) {
        this.gameContainer = document.getElementById(setting.gameContainerID);
        this.plain = document.getElementById('plain');
        this.map = new Map(setting);
    }


    /**
     * Проинициализируем карту и заполним ее объектами
     */
    Scene.prototype.build = function () {
        this.map.init();
        this.map.generate();
    };


    /**
     * Отрисовка заполненной карты
     */
    Scene.prototype.render = function () {
        var mapHTML = '';

        // Построим игровое поле
        for (var row = 0; row < this.map.row; row++) {
            mapHTML += "<div class='row'>";
            for (var col = 0; col < this.map.col; col++) {
                mapHTML += "<div class='cell'> " + this.getObject(row, col).show() + "</div>";
            }
            mapHTML += "</div>";
        }

        // Добавим собранную HTML карту в DOM
        this.plain.innerHTML = mapHTML;
    };


    /**
     * Получим объект из массива по Row/Col для отображения в HTML
     * @param row
     * @param col
     * @returns {*}
     */
    Scene.prototype.getObject = function (row, col) {
      return this.map.mapData[row][col];
    };


    /**
     * Действия всех объектов на карте
     */
    Scene.prototype.actionOnMap = function () {
        console.log("Show action on Map in one time");
        for (var i = 0; i < this.map.objectsOnMap.length; i++) {
            this.map.objectsOnMap[i].action(this.map);
        }
    };
    // ------------------------------------------


    /**
     * Класс работы с картой
     * @param setting
     * @constructor
     */
    function Map (setting) {
        this.mapData = [];
        this.mapObjects = setting.mapObjects;
        this.objectsOnMap = [];

        this.row = setting.mapSize.row || 0;
        this.col = setting.mapSize.col || 0;
    }


    /**
     * Построим пустую карту на основе начальных Row/Col
     */
    Map.prototype.init = function () {
        while(this.mapData.push([]) < this.row);
    };


    /**
     * Генерация карты
     */
    Map.prototype.generate = function () {

        var objID = 0;

        for(var objectName in this.mapObjects ) {
            var isStaticObject = false;

            var objMin = this.mapObjects[objectName].min;
            var objMax = this.mapObjects[objectName].max;

            // Если объект являеться статикой,
            // то постаремся дать по максимуму значения min/max
            // для полного заполнения игрового поля
            if (objMin === null && objMax === null) {
                objMin = (this.row + this.col) * 2;
                objMax = (this.row + this.col) * 100;

                isStaticObject = true;
            }

            // Получим кол-во объектов на карте
            var objCountOnMap = tools.randomInteger(objMin, objMax);

            // console.log(objCountOnMap);

            // Пройдемся по этому количевству
            for (var i = 0; i < objCountOnMap; i++) {

                var mapRowCol = this.getRandomRowColCoord();

                // console.log('mapRowColNormal: ', mapRowCol);

                if (this.mapData[mapRowCol.row][mapRowCol.col] == undefined) {
                    var unit = new Unit(objectName, objID, mapRowCol.row, mapRowCol.col);

                    this.mapData[mapRowCol.row][mapRowCol.col] = unit;

                    if (!isStaticObject) {
                        this.objectsOnMap.push(unit);
                    }
                } else {
                    var unitSetting = {
                        objID: objID,
                        objectName: objectName,
                        isStaticObject: isStaticObject
                    };
                    this.tryNewGenerate(unitSetting, objCountOnMap);
                }
            }

            objID++;
        }
    };


    /**
     * Повторная генерация, в случии занятого места в массиве
     * @param objectSetting
     * @param count
     * @returns {*}
     */
    Map.prototype.tryNewGenerate = function (objectSetting, count) {

        if(count <= 0) return false;

        // Пройдемся по этому количевству
        for (var i = 0; i < count; i++) {

            // создадим координаты для проставления
            var mapRowCol = this.getRandomRowColCoord();

            // console.log('mapRowColRecursive: ', mapRowCol);

            if (this.mapData[mapRowCol.row][mapRowCol.col] == undefined) {
                var unit = new Unit(objectSetting.objectName, objectSetting.objID, mapRowCol.row, mapRowCol.col);

                this.mapData[mapRowCol.row][mapRowCol.col] = unit;

                if (!objectSetting.isStaticObject) {
                    this.objectsOnMap.push(unit);
                }

                return false;
            } else {
                var unitSetting = {
                    objID: objectSetting.objID,
                    objectName: objectSetting.objectName,
                    isStaticObject: objectSetting.isStaticObject
                };
                return this.tryNewGenerate(unitSetting, count - 1);
            }
        }
    };


    /**
     * Получим произвольные координаты на основе кол-во строк и колонок
     * @returns {{row: *, col: *}}
     */
    Map.prototype.getRandomRowColCoord = function () {
        var countRow = this.row,
            countCol = this.col;

        return {
            row: tools.randomInteger(0, countRow),
            col: tools.randomInteger(0, countCol)
        }
    };
    // ------------------------------------------


    /**
     * Основной Прототип объекта на карте
     * @param className
     * @param id
     * @param objPositionRow
     * @param objPositionCol
     * @constructor
     */
    function Unit(className, id, objPositionRow, objPositionCol) {
        this.id = id;
        this.className = className;
        this.positionRow = objPositionCol;
        this.positionCol = objPositionRow;
        this.health = 100;

        // Выберим алгоритм поведения для объекта
        this.algoritms = this.selectAlgorithm(this) || {};
    }


    /**
     * Вывод HTML объекта
     * @returns {string}
     */
    Unit.prototype.show = function () {
        return "<div class='"+this.className+"'></div>";
    };


    /**
     * Разные действия объекта
     */
    Unit.prototype.action = function (map) {
        if (this.algoritms) {
            this.algoritms.action(map);
        }
    };


    /**
     * Вернет для объекта его алгоритм поведения в игре
     * @param id
     * @returns {*}
     */
    Unit.prototype.selectAlgorithm = function () {
        /**
         * 0 - grass
         * 1 - cows
         * 2 - tigers
         * 3 - ground
         * 4 - death
         */

        switch (parseInt(this.id)) {
            case 0:
                return new GrassAlgorithm(this);
                break;
            case 1:
                return new CowsAlgorithm(this);
                break;
            case 2:
                return new TigersAlgorithm(this);
                break;
            case 3:
                return new GroundAlgorithm(this);
                break;
            case 4:
                return new DeathAlgorithm(this);
                break;
        }
    };
    // ------------------------------------------


    /**
     * Агоритм повидения объектов
     * @constructor
     */
    function Algorithm (unit) {
        this.unit = unit;

    }


    Algorithm.prototype.action = function (map) {

        // this.isAnyNeighborsCellSafe();

        // if (neighborsCellReport.safe) {
        //     this.move(obj, map, neighborsCellReport.safeCellCoordinates);
        // }

        // Осмотримся
        // - Проверим соседнии клетки:
        //      - На границы карты
        //      - На хищников
        //      - На еду
        //  Если в соседней клетки есть еда, то она становиться приоритетом
        //  Если еды нет, но есть хищник, то бежим от него.
        //  Направление выберим произвольно исключая направления хищника, если он есть.

        this.doesNotGoBeyondBorders(map);
    };


    Algorithm.prototype.isAnyNeighborsCellSafe = function (obj, map) {


        // var elsCoord = [];
        //
        // for (var i = 0; i < obj.coordinate.length; i++) {
        //
        //     Доделать и проверить, не правильно определяет границы
            // var safeWays = this.doesNotGoBeyondBorders(obj.coordinate[i], map);
            //
            // console.log(safeWays);
        // }

        // for (var row = 0; row < map.row; row++) {
        //     for (var col = 0; col < map.col; col++) {
        //         if (map.mapData[row][col] == obj.id) {
        //             elsCoord.push({
        //                 row: row,
        //                 col: col
        //             });
        //         }
        //     }
        // }
        // return elsCoord;
    };


    // Проверим не зашли ли за границы +
    Algorithm.prototype.doesNotGoBeyondBorders = function (map) {
        var unitPositionRow = parseInt(this.unit.positionRow);
        var unitPositionCol = parseInt(this.unit.positionCol);

        // Не забыть про границы карты
        var border = {
            top: 0,
            topRight: map.col,
            right: map.col,
            rightBottom: map.col,
            bottom: map.row,
            leftBottom: 0,
            left: 0,
            leftTop: 0
        }

        var safeCell = {
            top: false,
            topRight: false,
            right: false,
            rightBottom: false,
            bottom: false,
            leftBottom: false,
            left: false,
            leftTop: false
        };


        // TOP Проверим ячейку с вверху +
        if ((unitPositionRow - 1) >= border.top) {
            safeCell.top = true;
        }


        // TOP_RIGHT Проверим ячейку с вверху-вправо +
        if (
            (unitPositionRow - 1 ) >= border.top
            && (unitPositionCol + 1) < border.topRight
        ) {
            safeCell.topRight = true;
        }


        // RIGHT Проверим ячейку с вправо +
        if ((unitPositionCol + 1 ) < border.right) {
            safeCell.right = true;
        }


        // RIGHT_BOTTOM Проверим ячейку с вправо-внизу +
        if (
            (unitPositionRow + 1 ) < border.bottom
            &&
            (unitPositionCol + 1) <  border.rightBottom
        ) {
            safeCell.rightBottom = true;
        }

        
        // BOTTOM Проверим ячейку внизу +
        if ((unitPositionRow + 1) <  border.bottom) {
            safeCell.bottom = true;
        }


        // LEFT_BOTTOM Проверим ячейку с слева-внизу +
        if (
            (unitPositionRow + 1 ) < border.bottom
            &&
            (unitPositionCol - 1) >=  border.leftBottom
        ) {
            safeCell.leftBottom = true;
        }


        // LEFT Проверим ячейку с слева +
        if ((unitPositionCol - 1 ) >= border.left) {
            safeCell.left = true;
        }


        // LEFT_TOP Проверим ячейку с лева-вверху +
        if (
            (unitPositionRow - 1 ) <= border.top
            &&
            (unitPositionCol - 1 ) <= border.left
        ) {
            safeCell.leftTop = true;
        }

        console.log(this.unit);
        console.log(safeCell);
        console.log("ROW: " + unitPositionRow, "COL: " + unitPositionCol );

        return safeCell;
    };


    Algorithm.prototype.findSafeWays = function (obj, map) {

    };


    Algorithm.prototype.move = function (obj, map) {
        console.log("Algorithm work");

    };
    // ------------------------------------------
    
    // COWS ALGORITM
    function CowsAlgorithm(unit) {
        Algorithm.call(this, unit);
    }
    CowsAlgorithm.prototype = new Algorithm();
    CowsAlgorithm.constructor = 'CowsAlgorithm';
    // ------------------------------------------

    // TIGERS ALGORITM
    function TigersAlgorithm(unit) {
        Algorithm.call(this, unit);
    }
    TigersAlgorithm.prototype = new Algorithm();
    TigersAlgorithm.constructor = 'TigersAlgorithm';
    // ------------------------------------------

    // GRASS ALGORITM
    function GrassAlgorithm(unit) {
        Algorithm.call(this, unit);
    }
    GrassAlgorithm.prototype = new Algorithm();
    GrassAlgorithm.constructor = 'GrassAlgorithm';
    // ------------------------------------------

    // GROUND ALGORITM
    function GroundAlgorithm(unit) {
        Algorithm.call(this, unit);
    }
    GroundAlgorithm.prototype = new Algorithm();
    GroundAlgorithm.constructor = 'GroundAlgorithm';
    // ------------------------------------------

    // DEATH ALGORITM
    function DeathAlgorithm(unit) {
        Algorithm.call(this, unit);
    }
    DeathAlgorithm.prototype = new Algorithm();
    DeathAlgorithm.constructor = 'DeathAlgorithm';
    // ------------------------------------------

    // Вспомогательные функции для игры
    var tools = {
        /**
         * Возврощяет случайное число в диапазоне Min/Max
         * @param min
         * @param max
         * @returns {*}
         */
        randomInteger: function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        /**
         * Преобразует начальные буквы слова в заглавные
         * @param string
         * @returns {string}
         */
        capitalize: function (string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
    };
    // ------------------------------------------

    // ------------
    return {
        init: function ($gameContainer, setting) {
            var game = new Game($gameContainer, setting);

            game.run();
        }
    }
})();