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

    /**
     * Игровая сцена
     * @param setting
     * @constructor
     */
    function Scene(setting) {
        this.gameContainer = document.getElementById(setting.gameContainerID);
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
        var $gameContainer = this.gameContainer;
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
        $gameContainer.querySelectorAll('.plain')[0].innerHTML = mapHTML;
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
     * Прототип работы с картой
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
        // object ID
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
                    var object = new ObjectOnMap(objectName, objID, mapRowCol.row, mapRowCol.col);

                    this.mapData[mapRowCol.row][mapRowCol.col] = object;

                    if (!isStaticObject) {
                        this.objectsOnMap.push(object);
                    }
                } else {
                    var objectSetting = {
                        objID: objID,
                        objectName: objectName,
                        isStaticObject: isStaticObject
                    };
                    this.tryNewGenerate(objectSetting, objCountOnMap);
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
                var object = new ObjectOnMap(objectSetting.objectName, objectSetting.objID, mapRowCol.row, mapRowCol.col);

                this.mapData[mapRowCol.row][mapRowCol.col] = object;

                if (!objectSetting.isStaticObject) {
                    this.objectsOnMap.push(object);
                }

                return false;
            } else {
                var objectSetting = {
                    objID: objectSetting.objID,
                    objectName: objectSetting.objectName,
                    isStaticObject: objectSetting.isStaticObject
                };
                return this.tryNewGenerate(objectSetting, count - 1);
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
    function ObjectOnMap(className, id, objPositionRow, objPositionCol) {
        this.id = id;
        this.className = className;
        this.objectPositionRow = objPositionRow || 0;
        this.objectPositionCol = objPositionCol || 0;

        // Выберим алгоритм поведения для объекта
        this.objectAlgoritms = this.selectAlgorithm(this.id) || {};
        
        console.log(this);
    }
    /**
     * Вывод HTML объекта
     * @returns {string}
     */
    ObjectOnMap.prototype.show = function () {
        return "<div class='"+this.className+"'></div>";
    };
    /**
     * Разные действия объекта
     */
    ObjectOnMap.prototype.action = function (map) {
        if (this.objectAlgoritms) {
            this.objectAlgoritms.move(this, map);
        }
    };
    /**
     * Вернет для объекта его алгоритм поведения в игре
     * @param id
     * @returns {*}
     */
    ObjectOnMap.prototype.selectAlgorithm = function (id) {
        /**
         * 0 - grass
         * 1 - cows
         * 2 - tigers
         * 3 - ground
         * 4 - death
         */

        // var objectsAlgoritm = [
        //     new GrassAlgorithm(),
        //     new CowsAlgorithm(),
        //     new TigersAlgorithm(),
        //     new GroundAlgorithm()
        // ];

        switch (parseInt(id)) {
            case 0:
                return new GrassAlgorithm();
                break;
            case 1:
                return new CowsAlgorithm();
                break;
            case 2:
                return new TigersAlgorithm();
                break;
            case 3:
                return new GroundAlgorithm();
                break;
            case 4:
                return new DeathAlgorithm();
                break;
        }
    };
    // ------------------------------------------

    /**
     * Агоритм повидения объектов
     * @constructor
     */
    function Algorithm (objectClassName) {}
    Algorithm.prototype.init = function () {

        // Проверим и вернем координаты хотя бы одной безопасной клетки
        // return {
        //  safe: true, false;
        //  safeCellCoordinates: [{row: 0, cell: 0},{row: 1, cell: 0}];
        // }
        var neighborsCellReport = this.isAnyNeighborsCellSafe(obj, map);

        // if (neighborsCellReport.safe) {
        //     this.move(obj, map, neighborsCellReport.safeCellCoordinates);
        // }
    };
    Algorithm.prototype.isAnyNeighborsCellSafe = function (obj, map) {


        var elsCoord = [];

        for (var i = 0; i < obj.coordinate.length; i++) {

            // Доделать и проверить, не правильно определяет границы
            var safeWays = this.doesNotGoBeyondBorders(obj.coordinate[i], map);

            console.log(safeWays);
        }

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
    // Проверим не зашли ли за границы
    Algorithm.prototype.doesNotGoBeyondBorders = function (elementCoord, map) {
        // Не забыть про границы карты
        var leftTopAngle = 0,
            left = 0,
            right = map.cell,
            top = 0,
            bottom = map.row,
            rightTopAngle = map.cell,
            leftBottomAngle = map.row,
            rightBottomAngle = map.cell;

        var safeAngle = {
            top: false,
            topRight: false,
            right: false,
            rightBottom: false,
            bottom: false,
            leftBottom: false,
            left: false,
            leftTop: false
        };

        // Проверим ячейку с вверху
        if ((elementCoord.col - 1) >= top) {
            safeAngle.top = true;
        }
        // Проверим ячейку с вверху-вправо
        if ((elementCoord.row + 1 ) >= top && (elementCoord.col - 1) <= rightTopAngle) {
            safeAngle.topRight = true;
        }
        // Проверим ячейку с вправо
        if ((elementCoord.row + 1 ) <= rightTopAngle) {
            safeAngle.right = true;
        }
        // Проверим ячейку с вправо-внизу
        if ((elementCoord.row + 1 ) <= rightTopAngle && (elementCoord.col + 1) <=  rightBottomAngle) {
            safeAngle.rightBottom = true;
        }
        // Проверим ячейку внизу
        if ((elementCoord.col + 1) <=  bottom) {
            safeAngle.bottom = true;
        }
        // Проверим ячейку с слева-внизу
        if ((elementCoord.row - 1 ) <= leftBottomAngle && (elementCoord.col + 1) <=  bottom) {
            safeAngle.leftBottom = true;
        }
        // Проверим ячейку с слева
        if ((elementCoord.row - 1 ) <= left) {
            safeAngle.left = true;
        }
        // Проверим ячейку с лева-вверху
        if ((elementCoord.row - 1 ) <= left && (elementCoord.col - 1 ) <= top) {
            safeAngle.leftTop = true;
        }

        return safeAngle;
    };
    Algorithm.prototype.findSafeWays = function (obj, map) {

    };
    Algorithm.prototype.move = function (obj, map) {
        console.log("Algorithm work");
        // console.log(obj);
        // console.log(map);


    };
    // ------------------------------------------
    
    // COWS ALGORITM
    function CowsAlgorithm() {
        console.log('CowsAlgorithm');
    }
    CowsAlgorithm.prototype = new Algorithm();
    CowsAlgorithm.constructor = 'CowsAlgorithm';
    // ------------------------------------------

    // TIGERS ALGORITM
    function TigersAlgorithm() {
        console.log('TigersAlgorithm');
    }
    TigersAlgorithm.prototype = new Algorithm();
    TigersAlgorithm.constructor = 'TigersAlgorithm';
    // ------------------------------------------

    // GRASS ALGORITM
    function GrassAlgorithm() {
        console.log('GrassAlgorithm');
    }
    GrassAlgorithm.prototype = new Algorithm();
    GrassAlgorithm.constructor = 'GrassAlgorithm';
    // ------------------------------------------

    // GROUND ALGORITM
    function GroundAlgorithm() {
        console.log('GroundAlgorithm');
    }
    GroundAlgorithm.prototype = new Algorithm();
    GroundAlgorithm.constructor = 'GroundAlgorithm';
    // ------------------------------------------

    // DEATH ALGORITM
    function DeathAlgorithm() {
        console.log('DeathAlgorithm');
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