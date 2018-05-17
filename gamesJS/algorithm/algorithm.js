import tools from "../tools";

export default class Algorithm {
    constructor() {
        this.addHealthValue = 5;
        this.subHealthValue = 3;
    }

    getAllNeighboringsCellInformation(unit, map, indexObject) {

        let neighboringsCell,
            neighboringsCellWithFood,
            neighboringsCellWithEnemies,
            neighboringsCellWithGround;

        // Проверим соседнии клетки
        neighboringsCell = map.getOneLevelCellsInfo(unit);

        /**
         * Проверим вокруг еду
         * Если есть, вернет массив, иначе пустой массив
         */
        neighboringsCellWithFood = map.filterCellByType(neighboringsCell, unit.foodType);

        if (unit.enemy !== null) {
            // TODO у тигра нет врагов
            /**
             * Проверим вокруг врагов(тигров)
             * Если есть, вернет массив, иначе пустой массив
             * */
            neighboringsCellWithEnemies = map.filterCellByType(neighboringsCell, unit.enemy);
        }

        /**
         * Проверим вокруг свободные ячейки куда можно переместиться
         * Если есть, вернет массив, иначе пустой массив
         */
        neighboringsCellWithGround = map.filterCellByType(neighboringsCell, "ground");

        return {
            neighboringsCell: neighboringsCell,
            neighboringsCellWithFood: neighboringsCellWithFood,
            neighboringsCellWithEnemies: neighboringsCellWithEnemies,
            neighboringsCellWithGround: neighboringsCellWithGround
        };
    }
}
// ------------------------------------------