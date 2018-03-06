/*
 * 0 - пусто
 * 1 - корова
 * 2 - тигр
 * 3 - трава
 * 4 - еда
 * 5 - смерть
*/

/*
* КОРОВА
* ходит по траве
* ---------------
* Ход: 1 клетка
* Дальность чувства еды: 3 клетки
* Дальность чувства хищника: 2 клетки
* Уровень здоровья: 100
* */

/*
* ТИГР
* ходит по траве
* ---------------
* Ход: 1 клетка
* Дальность чувства еды: 4 клетки
* Уровень здоровья: 100
* */

/*
* ТРАВА
* ---------------
* Растет там, где не заполненно
* */

/*
* ПУСТО
* ---------------
* На этом месте появляеться:
 * Трава
 * Трава + Еда
 * Еда
* */

/*
* ЕДА
* ---------------
* Добавляет здоровья +50, но не больше чем 100
* Появляеться как на траве, так и на пустом месте
* */

/*
* СМЕРТЬ
* ---------------
* Держиться 3 хода
* Потом появляеться пустота
* */

var game = (function ($) {



    // Ядро игры
    var game = {
        devMode: false,
        timeRender: 1000,
        init: function ($gameContainer, setting) {
            this.devMode = setting.devMode;
            this.timeRender = setting.timeRender;

            grass.min = setting.grass.min;
            grass.max = setting.grass.max;

            cows.min = setting.cows.min;
            cows.max = setting.cows.max;

            tigers.min = setting.tigers.min;
            tigers.max = setting.tigers.max;

            // создадим сцену ввиде массива
            scene.build(setting);

            // добавим в объект scene - ссылку на контейнер где будет вывод игры
            scene.gameContainer = $gameContainer;

            // Запуск игры
            this.run();
        },
        run: function () {
            if (!this.devMode) {
                // Главный Loop
                setInterval(function () {
                    scene.event(map);
                    scene.render(map);
                }, this.timeRender);
            } else {
                scene.event(map);
                scene.render(map);
            }
        }
    };

    var scene = {
        elements: [],
        gameContainer: null,
        build: function (setting) {
            map.init(setting);

            // Добавим объекты в массив
            this.elements.push(ground,cows,tigers,grass);

            // Добавим траву
            map.generate(this.elements[3]);
            // Добавим коров
            map.generate(this.elements[1]);
            // Добавим тигров
            map.generate(this.elements[2]);
            // Добавим землю
            map.generate(this.elements[0]);

        },
        getObj: function (map, row, col) {
            var value = map.mapData[row][col];

            if (value > 0) {
                return this.elements[value];
            } else {
                return ground;
            }
        },
        render: function (map) {
            var mapHTML = '';

            // console.log(mapData);
            // Построим игровое поле
            for (var row = 0; row < map.row; row++) {

                mapHTML += "<div class='row'>";

                for (var col = 0; col < map.col; col++) {

                    mapHTML += "<div class='cell'> " + this.getObj(map, row, col).show() + "</div>";

                }

                mapHTML += "</div>";
            }

            $(this.gameContainer).find(".plain").html(mapHTML);
        },
        event: function (map) {
            // для каждого объекта вызовим его метод action с своим поведением
            for (var i=0; i < this.elements.length; i++) {
                this.elements[i].action(map);
            }
        }
    };

    var map = {
        mapData: null,
        row: 0,
        col: 0,
        init: function (setting) {
            this.row = setting.map.row;
            this.col = setting.map.col;

            this.mapData = [];
            while(this.mapData.push([]) < this.row);
        },
        generate: function(obj) {

            // Получим кол-во объектов на карте
            var objCountOnMap = tools.randomInteger(obj.min, obj.max);

            // console.log(objCountOnMap);

            // Пройдемся по этому количевству
            for (var i = 0; i < objCountOnMap; i++) {

                var mapRowCol = this.getRandomRowColCoord();

                // console.log('mapRowColNormal: ', mapRowCol);

                if (this.mapData[mapRowCol.row][mapRowCol.col] == undefined) {
                    this.mapData[mapRowCol.row][mapRowCol.col] = obj.id;

                    // Сохраним координаты добавленного элемента на карте
                    obj.saveCoordinate(mapRowCol.row,mapRowCol.col);

                } else {
                    this.tryNewGenerate(obj, objCountOnMap);
                }
            }
        },
        tryNewGenerate: function (obj, count) {

            if(count <= 0) return false;

            // Пройдемся по этому количевству
            for (var i = 0; i < count; i++) {

                // создадим координаты для проставления
                var mapRowCol = this.getRandomRowColCoord();

                // console.log('mapRowColRecursive: ', mapRowCol);

                if (this.mapData[mapRowCol.row][mapRowCol.col] == undefined) {
                    this.mapData[mapRowCol.row][mapRowCol.col] = obj.id;

                    // Сохраним координаты добавленного элемента на карте
                    obj.saveCoordinate(mapRowCol.row,mapRowCol.col);
                    return false;
                } else {
                    return this.tryNewGenerate(obj, count - 1);
                }
            }
        },
        
        /**
         * Получим произвольные координаты на основе кол-во строк и колонок
         * @param setting
         * @returns {{row: *, col: *}}
         */
        getRandomRowColCoord: function () {
            var countRow = this.row,
                countCol = this.col;

            return {
                row: tools.randomInteger(0, countRow),
                col: tools.randomInteger(0, countCol)
            }
        }
    }

    // Агоритм движение, сделал прототипом, т.к приминяеться у тигров и коров
    //
    function Algorithm () {}

    Algorithm.prototype.init = function (obj, map) {

        // Проверим и вернем координаты хотя бы одной безопасной клетки
        // return {
        //  safe: true, false;
        //  safeCellCoordinates: [{row: 0, cell: 0},{row: 1, cell: 0}];
        // }
        var neighborsCellReport = this.isAnyNeighborsCellSafe(obj, map);

        // if (neighborsCellReport.safe) {
        //     this.move(obj, map, neighborsCellReport.safeCellCoordinates);
        // }
    }

    Algorithm.prototype.isAnyNeighborsCellSafe = function (obj, map) {


        var elsCoord = [];

        for (var i = 0; i < obj.coordinate.length; i++) {

            // Доделать и проверить, не правильно определяет границы
            var safeWays = this.doesNotGoBeyondBorders(obj.coordinate[i], map);
            
            console.log(safeWays);
        }

        // for (var row = 0; row < map.row; row++) {
        //     for (var col = 0; col < map.col; col++) {
        //         if (map.mapData[row][col] == obj.id) {
        //             elsCoord.push({
        //                 row: row,
        //                 col: col
        //             });
        //         }
        //     }
        // }
        // return elsCoord;
    }

    // Проверим не зашли ли за границы
    Algorithm.prototype.doesNotGoBeyondBorders = function (elementCoord, map) {
        // Не забыть про границы карты
        var leftTopAngle = 0,
            left = 0,
            right = map.cell,
            top = 0,
            bottom = map.row,
            rightTopAngle = map.cell,
            leftBottomAngle = map.row,
            rightBottomAngle = map.cell;

        var safeAngle = {
            top: false,
            topRight: false,
            right: false,
            rightBottom: false,
            bottom: false,
            leftBottom: false,
            left: false,
            leftTop: false
        };

        // Проверим ячейку с вверху
        if ((elementCoord.col - 1) >= top) {
            safeAngle.top = true;
        }
        // Проверим ячейку с вверху-вправо
        if ((elementCoord.row + 1 ) >= top && (elementCoord.col - 1) <= rightTopAngle) {
            safeAngle.topRight = true;
        }
        // Проверим ячейку с вправо
        if ((elementCoord.row + 1 ) <= rightTopAngle) {
            safeAngle.right = true;
        }
        // Проверим ячейку с вправо-внизу
        if ((elementCoord.row + 1 ) <= rightTopAngle && (elementCoord.col + 1) <=  rightBottomAngle) {
            safeAngle.rightBottom = true;
        }
        // Проверим ячейку внизу
        if ((elementCoord.col + 1) <=  bottom) {
            safeAngle.bottom = true;
        }
        // Проверим ячейку с слева-внизу
        if ((elementCoord.row - 1 ) <= leftBottomAngle && (elementCoord.col + 1) <=  bottom) {
            safeAngle.leftBottom = true;
        }
        // Проверим ячейку с слева
        if ((elementCoord.row - 1 ) <= left) {
            safeAngle.left = true;
        }
        // Проверим ячейку с лева-вверху
        if ((elementCoord.row - 1 ) <= left && (elementCoord.col - 1 ) <= top) {
            safeAngle.leftTop = true;
        }

        return safeAngle;
    }

    Algorithm.prototype.findSafeWays = function (obj, map) {

    }
    Algorithm.prototype.move = function (obj, map, safeCellCoordinates) {
        console.log("Algorithm work");
        console.log(obj);
        console.log(map);
    }

    var algorithm = new Algorithm();

    var ground = {
        id: 0,
        min: 1,
        max: 12,
        coordinate: [],
        show: function () {
            return "<div class='null'></div>";
        },
        action: function (map) {
            console.log("action groud");
        },
        saveCoordinate: function (row,col) {
            this.coordinate.push({
                row: row,
                col: col
            });
        }
    };

    // Трава
    var grass = {
        id: 3,
        min: 0,
        max: 3,
        coordinate: [],
        show: function () {
            return "<div class='grass'></div>";
        },
        action: function (map) {
            console.log("action grass");
        },
        saveCoordinate: function (row,col) {
            this.coordinate.push({
                row: row,
                col: col
            });
        }
    };

    // Коровы
    var cows = {
        id: 1,
        min: 0,
        max: 3,
        coordinate: [],
        show: function () {
            return "<div class='cow'></div>";
        },
        action: function (map) {
            algorithm.init(this, map);
        },
        saveCoordinate: function (row,col) {
            this.coordinate.push({
                row: row,
                col: col
            });
        }
    };

    // Тигры
    var tigers = {
        id: 2,
        min: 0,
        max: 3,
        coordinate: [],
        show: function () {
            return "<div class='tiger'></div>";
        },
        action: function (map) {
            console.log("action tigers");
        },
        saveCoordinate: function (row,col) {
            this.coordinate.push({
                row: row,
                col: col
            });
        }
    };

    // ???
    var controls = {
        cows: function () {

        },
        tigers: function () {

        }
    }
    
    // Вспомогательные функции для игры
    var tools = {

        randomInteger: function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        /*
        showLoading: function (startNumber, endNumber, $gameContainer, process) {
            var progress = startNumber * 100 / endNumber;
            var $progressBar = $gameContainer.find('progress');
            var $process = $gameContainer.find('.process');

            $progressBar.show();
            $process.show();

            $progressBar.val(progress);
            $process.html(process);

            if (startNumber == (endNumber -1)) {
                $progressBar.hide();
                $process.hide();
            }
        }
        */
    };

    return {
        init: function ($gameContainer, setting) {
            game.init($gameContainer, setting);
        }
    }
})(jQuery);