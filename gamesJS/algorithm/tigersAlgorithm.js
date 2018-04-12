import Algorithm from './algorithm';
import Entity from './../entity';
import DieUnit from './../dieUnit';
import tools from './../tools';

// TIGERS ALGORITM
export default class TigersAlgorithm extends Algorithm {
    act (unit, map, indexObject) {

        let data = this.getAllNeighboringsCellInformation(unit, map, indexObject);

        /**
         * data:
         * Массив с Картой              - data.map
         * Массив с Соседними клетками  - data.neighboringsCell
         * Массив с Травой              - data.neighboringsCellWithFood
         * Массив с Тиграми             - data.neighboringsCellWithEnemies
         * Массив с Землёй              - data.neighboringsCellWithGround
         */

        if (unit.health > 0) {
            //     // Проверим есть рядом еда
            if (data.neighboringsCellWithFood.length > 0) {
                this.moveToFood(map, unit, data.neighboringsCellWithFood, indexObject);
            }
            else if (data.neighboringsCellWithGround.length > 0) {
                this.moveFree(map, unit, data.neighboringsCellWithGround, indexObject);
            }
        }
        else {
            map.killUnit(unit, indexObject);
        }
    };

    /**
     * Едим корову
     * @param map
     * @param unit
     * @param neighboringsCellWithFood
     * @param indexObject
     */
    moveToFood (map, unit, neighboringsCellWithFood, indexObject) {

        // unit.soundEat.stop();

        // Получим произволный индекс в массиве коров
        let cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithFood.length -1);

        // Эта ячейка являеться коровой, т.е ЕДОЙ!!!
        // neighboringsCellWithFood[cellRandomRowCol]
        // unit.eaten(true, neighboringsCellWithFood[cellRandomRowCol]);

        // Получим index съеденой коровы из массива objectsOnMap
        let foodIndex = map.getIndexFromObjectsOnMap(neighboringsCellWithFood[cellRandomRowCol]);

        // Пометили тигра что он съел корову
        unit.eaten(neighboringsCellWithFood[cellRandomRowCol], foodIndex);

        let oldUnit = unit;

        let unitParam = {
            id: 3,
            className: "ground",
            objPositionRow: unit.positionRow,
            objPositionCol: unit.positionCol
        };

        // На место старого Unit поставим ground
        map.setCell(unit, new Entity(unitParam));

        // Для тигра зададим новые Row/Col
        map.setCell(neighboringsCellWithFood[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithFood[cellRandomRowCol], indexObject);

        // Удалим корову из игрового массива
        map.removeUnitFromObjectsOnMap(foodIndex);

        delete neighboringsCellWithFood[cellRandomRowCol];

        // При поглащении травы прибавим жизни, ограничим значением 100
        if (unit.health < 100 ) {

            if (unit.health > 90) {
                unit.addHealth(100-unit.health);
            } else {
                unit.addHealth(this.addHealthValue);
            }

        }

        // unit.soundEat.play();
    }

    /**
     * Свободное перемещение
     * @param map
     * @param unit
     * @param neighboringsCellWithGround
     * @param indexObject
     */
    moveFree (map, unit, neighboringsCellWithGround, indexObject) {
        // unit.soundEat.stop();

        let oldUnit = unit;

        let unitParam = {};

        // unit.foodInformation.indexObject

        // Проверим убил ли данный тигр только что корову,
        // если да, то на след. шаге поставим на его место табличкуunit.foodInformation.indexObject
        if (unit.isEaten()) {

            unitParam = {
                id: 4,
                className: "death",
                objPositionRow: unit.foodInformation.positionRow,
                objPositionCol: unit.foodInformation.positionCol,
                dieUnitType: unit.foodInformation.className,
                dieUnitId: unit.foodInformation.id
            };

            let dieUnit = new DieUnit(unitParam);

            dieUnit.setIndexObject(unit.foodInformation.indexObject);

            map.addDieUnitToDieArray(dieUnit);

            map.setCell(unit, dieUnit);
        } else {

            unitParam = {
                id: 3,
                className: "ground",
                objPositionRow: unit.positionRow,
                objPositionCol: unit.positionCol
            };

            // На место старого Unit поставим ground
            map.setCell(unit, new Entity(unitParam));
        }

        oldUnit.resetEaten();

        oldUnit.subHealth(this.subHealthValue);

        // Получим произволный индекс в массиве с землей
        let cellRandomRowCol = tools.randomInteger(0, neighboringsCellWithGround.length - 1);

        // Для старого Unit зададим новые Row/Col
        map.setCell(neighboringsCellWithGround[cellRandomRowCol], oldUnit);

        // Обновим RC в массиве objectsOnMap
        map.updateUnitRowColInObjectsOnMap(neighboringsCellWithGround[cellRandomRowCol], indexObject);

        // unit.soundEat.play();
    }
}


