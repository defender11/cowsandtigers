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

/***/ "./algorithm/algorithm.js":
/*!********************************!*\
  !*** ./algorithm/algorithm.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tools = __webpack_require__(/*! ../tools */ "./tools.js");

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Algorithm = function () {
    function Algorithm() {
        _classCallCheck(this, Algorithm);

        this.addHealthValue = 5;
        this.subHealthValue = 3;
    }

    _createClass(Algorithm, [{
        key: "getAllNeighboringsCellInformation",
        value: function getAllNeighboringsCellInformation(unit, map, indexObject) {

            var neighboringsCell = void 0,
                neighboringsCellWithFood = void 0,
                neighboringsCellWithEnemies = void 0,
                neighboringsCellWithGround = void 0;

            // Проверим соседнии клетки
            neighboringsCell = map.getOneLevelCellsInfo(unit);

            /**
             * Проверим вокруг еду
             * Если есть, вернет массив, иначе пустой массив
             */
            neighboringsCellWithFood = map.filterCellByType(neighboringsCell, unit.foodType);

            if (unit.enemy !== null) {
                // TODO у тигра нет врагов
                /**
                 * Проверим вокруг врагов(тигров)
                 * Если есть, вернет массив, иначе пустой массив
                 * */
                neighboringsCellWithEnemies = map.filterCellByType(neighboringsCell, unit.enemy);
            }

            /**
             * Проверим вокруг свободные ячейки куда можно переместиться
             * Если есть, вернет массив, иначе пустой массив
             */
            neighboringsCellWithGround = map.filterCellByType(neighboringsCell, "ground");

            return {
                neighboringsCell: neighboringsCell,
                neighboringsCellWithFood: neighboringsCellWithFood,
                neighboringsCellWithEnemies: neighboringsCellWithEnemies,
                neighboringsCellWithGround: neighboringsCellWithGround
            };
        }
    }]);

    return Algorithm;
}();
// ------------------------------------------


exports.default = Algorithm;

/***/ }),

/***/ "./algorithm/algorithmFindMultiLevelNeighboringsCellInfo.js":
/*!******************************************************************!*\
  !*** ./algorithm/algorithmFindMultiLevelNeighboringsCellInfo.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _log = __webpack_require__(/*! ./../log */ "./log.js");

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Route
exports.default = {
    mapRow: 0,
    mapCol: 0,
    LOCAL_DEBUG: false,

    get: function get(map, unit, indexObject, steps) {

        _log2.default.showDebug([{ "MAPDATA:": map.mapData }, { "UNIT:": unit }], LOCAL_DEBUG);

        var neighboringsCellInformation = [];

        this.mapRow = map.row;
        this.mapCol = map.col;

        // получим инфо о четырех сторонах на дистанции полученной от Unit
        for (var step = 1; step < steps; step++) {

            _log2.default.showDebug([{ "STEP:": step }], LOCAL_DEBUG);

            var neighboringsCell = this.getNeighboringsCell(step, unit, map);

            if (neighboringsCell.length > 0) {

                var param = {
                    // Правильно назвать
                    step: step,
                    cellsInfo: neighboringsCell
                };
                // Вот прям здесь получим
                neighboringsCellInformation.push(param);
            }
        }

        return neighboringsCellInformation;
    },

    // Получим инфо соседних ячеек на каждой иттерации
    getNeighboringsCell: function getNeighboringsCell(step, unit, map) {
        var neighboringsCellInfo = [];

        // if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
        //     unit.positionRow = 0;
        //     unit.positionCol = 2;
        // }

        // координаты углов Unit
        // Получим координаты 4-х соторон на основе Unit
        var unitSides = this.getUnitAnglePoints(step, unit.positionRow, unit.positionCol);

        _log2.default.showDebug([{ "UNITSIDES:": unitSides }], LOCAL_DEBUG);

        // Нужно получить ячейки на основе найденых сторон!!!

        // Пройдемся по 4-ем сторонам и получим содержимое ячеек, задействуем массив с картой игры
        for (var side = 0; side < unitSides.length; side++) {

            if (unitSides[side].isset) {

                _log2.default.showDebug([{ "SIDE:": unitSides[side] }, { "SIDE_NAME:": unitSides[side].name }], LOCAL_DEBUG);

                var param = {
                    unitSide: unitSides[side],
                    unitPositionRow: unit.positionRow,
                    unitPositionCol: unit.positionCol,
                    map: map
                };

                _log2.default.showDebug([{ "PARAM:": param }], LOCAL_DEBUG);

                switch (parseInt(unitSides[side].id)) {
                    // leftTop_TO_rightTop
                    case 0:
                        var leftTop_TO_rightTop = this.getTopSideNeighboringsCell(param);
                        if (leftTop_TO_rightTop !== undefined) {
                            neighboringsCellInfo.push(leftTop_TO_rightTop);
                        }
                        break;
                    // rightTop_TO_rightBottom
                    case 1:
                        var rightTop_TO_rightBottom = this.getRighttSideNeighboringsCell(param);
                        if (rightTop_TO_rightBottom !== undefined) {
                            neighboringsCellInfo.push(rightTop_TO_rightBottom);
                        }
                        break;
                    // rightBottom_TO_leftBottom
                    case 2:
                        var rightBottom_TO_leftBottom = this.getBottomSideNeighboringsCell(param);
                        if (rightBottom_TO_leftBottom !== undefined) {
                            neighboringsCellInfo.push(rightBottom_TO_leftBottom);
                        }
                        break;

                    // leftBottom_TO_leftTop
                    case 3:
                        var leftBottom_TO_leftTop = this.getLeftSideNeighboringsCell(param);
                        if (leftBottom_TO_leftTop !== undefined) {
                            neighboringsCellInfo.push(leftBottom_TO_leftTop);
                        }
                        break;
                }

                _log2.default.showDebug([{ "SIDE END:": unitSides[side].name }], LOCAL_DEBUG);
            }
        }
        return neighboringsCellInfo;
    },

    //    -----------------------------------------------------------------------------------------------

    /* Получим содержимое ячеек по сторонам */
    getTopSideNeighboringsCell: function getTopSideNeighboringsCell(param) {
        var neighboringsCellInfo = [];

        var startCellRow = param.unitSide.angleStart.positionRow;
        var endCellCol = param.unitSide.angleEnd.positionCol;

        var startCellCol = param.unitSide.angleStart.positionCol;

        do {
            var unitPositionCell = parseInt(param.unitPositionRow + '' + param.unitPositionCol);
            var selectPositionCell = parseInt(startCellRow + '' + startCellCol);

            if (unitPositionCell !== selectPositionCell) {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
            startCellCol++;
        } while (startCellCol < endCellCol);

        return neighboringsCellInfo;
    },
    getRighttSideNeighboringsCell: function getRighttSideNeighboringsCell(param) {
        var neighboringsCellInfo = [];

        var startCellCol = param.unitSide.angleStart.positionCol;
        var endCellRow = param.unitSide.angleEnd.positionRow;

        var startCellRow = param.unitSide.angleStart.positionRow;

        do {
            var unitPositionCell = parseInt(param.unitPositionRow + '' + param.unitPositionCol);
            var selectPositionCell = parseInt(startCellRow + '' + startCellCol);

            if (unitPositionCell !== selectPositionCell) {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
            startCellRow++;
        } while (startCellRow < endCellRow);

        return neighboringsCellInfo;
    },
    getBottomSideNeighboringsCell: function getBottomSideNeighboringsCell(param) {
        var neighboringsCellInfo = [];

        var startCellRow = param.unitSide.angleStart.positionRow;
        var endCellCol = param.unitSide.angleEnd.positionCol;

        var startCellCol = param.unitSide.angleStart.positionCol;

        do {
            var unitPositionCell = parseInt(param.unitPositionRow + '' + param.unitPositionCol);
            var selectPositionCell = parseInt(startCellRow + '' + startCellCol);

            if (unitPositionCell !== selectPositionCell) {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
            startCellCol--;
        } while (startCellCol > endCellCol);

        return neighboringsCellInfo;
    },
    getLeftSideNeighboringsCell: function getLeftSideNeighboringsCell(param) {
        var neighboringsCellInfo = [];

        var startCellCol = param.unitSide.angleStart.positionCol;
        var endCellRow = param.unitSide.angleEnd.positionRow;

        var startCellRow = param.unitSide.angleStart.positionRow;

        do {
            var unitPositionCell = parseInt(param.unitPositionRow + '' + param.unitPositionCol);
            var selectPositionCell = parseInt(startCellRow + '' + startCellCol);

            if (unitPositionCell !== selectPositionCell) {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
            startCellRow--;
        } while (startCellRow > endCellRow);

        return neighboringsCellInfo;
    },

    /**
     * Получим координаты 4-х соторон на основе Unit
     * @param step
     * @param positionRow
     * @param positionCol
     * @returns {Array}
     */
    getUnitAnglePoints: function getUnitAnglePoints(step, positionRow, positionCol) {
        var unitAngles = [];

        var leftTop = void 0,
            rightTop = void 0,
            rightBottom = void 0,
            leftBottom = void 0;

        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log('|- getUnitAnglePoints: ', step, positionRow, positionCol);
        }

        // GET leftTop
        leftTop = this.getLeftTopAnglePoint(step, positionRow, positionCol);
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log('|-|- leftTop: ', leftTop);
        }
        if (leftTop.isset) {

            var toRightTop = this.getRightTopAnglePoint(step, positionRow, positionCol);

            if (toRightTop.isset) {
                toRightTop = { positionRow: toRightTop.positionRow, positionCol: toRightTop.positionCol };
            } else {
                toRightTop = { positionRow: leftTop.positionRow, positionCol: leftTop.positionCol };
            }

            unitAngles.push(
            // leftTop
            {
                id: 0,
                name: "leftTop_TO_rightTop",
                angleStart: {
                    positionRow: leftTop.positionRow,
                    positionCol: leftTop.positionCol
                },
                angleEnd: toRightTop,
                isset: leftTop.isset
            });
        }

        // GET rightTop
        rightTop = this.getRightTopAnglePoint(step, positionRow, positionCol);
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log('|-|- rightTop: ', rightTop);
        }
        if (rightTop.isset) {

            var toRightBottom = this.getRightBottomAnglePoint(step, positionRow, positionCol);

            if (toRightBottom.isset) {
                toRightBottom = { positionRow: toRightBottom.positionRow, positionCol: toRightBottom.positionCol };
            } else {
                toRightBottom = { positionRow: rightTop.positionRow, positionCol: rightTop.positionCol };
            }

            unitAngles.push(
            // rightTop
            {
                id: 1,
                name: "rightTop_TO_rightBottom",
                angleStart: {
                    positionRow: rightTop.positionRow,
                    positionCol: rightTop.positionCol
                },
                angleEnd: toRightBottom,
                isset: rightTop.isset
            });
        }

        // GET rightBottom
        rightBottom = this.getRightBottomAnglePoint(step, positionRow, positionCol);
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log('|-|- rightBottom: ', rightBottom);
        }
        if (rightBottom.isset) {

            var toLeftBottom = this.getLeftBottomAnglePoint(step, positionRow, positionCol);

            if (toLeftBottom.isset) {
                toLeftBottom = { positionRow: toLeftBottom.positionRow, positionCol: toLeftBottom.positionCol };
            } else {
                toLeftBottom = { positionRow: rightBottom.positionRow, positionCol: rightBottom.positionCol };
            }

            unitAngles.push(
            // rightBottom
            {
                id: 2,
                name: "rightBottom_TO_leftBottom",
                angleStart: {
                    positionRow: rightBottom.positionRow,
                    positionCol: rightBottom.positionCol
                },
                angleEnd: toLeftBottom,
                isset: rightBottom.isset
            });
        }

        // GET leftBottom
        leftBottom = this.getLeftBottomAnglePoint(step, positionRow, positionCol);
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log('|-|- leftBottom: ', leftBottom);
        }
        if (leftBottom.isset) {

            var toLeftTop = this.getLeftTopAnglePoint(step, positionRow, positionCol);

            if (toLeftTop.isset) {
                toLeftTop = { positionRow: toLeftTop.positionRow, positionCol: toLeftTop.positionCol };
            } else {
                toLeftTop = { positionRow: leftBottom.positionRow, positionCol: leftBottom.positionCol };
            }

            unitAngles.push(
            // leftBottom
            {
                id: 3,
                name: "leftBottom_TO_leftTop",
                angleStart: {
                    positionRow: leftBottom.positionRow,
                    positionCol: leftBottom.positionCol
                },
                angleEnd: toLeftTop,
                isset: leftBottom.isset
            });
        }

        return unitAngles;
    },

    getLeftTopAnglePoint: function getLeftTopAnglePoint(step, positionRow, positionCol) {
        var newPositionRow = positionRow - step;
        var newPositionCol = positionCol - step;
        var angleIsset = true;

        if (this.isUnitOutOfBorder(newPositionRow, newPositionCol)) {
            var newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log('|-|- newPosition: ', newPosition);
            }

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            } else {
                angleIsset = false;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol,
            isset: angleIsset
        };
    },
    getRightTopAnglePoint: function getRightTopAnglePoint(step, positionRow, positionCol) {
        var newPositionRow = positionRow - step;
        var newPositionCol = positionCol + step;
        var angleIsset = true;

        if (this.isUnitOutOfBorder(newPositionRow, newPositionCol)) {
            var newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            } else {
                angleIsset = false;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol,
            isset: angleIsset
        };
    },
    getRightBottomAnglePoint: function getRightBottomAnglePoint(step, positionRow, positionCol) {
        var newPositionRow = positionRow + step;
        var newPositionCol = positionCol + step;
        var angleIsset = true;

        if (this.isUnitOutOfBorder(newPositionRow, newPositionCol)) {
            var newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            } else {
                angleIsset = false;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol,
            isset: angleIsset
        };
    },
    getLeftBottomAnglePoint: function getLeftBottomAnglePoint(step, positionRow, positionCol) {
        var newPositionRow = positionRow + step;
        var newPositionCol = positionCol - step;
        var angleIsset = true;

        if (this.isUnitOutOfBorder(newPositionRow, newPositionCol)) {
            var newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

            if (newPosition.isFind) {
                newPositionRow = newPosition.positionRow;
                newPositionCol = newPosition.positionCol;
            } else {
                angleIsset = false;
            }
        }

        return {
            positionRow: newPositionRow,
            positionCol: newPositionCol,
            isset: angleIsset
        };
    },
    isUnitOutOfBorder: function isUnitOutOfBorder(newPositionRow, newPositionCol) {
        if (newPositionRow < 0 || newPositionRow > this.mapRow - 1 || newPositionCol < 0 || newPositionCol > this.mapCol - 1 || (newPositionRow < 0 || newPositionRow > this.mapRow - 1) && (newPositionCol < 0 || newPositionCol > this.mapCol - 1)) {
            return true;
        }

        return false;
    },

    // Попробуем найти новую ячейку прибавив значение шага
    findNewAngel: function findNewAngel(step, newPositionRow, newPositionCol) {
        // Пройдемся по по шагам в 4-х направлениях и посмотрим, попадаем ли в пределы карты
        for (var stp = 1; stp <= step; stp++) {

            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log(stp <= step);
            }

            var newAngel = this.checkNeighboringsCellByDirections(stp, newPositionRow, newPositionCol);

            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log('|-|- newAngel: ', newAngel);
            }
            if (newAngel.isFind) {
                return newAngel;
            }
        }

        return {
            isFind: false
        };
    },
    checkNeighboringsCellByDirections: function checkNeighboringsCellByDirections(stp, newPositionRow, newPositionCol) {
        var directionLeft = this.checkCellByDirectionLeft(stp, newPositionRow, newPositionCol);
        if (directionLeft.isFind) {
            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log("directionLeft: true;");
            }
            return directionLeft;
        }
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log("directionLeft: false;");
        }

        var directionTop = this.checkCellByDirectionTop(stp, newPositionRow, newPositionCol);
        if (directionTop.isFind) {
            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log("directionTop: true;");
            }
            return directionTop;
        }
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log("directionTop: false;");
        }

        var directionRight = this.checkCellByDirectionRight(stp, newPositionRow, newPositionCol);
        if (directionRight.isFind) {
            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log("directionRight: true;");
            }
            return directionRight;
        }
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log("directionRight: false;");
        }

        var directionBottom = this.checkCellByDirectionBottom(stp, newPositionRow, newPositionCol);
        if (directionBottom.isFind) {
            if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log("directionBottom: true;");
            }
            return directionBottom;
        }
        if (this.LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
            console.log("directionBottom: false;");
        }

        return false;
    },
    checkCellByDirectionLeft: function checkCellByDirectionLeft(stp, newPositionRow, newPositionCol) {
        var tryNewPositionCol = void 0,
            find = false;

        tryNewPositionCol = newPositionCol - stp;

        if (newPositionRow >= 0 && newPositionRow <= this.mapRow - 1 && tryNewPositionCol >= 0 && tryNewPositionCol <= this.mapCol - 1) {
            find = true;
        }

        return {
            positionRow: newPositionRow,
            positionCol: tryNewPositionCol,
            isFind: find
        };
    },
    checkCellByDirectionTop: function checkCellByDirectionTop(stp, newPositionRow, newPositionCol) {
        var tryNewPositionRow = void 0,
            find = false;

        tryNewPositionRow = newPositionRow - stp;

        if (tryNewPositionRow >= 0 && tryNewPositionRow <= this.mapRow - 1 && newPositionCol >= 0 && newPositionCol <= this.mapCol - 1) {
            find = true;
        }

        return {
            positionRow: tryNewPositionRow,
            positionCol: newPositionCol,
            isFind: find
        };
    },
    checkCellByDirectionRight: function checkCellByDirectionRight(stp, newPositionRow, newPositionCol) {
        var tryNewPositionCol = void 0,
            find = false;

        tryNewPositionCol = newPositionCol + stp;
        if (newPositionRow >= 0 && newPositionRow <= this.mapRow - 1 && tryNewPositionCol >= 0 && tryNewPositionCol <= this.mapCol - 1) {
            find = true;
        }

        return {
            positionRow: newPositionRow,
            positionCol: tryNewPositionCol,
            isFind: find
        };
    },
    checkCellByDirectionBottom: function checkCellByDirectionBottom(stp, newPositionRow, newPositionCol) {
        var tryNewPositionRow = void 0,
            find = false;

        tryNewPositionRow = newPositionRow + stp;

        if (tryNewPositionRow >= 0 && tryNewPositionRow <= this.mapRow - 1 && newPositionCol >= 0 && newPositionCol <= this.mapCol - 1) {
            find = true;
        }

        return {
            positionRow: tryNewPositionRow,
            positionCol: newPositionCol,
            isFind: find
        };
    }
};

/***/ }),

