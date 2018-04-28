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
            countCol = 0,
            issetTopAnglePoint = false;

        // Получим позицию левого верхнего угла unit
        row = (positionRow - step) <= 0 ? 0 : positionRow - step;
        col = (positionCol - step) <= 0 ? 0 : positionCol - step;

        // если вычесляемая позиция == позиций Unit,
        // Мы в левом верхнем углу и тогда верхнего ряда вообще нет
        if (
            positionRow == row
            &&
            positionCol == col
        ) {
            // мы в левом верхнем углу
            // тогда левой стороны вообще нет
            // верха тоже нет
            return {
                positionRow: row,
                // Проверим не вышли за левую часть границы карты
                positionCol: col,
                countRow: countRow,
                countCol: countCol,
                issetAnglePoint: issetTopAnglePoint
            }
        }



        // Если строка выше верхнего края, то ряда нет
        if (positionRow - step >= 0) {
            issetTopAnglePoint = true;

            // если вычесляемая позиция == позиций Unit,
            // Мы в Левом верхнем углу и тогда верхнего ряда вообще нет
            if (
                positionRow == row
                &&
                positionCol == col
            ) {
                issetTopAnglePoint = false;
            }
            else {
                // Получим позицию правого верхнего угла unit,
                // для подсчета дистанции от левого до правого угла
                colRight = (positionCol + step) > this.mapCol ? this.mapCol : positionCol + step;

                countCol = (colRight - col) + 1;
            }
        }

        return {
            positionRow: row,
            // Проверим не вышли за левую часть границы карты
            positionCol: col,
            countRow: countRow,
            countCol: countCol,
            issetAnglePoint: issetTopAnglePoint
        }
    },
    getRightTopAnglePoint: function(step, positionRow, positionCol) {
        let row,
            col,
            rowBottom,
            colBottom,
            countRow = 0,
            countCol = 0,
            issetTopAnglePoint = false;

        // Получим позицию правого верхнего угла unit
        row = (positionRow - step) <= 0 ? 0 : positionRow - step;
        col = (positionCol + step) >= this.mapCol ? this.mapCol : positionCol + step;

        // если результат позиций == позиций Unit,
        // Мы в правом верхнем углу и тогда верхнего ряда вообще нет
        if (
            positionRow == row
            &&
            positionCol == col
        ) {
            // мы в правом верхнем углу
            // тогда правой стороны вообще нет
            // верха тоже нет

            /*// попробуем посмотреть в лево от тек.позиции
            if (
                (((positionCol + step) - 1) <= this.mapCol)
                &&
                ((positionRow - step) >= 0)
            ) {
                issetTopAnglePoint = true;

                // получим коодринаты ячейки с лева
                row = positionRow - step;
                col = (positionCol + step) - 1;

            }

            // Если с лева  мы за пределами карты, попробуем посмотреть в низ
            if (!issetTopAnglePoint) {
                if (
                    ((positionCol + step) <= this.map)
                    &&
                    ((positionRow + step) >= 0)
                ) {
                    issetTopAnglePoint = true;
                }
            }*/


            return {
                positionRow: row,
                positionCol: col,
                countRow: countRow,
                countCol: countCol,
                issetAnglePoint: issetTopAnglePoint
            }
        }

        // ячейка за приделами границы карты
        if (
            (positionRow - step) < 0 &&
            (positionCol + step) > this.mapCol
        ) {

            // посмотрем что с лева от ячейки
            if (
                (positionRow - step) >= 0 &&
                ((positionCol + step) - 1) <= this.mapCol
            ) {
                issetTopAnglePoint = true;

                row = positionRow - step;
                col = (positionCol + step) - 1;
            }

            // Если с лева ячейки нет, посмотрим что в низу на step
            if (!issetTopAnglePoint) {
                if (
                    ((positionRow - step) + 1) >= 0 &&
                    (positionCol + step) <= this.mapCol
                ) {

                    issetTopAnglePoint = true;

                    row = (positionRow - step) + 1;
                    col = positionCol + step;
                }
            }
            return {
                positionRow: row,
                // Проверим не вышли за левую часть границы карты
                positionCol: col,
                countRow: countRow,
                countCol: countCol,
                issetAnglePoint: issetTopAnglePoint
            }
        }


/*

        // while(row < 0) {
        //     row++;
        // }

        // Если строка выше верхнего края, то ряда нет
        if (row >= 0) {
            issetTopAnglePoint = true;

            // если вычесляемая позиция == позиций Unit,
            // Мы в правом верхнем углу и тогда верхнего ряда вообще нет
            if (
                positionRow == row
                &&
                positionCol == col
            ) {
                issetTopAnglePoint = false;
            }
            else {
                // Получим позицию правого верхнего угла unit,
                // для подсчета дистанции от левого до правого угла
                colRight = (positionCol + step) > this.mapCol ? this.mapCol : positionCol + step;

                countCol = (colRight - col) + 1;
            }
        }

        return {
            positionRow: row,
            // Проверим не вышли за левую часть границы карты
            positionCol: col,
            countRow: countRow,
            countCol: countCol,
            issetAnglePoint: issetTopAnglePoint
        }


        // Получим позицию правого верхнего угла unit,
        // для подсчета дистанции от левого до правого угла
        colRight = (positionCol + step) > this.mapCol ? this.mapCol : positionCol + step;

        countCol = (colRight - col) + 1;

        // Проверим сущевствование верхнего ряда
        if (positionCol == col) {
            issetTopAnglePoint = false;
        }
*/

        return {
            positionRow: row,
            // Проверим не вышли за левую часть границы карты
            positionCol: col,
            countRow: countRow,
            countCol: countCol,
            issetAnglePoint: issetTopAnglePoint
        }
    },
    getRightBottomAnglePoint: function(step, positionRow, positionCol) {

    },
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