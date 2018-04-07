function Entity(param) {
    this.id = param.id;
    this.className = param.className;
    this.positionRow = param.objPositionRow;
    this.positionCol = param.objPositionCol;
}


/**
 * Обновим Row/Col объекта
 * @param unit
 */
Entity.prototype.updateRowCol = function (unit) {
    this.positionRow = unit.positionRow;
    this.positionCol = unit.positionCol;
};


/**
 * Вывод HTML объекта
 * @returns {string}
 */
Entity.prototype.show = function () {
    return "<div class='b-unit "+this.className+"'></div>";
};
// ------------------------------------------