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
        devMode = setting.devMode || devMode;

        // Установим скорость игрового цикла
        this.timeRender = setting.timeRender || 500;
    }


    /**
     * GAME LOOP
     */
    Game.prototype.run = function () {

        // Создадим новую сцену
        var scene = new Scene(this.setting);

        // Создадим игровое поле на сцене
        scene.build();

        // return false;
        var self = this;

        if (!devMode) {
            // Главный Loop
            setInterval(function () {
                // if (scene.issetObjectOnMap()) {
                    scene.dieManager();
                    scene.actionOnMap();
                    scene.render();
                // }
                // else {
                //     self.gameOver();
                // }
            }, self.timeRender);
        } else {
            if (scene.issetObjectOnMap()) {
                scene.actionOnMap();
                scene.render();
            } else {
                self.gameOver();
            }
        }
    };

    Game.prototype.gameOver = function () {
        alert('Game Over');
        window.location.replace("/");
    };
    // ------------------------------------------


    /**
     * Игровая сцена
     * @param setting
     * @constructor
     */
    function Scene(setting) {
        this.plain = document.getElementById('b-game__plain');
        this.map = new Map(setting);
    }

    /**
     * Проинициализируем карту и заполним ее объектами
     */
    Scene.prototype.build = function () {
        this.map.init();
        this.map.generate();

        // console.log(this.map);
    };


    /**
     * Отрисовка заполненной карты
     */
    Scene.prototype.render = function () {
        var mapHTML = '';


        // Построим игровое поле
        for (var positionRow = 0; positionRow < this.map.row; positionRow++) {
            mapHTML += "<div class='row'>";
            for (var positionCol = 0; positionCol < this.map.col; positionCol++) {
                mapHTML += "<div class='cell'> " + this.map.getCell(positionRow, positionCol).show() + "</div>";
            }
            mapHTML += "</div>";
        }

        // Добавим собранную HTML карту в DOM
        this.plain.innerHTML = mapHTML;
    };


    /**
     * Действия всех объектов на карте
     */
    Scene.prototype.actionOnMap = function () {
        // console.log(this.map.objectsOnMap);

        for (var indexObject = 0; indexObject < this.map.objectsOnMap.length; indexObject++) {
            this.map.objectsOnMap[indexObject].action(this.map, indexObject);
        }
    };

    Scene.prototype.dieManager = function () {
        if (this.map.dieObjectsOnMap.length > 0) {
            for (var indexObject = 0; indexObject < this.map.dieObjectsOnMap.length; indexObject++) {
                this.map.dieObjectsOnMap[indexObject].action(this.map, indexObject);
            }
        }
    }

    /**
     * Проверим есть ли еще объекты в массиве для сущевствования игры
     * @returns {number}
     */
    Scene.prototype.issetObjectOnMap = function () {
        return this.map.issetObjectOnMap();
    };
    // ------------------------------------------


    /**
     * Класс работы с картой
     * @param setting
     * @constructor
     */
    function Map (setting) {
        this.mapData = [];

        // Объекты для карты
        this.mapObjects = setting.mapObjects;

        // Список объектов, которые задействованны на карте
        this.objectsOnMap = new Array();

        this.dieObjectsOnMap = new Array();

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

            // console.log(objectName);
            var objMin = this.mapObjects[objectName].min;
            var objMax = this.mapObjects[objectName].max;

            // Если объект являеться статикой,
            // то постаремся дать по максимуму значения min/max
            // для полного заполнения игрового поля
            if (objMin === null && objMax === null) {
                objMin = (this.row + this.col) * 2;
                objMax = (this.row + this.col) * 100;
            }

            // Получим кол-во объектов на карте
            var objCountOnMap = tools.randomInteger(objMin, objMax);

            // console.log("objectName[objCountOnMap]: " + objectName + " " + objCountOnMap);

            // Пройдемся по этому количевству
            for (var i = 0; i < objCountOnMap; i++) {

                var mapRowCol = this.getRandomRowColCoord();

                // console.log('mapRowColNormal: ', mapRowCol);

                if (!this.mapData[mapRowCol.row][mapRowCol.col]) {

                    var unitParam = {
                        id: objID,
                        className: objectName,
                        objPositionRow: mapRowCol.row,
                        objPositionCol: mapRowCol.col
                    };

                    var unit;
                    if (objectName == "ground") {
                        unit = new Entity(unitParam);
                    } else {
                        unit = new Unit(unitParam);
                    }

                    this.mapData[mapRowCol.row][mapRowCol.col] = unit;

                    if (objectName == 'cows' || objectName == 'tigers') {
                        this.addToObjectsOnMap(unit);
                    }
                } else {
                    var unitSetting = {
                        objID: objID,
                        objectName: objectName
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
                var unitParam = {
                    id: objectSetting.objID,
                    className: objectSetting.objectName,
                    objPositionRow: mapRowCol.row,
                    objPositionCol: mapRowCol.col
                };

                var unit;

                if (objectSetting.objectName == "ground") {
                    unit = new Entity(unitParam);
                } else {
                    unit = new Unit(unitParam);
                }

                this.mapData[mapRowCol.row][mapRowCol.col] = unit;

                if (objectSetting.objectName == 'cows' || objectSetting.objectName == 'tigers') {
                    this.addToObjectsOnMap(unit);
                }
                return false;
            } else {
                var unitSetting = {
                    objID: objectSetting.objID,
                    objectName: objectSetting.objectName
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


    Map.prototype.getNewRowColPosition = function () {
        console.log("------------------");
        var i = 0;
        do {
            var newPositionRowCol = this.getRandomRowColCoord();
            
            console.log("FOR NEW UNIT GENERETE NEW POSITION: TRY[" + (i++) + "] -> [R(" + newPositionRowCol.row + "):C(" + newPositionRowCol.col + ")]");
            
            if (this.mapData[newPositionRowCol.row][newPositionRowCol.col].className === "ground") {
                return newPositionRowCol;
            }
        } while (true);

    }

    /**
     * Зададим ячейку
     * @param oldUnit
     * @param newUnit
     */
    Map.prototype.setCell = function (oldUnit, newUnit) {

        this.mapData[oldUnit.positionRow][oldUnit.positionCol] = newUnit;

        this.mapData[oldUnit.positionRow][oldUnit.positionCol].updateRowCol(oldUnit);
    };


    /**
     * Получим ячейку
     * @param positionRow
     * @param positionCol
     * @returns {*}
     */
    Map.prototype.getCell = function (positionRow,positionCol) {
        return this.mapData[positionRow][positionCol];
    };


    /**
     * Удаляет Unit из массива ObjectOnMap,
     * в котором находиться инфо об игровых объектах
     * @param indexObject
     * @returns {*[]}
     */
    Map.prototype.addToObjectsOnMap = function (unit) {
        this.objectsOnMap.push(unit);
    };

    /**
     * Удаляет Unit из массива ObjectOnMap,
     * в котором находиться инфо об игровых объектах
     * @param indexObject
     * @returns {*[]}
     */
    Map.prototype.removeUnitFromObjectsOnMap = function (indexObject) {
        this.objectsOnMap.splice(indexObject, 1);
    };

    /**
     * Удаляет Unit из массива DieObjectsOnMap,
     * в котором находиться инфо об смерти units
     * @param indexObject
     * @returns {*[]}
     */
    Map.prototype.removeUnitFromDieObjectsOnMap = function (indexObject) {
        this.dieObjectsOnMap.splice(indexObject, 1);
    };


    /**
     * Обновим для Unit его RC(Row/Col) в массиве ObjectOnMap,
     * в котором находиться инфо об игровых объектах
     * @param unit
     * @param indexObject
     */
    Map.prototype.updateUnitRowColInObjectsOnMap = function (unit, indexObject) {
        this.objectsOnMap[indexObject].positionRow = unit.positionRow;
        this.objectsOnMap[indexObject].positionCol = unit.positionCol;
    };


    /**
     * Удалим объект
     * @param unit
     * @param indexObject
     */
    Map.prototype.killUnit = function (unit, indexObject) {

        this.removeUnitFromObjectsOnMap(indexObject);

        // На место старого Unit поставим могилку
        var unitParam = {
            id: 4,
            className: "death",
            objPositionRow: unit.positionRow,
            objPositionCol: unit.positionCol,
            dieUnitType: unit.className,
            dieUnitId: unit.id
        };

        var dieUnit = new DieUnit(unitParam);

        this.setCell(unit, dieUnit);

        this.addDieUnitToDieArray(dieUnit);

        // console.log(this.dieObjectsOnMap);
    };


    /**
     * Проверим есть ли еще объекты в массиве для сущевствования игры
     * @returns {number}
     */
    Map.prototype.issetObjectOnMap = function () {
        return (this.objectsOnMap.length > 0 ? 1 : 0);
    };


    // Проверим соседнии клетки +
    Map.prototype.checkUnitNeighboringsCell = function (unit) {
        if (
            unit.className == 'tigers'
            ||
            unit.className == 'cows'
        ) {

            var cells = [
                {
                    direction: 'top',
                    exist: false,
                    content: null
                },
                {
                    direction: 'topRight',
                    exist: false,
                    content: null
                },
                {
                    direction: 'right',
                    exist: false,
                    content: null
                },
                {
                    direction: 'rightBottom',
                    exist: false,
                    content: null
                },
                {
                    direction: 'bottom',
                    exist: false,
                    content: null
                },
                {
                    direction: 'leftBottom',
                    exist: false,
                    content: null
                },
                {
                    direction: 'left',
                    exist: false,
                    content: null
                },
                {
                    direction: 'leftTop',
                    exist: false,
                    content: null
                }
            ];

            var unitPositionRow = parseInt(unit.positionRow);
            var unitPositionCol = parseInt(unit.positionCol);
            // var mapDate = this.mapData;

            // Не забыть про границы карты
            var border = {
                top: 0,
                topRight: this.col,
                right: this.col,
                rightBottom: this.col,
                bottom: this.row,
                leftBottom: 0,
                left: 0,
                leftTop: 0
            }
            // console.log(mapDate);
            // console.log("PL:", unitPositionRow, unitPositionCol);

            // TOP Проверим ячейку с вверху +
            if ((unitPositionRow - 1) >= border.top) {
                cells[0].exist = true;
                cells[0].content = this.mapData[unitPositionRow - 1][unitPositionCol];
            }


            // TOP_RIGHT Проверим ячейку с вверху-вправо +
            if (
                (unitPositionRow - 1) >= border.top
                &&
                (unitPositionCol + 1) < border.topRight
            ) {
                cells[1].exist = true;
                cells[1].content = this.mapData[unitPositionRow - 1][unitPositionCol + 1];
            }


            // RIGHT Проверим ячейку с вправо +
            if ((unitPositionCol + 1) < border.right) {
                cells[2].exist = true;
                cells[2].content = this.mapData[unitPositionRow][unitPositionCol + 1];
            }


            // RIGHT_BOTTOM Проверим ячейку с вправо-внизу +
            if (
                (unitPositionRow + 1) < border.bottom
                &&
                (unitPositionCol + 1) < border.rightBottom
            ) {
                cells[3].exist = true;
                cells[3].content = this.mapData[unitPositionRow + 1][unitPositionCol + 1];
            }


            // BOTTOM Проверим ячейку внизу +
            if ((unitPositionRow + 1) < border.bottom) {
                cells[4].exist = true;
                cells[4].content = this.mapData[unitPositionRow + 1][unitPositionCol];
            }


            // LEFT_BOTTOM Проверим ячейку с слева-внизу +
            if (
                (unitPositionRow + 1) < border.bottom
                &&
                (unitPositionCol - 1) >= border.leftBottom
            ) {
                cells[5].exist = true;
                cells[5].content = this.mapData[unitPositionRow + 1][unitPositionCol - 1];
            }


            // LEFT Проверим ячейку с слева +
            if ((unitPositionCol - 1) >= border.left) {
                cells[6].exist = true;
                cells[6].content = this.mapData[unitPositionRow][unitPositionCol - 1];
            }


            // LEFT_TOP Проверим ячейку с лева-вверху +
            if (
                (unitPositionRow - 1) >= border.top
                &&
                (unitPositionCol - 1) >= border.left
            ) {
                cells[7].exist = true;
                cells[7].content = this.mapData[unitPositionRow - 1][unitPositionCol - 1];
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
     * Отфильтруем ячейки по типу unitType
     * @param neighboringsCell
     * @param unitType
     * @returns {Array}
     */
    Map.prototype.filterCellByType = function (neighboringsCell, unitType) {

        var arr = [];

        // Переберем полученный массив с ячейками находящимися рядом
        for (var i = 0; i < neighboringsCell.length; i++) {

            // Ячейка не выходит за границы
            if (neighboringsCell[i].exist) {

                if (neighboringsCell[i].content.className !== undefined) {

                    if (neighboringsCell[i].content.className == unitType) {
                        arr.push(neighboringsCell[i].content);
                    }

                }

            }
        }
        return arr;
    };


    /**
     * Получим индекс коровы при ее съедании
     * @param unit
     * @returns {number}
     */
    Map.prototype.getIndexFromObjectsOnMap = function (unit) {
        for (var indexObject = 0; indexObject < this.objectsOnMap.length; indexObject++) {
            if (
                this.objectsOnMap[indexObject].positionRow == unit.positionRow
                &&
                this.objectsOnMap[indexObject].positionCol == unit.positionCol
            ) {
                return indexObject;
            }
        }
    }

    //MAP DEATH MANAGE
    /**
     * Получим индекс коровы при ее съедании
     * @param unit
     * @returns {number}
     */
    Map.prototype.getIndexFromDieObjectsOnMap = function (unit) {
        for (var indexObject = 0; indexObject < this.dieObjectsOnMap.length; indexObject++) {
            if (
                this.dieObjectsOnMap[indexObject].positionRow == unit.positionRow
                &&
                this.dieObjectsOnMap[indexObject].positionCol == unit.positionCol
            ) {
                return indexObject;
            }
        }
    }

    Map.prototype.addDieUnitToDieArray = function (unit) {
        this.dieObjectsOnMap.push(unit);
    }
    // ------------------------------------------

    function Entity(param) {
        this.id = param.id;
        this.className = param.className;
        this.positionRow = param.objPositionRow;
        this.positionCol = param.objPositionCol;
    }


    /**
     * Обновим Row/Col объекта
     * @param unit
     */
    Entity.prototype.updateRowCol = function (unit) {
        this.positionRow = unit.positionRow;
        this.positionCol = unit.positionCol;
    };


    /**
     * Вывод HTML объекта
     * @returns {string}
     */
    Entity.prototype.show = function () {
        return "<div class='b-unit "+this.className+"'></div>";
    };
    // ------------------------------------------

    function DieUnit(param) {
        Entity.call(this, param);

        this.indexObject = param.indexObject;

        this.algoritms = new DeathAlgorithm();

        this.dieUnitType = param.dieUnitType;
        this.dieUnitId = param.dieUnitId;

        this.unitResurectionInterval = 3;
        this.unitResurectionIntervalLeft = 0;

        // this.soundDie = new GameSounds("audio/die_" + this.className + ".mp3");
    }

    DieUnit.prototype = Entity;
    DieUnit.constructor = DieUnit;


    DieUnit.prototype.setIndexObject = function (indexObject) {
        this.indexObject = indexObject;
    };


    /**
     * Разные действия объекта
     */
    DieUnit.prototype.action = function (map, indexObject) {
        this.algoritms.act(this, map, indexObject);
    };


    /**
     * Обновим Row/Col объекта
     * @param unit
     */
    DieUnit.prototype.updateRowCol = function (unit) {
        this.positionRow = unit.positionRow;
        this.positionCol = unit.positionCol;
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
    function Unit(param) {
        Entity.call(this, param);

        this.foodType = this.getFoodType();
        this.health = 100;
        this.enemy = (param.className == 'cows' ? 'tigers' : null);

        this.foodInformation = {
            isEat: false,
            positionRow: null,
            positionCol: null,
            indexObject: null
        }

        this.soundEat = new GameSounds("audio/eat_" + this.className + ".mp3");

        // Выберим алгоритм поведения для объекта
        this.algoritms = this.selectAlgorithm(param.id);

    }

    Unit.prototype = Entity;
    Unit.constructor = Unit;

    /**
     * Вывод HTML объекта
     * @returns {string}
     */
    Unit.prototype.show = function () {
        var unitHealth = "";

        if (this.className == 'cows' || this.className == 'tigers') {
            var classHealthColor = this.getClassHealthColor(this.health);

            unitHealth += "<div class='b-unit__health'><div class='b-healt__indicator " + classHealthColor + "' style='width: "+this.health+"%;'></div></div>";
        }

        return "<div class='b-unit "+this.className+"'>" + unitHealth + "</div>";
    };


    /**
     * Получим цвет(класс) жизни unit
     * @param value
     * @returns {string}
     */
    Unit.prototype.getClassHealthColor = function (value) {

        if (parseInt(value) >= 90 && parseInt(value) <= 100) {
            return "b-healt__indicator_life-good";
        }
        if (parseInt(value) >= 75 && parseInt(value) <= 90) {
            return "b-healt__indicator_life-above-average";
        }
        if (parseInt(value) >= 50 && parseInt(value) <= 75) {
            return "b-healt__indicator_life-average";
        }
        if (parseInt(value) >= 25 && parseInt(value) <= 50) {
            return "b-healt__indicator_life-below-average";
        }
        if (parseInt(value) >= 0 && parseInt(value) <= 25) {
            return "b-healt__indicator_life-low";
        }

    };


    /**
     * Разные действия объекта
     */
    Unit.prototype.action = function (map, indexObject) {
        this.algoritms.act(this, map, indexObject);
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
    };


    /**
     * Вернет для объекта его алгоритм поведения в игре
     * @param id
     * @returns {*}
     */
    Unit.prototype.selectAlgorithm = function (id) {
        /**
         * 0 - grass
         * 1 - cows
         * 2 - tigers
         * 3 - ground
         * 4 - death
         */

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
        }
    };


    // Съеден
    Unit.prototype.isEaten = function () {
        return this.foodInformation.isEat;
    }

    // Съеден
    Unit.prototype.eaten = function (unit, foodIndex) {
        this.foodInformation.isEat = true;
        this.foodInformation.positionRow = unit.positionRow;
        this.foodInformation.positionCol = unit.positionCol;
        this.foodInformation.indexObject = foodIndex;
        this.foodInformation.className = unit.className;
        this.foodInformation.id = unit.id;
    }

    // RESET Съеден
    Unit.prototype.resetEaten = function () {
        return this.foodInformation.isEat = false;
        this.foodInformation.positionRow = null;
        this.foodInformation.positionCol = null;
        this.foodInformation.indexObject = null;
    }

    Unit.prototype.addHealth = function (value) {
        this.health += parseInt(value);
    };
    Unit.prototype.subHealth = function (value) {
        this.health -= parseInt(value);
    };
    // ------------------------------------------


    function Algorithm() {}

    Algorithm.prototype.addHealthValue = 5;
    Algorithm.prototype.subHealthValue = 3;

    Algorithm.prototype.getAllNeighboringsCellInformation = function (unit, map, indexObject) {

        // Проверим соседнии клетки
        var neighboringsCell = map.checkUnitNeighboringsCell(unit);

        /**
         * Проверим вокруг еду
         * Если есть, вернет массив, иначе пустой массив
         */
        var neighboringsCellWithFood = map.filterCellByType(neighboringsCell, unit.foodType);

        if (unit.enemy !== null) {
            // TODO у тигра нет врагов
            /**
             * Проверим вокруг врагов(тигров)
             * Если есть, вернет массив, иначе пустой массив
             * */
            var neighboringsCellWithEnemies = map.filterCellByType(neighboringsCell, unit.enemy);
        }

        /**
         * Проверим вокруг свободные ячейки куда можно переместиться
         * Если есть, вернет массив, иначе пустой массив
         */
        var neighboringsCellWithGround = map.filterCellByType(neighboringsCell, "ground");

        return {
            neighboringsCell: neighboringsCell,
            neighboringsCellWithFood: neighboringsCellWithFood,
            neighboringsCellWithEnemies: neighboringsCellWithEnemies,
            neighboringsCellWithGround: neighboringsCellWithGround
        };
    };
    // ------------------------------------------
    
    // COWS ALGORITM
    function CowsAlgorithm() {}

    CowsAlgorithm.prototype = new Algorithm();
    CowsAlgorithm.constructor = CowsAlgorithm;

    CowsAlgorithm.prototype.act = function (unit, map, indexObject) {

        var data = this.getAllNeighboringsCellInformation(unit, map, indexObject);

        /**
         * data:
         * Массив с Соседними клетками  - data.neighboringsCell
         * Массив с Травой              - data.neighboringsCellWithFood
         * Массив с Тиграми             - data.neighboringsCellWithEnemies
         * Массив с Землёй              - data.neighboringsCellWithGround
         */

        if (unit.health > 0) {
            // Проверим есть рядом Тигры
            if (data.neighboringsCellWithEnemies.length > 0) {
                //Если есть свободные клетки
                if (data.neighboringsCellWithGround.length > 0) {
                    // Бежим от Тигра
                    this.moveAwayFromEnemy(map, unit, data.neighboringsCellWithGround, indexObject);
                }
                //Если есть рядом трава едим ее и убегаем
                if (data.neighboringsCellWithFood.length > 0) {
                    this.moveToFood(map, unit, data.neighboringsCellWithFood, indexObject);
                }
            }
            // Проверим есть рядом еда
            else if (data.neighboringsCellWithFood.length > 0) {
                this.moveToFood(map, unit, data.neighboringsCellWithFood, indexObject);
            }
            else {
                this.moveFree(map, unit, data.neighboringsCellWithGround, indexObject);
            }
        } else {
            map.killUnit(unit, indexObject);
        }
    };

    /**
     * Бежим от тигра +
     * @param map
     * @param unit
     * @param neighboringsCellWithGround
     * @param indexObject
     */
    CowsAlgorithm.prototype.moveAwayFromEnemy = function (map, unit, neighboringsCellWithGround, indexObject) {

        // Получим произволный индекс в массиве
        var cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithGround.length - 1);

        // Сохраним старый Unit и его RC (Row/Col)
        var oldUnit = unit;

        var unitParam = {
            id: 3,
            className: "ground",
            objPositionRow: unit.positionRow,
            objPositionCol: unit.positionCol
        };

        // На место старого Unit поставим ground
        map.setCell(unit, new Entity(unitParam));

        // Для старого Unit зададим новые Row/Col и запишим в новую ячейку корову
        map.setCell(neighboringsCellWithGround[cellRandomRowCol], oldUnit);

        // Обновим Row/Col в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithGround[cellRandomRowCol], indexObject);

        // Т.к мы убегаем и не едим траву, отнимим немного здоровья
        unit.subHealth(this.subHealthValue);
    };

    /**
     * Едим траву
     * @param map
     * @param unit
     * @param neighboringsCellWithFood
     * @param indexObject
     */
    CowsAlgorithm.prototype.moveToFood = function (map, unit, neighboringsCellWithFood, indexObject) {

        // unit.soundEat.stop();

        // Получим произволный индекс в массиве еды
        var cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithFood.length - 1);

        var oldUnit = unit;

        var unitParam = {
            id: 3,
            className: "ground",
            objPositionRow: unit.positionRow,
            objPositionCol: unit.positionCol
        };

        // На место старого Unit поставим ground
        map.setCell(unit, new Entity(unitParam));

        // Для старого Unit зададим новые Row/Col
        map.setCell(neighboringsCellWithFood[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithFood[cellRandomRowCol], indexObject);


        // Добавим в менеджер смертей траву
        var unitParam = {
            id: 4,
            className: "death",
            objPositionRow: unit.positionRow,
            objPositionCol: unit.positionCol,
            dieUnitType: "grass",
            dieUnitId: 0
        };

        var dieUnit = new DieUnit(unitParam);

        map.addDieUnitToDieArray(dieUnit);

        // При поглащении травы прибавим жизни, ограничим значением 100
        if (unit.health < 100 ) {

            if (unit.health > 90) {
                unit.addHealth(100-unit.health);
            } else {
                unit.addHealth(this.addHealthValue);
            }

        }

        // unit.soundEat.play();
    }

    /**
     * Свободное перемещение
     * @param map
     * @param unit
     * @param neighboringsCellWithGround
     * @param indexObject
     */
    CowsAlgorithm.prototype.moveFree = function (map, unit, neighboringsCellWithGround, indexObject) {
        // unit.soundEat.stop();

        // console.log(unit);
        // console.log(neighboringsCellWithGround);

        // Получим произволный индекс в массиве с землей
        var cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithGround.length - 1);

        var oldUnit = unit;

        var unitParam = {
            id: 3,
            className: "ground",
            objPositionRow: unit.positionRow,
            objPositionCol: unit.positionCol
        };

        // На место старого Unit поставим ground
        map.setCell(unit, new Entity(unitParam));

        // Для старого Unit зададим новые Row/Col
        map.setCell(neighboringsCellWithGround[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithGround[cellRandomRowCol], indexObject);

        unit.subHealth(this.subHealthValue);

        // unit.soundEat.play();
    }
    // ------------------------------------------

    // TIGERS ALGORITM
    function TigersAlgorithm() {}

    TigersAlgorithm.prototype = new Algorithm();
    TigersAlgorithm.constructor = TigersAlgorithm;

    TigersAlgorithm.prototype.act = function (unit, map, indexObject) {

        var data = this.getAllNeighboringsCellInformation(unit, map, indexObject);

        /**
         * data:
         * Массив с Картой              - data.map
         * Массив с Соседними клетками  - data.neighboringsCell
         * Массив с Травой              - data.neighboringsCellWithFood
         * Массив с Тиграми             - data.neighboringsCellWithEnemies
         * Массив с Землёй              - data.neighboringsCellWithGround
         */

        if (unit.health > 0) {
        //     // Проверим есть рядом еда
            if (data.neighboringsCellWithFood.length > 0) {
                this.moveToFood(map, unit, data.neighboringsCellWithFood, indexObject);
            }
            else if (data.neighboringsCellWithGround.length > 0) {
                this.moveFree(map, unit, data.neighboringsCellWithGround, indexObject);
            }
        }
        else {
            map.killUnit(unit, indexObject);
        }
    };

    /**
     * Едим корову
     * @param map
     * @param unit
     * @param neighboringsCellWithFood
     * @param indexObject
     */
    TigersAlgorithm.prototype.moveToFood = function (map, unit, neighboringsCellWithFood, indexObject) {

        // unit.soundEat.stop();

        // Получим произволный индекс в массиве коров
        var cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithFood.length -1);

        // Эта ячейка являеться коровой, т.е ЕДОЙ!!!
        // neighboringsCellWithFood[cellRandomRowCol]
        // unit.eaten(true, neighboringsCellWithFood[cellRandomRowCol]);

        // Получим index съеденой коровы из массива objectsOnMap
        var foodIndex = map.getIndexFromObjectsOnMap(neighboringsCellWithFood[cellRandomRowCol]);

        // Пометили тигра что он съел корову 
        unit.eaten(neighboringsCellWithFood[cellRandomRowCol], foodIndex);

        var oldUnit = unit;

        var unitParam = {
            id: 3,
            className: "ground",
            objPositionRow: unit.positionRow,
            objPositionCol: unit.positionCol
        };

        // На место старого Unit поставим ground
        map.setCell(unit, new Entity(unitParam));

        // Для тигра зададим новые Row/Col
        map.setCell(neighboringsCellWithFood[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithFood[cellRandomRowCol], indexObject);

        // Удалим корову из игрового массива
        map.removeUnitFromObjectsOnMap(foodIndex);

        delete neighboringsCellWithFood[cellRandomRowCol];

        // При поглащении травы прибавим жизни, ограничим значением 100
        if (unit.health < 100 ) {

            if (unit.health > 90) {
                unit.addHealth(100-unit.health);
            } else {
                unit.addHealth(this.addHealthValue);
            }

        }

        // unit.soundEat.play();
    }

    /**
     * Свободное перемещение
     * @param map
     * @param unit
     * @param neighboringsCellWithGround
     * @param indexObject
     */
    TigersAlgorithm.prototype.moveFree = function (map, unit, neighboringsCellWithGround, indexObject) {
        // unit.soundEat.stop();
        
        var oldUnit = unit;
        
        // unit.foodInformation.indexObject

        // Проверим убил ли данный тигр только что корову,
        // если да, то на след. шаге поставим на его место табличкуunit.foodInformation.indexObject
        if (unit.isEaten()) {
            
            var unitParam = {
                id: 4,
                className: "death",
                objPositionRow: unit.foodInformation.positionRow,
                objPositionCol: unit.foodInformation.positionCol,
                dieUnitType: unit.foodInformation.className,
                dieUnitId: unit.foodInformation.id
            };

            var dieUnit = new DieUnit(unitParam);

            dieUnit.setIndexObject(unit.foodInformation.indexObject);

            map.addDieUnitToDieArray(dieUnit);

            map.setCell(unit, dieUnit);
        } else {

            var unitParam = {
                id: 3,
                className: "ground",
                objPositionRow: unit.positionRow,
                objPositionCol: unit.positionCol
            };

            // На место старого Unit поставим ground
            map.setCell(unit, new Entity(unitParam));
        }

        oldUnit.resetEaten();

        oldUnit.subHealth(this.subHealthValue);

        // Получим произволный индекс в массиве с землей
        var cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithGround.length - 1);

        // Для старого Unit зададим новые Row/Col
        map.setCell(neighboringsCellWithGround[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithGround[cellRandomRowCol], indexObject);

        // unit.soundEat.play();
    }

    // ------------------------------------------

    // GRASS ALGORITM
    function GrassAlgorithm() {}
    GrassAlgorithm.prototype = Algorithm;
    GrassAlgorithm.constructor = GrassAlgorithm;

    GrassAlgorithm.prototype.act = function () {

    }
    // ------------------------------------------

    // GROUND ALGORITM
    function GroundAlgorithm() {}
    GroundAlgorithm.prototype = new Algorithm();
    GroundAlgorithm.constructor = GroundAlgorithm;
    // ------------------------------------------

    // DEATH ALGORITM
    function DeathAlgorithm() {

    }
    
    DeathAlgorithm.prototype.act = function (deathUnit, map, indexObject) {

        if (deathUnit.unitResurectionIntervalLeft < deathUnit.unitResurectionInterval) {
            deathUnit.unitResurectionIntervalLeft++;
        } else {

            var newPosition = map.getNewRowColPosition();

            // console.log(newPositionRowCol);
            
            var unitParam = {
                id: deathUnit.dieUnitId,
                className: deathUnit.dieUnitType,
                objPositionRow: newPosition.row,
                objPositionCol: newPosition.col,
            };

            var newUnit = new Unit(unitParam);

            var dieObjectsOnMapIndex = map.getIndexFromDieObjectsOnMap(deathUnit);

            var entityParam = {
                id: 3,
                className: "ground",
                objPositionRow: deathUnit.positionRow,
                objPositionCol: deathUnit.positionCol
            };

            // На место старого Unit поставим ground
            map.setCell(deathUnit, new Entity(entityParam));

            map.setCell(newUnit, newUnit);

            map.addToObjectsOnMap(newUnit);

            map.removeUnitFromDieObjectsOnMap(dieObjectsOnMapIndex);
        }
    }
    // ------------------------------------------

    // AUDIO IN GAME
    function GameSounds(file) {
        this.sound = new Audio(file);
    }
    GameSounds.prototype = new Audio();
    GameSounds.constructor = GameSounds;
    GameSounds.prototype.play = function () {
        this.sound.play();
    };
    // Функция stop для Audio:
    GameSounds.prototype.stop = function() {
        this.sound.pause();
        this.sound.currentTime = 0.0;
    };
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
        }
    };
    // ------------------------------------------

    // ------------
    return {
        init: function (setting) {
            var game = new Game(setting);

            game.run();
        }
    }
})();