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
        // return false;
        var self = this;

        if (!devMode) {
            // Главный Loop
            setInterval(function () {
                if (self.scene.issetObjectOnMap()) {

                    console.log(self.scene.issetObjectOnMap());
                    
                    self.scene.actionOnMap();
                    self.scene.render();

                } else {

                    self.gameOver();

                }
            }, self.timeRender);
        } else {
            if (self.scene.issetObjectOnMap()) {

                self.scene.actionOnMap();
                self.scene.render();

            } else {
                self.gameOver();
            }
        }
    };

    Game.prototype.gameOver = function () {
        alert('Game Over');
        window.location.replace("/");
    }
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

        console.log(this.map);
        
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
        // console.log(this.map.objectsOnMap);

        for (var indexObject = 0; indexObject < this.map.objectsOnMap.length; indexObject++) {
            if (
                this.map.objectsOnMap[indexObject].className == "cows"
                ||
                this.map.objectsOnMap[indexObject].className == "tigers"
            ) {

                var unit = this.map.objectsOnMap[indexObject];
                unit.action(this.map, indexObject);

            }
        }
    };

    Scene.prototype.issetObjectOnMap = function () {
        return this.map.issetObjectOnMap();
    }
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
            }

            // Получим кол-во объектов на карте
            var objCountOnMap = tools.randomInteger(objMin, objMax);

            // console.log("objectName[objCountOnMap]: " + objectName + " " + objCountOnMap);

            // Пройдемся по этому количевству
            for (var i = 0; i < objCountOnMap; i++) {

                var mapRowCol = this.getRandomRowColCoord();

                // console.log('mapRowColNormal: ', mapRowCol);

                if (!this.mapData[mapRowCol.row][mapRowCol.col]) {

                    var unit = new Unit(objectName, objID, mapRowCol.row, mapRowCol.col);

                    this.mapData[mapRowCol.row][mapRowCol.col] = unit;

                    if (objectName == 'cows' || objectName == 'tigers') {
                        this.objectsOnMap.push(unit);
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
                var unit = new Unit(objectSetting.objectName, objectSetting.objID, mapRowCol.row, mapRowCol.col);

                this.mapData[mapRowCol.row][mapRowCol.col] = unit;

                if (objectSetting.objectName == 'cows' || objectSetting.objectName == 'tigers') {
                    this.objectsOnMap.push(unit);
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


    Map.prototype.setCell = function (oldUnit, newUnit) {

        this.mapData[oldUnit.positionRow][oldUnit.positionCol] = newUnit;

        newUnit.updateRowCol(oldUnit);
    }


    Map.prototype.getCell = function (row,col) {
        return this.mapData[row][col];
    }


    /**
     * Удаляет Unit из массива ObjectOnMap,
     * в котором находиться инфо об игровых объектах
     * @param indexObject
     * @returns {*[]}
     */
    Map.prototype.removeUnitFromObjectsOnMap = function (indexObject) {
        // Второй параметр - число элементов, которые необходимо удалить
        return this.objectsOnMap.splice(indexObject, 1);
    }

    /**
     * Обновим для Unit его RC(Row/Col) в массиве ObjectOnMap,
     * в котором находиться инфо об игровых объектах
     * @param unit
     * @param indexObject
     */
    Map.prototype.updateUnitRowColInObjectsOnMap = function (unit, indexObject) {
        this.objectsOnMap[indexObject].positionRow = unit.positionRow;
        this.objectsOnMap[indexObject].positionCol = unit.positionCol;
    }

    /**
     * Удалим объект
     * @param unit
     * @param indexObject
     */
    Map.prototype.killUnit = function (unit, indexObject) {
        console.log(this.removeUnitFromObjectsOnMap(indexObject));
        if (this.removeUnitFromObjectsOnMap(indexObject)) {
            // На место старого Unit поставим могилку
            this.setCell(unit, new Unit("death", 4, unit.positionRow, unit.positionCol), indexObject);
            console.log("Kill: " + unit.className);
        }
    }

    Map.prototype.issetObjectOnMap = function () {
        return (this.objectsOnMap.length > 0);
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
        this.enemy = (className == 'cows' ? 'tigers' : 'cows');

        this.soundEat = new GameSounds("audio/eat_" + this.className + ".mp3");

        // Выберим алгоритм поведения для объекта
        this.algoritms = this.selectAlgorithm();
    }


    /**
     * Вывод HTML объекта
     * @returns {string}
     */
    Unit.prototype.show = function () {
        var unitHealth = "";

        if (this.className == 'cows' || this.className == 'tigers') {
            var classHealthColor = this.getClassHealthColor(this.health);


            unitHealth += "<div class='b-unit__health'>"
                + "<div class='b-healt__indicator " + classHealthColor + "' style='width: "+this.health+"%;'></div>"
                + "</div>";
        }

        return "<div class='b-unit "+this.className+"'>" + unitHealth + "</div>";
    };


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
        if (this.algoritms) {
            this.algoritms.action(this, map, indexObject);
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


    Unit.prototype.updateRowCol = function (unit) {
        this.positionRow = unit.positionRow;
        this.positionCol = unit.positionCol;
    }

    Unit.prototype.addHealth = function (value) {
        this.health = this.health + parseInt(value);
    }
    Unit.prototype.subHealth = function (value) {
        this.health = this.health - parseInt(value);
    }
    // ------------------------------------------


    /**
     * Агоритм повидения объектов
     * @constructor
     */
    function Algorithm () {
        this.addHealth = 10;
        this.subHealth = 5;
    }

    // Главный мотиватор действий в игре
    Algorithm.prototype.action = function (unit, map, indexObject) {

        // Проверим соседнии клетки
        var neighboringsCell = this.checkUnitNeighboringsCell(map, unit);


        /**
         * Проверим вокруг еду
         * Если есть, вернет массив, иначе пустой массив
         */
        var neighboringsCellWithFood = this.filterCellByType(neighboringsCell, unit.foodType);

        /**
        * Проверим вокруг врагов(тигров)
        * Если есть, вернет массив, иначе пустой массив
        * */
        var neighboringsCellWithEnemies = this.filterCellByType(neighboringsCell, unit.enemy);

        /**
         * Проверим вокруг свободные ячейки куда можно переместиться
         * Если есть, вернет массив, иначе пустой массив
         */
        var neighboringsCellWithGround = this.filterCellByType(neighboringsCell, "ground");

        var data = {
            unit: unit,
            map: map,
            neighboringsCell: neighboringsCell,
            neighboringsCellWithFood: neighboringsCellWithFood,
            neighboringsCellWithEnemies: neighboringsCellWithEnemies,
            neighboringsCellWithGround: neighboringsCellWithGround
        }

        // Все необходимые данные полученны, сделаем ход
        this.move(data, indexObject);
    };

    // Проверим соседнии клетки +
    Algorithm.prototype.checkUnitNeighboringsCell = function (map, unit) {
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
     * Отфильтруем ячейки по типу unitType
     * @param neighboringsCell
     * @param unitType
     * @returns {Array}
     */
    Algorithm.prototype.filterCellByType = function (neighboringsCell, unitType) {

        var arr = [];

        // Переберем полученный массив с ячейками находящимися рядом
        for (var i = 0; i < neighboringsCell.length; i++) {

            // Ячейка не выходит за границы
            if (neighboringsCell[i].exist) {

                if (neighboringsCell[i].content.className !== null) {
                    if (neighboringsCell[i].content.className == unitType) {
                        arr.push(neighboringsCell[i].content);
                    }
                }

            }
        }
        return arr;
    };
    // ------------------------------------------
    
    // COWS ALGORITM
    function CowsAlgorithm() {}
    CowsAlgorithm.prototype = new Algorithm();
    CowsAlgorithm.constructor = 'CowsAlgorithm';


    CowsAlgorithm.prototype.move = function (data, indexObject) {

        /**
         * data:
         * Массив с Картой              - data.map
         * Массив с Соседними клетками  - data.neighboringsCell
         * Массив с Травой              - data.neighboringsCellWithFood
         * Массив с Тиграми             - data.neighboringsCellWithEnemies
         * Массив с Землёй              - data.neighboringsCellWithGround
         */

        if (data.unit.health > 5) {
            // Проверим есть рядом хищники
            if (data.neighboringsCellWithEnemies.length > 0) {
                // Бежим от Тигра
                this.moveAwayFromEnemy(data.map, data.unit, data.neighboringsCellWithGround, indexObject);
            }
            // Проверим есть рядом еда
            else if (data.neighboringsCellWithFood.length > 0) {
                this.moveToFood(data.map, data.unit, data.neighboringsCellWithFood, indexObject);
            }
            else {
                this.moveFree(data.map, data.unit, data.neighboringsCellWithGround, indexObject);
            }
        } else {
            data.map.killUnit(data.unit, indexObject);
        }
    };

    /**
     * Бежим от тигра +
     * @param map
     * @param unit
     * @param neighboringsCell
     * @param indexObject
     */
    CowsAlgorithm.prototype.moveAwayFromEnemy = function (map, unit, neighboringsCellWithGround, indexObject) {

        // Получим произволный индекс в массиве
        var cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithGround.length);

        // Сохраним старый Unit и его RC (Row/Col)
        var oldUnit = unit;

        // На место старого Unit поставим ground
        map.setCell(unit, new Unit(
                                    neighboringsCellWithGround[cellRandomRowCol].className,
                                    3,
                                    unit.positionRow,
                                    unit.positionCol)
                            );

        // Для старого Unit зададим новые Row/Col
        map.setCell(neighboringsCellWithGround[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithGround[cellRandomRowCol], indexObject);

        // Т.к мы убегаем и не едим траву, отнимим немного здоровья
        unit.subHealth(this.subHealth);
    }

    /**
     * Едим траву
     * @param map
     * @param unit
     * @param neighboringsCellWithFood
     * @param indexObject
     */
    CowsAlgorithm.prototype.moveToFood = function (map, unit, neighboringsCellWithFood, indexObject) {

        unit.soundEat.stop();

        // Получим произволный индекс в массиве еды
        var cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithFood.length - 1);

        // console.log(neighboringsCellWithFood[cellRandomRowCol]);
        
        // ПОВТОРЯЮЩИЙСЯ УЖЕ ВТОРОЙ РАЗ КОД!!! Первый в [moveAwayFromEnemy] для Cows
        // Сохраним старый Unit и его RC (Row/Col)
        var oldUnit = unit;

        // На место старого Unit поставим ground
        map.setCell(unit, new Unit(
                                    "ground",
                                    3,
                                    unit.positionRow,
                                    unit.positionCol)
                                );

        // Для старого Unit зададим новые Row/Col
        map.setCell(neighboringsCellWithFood[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithFood[cellRandomRowCol], indexObject);

        // При поглащении травы прибавим жизни, ограничим значением 100
        if (unit.health >= 90 && unit.health <= 100) {
            unit.addHealth(100-unit.health);
        } else {
            unit.addHealth(this.addHealth);
        }

        unit.soundEat.play();
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

        // Получим произволный индекс в массиве с землей
        var cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithGround.length - 1);


        // ПОВТОРЯЮЩИЙСЯ УЖЕ ТРЕТИЙ РАЗ КОД!!! Первый в [moveAwayFromEnemy] для Cows
        // Сохраним старый Unit и его RC (Row/Col)
        var oldUnit = unit;

        // На место старого Unit поставим ground
        map.setCell(unit, new Unit(
            "ground",
            3,
            unit.positionRow,
            unit.positionCol)
        );

        // Для старого Unit зададим новые Row/Col
        map.setCell(neighboringsCellWithGround[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithGround[cellRandomRowCol], indexObject);

        unit.subHealth(this.subHealth);

        // unit.soundEat.play();
    }
    // ------------------------------------------

    // TIGERS ALGORITM
    function TigersAlgorithm() {}
    TigersAlgorithm.prototype = new Algorithm();
    TigersAlgorithm.constructor = 'TigersAlgorithm';

    TigersAlgorithm.prototype.move = function (data, indexObject) {
        /**
         * data:
         * Массив с Картой              - data.map
         * Массив с Соседними клетками  - data.neighboringsCell
         * Массив с Травой              - data.neighboringsCellWithFood
         * Массив с Тиграми             - data.neighboringsCellWithEnemies
         * Массив с Землёй              - data.neighboringsCellWithGround
         */
        console.log(data);

        // if (data.unit.health > 5) {
        // //
        // //     // Проверим есть рядом еда
        // //     if (data.neighboringsCellWithFood.length > 0) {
        // //         this.moveToFood(data.map, data.unit, data.neighboringsCellWithFood, indexObject);
        // //     }
        // //     // else {
        //         if (data.neighboringsCellWithGround.length > 0) {
        //             this.moveFree(data.map, data.unit, data.neighboringsCellWithGround, indexObject);
        //
        //     }
        // } else {
        //
        //     data.map.killUnit(data.unit, indexObject);
        // }
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

        // Получим произволный индекс в массиве еды
        var cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithFood.length - 1);

        console.log(neighboringsCellWithFood[cellRandomRowCol]);

        // ПОВТОРЯЮЩИЙСЯ УЖЕ ВТОРОЙ РАЗ КОД!!! Первый в [moveAwayFromEnemy] для Cows
        // Сохраним старый Unit и его RC (Row/Col)
        var oldUnit = unit;

        // На место старого Unit поставим ground
        map.setCell(unit, new Unit(
                                "ground",
                                3,
                                unit.positionRow,
                                unit.positionCol)
                            );

        // Для старого Unit зададим новые Row/Col
        map.setCell(neighboringsCellWithFood[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithFood[cellRandomRowCol], indexObject);

        // При поглащении травы прибавим жизни, ограничим значением 100
        if (unit.health >= 90 && unit.health <= 100) {
            console.log(100-unit.health);
            unit.addHealth(100-unit.health);
        } else {
            unit.addHealth(this.addHealth);
        }

        // INDEXOBJECT COWS ?????
        // data.map.killUnit(neighboringsCellWithFood[cellRandomRowCol].neighboringUnit, indexObject);

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

        // Получим произволный индекс в массиве с землей
        var cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithGround.length - 1);


        console.log(neighboringsCellWithGround[cellRandomRowCol]);

        // ПОВТОРЯЮЩИЙСЯ УЖЕ ТРЕТИЙ РАЗ КОД!!! Первый в [moveAwayFromEnemy] для Cows
        // Сохраним старый Unit и его RC (Row/Col)
        var oldUnit = unit;

        // На место старого Unit поставим ground
        map.setCell(unit, new Unit(
            "ground",
            3,
            unit.positionRow,
            unit.positionCol)
        );

        // Для старого Unit зададим новые Row/Col
        map.setCell(neighboringsCellWithGround[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithGround[cellRandomRowCol], indexObject);

        unit.subHealth(this.subHealth);

        // unit.soundEat.play();
    }
    // ------------------------------------------

    // GRASS ALGORITM
    function GrassAlgorithm() {}
    GrassAlgorithm.prototype = new Algorithm();
    GrassAlgorithm.constructor = 'GrassAlgorithm';
    // ------------------------------------------

    // GROUND ALGORITM
    function GroundAlgorithm() {}
    GroundAlgorithm.prototype = new Algorithm();
    GroundAlgorithm.constructor = 'GroundAlgorithm';
    // ------------------------------------------

    // DEATH ALGORITM
    function DeathAlgorithm() {}
    DeathAlgorithm.prototype = new Algorithm();
    DeathAlgorithm.constructor = 'DeathAlgorithm';
    // ------------------------------------------

    // AUDIO IN GAME
    function GameSounds(file) {
        this.sound = new Audio(file);
    }
    GameSounds.prototype = new Audio();
    GameSounds.constructor = "GameSounds";
    GameSounds.prototype.play = function () {
        this.sound.play();
    }
    // Функция stop для Audio:
    GameSounds.prototype.stop = function() {
        this.sound.pause();
        this.sound.currentTime = 0.0;
    }
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