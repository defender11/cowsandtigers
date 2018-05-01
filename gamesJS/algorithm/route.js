import tools from "../tools";

// Route
export default {
    mapRow:0,
    mapCol:0,

    getNeighboringsCellInformation : function (map, unit, indexObject, steps, callBackUnitRoute) {

        console.log(map.mapData);
        console.log(unit);

        let neighboringsCellInformation = [];

        this.mapRow = map.row;
        this.mapCol = map.col;

        // получим инфо о четырех сторонах на дистанции полученной от Unit
        for (let step = 1; step  < steps; step++) {
            console.log('step: ' + step);

            // Вот прям здесь получим
            neighboringsCellInformation.push(this.getNeighboringsCell(step, unit, map));
        }

        return neighboringsCellInformation;
    },

    // Получим инфо соседних ячеек на кадой иттерации
    getNeighboringsCell: function(step, unit, map) {
        let neighboringsCellInfo = [];

        // координаты углов Unit
        // Получим координаты 4-х соторон на основе Unit
        let unitSides = this.getUnitAnglePoints(step, unit.positionRow, unit.positionCol);

        console.log("unitSides");
        console.log(unitSides);

        // Пройдемся по 4-ем сторонам и получим содержимое ячеек, задействуем массив с картой игры
        for (let side=0; side < unitSides.length; side++) {

            console.log("side: " + unitSides[side].name);

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
                        console.log("angleStartRow: " + unitSides[side].angleStart.positionRow, "endCellRow: " + endCellRow, " | angleStartCol: " + unitSides[side].angleStart.positionCol, "endCellCol: " + endCellCol);
                        console.log("ROW: " + startCellRow, "COL: " + startCellCol);
                        console.log(map.getCell(startCellRow, startCellCol));
                        console.log('--------------------');
                        console.log('startCellCol: ' + startCellCol);
                        console.log('--------------------');

                        neighboringsCellInfo.push(map.getCell(startCellRow, startCellCol));
                    }
                }
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
    },

    getLeftTopAnglePoint: function (step, positionRow, positionCol) {
        let newPosition;
        let newPositionRow = positionRow - step;
        let newPositionCol = positionCol - step;

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
            newPosition = this.findNewAngel(step, positionRow, positionCol, newPositionRow, newPositionCol);

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol
        }
    },
    getRightTopAnglePoint: function(step, positionRow, positionCol) {
        let newPositionRow = positionRow - step;
        let newPositionCol = positionCol + step;

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
            let newPosition = this.findNewAngel(step, positionRow, positionCol, newPositionRow, newPositionCol);

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol
        }
    },
    getRightBottomAnglePoint: function(step, positionRow, positionCol) {
        let newPositionRow = positionRow + step;
        let newPositionCol = positionCol + step;

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
            let newPosition = this.findNewAngel(step, positionRow, positionCol, newPositionRow, newPositionCol);

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol
        }
    },
    getLeftBottomAnglePoint: function(step, positionRow, positionCol) {
        let newPositionRow = positionRow + step;
        let newPositionCol = positionCol - step;

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
            let newPosition = this.findNewAngel(step, positionRow, positionCol, newPositionRow, newPositionCol);

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol
        }
    },

    // Попробуем найти новую ячейку прибавив значение шага
    findNewAngel: function(step, positionRow, positionCol, newPositionRow, newPositionCol) {

        // Пройдемся по по шагам в 4-х направлениях и посмотрим, попадаем ли в пределы карты
        for (let stp = 1; stp <= step.length; stp++) {

            let newAngel = this.checkNeighboringsCellByDirections(stp, positionRow, positionCol, newPositionRow, newPositionCol);

            if (newAngel.isFind) {
                return newAngel;
            }
        }

        return {
            isFind: false
        }
    },
    checkNeighboringsCellByDirections: function(stp, positionRow, positionCol, newPositionRow, newPositionCol) {
        let directionLeft = this.checkCellByDirectionLeft(stp, positionRow, positionCol, newPositionRow, newPositionCol);
        if (directionLeft.isFind) {
            return directionLeft;
        }

        let directionTop = this.checkCellByDirectionTop(stp, positionRow, positionCol, newPositionRow, newPositionCol);
        if (directionTop.isFind) {
            return directionTop;
        }

        let directionRight = this.checkCellByDirectionRight(stp, positionRow, positionCol, newPositionRow, newPositionCol);
        if (directionRight.isFind) {
            return directionRight;
        }

        let directionBottom = this.checkCellByDirectionBottom(stp, positionRow, positionCol, newPositionRow, newPositionCol);
        if (directionBottom.isFind) {
            return directionBottom;
        }
    },
    checkCellByDirectionLeft: function (stp, positionRow, positionCol, newPositionRow, newPositionCol) {
        let tryNewPositionCol,
            issetAngel = false;

        tryNewPositionCol = newPositionCol - stp;

        if (tryNewPositionCol >= 0 || tryNewPositionCol <= (this.mapCol - 1)) {
            issetAngel = true;
        }

        return {
            positionRow: newPositionRow,
            positionCol: tryNewPositionCol,
            isFind: issetAngel
        };
    },
    checkCellByDirectionTop: function (stp, positionRow, positionCol, newPositionRow, newPositionCol) {
        let tryNewPositionRow,
            issetAngel = false;

        tryNewPositionRow = newPositionRow - stp;

        if (tryNewPositionRow >= 0 || tryNewPositionRow <= (this.mapRow - 1)) {
            issetAngel = true;
        }

        return {
            positionRow: tryNewPositionRow,
            positionCol: newPositionCol,
            isFind: issetAngel
        };
    },
    checkCellByDirectionRight: function (stp, positionRow, positionCol, newPositionRow, newPositionCol) {
        let tryNewPositionCol,
            issetAngel = false;

        tryNewPositionCol = newPositionCol + stp;

        if (tryNewPositionCol >= 0 || tryNewPositionCol <= (this.mapCol - 1)) {
            issetAngel = true;
        }

        return {
            positionRow: newPositionRow,
            positionCol: tryNewPositionCol,
            isFind: issetAngel
        };
    },
    checkCellByDirectionBottom: function (stp, positionRow, positionCol, newPositionRow, newPositionCol) {
        let tryNewPositionRow,
            issetAngel = false;

        tryNewPositionRow = newPositionRow + stp;

        if (tryNewPositionRow >= 0 || tryNewPositionRow <= (this.mapRow - 1)) {
            issetAngel = true;
        }

        return {
            positionRow: tryNewPositionRow,
            positionCol: newPositionCol,
            isFind: issetAngel
        };
    }
}