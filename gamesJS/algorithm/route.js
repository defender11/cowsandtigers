import tools from "../tools";

export default class Route {
    constructor() {}

    route(map, unit, indexObject, steps, callBackUnitRoute) {

        let routeData,
            unitRowColSource,
            routeCellSteps = [
                {
                    positionRow: unit.positionRow,
                    positionCol: unit.positionCol,
                }
            ],
            direction = [
                'top',
                'topRight',
                'right',
                'rightBottom',
                'bottom',
                'leftBottom',
                'left',
                'leftTop'
            ],
            routes = new Array(steps);

        for (let i = 0; i < steps; i++) {
            let way;

            // выберим направление
            way = tools.randomInteger(0, direction.length);

            // Получить новые координаты ячейки
            routeCellSteps.push(this.getNewRowColCell(routeCellSteps[i], way, i));

            this.calculateRoute(routeCellSteps[i], function (route) {

                routes.push();
            });
        }

        callBackUnitRoute(routeData);
    }

    // Получим новые координаты на основе выбранного направления
    // проверим не вышли за границы
    getNewRowColCell (cell, way, step) {
        // cell.positionRow
        // cell.positionCol
        
        return function (cell, way, step) {
            
        }
    }

    // Просчитаем маршрут наверное ))
    calculateRoute(steps, callBack) {
        callBack(route);
    }

}