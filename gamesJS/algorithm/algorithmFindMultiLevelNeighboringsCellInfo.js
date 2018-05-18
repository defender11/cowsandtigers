import Log from './../log';

// Route
export default {
    mapRow: 0,
    mapCol: 0,
    LOCAL_DEBUG: false,

    get: function (map, unit, indexObject, steps) {

        Log.showDebug([{"MAPDATA:" : map.mapData},{"UNIT:" : unit}], LOCAL_DEBUG);

        let neighboringsCellInformation = [];

        this.mapRow = map.row;
        this.mapCol = map.col;

        // получим инфо о четырех сторонах на дистанции полученной от Unit
        for (let step = 1; step < steps; step++) {

            Log.showDebug([{"STEP:" : step}], LOCAL_DEBUG);

            let neighboringsCell = this.getNeighboringsCell(step, unit, map);

            if (neighboringsCell.length > 0) {

                let param = {
                    // Правильно назвать
                    step: step,
                    cellsInfo: neighboringsCell,
                };
                // Вот прям здесь получим
                neighboringsCellInformation.push(param);
            }
        }

        return neighboringsCellInformation;
    },

    // Получим инфо соседних ячеек на каждой иттерации
    getNeighboringsCell: function (step, unit, map) {
        let neighboringsCellInfo = [];

        // if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
        //     unit.positionRow = 0;
        //     unit.positionCol = 2;
        // }

        // координаты углов Unit
        // Получим координаты 4-х соторон на основе Unit
        let unitSides = this.getUnitAnglePoints(step, unit.positionRow, unit.positionCol);

        Log.showDebug([{"UNITSIDES:" : unitSides}], LOCAL_DEBUG);

        // Нужно получить ячейки на основе найденых сторон!!!

        // Пройдемся по 4-ем сторонам и получим содержимое ячеек, задействуем массив с картой игры
        for (let side = 0; side < unitSides.length; side++) {

            if (unitSides[side].isset) {

                Log.showDebug([
                        {"SIDE:" : unitSides[side]},
                        {"SIDE_NAME:" : unitSides[side].name}
                    ],
                    LOCAL_DEBUG);

                let param = {
                    unitSide: unitSides[side],
                    unitPositionRow: unit.positionRow,
                    unitPositionCol: unit.positionCol,
                    map: map
                };

                Log.showDebug([{"PARAM:" : param}], LOCAL_DEBUG);

                switch (parseInt(unitSides[side].id)) {
                    // leftTop_TO_rightTop
                    case 0:
                        let leftTop_TO_rightTop = this.getTopSideNeighboringsCell(param);
                        if (leftTop_TO_rightTop !== undefined) {
                            neighboringsCellInfo.push(leftTop_TO_rightTop);
                        }
                        break;
                    // rightTop_TO_rightBottom
                    case 1:
                        let rightTop_TO_rightBottom = this.getRighttSideNeighboringsCell(param);
                        if (rightTop_TO_rightBottom !== undefined) {
                            neighboringsCellInfo.push(rightTop_TO_rightBottom);
                        }
                        break;
                    // rightBottom_TO_leftBottom
                    case 2:
                        let rightBottom_TO_leftBottom = this.getBottomSideNeighboringsCell(param);
                        if (rightBottom_TO_leftBottom !== undefined) {
                            neighboringsCellInfo.push(rightBottom_TO_leftBottom);
                        }
                        break;

                    // leftBottom_TO_leftTop
                    case 3:
                        let leftBottom_TO_leftTop = this.getLeftSideNeighboringsCell(param);
                        if (leftBottom_TO_leftTop !== undefined) {
                            neighboringsCellInfo.push(leftBottom_TO_leftTop);
                        }
                        break;
                }

                Log.showDebug([{"SIDE END:" : unitSides[side].name}], LOCAL_DEBUG);
            }
        }
        return neighboringsCellInfo;
    },

    //    -----------------------------------------------------------------------------------------------

    /* Получим содержимое ячеек по сторонам */
    getTopSideNeighboringsCell: function (param) {
        let neighboringsCellInfo = [];

        let startCellRow = param.unitSide.angleStart.positionRow;
        let endCellCol = param.unitSide.angleEnd.positionCol;

        let startCellCol = param.unitSide.angleStart.positionCol;

        do {
            let unitPositionCell = parseInt(param.unitPositionRow + '' + param.unitPositionCol);
            let selectPositionCell = parseInt(startCellRow + '' + startCellCol);

            if (unitPositionCell !== selectPositionCell) {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
            startCellCol++;
        } while (startCellCol < endCellCol);

        return neighboringsCellInfo;
    },
    getRighttSideNeighboringsCell: function (param) {
        let neighboringsCellInfo = [];

        let startCellCol = param.unitSide.angleStart.positionCol;
        let endCellRow = param.unitSide.angleEnd.positionRow;

        let startCellRow = param.unitSide.angleStart.positionRow;

        do {
            let unitPositionCell = parseInt(param.unitPositionRow + '' + param.unitPositionCol);
            let selectPositionCell = parseInt(startCellRow + '' + startCellCol);

            if (unitPositionCell !== selectPositionCell) {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
            startCellRow++;
        } while (startCellRow < endCellRow);

        return neighboringsCellInfo;
    },
    getBottomSideNeighboringsCell: function (param) {
        let neighboringsCellInfo = [];

        let startCellRow = param.unitSide.angleStart.positionRow;
        let endCellCol = param.unitSide.angleEnd.positionCol;

        let startCellCol = param.unitSide.angleStart.positionCol;

        do {
            let unitPositionCell = parseInt(param.unitPositionRow + '' + param.unitPositionCol);
            let selectPositionCell = parseInt(startCellRow + '' + startCellCol);

            if (unitPositionCell !== selectPositionCell) {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
            startCellCol--;
        } while (startCellCol > endCellCol);

        return neighboringsCellInfo;
    },
    getLeftSideNeighboringsCell: function (param) {
        let neighboringsCellInfo = [];

        let startCellCol = param.unitSide.angleStart.positionCol;
        let endCellRow = param.unitSide.angleEnd.positionRow;

        let startCellRow = param.unitSide.angleStart.positionRow;

        do {
            let unitPositionCell = parseInt(param.unitPositionRow + '' + param.unitPositionCol);
            let selectPositionCell = parseInt(startCellRow + '' + startCellCol);

            if (unitPositionCell !== selectPositionCell) {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
            startCellRow--;
        } while (startCellRow > endCellRow);

        return neighboringsCellInfo;
    },

    /**
     * Получим координаты 4-х соторон на основе Unit
     * @param step
     * @param positionRow
     * @param positionCol
     * @returns {Array}
     */
    getUnitAnglePoints: function (step, positionRow, positionCol) {
        let unitAngles = [];

        let leftTop,
            rightTop,
            rightBottom,
            leftBottom;

        
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log('|- getUnitAnglePoints: ', step, positionRow, positionCol);
        }

        // GET leftTop
        leftTop = this.getLeftTopAnglePoint(step, positionRow, positionCol);
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log('|-|- leftTop: ', leftTop);
        }
        if (leftTop.isset) {

            let toRightTop = this.getRightTopAnglePoint(step, positionRow, positionCol);

            if (toRightTop.isset) {
                toRightTop = {positionRow: toRightTop.positionRow, positionCol: toRightTop.positionCol};
            } else {
                toRightTop = {positionRow: leftTop.positionRow, positionCol: leftTop.positionCol};
            }

            unitAngles.push(
                // leftTop
                {
                    id: 0,
                    name: "leftTop_TO_rightTop",
                    angleStart: {
                        positionRow: leftTop.positionRow,
                        positionCol: leftTop.positionCol
                    },
                    angleEnd: toRightTop,
                    isset: leftTop.isset
                }
            );
        }

        // GET rightTop
        rightTop = this.getRightTopAnglePoint(step, positionRow, positionCol);
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log('|-|- rightTop: ', rightTop);
        }
        if (rightTop.isset) {

            let toRightBottom = this.getRightBottomAnglePoint(step, positionRow, positionCol);

            if (toRightBottom.isset) {
                toRightBottom = {positionRow: toRightBottom.positionRow, positionCol: toRightBottom.positionCol};
            } else {
                toRightBottom = {positionRow: rightTop.positionRow, positionCol: rightTop.positionCol};
            }

            unitAngles.push(
                // rightTop
                {
                    id: 1,
                    name: "rightTop_TO_rightBottom",
                    angleStart: {
                        positionRow: rightTop.positionRow,
                        positionCol: rightTop.positionCol
                    },
                    angleEnd: toRightBottom,
                    isset: rightTop.isset
                }
            );
        }

        // GET rightBottom
        rightBottom = this.getRightBottomAnglePoint(step, positionRow, positionCol);
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log('|-|- rightBottom: ', rightBottom);
        }
        if (rightBottom.isset) {

            let toLeftBottom = this.getLeftBottomAnglePoint(step, positionRow, positionCol);

            if (toLeftBottom.isset) {
                toLeftBottom = {positionRow: toLeftBottom.positionRow, positionCol: toLeftBottom.positionCol};
            } else {
                toLeftBottom = {positionRow: rightBottom.positionRow, positionCol: rightBottom.positionCol};
            }

            unitAngles.push(
                // rightBottom
                {
                    id: 2,
                    name: "rightBottom_TO_leftBottom",
                    angleStart: {
                        positionRow: rightBottom.positionRow,
                        positionCol: rightBottom.positionCol
                    },
                    angleEnd: toLeftBottom,
                    isset: rightBottom.isset
                }
            );
        }

        // GET leftBottom
        leftBottom = this.getLeftBottomAnglePoint(step, positionRow, positionCol);
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log('|-|- leftBottom: ', leftBottom);
        }
        if (leftBottom.isset) {

            let toLeftTop = this.getLeftTopAnglePoint(step, positionRow, positionCol);

            if (toLeftTop.isset) {
                toLeftTop = {positionRow: toLeftTop.positionRow, positionCol: toLeftTop.positionCol};
            } else {
                toLeftTop = {positionRow: leftBottom.positionRow, positionCol: leftBottom.positionCol};
            }

            unitAngles.push(
                // leftBottom
                {
                    id: 3,
                    name: "leftBottom_TO_leftTop",
                    angleStart: {
                        positionRow: leftBottom.positionRow,
                        positionCol: leftBottom.positionCol
                    },
                    angleEnd: toLeftTop,
                    isset: leftBottom.isset
                }
            );
        }

        return unitAngles;
    },

    getLeftTopAnglePoint: function (step, positionRow, positionCol) {
        let newPositionRow = positionRow - step;
        let newPositionCol = positionCol - step;
        let angleIsset = true;

        if (this.isUnitOutOfBorder(newPositionRow, newPositionCol)) {
            let newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log('|-|- newPosition: ', newPosition);
            }

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            } else {
                angleIsset = false;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol,
            isset: angleIsset
        }
    },
    getRightTopAnglePoint: function (step, positionRow, positionCol) {
        let newPositionRow = positionRow - step;
        let newPositionCol = positionCol + step;
        let angleIsset = true;

        if (this.isUnitOutOfBorder(newPositionRow, newPositionCol)) {
            let newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            } else {
                angleIsset = false;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol,
            isset: angleIsset
        }
    },
    getRightBottomAnglePoint: function (step, positionRow, positionCol) {
        let newPositionRow = positionRow + step;
        let newPositionCol = positionCol + step;
        let angleIsset = true;

        if (this.isUnitOutOfBorder(newPositionRow, newPositionCol)) {
            let newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            } else {
                angleIsset = false;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol,
            isset: angleIsset
        }
    },
    getLeftBottomAnglePoint: function (step, positionRow, positionCol) {
        let newPositionRow = positionRow + step;
        let newPositionCol = positionCol - step;
        let angleIsset = true;

        if (this.isUnitOutOfBorder(newPositionRow, newPositionCol)) {
            let newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            } else {
                angleIsset = false;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol,
            isset: angleIsset
        }
    },
    isUnitOutOfBorder: function (newPositionRow, newPositionCol) {
        if (
            (newPositionRow < 0 || newPositionRow > (this.mapRow - 1))
            ||
            (newPositionCol < 0 || newPositionCol > (this.mapCol - 1))
            ||
            (
                (newPositionRow < 0 || newPositionRow > (this.mapRow - 1))
                &&
                (newPositionCol < 0 || newPositionCol > (this.mapCol - 1))
            )
        ) {
            return true;
        }

        return false;
    },

    // Попробуем найти новую ячейку прибавив значение шага
    findNewAngel: function (step, newPositionRow, newPositionCol) {
        // Пройдемся по по шагам в 4-х направлениях и посмотрим, попадаем ли в пределы карты
        for (let stp = 1; stp <= step; stp++) {

            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log((stp <= step));
            }

            let newAngel = this.checkNeighboringsCellByDirections(stp, newPositionRow, newPositionCol);

            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log('|-|- newAngel: ', newAngel);
            }
            if (newAngel.isFind) {
                return newAngel;
            }
        }

        return {
            isFind: false
        }
    },
    checkNeighboringsCellByDirections: function (stp, newPositionRow, newPositionCol) {
        let directionLeft = this.checkCellByDirectionLeft(stp, newPositionRow, newPositionCol);
        if (directionLeft.isFind) {
            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log("directionLeft: true;");
            }
            return directionLeft;
        }
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log("directionLeft: false;");
        }

        let directionTop = this.checkCellByDirectionTop(stp, newPositionRow, newPositionCol);
        if (directionTop.isFind) {
            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log("directionTop: true;");
            }
            return directionTop;
        }
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log("directionTop: false;");
        }

        let directionRight = this.checkCellByDirectionRight(stp, newPositionRow, newPositionCol);
        if (directionRight.isFind) {
            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log("directionRight: true;");
            }
            return directionRight;
        }
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log("directionRight: false;");
        }

        let directionBottom = this.checkCellByDirectionBottom(stp, newPositionRow, newPositionCol);
        if (directionBottom.isFind) {
            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log("directionBottom: true;");
            }
            return directionBottom;
        }
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log("directionBottom: false;");
        }

        return false;
    },
    checkCellByDirectionLeft: function (stp, newPositionRow, newPositionCol) {
        let tryNewPositionCol,
            find = false;

        tryNewPositionCol = newPositionCol - stp;

        if (
            (
                ((newPositionRow >= 0) && (newPositionRow <= (this.mapRow - 1)))
                &&
                ((tryNewPositionCol >= 0) && (tryNewPositionCol <= (this.mapCol - 1)))
            )
        ) {
            find = true;
        }

        return {
            positionRow: newPositionRow,
            positionCol: tryNewPositionCol,
            isFind: find
        };
    },
    checkCellByDirectionTop: function (stp, newPositionRow, newPositionCol) {
        let tryNewPositionRow,
            find = false;

        tryNewPositionRow = newPositionRow - stp;

        if (
            ((tryNewPositionRow >= 0) && (tryNewPositionRow <= (this.mapRow - 1)))
            &&
            ((newPositionCol >= 0) && (newPositionCol <= (this.mapCol - 1)))
        ) {
            find = true;
        }

        return {
            positionRow: tryNewPositionRow,
            positionCol: newPositionCol,
            isFind: find
        };
    },
    checkCellByDirectionRight: function (stp, newPositionRow, newPositionCol) {
        let tryNewPositionCol,
            find = false;

        tryNewPositionCol = newPositionCol + stp;
        if (
            (
                ((newPositionRow >= 0) && (newPositionRow <= (this.mapRow - 1)))
                &&
                ((tryNewPositionCol >= 0) && (tryNewPositionCol <= (this.mapCol - 1)))
            )
        ) {
            find = true;
        }

        return {
            positionRow: newPositionRow,
            positionCol: tryNewPositionCol,
            isFind: find
        };
    },
    checkCellByDirectionBottom: function (stp, newPositionRow, newPositionCol) {
        let tryNewPositionRow,
            find = false;

        tryNewPositionRow = newPositionRow + stp;

        if (
            ((tryNewPositionRow >= 0) && (tryNewPositionRow <= (this.mapRow - 1)))
            &&
            ((newPositionCol >= 0) && (newPositionCol <= (this.mapCol - 1)))
        ) {
            find = true;
        }

        return {
            positionRow: tryNewPositionRow,
            positionCol: newPositionCol,
            isFind: find
        };
    }
}