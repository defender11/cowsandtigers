/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.init = function (setting) {
    var game = new Game(setting);
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

        scene.plain.innerHTML = "<p class='b-title__text'>Игра загружена.</p> " + "<br />" + "<p class='b-title__text'>Нажмите 'Начать игру'.</p>";

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
            });

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

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var game = __webpack_require__(/*! ./game */ "./game.js");

// PROD
var setting = {
    gameContainerID: 'b-game',
    mapSize: {
        row: 9,
        col: 23
    },
    mapObjects: {
        grass: {
            min: 90,
            max: 175
        },
        cows: {
            min: 15,
            max: 20
        },
        tigers: {
            min: 3,
            max: 6
        },
        ground: {
            min: null,
            max: null
        }
    },
    devMode: false,
    timeRender: 500
};

// DEV
/*var setting = {
    gameContainerID: 'b-game',
    mapSize: {
        row: 6,
        col: 6
    },
    mapObjects: {
        grass: {
            min: 7,
            max: 13
        },
        cows: {
            min: 2,
            max: 5
        },
        tigers: {
            min: 2,
            max: 4
        },
        ground: {
            min: null,
            max: null
        }
    },
    devMode: false,
    timeRender: 530
};*/

// После загрузки документа запустим игру
game.init(setting);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaW5pdCIsInNldHRpbmciLCJnYW1lIiwiR2FtZSIsInJ1biIsImRldk1vZGUiLCJ0aW1lUmVuZGVyIiwiYnRuU3RhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnRuUGF1c2UiLCJwcm90b3R5cGUiLCJzY2VuZSIsIlNjZW5lIiwiYnVpbGQiLCJwbGFpbiIsImlubmVySFRNTCIsInNlbGYiLCJsb29wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwiY2FsbGJhY2siLCJpc3NldE9iamVjdE9uTWFwIiwiZGllTWFuYWdlciIsImFjdGlvbk9uTWFwIiwicmVuZGVyIiwiZ2FtZU92ZXIiLCJjbGVhckludGVydmFsIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJyZXF1aXJlIiwiZ2FtZUNvbnRhaW5lcklEIiwibWFwU2l6ZSIsInJvdyIsImNvbCIsIm1hcE9iamVjdHMiLCJncmFzcyIsIm1pbiIsIm1heCIsImNvd3MiLCJ0aWdlcnMiLCJncm91bmQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7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QWQ7O0FBNEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQUosS0FBS0YsSUFBTCxDQUFVQyxPQUFWLEUiLCJmaWxlIjoiY293c2FuZHRpZ2Vyc190ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiAoc2V0dGluZykge1xuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoc2V0dGluZyk7XG4gICAgZ2FtZS5ydW4oKTtcbn07XG5cbnZhciBkZXZNb2RlID0gZmFsc2U7XG5cbi8qKlxuICogT0JKIEdBTUVcbiAqIEBwYXJhbSBzZXR0aW5nXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gR2FtZShzZXR0aW5nKSB7XG4gICAgdGhpcy5zZXR0aW5nID0gc2V0dGluZztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXG4gICAgLy8g0KPRgdGC0LDQvdC+0LLQuNC8INGA0LXQttC40Lwg0LjQs9GA0YtcbiAgICBkZXZNb2RlID0gc2V0dGluZy5kZXZNb2RlIHx8IGRldk1vZGU7XG5cbiAgICAvLyDQo9GB0YLQsNC90L7QstC40Lwg0YHQutC+0YDQvtGB0YLRjCDQuNCz0YDQvtCy0L7Qs9C+INGG0LjQutC70LBcbiAgICB0aGlzLnRpbWVSZW5kZXIgPSBzZXR0aW5nLnRpbWVSZW5kZXIgfHwgNTAwO1xuXG4gICAgdGhpcy5idG5TdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWJ1dHRvbnNfX2J0bi1zdGFydCcpO1xuICAgIHRoaXMuYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1idXR0b25zX19idG4tcGF1c2UnKTtcbn1cblxuXG4vKipcbiAqIEdBTUUgTE9PUFxuICovXG5HYW1lLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC90L7QstGD0Y4g0YHRhtC10L3Rg1xuICAgIHZhciBzY2VuZSA9IG5ldyBTY2VuZSh0aGlzLnNldHRpbmcpO1xuXG4gICAgLy8g0KHQvtC30LTQsNC00LjQvCDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtSDQvdCwINGB0YbQtdC90LVcbiAgICBpZiAoc2NlbmUuYnVpbGQoKSkge1xuXG4gICAgICAgIHNjZW5lLnBsYWluLmlubmVySFRNTCA9IFwiPHAgY2xhc3M9J2ItdGl0bGVfX3RleHQnPtCY0LPRgNCwINC30LDQs9GA0YPQttC10L3QsC48L3A+IFwiICtcbiAgICAgICAgICAgIFwiPGJyIC8+XCIgK1xuICAgICAgICAgICAgXCI8cCBjbGFzcz0nYi10aXRsZV9fdGV4dCc+0J3QsNC20LzQuNGC0LUgJ9Cd0LDRh9Cw0YLRjCDQuNCz0YDRgycuPC9wPlwiO1xuXG4gICAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbG9vcDtcblxuICAgICAgICBpZiAoIWRldk1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8g0JPQu9Cw0LLQvdGL0LkgTG9vcFxuICAgICAgICAgICAgICAgIGxvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lLmlzc2V0T2JqZWN0T25NYXAoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuYWN0aW9uT25NYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LCBzZWxmLnRpbWVSZW5kZXIpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5idG5QYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGxvb3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2NlbmUuaXNzZXRPYmplY3RPbk1hcCgpKSB7XG4gICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgIHNjZW5lLmFjdGlvbk9uTWFwKCk7XG4gICAgICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG59O1xuXG5HYW1lLnByb3RvdHlwZS5nYW1lT3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBhbGVydCgnR2FtZSBPdmVyJyk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xufTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcblxuLy8gUFJPRFxubGV0IHNldHRpbmcgPSB7XG4gICAgZ2FtZUNvbnRhaW5lcklEOiAnYi1nYW1lJyxcbiAgICBtYXBTaXplOiB7XG4gICAgICAgIHJvdzogOSxcbiAgICAgICAgY29sOiAyM1xuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA5MCxcbiAgICAgICAgICAgIG1heDogMTc1XG4gICAgICAgIH0sXG4gICAgICAgIGNvd3M6IHtcbiAgICAgICAgICAgIG1pbjogMTUsXG4gICAgICAgICAgICBtYXg6IDIwXG4gICAgICAgIH0sXG4gICAgICAgIHRpZ2Vyczoge1xuICAgICAgICAgICAgbWluOiAzLFxuICAgICAgICAgICAgbWF4OiA2XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgbWF4OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRldk1vZGU6IGZhbHNlLFxuICAgIHRpbWVSZW5kZXI6IDUwMFxufTtcblxuLy8gREVWXG4vKnZhciBzZXR0aW5nID0ge1xuICAgIGdhbWVDb250YWluZXJJRDogJ2ItZ2FtZScsXG4gICAgbWFwU2l6ZToge1xuICAgICAgICByb3c6IDYsXG4gICAgICAgIGNvbDogNlxuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA3LFxuICAgICAgICAgICAgbWF4OiAxM1xuICAgICAgICB9LFxuICAgICAgICBjb3dzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogNTMwXG59OyovXG5cbi8vINCf0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDQtNC+0LrRg9C80LXQvdGC0LAg0LfQsNC/0YPRgdGC0LjQvCDQuNCz0YDRg1xuZ2FtZS5pbml0KHNldHRpbmcpOyJdLCJzb3VyY2VSb290IjoiIn0=