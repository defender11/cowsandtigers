export default class Entity {
    constructor(param) {
        this.id = param.id;
        this.className = param.className;
        this.positionRow = param.objPositionRow;
        this.positionCol = param.objPositionCol;
    }


    /**
     * Обновим Row/Col объекта
     * @param unit
     */
    updateRowCol (unit) {
        this.positionRow = unit.positionRow;
        this.positionCol = unit.positionCol;
    }


    /**
     * Вывод HTML объекта
     * @returns {string}
     */
    show () {
        return "<div class='b-unit "+this.className+"'></div>";
    }
}

// ------------------------------------------