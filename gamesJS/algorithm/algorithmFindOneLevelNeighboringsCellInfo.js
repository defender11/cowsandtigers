import constant from './../constant'

// Проверим соседнии клетки +
export default {
    LOCAL_DEBUG: false,
    get(map, unit) {

        let cells = [];
        let unitPositionRow = parseInt(unit.positionRow);
        let unitPositionCol = parseInt(unit.positionCol);

        // Не забыть про границы карты
        let border = {
            top: 0,
            topRight: map.col,
            right: map.col,
            rightBottom: map.col,
            bottom: map.row,
            leftBottom: 0,
            left: 0,
            leftTop: 0
        };

        // TOP Проверим ячейку с вверху +
        if ((unitPositionRow - 1) >= border.top) {
            cells.push({
                direction: 'top',
                exist: true,
                content: map.getCell(unitPositionRow - 1, unitPositionCol)
            });
        }

        // TOP_RIGHT Проверим ячейку с вверху-вправо +
        if (
            (unitPositionRow - 1) >= border.top
            &&
            (unitPositionCol + 1) < border.topRight
        ) {
            cells.push({
                direction: 'topRight',
                exist: true,
                content: map.getCell(unitPositionRow - 1, unitPositionCol + 1)
            });
        }

        // RIGHT Проверим ячейку с вправо +
        if ((unitPositionCol + 1) < border.right) {
            cells.push({
                direction: 'right',
                exist: true,
                content: map.getCell(unitPositionRow, unitPositionCol + 1)
            });
        }

        // RIGHT_BOTTOM Проверим ячейку с вправо-внизу +
        if (
            (unitPositionRow + 1) < border.bottom
            &&
            (unitPositionCol + 1) < border.rightBottom
        ) {
            cells.push({
                direction: 'rightBottom',
                exist: true,
                content: map.getCell(unitPositionRow + 1, unitPositionCol + 1)
            });
        }

        // BOTTOM Проверим ячейку внизу +
        if ((unitPositionRow + 1) < border.bottom) {
            cells.push({
                direction: 'bottom',
                exist: true,
                content: map.getCell(unitPositionRow + 1, unitPositionCol)
            });
        }

        // LEFT_BOTTOM Проверим ячейку с слева-внизу +
        if (
            (unitPositionRow + 1) < border.bottom
            &&
            (unitPositionCol - 1) >= border.leftBottom
        ) {
            cells.push({
                direction: 'leftBottom',
                exist: true,
                content: map.getCell(unitPositionRow + 1, unitPositionCol - 1)
            });
        }

        // LEFT Проверим ячейку с слева +
        if ((unitPositionCol - 1) >= border.left) {
            cells.push({
                direction: 'left',
                exist: true,
                content: map.getCell(unitPositionRow, unitPositionCol - 1)
            });
        }

        // LEFT_TOP Проверим ячейку с лева-вверху +
        if (
            (unitPositionRow - 1) >= border.top
            &&
            (unitPositionCol - 1) >= border.left
        ) {
            cells.push({
                direction: 'leftTop',
                exist: true,
                content: map.getCell(unitPositionRow - 1, unitPositionCol - 1)
            });
        }

        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log(unit);
            console.log(cells);
            console.log("ROW: " + unitPositionRow, "COL: " + unitPositionCol);
        }
        return cells;
    }
}