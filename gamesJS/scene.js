/**
 * Игровая сцена
 * @param setting
 * @constructor
 */
function Scene(setting) {
    this.plain = document.getElementById('b-game__plain');
    this.map = new Map(setting);
}

/**
 * Проинициализируем карту и заполним ее объектами
 */
Scene.prototype.build = function () {

    if (this.map.init()) {
        return this.map.generate();
    }
};


/**
 * Отрисовка заполненной карты
 */
Scene.prototype.render = function () {
    var mapHTML = '';


    // Построим игровое поле
    for (var positionRow = 0; positionRow < this.map.row; positionRow++) {
        mapHTML += "<div class='row'>";
        for (var positionCol = 0; positionCol < this.map.col; positionCol++) {
            mapHTML += "<div class='cell'> " + this.map.getCell(positionRow, positionCol).show() + "</div>";
        }
        mapHTML += "</div>";
    }

    // Добавим собранную HTML карту в DOM
    this.plain.innerHTML = mapHTML;
};


/**
 * Действия всех объектов на карте
 */
Scene.prototype.actionOnMap = function () {
    // console.log(this.map.objectsOnMap);

    for (var indexObject = 0; indexObject < this.map.objectsOnMap.length; indexObject++) {
        this.map.objectsOnMap[indexObject].action(this.map, indexObject);
    }
};

Scene.prototype.dieManager = function () {
    if (this.map.dieObjectsOnMap.length > 0) {
        for (var indexObject = 0; indexObject < this.map.dieObjectsOnMap.length; indexObject++) {
            this.map.dieObjectsOnMap[indexObject].action(this.map, indexObject);
        }
    }
}

/**
 * Проверим есть ли еще объекты в массиве для сущевствования игры
 * @returns {number}
 */
Scene.prototype.issetObjectOnMap = function () {
    return this.map.issetObjectOnMap();
};
// ------------------------------------------