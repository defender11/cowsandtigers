'use strict';

import Game from './game';
import setting from "./setting";

// После загрузки документа запустим игру
$(function () {
    $.lNotify({
        animation: 'slide',
        position: 'bottomRight'
    });

    let game = new Game(setting);

    game.run();
});
