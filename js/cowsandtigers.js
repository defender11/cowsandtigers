var cowsandtigers = (function ($) {

    // OBJ GAME
    function Game($gameContainer, setting) {
        this.$gameContainer = $gameContainer;
        this.setting = setting;
    }

    Game.prototype.init = function () {
        console.log(this.$gameContainer);
        console.log(this.setting);
        this.run();
    };

    // GAME LOOP
    Game.prototype.run = function () {
        console.log("RUN");
    };
    // ------------
    return {
        init: function ($gameContainer, setting) {
            var game = new Game($gameContainer, setting);

            game.init();
        }
    }
})(jQuery);