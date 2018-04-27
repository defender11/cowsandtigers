'use strict';

import Scene from './scene';
import setting from './setting';

export default class Game {
    /**
     * OBJ GAME
     * @param setting
     * @constructor
     */
    constructor () {
        this.setting = setting;

        // --------------
        // Установим режим игры
        this.devMode = setting.devMode || false;

        // Установим скорость игрового цикла
        this.timeRender = setting.timeRender || 500;

        this.btnStart = document.getElementById('b-buttons__btn-start');
        this.btnPause = document.getElementById('b-buttons__btn-pause');
    }

    /**
     * GAME LOOP
     */
    run () {
        // Создадим новую сцену
        let scene = new Scene(this.setting);

        // Создадим игровое поле на сцене
        if (scene.build()) {

            $.lNotify('add','Игра загружена.', 'success');
            $.lNotify('add',"Нажмите 'Начать игру'.", 'success');

            // return false;
            let self = this;
            let loop;

            if (!this.devMode) {

                $.lNotify('add','Игра в обычном режиме.', 'success');

                this.btnStart.addEventListener('click', function () {

                    $.lNotify('add','Игра запущена.', 'success');
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
                });

                this.btnPause.addEventListener('click', function () {
                    clearInterval(loop);

                    $.lNotify('add','Игра остановлена.', 'success');
                });
            } else {
                if (scene.issetObjectOnMap()) {
                    $.lNotify('add','Игра в режиме разработчика.', 'success');

                    scene.dieManager();
                    scene.actionOnMap();
                    scene.render();
                } else {
                    $.lNotify('add','Конец игры.', 'success');
                    self.gameOver();
                }
            }
        }
    }

    gameOver () {
        alert('Game Over');
        window.location.replace("/");
    }
}

// ------------------------------------------