/***/ "./algorithm/algorithmFindOneLevelNeighboringsCellInfo.js":
/*!****************************************************************!*\
  !*** ./algorithm/algorithmFindOneLevelNeighboringsCellInfo.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constant = __webpack_require__(/*! ./../constant */ "./constant.js");

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Проверим соседнии клетки +
exports.default = {
    LOCAL_DEBUG: false,
    get: function get(map, unit) {

        var cells = [];
        var unitPositionRow = parseInt(unit.positionRow);
        var unitPositionCol = parseInt(unit.positionCol);

        // Не забыть про границы карты
        var border = {
            top: 0,
            topRight: map.col,
            right: map.col,
            rightBottom: map.col,
            bottom: map.row,
            leftBottom: 0,
            left: 0,
            leftTop: 0
        };

        // TOP Проверим ячейку с вверху +
        if (unitPositionRow - 1 >= border.top) {
            cells.push({
                direction: 'top',
                exist: true,
                content: map.getCell(unitPositionRow - 1, unitPositionCol)
            });
        }

        // TOP_RIGHT Проверим ячейку с вверху-вправо +
        if (unitPositionRow - 1 >= border.top && unitPositionCol + 1 < border.topRight) {
            cells.push({
                direction: 'topRight',
                exist: true,
                content: map.getCell(unitPositionRow - 1, unitPositionCol + 1)
            });
        }

        // RIGHT Проверим ячейку с вправо +
        if (unitPositionCol + 1 < border.right) {
            cells.push({
                direction: 'right',
                exist: true,
                content: map.getCell(unitPositionRow, unitPositionCol + 1)
            });
        }

        // RIGHT_BOTTOM Проверим ячейку с вправо-внизу +
        if (unitPositionRow + 1 < border.bottom && unitPositionCol + 1 < border.rightBottom) {
            cells.push({
                direction: 'rightBottom',
                exist: true,
                content: map.getCell(unitPositionRow + 1, unitPositionCol + 1)
            });
        }

        // BOTTOM Проверим ячейку внизу +
        if (unitPositionRow + 1 < border.bottom) {
            cells.push({
                direction: 'bottom',
                exist: true,
                content: map.getCell(unitPositionRow + 1, unitPositionCol)
            });
        }

        // LEFT_BOTTOM Проверим ячейку с слева-внизу +
        if (unitPositionRow + 1 < border.bottom && unitPositionCol - 1 >= border.leftBottom) {
            cells.push({
                direction: 'leftBottom',
                exist: true,
                content: map.getCell(unitPositionRow + 1, unitPositionCol - 1)
            });
        }

        // LEFT Проверим ячейку с слева +
        if (unitPositionCol - 1 >= border.left) {
            cells.push({
                direction: 'left',
                exist: true,
                content: map.getCell(unitPositionRow, unitPositionCol - 1)
            });
        }

        // LEFT_TOP Проверим ячейку с лева-вверху +
        if (unitPositionRow - 1 >= border.top && unitPositionCol - 1 >= border.left) {
            cells.push({
                direction: 'leftTop',
                exist: true,
                content: map.getCell(unitPositionRow - 1, unitPositionCol - 1)
            });
        }

        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
            console.log(unit);
            console.log(cells);
            console.log("ROW: " + unitPositionRow, "COL: " + unitPositionCol);
        }
        return cells;
    }
};

/***/ }),

/***/ "./algorithm/cowsAlgorithm.js":
/*!************************************!*\
  !*** ./algorithm/cowsAlgorithm.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constant = __webpack_require__(/*! ./../constant */ "./constant.js");

var _constant2 = _interopRequireDefault(_constant);

var _algorithm = __webpack_require__(/*! ./algorithm */ "./algorithm/algorithm.js");

var _algorithm2 = _interopRequireDefault(_algorithm);

var _entity = __webpack_require__(/*! ./../entity */ "./entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _dieUnit = __webpack_require__(/*! ./../dieUnit */ "./dieUnit.js");

var _dieUnit2 = _interopRequireDefault(_dieUnit);

var _tools = __webpack_require__(/*! ./../tools */ "./tools.js");

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// COWS ALGORITM
var CowsAlgorithm = function (_Algorithm) {
    _inherits(CowsAlgorithm, _Algorithm);

    function CowsAlgorithm() {
        _classCallCheck(this, CowsAlgorithm);

        // Cell Distance
        var _this = _possibleConstructorReturn(this, (CowsAlgorithm.__proto__ || Object.getPrototypeOf(CowsAlgorithm)).call(this));

        _this.distanceView = 1;
        return _this;
    }

    _createClass(CowsAlgorithm, [{
        key: 'act',
        value: function act(unit, map, indexObject) {

            var neighboringsCellInformation = map.getOneLevelCellsInfo(unit);

            /**
             * data:
             * Массив с Соседними клетками  - data.neighboringsCell
             * Массив с Травой              - data.neighboringsCellWithFood
             * Массив с Тиграми             - data.neighboringsCellWithEnemies
             * Массив с Землёй              - data.neighboringsCellWithGround
             */

            /*if (unit.health > 0) {
                // Проверим есть рядом Тигры
                if (data.neighboringsCellWithEnemies.length > 0) {
                    //Если есть свободные клетки
                    if (data.neighboringsCellWithGround.length > 0) {
                        // Бежим от Тигра
                        this.moveAwayFromEnemy(map, unit, data.neighboringsCellWithGround, indexObject);
                    }
                    //Если есть рядом трава едим ее и убегаем
                    if (data.neighboringsCellWithFood.length > 0) {
                        this.moveToFood(map, unit, data.neighboringsCellWithFood, indexObject);
                    }
                }
                // Проверим есть рядом еда
                else if (data.neighboringsCellWithFood.length > 0) {
                    this.moveToFood(map, unit, data.neighboringsCellWithFood, indexObject);
                }
                else {
                    this.moveFree(map, unit, data.neighboringsCellWithGround, indexObject);
                }
            } else {
                map.killUnit(unit, indexObject);
            }*/
        }
    }, {
        key: 'moveAwayFromEnemy',


        /**
         * Бежим от тигра +
         * @param map
         * @param unit
         * @param neighboringsCellWithGround
         * @param indexObject
         */
        value: function moveAwayFromEnemy(map, unit, neighboringsCellWithGround, indexObject) {

            // Получим произволный индекс в массиве
            var cellRandomRowCol = _tools2.default.randomInteger(0, neighboringsCellWithGround.length - 1);

            // Сохраним старый Unit и его RC (Row/Col)
            var oldUnit = unit;

            var unitParam = {
                id: 3,
                className: "ground",
                objPositionRow: unit.positionRow,
                objPositionCol: unit.positionCol
            };

            // На место старого Unit поставим ground
            map.setCell(unit, new _entity2.default(unitParam));

            // Для старого Unit зададим новые Row/Col и запишим в новую ячейку корову
            map.setCell(neighboringsCellWithGround[cellRandomRowCol], oldUnit);

            // Обновим Row/Col в массиве objectsOnMap
            map.updateUnitRowColInObjectsOnMap(neighboringsCellWithGround[cellRandomRowCol], indexObject);

            // Т.к мы убегаем и не едим траву, отнимим немного здоровья
            unit.subHealth(this.subHealthValue);
        }
    }, {
        key: 'moveToFood',


        /**
         * Едим траву
         * @param map
         * @param unit
         * @param neighboringsCellWithFood
         * @param indexObject
         */
        value: function moveToFood(map, unit, neighboringsCellWithFood, indexObject) {

            // unit.soundEat.stop();

            // Получим произволный индекс в массиве еды
            var cellRandomRowCol = _tools2.default.randomInteger(0, neighboringsCellWithFood.length - 1);

            var oldUnit = unit;
            var unitParam = {};

            unitParam = {
                id: 3,
                className: "ground",
                objPositionRow: unit.positionRow,
                objPositionCol: unit.positionCol
            };

            // На место старого Unit поставим ground
            map.setCell(unit, new _entity2.default(unitParam));

            // Для старого Unit зададим новые Row/Col
            map.setCell(neighboringsCellWithFood[cellRandomRowCol], oldUnit);

            // Обновим RC в массиве objectsOnMap
            map.updateUnitRowColInObjectsOnMap(neighboringsCellWithFood[cellRandomRowCol], indexObject);

            // Добавим в менеджер смертей траву
            unitParam = {
                id: 4,
                className: "death",
                objPositionRow: unit.positionRow,
                objPositionCol: unit.positionCol,
                dieUnitType: "grass",
                dieUnitId: 0
            };

            var dieUnit = new _dieUnit2.default(unitParam);

            map.addDieUnitToDieArray(dieUnit);

            // При поглащении травы прибавим жизни, ограничим значением 100
            if (unit.health < 100) {

                if (unit.health > 90) {
                    unit.addHealth(100 - unit.health);
                } else {
                    unit.addHealth(this.addHealthValue);
                }
            }

            // unit.soundEat.play();
        }

        /**
         * Свободное перемещение
         * @param map
         * @param unit
         * @param neighboringsCellWithGround
         * @param indexObject
         */

    }, {
        key: 'moveFree',
        value: function moveFree(map, unit, neighboringsCellWithGround, indexObject) {
            // unit.soundEat.stop();

            // console.log(unit);
            // console.log(neighboringsCellWithGround);

            // Получим произволный индекс в массиве с землей
            var cellRandomRowCol = _tools2.default.randomInteger(0, neighboringsCellWithGround.length - 1);

            var oldUnit = unit;

            var unitParam = {
                id: 3,
                className: "ground",
                objPositionRow: unit.positionRow,
                objPositionCol: unit.positionCol
            };

            // На место старого Unit поставим ground
            map.setCell(unit, new _entity2.default(unitParam));

            // Для старого Unit зададим новые Row/Col
            map.setCell(neighboringsCellWithGround[cellRandomRowCol], oldUnit);

            // Обновим RC в массиве objectsOnMap
            map.updateUnitRowColInObjectsOnMap(neighboringsCellWithGround[cellRandomRowCol], indexObject);

            unit.subHealth(this.subHealthValue);

            // unit.soundEat.play();
        }
    }]);

    return CowsAlgorithm;
}(_algorithm2.default);
// ------------------------------------------


exports.default = CowsAlgorithm;

/***/ }),

/***/ "./algorithm/deathAlgorithm.js":
/*!*************************************!*\
  !*** ./algorithm/deathAlgorithm.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // DEATH ALGORITM


var _entity = __webpack_require__(/*! ./../entity */ "./entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _unit = __webpack_require__(/*! ./../unit */ "./unit.js");

var _unit2 = _interopRequireDefault(_unit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// GROUND ALGORITM
var DeathAlgorithm = function () {
    function DeathAlgorithm() {
        _classCallCheck(this, DeathAlgorithm);
    }

    _createClass(DeathAlgorithm, [{
        key: 'act',
        value: function act(deathUnit, map, indexObject) {
            if (deathUnit.unitResurectionIntervalLeft < deathUnit.unitResurectionInterval) {
                deathUnit.unitResurectionIntervalLeft++;
            } else {

                var newPosition = map.getNewRowColPosition();

                // console.log(newPositionRowCol);

                var unitParam = {
                    id: deathUnit.dieUnitId,
                    className: deathUnit.dieUnitType,
                    objPositionRow: newPosition.row,
                    objPositionCol: newPosition.col
                };

                var newUnit = new _unit2.default(unitParam);

                var dieObjectsOnMapIndex = map.getIndexFromDieObjectsOnMap(deathUnit);

                var entityParam = {
                    id: 3,
                    className: "ground",
                    objPositionRow: deathUnit.positionRow,
                    objPositionCol: deathUnit.positionCol
                };

                // На место старого Unit поставим ground
                map.setCell(deathUnit, new _entity2.default(entityParam));

                map.setCell(newUnit, newUnit);

                map.addToObjectsOnMap(newUnit);

                map.removeUnitFromDieObjectsOnMap(dieObjectsOnMapIndex);
            }
        }
    }]);

    return DeathAlgorithm;
}();
// ------------------------------------------


exports.default = DeathAlgorithm;

/***/ }),

/***/ "./algorithm/grassAlgorithm.js":
/*!*************************************!*\
  !*** ./algorithm/grassAlgorithm.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _algorithm = __webpack_require__(/*! ./algorithm */ "./algorithm/algorithm.js");

var _algorithm2 = _interopRequireDefault(_algorithm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// GRASS ALGORITM
var GrassAlgorithm = function (_Algorithm) {
    _inherits(GrassAlgorithm, _Algorithm);

    function GrassAlgorithm() {
        _classCallCheck(this, GrassAlgorithm);

        return _possibleConstructorReturn(this, (GrassAlgorithm.__proto__ || Object.getPrototypeOf(GrassAlgorithm)).apply(this, arguments));
    }

    _createClass(GrassAlgorithm, [{
        key: 'act',
        value: function act() {}
    }]);

    return GrassAlgorithm;
}(_algorithm2.default);
// ------------------------------------------


exports.default = GrassAlgorithm;

/***/ }),

/***/ "./algorithm/groundAlgorithm.js":
/*!**************************************!*\
  !*** ./algorithm/groundAlgorithm.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _algorithm = __webpack_require__(/*! ./algorithm */ "./algorithm/algorithm.js");

var _algorithm2 = _interopRequireDefault(_algorithm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// GROUND ALGORITM
var GroundAlgorithm = function (_Algorithm) {
    _inherits(GroundAlgorithm, _Algorithm);

    function GroundAlgorithm() {
        _classCallCheck(this, GroundAlgorithm);

        return _possibleConstructorReturn(this, (GroundAlgorithm.__proto__ || Object.getPrototypeOf(GroundAlgorithm)).apply(this, arguments));
    }

    _createClass(GroundAlgorithm, [{
        key: 'act',
        value: function act() {}
    }]);

    return GroundAlgorithm;
}(_algorithm2.default);
// ------------------------------------------


exports.default = GroundAlgorithm;

/***/ }),

/***/ "./algorithm/tigersAlgorithm.js":
/*!**************************************!*\
  !*** ./algorithm/tigersAlgorithm.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _log = __webpack_require__(/*! ./../log */ "./log.js");

var _log2 = _interopRequireDefault(_log);

var _algorithm = __webpack_require__(/*! ./algorithm */ "./algorithm/algorithm.js");

var _algorithm2 = _interopRequireDefault(_algorithm);

var _entity = __webpack_require__(/*! ./../entity */ "./entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _dieUnit = __webpack_require__(/*! ./../dieUnit */ "./dieUnit.js");

var _dieUnit2 = _interopRequireDefault(_dieUnit);

var _tools = __webpack_require__(/*! ./../tools */ "./tools.js");

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LOCAL_DEBUG = true;

// TIGERS ALGORITM

var TigersAlgorithm = function (_Algorithm) {
    _inherits(TigersAlgorithm, _Algorithm);

    function TigersAlgorithm() {
        _classCallCheck(this, TigersAlgorithm);

        // Радиус ячеек в четыре стороны, увеличен на одну, если 4 то 3
        var _this = _possibleConstructorReturn(this, (TigersAlgorithm.__proto__ || Object.getPrototypeOf(TigersAlgorithm)).call(this));

        _this.distanceView = 4;
        return _this;
    }

    _createClass(TigersAlgorithm, [{
        key: 'act',
        value: function act(unit, map, indexObject) {

            _log2.default.showDebug([{ "TIGER:": unit }], LOCAL_DEBUG);

            // Воозвратить объект с соседними ячейками
            // let neighboringsCellInformation = map.getMultiLevelCellsInfo(unit, indexObject, this.distanceView);
            var neighboringsCellInformation = map.getOneLevelCellsInfo(unit);

            _log2.default.showDebug([{ "NEIGHBORINGSCELLINFORMATION: ": neighboringsCellInformation }], LOCAL_DEBUG);

            // let data = this.getAllNeighboringsCellInformation(unit, map, indexObject);

            /**
             * data:
             * Массив с Картой              - data.map
             * Массив с Соседними клетками  - data.neighboringsCell
             * Массив с Травой              - data.neighboringsCellWithFood
             * Массив с Тиграми             - data.neighboringsCellWithEnemies
             * Массив с Землёй              - data.neighboringsCellWithGround
             */

            /* if (unit.health > 0) {
                 //     // Проверим есть рядом еда
                 if (data.neighboringsCellWithFood.length > 0) {
                     this.moveToFood(map, unit, data.neighboringsCellWithFood, indexObject);
                 }
                 else if (data.neighboringsCellWithGround.length > 0) {
                     this.moveFree(map, unit, data.neighboringsCellWithGround, indexObject);
                 }
             }
             else {
                 map.killUnit(unit, indexObject);
             }*/
        }
    }, {
        key: 'moveToFood',


        /**
         * Едим корову
         * @param map
         * @param unit
         * @param neighboringsCellWithFood
         * @param indexObject
         */
        value: function moveToFood(map, unit, neighboringsCellWithFood, indexObject) {

            // unit.soundEat.stop();

            // Получим произволный индекс в массиве коров
            var cellRandomRowCol = _tools2.default.randomInteger(0, neighboringsCellWithFood.length - 1);

            // Эта ячейка являеться коровой, т.е ЕДОЙ!!!
            // neighboringsCellWithFood[cellRandomRowCol]
            // unit.eaten(true, neighboringsCellWithFood[cellRandomRowCol]);

            // Получим index съеденой коровы из массива objectsOnMap
            var foodIndex = map.getIndexFromObjectsOnMap(neighboringsCellWithFood[cellRandomRowCol]);

            // Пометили тигра что он съел корову
            unit.eaten(neighboringsCellWithFood[cellRandomRowCol], foodIndex);

            var oldUnit = unit;

            var unitParam = {
                id: 3,
                className: "ground",
                objPositionRow: unit.positionRow,
                objPositionCol: unit.positionCol
            };

            // На место старого Unit поставим ground
            map.setCell(unit, new _entity2.default(unitParam));

            // Для тигра зададим новые Row/Col
            map.setCell(neighboringsCellWithFood[cellRandomRowCol], oldUnit);

            // Обновим RC в массиве objectsOnMap
            map.updateUnitRowColInObjectsOnMap(neighboringsCellWithFood[cellRandomRowCol], indexObject);

            // Удалим корову из игрового массива
            map.removeUnitFromObjectsOnMap(foodIndex);

            delete neighboringsCellWithFood[cellRandomRowCol];

            // При поглащении травы прибавим жизни, ограничим значением 100
            if (unit.health < 100) {

                if (unit.health > 90) {
                    unit.addHealth(100 - unit.health);
                } else {
                    unit.addHealth(this.addHealthValue);
                }
            }

            // unit.soundEat.play();
        }

        /**
         * Свободное перемещение
         * @param map
         * @param unit
         * @param neighboringsCellWithGround
         * @param indexObject
         */

    }, {
        key: 'moveFree',
        value: function moveFree(map, unit, neighboringsCellWithGround, indexObject) {
            // unit.soundEat.stop();

            var oldUnit = unit;

            var unitParam = {};

            // unit.foodInformation.indexObject

            // Проверим убил ли данный тигр только что корову,
            // если да, то на след. шаге поставим на его место табличкуunit.foodInformation.indexObject
            if (unit.isEaten()) {

                unitParam = {
                    id: 4,
                    className: "death",
                    objPositionRow: unit.foodInformation.positionRow,
                    objPositionCol: unit.foodInformation.positionCol,
                    dieUnitType: unit.foodInformation.className,
                    dieUnitId: unit.foodInformation.id
                };

                var dieUnit = new _dieUnit2.default(unitParam);

                dieUnit.setIndexObject(unit.foodInformation.indexObject);

                map.addDieUnitToDieArray(dieUnit);

                map.setCell(unit, dieUnit);
            } else {

                unitParam = {
                    id: 3,
                    className: "ground",
                    objPositionRow: unit.positionRow,
                    objPositionCol: unit.positionCol
                };

                // На место старого Unit поставим ground
                map.setCell(unit, new _entity2.default(unitParam));
            }

            oldUnit.resetEaten();

            oldUnit.subHealth(this.subHealthValue);

            // Получим произволный индекс в массиве с землей
            var cellRandomRowCol = _tools2.default.randomInteger(0, neighboringsCellWithGround.length - 1);

            // Для старого Unit зададим новые Row/Col
            map.setCell(neighboringsCellWithGround[cellRandomRowCol], oldUnit);

            // Обновим RC в массиве objectsOnMap
            map.updateUnitRowColInObjectsOnMap(neighboringsCellWithGround[cellRandomRowCol], indexObject);

            // unit.soundEat.play();
        }
    }]);

    return TigersAlgorithm;
}(_algorithm2.default);

exports.default = TigersAlgorithm;

/***/ }),

