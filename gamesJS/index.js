'use strict';

import Log from './log';
import Game from './game';
import setting from "./setting";

// После загрузки документа запустим игру
$(function () {

    Log.initNotify();

    let game = new Game(setting);

    game.run();
});
