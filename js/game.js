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
                    scene.render(map);
                }, this.timeRender);
            } else {
                scene.render(map);
            }
        }
    };

    var scene = {
        gameContainer: null,
        build: function (setting) {
            map.init(setting);

            // Добавим траву
            map.generate(grass);
            // Добавим коров
            map.generate(cows);
            // Добавим тигров
            map.generate(tigers);
            // Добавим землю
            map.generate(ground);

            console.log(map.mapData);
        },
        getObj: function (map, row, col) {
            var value = map.mapData[row][col];

            // Костыль, очень редко выплывает одна ячейка не заполнена
            // if (!value) {
            //     return ground;
            // }
            var unit = [ground, cows, tigers, grass];

            // if (unit.indexOf(+value) != -1) {
            if (unit[+value] != undefined) {
                return unit[+value];
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
                //
                // do {
                //
                //     var isCoordAdd = false;
                //
                //     // создадим координаты для проставления
                //     var mapRowCol = this.getRandomRowColCoord();
                //
                //     if (this.mapData[mapRowCol.row][mapRowCol.col] == undefined) {
                //         this.mapData[mapRowCol.row][mapRowCol.col] = obj.id;
                //         isCoordAdd = true;
                //     }
                //
                // } while(isCoordAdd);

                if (this.mapData[mapRowCol.row][mapRowCol.col] == undefined) {
                    this.mapData[mapRowCol.row][mapRowCol.col] = obj.id;
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

    var ground = {
        id: 0,
        min: 20,
        max: 200,
        show: function () {
            return "<div class='null'></div>";
        }
    };

    // Трава
    var grass = {
        id: 3,
        min: 0,
        max: 3,
        show: function () {
            return "<div class='grass'></div>";
        }
    };

    // Коровы
    var cows = {
        id: 1,
        min: 0,
        max: 3,
        show: function () {
            return "<div class='cow'></div>";
        },
        move: function () {

        }
    };

    // Тигры
    var tigers = {
        id: 2,
        min: 0,
        max: 3,
        show: function () {
            return "<div class='tiger'></div>";
        }
    };

    var controls = {
        init: function () {
            // Персонаж
            // Карта
            //
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