/***/ "./constant.js":
/*!*********************!*\
  !*** ./constant.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    GLOBAL_DEBUG: true
};

/***/ }),

/***/ "./dieUnit.js":
/*!********************!*\
  !*** ./dieUnit.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _entity = __webpack_require__(/*! ./entity */ "./entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _deathAlgorithm = __webpack_require__(/*! ./algorithm/deathAlgorithm */ "./algorithm/deathAlgorithm.js");

var _deathAlgorithm2 = _interopRequireDefault(_deathAlgorithm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DieUnit = function (_Entity) {
    _inherits(DieUnit, _Entity);

    function DieUnit(param) {
        _classCallCheck(this, DieUnit);

        var _this = _possibleConstructorReturn(this, (DieUnit.__proto__ || Object.getPrototypeOf(DieUnit)).call(this, param));

        _this.indexObject = param.indexObject;

        _this.algoritms = new _deathAlgorithm2.default();

        _this.dieUnitType = param.dieUnitType;
        _this.dieUnitId = param.dieUnitId;

        _this.unitResurectionInterval = 3;
        _this.unitResurectionIntervalLeft = 0;

        // this.soundDie = new GameSounds("audio/die_" + this.className + ".mp3");
        return _this;
    }

    return DieUnit;
}(_entity2.default);

exports.default = DieUnit;


DieUnit.prototype.setIndexObject = function (indexObject) {
    this.indexObject = indexObject;
};

/**
 * Разные действия объекта
 */
DieUnit.prototype.action = function (map, indexObject) {
    this.algoritms.act(this, map, indexObject);
};

/**
 * Обновим Row/Col объекта
 * @param unit
 */
DieUnit.prototype.updateRowCol = function (unit) {
    this.positionRow = unit.positionRow;
    this.positionCol = unit.positionCol;
};
// ------------------------------------------

/***/ }),

/***/ "./entity.js":
/*!*******************!*\
  !*** ./entity.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entity = function () {
    function Entity(param) {
        _classCallCheck(this, Entity);

        this.id = param.id;
        this.className = param.className;
        this.positionRow = param.objPositionRow;
        this.positionCol = param.objPositionCol;
    }

    /**
     * Обновим Row/Col объекта
     * @param unit
     */


    _createClass(Entity, [{
        key: "updateRowCol",
        value: function updateRowCol(unit) {
            this.positionRow = unit.positionRow;
            this.positionCol = unit.positionCol;
        }

        /**
         * Вывод HTML объекта
         * @returns {string}
         */

    }, {
        key: "show",
        value: function show() {
            return "<div class='b-unit " + this.className + "'></div>";
        }
    }]);

    return Entity;
}();

// ------------------------------------------


exports.default = Entity;

/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _log = __webpack_require__(/*! ./log */ "./log.js");

var _log2 = _interopRequireDefault(_log);

var _scene = __webpack_require__(/*! ./scene */ "./scene.js");

var _scene2 = _interopRequireDefault(_scene);

var _setting = __webpack_require__(/*! ./setting */ "./setting.js");

var _setting2 = _interopRequireDefault(_setting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    /**
     * OBJ GAME
     * @param setting
     * @constructor
     */
    function Game() {
        _classCallCheck(this, Game);

        this.setting = _setting2.default;

        // --------------
        // Установим режим игры
        this.devMode = _setting2.default.devMode || false;

        // Установим скорость игрового цикла
        this.timeRender = _setting2.default.timeRender || 500;

        this.btnStart = document.getElementById('b-buttons__btn-start');
        this.btnPause = document.getElementById('b-buttons__btn-pause');
    }

    /**
     * GAME LOOP
     */


    _createClass(Game, [{
        key: 'run',
        value: function run() {
            // Создадим новую сцену
            var scene = new _scene2.default(this.setting);

            // Создадим игровое поле на сцене
            if (scene.build()) {

                _log2.default.showNotify('Игра загружена.', 'success');
                _log2.default.showNotify("Нажмите 'Начать игру'.", 'success');

                // return false;
                var self = this;
                var loop = void 0;

                if (!this.devMode) {

                    _log2.default.showNotify('Игра в обычном режиме.', 'success');

                    this.btnStart.addEventListener('click', function () {

                        _log2.default.showNotify('Игра запущена.', 'success');
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

                        _log2.default.showNotify('Игра остановлена.', 'success');
                    });
                } else {
                    if (scene.issetObjectOnMap()) {
                        _log2.default.showNotify('Игра в режиме разработчика.', 'success');

                        scene.dieManager();
                        scene.actionOnMap();
                        scene.render();
                    } else {
                        _log2.default.showNotify('Конец игры.', 'success');
                        self.gameOver();
                    }
                }
            }
        }
    }, {
        key: 'gameOver',
        value: function gameOver() {
            _log2.default.showNotify('Game Over', 'error');
            alert('Game Over');
            window.location.replace("/");
        }
    }]);

    return Game;
}();

// ------------------------------------------


exports.default = Game;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _log = __webpack_require__(/*! ./log */ "./log.js");

var _log2 = _interopRequireDefault(_log);

var _game = __webpack_require__(/*! ./game */ "./game.js");

var _game2 = _interopRequireDefault(_game);

var _setting = __webpack_require__(/*! ./setting */ "./setting.js");

var _setting2 = _interopRequireDefault(_setting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// После загрузки документа запустим игру
$(function () {

    _log2.default.initNotify();

    var game = new _game2.default(_setting2.default);

    game.run();
});

/***/ }),

/***/ "./log.js":
/*!****************!*\
  !*** ./log.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constant = __webpack_require__(/*! ./constant */ "./constant.js");

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LOG
 */
exports.default = {
    /**
     * --- simple text message
     * @param msg
     */
    show: function show(msg) {
        msg != undefined ? console.log("*|MSG-->", msg) : console.log('*|MSG--> Где-то пустой вывод Log.show();');
    },


    /**
     * --- DEBUG
     * FORMAT: [{text:object},{text:object}];
     * @param objects
     * @param LOCAL_DEBUG
     */
    showDebug: function showDebug() {
        var objects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var LOCAL_DEBUG = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (objects !== null) {
            if (_constant2.default.GLOBAL_DEBUG) {
                this.buildDebugString(objects);
            } else {
                if (LOCAL_DEBUG) {
                    this.buildDebugString(objects);
                }
            }
        } else {
            console.log('*|MSG--> Где-то пустой вывод Log.showDebug();');
        }
    },
    buildDebugString: function buildDebugString(objects) {
        for (var i = 0; i <= objects.length; i++) {
            for (var object in objects[i]) {
                console.log("!|DBG-->", object, objects[i][object]);
            }
        }
    },


    // --- NOTIFY
    initNotify: function initNotify() {
        $.lNotify({
            animation: 'slide',
            position: 'bottomRight'
        });
    },
    showNotify: function showNotify(text, status) {
        $.lNotify('add', text, status);
    }
};

/***/ }),

/***/ "./map.js":
/*!****************!*\
  !*** ./map.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _log = __webpack_require__(/*! ./log */ "./log.js");

var _log2 = _interopRequireDefault(_log);

var _entity = __webpack_require__(/*! ./entity */ "./entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _unit3 = __webpack_require__(/*! ./unit */ "./unit.js");

var _unit4 = _interopRequireDefault(_unit3);

var _setting = __webpack_require__(/*! ./setting */ "./setting.js");

var _setting2 = _interopRequireDefault(_setting);

var _dieUnit = __webpack_require__(/*! ./dieUnit */ "./dieUnit.js");

var _dieUnit2 = _interopRequireDefault(_dieUnit);

var _tools = __webpack_require__(/*! ./tools */ "./tools.js");

var _tools2 = _interopRequireDefault(_tools);

var _algorithmFindOneLevelNeighboringsCellInfo = __webpack_require__(/*! ./algorithm/algorithmFindOneLevelNeighboringsCellInfo */ "./algorithm/algorithmFindOneLevelNeighboringsCellInfo.js");

var _algorithmFindOneLevelNeighboringsCellInfo2 = _interopRequireDefault(_algorithmFindOneLevelNeighboringsCellInfo);

var _algorithmFindMultiLevelNeighboringsCellInfo = __webpack_require__(/*! ./algorithm/algorithmFindMultiLevelNeighboringsCellInfo */ "./algorithm/algorithmFindMultiLevelNeighboringsCellInfo.js");

var _algorithmFindMultiLevelNeighboringsCellInfo2 = _interopRequireDefault(_algorithmFindMultiLevelNeighboringsCellInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Класс работы с картой
 * @param setting
 * @constructor
 */
var Map = function () {
    function Map() {
        _classCallCheck(this, Map);

        this.mapData = [];

        // Объекты для карты
        this.mapObjects = _setting2.default.mapObjects;

        // Список объектов, которые задействованны на карте
        this.objectsOnMap = new Array();

        this.dieObjectsOnMap = new Array();

        this.row = _setting2.default.mapSize.row || 0;
        this.col = _setting2.default.mapSize.col || 0;
    }

    /**
     * Построим пустую карту на основе начальных Row/Col
     */


    _createClass(Map, [{
        key: 'init',
        value: function init() {
            while (this.mapData.push([]) < this.row) {}

            if (this.mapData.length == this.row) {
                return true;
            }
        }
    }, {
        key: 'generate',


        /**
         * Генерация карты
         */
        value: function generate() {

            var objID = 0;

            for (var objectName in this.mapObjects) {

                // console.log(objectName);
                var objMin = this.mapObjects[objectName].min;
                var objMax = this.mapObjects[objectName].max;

                // Если объект являеться статикой,
                // то постаремся дать по максимуму значения min/max
                // для полного заполнения игрового поля
                if (objMin === null && objMax === null) {
                    objMin = (this.row + this.col) * 2;
                    objMax = (this.row + this.col) * 100;
                }

                // Получим кол-во объектов на карте
                var objCountOnMap = _tools2.default.randomInteger(objMin, objMax);

                // console.log("objectName[objCountOnMap]: " + objectName + " " + objCountOnMap);

                // Пройдемся по этому количевству
                for (var i = 0; i < objCountOnMap; i++) {

                    var mapRowCol = this.getRandomRowColCoord();

                    // console.log('mapRowColNormal: ', mapRowCol);

                    if (!this.mapData[mapRowCol.row][mapRowCol.col]) {

                        var unitParam = {
                            id: objID,
                            className: objectName,
                            objPositionRow: mapRowCol.row,
                            objPositionCol: mapRowCol.col
                        };

                        var _unit = void 0;
                        if (objectName == "ground") {
                            _unit = new _entity2.default(unitParam);
                        } else {
                            _unit = new _unit4.default(unitParam);
                        }

                        this.mapData[mapRowCol.row][mapRowCol.col] = _unit;

                        if (objectName == 'cows' || objectName == 'tigers') {
                            this.addToObjectsOnMap(_unit);
                        }
                    } else {
                        var unitSetting = {
                            objID: objID,
                            objectName: objectName
                        };
                        this.tryNewGenerate(unitSetting, objCountOnMap);
                    }
                }

                objID++;
            }

            return true;
        }
    }, {
        key: 'tryNewGenerate',


        /**
         * Повторная генерация, в случии занятого места в массиве
         * @param objectSetting
         * @param count
         * @returns {*}
         */
        value: function tryNewGenerate(objectSetting, count) {

            if (count <= 0) return false;

            // Пройдемся по этому количевству
            for (var i = 0; i < count; i++) {

                // создадим координаты для проставления
                var mapRowCol = this.getRandomRowColCoord();

                // console.log('mapRowColRecursive: ', mapRowCol);

                if (this.mapData[mapRowCol.row][mapRowCol.col] === undefined) {
                    var unitParam = {
                        id: objectSetting.objID,
                        className: objectSetting.objectName,
                        objPositionRow: mapRowCol.row,
                        objPositionCol: mapRowCol.col
                    };

                    var _unit2 = void 0;

                    if (objectSetting.objectName == "ground") {
                        _unit2 = new _entity2.default(unitParam);
                    } else {
                        _unit2 = new _unit4.default(unitParam);
                    }

                    this.mapData[mapRowCol.row][mapRowCol.col] = _unit2;

                    if (objectSetting.objectName == 'cows' || objectSetting.objectName == 'tigers') {
                        this.addToObjectsOnMap(_unit2);
                    }
                    return false;
                } else {
                    var unitSetting = {
                        objID: objectSetting.objID,
                        objectName: objectSetting.objectName
                    };
                    return this.tryNewGenerate(unitSetting, count - 1);
                }
            }
        }
    }, {
        key: 'getRandomRowColCoord',


        /**
         * Получим произвольные координаты на основе кол-во строк и колонок
         * @returns {{row: *, col: *}}
         */
        value: function getRandomRowColCoord() {
            var countRow = this.row,
                countCol = this.col;

            return {
                row: _tools2.default.randomInteger(0, countRow),
                col: _tools2.default.randomInteger(0, countCol)
            };
        }
    }, {
        key: 'checkRoute',
        value: function checkRoute() {

            var data = this.getAllNeighboringsCellInformation(unit, this.map, indexObject);
        }
    }, {
        key: 'getRandomRowColBasedOnUnit',
        value: function getRandomRowColBasedOnUnit(cell, steps) {
            var issetRoute = this.tryRoute(steps);

            // let rowMin = ((cell.positionRow - 1) >= 0) ? (cell.positionRow - 1) : 0;
            // let rowMax = ((cell.positionRow + 1) <= this.row) ? (cell.positionRow + 1) : this.row;

            // let colMin = ((cell.positionCol - 1) >= 0) ? (cell.positionRow - 1) : 0;
            // let colMax = ((cell.positionCol + 1) <= this.col) ? (cell.positionCol + 1) : this.col;

            // let newPositionRow,
            //     newPositionCol;
            //
            // newPositionRow = this.getRandomRowColWithExclude(rowMin, rowMax, cell.positionRow);
            // newPositionCol = this.getRandomRowColWithExclude(colMin, colMax, cell.positionRow);

            // return {
            //     positionRow: newPositionRow,
            //     positionCol: newPositionCol
            // }
        }
    }, {
        key: 'getRandomRowColWithExclude',
        value: function getRandomRowColWithExclude(minCell, maxCell, excludeValue) {
            var value = void 0;

            value = _tools2.default.randomInteger(minCell, maxCell);

            while (value == excludeValue) {
                value = _tools2.default.randomInteger(minCell, maxCell);
            }

            return value;
        }
    }, {
        key: 'getNewRowColPosition',
        value: function getNewRowColPosition() {
            console.log("------------------");
            var i = 0;
            do {
                var newPositionRowCol = this.getRandomRowColCoord();

                console.log("FOR NEW UNIT GENERETE NEW POSITION: TRY[" + i++ + "] -> [R(" + newPositionRowCol.row + "):C(" + newPositionRowCol.col + ")]");

                if (this.mapData[newPositionRowCol.row][newPositionRowCol.col].className === "ground") {
                    return newPositionRowCol;
                }
            } while (true);
        }

        /**
         * Зададим ячейку
         * @param oldUnit
         * @param newUnit
         */

    }, {
        key: 'setCell',
        value: function setCell(oldUnit, newUnit) {

            this.mapData[oldUnit.positionRow][oldUnit.positionCol] = newUnit;

            this.mapData[oldUnit.positionRow][oldUnit.positionCol].updateRowCol(oldUnit);
        }
    }, {
        key: 'getCell',


        /**
         * Получим ячейку
         * @param positionRow
         * @param positionCol
         * @returns {*}
         */
        value: function getCell(positionRow, positionCol) {
            return this.mapData[positionRow][positionCol];
        }
    }, {
        key: 'addToObjectsOnMap',


        /**
         * Удаляет Unit из массива ObjectOnMap,
         * в котором находиться инфо об игровых объектах
         * @param indexObject
         * @returns {*[]}
         */
        value: function addToObjectsOnMap(unit) {
            this.objectsOnMap.push(unit);
        }
    }, {
        key: 'removeUnitFromObjectsOnMap',


        /**
         * Удаляет Unit из массива ObjectOnMap,
         * в котором находиться инфо об игровых объектах
         * @param indexObject
         * @returns {*[]}
         */
        value: function removeUnitFromObjectsOnMap(indexObject) {
            this.objectsOnMap.splice(indexObject, 1);
        }
    }, {
        key: 'removeUnitFromDieObjectsOnMap',


        /**
         * Удаляет Unit из массива DieObjectsOnMap,
         * в котором находиться инфо об смерти units
         * @param indexObject
         * @returns {*[]}
         */
        value: function removeUnitFromDieObjectsOnMap(indexObject) {
            this.dieObjectsOnMap.splice(indexObject, 1);
        }
    }, {
        key: 'updateUnitRowColInObjectsOnMap',


        /**
         * Обновим для Unit его RC(Row/Col) в массиве ObjectOnMap,
         * в котором находиться инфо об игровых объектах
         * @param unit
         * @param indexObject
         */
        value: function updateUnitRowColInObjectsOnMap(unit, indexObject) {
            this.objectsOnMap[indexObject].positionRow = unit.positionRow;
            this.objectsOnMap[indexObject].positionCol = unit.positionCol;
        }
    }, {
        key: 'killUnit',


        /**
         * Удалим объект
         * @param unit
         * @param indexObject
         */
        value: function killUnit(unit, indexObject) {

            this.removeUnitFromObjectsOnMap(indexObject);

            // На место старого Unit поставим могилку
            var unitParam = {
                id: 4,
                className: "death",
                objPositionRow: unit.positionRow,
                objPositionCol: unit.positionCol,
                dieUnitType: unit.className,
                dieUnitId: unit.id
            };

            var dieUnit = new _dieUnit2.default(unitParam);

            this.setCell(unit, dieUnit);

            this.addDieUnitToDieArray(dieUnit);

            // console.log(this.dieObjectsOnMap);
        }
    }, {
        key: 'issetObjectOnMap',


        /**
         * Проверим есть ли еще объекты в массиве для сущевствования игры
         * @returns {number}
         */
        value: function issetObjectOnMap() {
            return this.objectsOnMap.length > 0 ? 1 : 0;
        }
    }, {
        key: 'filterCellByType',


        /**
         * Отфильтруем ячейки по типу unitType
         * @param neighboringsCell
         * @param unitType
         * @returns {Array}
         */
        value: function filterCellByType(neighboringsCell, unitType) {

            var arr = [];

            // Переберем полученный массив с ячейками находящимися рядом
            for (var i = 0; i < neighboringsCell.length; i++) {

                // Ячейка не выходит за границы
                if (neighboringsCell[i].exist) {

                    if (neighboringsCell[i].content.className !== undefined) {

                        if (neighboringsCell[i].content.className == unitType) {
                            arr.push(neighboringsCell[i].content);
                        }
                    }
                }
            }
            return arr;
        }
    }, {
        key: 'getIndexFromObjectsOnMap',


        /**
         * Получим индекс коровы при ее съедании
         * @param unit
         * @returns {number}
         */
        value: function getIndexFromObjectsOnMap(unit) {
            for (var _indexObject = 0; _indexObject < this.objectsOnMap.length; _indexObject++) {
                if (this.objectsOnMap[_indexObject].positionRow == unit.positionRow && this.objectsOnMap[_indexObject].positionCol == unit.positionCol) {
                    return _indexObject;
                }
            }
        }

        //MAP DEATH MANAGE
        /**
         * Получим индекс коровы при ее съедании
         * @param unit
         * @returns {number}
         */

    }, {
        key: 'getIndexFromDieObjectsOnMap',
        value: function getIndexFromDieObjectsOnMap(unit) {
            for (var _indexObject2 = 0; _indexObject2 < this.dieObjectsOnMap.length; _indexObject2++) {
                if (this.dieObjectsOnMap[_indexObject2].positionRow == unit.positionRow && this.dieObjectsOnMap[_indexObject2].positionCol == unit.positionCol) {
                    return _indexObject2;
                }
            }
        }
    }, {
        key: 'addDieUnitToDieArray',
        value: function addDieUnitToDieArray(unit) {
            this.dieObjectsOnMap.push(unit);
        }

        //    ALGORITHMS FIND NEIGBORINGS CELL

    }, {
        key: 'getOneLevelCellsInfo',
        value: function getOneLevelCellsInfo(unit) {
            return _algorithmFindOneLevelNeighboringsCellInfo2.default.get(this, unit);
        }
    }, {
        key: 'getMultiLevelCellsInfo',
        value: function getMultiLevelCellsInfo(unit, indexObject, steps) {
            return _algorithmFindMultiLevelNeighboringsCellInfo2.default.get(this, unit, indexObject, steps);
        }
    }]);

    return Map;
}();

// ------------------------------------------


exports.default = Map;

/***/ }),

