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
    var gameContainer = null;
    var setting = null;

    var mapData = [];

    // Ядро игры
    var game = {
        init: function ($gameContainer, options) {
            // Общий контейнер
            gameContainer = $gameContainer;
            // Проверим и присвоим опций
            setting = options;

            // создадим сцену ввиде массива и проставим в нем цифры
            scene.build(options);

            // Запуск игры
            this.run();
        },
        run: function () {


            if (!setting.devMode) {
                // Главный Loop
                setInterval(function () {
                    scene.render();
                }, 1000);
            } else {
                scene.render();
            }
        }
    };

    var scene = {
        build: function () {
            // Создадим игровое поле ввиде матрицы, заполнив его 0
            plain.generate();

            // Добавим траву
            grass.generate();

            // Добавим коров
            cows.generate();

            // Добавим тигров
            tigers.generate();
        },
        render: function () {
            var map = '';

            // Построим игровое поле
            for (var row = 0; row < setting.plain.row; row++) {

                map += "<div class='row'>";

                for (var col = 0; col < setting.plain.col; col++) {

                    map += "<div class='cell'> " + this.getObj(mapData[row][col]).show() + "</div>";

                }

                map += "</div>";
            }

            $(gameContainer).find(".plain").html(map);
        },
        getObj: function (value) {
            switch (parseInt(value)) {
                case 0:
                    return plain;
                    break;
                case 1:
                    return cows;
                    break;
                case 2:
                    return tigers;
                    break;
                case 3:
                    return grass;
                    break;
            }
        }
    };

    //начальное игровое поле ввиде матрицы
    var plain = {
        // Построим начальное игровое поле ввиде матрицы
        generate: function () {
            // Построим игровое поле ввиде матрицы
            for (var row = 0; row < setting.plain.row; row++) {
                // Добавим новую строку
                mapData[row] = [];
                for (var col = 0; col < setting.plain.col; col++) {
                    // наполним новую строку ячейками с значением 0, т.е пусто
                    mapData[row][col] = 0;
                }
            }
        },
        show: function () {
            return "<div class='null'></div>";
        }
    };

    // Трава
    var grass = {
        // Раставим коров на поле
        generate: function () {

            // Построим игровое поле ввиде матрицы
            for (var row = 0; row < setting.plain.row; row++) {

                // Получим количевство травы которую нужно посадить
                var countGrass = this.getCount();

                for (var col = 0; col < setting.plain.col; col++) {

                    // Усложним
                    var addObj = (Math.random() > 0.5) ? 1 : 0;

                    if (countGrass > 0) {
                        mapData[row][col] = addObj || 3;
                        countGrass--;
                    }
                }
            }
        },
        // Получим произвольное число в рамках сетки, для расставления травы
        getCount: function () {

            return tools.randomInteger(1, (setting.plain.row + setting.plain.col) / 1.5);
        },
        show: function () {
            return "<div class='grass'></div>";
        }
    };

    // Коровы
    var cows = {
        // Раставим траву на поле
        generate: function () {

            // Получим количевство коров которых нужно расставить
            var countCows = this.getCount();

            // Построим игровое поле ввиде матрицы
            for (var row = 0; row < setting.plain.row; row++) {

                // Усложним
                var addObj = (Math.random() > 0.5) ? 1 : 0;

                for (var col = 0; col < setting.plain.col; col++) {

                    if (mapData[row][col] != 3) {

                        if (countCows > 0) {
                            mapData[row][col] = addObj || 1;
                            countCows--;
                        }
                    }
                }
            }
        },
        // Получим произвольное число в рамках сетки, для расставления травы
        getCount: function () {
            return tools.randomInteger(setting.cows.min, setting.cows.max);
        },
        show: function () {
            return "<div class='cow'></div>";
        }
    };

    // Тигры
    var tigers = {
        // Раставим траву на поле
        generate: function () {

            // Построим игровое поле ввиде матрицы
            for (var row = 0; row < setting.plain.row; row++) {

                // Получим количевство тигров которых нужно раставить
                var countTigers = this.getCount();
                // Усложним
                var addObj = (Math.random() > 0.5) ? 1 : 0;

                for (var col = 0; col < setting.plain.col; col++) {

                    if (mapData[row][col] != 3 || mapData[row][col] != 1) {

                        if (countTigers > 0) {
                            mapData[row][col] = addObj || 2;
                            countTigers--;
                        }
                    }
                }
            }
        },
        // Получим произвольное число в рамках сетки, для расставления травы
        getCount: function () {
            return tools.randomInteger(setting.tigers.min, setting.tigers.max);
        },
        show: function () {
            return "<div class='tiger'></div>";
        }
    };

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
        init: function ($gameContainer, options) {
            game.init($gameContainer, options);
        }
    }
})(jQuery);