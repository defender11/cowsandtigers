function DieUnit(param) {
    Entity.call(this, param);

    this.indexObject = param.indexObject;

    this.algoritms = new DeathAlgorithm();

    this.dieUnitType = param.dieUnitType;
    this.dieUnitId = param.dieUnitId;

    this.unitResurectionInterval = 3;
    this.unitResurectionIntervalLeft = 0;

    // this.soundDie = new GameSounds("audio/die_" + this.className + ".mp3");
}

DieUnit.prototype = Entity;
DieUnit.constructor = DieUnit;


DieUnit.prototype.setIndexObject = function (indexObject) {
    this.indexObject = indexObject;
};


/**
 * Разные действия объекта
 */
DieUnit.prototype.action = function (map, indexObject) {
    this.algoritms.act(this, map, indexObject);
};


/**
 * Обновим Row/Col объекта
 * @param unit
 */
DieUnit.prototype.updateRowCol = function (unit) {
    this.positionRow = unit.positionRow;
    this.positionCol = unit.positionCol;
};
// ------------------------------------------