/***/ "./scene.js":
/*!******************!*\
  !*** ./scene.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = __webpack_require__(/*! ./map */ "./map.js");

var _map2 = _interopRequireDefault(_map);

var _setting = __webpack_require__(/*! ./setting */ "./setting.js");

var _setting2 = _interopRequireDefault(_setting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Игровая сцена
 * @param setting
 * @constructor
 */
var Scene = function () {
    function Scene() {
        _classCallCheck(this, Scene);

        this.plain = document.getElementById('b-game__plain');
        this.map = new _map2.default(_setting2.default);
    }

    /**
     * Проинициализируем карту и заполним ее объектами
     */


    _createClass(Scene, [{
        key: 'build',
        value: function build() {

            if (this.map.init()) {
                return this.map.generate();
            }
        }
    }, {
        key: 'render',


        /**
         * Отрисовка заполненной карты
         */
        value: function render() {
            var mapHTML = '';

            // Построим игровое поле
            for (var positionRow = 0; positionRow < this.map.row; positionRow++) {
                mapHTML += "<div class='row'>";
                for (var positionCol = 0; positionCol < this.map.col; positionCol++) {

                    // DEV MODE
                    var cellCoordinate = "<div class='cellCoordinate'>" + positionRow + " : " + positionCol + "</div>";

                    mapHTML += "<div class='cell'>" + cellCoordinate + " " + this.map.getCell(positionRow, positionCol).show() + "</div>";
                }
                mapHTML += "</div>";
            }

            // Добавим собранную HTML карту в DOM
            this.plain.innerHTML = mapHTML;
        }
    }, {
        key: 'actionOnMap',


        /**
         * Действия всех объектов на карте
         */
        value: function actionOnMap() {
            // console.log(this.map.objectsOnMap);

            for (var indexObject = 0; indexObject < this.map.objectsOnMap.length; indexObject++) {
                this.map.objectsOnMap[indexObject].action(this.map, indexObject);
            }
        }
    }, {
        key: 'dieManager',
        value: function dieManager() {
            if (this.map.dieObjectsOnMap.length > 0) {
                for (var indexObject = 0; indexObject < this.map.dieObjectsOnMap.length; indexObject++) {
                    this.map.dieObjectsOnMap[indexObject].action(this.map, indexObject);
                }
            }
        }

        /**
         * Проверим есть ли еще объекты в массиве для сущевствования игры
         * @returns {number}
         */

    }, {
        key: 'issetObjectOnMap',
        value: function issetObjectOnMap() {
            return this.map.issetObjectOnMap();
        }
    }]);

    return Scene;
}();
// ------------------------------------------


exports.default = Scene;

/***/ }),

/***/ "./setting.js":
/*!********************!*\
  !*** ./setting.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// PROD
/*export default {
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
};*/

// DEV
exports.default = {
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
    timeRender: 1530
};

/***/ }),

/***/ "./sound.js":
/*!******************!*\
  !*** ./sound.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// AUDIO IN GAME
var GameSounds = function () {
    function GameSounds(file) {
        _classCallCheck(this, GameSounds);

        this.sound = new Audio(file);
    }

    _createClass(GameSounds, [{
        key: "play",
        value: function play() {
            this.sound.play();
        }
    }, {
        key: "stop",


        // Функция stop для Audio:
        value: function stop() {
            this.sound.pause();
            this.sound.currentTime = 0.0;
        }
    }]);

    return GameSounds;
}();
// ------------------------------------------


exports.default = GameSounds;

/***/ }),

/***/ "./tools.js":
/*!******************!*\
  !*** ./tools.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// Вспомогательные функции для игры
exports.default = {
    /**
     * Возврощяет случайное число в диапазоне Min/Max
     * @param min
     * @param max
     * @returns {*}
     */
    randomInteger: function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};
// ------------------------------------------

/***/ }),

/***/ "./unit.js":
/*!*****************!*\
  !*** ./unit.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entity = __webpack_require__(/*! ./entity */ "./entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _grassAlgorithm = __webpack_require__(/*! ./algorithm/grassAlgorithm */ "./algorithm/grassAlgorithm.js");

var _grassAlgorithm2 = _interopRequireDefault(_grassAlgorithm);

var _cowsAlgorithm = __webpack_require__(/*! ./algorithm/cowsAlgorithm */ "./algorithm/cowsAlgorithm.js");

var _cowsAlgorithm2 = _interopRequireDefault(_cowsAlgorithm);

var _tigersAlgorithm = __webpack_require__(/*! ./algorithm/tigersAlgorithm */ "./algorithm/tigersAlgorithm.js");

var _tigersAlgorithm2 = _interopRequireDefault(_tigersAlgorithm);

var _groundAlgorithm = __webpack_require__(/*! ./algorithm/groundAlgorithm */ "./algorithm/groundAlgorithm.js");

var _groundAlgorithm2 = _interopRequireDefault(_groundAlgorithm);

var _sound = __webpack_require__(/*! ./sound */ "./sound.js");

