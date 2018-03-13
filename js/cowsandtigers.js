var cowsandtigers = (function ($) {
    var devMode = false;

    // OBJ GAME
    function Game($gameContainer, setting) {
        this.$gameContainer = $gameContainer;
        this.setting = setting;
        // --------------
        // Установим режим игры
        devMode = this.setting.devMode || devMode;

        // Установим скорость игрового цикла
        this.timeRender = this.setting.timeRender || 500;

        var scene = new Scene(this.setting);

        scene.build();

        // this.run();
    }

    // GAME LOOP
    Game.prototype.run = function () {
        if (!devMode) {
            // Главный Loop
            setInterval(function () {
                // scene.event(map);
                // scene.render(map);
            }, this.timeRender);
        } else {
            // scene.event(map);
            // scene.render(map);
        }
    };

    // Основной Прототип объекта на карте
    function ObjectOnMap(className, id, setting) {
        this.id = id;
        this.className = className;
        this.objectPositionRowCol = [];

        this.min = setting.mapObjects[this.className]["min"];
        this.max = setting.mapObjects[this.className]["max"];

        console.log(this);
    }
    ObjectOnMap.prototype.show = function () {
        return "<div class='"+this.className+"'></div>";
    };
    ObjectOnMap.prototype.action = function () {
        console.log('prototype action: ' + this.className);
    };
    // ------------------------------------------

    function Scene(setting) {
        this.gameContainer = null;
        this.mapObjects = [];

        this.map = new Map(setting);
    }

    Scene.prototype.build = function () {
        this.map.init();

        // var ground = new ObjectOnMap("ground", 0, this.setting);
        // var grass = new ObjectOnMap("grass", 3, this.setting);
        // var cows = new ObjectOnMap("cows", 1, this.setting);
        // var tigers = new ObjectOnMap("tigers", 2, this.setting);

        // // Добавим объекты в массив
        // this.mapObjects.push(ground,cows,tigers,grass);

        this.map.generate();

        //
        //
        // // Добавим траву
        // map.generate(this.elements[3]);
        // // Добавим коров
        // map.generate(this.elements[1]);
        // // Добавим тигров
        // map.generate(this.elements[2]);
        // // Добавим землю
        // map.generate(this.elements[0]);
    };
    // ------------------------------------------

    function Map (setting) {
        this.setting = setting;
        this.mapData = [];

        this.row = this.setting.map.row || 0;
        this.col = this.setting.map.col || 0;
    }

    Map.prototype.init = function () {
        while(this.mapData.push([]) < this.row);
    };

    Map.prototype.generate = function () {
        var mapObjects = this.setting.mapObjects;

        console.log(mapObjects);



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
    };

    Map.prototype.tryNewGenerate = function (obj, count) {

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
    };

    /**
     * Получим произвольные координаты на основе кол-во строк и колонок
     * @param setting
     * @returns {{row: *, col: *}}
     */
    Map.prototype.getRandomRowColCoord = function () {
        var countRow = this.row,
            countCol = this.col;

        return {
            row: tools.randomInteger(0, countRow),
            col: tools.randomInteger(0, countCol)
        }
    };

    // ------------------------------------------

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
    // ------------------------------------------

    // ------------
    return {
        init: function ($gameContainer, setting) {
            var game = new Game($gameContainer, setting);

            game.init();
        }
    }
})(jQuery);