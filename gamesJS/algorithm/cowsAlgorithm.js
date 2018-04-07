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