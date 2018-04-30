import tools from "../tools";

// Route
export default {
    mapRow:0,
    mapCol:0,

    getNeighboringsCellInformation : function (map, unit, indexObject, steps, callBackUnitRoute) {

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
        // координаты углов Unit
        // Получим координаты 4-х соторон на основе Unit
        let unitSides = this.getUnitAnglePoints(step, unit.positionRow, unit.positionCol);

        // Пройдемся по 4-ем сторонам и получим содержимое ячеек, задействуем массив с картой игры
        for (let side=0; side < unitSides.length; side++) {
            console.log("unitSides: " + unitSides[side]);
            // Пройдемся по карте с полученными углами
            let endCellRow = unitSides[side].angleEnd.positionRow;
            let endCellCol = unitSides[side].angleEnd.positionCol;

            // mapRow
            for (let startCellRow = unitSides[side].angleStart.positionRow; startCellRow<endCellRow; startCellRow++) {

                //mapCol
                for (let startCellCol = unitSides[side].angleStart.positionCol; startCellCol<endCellCol; startCellCol++) {
                    console.log("ROW: " + startCellRow, "COL: " + startCellCol);
                    // console.log(map.getCell(startCellRow, startCellCol));
                }
            }

        }

        // return unitAnglePoints;
        // callBack(neighboringsCell);
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
              angleStart:this.getLeftTopAnglePoint(step, positionRow, positionCol),
              angleEnd:this.getRightTopAnglePoint(step, positionRow, positionCol)
            },
            // rightTop
            {
              angleStart:this.getRightTopAnglePoint(step, positionRow, positionCol),
              angleEnd:this.getRightBottomAnglePoint(step, positionRow, positionCol)
            },
            // rightBottom
            {
              angleStart:this.getRightBottomAnglePoint(step, positionRow, positionCol),
              angleEnd:this.getLeftBottomAnglePoint(step, positionRow, positionCol)
            },
            // leftBottom
            {
              angleStart:this.getLeftBottomAnglePoint(step, positionRow, positionCol),
              angleEnd:this.getLeftTopAnglePoint(step, positionRow, positionCol)
            }
        ];
    },

    getLeftTopAnglePoint: function (step, positionRow, positionCol) {
        return {
            positionRow: positionRow - step,
            positionCol: positionCol - step
        }
    },
    getRightTopAnglePoint: function(step, positionRow, positionCol) {
        return {
            positionRow: positionRow - step,
            positionCol: positionCol + step
        }
    },
    getRightBottomAnglePoint: function(step, positionRow, positionCol) {
        return {
            positionRow: positionRow + step,
            positionCol: positionCol + step
        }
    },
    getLeftBottomAnglePoint: function(step, positionRow, positionCol) {
        return {
            positionRow: positionRow + step,
            positionCol: positionCol - step
        }
    }
}