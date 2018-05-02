import tools from "../tools";

// Route
export default {
    mapRow:0,
    mapCol:0,
    DEBUG: true,

    getNeighboringsCellInformation : function (map, unit, indexObject, steps, callBackUnitRoute) {

        console.log(map.mapData);
        console.log(unit);

        let neighboringsCellInformation = [];

        this.mapRow = map.row;
        this.mapCol = map.col;

        // получим инфо о четырех сторонах на дистанции полученной от Unit
        for (let step = 1; step  < steps; step++) {
            if (this.DEBUG) { console.log('|- step: ' + step); }

            // Вот прям здесь получим
            neighboringsCellInformation.push(this.getNeighboringsCell(step, unit, map));
        }

        return neighboringsCellInformation;
    },

    // Получим инфо соседних ячеек на кадой иттерации
    getNeighboringsCell: function(step, unit, map) {
        let neighboringsCellInfo = [];

        // if (this.DEBUG) {
        //     unit.positionRow = 0;
        //     unit.positionCol = 0;
        // }

        // координаты углов Unit
        // Получим координаты 4-х соторон на основе Unit
        let unitSides = this.getUnitAnglePoints(step, unit.positionRow, unit.positionCol);

        if (this.DEBUG) {console.log("|-- unitSides", unitSides);}

        // Пройдемся по 4-ем сторонам и получим содержимое ячеек, задействуем массив с картой игры
        for (let side=0; side < unitSides.length; side++) {

            if (unitSides[side].isset) {
                if (this.DEBUG) {
                    console.log("|--- START side: " + unitSides[side].name);
                    console.log("|--- side: " , unitSides[side]);
                }

                let startCellRow = unitSides[side].angleStart.positionRow;
                let startCellCol = unitSides[side].angleStart.positionCol;

                // Пройдемся по карте с полученными углами
                let endCellRow = unitSides[side].angleEnd.positionRow;
                let endCellCol = unitSides[side].angleEnd.positionCol;

                // mapRow
                for (; startCellRow <= endCellRow; startCellRow++) {

                    //mapCol
                    for (; startCellCol <= endCellCol; startCellCol++) {

                        if (
                            (startCellRow >= 0 && startCellRow <= (this.mapRow - 1))
                            &&
                            (startCellCol >= 0 && startCellCol <= (this.mapCol - 1))
                        ) {
                            if (this.DEBUG) {
                                console.log("|---- angleStartRow: " + unitSides[side].angleStart.positionRow, "endCellRow: " + endCellRow, " | angleStartCol: " + unitSides[side].angleStart.positionCol, "endCellCol: " + endCellCol);
                                console.log("|---- ROW: " + startCellRow, "COL: " + startCellCol);
                                console.log("|---- GET UNIT ON MAP: ", map.getCell(startCellRow, startCellCol));
                                console.log('--------------------');
                                console.log('|---- startCellCol: ' + startCellCol);
                                console.log('--------------------');
                            }

                            neighboringsCellInfo.push(map.getCell(startCellRow, startCellCol));
                        }
                    }
                }

                if (this.DEBUG) { console.log("|--- END side: " + unitSides[side].name); }
            }
        }

        // return unitAnglePoints;
        return (neighboringsCellInfo);
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


        if (this.DEBUG) { console.log('|- getUnitAnglePoints: ', step, positionRow, positionCol); }
        
        // GET leftTop
        leftTop = this.getLeftTopAnglePoint(step, positionRow, positionCol);
        if (this.DEBUG) { console.log('|-|- leftTop: ', leftTop); }
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
        if (rightTop.isset) {

            let toRightBottom = this.getRightBottomAnglePoint(step, positionRow, positionCol);

            if (toRightBottom.isset) {
                toRightBottom = {positionRow: toRightBottom.positionRow,positionCol: toRightBottom.positionCol};
            } else {
                toRightBottom = {positionRow: rightTop.positionRow,positionCol: rightTop.positionCol};
            }

            unitAngles.push(
                // rightTop
                {
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
        if (rightBottom.isset) {

            let toLeftBottom = this.getLeftBottomAnglePoint(step, positionRow, positionCol);

            if (toLeftBottom.isset) {
                toLeftBottom = {positionRow: toLeftBottom.positionRow,positionCol: toLeftBottom.positionCol};
            } else {
                toLeftBottom = {positionRow: rightBottom.positionRow,positionCol: rightBottom.positionCol};
            }

            unitAngles.push(
                // rightBottom
                {
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
        if (leftBottom.isset) {

            let toLeftTop = this.getLeftTopAnglePoint(step, positionRow, positionCol);

            if (toLeftTop.isset) {
                toLeftTop = {positionRow: toLeftTop.positionRow,positionCol: toLeftTop.positionCol};
            } else {
                toLeftTop = {positionRow: leftBottom.positionRow,positionCol: leftBottom.positionCol};
            }

            unitAngles.push(
                // leftBottom
                {
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
        /*
        return [
            // leftTop
            {
                name: "leftTop_TO_rightTop",
                angleStart: this.getLeftTopAnglePoint(step, positionRow, positionCol),
                angleEnd: this.getRightTopAnglePoint(step, positionRow, positionCol)
            }
            // rightTop
            , {
                name: "rightTop_TO_rightBottom",
                angleStart: this.getRightTopAnglePoint(step, positionRow, positionCol),
                angleEnd: this.getRightBottomAnglePoint(step, positionRow, positionCol)
            }
            // rightBottom
            , {
                name: "rightBottom_TO_leftBottom",
                angleStart: this.getRightBottomAnglePoint(step, positionRow, positionCol),
                angleEnd: this.getLeftBottomAnglePoint(step, positionRow, positionCol)
            }
            // leftBottom
            , {
                name: "leftBottom_TO_leftTop",
                angleStart: this.getLeftBottomAnglePoint(step, positionRow, positionCol),
                angleEnd: this.getLeftTopAnglePoint(step, positionRow, positionCol)
            }
        ];
        */
    },

    getLeftTopAnglePoint: function (step, positionRow, positionCol) {
        let newPosition;
        let newPositionRow = positionRow - step;
        let newPositionCol = positionCol - step;
        let angleIsset = true;

        if (
            (
                ((newPositionRow < 0) || (newPositionRow > (this.mapRow - 1)))
                &&
                ((newPositionCol < 0) || (newPositionCol > (this.mapCol - 1)))
            )
            ||
            ((newPositionRow < 0) || (newPositionRow > (this.mapRow - 1)))
            ||
            ((newPositionCol < 0) || (newPositionCol > (this.mapCol - 1)))
        ) {
            newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

            if (this.DEBUG) { console.log('|-|- newPosition: ', newPosition); }
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
    getRightTopAnglePoint: function(step, positionRow, positionCol) {
        let newPositionRow = positionRow - step;
        let newPositionCol = positionCol + step;
        let angleIsset = true;

        if (
            (
                (newPositionRow < 0 || newPositionRow > (this.mapRow - 1))
                &&
                (newPositionCol < 0 || newPositionCol > (this.mapCol - 1))
            )
            ||
            (newPositionRow < 0 || newPositionRow > (this.mapRow - 1))
            ||
            (newPositionCol < 0 || newPositionCol > (this.mapCol - 1))
        ) {
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
    getRightBottomAnglePoint: function(step, positionRow, positionCol) {
        let newPositionRow = positionRow + step;
        let newPositionCol = positionCol + step;
        let angleIsset = true;

        if (
            (
                (newPositionRow < 0 || newPositionRow > (this.mapRow - 1))
                &&
                (newPositionCol < 0 || newPositionCol > (this.mapCol - 1))
            )
            ||
            (newPositionRow < 0 || newPositionRow > (this.mapRow - 1))
            ||
            (newPositionCol < 0 || newPositionCol > (this.mapCol - 1))
        ) {
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
    getLeftBottomAnglePoint: function(step, positionRow, positionCol) {
        let newPositionRow = positionRow + step;
        let newPositionCol = positionCol - step;
        let angleIsset = true;

        if (
            (
                (newPositionRow < 0 || newPositionRow > (this.mapRow - 1))
                &&
                (newPositionCol < 0 || newPositionCol > (this.mapCol - 1))
            )
            ||
            (newPositionRow < 0 || newPositionRow > (this.mapRow - 1))
            ||
            (newPositionCol < 0 || newPositionCol > (this.mapCol - 1))
        ) {
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

    // Попробуем найти новую ячейку прибавив значение шага
    findNewAngel: function(step, newPositionRow, newPositionCol) {
        // Пройдемся по по шагам в 4-х направлениях и посмотрим, попадаем ли в пределы карты
        for (let stp = 1; stp <= step; stp++) {

            console.log((stp <= step));

            let newAngel = this.checkNeighboringsCellByDirections(stp, newPositionRow, newPositionCol);

            if (this.DEBUG) { console.log('|-|- newAngel: ', newAngel); }
            if (newAngel.isFind) {
                return newAngel;
            }
        }

        return {
            isFind: false
        }
    },
    checkNeighboringsCellByDirections: function(stp, newPositionRow, newPositionCol) {
        let directionLeft = this.checkCellByDirectionLeft(stp, newPositionRow, newPositionCol);
        if (directionLeft.isFind) {
            if (this.DEBUG) { console.log("directionLeft: true;"); }
            return directionLeft;
        }
        if (this.DEBUG) { console.log("directionLeft: false;"); }

        let directionTop = this.checkCellByDirectionTop(stp, newPositionRow, newPositionCol);
        if (directionTop.isFind) {
            if (this.DEBUG) { console.log("directionTop: true;"); }
            return directionTop;
        }
        if (this.DEBUG) { console.log("directionTop: false;"); }

        let directionRight = this.checkCellByDirectionRight(stp, newPositionRow, newPositionCol);
        if (directionRight.isFind) {
            if (this.DEBUG) { console.log("directionRight: true;"); }
            return directionRight;
        }
        if (this.DEBUG) { console.log("directionRight: false;"); }

        let directionBottom = this.checkCellByDirectionBottom(stp, newPositionRow, newPositionCol);
        if (directionBottom.isFind) {
            if (this.DEBUG) { console.log("directionBottom: true;"); }
            return directionBottom;
        }
        if (this.DEBUG) { console.log("directionBottom: false;"); }

        return false;
    },
    checkCellByDirectionLeft: function (stp, newPositionRow, newPositionCol) {
        let tryNewPositionCol,
            find = false;

        tryNewPositionCol = newPositionCol - stp;
        console.log('newPositionCol: ', tryNewPositionCol, (tryNewPositionCol >= 0));

        if (
            (
                (tryNewPositionCol >= 0)
                &&
                (tryNewPositionCol <= (this.mapCol - 1))
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
            (
                (tryNewPositionRow >= 0)
                &&
                (tryNewPositionRow <= (this.mapCol - 1))
            )
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
                (tryNewPositionCol >= 0)
                &&
                (tryNewPositionCol <= (this.mapCol - 1))
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
            (
                (tryNewPositionRow >= 0)
                &&
                (tryNewPositionRow <= (this.mapCol - 1))
            )
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