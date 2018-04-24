import tools from "../tools";

export default {

    calculate : function (map, unit, indexObject, steps, callBackUnitRoute) {

        let routeData = [],
            unitRowColSource,
            routeCellSteps = [
                {
                    positionRow: unit.positionRow,
                    positionCol: unit.positionCol,
                }
            ],
            routes = new Array(steps);

        for (let i = 0; i < steps; i++) {
            let direction = [
                'top',
                'topRight',
                'right',
                'rightBottom',
                'bottom',
                'leftBottom',
                'left',
                'leftTop'
            ];
            let directionWay;
            let newDirectionWay;

            // выберим направление
            directionWay = tools.randomInteger(0, direction.length);

            do {
                newDirectionWay = this.getNewRowColCell(routeCellSteps[i], directionWay, i);
            } while (!newDirectionWay);

            console.log(newDirectionWay);
            // Получим новые координаты ячейки
            routeCellSteps.push(newDirectionWay);

            this.calculateRoute(routeCellSteps[i], function (route) {

                routes.push(route);

                routeData.push(route);
            });
        }

        callBackUnitRoute(routeData);
    },

    // Получим новые координаты на основе выбранного направления
    // проверим не вышли за границы
    getNewRowColCell: function (cell, way, step) {
        // cell.positionRow
        // cell.positionCol
        
        console.log(cell);
        
        
        // return function (cell, way, step) {
        //    
        // }
    },

    // Просчитаем маршрут наверное ))
    calculateRoute: function(steps, callBack) {
        callBack(route);
    }

}