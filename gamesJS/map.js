import Log from './log';
import Entity from './entity';
import Unit from './unit';
import setting from './setting';
import DieUnit from './dieUnit';
import tools from './tools';
import oneLevelCellsInfo from './algorithm/algorithmFindOneLevelNeighboringsCellInfo';
import multiLevelCellsInfo from './algorithm/algorithmFindMultiLevelNeighboringsCellInfo';


/**
 * Класс работы с картой
 * @param setting
 * @constructor
 */
export default class Map {
    constructor() {
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
    init() {
        while (this.mapData.push([]) < this.row) ;

        if (this.mapData.length == this.row) {
            return true;
        }
    };


    /**
     * Генерация карты
     */
    generate() {

        let objID = 0;

        for (let objectName in this.mapObjects) {

            // console.log(objectName);
            let objMin = this.mapObjects[objectName].min;
            let objMax = this.mapObjects[objectName].max;

            // Если объект являеться статикой,
            // то постаремся дать по максимуму значения min/max
            // для полного заполнения игрового поля
            if (objMin === null && objMax === null) {
                objMin = (this.row + this.col) * 2;
                objMax = (this.row + this.col) * 100;
            }

            // Получим кол-во объектов на карте
            let objCountOnMap = tools.randomInteger(objMin, objMax);

            // console.log("objectName[objCountOnMap]: " + objectName + " " + objCountOnMap);

            // Пройдемся по этому количевству
            for (let i = 0; i < objCountOnMap; i++) {

                let mapRowCol = this.getRandomRowColCoord();

                // console.log('mapRowColNormal: ', mapRowCol);

                if (!this.mapData[mapRowCol.row][mapRowCol.col]) {

                    let unitParam = {
                        id: objID,
                        className: objectName,
                        objPositionRow: mapRowCol.row,
                        objPositionCol: mapRowCol.col
                    };

                    let unit;
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
                    let unitSetting = {
                        objID: objID,
                        objectName: objectName
                    };
                    this.tryNewGenerate(unitSetting, objCountOnMap);
                }
            }

            objID++;
        }

        return true;
    };


    /**
     * Повторная генерация, в случии занятого места в массиве
     * @param objectSetting
     * @param count
     * @returns {*}
     */
    tryNewGenerate(objectSetting, count) {

        if (count <= 0) return false;

        // Пройдемся по этому количевству
        for (let i = 0; i < count; i++) {

            // создадим координаты для проставления
            let mapRowCol = this.getRandomRowColCoord();

            // console.log('mapRowColRecursive: ', mapRowCol);

            if (this.mapData[mapRowCol.row][mapRowCol.col] === undefined) {
                let unitParam = {
                    id: objectSetting.objID,
                    className: objectSetting.objectName,
                    objPositionRow: mapRowCol.row,
                    objPositionCol: mapRowCol.col
                };

                let unit;

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
                let unitSetting = {
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
    getRandomRowColCoord() {
        let countRow = this.row,
            countCol = this.col;

        return {
            row: tools.randomInteger(0, countRow),
            col: tools.randomInteger(0, countCol)
        }
    };

    checkRoute () {

        let data = this.getAllNeighboringsCellInformation(unit, this.map, indexObject);

    }
    
    getRandomRowColBasedOnUnit(cell, steps) {
        let issetRoute = this.tryRoute(steps);




        // let rowMin = ((cell.positionRow - 1) >= 0) ? (cell.positionRow - 1) : 0;
        // let rowMax = ((cell.positionRow + 1) <= this.row) ? (cell.positionRow + 1) : this.row;

        // let colMin = ((cell.positionCol - 1) >= 0) ? (cell.positionRow - 1) : 0;
        // let colMax = ((cell.positionCol + 1) <= this.col) ? (cell.positionCol + 1) : this.col;

        // let newPositionRow,
        //     newPositionCol;
        //
        // newPositionRow = this.getRandomRowColWithExclude(rowMin, rowMax, cell.positionRow);
        // newPositionCol = this.getRandomRowColWithExclude(colMin, colMax, cell.positionRow);

        // return {
        //     positionRow: newPositionRow,
        //     positionCol: newPositionCol
        // }
    };

    getRandomRowColWithExclude(minCell, maxCell, excludeValue) {
        let value;

        value = tools.randomInteger(minCell, maxCell);

        while (value == excludeValue) {
            value = tools.randomInteger(minCell, maxCell);
        }

        return value;
    };


    getNewRowColPosition() {
        console.log("------------------");
        let i = 0;
        do {
            let newPositionRowCol = this.getRandomRowColCoord();

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
    setCell(oldUnit, newUnit) {

        this.mapData[oldUnit.positionRow][oldUnit.positionCol] = newUnit;

        this.mapData[oldUnit.positionRow][oldUnit.positionCol].updateRowCol(oldUnit);
    };


    /**
     * Получим ячейку
     * @param positionRow
     * @param positionCol
     * @returns {*}
     */
    getCell(positionRow, positionCol) {
        return this.mapData[positionRow][positionCol];
    };


    /**
     * Удаляет Unit из массива ObjectOnMap,
     * в котором находиться инфо об игровых объектах
     * @param indexObject
     * @returns {*[]}
     */
    addToObjectsOnMap(unit) {
        this.objectsOnMap.push(unit);
    };

    /**
     * Удаляет Unit из массива ObjectOnMap,
     * в котором находиться инфо об игровых объектах
     * @param indexObject
     * @returns {*[]}
     */
    removeUnitFromObjectsOnMap(indexObject) {
        this.objectsOnMap.splice(indexObject, 1);
    };

    /**
     * Удаляет Unit из массива DieObjectsOnMap,
     * в котором находиться инфо об смерти units
     * @param indexObject
     * @returns {*[]}
     */
    removeUnitFromDieObjectsOnMap(indexObject) {
        this.dieObjectsOnMap.splice(indexObject, 1);
    };


    /**
     * Обновим для Unit его RC(Row/Col) в массиве ObjectOnMap,
     * в котором находиться инфо об игровых объектах
     * @param unit
     * @param indexObject
     */
    updateUnitRowColInObjectsOnMap(unit, indexObject) {
        this.objectsOnMap[indexObject].positionRow = unit.positionRow;
        this.objectsOnMap[indexObject].positionCol = unit.positionCol;
    };


    /**
     * Удалим объект
     * @param unit
     * @param indexObject
     */
    killUnit(unit, indexObject) {

        this.removeUnitFromObjectsOnMap(indexObject);

        // На место старого Unit поставим могилку
        let unitParam = {
            id: 4,
            className: "death",
            objPositionRow: unit.positionRow,
            objPositionCol: unit.positionCol,
            dieUnitType: unit.className,
            dieUnitId: unit.id
        };

        let dieUnit = new DieUnit(unitParam);

        this.setCell(unit, dieUnit);

        this.addDieUnitToDieArray(dieUnit);

        // console.log(this.dieObjectsOnMap);
    };


    /**
     * Проверим есть ли еще объекты в массиве для сущевствования игры
     * @returns {number}
     */
    issetObjectOnMap() {
        return (this.objectsOnMap.length > 0 ? 1 : 0);
    };

    /**
     * Отфильтруем ячейки по типу unitType
     * @param neighboringsCell
     * @param unitType
     * @returns {Array}
     */
    filterCellByType(neighboringsCell, unitType) {

        let arr = [];

        // Переберем полученный массив с ячейками находящимися рядом
        for (let i = 0; i < neighboringsCell.length; i++) {

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
    getIndexFromObjectsOnMap(unit) {
        for (let indexObject = 0; indexObject < this.objectsOnMap.length; indexObject++) {
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
    getIndexFromDieObjectsOnMap(unit) {
        for (let indexObject = 0; indexObject < this.dieObjectsOnMap.length; indexObject++) {
            if (
                this.dieObjectsOnMap[indexObject].positionRow == unit.positionRow
                &&
                this.dieObjectsOnMap[indexObject].positionCol == unit.positionCol
            ) {
                return indexObject;
            }
        }
    }

    addDieUnitToDieArray(unit) {
        this.dieObjectsOnMap.push(unit);
    }

//    ALGORITHMS FIND NEIGBORINGS CELL

    getOneLevelCellsInfo (unit) {
        return oneLevelCellsInfo.get(this, unit);
    }
    getMultiLevelCellsInfo (unit, indexObject, steps) {
        return multiLevelCellsInfo.get(this, unit, indexObject, steps);
    }
}

// ------------------------------------------