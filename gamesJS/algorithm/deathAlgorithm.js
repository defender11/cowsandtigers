// DEATH ALGORITM
import Entity from './../entity';
import Unit from './../unit';


// GROUND ALGORITM
export default class DeathAlgorithm {
    act (deathUnit, map, indexObject) {
        if (deathUnit.unitResurectionIntervalLeft < deathUnit.unitResurectionInterval) {
            deathUnit.unitResurectionIntervalLeft++;
        } else {

            var newPosition = map.getNewRowColPosition();

            // console.log(newPositionRowCol);

            var unitParam = {
                id: deathUnit.dieUnitId,
                className: deathUnit.dieUnitType,
                objPositionRow: newPosition.row,
                objPositionCol: newPosition.col,
            };

            var newUnit = new Unit(unitParam);

            var dieObjectsOnMapIndex = map.getIndexFromDieObjectsOnMap(deathUnit);

            var entityParam = {
                id: 3,
                className: "ground",
                objPositionRow: deathUnit.positionRow,
                objPositionCol: deathUnit.positionCol
            };

            // На место старого Unit поставим ground
            map.setCell(deathUnit, new Entity(entityParam));

            map.setCell(newUnit, newUnit);

            map.addToObjectsOnMap(newUnit);

            map.removeUnitFromDieObjectsOnMap(dieObjectsOnMapIndex);
        }
    }
}
// ------------------------------------------
