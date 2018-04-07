'use strict';

module.exports.init = function (setting) {
    let game = new Game(setting);
    game.run();
};

var devMode = false;

/**
 * OBJ GAME
 * @param setting
 * @constructor
 */
function Game(setting) {
    this.setting = setting;

    // --------------
    // Установим режим игры
    devMode = setting.devMode || devMode;

    // Установим скорость игрового цикла
    this.timeRender = setting.timeRender || 500;

    this.btnStart = document.getElementById('b-buttons__btn-start');
    this.btnPause = document.getElementById('b-buttons__btn-pause');
}


/**
 * GAME LOOP
 */
Game.prototype.run = function () {

    // Создадим новую сцену
    var scene = new Scene(this.setting);

    // Создадим игровое поле на сцене
    if (scene.build()) {

        scene.plain.innerHTML = "<p class='b-title__text'>Игра загружена.</p> " +
            "<br />" +
            "<p class='b-title__text'>Нажмите 'Начать игру'.</p>";

        // return false;
        var self = this;
        var loop;

        if (!devMode) {
            this.btnStart.addEventListener('click', function () {
                // Главный Loop
                loop = setInterval(function (callback) {
                    if (scene.issetObjectOnMap()) {
                        scene.dieManager();
                        scene.actionOnMap();
                        scene.render();
                    } else {
                        self.gameOver();
                    }

                }, self.timeRender);
            })

            this.btnPause.addEventListener('click', function () {
                clearInterval(loop);
            });
        } else {
            if (scene.issetObjectOnMap()) {
                scene.dieManager();
                scene.actionOnMap();
                scene.render();
            } else {
                self.gameOver();
            }
        }
    }


};

Game.prototype.gameOver = function () {
    alert('Game Over');
    window.location.replace("/");
};
// ------------------------------------------