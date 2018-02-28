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
    var optionsDefault = {
        plain: {
            row: 8,
            col: 8
        },
        cows: {
            min: 1,
            max: 3
        },
        tigers: {
            min: 1,
            max: 3
        }
    };

    // Ядро игры
    var game = {
        gameContainer: null,
        options: null,
        init: function ($gameContainer, options) {
            // Общий контейнер
            this.gameContainer = $gameContainer;

            // Проверим и присвоим опций
            this.options = options || optionsDefault;

            // Создадим игровое поле
            plain.init($gameContainer, this.options);

            // Раставим траву
            grass.init($gameContainer, this.options);

            // Раставим коров
            cows.init($gameContainer, this.options);

            // Раставим тигров
            tigers.init($gameContainer, this.options);

            // Раставим еду
            foods.init($gameContainer, this.options);

            // Запуск игры
            this.run();
        },
        run: function () {

            // Главный Loop
            // setInterval(function () {
            //
            //     plain.update();
            //
            // }, 1000);
        }
    };

    // Игровое поле
    var plain = {
        gameContainer: null,
        options: null,
        init: function ($gameContainer, options) {
            // Общий контейнер
            this.gameContainer = $gameContainer;

            // Проверим и присвоим опций
            this.options = options || optionsDefault;

            // Построим начальное игровое поле
            this.create();
        },
        // Построим начальное игровое поле
        create: function () {
            var rowNumber = this.options.plain.row;
            var colNumber = this.options.plain.col;
            var process = 'Загрузка. <span class="action">Строим Игровое поле.</span>';
            var plain = '';


            // Построим игровое поле
            for (var row=0; row < rowNumber; row++){

                plain += "<div class='row row" + row + "'>";

                for (var col=0; col < colNumber; col++) {

                    tools.showLoading(col, colNumber, this.gameContainer, process);

                    plain += "<div class='cell cell" + row + "_" + col + " null'><span class='positionCell'>[" + row + " " + col + "]</span></div>"
                }

                plain += "</div>";
                plain += "<div class='clear'></div>";
            }

            this.gameContainer.find(".plain").append(plain);
        },
        update: function () {

        }
    };

    // Трава
    var grass = {
        gameContainer: null,
        options: null,
        init: function ($gameContainer, options) {
            // Общий контейнер
            this.gameContainer = $gameContainer;

            // Проверим и присвоим опций
            this.options = options || optionsDefault;

            // Раставим траву на поле
            this.create();
        },
        // Раставим траву на поле
        create: function () {
            var process = 'Загрузка. <span class="action">Расставляем травку.</span>';

            var rowNumber = this.options.plain.row;
            var cellNumber = this.options.plain.col;

            // Получим произвольное число в рамках сетки, для расставления травы
            var countGrass = tools.randomInteger( ((rowNumber + cellNumber) / 2), (rowNumber + cellNumber) - 1 ) ;

            for (var i = 0; i < countGrass; i++) {
                // Получим рандом значение позиции ячейки
                var cellPosition = this.getRandomCellPosition();

                // Получим ячейку
                var $cell = this.gameContainer.find('.cell'+ cellPosition.grassRow +'_' + cellPosition.grassColumn);

                if ($cell.hasClass('null') || !$cell.hasClass('grass')) {

                    tools.showLoading(i, countGrass, this.gameContainer, process);

                    $cell.removeClass('null');
                    $cell.addClass('grass');
                    $cell.append('<div class="grass"></div>');
                }
            }

        },
        // Вернем рандом значение позиции ячейки
        getRandomCellPosition: function () {
            return {
                // Сгенерируем номер строки
                grassRow: tools.randomInteger(0, this.options.plain.row),
                // Сгенерируем номер ячейки
                grassColumn: tools.randomInteger(0, this.options.plain.col)
            };
        }
    };

    // Коровы
    var cows = {
        gameContainer: null,
        options: null,
        init: function ($gameContainer, options) {
            // Общий контейнер
            this.gameContainer = $gameContainer;

            // Проверим и присвоим опций
            this.options = options || optionsDefault;

            // Раставим траву на поле
            this.create();
        },
        // Раставим траву на поле
        create: function () {
            var process = 'Загрузка. <span class="action">Расставляем коров.</span>';

            var rowNumber = this.options.plain.row;
            var cellNumber = this.options.plain.col;

            // Получим произвольное число в рамках сетки, для расставления коров
            var countCows = tools.randomInteger( 1, (rowNumber + cellNumber) / 3 ) ;

            for (var i = 0; i < countCows; i++) {
                // Получим рандом значение позиции ячейки
                var cellPosition = this.getRandomCellPosition();

                // Получим ячейку
                var $cell = this.gameContainer.find('.cell'+ cellPosition.cowRow +'_' + cellPosition.cowColumn);

                if ($cell.hasClass('null') || !$cell.hasClass('cow')) {

                    tools.showLoading(i, countCows, this.gameContainer, process);

                    this.gameContainer.find(".process").html(process);

                    $cell.removeClass('null');
                    $cell.addClass('cow');
                    $cell.append('<div class="cow"></div>');
                }
            }

        },
        // Вернем рандом значение позиции ячейки
        getRandomCellPosition: function () {
            return {
                // Сгенерируем номер строки
                cowRow: tools.randomInteger(1, this.options.plain.row),
                // Сгенерируем номер ячейки
                cowColumn: tools.randomInteger(1, this.options.plain.col)
            };
        }
    };

    // Тигры
    var tigers= {
        gameContainer: null,
        options: null,
        init: function ($gameContainer, options) {
            // Общий контейнер
            this.gameContainer = $gameContainer;

            // Проверим и присвоим опций
            this.options = options || optionsDefault;

            // Раставим траву на поле
            this.create();
        },
        // Раставим тигров на поле
        create: function () {
            var process = 'Загрузка. <span class="action">Расставляем тигров.</span>';

            var rowNumber = this.options.plain.row;
            var cellNumber = this.options.plain.col;

            // Получим произвольное число в рамках сетки, для расставления коров
            var countTigers = tools.randomInteger( 1, (rowNumber + cellNumber) / 3 ) ;

            for (var i = 0; i < countTigers; i++) {
                // Получим рандом значение позиции ячейки
                var cellPosition = this.getRandomCellPosition();

                // Получим ячейку
                var $cell = this.gameContainer.find('.cell'+ cellPosition.tigerRow +'_' + cellPosition.tigerColumn);

                if (!$cell.hasClass('cow') && !$cell.hasClass('tiger')) {

                    tools.showLoading(i, countTigers, this.gameContainer, process);

                    this.gameContainer.find(".process").html(process);

                    $cell.removeClass('null');
                    $cell.addClass('tiger');
                    $cell.append('<div class="tiger"></div>');
                }
            }

        },
        // Вернем рандом значение позиции ячейки
        getRandomCellPosition: function () {
            return {
                // Сгенерируем номер строки
                tigerRow: tools.randomInteger(1, this.options.plain.row),
                // Сгенерируем номер ячейки
                tigerColumn: tools.randomInteger(1, this.options.plain.col)
            };
        }
    };

    // Еда
    var foods = {
        gameContainer: null,
        options: null,
        init: function ($gameContainer, options) {
            // Общий контейнер
            this.gameContainer = $gameContainer;

            // Проверим и присвоим опций
            this.options = options || optionsDefault;

            // Раставим траву на поле
            this.create();
        },
        // Раставим тигров на поле
        create: function () {
            var process = 'Загрузка. <span class="action">Расставляем Еду.</span>';

            var rowNumber = this.options.plain.row;
            var cellNumber = this.options.plain.col;

            // Получим произвольное число в рамках сетки, для расставления коров
            var countFoods = tools.randomInteger( 1, (rowNumber + cellNumber) / 3 ) ;

            for (var i = 0; i < countFoods; i++) {
                // Получим рандом значение позиции ячейки
                var cellPosition = this.getRandomCellPosition();

                // Получим ячейку
                var $cell = this.gameContainer.find('.cell'+ cellPosition.foodRow +'_' + cellPosition.foodColumn);

                if (!$cell.hasClass('cow') && !$cell.hasClass('tiger') && !$cell.hasClass('food')) {

                    tools.showLoading(i, countFoods, this.gameContainer, process);

                    this.gameContainer.find(".process").html(process);

                    $cell.removeClass('null');
                    $cell.addClass('food');
                    $cell.append('<div class="food"></div>');
                }
            }

        },
        // Вернем рандом значение позиции ячейки
        getRandomCellPosition: function () {
            return {
                // Сгенерируем номер строки
                foodRow: tools.randomInteger(1, this.options.plain.row),
                // Сгенерируем номер ячейки
                foodColumn: tools.randomInteger(1, this.options.plain.col)
            };
        }
    };

    // Вспомогательные функции для игры
    var tools = {
        randomInteger: function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
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
    };

    return {
        init: function ($gameContainer, options) {
            game.init($gameContainer, options);
        }
    }
})(jQuery);