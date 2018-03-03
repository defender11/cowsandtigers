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
    // Настройки по умолчанию,
    // Приминяються, когда нет переданных настроек из вне

    var gameContainer = null;
    var _options = null;

    var locationData = [];

    // Ядро игры
    var game = {
        init: function ($gameContainer, options) {
            // Общий контейнер
            gameContainer = $gameContainer;
            // Проверим и присвоим опций
            _options = options;

            // создадим сцену ввиде массива и проставим в нем цифры
            scene.build();

            // Запуск игры
            this.run();
        },
        run: function () {

            // Главный Loop
            setInterval(function () {
                //Для отладки
            // setTimeout(function () {
                scene.render();
            }, 1000);
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
            for (var row = 0; row < _options.plain.row; row++) {

                map += "<div class='row'>";

                for (var col = 0; col < _options.plain.col; col++) {

                    map += "<div class='cell'> " + this.getObj(locationData[row][col]).show() + "</div>";

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
    }

    //начальное игровое поле ввиде матрицы
    var plain = {
        // Построим начальное игровое поле ввиде матрицы
        generate: function () {
            // Построим игровое поле ввиде матрицы
            for (var row = 0; row < _options.plain.row; row++) {
                // Добавим новую строку
                locationData[row] = [];
                for (var col = 0; col < _options.plain.col; col++) {
                    // наполним новую строку ячейками с значением 0, т.е пусто
                    locationData[row][col] = 0;
                }
            }
        },
        show: function () {
            return "<div class='null'></div>";
        }
    }

    // Трава
    var grass = {
        // Раставим коров на поле
        generate: function () {

            // Построим игровое поле ввиде матрицы
            for (var row = 0; row < _options.plain.row; row++) {

                // Получим количевство травы которую нужно посадить
                var countGrass = this.getCount();

                for (var col = 0; col < _options.plain.col; col++) {

                    // Усложним
                    var addObj = (Math.random() > 0.5) ? 1 : 0;

                    if (countGrass > 0) {
                        locationData[row][col] = addObj || 3;
                        countGrass--;
                    }
                }
            }
        },
        // Получим произвольное число в рамках сетки, для расставления травы
        getCount: function () {

            return tools.randomInteger(1, (_options.plain.row + _options.plain.col) / 1.5);
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
            for (var row = 0; row < _options.plain.row; row++) {

                // Усложним
                var addObj = (Math.random() > 0.5) ? 1 : 0;

                for (var col = 0; col < _options.plain.col; col++) {

                    if (locationData[row][col] != 3) {

                        if (countCows > 0) {
                            locationData[row][col] = addObj || 1;
                            countCows--;
                        }
                    }
                }
            }
        },
        // Получим произвольное число в рамках сетки, для расставления травы
        getCount: function () {
            return tools.randomInteger(_options.cows.min, _options.cows.max);
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
            for (var row = 0; row < _options.plain.row; row++) {

                // Получим количевство тигров которых нужно раставить
                var countTigers = this.getCount();
                // Усложним
                var addObj = (Math.random() > 0.5) ? 1 : 0;

                for (var col = 0; col < _options.plain.col; col++) {

                    if (locationData[row][col] != 3 || locationData[row][col] != 1) {

                        if (countTigers > 0) {
                            locationData[row][col] = addObj || 2;
                            countTigers--;
                        }
                    }
                }
            }
        },
        // Получим произвольное число в рамках сетки, для расставления травы
        getCount: function () {
            return tools.randomInteger(_options.tigers.min, _options.tigers.max);
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