var _sound2 = _interopRequireDefault(_sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Основной Прототип объекта на карте
 * @param className
 * @param id
 * @param objPositionRow
 * @param objPositionCol
 * @constructor
 */
var Unit = function (_Entity) {
    _inherits(Unit, _Entity);

    function Unit(param) {
        _classCallCheck(this, Unit);

        var _this = _possibleConstructorReturn(this, (Unit.__proto__ || Object.getPrototypeOf(Unit)).call(this, param));

        _this.foodType = _this.getFoodType();
        _this.health = 100;
        _this.enemy = param.className == 'cows' ? 'tigers' : null;

        _this.foodInformation = {
            isEat: false,
            positionRow: null,
            positionCol: null,
            indexObject: null
        };

        _this.soundEat = new _sound2.default("audio/eat_" + _this.className + ".mp3");

        // Выберим алгоритм поведения для объекта
        _this.algoritms = _this.selectAlgorithm(param.id);
        return _this;
    }

    /**
     * Вывод HTML объекта
     * @returns {string}
     */


    _createClass(Unit, [{
        key: 'show',
        value: function show() {
            var unitHealth = "";

            if (this.className == 'cows' || this.className == 'tigers') {
                var classHealthColor = this.getClassHealthColor(this.health);

                unitHealth += "<div class='b-unit__health'><div class='b-healt__indicator " + classHealthColor + "' style='width: " + this.health + "%;'></div></div>";
            }

            return "<div class='b-unit " + this.className + " stand_still'>" + unitHealth + "</div>";
        }
    }, {
        key: 'getClassHealthColor',


        /**
         * Получим цвет(класс) жизни unit
         * @param value
         * @returns {string}
         */
        value: function getClassHealthColor(value) {

            if (parseInt(value) >= 90 && parseInt(value) <= 100) {
                return "b-healt__indicator_life-good";
            }
            if (parseInt(value) >= 75 && parseInt(value) <= 90) {
                return "b-healt__indicator_life-above-average";
            }
            if (parseInt(value) >= 50 && parseInt(value) <= 75) {
                return "b-healt__indicator_life-average";
            }
            if (parseInt(value) >= 25 && parseInt(value) <= 50) {
                return "b-healt__indicator_life-below-average";
            }
            if (parseInt(value) >= 0 && parseInt(value) <= 25) {
                return "b-healt__indicator_life-low";
            }
        }
    }, {
        key: 'action',


        /**
         * Разные действия объекта
         */
        value: function action(map, indexObject) {
            this.algoritms.act(this, map, indexObject);
        }
    }, {
        key: 'getFoodType',


        /**
         * Получим цель ради которой живет Unit :)
         * @returns {*}
         */
        value: function getFoodType() {
            switch (this.className) {
                case 'cows':
                    return 'grass';
                    break;
                case 'tigers':
                    return 'cows';
                    break;
                default:
                    return null;
            }
        }
    }, {
        key: 'selectAlgorithm',


        /**
         * Вернет для объекта его алгоритм поведения в игре
         * @param id
         * @returns {*}
         */
        value: function selectAlgorithm(id) {
            /**
             * 0 - grass
             * 1 - cows
             * 2 - tigers
             * 3 - ground
             * 4 - death
             */

            switch (parseInt(id)) {

                case 0:
                    return new _grassAlgorithm2.default();
                    break;
                case 1:
                    return new _cowsAlgorithm2.default();
                    break;
                case 2:
                    return new _tigersAlgorithm2.default();
                    break;
                case 3:
                    return new _groundAlgorithm2.default();
                    break;
            }
        }
    }, {
        key: 'isEaten',


        // Съеден
        value: function isEaten() {
            return this.foodInformation.isEat;
        }
    }, {
        key: 'eaten',


        // Съеден
        value: function eaten(unit, foodIndex) {
            this.foodInformation.isEat = true;
            this.foodInformation.positionRow = unit.positionRow;
            this.foodInformation.positionCol = unit.positionCol;
            this.foodInformation.indexObject = foodIndex;
            this.foodInformation.className = unit.className;
            this.foodInformation.id = unit.id;
        }
    }, {
        key: 'resetEaten',


        // RESET Съеден
        value: function resetEaten() {
            return this.foodInformation.isEat = false;
            this.foodInformation.positionRow = null;
            this.foodInformation.positionCol = null;
            this.foodInformation.indexObject = null;
        }
    }, {
        key: 'addHealth',
        value: function addHealth(value) {
            this.health += parseInt(value);
        }
    }, {
        key: 'subHealth',
        value: function subHealth(value) {
            this.health -= parseInt(value);
        }
    }]);

    return Unit;
}(_entity2.default);

// ------------------------------------------


exports.default = Unit;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vYWxnb3JpdGhtRmluZE11bHRpTGV2ZWxOZWlnaGJvcmluZ3NDZWxsSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vYWxnb3JpdGhtRmluZE9uZUxldmVsTmVpZ2hib3JpbmdzQ2VsbEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2Nvd3NBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2RlYXRoQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncmFzc0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZ3JvdW5kQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbWFwLmpzIiwid2VicGFjazovLy8uL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vdW5pdC5qcyJdLCJuYW1lcyI6WyJBbGdvcml0aG0iLCJhZGRIZWFsdGhWYWx1ZSIsInN1YkhlYWx0aFZhbHVlIiwidW5pdCIsIm1hcCIsImluZGV4T2JqZWN0IiwibmVpZ2hib3JpbmdzQ2VsbCIsIm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCIsIm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyIsIm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kIiwiZ2V0T25lTGV2ZWxDZWxsc0luZm8iLCJmaWx0ZXJDZWxsQnlUeXBlIiwiZm9vZFR5cGUiLCJlbmVteSIsIm1hcFJvdyIsIm1hcENvbCIsIkxPQ0FMX0RFQlVHIiwiZ2V0Iiwic3RlcHMiLCJzaG93RGVidWciLCJtYXBEYXRhIiwibmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uIiwicm93IiwiY29sIiwic3RlcCIsImdldE5laWdoYm9yaW5nc0NlbGwiLCJsZW5ndGgiLCJwYXJhbSIsImNlbGxzSW5mbyIsInB1c2giLCJuZWlnaGJvcmluZ3NDZWxsSW5mbyIsInVuaXRTaWRlcyIsImdldFVuaXRBbmdsZVBvaW50cyIsInBvc2l0aW9uUm93IiwicG9zaXRpb25Db2wiLCJzaWRlIiwiaXNzZXQiLCJuYW1lIiwidW5pdFNpZGUiLCJ1bml0UG9zaXRpb25Sb3ciLCJ1bml0UG9zaXRpb25Db2wiLCJwYXJzZUludCIsImlkIiwibGVmdFRvcF9UT19yaWdodFRvcCIsImdldFRvcFNpZGVOZWlnaGJvcmluZ3NDZWxsIiwidW5kZWZpbmVkIiwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b20iLCJnZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20iLCJnZXRCb3R0b21TaWRlTmVpZ2hib3JpbmdzQ2VsbCIsImxlZnRCb3R0b21fVE9fbGVmdFRvcCIsImdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInN0YXJ0Q2VsbFJvdyIsImFuZ2xlU3RhcnQiLCJlbmRDZWxsQ29sIiwiYW5nbGVFbmQiLCJzdGFydENlbGxDb2wiLCJ1bml0UG9zaXRpb25DZWxsIiwic2VsZWN0UG9zaXRpb25DZWxsIiwiZ2V0Q2VsbCIsImVuZENlbGxSb3ciLCJ1bml0QW5nbGVzIiwibGVmdFRvcCIsInJpZ2h0VG9wIiwicmlnaHRCb3R0b20iLCJsZWZ0Qm90dG9tIiwiY29uc3RhbnQiLCJHTE9CQUxfREVCVUciLCJjb25zb2xlIiwibG9nIiwiZ2V0TGVmdFRvcEFuZ2xlUG9pbnQiLCJ0b1JpZ2h0VG9wIiwiZ2V0UmlnaHRUb3BBbmdsZVBvaW50IiwidG9SaWdodEJvdHRvbSIsImdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludCIsInRvTGVmdEJvdHRvbSIsImdldExlZnRCb3R0b21BbmdsZVBvaW50IiwidG9MZWZ0VG9wIiwibmV3UG9zaXRpb25Sb3ciLCJuZXdQb3NpdGlvbkNvbCIsImFuZ2xlSXNzZXQiLCJpc1VuaXRPdXRPZkJvcmRlciIsIm5ld1Bvc2l0aW9uIiwiZmluZE5ld0FuZ2VsIiwiaXNGaW5kIiwic3RwIiwibmV3QW5nZWwiLCJjaGVja05laWdoYm9yaW5nc0NlbGxCeURpcmVjdGlvbnMiLCJkaXJlY3Rpb25MZWZ0IiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25MZWZ0IiwiZGlyZWN0aW9uVG9wIiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25Ub3AiLCJkaXJlY3Rpb25SaWdodCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uUmlnaHQiLCJkaXJlY3Rpb25Cb3R0b20iLCJjaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbSIsInRyeU5ld1Bvc2l0aW9uQ29sIiwiZmluZCIsInRyeU5ld1Bvc2l0aW9uUm93IiwiY2VsbHMiLCJib3JkZXIiLCJ0b3AiLCJ0b3BSaWdodCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRpcmVjdGlvbiIsImV4aXN0IiwiY29udGVudCIsIkNvd3NBbGdvcml0aG0iLCJkaXN0YW5jZVZpZXciLCJjZWxsUmFuZG9tUm93Q29sIiwicmFuZG9tSW50ZWdlciIsIm9sZFVuaXQiLCJ1bml0UGFyYW0iLCJjbGFzc05hbWUiLCJvYmpQb3NpdGlvblJvdyIsIm9ialBvc2l0aW9uQ29sIiwic2V0Q2VsbCIsInVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcCIsInN1YkhlYWx0aCIsImRpZVVuaXRUeXBlIiwiZGllVW5pdElkIiwiZGllVW5pdCIsImFkZERpZVVuaXRUb0RpZUFycmF5IiwiaGVhbHRoIiwiYWRkSGVhbHRoIiwiRGVhdGhBbGdvcml0aG0iLCJkZWF0aFVuaXQiLCJ1bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQiLCJ1bml0UmVzdXJlY3Rpb25JbnRlcnZhbCIsImdldE5ld1Jvd0NvbFBvc2l0aW9uIiwibmV3VW5pdCIsImRpZU9iamVjdHNPbk1hcEluZGV4IiwiZ2V0SW5kZXhGcm9tRGllT2JqZWN0c09uTWFwIiwiZW50aXR5UGFyYW0iLCJhZGRUb09iamVjdHNPbk1hcCIsInJlbW92ZVVuaXRGcm9tRGllT2JqZWN0c09uTWFwIiwiR3Jhc3NBbGdvcml0aG0iLCJHcm91bmRBbGdvcml0aG0iLCJUaWdlcnNBbGdvcml0aG0iLCJmb29kSW5kZXgiLCJnZXRJbmRleEZyb21PYmplY3RzT25NYXAiLCJlYXRlbiIsInJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwIiwiaXNFYXRlbiIsImZvb2RJbmZvcm1hdGlvbiIsInNldEluZGV4T2JqZWN0IiwicmVzZXRFYXRlbiIsIkRpZVVuaXQiLCJhbGdvcml0bXMiLCJwcm90b3R5cGUiLCJhY3Rpb24iLCJhY3QiLCJ1cGRhdGVSb3dDb2wiLCJFbnRpdHkiLCJHYW1lIiwic2V0dGluZyIsImRldk1vZGUiLCJ0aW1lUmVuZGVyIiwiYnRuU3RhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnRuUGF1c2UiLCJzY2VuZSIsImJ1aWxkIiwic2hvd05vdGlmeSIsInNlbGYiLCJsb29wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwiY2FsbGJhY2siLCJpc3NldE9iamVjdE9uTWFwIiwiZGllTWFuYWdlciIsImFjdGlvbk9uTWFwIiwicmVuZGVyIiwiZ2FtZU92ZXIiLCJjbGVhckludGVydmFsIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCIkIiwiaW5pdE5vdGlmeSIsImdhbWUiLCJydW4iLCJzaG93IiwibXNnIiwib2JqZWN0cyIsImJ1aWxkRGVidWdTdHJpbmciLCJpIiwib2JqZWN0IiwibE5vdGlmeSIsImFuaW1hdGlvbiIsInBvc2l0aW9uIiwidGV4dCIsInN0YXR1cyIsIk1hcCIsIm1hcE9iamVjdHMiLCJvYmplY3RzT25NYXAiLCJBcnJheSIsImRpZU9iamVjdHNPbk1hcCIsIm1hcFNpemUiLCJvYmpJRCIsIm9iamVjdE5hbWUiLCJvYmpNaW4iLCJtaW4iLCJvYmpNYXgiLCJtYXgiLCJvYmpDb3VudE9uTWFwIiwibWFwUm93Q29sIiwiZ2V0UmFuZG9tUm93Q29sQ29vcmQiLCJ1bml0U2V0dGluZyIsInRyeU5ld0dlbmVyYXRlIiwib2JqZWN0U2V0dGluZyIsImNvdW50IiwiY291bnRSb3ciLCJjb3VudENvbCIsImRhdGEiLCJnZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJjZWxsIiwiaXNzZXRSb3V0ZSIsInRyeVJvdXRlIiwibWluQ2VsbCIsIm1heENlbGwiLCJleGNsdWRlVmFsdWUiLCJ2YWx1ZSIsIm5ld1Bvc2l0aW9uUm93Q29sIiwic3BsaWNlIiwidW5pdFR5cGUiLCJhcnIiLCJTY2VuZSIsInBsYWluIiwiaW5pdCIsImdlbmVyYXRlIiwibWFwSFRNTCIsImNlbGxDb29yZGluYXRlIiwiaW5uZXJIVE1MIiwiZ2FtZUNvbnRhaW5lcklEIiwiZ3Jhc3MiLCJjb3dzIiwidGlnZXJzIiwiZ3JvdW5kIiwiR2FtZVNvdW5kcyIsImZpbGUiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJVbml0IiwiZ2V0Rm9vZFR5cGUiLCJpc0VhdCIsInNvdW5kRWF0Iiwic2VsZWN0QWxnb3JpdGhtIiwidW5pdEhlYWx0aCIsImNsYXNzSGVhbHRoQ29sb3IiLCJnZXRDbGFzc0hlYWx0aENvbG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FB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ZUFBTCxDQUFxQjZHLEtBQXJCLEdBQTZCLEtBQXBDO0FBQ0EsaUJBQUs3RyxlQUFMLENBQXFCakgsV0FBckIsR0FBbUMsSUFBbkM7QUFDQSxpQkFBS2lILGVBQUwsQ0FBcUJoSCxXQUFyQixHQUFtQyxJQUFuQztBQUNBLGlCQUFLZ0gsZUFBTCxDQUFxQjdJLFdBQXJCLEdBQW1DLElBQW5DO0FBQ0g7OztrQ0FFUzZOLEssRUFBTztBQUNiLGlCQUFLckcsTUFBTCxJQUFlcEYsU0FBU3lMLEtBQVQsQ0FBZjtBQUNIOzs7a0NBRVNBLEssRUFBTztBQUNiLGlCQUFLckcsTUFBTCxJQUFlcEYsU0FBU3lMLEtBQVQsQ0FBZjtBQUNIOzs7Ozs7QUFJTDs7O2tCQTNKcUIyQixJIiwiZmlsZSI6ImNvd3NhbmR0aWdlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB0b29scyBmcm9tIFwiLi4vdG9vbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxnb3JpdGhtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRIZWFsdGhWYWx1ZSA9IDU7XG4gICAgICAgIHRoaXMuc3ViSGVhbHRoVmFsdWUgPSAzO1xuICAgIH1cblxuICAgIGdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbih1bml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGwsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZDtcblxuICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INGB0L7RgdC10LTQvdC40Lgg0LrQu9C10YLQutC4XG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGwgPSBtYXAuZ2V0T25lTGV2ZWxDZWxsc0luZm8odW5pdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINC10LTRg1xuICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAqL1xuICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QgPSBtYXAuZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCB1bml0LmZvb2RUeXBlKTtcblxuICAgICAgICBpZiAodW5pdC5lbmVteSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gVE9ETyDRgyDRgtC40LPRgNCwINC90LXRgiDQstGA0LDQs9C+0LJcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0LLRgNCw0LPQvtCyKNGC0LjQs9GA0L7QsilcbiAgICAgICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICAgICAqICovXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMgPSBtYXAuZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCB1bml0LmVuZW15KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDRgdCy0L7QsdC+0LTQvdGL0LUg0Y/Rh9C10LnQutC4INC60YPQtNCwINC80L7QttC90L4g0L/QtdGA0LXQvNC10YHRgtC40YLRjNGB0Y9cbiAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgKi9cbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQgPSBtYXAuZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCBcImdyb3VuZFwiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbDogbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZDogbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZDogbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgTG9nIGZyb20gJy4vLi4vbG9nJztcblxuLy8gUm91dGVcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtYXBSb3c6IDAsXG4gICAgbWFwQ29sOiAwLFxuICAgIExPQ0FMX0RFQlVHOiBmYWxzZSxcblxuICAgIGdldDogZnVuY3Rpb24gKG1hcCwgdW5pdCwgaW5kZXhPYmplY3QsIHN0ZXBzKSB7XG5cbiAgICAgICAgTG9nLnNob3dEZWJ1Zyhbe1wiTUFQREFUQTpcIiA6IG1hcC5tYXBEYXRhfSx7XCJVTklUOlwiIDogdW5pdH1dLCBMT0NBTF9ERUJVRyk7XG5cbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiA9IFtdO1xuXG4gICAgICAgIHRoaXMubWFwUm93ID0gbWFwLnJvdztcbiAgICAgICAgdGhpcy5tYXBDb2wgPSBtYXAuY29sO1xuXG4gICAgICAgIC8vINC/0L7Qu9GD0YfQuNC8INC40L3RhNC+INC+INGH0LXRgtGL0YDQtdGFINGB0YLQvtGA0L7QvdCw0YUg0L3QsCDQtNC40YHRgtCw0L3RhtC40Lgg0L/QvtC70YPRh9C10L3QvdC+0Lkg0L7RgiBVbml0XG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAxOyBzdGVwIDwgc3RlcHM7IHN0ZXArKykge1xuXG4gICAgICAgICAgICBMb2cuc2hvd0RlYnVnKFt7XCJTVEVQOlwiIDogc3RlcH1dLCBMT0NBTF9ERUJVRyk7XG5cbiAgICAgICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsID0gdGhpcy5nZXROZWlnaGJvcmluZ3NDZWxsKHN0ZXAsIHVuaXQsIG1hcCk7XG5cbiAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RgNCw0LLQuNC70YzQvdC+INC90LDQt9Cy0LDRgtGMXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzSW5mbzogbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vINCS0L7RgiDQv9GA0Y/QvCDQt9C00LXRgdGMINC/0L7Qu9GD0YfQuNC8XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uLnB1c2gocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbjtcbiAgICB9LFxuXG4gICAgLy8g0J/QvtC70YPRh9C40Lwg0LjQvdGE0L4g0YHQvtGB0LXQtNC90LjRhSDRj9GH0LXQtdC6INC90LAg0LrQsNC20LTQvtC5INC40YLRgtC10YDQsNGG0LjQuFxuICAgIGdldE5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChzdGVwLCB1bml0LCBtYXApIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgIC8vICAgICB1bml0LnBvc2l0aW9uUm93ID0gMDtcbiAgICAgICAgLy8gICAgIHVuaXQucG9zaXRpb25Db2wgPSAyO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8g0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YPQs9C70L7QsiBVbml0XG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAgICBsZXQgdW5pdFNpZGVzID0gdGhpcy5nZXRVbml0QW5nbGVQb2ludHMoc3RlcCwgdW5pdC5wb3NpdGlvblJvdywgdW5pdC5wb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgTG9nLnNob3dEZWJ1Zyhbe1wiVU5JVFNJREVTOlwiIDogdW5pdFNpZGVzfV0sIExPQ0FMX0RFQlVHKTtcblxuICAgICAgICAvLyDQndGD0LbQvdC+INC/0L7Qu9GD0YfQuNGC0Ywg0Y/Rh9C10LnQutC4INC90LAg0L7RgdC90L7QstC1INC90LDQudC00LXQvdGL0YUg0YHRgtC+0YDQvtC9ISEhXG5cbiAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4gNC3QtdC8INGB0YLQvtGA0L7QvdCw0Lwg0Lgg0L/QvtC70YPRh9C40Lwg0YHQvtC00LXRgNC20LjQvNC+0LUg0Y/Rh9C10LXQuiwg0LfQsNC00LXQudGB0YLQstGD0LXQvCDQvNCw0YHRgdC40LIg0YEg0LrQsNGA0YLQvtC5INC40LPRgNGLXG4gICAgICAgIGZvciAobGV0IHNpZGUgPSAwOyBzaWRlIDwgdW5pdFNpZGVzLmxlbmd0aDsgc2lkZSsrKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0U2lkZXNbc2lkZV0uaXNzZXQpIHtcblxuICAgICAgICAgICAgICAgIExvZy5zaG93RGVidWcoW1xuICAgICAgICAgICAgICAgICAgICAgICAge1wiU0lERTpcIiA6IHVuaXRTaWRlc1tzaWRlXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJTSURFX05BTUU6XCIgOiB1bml0U2lkZXNbc2lkZV0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgTE9DQUxfREVCVUcpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICB1bml0U2lkZTogdW5pdFNpZGVzW3NpZGVdLFxuICAgICAgICAgICAgICAgICAgICB1bml0UG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgIHVuaXRQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBtYXBcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgTG9nLnNob3dEZWJ1Zyhbe1wiUEFSQU06XCIgOiBwYXJhbX1dLCBMT0NBTF9ERUJVRyk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHVuaXRTaWRlc1tzaWRlXS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdFRvcF9UT19yaWdodFRvcFxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdFRvcF9UT19yaWdodFRvcCA9IHRoaXMuZ2V0VG9wU2lkZU5laWdoYm9yaW5nc0NlbGwocGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnRUb3BfVE9fcmlnaHRUb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gobGVmdFRvcF9UT19yaWdodFRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHRUb3BfVE9fcmlnaHRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHRUb3BfVE9fcmlnaHRCb3R0b20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocmlnaHRUb3BfVE9fcmlnaHRCb3R0b20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20gPSB0aGlzLmdldEJvdHRvbVNpZGVOZWlnaGJvcmluZ3NDZWxsKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdEJvdHRvbV9UT19sZWZ0VG9wXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0Qm90dG9tX1RPX2xlZnRUb3AgPSB0aGlzLmdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdEJvdHRvbV9UT19sZWZ0VG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKGxlZnRCb3R0b21fVE9fbGVmdFRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBMb2cuc2hvd0RlYnVnKFt7XCJTSURFIEVORDpcIiA6IHVuaXRTaWRlc1tzaWRlXS5uYW1lfV0sIExPQ0FMX0RFQlVHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcblxuICAgIC8vICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKiDQn9C+0LvRg9GH0LjQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDRj9GH0LXQtdC6INC/0L4g0YHRgtC+0YDQvtC90LDQvCAqL1xuICAgIGdldFRvcFNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG4gICAgICAgIGxldCBlbmRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsQ29sKys7XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbENvbCA8IGVuZENlbGxDb2wpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuICAgIGdldFJpZ2h0dFNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG4gICAgICAgIGxldCBlbmRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsUm93Kys7XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbFJvdyA8IGVuZENlbGxSb3cpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuICAgIGdldEJvdHRvbVNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG4gICAgICAgIGxldCBlbmRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsQ29sLS07XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbENvbCA+IGVuZENlbGxDb2wpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuICAgIGdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mbyA9IFtdO1xuXG4gICAgICAgIGxldCBzdGFydENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uQ29sO1xuICAgICAgICBsZXQgZW5kQ2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlRW5kLnBvc2l0aW9uUm93O1xuXG4gICAgICAgIGxldCBzdGFydENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uUm93O1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCB1bml0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQocGFyYW0udW5pdFBvc2l0aW9uUm93ICsgJycgKyBwYXJhbS51bml0UG9zaXRpb25Db2wpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHN0YXJ0Q2VsbFJvdyArICcnICsgc3RhcnRDZWxsQ29sKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRQb3NpdGlvbkNlbGwgIT09IHNlbGVjdFBvc2l0aW9uQ2VsbCkge1xuICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocGFyYW0ubWFwLmdldENlbGwoc3RhcnRDZWxsUm93LCBzdGFydENlbGxDb2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0Q2VsbFJvdy0tO1xuICAgICAgICB9IHdoaWxlIChzdGFydENlbGxSb3cgPiBlbmRDZWxsUm93KTtcblxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAqIEBwYXJhbSBzdGVwXG4gICAgICogQHBhcmFtIHBvc2l0aW9uUm93XG4gICAgICogQHBhcmFtIHBvc2l0aW9uQ29sXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldFVuaXRBbmdsZVBvaW50czogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdW5pdEFuZ2xlcyA9IFtdO1xuXG4gICAgICAgIGxldCBsZWZ0VG9wLFxuICAgICAgICAgICAgcmlnaHRUb3AsXG4gICAgICAgICAgICByaWdodEJvdHRvbSxcbiAgICAgICAgICAgIGxlZnRCb3R0b207XG5cbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC0gZ2V0VW5pdEFuZ2xlUG9pbnRzOiAnLCBzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIGxlZnRUb3BcbiAgICAgICAgbGVmdFRvcCA9IHRoaXMuZ2V0TGVmdFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBsZWZ0VG9wOiAnLCBsZWZ0VG9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdFRvcC5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9SaWdodFRvcCA9IHRoaXMuZ2V0UmlnaHRUb3BBbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b1JpZ2h0VG9wLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodFRvcCA9IHtwb3NpdGlvblJvdzogdG9SaWdodFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvUmlnaHRUb3AucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0VG9wID0ge3Bvc2l0aW9uUm93OiBsZWZ0VG9wLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogbGVmdFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyBsZWZ0VG9wXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsZWZ0VG9wX1RPX3JpZ2h0VG9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uUm93OiBsZWZ0VG9wLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IGxlZnRUb3AucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvUmlnaHRUb3AsXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiBsZWZ0VG9wLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdFVCByaWdodFRvcFxuICAgICAgICByaWdodFRvcCA9IHRoaXMuZ2V0UmlnaHRUb3BBbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gcmlnaHRUb3A6ICcsIHJpZ2h0VG9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRUb3AuaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvUmlnaHRCb3R0b20gPSB0aGlzLmdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9SaWdodEJvdHRvbS5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHRvUmlnaHRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b1JpZ2h0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiByaWdodFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyByaWdodFRvcFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHJpZ2h0VG9wLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IHJpZ2h0VG9wLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b1JpZ2h0Qm90dG9tLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogcmlnaHRUb3AuaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIHJpZ2h0Qm90dG9tXG4gICAgICAgIHJpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSByaWdodEJvdHRvbTogJywgcmlnaHRCb3R0b20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodEJvdHRvbS5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9MZWZ0Qm90dG9tID0gdGhpcy5nZXRMZWZ0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9MZWZ0Qm90dG9tLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0Qm90dG9tID0ge3Bvc2l0aW9uUm93OiB0b0xlZnRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b0xlZnRCb3R0b20ucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHJpZ2h0Qm90dG9tLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogcmlnaHRCb3R0b20ucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bml0QW5nbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gcmlnaHRCb3R0b21cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHJpZ2h0Qm90dG9tLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IHJpZ2h0Qm90dG9tLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b0xlZnRCb3R0b20sXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiByaWdodEJvdHRvbS5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgbGVmdEJvdHRvbVxuICAgICAgICBsZWZ0Qm90dG9tID0gdGhpcy5nZXRMZWZ0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIGxlZnRCb3R0b206ICcsIGxlZnRCb3R0b20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0Qm90dG9tLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b0xlZnRUb3AgPSB0aGlzLmdldExlZnRUb3BBbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b0xlZnRUb3AuaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRUb3AgPSB7cG9zaXRpb25Sb3c6IHRvTGVmdFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvTGVmdFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvTGVmdFRvcCA9IHtwb3NpdGlvblJvdzogbGVmdEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IGxlZnRCb3R0b20ucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bml0QW5nbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gbGVmdEJvdHRvbVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGVmdEJvdHRvbV9UT19sZWZ0VG9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uUm93OiBsZWZ0Qm90dG9tLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IGxlZnRCb3R0b20ucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvTGVmdFRvcCxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IGxlZnRCb3R0b20uaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuaXRBbmdsZXM7XG4gICAgfSxcblxuICAgIGdldExlZnRUb3BBbmdsZVBvaW50OiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdyA9IHBvc2l0aW9uUm93IC0gc3RlcDtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uQ29sID0gcG9zaXRpb25Db2wgLSBzdGVwO1xuICAgICAgICBsZXQgYW5nbGVJc3NldCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNVbml0T3V0T2ZCb3JkZXIobmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSkge1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5maW5kTmV3QW5nZWwoc3RlcCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbmV3UG9zaXRpb246ICcsIG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb24ucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbi5wb3NpdGlvbkNvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGVJc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzc2V0OiBhbmdsZUlzc2V0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFJpZ2h0VG9wQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyAtIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sICsgc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQ6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgKyBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCArIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1VuaXRPdXRPZkJvcmRlcihuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0TGVmdEJvdHRvbUFuZ2xlUG9pbnQ6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgKyBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCAtIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1VuaXRPdXRPZkJvcmRlcihuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNVbml0T3V0T2ZCb3JkZXI6IGZ1bmN0aW9uIChuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKG5ld1Bvc2l0aW9uUm93IDwgMCB8fCBuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIChuZXdQb3NpdGlvbkNvbCA8IDAgfHwgbmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKG5ld1Bvc2l0aW9uUm93IDwgMCB8fCBuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKG5ld1Bvc2l0aW9uQ29sIDwgMCB8fCBuZXdQb3NpdGlvbkNvbCA+ICh0aGlzLm1hcENvbCAtIDEpKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyDQn9C+0L/RgNC+0LHRg9C10Lwg0L3QsNC50YLQuCDQvdC+0LLRg9GOINGP0YfQtdC50LrRgyDQv9GA0LjQsdCw0LLQuNCyINC30L3QsNGH0LXQvdC40LUg0YjQsNCz0LBcbiAgICBmaW5kTmV3QW5nZWw6IGZ1bmN0aW9uIChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0L/QviDRiNCw0LPQsNC8INCyIDQt0YUg0L3QsNC/0YDQsNCy0LvQtdC90LjRj9GFINC4INC/0L7RgdC80L7RgtGA0LjQvCwg0L/QvtC/0LDQtNCw0LXQvCDQu9C4INCyINC/0YDQtdC00LXQu9GLINC60LDRgNGC0YtcbiAgICAgICAgZm9yIChsZXQgc3RwID0gMTsgc3RwIDw9IHN0ZXA7IHN0cCsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKChzdHAgPD0gc3RlcCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbmV3QW5nZWwgPSB0aGlzLmNoZWNrTmVpZ2hib3JpbmdzQ2VsbEJ5RGlyZWN0aW9ucyhzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIG5ld0FuZ2VsOiAnLCBuZXdBbmdlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3QW5nZWwuaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0FuZ2VsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzRmluZDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zOiBmdW5jdGlvbiAoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbkxlZnQgPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25MZWZ0LmlzRmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25MZWZ0OiB0cnVlO1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25MZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25MZWZ0OiBmYWxzZTtcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGlyZWN0aW9uVG9wID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvblRvcChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25Ub3AuaXNGaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvblRvcDogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uVG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Ub3A6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25SaWdodCA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25SaWdodChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25SaWdodC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uUmlnaHQ6IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvblJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25SaWdodDogZmFsc2U7XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpcmVjdGlvbkJvdHRvbSA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b20oc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uQm90dG9tLmlzRmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Cb3R0b206IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbkJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uQm90dG9tOiBmYWxzZTtcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvbkxlZnQ6IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdHJ5TmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5TmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbkNvbCAtIHN0cDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKChuZXdQb3NpdGlvblJvdyA+PSAwKSAmJiAobmV3UG9zaXRpb25Sb3cgPD0gKHRoaXMubWFwUm93IC0gMSkpKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKCh0cnlOZXdQb3NpdGlvbkNvbCA+PSAwKSAmJiAodHJ5TmV3UG9zaXRpb25Db2wgPD0gKHRoaXMubWFwQ29sIC0gMSkpKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzRmluZDogZmluZFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY2hlY2tDZWxsQnlEaXJlY3Rpb25Ub3A6IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdHJ5TmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5TmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvblJvdyAtIHN0cDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uUm93ID49IDApICYmICh0cnlOZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgKChuZXdQb3NpdGlvbkNvbCA+PSAwKSAmJiAobmV3UG9zaXRpb25Db2wgPD0gKHRoaXMubWFwQ29sIC0gMSkpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzRmluZDogZmluZFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY2hlY2tDZWxsQnlEaXJlY3Rpb25SaWdodDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uQ29sICsgc3RwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKChuZXdQb3NpdGlvblJvdyA+PSAwKSAmJiAobmV3UG9zaXRpb25Sb3cgPD0gKHRoaXMubWFwUm93IC0gMSkpKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKCh0cnlOZXdQb3NpdGlvbkNvbCA+PSAwKSAmJiAodHJ5TmV3UG9zaXRpb25Db2wgPD0gKHRoaXMubWFwQ29sIC0gMSkpKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzRmluZDogZmluZFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b206IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdHJ5TmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5TmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvblJvdyArIHN0cDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uUm93ID49IDApICYmICh0cnlOZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgKChuZXdQb3NpdGlvbkNvbCA+PSAwKSAmJiAobmV3UG9zaXRpb25Db2wgPD0gKHRoaXMubWFwQ29sIC0gMSkpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzRmluZDogZmluZFxuICAgICAgICB9O1xuICAgIH1cbn0iLCJpbXBvcnQgY29uc3RhbnQgZnJvbSAnLi8uLi9jb25zdGFudCdcblxuLy8g0J/RgNC+0LLQtdGA0LjQvCDRgdC+0YHQtdC00L3QuNC4INC60LvQtdGC0LrQuCArXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgTE9DQUxfREVCVUc6IGZhbHNlLFxuICAgIGdldChtYXAsIHVuaXQpIHtcblxuICAgICAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IHVuaXRQb3NpdGlvblJvdyA9IHBhcnNlSW50KHVuaXQucG9zaXRpb25Sb3cpO1xuICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ29sID0gcGFyc2VJbnQodW5pdC5wb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgLy8g0J3QtSDQt9Cw0LHRi9GC0Ywg0L/RgNC+INCz0YDQsNC90LjRhtGLINC60LDRgNGC0YtcbiAgICAgICAgbGV0IGJvcmRlciA9IHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHRvcFJpZ2h0OiBtYXAuY29sLFxuICAgICAgICAgICAgcmlnaHQ6IG1hcC5jb2wsXG4gICAgICAgICAgICByaWdodEJvdHRvbTogbWFwLmNvbCxcbiAgICAgICAgICAgIGJvdHRvbTogbWFwLnJvdyxcbiAgICAgICAgICAgIGxlZnRCb3R0b206IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgbGVmdFRvcDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFRPUCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstCy0LXRgNGF0YMgK1xuICAgICAgICBpZiAoKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3ApIHtcbiAgICAgICAgICAgIGNlbGxzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgZXhpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogbWFwLmdldENlbGwodW5pdFBvc2l0aW9uUm93IC0gMSwgdW5pdFBvc2l0aW9uQ29sKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT1BfUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQstC10YDRhdGDLdCy0L/RgNCw0LLQviArXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCArIDEpIDwgYm9yZGVyLnRvcFJpZ2h0XG4gICAgICAgICkge1xuICAgICAgICAgICAgY2VsbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wUmlnaHQnLFxuICAgICAgICAgICAgICAgIGV4aXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1hcC5nZXRDZWxsKHVuaXRQb3NpdGlvblJvdyAtIDEsIHVuaXRQb3NpdGlvbkNvbCArIDEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJJR0hUINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0L/RgNCw0LLQviArXG4gICAgICAgIGlmICgodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIucmlnaHQpIHtcbiAgICAgICAgICAgIGNlbGxzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBleGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtYXAuZ2V0Q2VsbCh1bml0UG9zaXRpb25Sb3csIHVuaXRQb3NpdGlvbkNvbCArIDEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJJR0hUX0JPVFRPTSDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstC/0YDQsNCy0L4t0LLQvdC40LfRgyArXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgKyAxKSA8IGJvcmRlci5ib3R0b21cbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIucmlnaHRCb3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodEJvdHRvbScsXG4gICAgICAgICAgICAgICAgZXhpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogbWFwLmdldENlbGwodW5pdFBvc2l0aW9uUm93ICsgMSwgdW5pdFBvc2l0aW9uQ29sICsgMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQk9UVE9NINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINCy0L3QuNC30YMgK1xuICAgICAgICBpZiAoKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbSkge1xuICAgICAgICAgICAgY2VsbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICBleGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtYXAuZ2V0Q2VsbCh1bml0UG9zaXRpb25Sb3cgKyAxLCB1bml0UG9zaXRpb25Db2wpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExFRlRfQk9UVE9NINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINGB0LvQtdCy0LAt0LLQvdC40LfRgyArXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgKyAxKSA8IGJvcmRlci5ib3R0b21cbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRCb3R0b21cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0Qm90dG9tJyxcbiAgICAgICAgICAgICAgICBleGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtYXAuZ2V0Q2VsbCh1bml0UG9zaXRpb25Sb3cgKyAxLCB1bml0UG9zaXRpb25Db2wgLSAxKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMRUZUINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINGB0LvQtdCy0LAgK1xuICAgICAgICBpZiAoKHVuaXRQb3NpdGlvbkNvbCAtIDEpID49IGJvcmRlci5sZWZ0KSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICBleGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtYXAuZ2V0Q2VsbCh1bml0UG9zaXRpb25Sb3csIHVuaXRQb3NpdGlvbkNvbCAtIDEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExFRlRfVE9QINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINC70LXQstCwLdCy0LLQtdGA0YXRgyArXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCAtIDEpID49IGJvcmRlci5sZWZ0XG4gICAgICAgICkge1xuICAgICAgICAgICAgY2VsbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdFRvcCcsXG4gICAgICAgICAgICAgICAgZXhpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogbWFwLmdldENlbGwodW5pdFBvc2l0aW9uUm93IC0gMSwgdW5pdFBvc2l0aW9uQ29sIC0gMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1bml0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNlbGxzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUk9XOiBcIiArIHVuaXRQb3NpdGlvblJvdywgXCJDT0w6IFwiICsgdW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfVxufSIsImltcG9ydCBjb25zdGFudCBmcm9tICcuLy4uL2NvbnN0YW50J1xuaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vLi4vZW50aXR5JztcbmltcG9ydCBEaWVVbml0IGZyb20gJy4vLi4vZGllVW5pdCc7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi8uLi90b29scyc7XG5cbi8vIENPV1MgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvd3NBbGdvcml0aG0gIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy8gQ2VsbCBEaXN0YW5jZVxuICAgICAgICB0aGlzLmRpc3RhbmNlVmlldyA9IDE7XG4gICAgfVxuXG4gICAgYWN0ICh1bml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiA9IG1hcC5nZXRPbmVMZXZlbENlbGxzSW5mbyh1bml0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogZGF0YTpcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCh0L7RgdC10LTQvdC40LzQuCDQutC70LXRgtC60LDQvNC4ICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLRgNCw0LLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotC40LPRgNCw0LzQuCAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQl9C10LzQu9GR0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICAgKi9cblxuICAgICAgICAvKmlmICh1bml0LmhlYWx0aCA+IDApIHtcbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0YDRj9C00L7QvCDQotC40LPRgNGLXG4gICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8v0JXRgdC70Lgg0LXRgdGC0Ywg0YHQstC+0LHQvtC00L3Ri9C1INC60LvQtdGC0LrQuFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JHQtdC20LjQvCDQvtGCINCi0LjQs9GA0LBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQXdheUZyb21FbmVteShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy/QldGB0LvQuCDQtdGB0YLRjCDRgNGP0LTQvtC8INGC0YDQsNCy0LAg0LXQtNC40Lwg0LXQtSDQuCDRg9Cx0LXQs9Cw0LXQvFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INC10LTQsFxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGcmVlKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwLmtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfSovXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCR0LXQttC40Lwg0L7RgiDRgtC40LPRgNCwICtcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlQXdheUZyb21FbmVteSAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtVxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgLy8g0KHQvtGF0YDQsNC90LjQvCDRgdGC0LDRgNGL0LkgVW5pdCDQuCDQtdCz0L4gUkMgKFJvdy9Db2wpXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2wg0Lgg0LfQsNC/0LjRiNC40Lwg0LIg0L3QvtCy0YPRjiDRj9GH0LXQudC60YMg0LrQvtGA0L7QstGDXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSb3cvQ29sINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0KIu0Log0LzRiyDRg9Cx0LXQs9Cw0LXQvCDQuCDQvdC1INC10LTQuNC8INGC0YDQsNCy0YMsINC+0YLQvdC40LzQuNC8INC90LXQvNC90L7Qs9C+INC30LTQvtGA0L7QstGM0Y9cbiAgICAgICAgdW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCV0LTQuNC8INGC0YDQsNCy0YNcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZVRvRm9vZCAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0LXQtNGLXG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge307XG5cbiAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjQvCDQsiDQvNC10L3QtdC00LbQtdGAINGB0LzQtdGA0YLQtdC5INGC0YDQsNCy0YNcbiAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2wsXG4gICAgICAgICAgICBkaWVVbml0VHlwZTogXCJncmFzc1wiLFxuICAgICAgICAgICAgZGllVW5pdElkOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgIG1hcC5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAvLyDQn9GA0Lgg0L/QvtCz0LvQsNGJ0LXQvdC40Lgg0YLRgNCw0LLRiyDQv9GA0LjQsdCw0LLQuNC8INC20LjQt9C90LgsINC+0LPRgNCw0L3QuNGH0LjQvCDQt9C90LDRh9C10L3QuNC10LwgMTAwXG4gICAgICAgIGlmICh1bml0LmhlYWx0aCA8IDEwMCkge1xuXG4gICAgICAgICAgICBpZiAodW5pdC5oZWFsdGggPiA5MCkge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKDEwMCAtIHVuaXQuaGVhbHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgodGhpcy5hZGRIZWFsdGhWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LLQvtCx0L7QtNC90L7QtSDQv9C10YDQtdC80LXRidC10L3QuNC1XG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUZyZWUgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVuaXQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0YEg0LfQtdC80LvQtdC5XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIHVuaXQuc3ViSGVhbHRoKHRoaXMuc3ViSGVhbHRoVmFsdWUpO1xuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIi8vIERFQVRIIEFMR09SSVRNXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vLi4vZW50aXR5JztcbmltcG9ydCBVbml0IGZyb20gJy4vLi4vdW5pdCc7XG5cblxuLy8gR1JPVU5EIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWF0aEFsZ29yaXRobSB7XG4gICAgYWN0IChkZWF0aFVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgaWYgKGRlYXRoVW5pdC51bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQgPCBkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGRlYXRoVW5pdC51bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQrKztcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gbWFwLmdldE5ld1Jvd0NvbFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Bvc2l0aW9uUm93Q29sKTtcblxuICAgICAgICAgICAgdmFyIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogZGVhdGhVbml0LmRpZVVuaXRJZCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGRlYXRoVW5pdC5kaWVVbml0VHlwZSxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbmV3UG9zaXRpb24ucm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbi5jb2wsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgbmV3VW5pdCA9IG5ldyBVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgICAgIHZhciBkaWVPYmplY3RzT25NYXBJbmRleCA9IG1hcC5nZXRJbmRleEZyb21EaWVPYmplY3RzT25NYXAoZGVhdGhVbml0KTtcblxuICAgICAgICAgICAgdmFyIGVudGl0eVBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogZGVhdGhVbml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBkZWF0aFVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbChkZWF0aFVuaXQsIG5ldyBFbnRpdHkoZW50aXR5UGFyYW0pKTtcblxuICAgICAgICAgICAgbWFwLnNldENlbGwobmV3VW5pdCwgbmV3VW5pdCk7XG5cbiAgICAgICAgICAgIG1hcC5hZGRUb09iamVjdHNPbk1hcChuZXdVbml0KTtcblxuICAgICAgICAgICAgbWFwLnJlbW92ZVVuaXRGcm9tRGllT2JqZWN0c09uTWFwKGRpZU9iamVjdHNPbk1hcEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5cbi8vIEdSQVNTIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFzc0FsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgYWN0ICgpIHt9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcblxuLy8gR1JPVU5EIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmRBbGdvcml0aG0gZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGFjdCAoKSB7fTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIiwiaW1wb3J0IExvZyBmcm9tICcuLy4uL2xvZyc7XG5pbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi8uLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuLy4uL3Rvb2xzJztcblxuY29uc3QgTE9DQUxfREVCVUcgPSB0cnVlO1xuXG4vLyBUSUdFUlMgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2Vyc0FsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8g0KDQsNC00LjRg9GBINGP0YfQtdC10Log0LIg0YfQtdGC0YvRgNC1INGB0YLQvtGA0L7QvdGLLCDRg9Cy0LXQu9C40YfQtdC9INC90LAg0L7QtNC90YMsINC10YHQu9C4IDQg0YLQviAzXG4gICAgICAgIHRoaXMuZGlzdGFuY2VWaWV3ID0gNDtcbiAgICB9XG5cbiAgICBhY3QgKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICBMb2cuc2hvd0RlYnVnKFt7XCJUSUdFUjpcIiA6IHVuaXR9XSwgTE9DQUxfREVCVUcpO1xuXG4gICAgICAgIC8vINCS0L7QvtC30LLRgNCw0YLQuNGC0Ywg0L7QsdGK0LXQutGCINGBINGB0L7RgdC10LTQvdC40LzQuCDRj9GH0LXQudC60LDQvNC4XG4gICAgICAgIC8vIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24gPSBtYXAuZ2V0TXVsdGlMZXZlbENlbGxzSW5mbyh1bml0LCBpbmRleE9iamVjdCwgdGhpcy5kaXN0YW5jZVZpZXcpO1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uID0gbWFwLmdldE9uZUxldmVsQ2VsbHNJbmZvKHVuaXQpO1xuXG4gICAgICAgIExvZy5zaG93RGVidWcoW3tcIk5FSUdIQk9SSU5HU0NFTExJTkZPUk1BVElPTjogXCIgOiBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb259XSwgTE9DQUxfREVCVUcpO1xuXG4gICAgICAgIC8vIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGE6XG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQmtCw0YDRgtC+0LkgICAgICAgICAgICAgIC0gZGF0YS5tYXBcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCh0L7RgdC10LTQvdC40LzQuCDQutC70LXRgtC60LDQvNC4ICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLRgNCw0LLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotC40LPRgNCw0LzQuCAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQl9C10LzQu9GR0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICAgKi9cblxuICAgICAgIC8qIGlmICh1bml0LmhlYWx0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0LXQtNCwXG4gICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGcmVlKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWFwLmtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfSovXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCV0LTQuNC8INC60L7RgNC+0LLRg1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlVG9Gb29kIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDQutC+0YDQvtCyXG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoIC0xKTtcblxuICAgICAgICAvLyDQrdGC0LAg0Y/Rh9C10LnQutCwINGP0LLQu9GP0LXRgtGM0YHRjyDQutC+0YDQvtCy0L7QuSwg0YIu0LUg0JXQlNCe0JkhISFcbiAgICAgICAgLy8gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdXG4gICAgICAgIC8vIHVuaXQuZWF0ZW4odHJ1ZSwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCBpbmRleCDRgdGK0LXQtNC10L3QvtC5INC60L7RgNC+0LLRiyDQuNC3INC80LDRgdGB0LjQstCwIG9iamVjdHNPbk1hcFxuICAgICAgICBsZXQgZm9vZEluZGV4ID0gbWFwLmdldEluZGV4RnJvbU9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0pO1xuXG4gICAgICAgIC8vINCf0L7QvNC10YLQuNC70Lgg0YLQuNCz0YDQsCDRh9GC0L4g0L7QvSDRgdGK0LXQuyDQutC+0YDQvtCy0YNcbiAgICAgICAgdW5pdC5lYXRlbihuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGZvb2RJbmRleCk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgtC40LPRgNCwINC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCj0LTQsNC70LjQvCDQutC+0YDQvtCy0YMg0LjQtyDQuNCz0YDQvtCy0L7Qs9C+INC80LDRgdGB0LjQstCwXG4gICAgICAgIG1hcC5yZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChmb29kSW5kZXgpO1xuXG4gICAgICAgIGRlbGV0ZSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF07XG5cbiAgICAgICAgLy8g0J/RgNC4INC/0L7Qs9C70LDRidC10L3QuNC4INGC0YDQsNCy0Ysg0L/RgNC40LHQsNCy0LjQvCDQttC40LfQvdC4LCDQvtCz0YDQsNC90LjRh9C40Lwg0LfQvdCw0YfQtdC90LjQtdC8IDEwMFxuICAgICAgICBpZiAodW5pdC5oZWFsdGggPCAxMDAgKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0LmhlYWx0aCA+IDkwKSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgoMTAwLXVuaXQuaGVhbHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgodGhpcy5hZGRIZWFsdGhWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LLQvtCx0L7QtNC90L7QtSDQv9C10YDQtdC80LXRidC10L3QuNC1XG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUZyZWUgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge307XG5cbiAgICAgICAgLy8gdW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3RcblxuICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INGD0LHQuNC7INC70Lgg0LTQsNC90L3Ri9C5INGC0LjQs9GAINGC0L7Qu9GM0LrQviDRh9GC0L4g0LrQvtGA0L7QstGDLFxuICAgICAgICAvLyDQtdGB0LvQuCDQtNCwLCDRgtC+INC90LAg0YHQu9C10LQuINGI0LDQs9C1INC/0L7RgdGC0LDQstC40Lwg0L3QsCDQtdCz0L4g0LzQtdGB0YLQviDRgtCw0LHQu9C40YfQutGDdW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3RcbiAgICAgICAgaWYgKHVuaXQuaXNFYXRlbigpKSB7XG5cbiAgICAgICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgICAgIGRpZVVuaXRUeXBlOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgZGllVW5pdElkOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5pZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgICAgICBkaWVVbml0LnNldEluZGV4T2JqZWN0KHVuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0KTtcblxuICAgICAgICAgICAgbWFwLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBkaWVVbml0KTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRVbml0LnJlc2V0RWF0ZW4oKTtcblxuICAgICAgICBvbGRVbml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDRgSDQt9C10LzQu9C10LlcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG59XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIEdMT0JBTF9ERUJVRyA6IHRydWVcbn07IiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgRGVhdGhBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWVVbml0IGV4dGVuZHMgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICBzdXBlcihwYXJhbSk7XG5cbiAgICAgICAgdGhpcy5pbmRleE9iamVjdCA9IHBhcmFtLmluZGV4T2JqZWN0O1xuXG4gICAgICAgIHRoaXMuYWxnb3JpdG1zID0gbmV3IERlYXRoQWxnb3JpdGhtKCk7XG5cbiAgICAgICAgdGhpcy5kaWVVbml0VHlwZSA9IHBhcmFtLmRpZVVuaXRUeXBlO1xuICAgICAgICB0aGlzLmRpZVVuaXRJZCA9IHBhcmFtLmRpZVVuaXRJZDtcblxuICAgICAgICB0aGlzLnVuaXRSZXN1cmVjdGlvbkludGVydmFsID0gMztcbiAgICAgICAgdGhpcy51bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQgPSAwO1xuXG4gICAgICAgIC8vIHRoaXMuc291bmREaWUgPSBuZXcgR2FtZVNvdW5kcyhcImF1ZGlvL2RpZV9cIiArIHRoaXMuY2xhc3NOYW1lICsgXCIubXAzXCIpO1xuICAgIH1cbn1cblxuRGllVW5pdC5wcm90b3R5cGUuc2V0SW5kZXhPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXhPYmplY3QpIHtcbiAgICB0aGlzLmluZGV4T2JqZWN0ID0gaW5kZXhPYmplY3Q7XG59O1xuXG5cbi8qKlxuICog0KDQsNC30L3Ri9C1INC00LXQudGB0YLQstC40Y8g0L7QsdGK0LXQutGC0LBcbiAqL1xuRGllVW5pdC5wcm90b3R5cGUuYWN0aW9uID0gZnVuY3Rpb24gKG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICB0aGlzLmFsZ29yaXRtcy5hY3QodGhpcywgbWFwLCBpbmRleE9iamVjdCk7XG59O1xuXG5cbi8qKlxuICog0J7QsdC90L7QstC40LwgUm93L0NvbCDQvtCx0YrQtdC60YLQsFxuICogQHBhcmFtIHVuaXRcbiAqL1xuRGllVW5pdC5wcm90b3R5cGUudXBkYXRlUm93Q29sID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgICB0aGlzLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICB0aGlzLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbn07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbS5pZDtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBwYXJhbS5jbGFzc05hbWU7XG4gICAgICAgIHRoaXMucG9zaXRpb25Sb3cgPSBwYXJhbS5vYmpQb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbCA9IHBhcmFtLm9ialBvc2l0aW9uQ29sO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J7QsdC90L7QstC40LwgUm93L0NvbCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICovXG4gICAgdXBkYXRlUm93Q29sICh1bml0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCS0YvQstC+0LQgSFRNTCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J2ItdW5pdCBcIit0aGlzLmNsYXNzTmFtZStcIic+PC9kaXY+XCI7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBMb2cgZnJvbSAnLi9sb2cnO1xuaW1wb3J0IFNjZW5lIGZyb20gJy4vc2NlbmUnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9zZXR0aW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgLyoqXG4gICAgICogT0JKIEdBTUVcbiAgICAgKiBAcGFyYW0gc2V0dGluZ1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nID0gc2V0dGluZztcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40Lwg0YDQtdC20LjQvCDQuNCz0YDRi1xuICAgICAgICB0aGlzLmRldk1vZGUgPSBzZXR0aW5nLmRldk1vZGUgfHwgZmFsc2U7XG5cbiAgICAgICAgLy8g0KPRgdGC0LDQvdC+0LLQuNC8INGB0LrQvtGA0L7RgdGC0Ywg0LjQs9GA0L7QstC+0LPQviDRhtC40LrQu9CwXG4gICAgICAgIHRoaXMudGltZVJlbmRlciA9IHNldHRpbmcudGltZVJlbmRlciB8fCA1MDA7XG5cbiAgICAgICAgdGhpcy5idG5TdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWJ1dHRvbnNfX2J0bi1zdGFydCcpO1xuICAgICAgICB0aGlzLmJ0blBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItYnV0dG9uc19fYnRuLXBhdXNlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR0FNRSBMT09QXG4gICAgICovXG4gICAgcnVuICgpIHtcbiAgICAgICAgLy8g0KHQvtC30LTQsNC00LjQvCDQvdC+0LLRg9GOINGB0YbQtdC90YNcbiAgICAgICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKHRoaXMuc2V0dGluZyk7XG5cbiAgICAgICAgLy8g0KHQvtC30LTQsNC00LjQvCDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtSDQvdCwINGB0YbQtdC90LVcbiAgICAgICAgaWYgKHNjZW5lLmJ1aWxkKCkpIHtcblxuICAgICAgICAgICAgTG9nLnNob3dOb3RpZnkoJ9CY0LPRgNCwINC30LDQs9GA0YPQttC10L3QsC4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgTG9nLnNob3dOb3RpZnkoXCLQndCw0LbQvNC40YLQtSAn0J3QsNGH0LDRgtGMINC40LPRgNGDJy5cIiwgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IGxvb3A7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kZXZNb2RlKSB7XG5cbiAgICAgICAgICAgICAgICBMb2cuc2hvd05vdGlmeSgn0JjQs9GA0LAg0LIg0L7QsdGL0YfQvdC+0Lwg0YDQtdC20LjQvNC1LicsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIExvZy5zaG93Tm90aWZ5KCfQmNCz0YDQsCDQt9Cw0L/Rg9GJ0LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vINCT0LvQsNCy0L3Ri9C5IExvb3BcbiAgICAgICAgICAgICAgICAgICAgbG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lLmlzc2V0T2JqZWN0T25NYXAoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmRpZU1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgc2VsZi50aW1lUmVuZGVyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9vcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgTG9nLnNob3dOb3RpZnkoJ9CY0LPRgNCwINC+0YHRgtCw0L3QvtCy0LvQtdC90LAuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lLmlzc2V0T2JqZWN0T25NYXAoKSkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuc2hvd05vdGlmeSgn0JjQs9GA0LAg0LIg0YDQtdC20LjQvNC1INGA0LDQt9GA0LDQsdC+0YLRh9C40LrQsC4nLCAnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmRpZU1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuYWN0aW9uT25NYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLnNob3dOb3RpZnkoJ9Ca0L7QvdC10YYg0LjQs9GA0YsuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgTG9nLnNob3dOb3RpZnkoJ0dhbWUgT3ZlcicsICdlcnJvcicpO1xuICAgICAgICBhbGVydCgnR2FtZSBPdmVyJyk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IExvZyBmcm9tICcuL2xvZyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSBcIi4vc2V0dGluZ1wiO1xuXG4vLyDQn9C+0YHQu9C1INC30LDQs9GA0YPQt9C60Lgg0LTQvtC60YPQvNC10L3RgtCwINC30LDQv9GD0YHRgtC40Lwg0LjQs9GA0YNcbiQoZnVuY3Rpb24gKCkge1xuXG4gICAgTG9nLmluaXROb3RpZnkoKTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoc2V0dGluZyk7XG5cbiAgICBnYW1lLnJ1bigpO1xufSk7XG4iLCJpbXBvcnQgY29uc3RhbnQgZnJvbSAnLi9jb25zdGFudCc7XG5cbi8qKlxuICogTE9HXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKiAtLS0gc2ltcGxlIHRleHQgbWVzc2FnZVxuICAgICAqIEBwYXJhbSBtc2dcbiAgICAgKi9cbiAgICBzaG93IChtc2cpIHtcbiAgICAgICAgbXNnICE9IHVuZGVmaW5lZCA/IGNvbnNvbGUubG9nKFwiKnxNU0ctLT5cIiwgbXNnKSA6IGNvbnNvbGUubG9nKCcqfE1TRy0tPiDQk9C00LUt0YLQviDQv9GD0YHRgtC+0Lkg0LLRi9Cy0L7QtCBMb2cuc2hvdygpOycpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiAtLS0gREVCVUdcbiAgICAgKiBGT1JNQVQ6IFt7dGV4dDpvYmplY3R9LHt0ZXh0Om9iamVjdH1dO1xuICAgICAqIEBwYXJhbSBvYmplY3RzXG4gICAgICogQHBhcmFtIExPQ0FMX0RFQlVHXG4gICAgICovXG4gICAgc2hvd0RlYnVnIChvYmplY3RzID0gbnVsbCwgTE9DQUxfREVCVUcgPSBmYWxzZSkge1xuICAgICAgICBpZiAob2JqZWN0cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGREZWJ1Z1N0cmluZyhvYmplY3RzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKExPQ0FMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGREZWJ1Z1N0cmluZyhvYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKnxNU0ctLT4g0JPQtNC1LdGC0L4g0L/Rg9GB0YLQvtC5INCy0YvQstC+0LQgTG9nLnNob3dEZWJ1ZygpOycpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBidWlsZERlYnVnU3RyaW5nIChvYmplY3RzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIhfERCRy0tPlwiLCBvYmplY3QsIG9iamVjdHNbaV1bb2JqZWN0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gLS0tIE5PVElGWVxuICAgIGluaXROb3RpZnkoKSB7XG4gICAgICAgICQubE5vdGlmeSh7XG4gICAgICAgICAgICBhbmltYXRpb246ICdzbGlkZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbVJpZ2h0J1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNob3dOb3RpZnkgKHRleHQsIHN0YXR1cykge1xuICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsIHRleHQsIHN0YXR1cyk7XG4gICAgfVxufSIsImltcG9ydCBMb2cgZnJvbSAnLi9sb2cnO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgVW5pdCBmcm9tICcuL3VuaXQnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9zZXR0aW5nJztcbmltcG9ydCBEaWVVbml0IGZyb20gJy4vZGllVW5pdCc7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5pbXBvcnQgb25lTGV2ZWxDZWxsc0luZm8gZnJvbSAnLi9hbGdvcml0aG0vYWxnb3JpdGhtRmluZE9uZUxldmVsTmVpZ2hib3JpbmdzQ2VsbEluZm8nO1xuaW1wb3J0IG11bHRpTGV2ZWxDZWxsc0luZm8gZnJvbSAnLi9hbGdvcml0aG0vYWxnb3JpdGhtRmluZE11bHRpTGV2ZWxOZWlnaGJvcmluZ3NDZWxsSW5mbyc7XG5cblxuLyoqXG4gKiDQmtC70LDRgdGBINGA0LDQsdC+0YLRiyDRgSDQutCw0YDRgtC+0LlcbiAqIEBwYXJhbSBzZXR0aW5nXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gW107XG5cbiAgICAgICAgLy8g0J7QsdGK0LXQutGC0Ysg0LTQu9GPINC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzID0gc2V0dGluZy5tYXBPYmplY3RzO1xuXG4gICAgICAgIC8vINCh0L/QuNGB0L7QuiDQvtCx0YrQtdC60YLQvtCyLCDQutC+0YLQvtGA0YvQtSDQt9Cw0LTQtdC50YHRgtCy0L7QstCw0L3QvdGLINC90LAg0LrQsNGA0YLQtVxuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5yb3cgPSBzZXR0aW5nLm1hcFNpemUucm93IHx8IDA7XG4gICAgICAgIHRoaXMuY29sID0gc2V0dGluZy5tYXBTaXplLmNvbCB8fCAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J/QvtGB0YLRgNC+0LjQvCDQv9GD0YHRgtGD0Y4g0LrQsNGA0YLRgyDQvdCwINC+0YHQvdC+0LLQtSDQvdCw0YfQsNC70YzQvdGL0YUgUm93L0NvbFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hcERhdGEucHVzaChbXSkgPCB0aGlzLnJvdykgO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcERhdGEubGVuZ3RoID09IHRoaXMucm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCT0LXQvdC10YDQsNGG0LjRjyDQutCw0YDRgtGLXG4gICAgICovXG4gICAgZ2VuZXJhdGUoKSB7XG5cbiAgICAgICAgbGV0IG9iaklEID0gMDtcblxuICAgICAgICBmb3IgKGxldCBvYmplY3ROYW1lIGluIHRoaXMubWFwT2JqZWN0cykge1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3ROYW1lKTtcbiAgICAgICAgICAgIGxldCBvYmpNaW4gPSB0aGlzLm1hcE9iamVjdHNbb2JqZWN0TmFtZV0ubWluO1xuICAgICAgICAgICAgbGV0IG9iak1heCA9IHRoaXMubWFwT2JqZWN0c1tvYmplY3ROYW1lXS5tYXg7XG5cbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC+0LHRitC10LrRgiDRj9Cy0LvRj9C10YLRjNGB0Y8g0YHRgtCw0YLQuNC60L7QuSxcbiAgICAgICAgICAgIC8vINGC0L4g0L/QvtGB0YLQsNGA0LXQvNGB0Y8g0LTQsNGC0Ywg0L/QviDQvNCw0LrRgdC40LzRg9C80YMg0LfQvdCw0YfQtdC90LjRjyBtaW4vbWF4XG4gICAgICAgICAgICAvLyDQtNC70Y8g0L/QvtC70L3QvtCz0L4g0LfQsNC/0L7Qu9C90LXQvdC40Y8g0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuICAgICAgICAgICAgaWYgKG9iak1pbiA9PT0gbnVsbCAmJiBvYmpNYXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvYmpNaW4gPSAodGhpcy5yb3cgKyB0aGlzLmNvbCkgKiAyO1xuICAgICAgICAgICAgICAgIG9iak1heCA9ICh0aGlzLnJvdyArIHRoaXMuY29sKSAqIDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0LrQvtC7LdCy0L4g0L7QsdGK0LXQutGC0L7QsiDQvdCwINC60LDRgNGC0LVcbiAgICAgICAgICAgIGxldCBvYmpDb3VudE9uTWFwID0gdG9vbHMucmFuZG9tSW50ZWdlcihvYmpNaW4sIG9iak1heCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqZWN0TmFtZVtvYmpDb3VudE9uTWFwXTogXCIgKyBvYmplY3ROYW1lICsgXCIgXCIgKyBvYmpDb3VudE9uTWFwKTtcblxuICAgICAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0Y3RgtC+0LzRgyDQutC+0LvQuNGH0LXQstGB0YLQstGDXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakNvdW50T25NYXA7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IG1hcFJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXBSb3dDb2xOb3JtYWw6ICcsIG1hcFJvd0NvbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbWFwUm93Q29sLnJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBtYXBSb3dDb2wuY29sXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgRW50aXR5KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT0gJ2Nvd3MnIHx8IG9iamVjdE5hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9PYmplY3RzT25NYXAodW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdFNldHRpbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpJRDogb2JqSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJ5TmV3R2VuZXJhdGUodW5pdFNldHRpbmcsIG9iakNvdW50T25NYXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JqSUQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7QstGC0L7RgNC90LDRjyDQs9C10L3QtdGA0LDRhtC40Y8sINCyINGB0LvRg9GH0LjQuCDQt9Cw0L3Rj9GC0L7Qs9C+INC80LXRgdGC0LAg0LIg0LzQsNGB0YHQuNCy0LVcbiAgICAgKiBAcGFyYW0gb2JqZWN0U2V0dGluZ1xuICAgICAqIEBwYXJhbSBjb3VudFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHRyeU5ld0dlbmVyYXRlKG9iamVjdFNldHRpbmcsIGNvdW50KSB7XG5cbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDRjdGC0L7QvNGDINC60L7Qu9C40YfQtdCy0YHRgtCy0YNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vINGB0L7Qt9C00LDQtNC40Lwg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LTQu9GPINC/0YDQvtGB0YLQsNCy0LvQtdC90LjRj1xuICAgICAgICAgICAgbGV0IG1hcFJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21hcFJvd0NvbFJlY3Vyc2l2ZTogJywgbWFwUm93Q29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG9iamVjdFNldHRpbmcub2JqSUQsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbWFwUm93Q29sLnJvdyxcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG1hcFJvd0NvbC5jb2xcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbGV0IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBFbnRpdHkodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPSB1bml0O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSAnY293cycgfHwgb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9PYmplY3RzT25NYXAodW5pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRTZXR0aW5nID0ge1xuICAgICAgICAgICAgICAgICAgICBvYmpJRDogb2JqZWN0U2V0dGluZy5vYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cnlOZXdHZW5lcmF0ZSh1bml0U2V0dGluZywgY291bnQgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvRjNC90YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCwINC+0YHQvdC+0LLQtSDQutC+0Lst0LLQviDRgdGC0YDQvtC6INC4INC60L7Qu9C+0L3QvtC6XG4gICAgICogQHJldHVybnMge3tyb3c6ICosIGNvbDogKn19XG4gICAgICovXG4gICAgZ2V0UmFuZG9tUm93Q29sQ29vcmQoKSB7XG4gICAgICAgIGxldCBjb3VudFJvdyA9IHRoaXMucm93LFxuICAgICAgICAgICAgY291bnRDb2wgPSB0aGlzLmNvbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93OiB0b29scy5yYW5kb21JbnRlZ2VyKDAsIGNvdW50Um93KSxcbiAgICAgICAgICAgIGNvbDogdG9vbHMucmFuZG9tSW50ZWdlcigwLCBjb3VudENvbClcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjaGVja1JvdXRlICgpIHtcblxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICB9XG4gICAgXG4gICAgZ2V0UmFuZG9tUm93Q29sQmFzZWRPblVuaXQoY2VsbCwgc3RlcHMpIHtcbiAgICAgICAgbGV0IGlzc2V0Um91dGUgPSB0aGlzLnRyeVJvdXRlKHN0ZXBzKTtcblxuXG5cblxuICAgICAgICAvLyBsZXQgcm93TWluID0gKChjZWxsLnBvc2l0aW9uUm93IC0gMSkgPj0gMCkgPyAoY2VsbC5wb3NpdGlvblJvdyAtIDEpIDogMDtcbiAgICAgICAgLy8gbGV0IHJvd01heCA9ICgoY2VsbC5wb3NpdGlvblJvdyArIDEpIDw9IHRoaXMucm93KSA/IChjZWxsLnBvc2l0aW9uUm93ICsgMSkgOiB0aGlzLnJvdztcblxuICAgICAgICAvLyBsZXQgY29sTWluID0gKChjZWxsLnBvc2l0aW9uQ29sIC0gMSkgPj0gMCkgPyAoY2VsbC5wb3NpdGlvblJvdyAtIDEpIDogMDtcbiAgICAgICAgLy8gbGV0IGNvbE1heCA9ICgoY2VsbC5wb3NpdGlvbkNvbCArIDEpIDw9IHRoaXMuY29sKSA/IChjZWxsLnBvc2l0aW9uQ29sICsgMSkgOiB0aGlzLmNvbDtcblxuICAgICAgICAvLyBsZXQgbmV3UG9zaXRpb25Sb3csXG4gICAgICAgIC8vICAgICBuZXdQb3NpdGlvbkNvbDtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gbmV3UG9zaXRpb25Sb3cgPSB0aGlzLmdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKHJvd01pbiwgcm93TWF4LCBjZWxsLnBvc2l0aW9uUm93KTtcbiAgICAgICAgLy8gbmV3UG9zaXRpb25Db2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKGNvbE1pbiwgY29sTWF4LCBjZWxsLnBvc2l0aW9uUm93KTtcblxuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAvLyAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sXG4gICAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUobWluQ2VsbCwgbWF4Q2VsbCwgZXhjbHVkZVZhbHVlKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICB2YWx1ZSA9IHRvb2xzLnJhbmRvbUludGVnZXIobWluQ2VsbCwgbWF4Q2VsbCk7XG5cbiAgICAgICAgd2hpbGUgKHZhbHVlID09IGV4Y2x1ZGVWYWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b29scy5yYW5kb21JbnRlZ2VyKG1pbkNlbGwsIG1heENlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cblxuICAgIGdldE5ld1Jvd0NvbFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRk9SIE5FVyBVTklUIEdFTkVSRVRFIE5FVyBQT1NJVElPTjogVFJZW1wiICsgKGkrKykgKyBcIl0gLT4gW1IoXCIgKyBuZXdQb3NpdGlvblJvd0NvbC5yb3cgKyBcIik6QyhcIiArIG5ld1Bvc2l0aW9uUm93Q29sLmNvbCArIFwiKV1cIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1hcERhdGFbbmV3UG9zaXRpb25Sb3dDb2wucm93XVtuZXdQb3NpdGlvblJvd0NvbC5jb2xdLmNsYXNzTmFtZSA9PT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQb3NpdGlvblJvd0NvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNC00LjQvCDRj9GH0LXQudC60YNcbiAgICAgKiBAcGFyYW0gb2xkVW5pdFxuICAgICAqIEBwYXJhbSBuZXdVbml0XG4gICAgICovXG4gICAgc2V0Q2VsbChvbGRVbml0LCBuZXdVbml0KSB7XG5cbiAgICAgICAgdGhpcy5tYXBEYXRhW29sZFVuaXQucG9zaXRpb25Sb3ddW29sZFVuaXQucG9zaXRpb25Db2xdID0gbmV3VW5pdDtcblxuICAgICAgICB0aGlzLm1hcERhdGFbb2xkVW5pdC5wb3NpdGlvblJvd11bb2xkVW5pdC5wb3NpdGlvbkNvbF0udXBkYXRlUm93Q29sKG9sZFVuaXQpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGP0YfQtdC50LrRg1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblJvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbkNvbFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldENlbGwocG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcERhdGFbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sXTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICBhZGRUb09iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwLnB1c2godW5pdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIHJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwLnNwbGljZShpbmRleE9iamVjdCwgMSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBEaWVPYmplY3RzT25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDRgdC80LXRgNGC0LggdW5pdHNcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIHJlbW92ZVVuaXRGcm9tRGllT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwLnNwbGljZShpbmRleE9iamVjdCwgMSk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7QsdC90L7QstC40Lwg0LTQu9GPIFVuaXQg0LXQs9C+IFJDKFJvdy9Db2wpINCyINC80LDRgdGB0LjQstC1IE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgdXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKHVuaXQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvQuNC8INC+0LHRitC10LrRglxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAga2lsbFVuaXQodW5pdCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICB0aGlzLnJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8INC80L7Qs9C40LvQutGDXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkZWF0aFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGRpZVVuaXRUeXBlOiB1bml0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGRpZVVuaXRJZDogdW5pdC5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICB0aGlzLnNldENlbGwodW5pdCwgZGllVW5pdCk7XG5cbiAgICAgICAgdGhpcy5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRpZU9iamVjdHNPbk1hcCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDQu9C4INC10YnQtSDQvtCx0YrQtdC60YLRiyDQsiDQvNCw0YHRgdC40LLQtSDQtNC70Y8g0YHRg9GJ0LXQstGB0YLQstC+0LLQsNC90LjRjyDQuNCz0YDRi1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgaXNzZXRPYmplY3RPbk1hcCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm9iamVjdHNPbk1hcC5sZW5ndGggPiAwID8gMSA6IDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQntGC0YTQuNC70YzRgtGA0YPQtdC8INGP0YfQtdC50LrQuCDQv9C+INGC0LjQv9GDIHVuaXRUeXBlXG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxcbiAgICAgKiBAcGFyYW0gdW5pdFR5cGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCB1bml0VHlwZSkge1xuXG4gICAgICAgIGxldCBhcnIgPSBbXTtcblxuICAgICAgICAvLyDQn9C10YDQtdCx0LXRgNC10Lwg0L/QvtC70YPRh9C10L3QvdGL0Lkg0LzQsNGB0YHQuNCyINGBINGP0YfQtdC50LrQsNC80Lgg0L3QsNGF0L7QtNGP0YnQuNC80LjRgdGPINGA0Y/QtNC+0LxcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZWlnaGJvcmluZ3NDZWxsLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vINCv0YfQtdC50LrQsCDQvdC1INCy0YvRhdC+0LTQuNGCINC30LAg0LPRgNCw0L3QuNGG0YtcbiAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmV4aXN0KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5jb250ZW50LmNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudC5jbGFzc05hbWUgPT0gdW5pdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0LjQvdC00LXQutGBINC60L7RgNC+0LLRiyDQv9GA0Lgg0LXQtSDRgdGK0LXQtNCw0L3QuNC4XG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEluZGV4RnJvbU9iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLm9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Sb3cgPT0gdW5pdC5wb3NpdGlvblJvd1xuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uQ29sID09IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleE9iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuLy9NQVAgREVBVEggTUFOQUdFXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0LjQvdC00LXQutGBINC60L7RgNC+0LLRiyDQv9GA0Lgg0LXQtSDRgdGK0LXQtNCw0L3QuNC4XG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLmRpZU9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Sb3cgPT0gdW5pdC5wb3NpdGlvblJvd1xuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uQ29sID09IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleE9iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZERpZVVuaXRUb0RpZUFycmF5KHVuaXQpIHtcbiAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXAucHVzaCh1bml0KTtcbiAgICB9XG5cbi8vICAgIEFMR09SSVRITVMgRklORCBORUlHQk9SSU5HUyBDRUxMXG5cbiAgICBnZXRPbmVMZXZlbENlbGxzSW5mbyAodW5pdCkge1xuICAgICAgICByZXR1cm4gb25lTGV2ZWxDZWxsc0luZm8uZ2V0KHRoaXMsIHVuaXQpO1xuICAgIH1cbiAgICBnZXRNdWx0aUxldmVsQ2VsbHNJbmZvICh1bml0LCBpbmRleE9iamVjdCwgc3RlcHMpIHtcbiAgICAgICAgcmV0dXJuIG11bHRpTGV2ZWxDZWxsc0luZm8uZ2V0KHRoaXMsIHVuaXQsIGluZGV4T2JqZWN0LCBzdGVwcyk7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgTWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5cbi8qKlxuICog0JjQs9GA0L7QstCw0Y8g0YHRhtC10L3QsFxuICogQHBhcmFtIHNldHRpbmdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1nYW1lX19wbGFpbicpO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoc2V0dGluZyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC60LDRgNGC0YMg0Lgg0LfQsNC/0L7Qu9C90LjQvCDQtdC1INC+0LHRitC10LrRgtCw0LzQuFxuICAgICAqL1xuICAgIGJ1aWxkICgpIHtcblxuICAgICAgICBpZiAodGhpcy5tYXAuaW5pdCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2VuZXJhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsCDQt9Cw0L/QvtC70L3QtdC90L3QvtC5INC60LDRgNGC0YtcbiAgICAgKi9cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBsZXQgbWFwSFRNTCA9ICcnO1xuXG5cbiAgICAgICAgLy8g0J/QvtGB0YLRgNC+0LjQvCDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtVxuICAgICAgICBmb3IgKGxldCBwb3NpdGlvblJvdyA9IDA7IHBvc2l0aW9uUm93IDwgdGhpcy5tYXAucm93OyBwb3NpdGlvblJvdysrKSB7XG4gICAgICAgICAgICBtYXBIVE1MICs9IFwiPGRpdiBjbGFzcz0ncm93Jz5cIjtcbiAgICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uQ29sID0gMDsgcG9zaXRpb25Db2wgPCB0aGlzLm1hcC5jb2w7IHBvc2l0aW9uQ29sKyspIHtcblxuICAgICAgICAgICAgICAgIC8vIERFViBNT0RFXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxDb29yZGluYXRlID0gXCI8ZGl2IGNsYXNzPSdjZWxsQ29vcmRpbmF0ZSc+XCIgKyBwb3NpdGlvblJvdyArIFwiIDogXCIgKyBwb3NpdGlvbkNvbCArIFwiPC9kaXY+XCI7XG5cbiAgICAgICAgICAgICAgICBtYXBIVE1MICs9IFwiPGRpdiBjbGFzcz0nY2VsbCc+XCIgKyBjZWxsQ29vcmRpbmF0ZSArIFwiIFwiICsgdGhpcy5tYXAuZ2V0Q2VsbChwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpLnNob3coKSArIFwiPC9kaXY+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXBIVE1MICs9IFwiPC9kaXY+XCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjQvCDRgdC+0LHRgNCw0L3QvdGD0Y4gSFRNTCDQutCw0YDRgtGDINCyIERPTVxuICAgICAgICB0aGlzLnBsYWluLmlubmVySFRNTCA9IG1hcEhUTUw7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JTQtdC50YHRgtCy0LjRjyDQstGB0LXRhSDQvtCx0YrQtdC60YLQvtCyINC90LAg0LrQsNGA0YLQtVxuICAgICAqL1xuICAgIGFjdGlvbk9uTWFwICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXAub2JqZWN0c09uTWFwKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5tYXAub2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgdGhpcy5tYXAub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5hY3Rpb24odGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkaWVNYW5hZ2VyICgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5tYXAuZGllT2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0uYWN0aW9uKHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINC70Lgg0LXRidC1INC+0LHRitC10LrRgtGLINCyINC80LDRgdGB0LjQstC1INC00LvRjyDRgdGD0YnQtdCy0YHRgtCy0L7QstCw0L3QuNGPINC40LPRgNGLXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBpc3NldE9iamVjdE9uTWFwICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmlzc2V0T2JqZWN0T25NYXAoKTtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiXG4vLyBQUk9EXG4vKmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnYW1lQ29udGFpbmVySUQ6ICdiLWdhbWUnLFxuICAgIG1hcFNpemU6IHtcbiAgICAgICAgcm93OiA5LFxuICAgICAgICBjb2w6IDIzXG4gICAgfSxcbiAgICBtYXBPYmplY3RzOiB7XG4gICAgICAgIGdyYXNzOiB7XG4gICAgICAgICAgICBtaW46IDkwLFxuICAgICAgICAgICAgbWF4OiAxNzVcbiAgICAgICAgfSxcbiAgICAgICAgY293czoge1xuICAgICAgICAgICAgbWluOiAxNSxcbiAgICAgICAgICAgIG1heDogMjBcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogNTAwXG59OyovXG5cbi8vIERFVlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVDb250YWluZXJJRDogJ2ItZ2FtZScsXG4gICAgbWFwU2l6ZToge1xuICAgICAgICByb3c6IDYsXG4gICAgICAgIGNvbDogNlxuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA3LFxuICAgICAgICAgICAgbWF4OiAxM1xuICAgICAgICB9LFxuICAgICAgICBjb3dzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogMTUzMFxufTtcblxuIiwiLy8gQVVESU8gSU4gR0FNRVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNvdW5kcyB7XG4gICAgY29uc3RydWN0b3IoZmlsZSkge1xuICAgICAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKGZpbGUpOyAgIFxuICAgIH1cblxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICB9O1xuXG4gICAgLy8g0KTRg9C90LrRhtC40Y8gc3RvcCDQtNC70Y8gQXVkaW86XG4gICAgc3RvcCAoKSB7XG4gICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5jdXJyZW50VGltZSA9IDAuMDtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiLy8g0JLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3Ri9C1INGE0YPQvdC60YbQuNC4INC00LvRjyDQuNCz0YDRi1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQvtGJ0Y/QtdGCINGB0LvRg9GH0LDQudC90L7QtSDRh9C40YHQu9C+INCyINC00LjQsNC/0LDQt9C+0L3QtSBNaW4vTWF4XG4gICAgICogQHBhcmFtIG1pblxuICAgICAqIEBwYXJhbSBtYXhcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByYW5kb21JbnRlZ2VyOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgR3Jhc3NBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZ3Jhc3NBbGdvcml0aG0nO1xuaW1wb3J0IENvd3NBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vY293c0FsZ29yaXRobSc7XG5pbXBvcnQgVGlnZXJzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL3RpZ2Vyc0FsZ29yaXRobSc7XG5pbXBvcnQgR3JvdW5kQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2dyb3VuZEFsZ29yaXRobSc7XG5pbXBvcnQgR2FtZVNvdW5kcyBmcm9tICcuL3NvdW5kJztcblxuLyoqXG4gKiDQntGB0L3QvtCy0L3QvtC5INCf0YDQvtGC0L7RgtC40L8g0L7QsdGK0LXQutGC0LAg0L3QsCDQutCw0YDRgtC1XG4gKiBAcGFyYW0gY2xhc3NOYW1lXG4gKiBAcGFyYW0gaWRcbiAqIEBwYXJhbSBvYmpQb3NpdGlvblJvd1xuICogQHBhcmFtIG9ialBvc2l0aW9uQ29sXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuZm9vZFR5cGUgPSB0aGlzLmdldEZvb2RUeXBlKCk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmVuZW15ID0gKHBhcmFtLmNsYXNzTmFtZSA9PSAnY293cycgPyAndGlnZXJzJyA6IG51bGwpO1xuXG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgaXNFYXQ6IGZhbHNlLFxuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG51bGwsXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbnVsbCxcbiAgICAgICAgICAgIGluZGV4T2JqZWN0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zb3VuZEVhdCA9IG5ldyBHYW1lU291bmRzKFwiYXVkaW8vZWF0X1wiICsgdGhpcy5jbGFzc05hbWUgKyBcIi5tcDNcIik7XG5cbiAgICAgICAgLy8g0JLRi9Cx0LXRgNC40Lwg0LDQu9Cz0L7RgNC40YLQvCDQv9C+0LLQtdC00LXQvdC40Y8g0LTQu9GPINC+0LHRitC10LrRgtCwXG4gICAgICAgIHRoaXMuYWxnb3JpdG1zID0gdGhpcy5zZWxlY3RBbGdvcml0aG0ocGFyYW0uaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0YvQstC+0LQgSFRNTCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgbGV0IHVuaXRIZWFsdGggPSBcIlwiO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PSAnY293cycgfHwgdGhpcy5jbGFzc05hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc0hlYWx0aENvbG9yID0gdGhpcy5nZXRDbGFzc0hlYWx0aENvbG9yKHRoaXMuaGVhbHRoKTtcblxuICAgICAgICAgICAgdW5pdEhlYWx0aCArPSBcIjxkaXYgY2xhc3M9J2ItdW5pdF9faGVhbHRoJz48ZGl2IGNsYXNzPSdiLWhlYWx0X19pbmRpY2F0b3IgXCIgKyBjbGFzc0hlYWx0aENvbG9yICsgXCInIHN0eWxlPSd3aWR0aDogXCIgKyB0aGlzLmhlYWx0aCArIFwiJTsnPjwvZGl2PjwvZGl2PlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0nYi11bml0IFwiICsgdGhpcy5jbGFzc05hbWUgKyBcIiBzdGFuZF9zdGlsbCc+XCIgKyB1bml0SGVhbHRoICsgXCI8L2Rpdj5cIjtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRhtCy0LXRgijQutC70LDRgdGBKSDQttC40LfQvdC4IHVuaXRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldENsYXNzSGVhbHRoQ29sb3IodmFsdWUpIHtcblxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDkwICYmIHBhcnNlSW50KHZhbHVlKSA8PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWdvb2RcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDc1ICYmIHBhcnNlSW50KHZhbHVlKSA8PSA5MCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYWJvdmUtYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gNTAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDc1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSAyNSAmJiBwYXJzZUludCh2YWx1ZSkgPD0gNTApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWJlbG93LWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDI1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1sb3dcIjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KDQsNC30L3Ri9C1INC00LXQudGB0YLQstC40Y8g0L7QsdGK0LXQutGC0LBcbiAgICAgKi9cbiAgICBhY3Rpb24obWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLmFsZ29yaXRtcy5hY3QodGhpcywgbWFwLCBpbmRleE9iamVjdCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0YbQtdC70Ywg0YDQsNC00Lgg0LrQvtGC0L7RgNC+0Lkg0LbQuNCy0LXRgiBVbml0IDopXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0Rm9vZFR5cGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nvd3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZ3Jhc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGlnZXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nvd3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCS0LXRgNC90LXRgiDQtNC70Y8g0L7QsdGK0LXQutGC0LAg0LXQs9C+INCw0LvQs9C+0YDQuNGC0Lwg0L/QvtCy0LXQtNC10L3QuNGPINCyINC40LPRgNC1XG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc2VsZWN0QWxnb3JpdGhtKGlkKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAwIC0gZ3Jhc3NcbiAgICAgICAgICogMSAtIGNvd3NcbiAgICAgICAgICogMiAtIHRpZ2Vyc1xuICAgICAgICAgKiAzIC0gZ3JvdW5kXG4gICAgICAgICAqIDQgLSBkZWF0aFxuICAgICAgICAgKi9cblxuICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KGlkKSkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmFzc0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ293c0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVGlnZXJzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91bmRBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cblxuLy8g0KHRitC10LTQtdC9XG4gICAgaXNFYXRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0O1xuICAgIH07XG5cbi8vINCh0YrQtdC00LXQvVxuICAgIGVhdGVuKHVuaXQsIGZvb2RJbmRleCkge1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Db2wgPSB1bml0LnBvc2l0aW9uQ29sO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCA9IGZvb2RJbmRleDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uY2xhc3NOYW1lID0gdW5pdC5jbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlkID0gdW5pdC5pZDtcbiAgICB9O1xuXG4vLyBSRVNFVCDQodGK0LXQtNC10L1cbiAgICByZXNldEVhdGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgYWRkSGVhbHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoICs9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgc3ViSGVhbHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoIC09IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9O1xuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSJdLCJzb3VyY2VSb290IjoiIn0=