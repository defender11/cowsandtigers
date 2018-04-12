'use strict';

import Game from './game';
import setting from "./setting";

// После загрузки документа запустим игру
window.onload = function () {
    let game = new Game(setting);

    game.run();
};
