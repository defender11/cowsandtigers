function Algorithm() {}

Algorithm.prototype.addHealthValue = 5;
Algorithm.prototype.subHealthValue = 3;

Algorithm.prototype.getAllNeighboringsCellInformation = function (unit, map, indexObject) {

    // Проверим соседнии клетки
    var neighboringsCell = map.checkUnitNeighboringsCell(unit);

    /**
     * Проверим вокруг еду
     * Если есть, вернет массив, иначе пустой массив
     */
    var neighboringsCellWithFood = map.filterCellByType(neighboringsCell, unit.foodType);

    if (unit.enemy !== null) {
        // TODO у тигра нет врагов
        /**
         * Проверим вокруг врагов(тигров)
         * Если есть, вернет массив, иначе пустой массив
         * */
        var neighboringsCellWithEnemies = map.filterCellByType(neighboringsCell, unit.enemy);
    }

    /**
     * Проверим вокруг свободные ячейки куда можно переместиться
     * Если есть, вернет массив, иначе пустой массив
     */
    var neighboringsCellWithGround = map.filterCellByType(neighboringsCell, "ground");

    return {
        neighboringsCell: neighboringsCell,
        neighboringsCellWithFood: neighboringsCellWithFood,
        neighboringsCellWithEnemies: neighboringsCellWithEnemies,
        neighboringsCellWithGround: neighboringsCellWithGround
    };
};
// ------------------------------------------