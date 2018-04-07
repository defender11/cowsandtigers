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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var game = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"game\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwibmFtZXMiOlsiZ2FtZSIsInJlcXVpcmUiLCJzZXR0aW5nIiwiZ2FtZUNvbnRhaW5lcklEIiwibWFwU2l6ZSIsInJvdyIsImNvbCIsIm1hcE9iamVjdHMiLCJncmFzcyIsIm1pbiIsIm1heCIsImNvd3MiLCJ0aWdlcnMiLCJncm91bmQiLCJkZXZNb2RlIiwidGltZVJlbmRlciIsImluaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUVBLElBQUlBLE9BQU8sbUJBQUFDLENBQVEsZ0lBQVIsQ0FBWDs7QUFFQTtBQUNBLElBQUlDLFVBQVU7QUFDVkMscUJBQWlCLFFBRFA7QUFFVkMsYUFBUztBQUNMQyxhQUFLLENBREE7QUFFTEMsYUFBSztBQUZBLEtBRkM7QUFNVkMsZ0JBQVk7QUFDUkMsZUFBTztBQUNIQyxpQkFBSyxFQURGO0FBRUhDLGlCQUFLO0FBRkYsU0FEQztBQUtSQyxjQUFNO0FBQ0ZGLGlCQUFLLEVBREg7QUFFRkMsaUJBQUs7QUFGSCxTQUxFO0FBU1JFLGdCQUFRO0FBQ0pILGlCQUFLLENBREQ7QUFFSkMsaUJBQUs7QUFGRCxTQVRBO0FBYVJHLGdCQUFRO0FBQ0pKLGlCQUFLLElBREQ7QUFFSkMsaUJBQUs7QUFGRDtBQWJBLEtBTkY7QUF3QlZJLGFBQVMsS0F4QkM7QUF5QlZDLGdCQUFZO0FBekJGLENBQWQ7O0FBNEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQWYsS0FBS2dCLElBQUwsQ0FBVWQsT0FBVixFIiwiZmlsZSI6Ii4uL2pzL2Nvd3NhbmR0aWdlcnNfdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ2FtZSA9IHJlcXVpcmUoJ2dhbWUnKTtcblxuLy8gUFJPRFxubGV0IHNldHRpbmcgPSB7XG4gICAgZ2FtZUNvbnRhaW5lcklEOiAnYi1nYW1lJyxcbiAgICBtYXBTaXplOiB7XG4gICAgICAgIHJvdzogOSxcbiAgICAgICAgY29sOiAyM1xuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA5MCxcbiAgICAgICAgICAgIG1heDogMTc1XG4gICAgICAgIH0sXG4gICAgICAgIGNvd3M6IHtcbiAgICAgICAgICAgIG1pbjogMTUsXG4gICAgICAgICAgICBtYXg6IDIwXG4gICAgICAgIH0sXG4gICAgICAgIHRpZ2Vyczoge1xuICAgICAgICAgICAgbWluOiAzLFxuICAgICAgICAgICAgbWF4OiA2XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgbWF4OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRldk1vZGU6IGZhbHNlLFxuICAgIHRpbWVSZW5kZXI6IDUwMFxufTtcblxuLy8gREVWXG4vKnZhciBzZXR0aW5nID0ge1xuICAgIGdhbWVDb250YWluZXJJRDogJ2ItZ2FtZScsXG4gICAgbWFwU2l6ZToge1xuICAgICAgICByb3c6IDYsXG4gICAgICAgIGNvbDogNlxuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA3LFxuICAgICAgICAgICAgbWF4OiAxM1xuICAgICAgICB9LFxuICAgICAgICBjb3dzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogNTMwXG59OyovXG5cbi8vINCf0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDQtNC+0LrRg9C80LXQvdGC0LAg0LfQsNC/0YPRgdGC0LjQvCDQuNCz0YDRg1xuZ2FtZS5pbml0KHNldHRpbmcpOyJdLCJzb3VyY2VSb290IjoiIn0=