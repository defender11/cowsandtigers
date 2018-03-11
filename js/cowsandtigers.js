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
    }

    Game.prototype.init = function () {
        var ground = new ObjectOnMap("ground", 0);
        var grass = new ObjectOnMapWithMinMax("grass", 3, this.setting);
        var cows = new ObjectOnMapWithMinMax("cows", 1, this.setting);
        var tigers = new ObjectOnMapWithMinMax("tigers", 2, this.setting);

        this.run();
    };

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
    function ObjectOnMap(className, id) {
        this.id = id;
        this.className = className;
        this.objectPositionRowCol = [];

        console.log(this);
    }
    ObjectOnMap.prototype.show = function () {
        return "<div class='"+this.className+"'></div>";
    };
    ObjectOnMap.prototype.action = function () {
        console.log('prototype action: ' + this.className);
    };
    // ------------------------------------------

    // Прототип объекта с значениями min/max карте
    function ObjectOnMapWithMinMax(className, id, setting) {
        ObjectOnMap.call(this, className, id);

        this.min = setting[this.className]["min"];
        this.max = setting[this.className]["max"];
    }
    ObjectOnMapWithMinMax.prototype = new ObjectOnMap();
    ObjectOnMapWithMinMax.constructor = this.className;
    // ------------------------------------------

    function Scene(map) {
        this.gameContainer = null;
        this.mapObject = [];
    }

    Scene.prototype.build = function () {
        // map.init(setting);
        //
        // // Добавим объекты в массив
        // this.elements.push(ground,cows,tigers,grass);
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

    function Map () {
        
    }

    Map.prototype.generate = function () {

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