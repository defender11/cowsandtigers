import tools from "../tools";
import map from "../map";

// Route
export default {
    mapRow:0,
    mapCol:0,

    getNeighboringsCellInformation : function (map, unit, indexObject, steps, callBackUnitRoute) {

        let neighboringsCellInformation = [];

        this.mapRow = map.row;
        this.mapCol = map.col;

        for (let i = 1; i < steps; i++) {
            this.getNeighboringsCell(i, unit, function (neighboringsCell) {

            });
        }

        callBackUnitRoute(routeData);
    },

    // Получим соседнии ячейки
    getNeighboringsCell: function(step, unit, callBack) {
        let unitAnglePoints = [];

        // Получим координаты 4-х соторон на основе Unit
        unitAnglePoints = this.getUnitAnglePoints(step, unit.positionRow, unit.positionCol);

        // Пройдемся по 4-ем сторонам и получим содержимое ячеек
        for (let side = 1; side < unitAnglePoints.length; side++) {



            // for (let row = 0; row < .length; row++) {
            //
            //     for (let col = 0; col < .length; col++) {
            //
            //     }
            //
            // }

            // unitAnglePoints[side].positionRow
            // unitAnglePoints[side].positionCol

        }
        
        callBack(neighboringsCell);
    },

    getLeftTopAnglePoint: function (step, positionRow, positionCol) {
        let row,
            col,
            rowRight,
            colRight,
            countRow = 0,
            countCol = 0;

        // Получим позицию левого верхнего угла unit
        row = (positionRow - step) < 0 ? 0 : positionRow - step;
        col = (positionCol - step) < 0 ? 0 : positionCol - step;

        // Получим позицию правого верхнего угла unit,
        // для подсчета дистанции от левого до правого угла
        colRight = (positionCol + step) > this.mapCol ? this.mapCol : positionCol + step;

        countCol = (colRight - col) + 1;

        return {
            positionRow: row,
            // Проверим не вышли за левую часть границы карты
            positionCol: col,
            countRow: countRow,
            countCol: countCol,
        }
    },
    getRightTopAnglePoint: function(step, positionRow, positionCol) {
        let row,
            col,
            rowBottom,
            colBottom,
            countRow = 0,
            countCol = 0;

        // Получим позицию правого верхнего угла unit
        row = positionRow - step;
        col = (positionCol + step) > this.mapCol ? this.mapCol : positionCol + step;

        // Получим позицию правого угла unit,
        // для подсчета дистанции от левого до правого угла
        // {
        //     positionRow: positionRow + step,
        //     positionCol: positionCol + step,
        // }
        rowBottom = (positionRow + step) > this.mapRow ? this.mapRow : positionRow + step;
        colBottom = (positionCol + step) > this.mapCol ? this.mapCol : positionCol + step;

        countCol = (colRight - col) + 1;

        return {
            positionRow: row,
            // Проверим не вышли за левую часть границы карты
            positionCol: col,
            countRow: countRow,
            countCol: countCol,
        }
    },
    getRightBottomAnglePoint: function(step, positionRow, positionCol) {},
    getLeftBottomAnglePoint: function(step, positionRow, positionCol) {},

    /**
     * Получим координаты 4-х соторон на основе Unit
     * @param step
     * @param positionRow
     * @param positionCol
     * @returns {Array}
     */
    getUnitAnglePoints: function (step, positionRow, positionCol) {
        let unitAnglePoints = [];

        // Left Top Angle Point
        unitAnglePoints.push(this.getLeftTopAnglePoint(step, positionRow, positionCol));

        // Right Top Angle Point
        unitAnglePoints.push(this.getRightTopAnglePoint(step, positionRow, positionCol));
            // {
            //     positionRow: positionRow - step,
            //     positionCol: positionCol + step,
            // }

        // Right Bottom Angle Point
        unitAnglePoints.push(this.getRightBottomAnglePoint(step, positionRow, positionCol));
            // {
            //     positionRow: positionRow + step,
            //     positionCol: positionCol + step,
            // }

        // Left Bottom Angle Point
        unitAnglePoints.push(this.getLeftBottomAnglePoint(step, positionRow, positionCol));
            // {
            //     positionRow: positionRow + step,
            //     positionCol: positionCol - step,
            // }

        return unitAnglePoints;
    }

}