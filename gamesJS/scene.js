import Map from './map';
import setting from './setting';

/**
 * Игровая сцена
 * @param setting
 * @constructor
 */
export default class Scene {
    constructor() {
        this.plain = document.getElementById('b-game__plain');
        this.map = new Map(setting);
    }


    /**
     * Проинициализируем карту и заполним ее объектами
     */
    build () {

        if (this.map.init()) {
            return this.map.generate();
        }
    };


    /**
     * Отрисовка заполненной карты
     */
    render () {
        let mapHTML = '';


        // Построим игровое поле
        for (let positionRow = 0; positionRow < this.map.row; positionRow++) {
            mapHTML += "<div class='row'>";
            for (let positionCol = 0; positionCol < this.map.col; positionCol++) {
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
    actionOnMap () {
        // console.log(this.map.objectsOnMap);

        for (let indexObject = 0; indexObject < this.map.objectsOnMap.length; indexObject++) {
            this.map.objectsOnMap[indexObject].action(this.map, indexObject);
        }
    };

    dieManager () {
        if (this.map.dieObjectsOnMap.length > 0) {
            for (let indexObject = 0; indexObject < this.map.dieObjectsOnMap.length; indexObject++) {
                this.map.dieObjectsOnMap[indexObject].action(this.map, indexObject);
            }
        }
    }

    /**
     * Проверим есть ли еще объекты в массиве для сущевствования игры
     * @returns {number}
     */
    issetObjectOnMap () {
        return this.map.issetObjectOnMap();
    };
}
// ------------------------------------------