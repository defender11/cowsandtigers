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
        var self = this;

        if (!devMode) {
            // Главный Loop
            setInterval(function () {
                self.scene.actionOnMap();
                self.scene.render();
            }, self.timeRender);
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
        this.plain = document.getElementById('b-game__plain');
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

        for(var objectName in this.mapObjects) {

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

                if (this.mapData[mapRowCol.row][mapRowCol.col] === undefined) {
                    
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

            if (this.mapData[mapRowCol.row][mapRowCol.col] === undefined) {
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


    Map.prototype.setCell = function (cell, newUnit) {
        // this.mapData[cell.positionRow][cell.positionCol] = newUnit;
        console.log(newUnit);
        
        this.mapData[cell.positionRow][cell.positionCol] = newUnit;
        
        newUnit.updateRowCol(cell);
    }


    Map.prototype.getCell = function (row,col) {
        return this.mapData[row][col];
    }
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
        this.positionRow = objPositionRow;
        this.positionCol = objPositionCol;
        this.foodType = this.getFoodType();
        this.health = 100;
        this.enemy = (className == 'cows' ? 'tigers' : null);

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
     * Получим цель ради которой живет Unit :)
     * @returns {*}
     */
    Unit.prototype.getFoodType = function () {
        switch(this.className) {
            case 'cows':
                return 'grass';
                break;
            case 'tigers':
                return 'cows';
                break;
            default:
                return null;
        }
    }


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


    Unit.prototype.updateRowCol = function (cell) {
        this.positionRow = cell.positionRow;
        this.positionCol = cell.positionCol;
    }
    // ------------------------------------------


    /**
     * Агоритм повидения объектов
     * @constructor
     */
    function Algorithm (unit) {
        this.unit = unit;
        this.neighboringCells = null;
    }

    // Главный мотиватор действий в игре
    Algorithm.prototype.action = function (map) {

        // Осмотримся
        // - Проверим соседнии клетки:
        //      - На границы карты
        //      - На хищников
        //      - На еду
        //  Если в соседней клетки есть еда, то она становиться приоритетом
        //  Если еды нет, но есть хищник, то бежим от него.
        //  Направление выберим произвольно исключая направления хищника, если он есть.

        // Проверим соседнии клетки
        var neighboringsCell = this.checkUnitNeighboringsCell(map);

        // Проверим вокруг еду
        // Если есть, вернет массив, иначе пустой массив
        var neighboringsCellWithFood = this.hasFood(neighboringsCell);

        // Проверим вокруг врагов(тигров)
        var neighboringsCellWithEnemies = this.hasEnemy(neighboringsCell);

        var data = {
            map: map,
            neighboringsCell: neighboringsCell,
            neighboringsCellWithFood: neighboringsCellWithFood,
            neighboringsCellWithEnemies: neighboringsCellWithEnemies
        }

        // Все необходимые данные полученны, сделаем ход
        this.move(data);
    };

    // Проверим соседнии клетки +
    Algorithm.prototype.checkUnitNeighboringsCell = function (map) {
        if (
            this.unit.className == 'tigers'
            ||
            this.unit.className == 'cows'
        ) {

            var cells = [
                {
                    direction: 'top',
                    exist: false,
                    content: ''
                },
                {
                    direction: 'topRight',
                    exist: false,
                    content: ''
                },
                {
                    direction: 'right',
                    exist: false,
                    content: ''
                },
                {
                    direction: 'rightBottom',
                    exist: false,
                    content: ''
                },
                {
                    direction: 'bottom',
                    exist: false,
                    content: ''
                },
                {
                    direction: 'leftBottom',
                    exist: false,
                    content: ''
                },
                {
                    direction: 'left',
                    exist: false,
                    content: ''
                },
                {
                    direction: 'leftTop',
                    exist: false,
                    content: ''
                }
            ];

            var unitPositionRow = parseInt(this.unit.positionRow);
            var unitPositionCol = parseInt(this.unit.positionCol);
            var mapDate = map.mapData;

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
            // console.log(mapDate);
            // console.log("PL:", unitPositionRow, unitPositionCol);

            // TOP Проверим ячейку с вверху +
            if ((unitPositionRow - 1) >= border.top) {
                cells[0].exist = true;
                cells[0].content = mapDate[unitPositionRow - 1][unitPositionCol];
            }


            // TOP_RIGHT Проверим ячейку с вверху-вправо +
            if (
                (unitPositionRow - 1) >= border.top
                && (unitPositionCol + 1) < border.topRight
            ) {
                cells[1].exist = true;
                cells[1].content = mapDate[unitPositionRow - 1][unitPositionCol + 1];
            }


            // RIGHT Проверим ячейку с вправо +
            if ((unitPositionCol + 1) < border.right) {
                cells[2].exist = true;
                cells[2].content = mapDate[unitPositionRow][unitPositionCol + 1];
            }


            // RIGHT_BOTTOM Проверим ячейку с вправо-внизу +
            if (
                (unitPositionRow + 1) < border.bottom
                &&
                (unitPositionCol + 1) < border.rightBottom
            ) {
                cells[3].exist = true;
                cells[3].content = mapDate[unitPositionRow + 1][unitPositionCol + 1];
            }


            // BOTTOM Проверим ячейку внизу +
            if ((unitPositionRow + 1) < border.bottom) {
                cells[4].exist = true;
                cells[4].content = mapDate[unitPositionRow + 1][unitPositionCol];
            }


            // LEFT_BOTTOM Проверим ячейку с слева-внизу +
            if (
                (unitPositionRow + 1) < border.bottom
                &&
                (unitPositionCol - 1) >= border.leftBottom
            ) {
                cells[5].exist = true;
                cells[5].content = mapDate[unitPositionRow + 1][unitPositionCol - 1];
            }


            // LEFT Проверим ячейку с слева +
            if ((unitPositionCol - 1) >= border.left) {
                cells[6].exist = true;
                cells[6].content = mapDate[unitPositionRow][unitPositionCol - 1];
            }


            // LEFT_TOP Проверим ячейку с лева-вверху +
            if (
                (unitPositionRow - 1) >= border.top
                &&
                (unitPositionCol - 1) >= border.left
            ) {
                cells[7].exist = true;
                cells[7].content = mapDate[unitPositionRow - 1][unitPositionCol - 1];
            }

            // console.log(this.unit);
            // console.log(cells);
            // console.log("ROW: " + unitPositionRow, "COL: " + unitPositionCol );

            return cells;
        } else {
            return false;
        }
    };


    /**
     * Посмотрим есть ли вокруг еда
     * @param neighboringsCell
     * @param foodType
     * @returns {*}
     */
    Algorithm.prototype.hasFood = function (neighboringsCell) {

        if (this.unit.foodType !== null) {

            // console.log("CLASSNAME: " + this.unit.className, "ROW: " + this.unit.positionRow, "COL: " + this.unit.positionCol);
            // console.log(neighboringsCell);
            
            var foodTypeRowCol = [];

            // Переберем полученный массив с ячейками находящимися рядом
            for (var i = 0; i < neighboringsCell.length; i++) {

                // Ячейка не выходит за границы
                if (neighboringsCell[i].exist) {

                    if (neighboringsCell[i].content.className == this.unit.foodType) {
                        foodTypeRowCol.push(
                            {
                                foodType: this.unit.foodType,
                                foodRow: neighboringsCell[i].content.positionRow,
                                foodCol: neighboringsCell[i].content.positionCol
                            }
                        );
                    }
                }
            }
            // console.log(foodTypeRowCol);
            return foodTypeRowCol;
        }

        return false;
    };

    Algorithm.prototype.hasEnemy = function (neighboringsCell) {
        if (this.unit.enemy !== null) {
            
            var enemyRowCol = [];

            // Переберем полученный массив с ячейками находящимися рядом
            for (var i = 0; i < neighboringsCell.length; i++) {

                // Ячейка не выходит за границы
                if (neighboringsCell[i].exist) {

                    if (neighboringsCell[i].content.className == this.unit.enemy) {
                        enemyRowCol.push(
                            {
                                foodType: this.unit.enemy,
                                foodRow: neighboringsCell[i].content.positionRow,
                                foodCol: neighboringsCell[i].content.positionCol
                            }
                        );
                    }
                }
            }
            // console.log(foodTypeRowCol);
            return enemyRowCol;
        }

        return false;

    };


    Algorithm.prototype.move = function (data) {
        // console.log("Algorithm work: " + this.unit.className);
        //
        // console.log(map, neighboringsCellWithFood, neighboringsCellWithEnemies);

    };


    Algorithm.prototype.makeAMove = function (map, row,col) {

        // Сохраним старый Unit
        var oldCell = this.unit;
        // Получим новый Unit
        var newCell = map.getCell(row,col);


        // На место старого Unit поставим траву
        map.setCell(oldCell, new Unit("ground", 3, oldCell.positionRow, oldCell.positionCol));
        // Для старого Unit зададим новые Row/Col
        map.setCell(newCell, this.unit);
    }

    // ------------------------------------------
    
    // COWS ALGORITM
    function CowsAlgorithm(unit) {
        Algorithm.call(this, unit);
    }
    CowsAlgorithm.prototype = new Algorithm();
    CowsAlgorithm.constructor = 'CowsAlgorithm';


    CowsAlgorithm.prototype.move = function (data) {
        console.log("Algorithm work: " + this.unit.className);

        // console.log(data);

        // Массив с картой              - data.map
        // Массив с соседними клетками  - data.neighboringsCell
        // Массив с травой              - data.neighboringsCellWithFood
        // Массив с тиграми             - data.neighboringsCellWithEnemies


        if (data.neighboringsCellWithFood.length > 0) {

            var cellFoodRandomRowCol = tools.randomInteger(0, data.neighboringsCellWithFood.length - 1);

            var row = data.neighboringsCellWithFood[cellFoodRandomRowCol].foodRow;
            var col = data.neighboringsCellWithFood[cellFoodRandomRowCol].foodCol;

            this.makeAMove(data.map, row,col);
        }
        // else {
        //     this.makeASimpleMove(data.map, data.neighboringsCell);
        // }

    };

    CowsAlgorithm.prototype.makeASimpleMove = function (map, neighboringsCell) {
        

        for (var cell in neighboringsCell ) {

            if (
                neighboringsCell[cell].exist
                &&
                neighboringsCell[cell].className != 'tigers'
            ) {

                console.log(neighboringsCell[cell]);
                
                // Сохраним старый Unit
                var oldCell = this;

                // На место старого Unit поставим траву
                map.setCell(oldCell, new Unit("ground", 3, oldCell.positionRow, oldCell.positionCol));

                console.log(neighboringsCell[cell].content);

                // Для старого Unit зададим новые Row/Col
                map.setCell(neighboringsCell[cell].content, this);

            }
        }
    }
    // ------------------------------------------

    // TIGERS ALGORITM
    function TigersAlgorithm(unit) {
        Algorithm.call(this, unit);
    }
    TigersAlgorithm.prototype = new Algorithm();
    TigersAlgorithm.constructor = 'TigersAlgorithm';


    TigersAlgorithm.prototype.move = function (data) {
        console.log("Algorithm work: " + this.unit.className);

        console.log(data);
    };
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