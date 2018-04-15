export default class Algorithm {
    constructor() {
        this.addHealthValue = 5;
        this.subHealthValue = 3;
    }

    getAllNeighboringsCellInformation (unit, map, indexObject) {

        // Проверим соседнии клетки
        let neighboringsCell = map.checkUnitNeighboringsCell(unit);

        /**
         * Проверим вокруг еду
         * Если есть, вернет массив, иначе пустой массив
         */
        let neighboringsCellWithFood = map.filterCellByType(neighboringsCell, unit.foodType);

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
        let neighboringsCellWithGround = map.filterCellByType(neighboringsCell, "ground");

        return {
            neighboringsCell: neighboringsCell,
            neighboringsCellWithFood: neighboringsCellWithFood,
            neighboringsCellWithEnemies: neighboringsCellWithEnemies,
            neighboringsCellWithGround: neighboringsCellWithGround
        };
    }


    way (map, unit, indexObject, callBackUnitAction) {

        let data;

        // Получим координаты unit и сохраним их
        let unitCellSource = {
            positionRow: unit.positionRow,
            positionCol: unit.positionCol,
        };
        
        let unitCellNew = map.getRandomRowColBasedOnUnit(unitCellSource);


        console.log(unit);
        console.log(unitCellNew);
        // Необходимо сохранить координаты новой ячейки
        // let newUnitCell = {
        //     positionRow: 0,
        //     positionCol: 0
        // };



        callBackUnitAction(data);

    }


}
// ------------------------------------------