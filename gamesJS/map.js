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

    if (this.mapData.length == this.row) {
        return true;
    }
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

    return true;
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