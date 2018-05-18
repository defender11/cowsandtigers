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

var _constant = __webpack_require__(/*! ./../constant */ "./constant.js");

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Route
exports.default = {
    mapRow: 0,
    mapCol: 0,
    LOCAL_DEBUG: false,

    get: function get(map, unit, indexObject, steps) {

        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
            console.log(map.mapData);
            console.log(unit);
        }
        // console.log(unit);

        var neighboringsCellInformation = [];

        this.mapRow = map.row;
        this.mapCol = map.col;

        // получим инфо о четырех сторонах на дистанции полученной от Unit
        for (var step = 1; step < steps; step++) {
            if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
                console.log('|- step: ' + step);
            }

            // console.log('|- step: ' + step);

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

        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
            console.log("|-- unitSides", unitSides);
        }

        // Нужно получить ячейки на основе найденых сторон!!!

        // Пройдемся по 4-ем сторонам и получим содержимое ячеек, задействуем массив с картой игры
        for (var side = 0; side < unitSides.length; side++) {

            if (unitSides[side].isset) {

                console.log('side', side);
                console.log('side_name', unitSides[side].name);

                if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
                    console.log("|--- START side: " + unitSides[side].name);
                    console.log("|--- side: ", unitSides[side]);
                }
                console.log("|--- side: ", unitSides[side]);

                var param = {
                    unitSide: unitSides[side],
                    unitPositionRow: unit.positionRow,
                    unitPositionCol: unit.positionCol,
                    map: map
                };
                console.log('param: ', param);

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

                if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
                    console.log("|--- END side: " + unitSides[side].name);
                }
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

        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
            console.log('|- getUnitAnglePoints: ', step, positionRow, positionCol);
        }

        // GET leftTop
        leftTop = this.getLeftTopAnglePoint(step, positionRow, positionCol);
        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
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
        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
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
        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
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
        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
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

            if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
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

            if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
                console.log(stp <= step);
            }

            var newAngel = this.checkNeighboringsCellByDirections(stp, newPositionRow, newPositionCol);

            if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
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
            if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
                console.log("directionLeft: true;");
            }
            return directionLeft;
        }
        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
            console.log("directionLeft: false;");
        }

        var directionTop = this.checkCellByDirectionTop(stp, newPositionRow, newPositionCol);
        if (directionTop.isFind) {
            if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
                console.log("directionTop: true;");
            }
            return directionTop;
        }
        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
            console.log("directionTop: false;");
        }

        var directionRight = this.checkCellByDirectionRight(stp, newPositionRow, newPositionCol);
        if (directionRight.isFind) {
            if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
                console.log("directionRight: true;");
            }
            return directionRight;
        }
        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
            console.log("directionRight: false;");
        }

        var directionBottom = this.checkCellByDirectionBottom(stp, newPositionRow, newPositionCol);
        if (directionBottom.isFind) {
            if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
                console.log("directionBottom: true;");
            }
            return directionBottom;
        }
        if (this.LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
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
            if (LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log("TIGER: ", unit);
            }

            // Воозвратить объект с соседними ячейками
            // let neighboringsCellInformation = map.getMultiLevelCellsInfo(unit, indexObject, this.distanceView);
            var neighboringsCellInformation = map.getOneLevelCellsInfo(unit);

            if (LOCAL_DEBUG || constant.GLOBAL_DEBUG) {
                console.log("NEIGHBORINGSCELLINFORMATION: ", neighboringsCellInformation);
            }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vYWxnb3JpdGhtRmluZE11bHRpTGV2ZWxOZWlnaGJvcmluZ3NDZWxsSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vYWxnb3JpdGhtRmluZE9uZUxldmVsTmVpZ2hib3JpbmdzQ2VsbEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2Nvd3NBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2RlYXRoQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncmFzc0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZ3JvdW5kQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbWFwLmpzIiwid2VicGFjazovLy8uL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vdW5pdC5qcyJdLCJuYW1lcyI6WyJBbGdvcml0aG0iLCJhZGRIZWFsdGhWYWx1ZSIsInN1YkhlYWx0aFZhbHVlIiwidW5pdCIsIm1hcCIsImluZGV4T2JqZWN0IiwibmVpZ2hib3JpbmdzQ2VsbCIsIm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCIsIm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyIsIm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kIiwiZ2V0T25lTGV2ZWxDZWxsc0luZm8iLCJmaWx0ZXJDZWxsQnlUeXBlIiwiZm9vZFR5cGUiLCJlbmVteSIsIm1hcFJvdyIsIm1hcENvbCIsIkxPQ0FMX0RFQlVHIiwiZ2V0Iiwic3RlcHMiLCJHTE9CQUxfREVCVUciLCJjb25zb2xlIiwibG9nIiwibWFwRGF0YSIsIm5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiIsInJvdyIsImNvbCIsInN0ZXAiLCJnZXROZWlnaGJvcmluZ3NDZWxsIiwibGVuZ3RoIiwicGFyYW0iLCJjZWxsc0luZm8iLCJwdXNoIiwibmVpZ2hib3JpbmdzQ2VsbEluZm8iLCJ1bml0U2lkZXMiLCJnZXRVbml0QW5nbGVQb2ludHMiLCJwb3NpdGlvblJvdyIsInBvc2l0aW9uQ29sIiwic2lkZSIsImlzc2V0IiwibmFtZSIsInVuaXRTaWRlIiwidW5pdFBvc2l0aW9uUm93IiwidW5pdFBvc2l0aW9uQ29sIiwicGFyc2VJbnQiLCJpZCIsImxlZnRUb3BfVE9fcmlnaHRUb3AiLCJnZXRUb3BTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInVuZGVmaW5lZCIsInJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tIiwiZ2V0UmlnaHR0U2lkZU5laWdoYm9yaW5nc0NlbGwiLCJyaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tIiwiZ2V0Qm90dG9tU2lkZU5laWdoYm9yaW5nc0NlbGwiLCJsZWZ0Qm90dG9tX1RPX2xlZnRUb3AiLCJnZXRMZWZ0U2lkZU5laWdoYm9yaW5nc0NlbGwiLCJzdGFydENlbGxSb3ciLCJhbmdsZVN0YXJ0IiwiZW5kQ2VsbENvbCIsImFuZ2xlRW5kIiwic3RhcnRDZWxsQ29sIiwidW5pdFBvc2l0aW9uQ2VsbCIsInNlbGVjdFBvc2l0aW9uQ2VsbCIsImdldENlbGwiLCJlbmRDZWxsUm93IiwidW5pdEFuZ2xlcyIsImxlZnRUb3AiLCJyaWdodFRvcCIsInJpZ2h0Qm90dG9tIiwibGVmdEJvdHRvbSIsImdldExlZnRUb3BBbmdsZVBvaW50IiwidG9SaWdodFRvcCIsImdldFJpZ2h0VG9wQW5nbGVQb2ludCIsInRvUmlnaHRCb3R0b20iLCJnZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQiLCJ0b0xlZnRCb3R0b20iLCJnZXRMZWZ0Qm90dG9tQW5nbGVQb2ludCIsInRvTGVmdFRvcCIsIm5ld1Bvc2l0aW9uUm93IiwibmV3UG9zaXRpb25Db2wiLCJhbmdsZUlzc2V0IiwiaXNVbml0T3V0T2ZCb3JkZXIiLCJuZXdQb3NpdGlvbiIsImZpbmROZXdBbmdlbCIsImlzRmluZCIsInN0cCIsIm5ld0FuZ2VsIiwiY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zIiwiZGlyZWN0aW9uTGVmdCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdCIsImRpcmVjdGlvblRvcCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wIiwiZGlyZWN0aW9uUmlnaHQiLCJjaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0IiwiZGlyZWN0aW9uQm90dG9tIiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b20iLCJ0cnlOZXdQb3NpdGlvbkNvbCIsImZpbmQiLCJ0cnlOZXdQb3NpdGlvblJvdyIsImNlbGxzIiwiYm9yZGVyIiwidG9wIiwidG9wUmlnaHQiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJkaXJlY3Rpb24iLCJleGlzdCIsImNvbnRlbnQiLCJDb3dzQWxnb3JpdGhtIiwiZGlzdGFuY2VWaWV3IiwiY2VsbFJhbmRvbVJvd0NvbCIsInJhbmRvbUludGVnZXIiLCJvbGRVbml0IiwidW5pdFBhcmFtIiwiY2xhc3NOYW1lIiwib2JqUG9zaXRpb25Sb3ciLCJvYmpQb3NpdGlvbkNvbCIsInNldENlbGwiLCJ1cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAiLCJzdWJIZWFsdGgiLCJkaWVVbml0VHlwZSIsImRpZVVuaXRJZCIsImRpZVVuaXQiLCJhZGREaWVVbml0VG9EaWVBcnJheSIsImhlYWx0aCIsImFkZEhlYWx0aCIsIkRlYXRoQWxnb3JpdGhtIiwiZGVhdGhVbml0IiwidW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0IiwidW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWwiLCJnZXROZXdSb3dDb2xQb3NpdGlvbiIsIm5ld1VuaXQiLCJkaWVPYmplY3RzT25NYXBJbmRleCIsImdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCIsImVudGl0eVBhcmFtIiwiYWRkVG9PYmplY3RzT25NYXAiLCJyZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcCIsIkdyYXNzQWxnb3JpdGhtIiwiR3JvdW5kQWxnb3JpdGhtIiwiVGlnZXJzQWxnb3JpdGhtIiwiY29uc3RhbnQiLCJmb29kSW5kZXgiLCJnZXRJbmRleEZyb21PYmplY3RzT25NYXAiLCJlYXRlbiIsInJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwIiwiaXNFYXRlbiIsImZvb2RJbmZvcm1hdGlvbiIsInNldEluZGV4T2JqZWN0IiwicmVzZXRFYXRlbiIsIkRpZVVuaXQiLCJhbGdvcml0bXMiLCJwcm90b3R5cGUiLCJhY3Rpb24iLCJhY3QiLCJ1cGRhdGVSb3dDb2wiLCJFbnRpdHkiLCJHYW1lIiwic2V0dGluZyIsImRldk1vZGUiLCJ0aW1lUmVuZGVyIiwiYnRuU3RhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnRuUGF1c2UiLCJzY2VuZSIsImJ1aWxkIiwic2hvd05vdGlmeSIsInNlbGYiLCJsb29wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwiY2FsbGJhY2siLCJpc3NldE9iamVjdE9uTWFwIiwiZGllTWFuYWdlciIsImFjdGlvbk9uTWFwIiwicmVuZGVyIiwiZ2FtZU92ZXIiLCJjbGVhckludGVydmFsIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCIkIiwiaW5pdE5vdGlmeSIsImdhbWUiLCJydW4iLCJzaG93IiwibXNnIiwic2hvd0RlYnVnIiwib2JqZWN0cyIsImJ1aWxkRGVidWdTdHJpbmciLCJpIiwib2JqZWN0IiwibE5vdGlmeSIsImFuaW1hdGlvbiIsInBvc2l0aW9uIiwidGV4dCIsInN0YXR1cyIsIk1hcCIsIm1hcE9iamVjdHMiLCJvYmplY3RzT25NYXAiLCJBcnJheSIsImRpZU9iamVjdHNPbk1hcCIsIm1hcFNpemUiLCJvYmpJRCIsIm9iamVjdE5hbWUiLCJvYmpNaW4iLCJtaW4iLCJvYmpNYXgiLCJtYXgiLCJvYmpDb3VudE9uTWFwIiwibWFwUm93Q29sIiwiZ2V0UmFuZG9tUm93Q29sQ29vcmQiLCJ1bml0U2V0dGluZyIsInRyeU5ld0dlbmVyYXRlIiwib2JqZWN0U2V0dGluZyIsImNvdW50IiwiY291bnRSb3ciLCJjb3VudENvbCIsImRhdGEiLCJnZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJjZWxsIiwiaXNzZXRSb3V0ZSIsInRyeVJvdXRlIiwibWluQ2VsbCIsIm1heENlbGwiLCJleGNsdWRlVmFsdWUiLCJ2YWx1ZSIsIm5ld1Bvc2l0aW9uUm93Q29sIiwic3BsaWNlIiwidW5pdFR5cGUiLCJhcnIiLCJTY2VuZSIsInBsYWluIiwiaW5pdCIsImdlbmVyYXRlIiwibWFwSFRNTCIsImNlbGxDb29yZGluYXRlIiwiaW5uZXJIVE1MIiwiZ2FtZUNvbnRhaW5lcklEIiwiZ3Jhc3MiLCJjb3dzIiwidGlnZXJzIiwiZ3JvdW5kIiwiR2FtZVNvdW5kcyIsImZpbGUiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJVbml0IiwiZ2V0Rm9vZFR5cGUiLCJpc0VhdCIsInNvdW5kRWF0Iiwic2VsZWN0QWxnb3JpdGhtIiwidW5pdEhlYWx0aCIsImNsYXNzSGVhbHRoQ29sb3IiLCJnZXRDbGFzc0hlYWx0aENvbG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FB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QSxpQkFBSzlHLGVBQUwsQ0FBcUI5RyxXQUFyQixHQUFtQ2hDLEtBQUtnQyxXQUF4QztBQUNBLGlCQUFLOEcsZUFBTCxDQUFxQjdHLFdBQXJCLEdBQW1DakMsS0FBS2lDLFdBQXhDO0FBQ0EsaUJBQUs2RyxlQUFMLENBQXFCNUksV0FBckIsR0FBbUN1SSxTQUFuQztBQUNBLGlCQUFLSyxlQUFMLENBQXFCaEMsU0FBckIsR0FBaUM5RyxLQUFLOEcsU0FBdEM7QUFDQSxpQkFBS2dDLGVBQUwsQ0FBcUJyRyxFQUFyQixHQUEwQnpDLEtBQUt5QyxFQUEvQjtBQUNIOzs7OztBQUVMO3FDQUNpQjtBQUNULG1CQUFPLEtBQUtxRyxlQUFMLENBQXFCOEcsS0FBckIsR0FBNkIsS0FBcEM7QUFDQSxpQkFBSzlHLGVBQUwsQ0FBcUI5RyxXQUFyQixHQUFtQyxJQUFuQztBQUNBLGlCQUFLOEcsZUFBTCxDQUFxQjdHLFdBQXJCLEdBQW1DLElBQW5DO0FBQ0EsaUJBQUs2RyxlQUFMLENBQXFCNUksV0FBckIsR0FBbUMsSUFBbkM7QUFDSDs7O2tDQUVTNk4sSyxFQUFPO0FBQ2IsaUJBQUt2RyxNQUFMLElBQWVoRixTQUFTdUwsS0FBVCxDQUFmO0FBQ0g7OztrQ0FFU0EsSyxFQUFPO0FBQ2IsaUJBQUt2RyxNQUFMLElBQWVoRixTQUFTdUwsS0FBVCxDQUFmO0FBQ0g7Ozs7OztBQUlMOzs7a0JBM0pxQjJCLEkiLCJmaWxlIjoiY293c2FuZHRpZ2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHRvb2xzIGZyb20gXCIuLi90b29sc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkZEhlYWx0aFZhbHVlID0gNTtcbiAgICAgICAgdGhpcy5zdWJIZWFsdGhWYWx1ZSA9IDM7XG4gICAgfVxuXG4gICAgZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kO1xuXG4gICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0YHQvtGB0LXQtNC90LjQuCDQutC70LXRgtC60LhcbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbCA9IG1hcC5nZXRPbmVMZXZlbENlbGxzSW5mbyh1bml0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0LXQtNGDXG4gICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICovXG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXQuZm9vZFR5cGUpO1xuXG4gICAgICAgIGlmICh1bml0LmVuZW15ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBUT0RPINGDINGC0LjQs9GA0LAg0L3QtdGCINCy0YDQsNCz0L7QslxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDQstGA0LDQs9C+0LIo0YLQuNCz0YDQvtCyKVxuICAgICAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgICAgICogKi9cbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXQuZW5lbXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINGB0LLQvtCx0L7QtNC90YvQtSDRj9GH0LXQudC60Lgg0LrRg9C00LAg0LzQvtC20L3QviDQv9C10YDQtdC80LXRgdGC0LjRgtGM0YHRj1xuICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAqL1xuICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIFwiZ3JvdW5kXCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsOiBuZWlnaGJvcmluZ3NDZWxsLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXM6IG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBjb25zdGFudCBmcm9tICcuLy4uL2NvbnN0YW50J1xuXG4vLyBSb3V0ZVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1hcFJvdzogMCxcbiAgICBtYXBDb2w6IDAsXG4gICAgTE9DQUxfREVCVUc6IGZhbHNlLFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAobWFwLCB1bml0LCBpbmRleE9iamVjdCwgc3RlcHMpIHtcblxuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hcC5tYXBEYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVuaXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVuaXQpO1xuXG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24gPSBbXTtcblxuICAgICAgICB0aGlzLm1hcFJvdyA9IG1hcC5yb3c7XG4gICAgICAgIHRoaXMubWFwQ29sID0gbWFwLmNvbDtcblxuICAgICAgICAvLyDQv9C+0LvRg9GH0LjQvCDQuNC90YTQviDQviDRh9C10YLRi9GA0LXRhSDRgdGC0L7RgNC+0L3QsNGFINC90LAg0LTQuNGB0YLQsNC90YbQuNC4INC/0L7Qu9GD0YfQtdC90L3QvtC5INC+0YIgVW5pdFxuICAgICAgICBmb3IgKGxldCBzdGVwID0gMTsgc3RlcCA8IHN0ZXBzOyBzdGVwKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LSBzdGVwOiAnICsgc3RlcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd8LSBzdGVwOiAnICsgc3RlcCk7XG5cbiAgICAgICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsID0gdGhpcy5nZXROZWlnaGJvcmluZ3NDZWxsKHN0ZXAsIHVuaXQsIG1hcCk7XG5cbiAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RgNCw0LLQuNC70YzQvdC+INC90LDQt9Cy0LDRgtGMXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzSW5mbzogbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vINCS0L7RgiDQv9GA0Y/QvCDQt9C00LXRgdGMINC/0L7Qu9GD0YfQuNC8XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uLnB1c2gocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbjtcbiAgICB9LFxuXG4gICAgLy8g0J/QvtC70YPRh9C40Lwg0LjQvdGE0L4g0YHQvtGB0LXQtNC90LjRhSDRj9GH0LXQtdC6INC90LAg0LrQsNC20LTQvtC5INC40YLRgtC10YDQsNGG0LjQuFxuICAgIGdldE5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChzdGVwLCB1bml0LCBtYXApIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgIC8vICAgICB1bml0LnBvc2l0aW9uUm93ID0gMDtcbiAgICAgICAgLy8gICAgIHVuaXQucG9zaXRpb25Db2wgPSAyO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8g0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YPQs9C70L7QsiBVbml0XG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAgICBsZXQgdW5pdFNpZGVzID0gdGhpcy5nZXRVbml0QW5nbGVQb2ludHMoc3RlcCwgdW5pdC5wb3NpdGlvblJvdywgdW5pdC5wb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLSB1bml0U2lkZXNcIiwgdW5pdFNpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCd0YPQttC90L4g0L/QvtC70YPRh9C40YLRjCDRj9GH0LXQudC60Lgg0L3QsCDQvtGB0L3QvtCy0LUg0L3QsNC50LTQtdC90YvRhSDRgdGC0L7RgNC+0L0hISFcblxuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviA0LdC10Lwg0YHRgtC+0YDQvtC90LDQvCDQuCDQv9C+0LvRg9GH0LjQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDRj9GH0LXQtdC6LCDQt9Cw0LTQtdC50YHRgtCy0YPQtdC8INC80LDRgdGB0LjQsiDRgSDQutCw0YDRgtC+0Lkg0LjQs9GA0YtcbiAgICAgICAgZm9yIChsZXQgc2lkZSA9IDA7IHNpZGUgPCB1bml0U2lkZXMubGVuZ3RoOyBzaWRlKyspIHtcblxuICAgICAgICAgICAgaWYgKHVuaXRTaWRlc1tzaWRlXS5pc3NldCkge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpZGUnLCBzaWRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2lkZV9uYW1lJywgdW5pdFNpZGVzW3NpZGVdLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tLSBTVEFSVCBzaWRlOiBcIiArIHVuaXRTaWRlc1tzaWRlXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0tIHNpZGU6IFwiLCB1bml0U2lkZXNbc2lkZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gc2lkZTogXCIsIHVuaXRTaWRlc1tzaWRlXSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXRTaWRlOiB1bml0U2lkZXNbc2lkZV0sXG4gICAgICAgICAgICAgICAgICAgIHVuaXRQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgdW5pdFBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtOiAnLCBwYXJhbSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHVuaXRTaWRlc1tzaWRlXS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdFRvcF9UT19yaWdodFRvcFxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdFRvcF9UT19yaWdodFRvcCA9IHRoaXMuZ2V0VG9wU2lkZU5laWdoYm9yaW5nc0NlbGwocGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnRUb3BfVE9fcmlnaHRUb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gobGVmdFRvcF9UT19yaWdodFRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHRUb3BfVE9fcmlnaHRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHRUb3BfVE9fcmlnaHRCb3R0b20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocmlnaHRUb3BfVE9fcmlnaHRCb3R0b20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20gPSB0aGlzLmdldEJvdHRvbVNpZGVOZWlnaGJvcmluZ3NDZWxsKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdEJvdHRvbV9UT19sZWZ0VG9wXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0Qm90dG9tX1RPX2xlZnRUb3AgPSB0aGlzLmdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdEJvdHRvbV9UT19sZWZ0VG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKGxlZnRCb3R0b21fVE9fbGVmdFRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gRU5EIHNpZGU6IFwiICsgdW5pdFNpZGVzW3NpZGVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuXG4gICAgLy8gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qINCf0L7Qu9GD0YfQuNC8INGB0L7QtNC10YDQttC40LzQvtC1INGP0YfQtdC10Log0L/QviDRgdGC0L7RgNC+0L3QsNC8ICovXG4gICAgZ2V0VG9wU2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcbiAgICAgICAgbGV0IGVuZENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHBhcmFtLnVuaXRQb3NpdGlvblJvdyArICcnICsgcGFyYW0udW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RQb3NpdGlvbkNlbGwgPSBwYXJzZUludChzdGFydENlbGxSb3cgKyAnJyArIHN0YXJ0Q2VsbENvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UG9zaXRpb25DZWxsICE9PSBzZWxlY3RQb3NpdGlvbkNlbGwpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydENlbGxDb2wrKztcbiAgICAgICAgfSB3aGlsZSAoc3RhcnRDZWxsQ29sIDwgZW5kQ2VsbENvbCk7XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0UmlnaHR0U2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvbkNvbDtcbiAgICAgICAgbGV0IGVuZENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvblJvdztcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHBhcmFtLnVuaXRQb3NpdGlvblJvdyArICcnICsgcGFyYW0udW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RQb3NpdGlvbkNlbGwgPSBwYXJzZUludChzdGFydENlbGxSb3cgKyAnJyArIHN0YXJ0Q2VsbENvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UG9zaXRpb25DZWxsICE9PSBzZWxlY3RQb3NpdGlvbkNlbGwpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydENlbGxSb3crKztcbiAgICAgICAgfSB3aGlsZSAoc3RhcnRDZWxsUm93IDwgZW5kQ2VsbFJvdyk7XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0Qm90dG9tU2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcbiAgICAgICAgbGV0IGVuZENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHBhcmFtLnVuaXRQb3NpdGlvblJvdyArICcnICsgcGFyYW0udW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RQb3NpdGlvbkNlbGwgPSBwYXJzZUludChzdGFydENlbGxSb3cgKyAnJyArIHN0YXJ0Q2VsbENvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UG9zaXRpb25DZWxsICE9PSBzZWxlY3RQb3NpdGlvbkNlbGwpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydENlbGxDb2wtLTtcbiAgICAgICAgfSB3aGlsZSAoc3RhcnRDZWxsQ29sID4gZW5kQ2VsbENvbCk7XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0TGVmdFNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG4gICAgICAgIGxldCBlbmRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsUm93LS07XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbFJvdyA+IGVuZENlbGxSb3cpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0LrQvtC+0YDQtNC40L3QsNGC0YsgNC3RhSDRgdC+0YLQvtGA0L7QvSDQvdCwINC+0YHQvdC+0LLQtSBVbml0XG4gICAgICogQHBhcmFtIHN0ZXBcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Sb3dcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Db2xcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0VW5pdEFuZ2xlUG9pbnRzOiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB1bml0QW5nbGVzID0gW107XG5cbiAgICAgICAgbGV0IGxlZnRUb3AsXG4gICAgICAgICAgICByaWdodFRvcCxcbiAgICAgICAgICAgIHJpZ2h0Qm90dG9tLFxuICAgICAgICAgICAgbGVmdEJvdHRvbTtcblxuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LSBnZXRVbml0QW5nbGVQb2ludHM6ICcsIHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgbGVmdFRvcFxuICAgICAgICBsZWZ0VG9wID0gdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIGxlZnRUb3A6ICcsIGxlZnRUb3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0VG9wLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b1JpZ2h0VG9wID0gdGhpcy5nZXRSaWdodFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRvUmlnaHRUb3AuaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0VG9wID0ge3Bvc2l0aW9uUm93OiB0b1JpZ2h0VG9wLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogdG9SaWdodFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRUb3AgPSB7cG9zaXRpb25Sb3c6IGxlZnRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiBsZWZ0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIGxlZnRUb3BcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxlZnRUb3BfVE9fcmlnaHRUb3BcIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IGxlZnRUb3AucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogbGVmdFRvcC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZUVuZDogdG9SaWdodFRvcCxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IGxlZnRUb3AuaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIHJpZ2h0VG9wXG4gICAgICAgIHJpZ2h0VG9wID0gdGhpcy5nZXRSaWdodFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSByaWdodFRvcDogJywgcmlnaHRUb3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodFRvcC5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9SaWdodEJvdHRvbSA9IHRoaXMuZ2V0UmlnaHRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b1JpZ2h0Qm90dG9tLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodEJvdHRvbSA9IHtwb3NpdGlvblJvdzogdG9SaWdodEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvUmlnaHRCb3R0b20ucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0Qm90dG9tID0ge3Bvc2l0aW9uUm93OiByaWdodFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHJpZ2h0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0VG9wXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyaWdodFRvcF9UT19yaWdodEJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogcmlnaHRUb3AucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogcmlnaHRUb3AucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvUmlnaHRCb3R0b20sXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiByaWdodFRvcC5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgcmlnaHRCb3R0b21cbiAgICAgICAgcmlnaHRCb3R0b20gPSB0aGlzLmdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIHJpZ2h0Qm90dG9tOiAnLCByaWdodEJvdHRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0Qm90dG9tLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b0xlZnRCb3R0b20gPSB0aGlzLmdldExlZnRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b0xlZnRCb3R0b20uaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHRvTGVmdEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvTGVmdEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvTGVmdEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiByaWdodEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyByaWdodEJvdHRvbVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogcmlnaHRCb3R0b20ucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvTGVmdEJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IHJpZ2h0Qm90dG9tLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdFVCBsZWZ0Qm90dG9tXG4gICAgICAgIGxlZnRCb3R0b20gPSB0aGlzLmdldExlZnRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbGVmdEJvdHRvbTogJywgbGVmdEJvdHRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnRCb3R0b20uaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvTGVmdFRvcCA9IHRoaXMuZ2V0TGVmdFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRvTGVmdFRvcC5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvTGVmdFRvcCA9IHtwb3NpdGlvblJvdzogdG9MZWZ0VG9wLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogdG9MZWZ0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0VG9wID0ge3Bvc2l0aW9uUm93OiBsZWZ0Qm90dG9tLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogbGVmdEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyBsZWZ0Qm90dG9tXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsZWZ0Qm90dG9tX1RPX2xlZnRUb3BcIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IGxlZnRCb3R0b20ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogbGVmdEJvdHRvbS5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZUVuZDogdG9MZWZ0VG9wLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogbGVmdEJvdHRvbS5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5pdEFuZ2xlcztcbiAgICB9LFxuXG4gICAgZ2V0TGVmdFRvcEFuZ2xlUG9pbnQ6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgLSBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCAtIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1VuaXRPdXRPZkJvcmRlcihuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBuZXdQb3NpdGlvbjogJywgbmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0UmlnaHRUb3BBbmdsZVBvaW50OiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdyA9IHBvc2l0aW9uUm93IC0gc3RlcDtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uQ29sID0gcG9zaXRpb25Db2wgKyBzdGVwO1xuICAgICAgICBsZXQgYW5nbGVJc3NldCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNVbml0T3V0T2ZCb3JkZXIobmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSkge1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5maW5kTmV3QW5nZWwoc3RlcCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb24ucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbi5wb3NpdGlvbkNvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGVJc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzc2V0OiBhbmdsZUlzc2V0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyArIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sICsgc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRMZWZ0Qm90dG9tQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyArIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sIC0gc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBpc1VuaXRPdXRPZkJvcmRlcjogZnVuY3Rpb24gKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAobmV3UG9zaXRpb25Sb3cgPCAwIHx8IG5ld1Bvc2l0aW9uUm93ID4gKHRoaXMubWFwUm93IC0gMSkpXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgKG5ld1Bvc2l0aW9uQ29sIDwgMCB8fCBuZXdQb3NpdGlvbkNvbCA+ICh0aGlzLm1hcENvbCAtIDEpKVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAobmV3UG9zaXRpb25Sb3cgPCAwIHx8IG5ld1Bvc2l0aW9uUm93ID4gKHRoaXMubWFwUm93IC0gMSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAobmV3UG9zaXRpb25Db2wgPCAwIHx8IG5ld1Bvc2l0aW9uQ29sID4gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vINCf0L7Qv9GA0L7QsdGD0LXQvCDQvdCw0LnRgtC4INC90L7QstGD0Y4g0Y/Rh9C10LnQutGDINC/0YDQuNCx0LDQstC40LIg0LfQvdCw0YfQtdC90LjQtSDRiNCw0LPQsFxuICAgIGZpbmROZXdBbmdlbDogZnVuY3Rpb24gKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDQv9C+INGI0LDQs9Cw0Lwg0LIgNC3RhSDQvdCw0L/RgNCw0LLQu9C10L3QuNGP0YUg0Lgg0L/QvtGB0LzQvtGC0YDQuNC8LCDQv9C+0L/QsNC00LDQtdC8INC70Lgg0LIg0L/RgNC10LTQtdC70Ysg0LrQsNGA0YLRi1xuICAgICAgICBmb3IgKGxldCBzdHAgPSAxOyBzdHAgPD0gc3RlcDsgc3RwKyspIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHN0cCA8PSBzdGVwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBuZXdBbmdlbCA9IHRoaXMuY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbmV3QW5nZWw6ICcsIG5ld0FuZ2VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdBbmdlbC5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QW5nZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNGaW5kOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjaGVja05laWdoYm9yaW5nc0NlbGxCeURpcmVjdGlvbnM6IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgZGlyZWN0aW9uTGVmdCA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25MZWZ0KHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbkxlZnQuaXNGaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkxlZnQ6IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbkxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkxlZnQ6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25Ub3AgPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvblRvcC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uVG9wOiB0cnVlO1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25Ub3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvblRvcDogZmFsc2U7XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpcmVjdGlvblJpZ2h0ID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0KHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvblJpZ2h0LmlzRmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25SaWdodDogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uUmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvblJpZ2h0OiBmYWxzZTtcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGlyZWN0aW9uQm90dG9tID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbShzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25Cb3R0b20uaXNGaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkJvdHRvbTogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uQm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Cb3R0b206IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uQ29sIC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93ID49IDApICYmIChuZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApICYmICh0cnlOZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblRvcDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93IC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sID49IDApICYmIChuZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0OiBmdW5jdGlvbiAoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZmluZCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeU5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb25Db2wgKyBzdHA7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93ID49IDApICYmIChuZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApICYmICh0cnlOZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbTogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93ICsgc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sID49IDApICYmIChuZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfVxufSIsImltcG9ydCBjb25zdGFudCBmcm9tICcuLy4uL2NvbnN0YW50J1xuXG4vLyDQn9GA0L7QstC10YDQuNC8INGB0L7RgdC10LTQvdC40Lgg0LrQu9C10YLQutC4ICtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBMT0NBTF9ERUJVRzogZmFsc2UsXG4gICAgZ2V0KG1hcCwgdW5pdCkge1xuXG4gICAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgICBsZXQgdW5pdFBvc2l0aW9uUm93ID0gcGFyc2VJbnQodW5pdC5wb3NpdGlvblJvdyk7XG4gICAgICAgIGxldCB1bml0UG9zaXRpb25Db2wgPSBwYXJzZUludCh1bml0LnBvc2l0aW9uQ29sKTtcblxuICAgICAgICAvLyDQndC1INC30LDQsdGL0YLRjCDQv9GA0L4g0LPRgNCw0L3QuNGG0Ysg0LrQsNGA0YLRi1xuICAgICAgICBsZXQgYm9yZGVyID0ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgdG9wUmlnaHQ6IG1hcC5jb2wsXG4gICAgICAgICAgICByaWdodDogbWFwLmNvbCxcbiAgICAgICAgICAgIHJpZ2h0Qm90dG9tOiBtYXAuY29sLFxuICAgICAgICAgICAgYm90dG9tOiBtYXAucm93LFxuICAgICAgICAgICAgbGVmdEJvdHRvbTogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBsZWZ0VG9wOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVE9QINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0LLQtdGA0YXRgyArXG4gICAgICAgIGlmICgodW5pdFBvc2l0aW9uUm93IC0gMSkgPj0gYm9yZGVyLnRvcCkge1xuICAgICAgICAgICAgY2VsbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICBleGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtYXAuZ2V0Q2VsbCh1bml0UG9zaXRpb25Sb3cgLSAxLCB1bml0UG9zaXRpb25Db2wpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPUF9SSUdIVCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstCy0LXRgNGF0YMt0LLQv9GA0LDQstC+ICtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3BcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIudG9wUmlnaHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd0b3BSaWdodCcsXG4gICAgICAgICAgICAgICAgZXhpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogbWFwLmdldENlbGwodW5pdFBvc2l0aW9uUm93IC0gMSwgdW5pdFBvc2l0aW9uQ29sICsgMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQv9GA0LDQstC+ICtcbiAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci5yaWdodCkge1xuICAgICAgICAgICAgY2VsbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGV4aXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1hcC5nZXRDZWxsKHVuaXRQb3NpdGlvblJvdywgdW5pdFBvc2l0aW9uQ29sICsgMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUklHSFRfQk9UVE9NINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0L/RgNCw0LLQvi3QstC90LjQt9GDICtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci5yaWdodEJvdHRvbVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGxzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0Qm90dG9tJyxcbiAgICAgICAgICAgICAgICBleGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtYXAuZ2V0Q2VsbCh1bml0UG9zaXRpb25Sb3cgKyAxLCB1bml0UG9zaXRpb25Db2wgKyAxKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0LLQvdC40LfRgyArXG4gICAgICAgIGlmICgodW5pdFBvc2l0aW9uUm93ICsgMSkgPCBib3JkZXIuYm90dG9tKSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIGV4aXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1hcC5nZXRDZWxsKHVuaXRQb3NpdGlvblJvdyArIDEsIHVuaXRQb3NpdGlvbkNvbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTEVGVF9CT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsC3QstC90LjQt9GDICtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgLSAxKSA+PSBib3JkZXIubGVmdEJvdHRvbVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGxzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnRCb3R0b20nLFxuICAgICAgICAgICAgICAgIGV4aXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1hcC5nZXRDZWxsKHVuaXRQb3NpdGlvblJvdyArIDEsIHVuaXRQb3NpdGlvbkNvbCAtIDEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExFRlQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsCArXG4gICAgICAgIGlmICgodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnQpIHtcbiAgICAgICAgICAgIGNlbGxzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIGV4aXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1hcC5nZXRDZWxsKHVuaXRQb3NpdGlvblJvdywgdW5pdFBvc2l0aW9uQ29sIC0gMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTEVGVF9UT1Ag0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LvQtdCy0LAt0LLQstC10YDRhdGDICtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3BcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0VG9wJyxcbiAgICAgICAgICAgICAgICBleGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtYXAuZ2V0Q2VsbCh1bml0UG9zaXRpb25Sb3cgLSAxLCB1bml0UG9zaXRpb25Db2wgLSAxKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVuaXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2VsbHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJST1c6IFwiICsgdW5pdFBvc2l0aW9uUm93LCBcIkNPTDogXCIgKyB1bml0UG9zaXRpb25Db2wpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9XG59IiwiaW1wb3J0IGNvbnN0YW50IGZyb20gJy4vLi4vY29uc3RhbnQnXG5pbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi8uLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuLy4uL3Rvb2xzJztcblxuLy8gQ09XUyBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ293c0FsZ29yaXRobSAgZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyBDZWxsIERpc3RhbmNlXG4gICAgICAgIHRoaXMuZGlzdGFuY2VWaWV3ID0gMTtcbiAgICB9XG5cbiAgICBhY3QgKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uID0gbWFwLmdldE9uZUxldmVsQ2VsbHNJbmZvKHVuaXQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhOlxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KHQvtGB0LXQtNC90LjQvNC4INC60LvQtdGC0LrQsNC80LggIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotGA0LDQstC+0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0LjQs9GA0LDQvNC4ICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXNcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCX0LXQvNC70ZHQuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qaWYgKHVuaXQuaGVhbHRoID4gMCkge1xuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INCi0LjQs9GA0YtcbiAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy/QldGB0LvQuCDQtdGB0YLRjCDRgdCy0L7QsdC+0LTQvdGL0LUg0LrQu9C10YLQutC4XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQkdC10LbQuNC8INC+0YIg0KLQuNCz0YDQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVBd2F5RnJvbUVuZW15KG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL9CV0YHQu9C4INC10YHRgtGMINGA0Y/QtNC+0Lwg0YLRgNCw0LLQsCDQtdC00LjQvCDQtdC1INC4INGD0LHQtdCz0LDQtdC8XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Gb29kKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0LXQtNCwXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Gb29kKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUZyZWUobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXAua2lsbFVuaXQodW5pdCwgaW5kZXhPYmplY3QpO1xuICAgICAgICB9Ki9cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JHQtdC20LjQvCDQvtGCINGC0LjQs9GA0LAgK1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVBd2F5RnJvbUVuZW15IChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICAvLyDQodC+0YXRgNCw0L3QuNC8INGB0YLQsNGA0YvQuSBVbml0INC4INC10LPQviBSQyAoUm93L0NvbClcbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbCDQuCDQt9Cw0L/QuNGI0LjQvCDQsiDQvdC+0LLRg9GOINGP0YfQtdC50LrRgyDQutC+0YDQvtCy0YNcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQoi7QuiDQvNGLINGD0LHQtdCz0LDQtdC8INC4INC90LUg0LXQtNC40Lwg0YLRgNCw0LLRgywg0L7RgtC90LjQvNC40Lwg0L3QtdC80L3QvtCz0L4g0LfQtNC+0YDQvtCy0YzRj1xuICAgICAgICB1bml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JXQtNC40Lwg0YLRgNCw0LLRg1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlVG9Gb29kIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDQtdC00YtcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggLSAxKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7fTtcblxuICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNC8INCyINC80LXQvdC10LTQttC10YAg0YHQvNC10YDRgtC10Lkg0YLRgNCw0LLRg1xuICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkZWF0aFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGRpZVVuaXRUeXBlOiBcImdyYXNzXCIsXG4gICAgICAgICAgICBkaWVVbml0SWQ6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZGllVW5pdCA9IG5ldyBEaWVVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgbWFwLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgIC8vINCf0YDQuCDQv9C+0LPQu9Cw0YnQtdC90LjQuCDRgtGA0LDQstGLINC/0YDQuNCx0LDQstC40Lwg0LbQuNC30L3QuCwg0L7Qs9GA0LDQvdC40YfQuNC8INC30L3QsNGH0LXQvdC40LXQvCAxMDBcbiAgICAgICAgaWYgKHVuaXQuaGVhbHRoIDwgMTAwKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0LmhlYWx0aCA+IDkwKSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgoMTAwIC0gdW5pdC5oZWFsdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bml0LmFkZEhlYWx0aCh0aGlzLmFkZEhlYWx0aFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHQstC+0LHQvtC00L3QvtC1INC/0LXRgNC10LzQtdGJ0LXQvdC40LVcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlRnJlZSAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codW5pdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDRgSDQt9C10LzQu9C10LlcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgdW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiLy8gREVBVEggQUxHT1JJVE1cbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IFVuaXQgZnJvbSAnLi8uLi91bml0JztcblxuXG4vLyBHUk9VTkQgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYXRoQWxnb3JpdGhtIHtcbiAgICBhY3QgKGRlYXRoVW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICBpZiAoZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCA8IGRlYXRoVW5pdC51bml0UmVzdXJlY3Rpb25JbnRlcnZhbCkge1xuICAgICAgICAgICAgZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCsrO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSBtYXAuZ2V0TmV3Um93Q29sUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3UG9zaXRpb25Sb3dDb2wpO1xuXG4gICAgICAgICAgICB2YXIgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiBkZWF0aFVuaXQuZGllVW5pdElkLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZGVhdGhVbml0LmRpZVVuaXRUeXBlLFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBuZXdQb3NpdGlvbi5yb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uLmNvbCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBuZXdVbml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICAgICAgdmFyIGRpZU9iamVjdHNPbk1hcEluZGV4ID0gbWFwLmdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcChkZWF0aFVuaXQpO1xuXG4gICAgICAgICAgICB2YXIgZW50aXR5UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBkZWF0aFVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IGRlYXRoVW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKGRlYXRoVW5pdCwgbmV3IEVudGl0eShlbnRpdHlQYXJhbSkpO1xuXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbChuZXdVbml0LCBuZXdVbml0KTtcblxuICAgICAgICAgICAgbWFwLmFkZFRvT2JqZWN0c09uTWFwKG5ld1VuaXQpO1xuXG4gICAgICAgICAgICBtYXAucmVtb3ZlVW5pdEZyb21EaWVPYmplY3RzT25NYXAoZGllT2JqZWN0c09uTWFwSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcblxuLy8gR1JBU1MgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXNzQWxnb3JpdGhtIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBhY3QgKCkge307XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuXG4vLyBHUk9VTkQgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZEFsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgYWN0ICgpIHt9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgTG9nIGZyb20gJy4vLi4vbG9nJztcbmltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuLy4uL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vLi4vdG9vbHMnO1xuXG5jb25zdCBMT0NBTF9ERUJVRyA9IHRydWU7XG5cbi8vIFRJR0VSUyBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlnZXJzQWxnb3JpdGhtIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyDQoNCw0LTQuNGD0YEg0Y/Rh9C10LXQuiDQsiDRh9C10YLRi9GA0LUg0YHRgtC+0YDQvtC90YssINGD0LLQtdC70LjRh9C10L0g0L3QsCDQvtC00L3Rgywg0LXRgdC70LggNCDRgtC+IDNcbiAgICAgICAgdGhpcy5kaXN0YW5jZVZpZXcgPSA0O1xuICAgIH1cblxuICAgIGFjdCAodW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICBpZiAoTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRJR0VSOiBcIiwgdW5pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQktC+0L7Qt9Cy0YDQsNGC0LjRgtGMINC+0LHRitC10LrRgiDRgSDRgdC+0YHQtdC00L3QuNC80Lgg0Y/Rh9C10LnQutCw0LzQuFxuICAgICAgICAvLyBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uID0gbWFwLmdldE11bHRpTGV2ZWxDZWxsc0luZm8odW5pdCwgaW5kZXhPYmplY3QsIHRoaXMuZGlzdGFuY2VWaWV3KTtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiA9IG1hcC5nZXRPbmVMZXZlbENlbGxzSW5mbyh1bml0KTtcblxuICAgICAgICBpZiAoTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5FSUdIQk9SSU5HU0NFTExJTkZPUk1BVElPTjogXCIsIG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhOlxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JrQsNGA0YLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubWFwXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQodC+0YHQtdC00L3QuNC80Lgg0LrQu9C10YLQutCw0LzQuCAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0YDQsNCy0L7QuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLQuNCz0YDQsNC80LggICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllc1xuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JfQtdC80LvRkdC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgICovXG5cbiAgICAgICAvKiBpZiAodW5pdC5oZWFsdGggPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INC10LTQsFxuICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1hcC5raWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCk7XG4gICAgICAgIH0qL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQldC00LjQvCDQutC+0YDQvtCy0YNcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZVRvRm9vZCAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0LrQvtGA0L7QslxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCAtMSk7XG5cbiAgICAgICAgLy8g0K3RgtCwINGP0YfQtdC50LrQsCDRj9Cy0LvRj9C10YLRjNGB0Y8g0LrQvtGA0L7QstC+0LksINGCLtC1INCV0JTQntCZISEhXG4gICAgICAgIC8vIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXVxuICAgICAgICAvLyB1bml0LmVhdGVuKHRydWUsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40LwgaW5kZXgg0YHRitC10LTQtdC90L7QuSDQutC+0YDQvtCy0Ysg0LjQtyDQvNCw0YHRgdC40LLQsCBvYmplY3RzT25NYXBcbiAgICAgICAgbGV0IGZvb2RJbmRleCA9IG1hcC5nZXRJbmRleEZyb21PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdKTtcblxuICAgICAgICAvLyDQn9C+0LzQtdGC0LjQu9C4INGC0LjQs9GA0LAg0YfRgtC+INC+0L0g0YHRitC10Lsg0LrQvtGA0L7QstGDXG4gICAgICAgIHVuaXQuZWF0ZW4obmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBmb29kSW5kZXgpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YLQuNCz0YDQsCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQo9C00LDQu9C40Lwg0LrQvtGA0L7QstGDINC40Lcg0LjQs9GA0L7QstC+0LPQviDQvNCw0YHRgdC40LLQsFxuICAgICAgICBtYXAucmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoZm9vZEluZGV4KTtcblxuICAgICAgICBkZWxldGUgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdO1xuXG4gICAgICAgIC8vINCf0YDQuCDQv9C+0LPQu9Cw0YnQtdC90LjQuCDRgtGA0LDQstGLINC/0YDQuNCx0LDQstC40Lwg0LbQuNC30L3QuCwg0L7Qs9GA0LDQvdC40YfQuNC8INC30L3QsNGH0LXQvdC40LXQvCAxMDBcbiAgICAgICAgaWYgKHVuaXQuaGVhbHRoIDwgMTAwICkge1xuXG4gICAgICAgICAgICBpZiAodW5pdC5oZWFsdGggPiA5MCkge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKDEwMC11bml0LmhlYWx0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKHRoaXMuYWRkSGVhbHRoVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodCy0L7QsdC+0LTQvdC+0LUg0L/QtdGA0LXQvNC10YnQtdC90LjQtVxuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVGcmVlIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHt9O1xuXG4gICAgICAgIC8vIHVuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0XG5cbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDRg9Cx0LjQuyDQu9C4INC00LDQvdC90YvQuSDRgtC40LPRgCDRgtC+0LvRjNC60L4g0YfRgtC+INC60L7RgNC+0LLRgyxcbiAgICAgICAgLy8g0LXRgdC70Lgg0LTQsCwg0YLQviDQvdCwINGB0LvQtdC0LiDRiNCw0LPQtSDQv9C+0YHRgtCw0LLQuNC8INC90LAg0LXQs9C+INC80LXRgdGC0L4g0YLQsNCx0LvQuNGH0LrRg3VuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0XG4gICAgICAgIGlmICh1bml0LmlzRWF0ZW4oKSkge1xuXG4gICAgICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgICAgICBkaWVVbml0VHlwZTogdW5pdC5mb29kSW5mb3JtYXRpb24uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGRpZVVuaXRJZDogdW5pdC5mb29kSW5mb3JtYXRpb24uaWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICAgICAgZGllVW5pdC5zZXRJbmRleE9iamVjdCh1bml0LmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCk7XG5cbiAgICAgICAgICAgIG1hcC5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAgICAgbWFwLnNldENlbGwodW5pdCwgZGllVW5pdCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2xkVW5pdC5yZXNldEVhdGVuKCk7XG5cbiAgICAgICAgb2xkVW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0YEg0LfQtdC80LvQtdC5XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBHTE9CQUxfREVCVUcgOiB0cnVlXG59OyIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IERlYXRoQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2RlYXRoQWxnb3JpdGhtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGllVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuaW5kZXhPYmplY3QgPSBwYXJhbS5pbmRleE9iamVjdDtcblxuICAgICAgICB0aGlzLmFsZ29yaXRtcyA9IG5ldyBEZWF0aEFsZ29yaXRobSgpO1xuXG4gICAgICAgIHRoaXMuZGllVW5pdFR5cGUgPSBwYXJhbS5kaWVVbml0VHlwZTtcbiAgICAgICAgdGhpcy5kaWVVbml0SWQgPSBwYXJhbS5kaWVVbml0SWQ7XG5cbiAgICAgICAgdGhpcy51bml0UmVzdXJlY3Rpb25JbnRlcnZhbCA9IDM7XG4gICAgICAgIHRoaXMudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0ID0gMDtcblxuICAgICAgICAvLyB0aGlzLnNvdW5kRGllID0gbmV3IEdhbWVTb3VuZHMoXCJhdWRpby9kaWVfXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiLm1wM1wiKTtcbiAgICB9XG59XG5cbkRpZVVuaXQucHJvdG90eXBlLnNldEluZGV4T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5pbmRleE9iamVjdCA9IGluZGV4T2JqZWN0O1xufTtcblxuXG4vKipcbiAqINCg0LDQt9C90YvQtSDQtNC10LnRgdGC0LLQuNGPINC+0LHRitC10LrRgtCwXG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLmFjdGlvbiA9IGZ1bmN0aW9uIChtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5hbGdvcml0bXMuYWN0KHRoaXMsIG1hcCwgaW5kZXhPYmplY3QpO1xufTtcblxuXG4vKipcbiAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAqIEBwYXJhbSB1bml0XG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLnVwZGF0ZVJvd0NvbCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gICAgdGhpcy5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICB0aGlzLmlkID0gcGFyYW0uaWQ7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gcGFyYW0uY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gcGFyYW0ub2JqUG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMucG9zaXRpb25Db2wgPSBwYXJhbS5vYmpQb3NpdGlvbkNvbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqL1xuICAgIHVwZGF0ZVJvd0NvbCAodW5pdCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQktGL0LLQvtC0IEhUTUwg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNob3cgKCkge1xuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdiLXVuaXQgXCIrdGhpcy5jbGFzc05hbWUrXCInPjwvZGl2PlwiO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IExvZyBmcm9tICcuL2xvZyc7XG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICAvKipcbiAgICAgKiBPQkogR0FNRVxuICAgICAqIEBwYXJhbSBzZXR0aW5nXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmcgPSBzZXR0aW5nO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjQvCDRgNC10LbQuNC8INC40LPRgNGLXG4gICAgICAgIHRoaXMuZGV2TW9kZSA9IHNldHRpbmcuZGV2TW9kZSB8fCBmYWxzZTtcblxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40Lwg0YHQutC+0YDQvtGB0YLRjCDQuNCz0YDQvtCy0L7Qs9C+INGG0LjQutC70LBcbiAgICAgICAgdGhpcy50aW1lUmVuZGVyID0gc2V0dGluZy50aW1lUmVuZGVyIHx8IDUwMDtcblxuICAgICAgICB0aGlzLmJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItYnV0dG9uc19fYnRuLXN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1idXR0b25zX19idG4tcGF1c2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHQU1FIExPT1BcbiAgICAgKi9cbiAgICBydW4gKCkge1xuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC90L7QstGD0Y4g0YHRhtC10L3Rg1xuICAgICAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUodGhpcy5zZXR0aW5nKTtcblxuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1INC90LAg0YHRhtC10L3QtVxuICAgICAgICBpZiAoc2NlbmUuYnVpbGQoKSkge1xuXG4gICAgICAgICAgICBMb2cuc2hvd05vdGlmeSgn0JjQs9GA0LAg0LfQsNCz0YDRg9C20LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICBMb2cuc2hvd05vdGlmeShcItCd0LDQttC80LjRgtC1ICfQndCw0YfQsNGC0Ywg0LjQs9GA0YMnLlwiLCAnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgbG9vcDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRldk1vZGUpIHtcblxuICAgICAgICAgICAgICAgIExvZy5zaG93Tm90aWZ5KCfQmNCz0YDQsCDQsiDQvtCx0YvRh9C90L7QvCDRgNC10LbQuNC80LUuJywgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgTG9nLnNob3dOb3RpZnkoJ9CY0LPRgNCwINC30LDQv9GD0YnQtdC90LAuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JPQu9Cw0LLQvdGL0LkgTG9vcFxuICAgICAgICAgICAgICAgICAgICBsb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUuaXNzZXRPYmplY3RPbk1hcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmFjdGlvbk9uTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCBzZWxmLnRpbWVSZW5kZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idG5QYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb29wKTtcblxuICAgICAgICAgICAgICAgICAgICBMb2cuc2hvd05vdGlmeSgn0JjQs9GA0LAg0L7RgdGC0LDQvdC+0LLQu9C10L3QsC4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NlbmUuaXNzZXRPYmplY3RPbk1hcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5zaG93Tm90aWZ5KCfQmNCz0YDQsCDQsiDRgNC10LbQuNC80LUg0YDQsNC30YDQsNCx0L7RgtGH0LjQutCwLicsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuc2hvd05vdGlmeSgn0JrQvtC90LXRhiDQuNCz0YDRiy4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIgKCkge1xuICAgICAgICBMb2cuc2hvd05vdGlmeSgnR2FtZSBPdmVyJywgJ2Vycm9yJyk7XG4gICAgICAgIGFsZXJ0KCdHYW1lIE92ZXInKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9nIGZyb20gJy4vbG9nJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tIFwiLi9zZXR0aW5nXCI7XG5cbi8vINCf0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDQtNC+0LrRg9C80LXQvdGC0LAg0LfQsNC/0YPRgdGC0LjQvCDQuNCz0YDRg1xuJChmdW5jdGlvbiAoKSB7XG5cbiAgICBMb2cuaW5pdE5vdGlmeSgpO1xuXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShzZXR0aW5nKTtcblxuICAgIGdhbWUucnVuKCk7XG59KTtcbiIsImltcG9ydCBjb25zdGFudCBmcm9tICcuL2NvbnN0YW50JztcblxuLyoqXG4gKiBMT0dcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqIC0tLSBzaW1wbGUgdGV4dCBtZXNzYWdlXG4gICAgICogQHBhcmFtIG1zZ1xuICAgICAqL1xuICAgIHNob3cgKG1zZykge1xuICAgICAgICBtc2cgIT0gdW5kZWZpbmVkID8gY29uc29sZS5sb2coXCIqfE1TRy0tPlwiLCBtc2cpIDogY29uc29sZS5sb2coJyp8TVNHLS0+INCT0LTQtS3RgtC+INC/0YPRgdGC0L7QuSDQstGL0LLQvtC0IExvZy5zaG93KCk7Jyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIC0tLSBERUJVR1xuICAgICAqIEZPUk1BVDogW3t0ZXh0Om9iamVjdH0se3RleHQ6b2JqZWN0fV07XG4gICAgICogQHBhcmFtIG9iamVjdHNcbiAgICAgKiBAcGFyYW0gTE9DQUxfREVCVUdcbiAgICAgKi9cbiAgICBzaG93RGVidWcgKG9iamVjdHMgPSBudWxsLCBMT0NBTF9ERUJVRyA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChvYmplY3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZERlYnVnU3RyaW5nKG9iamVjdHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoTE9DQUxfREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZERlYnVnU3RyaW5nKG9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqfE1TRy0tPiDQk9C00LUt0YLQviDQv9GD0YHRgtC+0Lkg0LLRi9Cy0L7QtCBMb2cuc2hvd0RlYnVnKCk7Jyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJ1aWxkRGVidWdTdHJpbmcgKG9iamVjdHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgb2JqZWN0IGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiF8REJHLS0+XCIsIG9iamVjdCwgb2JqZWN0c1tpXVtvYmplY3RdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyAtLS0gTk9USUZZXG4gICAgaW5pdE5vdGlmeSgpIHtcbiAgICAgICAgJC5sTm90aWZ5KHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tUmlnaHQnXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvd05vdGlmeSAodGV4dCwgc3RhdHVzKSB7XG4gICAgICAgICQubE5vdGlmeSgnYWRkJywgdGV4dCwgc3RhdHVzKTtcbiAgICB9XG59IiwiaW1wb3J0IExvZyBmcm9tICcuL2xvZyc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCBVbml0IGZyb20gJy4vdW5pdCc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuL3Rvb2xzJztcbmltcG9ydCBvbmVMZXZlbENlbGxzSW5mbyBmcm9tICcuL2FsZ29yaXRobS9hbGdvcml0aG1GaW5kT25lTGV2ZWxOZWlnaGJvcmluZ3NDZWxsSW5mbyc7XG5pbXBvcnQgbXVsdGlMZXZlbENlbGxzSW5mbyBmcm9tICcuL2FsZ29yaXRobS9hbGdvcml0aG1GaW5kTXVsdGlMZXZlbE5laWdoYm9yaW5nc0NlbGxJbmZvJztcblxuXG4vKipcbiAqINCa0LvQsNGB0YEg0YDQsNCx0L7RgtGLINGBINC60LDRgNGC0L7QuVxuICogQHBhcmFtIHNldHRpbmdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1hcERhdGEgPSBbXTtcblxuICAgICAgICAvLyDQntCx0YrQtdC60YLRiyDQtNC70Y8g0LrQsNGA0YLRi1xuICAgICAgICB0aGlzLm1hcE9iamVjdHMgPSBzZXR0aW5nLm1hcE9iamVjdHM7XG5cbiAgICAgICAgLy8g0KHQv9C40YHQvtC6INC+0LHRitC10LrRgtC+0LIsINC60L7RgtC+0YDRi9C1INC30LDQtNC10LnRgdGC0LLQvtCy0LDQvdC90Ysg0L3QsCDQutCw0YDRgtC1XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXAgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICB0aGlzLnJvdyA9IHNldHRpbmcubWFwU2l6ZS5yb3cgfHwgMDtcbiAgICAgICAgdGhpcy5jb2wgPSBzZXR0aW5nLm1hcFNpemUuY29sIHx8IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0YHRgtGA0L7QuNC8INC/0YPRgdGC0YPRjiDQutCw0YDRgtGDINC90LAg0L7RgdC90L7QstC1INC90LDRh9Cw0LvRjNC90YvRhSBSb3cvQ29sXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMubWFwRGF0YS5wdXNoKFtdKSA8IHRoaXMucm93KSA7XG5cbiAgICAgICAgaWYgKHRoaXMubWFwRGF0YS5sZW5ndGggPT0gdGhpcy5yb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JPQtdC90LXRgNCw0YbQuNGPINC60LDRgNGC0YtcbiAgICAgKi9cbiAgICBnZW5lcmF0ZSgpIHtcblxuICAgICAgICBsZXQgb2JqSUQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IG9iamVjdE5hbWUgaW4gdGhpcy5tYXBPYmplY3RzKSB7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdE5hbWUpO1xuICAgICAgICAgICAgbGV0IG9iak1pbiA9IHRoaXMubWFwT2JqZWN0c1tvYmplY3ROYW1lXS5taW47XG4gICAgICAgICAgICBsZXQgb2JqTWF4ID0gdGhpcy5tYXBPYmplY3RzW29iamVjdE5hbWVdLm1heDtcblxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0L7QsdGK0LXQutGCINGP0LLQu9GP0LXRgtGM0YHRjyDRgdGC0LDRgtC40LrQvtC5LFxuICAgICAgICAgICAgLy8g0YLQviDQv9C+0YHRgtCw0YDQtdC80YHRjyDQtNCw0YLRjCDQv9C+INC80LDQutGB0LjQvNGD0LzRgyDQt9C90LDRh9C10L3QuNGPIG1pbi9tYXhcbiAgICAgICAgICAgIC8vINC00LvRjyDQv9C+0LvQvdC+0LPQviDQt9Cw0L/QvtC70L3QtdC90LjRjyDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXG4gICAgICAgICAgICBpZiAob2JqTWluID09PSBudWxsICYmIG9iak1heCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9iak1pbiA9ICh0aGlzLnJvdyArIHRoaXMuY29sKSAqIDI7XG4gICAgICAgICAgICAgICAgb2JqTWF4ID0gKHRoaXMucm93ICsgdGhpcy5jb2wpICogMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQutC+0Lst0LLQviDQvtCx0YrQtdC60YLQvtCyINC90LAg0LrQsNGA0YLQtVxuICAgICAgICAgICAgbGV0IG9iakNvdW50T25NYXAgPSB0b29scy5yYW5kb21JbnRlZ2VyKG9iak1pbiwgb2JqTWF4KTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvYmplY3ROYW1lW29iakNvdW50T25NYXBdOiBcIiArIG9iamVjdE5hbWUgKyBcIiBcIiArIG9iakNvdW50T25NYXApO1xuXG4gICAgICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDRjdGC0L7QvNGDINC60L7Qu9C40YfQtdCy0YHRgtCy0YNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqQ291bnRPbk1hcDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgbWFwUm93Q29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xDb29yZCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21hcFJvd0NvbE5vcm1hbDogJywgbWFwUm93Q29sKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBtYXBSb3dDb2wucm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG1hcFJvd0NvbC5jb2xcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBFbnRpdHkodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgVW5pdCh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdID0gdW5pdDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0TmFtZSA9PSAnY293cycgfHwgb2JqZWN0TmFtZSA9PSAndGlnZXJzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb09iamVjdHNPbk1hcCh1bml0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0U2V0dGluZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaklEOiBvYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cnlOZXdHZW5lcmF0ZSh1bml0U2V0dGluZywgb2JqQ291bnRPbk1hcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvYmpJRCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtCy0YLQvtGA0L3QsNGPINCz0LXQvdC10YDQsNGG0LjRjywg0LIg0YHQu9GD0YfQuNC4INC30LDQvdGP0YLQvtCz0L4g0LzQtdGB0YLQsCDQsiDQvNCw0YHRgdC40LLQtVxuICAgICAqIEBwYXJhbSBvYmplY3RTZXR0aW5nXG4gICAgICogQHBhcmFtIGNvdW50XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgdHJ5TmV3R2VuZXJhdGUob2JqZWN0U2V0dGluZywgY291bnQpIHtcblxuICAgICAgICBpZiAoY291bnQgPD0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vINCf0YDQvtC50LTQtdC80YHRjyDQv9C+INGN0YLQvtC80YMg0LrQvtC70LjRh9C10LLRgdGC0LLRg1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblxuICAgICAgICAgICAgLy8g0YHQvtC30LTQsNC00LjQvCDQutC+0L7RgNC00LjQvdCw0YLRiyDQtNC70Y8g0L/RgNC+0YHRgtCw0LLQu9C10L3QuNGPXG4gICAgICAgICAgICBsZXQgbWFwUm93Q29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xDb29yZCgpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFwUm93Q29sUmVjdXJzaXZlOiAnLCBtYXBSb3dDb2wpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogb2JqZWN0U2V0dGluZy5vYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBtYXBSb3dDb2wucm93LFxuICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogbWFwUm93Q29sLmNvbFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsZXQgdW5pdDtcblxuICAgICAgICAgICAgICAgIGlmIChvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUgPT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IEVudGl0eSh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgVW5pdCh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09ICdjb3dzJyB8fCBvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb09iamVjdHNPbk1hcCh1bml0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdW5pdFNldHRpbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaklEOiBvYmplY3RTZXR0aW5nLm9iaklELFxuICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3RTZXR0aW5nLm9iamVjdE5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyeU5ld0dlbmVyYXRlKHVuaXRTZXR0aW5nLCBjb3VudCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9GM0L3Ri9C1INC60L7QvtGA0LTQuNC90LDRgtGLINC90LAg0L7RgdC90L7QstC1INC60L7Quy3QstC+INGB0YLRgNC+0Log0Lgg0LrQvtC70L7QvdC+0LpcbiAgICAgKiBAcmV0dXJucyB7e3JvdzogKiwgY29sOiAqfX1cbiAgICAgKi9cbiAgICBnZXRSYW5kb21Sb3dDb2xDb29yZCgpIHtcbiAgICAgICAgbGV0IGNvdW50Um93ID0gdGhpcy5yb3csXG4gICAgICAgICAgICBjb3VudENvbCA9IHRoaXMuY29sO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3c6IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgY291bnRSb3cpLFxuICAgICAgICAgICAgY29sOiB0b29scy5yYW5kb21JbnRlZ2VyKDAsIGNvdW50Q29sKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNoZWNrUm91dGUgKCkge1xuXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgdGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcblxuICAgIH1cbiAgICBcbiAgICBnZXRSYW5kb21Sb3dDb2xCYXNlZE9uVW5pdChjZWxsLCBzdGVwcykge1xuICAgICAgICBsZXQgaXNzZXRSb3V0ZSA9IHRoaXMudHJ5Um91dGUoc3RlcHMpO1xuXG5cblxuXG4gICAgICAgIC8vIGxldCByb3dNaW4gPSAoKGNlbGwucG9zaXRpb25Sb3cgLSAxKSA+PSAwKSA/IChjZWxsLnBvc2l0aW9uUm93IC0gMSkgOiAwO1xuICAgICAgICAvLyBsZXQgcm93TWF4ID0gKChjZWxsLnBvc2l0aW9uUm93ICsgMSkgPD0gdGhpcy5yb3cpID8gKGNlbGwucG9zaXRpb25Sb3cgKyAxKSA6IHRoaXMucm93O1xuXG4gICAgICAgIC8vIGxldCBjb2xNaW4gPSAoKGNlbGwucG9zaXRpb25Db2wgLSAxKSA+PSAwKSA/IChjZWxsLnBvc2l0aW9uUm93IC0gMSkgOiAwO1xuICAgICAgICAvLyBsZXQgY29sTWF4ID0gKChjZWxsLnBvc2l0aW9uQ29sICsgMSkgPD0gdGhpcy5jb2wpID8gKGNlbGwucG9zaXRpb25Db2wgKyAxKSA6IHRoaXMuY29sO1xuXG4gICAgICAgIC8vIGxldCBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgLy8gICAgIG5ld1Bvc2l0aW9uQ29sO1xuICAgICAgICAvL1xuICAgICAgICAvLyBuZXdQb3NpdGlvblJvdyA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUocm93TWluLCByb3dNYXgsIGNlbGwucG9zaXRpb25Sb3cpO1xuICAgICAgICAvLyBuZXdQb3NpdGlvbkNvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUoY29sTWluLCBjb2xNYXgsIGNlbGwucG9zaXRpb25Sb3cpO1xuXG4gICAgICAgIC8vIHJldHVybiB7XG4gICAgICAgIC8vICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgIC8vICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2xcbiAgICAgICAgLy8gfVxuICAgIH07XG5cbiAgICBnZXRSYW5kb21Sb3dDb2xXaXRoRXhjbHVkZShtaW5DZWxsLCBtYXhDZWxsLCBleGNsdWRlVmFsdWUpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIHZhbHVlID0gdG9vbHMucmFuZG9tSW50ZWdlcihtaW5DZWxsLCBtYXhDZWxsKTtcblxuICAgICAgICB3aGlsZSAodmFsdWUgPT0gZXhjbHVkZVZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvb2xzLnJhbmRvbUludGVnZXIobWluQ2VsbCwgbWF4Q2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuXG4gICAgZ2V0TmV3Um93Q29sUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvblJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGT1IgTkVXIFVOSVQgR0VORVJFVEUgTkVXIFBPU0lUSU9OOiBUUllbXCIgKyAoaSsrKSArIFwiXSAtPiBbUihcIiArIG5ld1Bvc2l0aW9uUm93Q29sLnJvdyArIFwiKTpDKFwiICsgbmV3UG9zaXRpb25Sb3dDb2wuY29sICsgXCIpXVwiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWFwRGF0YVtuZXdQb3NpdGlvblJvd0NvbC5yb3ddW25ld1Bvc2l0aW9uUm93Q29sLmNvbF0uY2xhc3NOYW1lID09PSBcImdyb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Bvc2l0aW9uUm93Q29sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0cnVlKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0LTQuNC8INGP0YfQtdC50LrRg1xuICAgICAqIEBwYXJhbSBvbGRVbml0XG4gICAgICogQHBhcmFtIG5ld1VuaXRcbiAgICAgKi9cbiAgICBzZXRDZWxsKG9sZFVuaXQsIG5ld1VuaXQpIHtcblxuICAgICAgICB0aGlzLm1hcERhdGFbb2xkVW5pdC5wb3NpdGlvblJvd11bb2xkVW5pdC5wb3NpdGlvbkNvbF0gPSBuZXdVbml0O1xuXG4gICAgICAgIHRoaXMubWFwRGF0YVtvbGRVbml0LnBvc2l0aW9uUm93XVtvbGRVbml0LnBvc2l0aW9uQ29sXS51cGRhdGVSb3dDb2wob2xkVW5pdCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0Y/Rh9C10LnQutGDXG4gICAgICogQHBhcmFtIHBvc2l0aW9uUm93XG4gICAgICogQHBhcmFtIHBvc2l0aW9uQ29sXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0Q2VsbChwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwRGF0YVtwb3NpdGlvblJvd11bcG9zaXRpb25Db2xdO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIGFkZFRvT2JqZWN0c09uTWFwKHVuaXQpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXAucHVzaCh1bml0KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvRj9C10YIgVW5pdCDQuNC3INC80LDRgdGB0LjQstCwIE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICovXG4gICAgcmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXAuc3BsaWNlKGluZGV4T2JqZWN0LCAxKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvRj9C10YIgVW5pdCDQuNC3INC80LDRgdGB0LjQstCwIERpZU9iamVjdHNPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINGB0LzQtdGA0YLQuCB1bml0c1xuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICovXG4gICAgcmVtb3ZlVW5pdEZyb21EaWVPYmplY3RzT25NYXAoaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXAuc3BsaWNlKGluZGV4T2JqZWN0LCAxKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQntCx0L3QvtCy0LjQvCDQtNC70Y8gVW5pdCDQtdCz0L4gUkMoUm93L0NvbCkg0LIg0LzQsNGB0YHQuNCy0LUgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICB1cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAodW5pdCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9C40Lwg0L7QsdGK0LXQutGCXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBraWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIHRoaXMucmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40Lwg0LzQvtCz0LjQu9C60YNcbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZGllVW5pdFR5cGU6IHVuaXQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgZGllVW5pdElkOiB1bml0LmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgIHRoaXMuc2V0Q2VsbCh1bml0LCBkaWVVbml0KTtcblxuICAgICAgICB0aGlzLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGllT2JqZWN0c09uTWFwKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINC70Lgg0LXRidC1INC+0LHRitC10LrRgtGLINCyINC80LDRgdGB0LjQstC1INC00LvRjyDRgdGD0YnQtdCy0YHRgtCy0L7QstCw0L3QuNGPINC40LPRgNGLXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBpc3NldE9iamVjdE9uTWFwKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMub2JqZWN0c09uTWFwLmxlbmd0aCA+IDAgPyAxIDogMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCe0YLRhNC40LvRjNGC0YDRg9C10Lwg0Y/Rh9C10LnQutC4INC/0L4g0YLQuNC/0YMgdW5pdFR5cGVcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFxuICAgICAqIEBwYXJhbSB1bml0VHlwZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBmaWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXRUeXBlKSB7XG5cbiAgICAgICAgbGV0IGFyciA9IFtdO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LHQtdGA0LXQvCDQv9C+0LvRg9GH0LXQvdC90YvQuSDQvNCw0YHRgdC40LIg0YEg0Y/Rh9C10LnQutCw0LzQuCDQvdCw0YXQvtC00Y/RidC40LzQuNGB0Y8g0YDRj9C00L7QvFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5laWdoYm9yaW5nc0NlbGwubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgLy8g0K/Rh9C10LnQutCwINC90LUg0LLRi9GF0L7QtNC40YIg0LfQsCDQs9GA0LDQvdC40YbRi1xuICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uZXhpc3QpIHtcblxuICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQuY2xhc3NOYW1lICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5jb250ZW50LmNsYXNzTmFtZSA9PSB1bml0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gobmVpZ2hib3JpbmdzQ2VsbFtpXS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDQuNC90LTQtdC60YEg0LrQvtGA0L7QstGLINC/0YDQuCDQtdC1INGB0YrQtdC00LDQvdC40LhcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW5kZXhGcm9tT2JqZWN0c09uTWFwKHVuaXQpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMub2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9PSB1bml0LnBvc2l0aW9uUm93XG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Db2wgPT0gdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4T2JqZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4vL01BUCBERUFUSCBNQU5BR0VcbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDQuNC90LTQtdC60YEg0LrQvtGA0L7QstGLINC/0YDQuCDQtdC1INGB0YrQtdC00LDQvdC40LhcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW5kZXhGcm9tRGllT2JqZWN0c09uTWFwKHVuaXQpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMuZGllT2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9PSB1bml0LnBvc2l0aW9uUm93XG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Db2wgPT0gdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4T2JqZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRGllVW5pdFRvRGllQXJyYXkodW5pdCkge1xuICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcC5wdXNoKHVuaXQpO1xuICAgIH1cblxuLy8gICAgQUxHT1JJVEhNUyBGSU5EIE5FSUdCT1JJTkdTIENFTExcblxuICAgIGdldE9uZUxldmVsQ2VsbHNJbmZvICh1bml0KSB7XG4gICAgICAgIHJldHVybiBvbmVMZXZlbENlbGxzSW5mby5nZXQodGhpcywgdW5pdCk7XG4gICAgfVxuICAgIGdldE11bHRpTGV2ZWxDZWxsc0luZm8gKHVuaXQsIGluZGV4T2JqZWN0LCBzdGVwcykge1xuICAgICAgICByZXR1cm4gbXVsdGlMZXZlbENlbGxzSW5mby5nZXQodGhpcywgdW5pdCwgaW5kZXhPYmplY3QsIHN0ZXBzKTtcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBNYXAgZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9zZXR0aW5nJztcblxuLyoqXG4gKiDQmNCz0YDQvtCy0LDRjyDRgdGG0LXQvdCwXG4gKiBAcGFyYW0gc2V0dGluZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWdhbWVfX3BsYWluJyk7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChzZXR0aW5nKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCf0YDQvtC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0LrQsNGA0YLRgyDQuCDQt9Cw0L/QvtC70L3QuNC8INC10LUg0L7QsdGK0LXQutGC0LDQvNC4XG4gICAgICovXG4gICAgYnVpbGQgKCkge1xuXG4gICAgICAgIGlmICh0aGlzLm1hcC5pbml0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZW5lcmF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7RgtGA0LjRgdC+0LLQutCwINC30LDQv9C+0LvQvdC10L3QvdC+0Lkg0LrQsNGA0YLRi1xuICAgICAqL1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGxldCBtYXBIVE1MID0gJyc7XG5cblxuICAgICAgICAvLyDQn9C+0YHRgtGA0L7QuNC8INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1XG4gICAgICAgIGZvciAobGV0IHBvc2l0aW9uUm93ID0gMDsgcG9zaXRpb25Sb3cgPCB0aGlzLm1hcC5yb3c7IHBvc2l0aW9uUm93KyspIHtcbiAgICAgICAgICAgIG1hcEhUTUwgKz0gXCI8ZGl2IGNsYXNzPSdyb3cnPlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgcG9zaXRpb25Db2wgPSAwOyBwb3NpdGlvbkNvbCA8IHRoaXMubWFwLmNvbDsgcG9zaXRpb25Db2wrKykge1xuXG4gICAgICAgICAgICAgICAgLy8gREVWIE1PREVcbiAgICAgICAgICAgICAgICBsZXQgY2VsbENvb3JkaW5hdGUgPSBcIjxkaXYgY2xhc3M9J2NlbGxDb29yZGluYXRlJz5cIiArIHBvc2l0aW9uUm93ICsgXCIgOiBcIiArIHBvc2l0aW9uQ29sICsgXCI8L2Rpdj5cIjtcblxuICAgICAgICAgICAgICAgIG1hcEhUTUwgKz0gXCI8ZGl2IGNsYXNzPSdjZWxsJz5cIiArIGNlbGxDb29yZGluYXRlICsgXCIgXCIgKyB0aGlzLm1hcC5nZXRDZWxsKHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkuc2hvdygpICsgXCI8L2Rpdj5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcEhUTUwgKz0gXCI8L2Rpdj5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNC8INGB0L7QsdGA0LDQvdC90YPRjiBIVE1MINC60LDRgNGC0YMg0LIgRE9NXG4gICAgICAgIHRoaXMucGxhaW4uaW5uZXJIVE1MID0gbWFwSFRNTDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQlNC10LnRgdGC0LLQuNGPINCy0YHQtdGFINC+0LHRitC10LrRgtC+0LIg0L3QsCDQutCw0YDRgtC1XG4gICAgICovXG4gICAgYWN0aW9uT25NYXAgKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hcC5vYmplY3RzT25NYXApO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLm1hcC5vYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLmFjdGlvbih0aGlzLm1hcCwgaW5kZXhPYmplY3QpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRpZU1hbmFnZXIgKCkge1xuICAgICAgICBpZiAodGhpcy5tYXAuZGllT2JqZWN0c09uTWFwLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLm1hcC5kaWVPYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5hY3Rpb24odGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0LvQuCDQtdGJ0LUg0L7QsdGK0LXQutGC0Ysg0LIg0LzQsNGB0YHQuNCy0LUg0LTQu9GPINGB0YPRidC10LLRgdGC0LLQvtCy0LDQvdC40Y8g0LjQs9GA0YtcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGlzc2V0T2JqZWN0T25NYXAgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaXNzZXRPYmplY3RPbk1hcCgpO1xuICAgIH07XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJcbi8vIFBST0Rcbi8qZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVDb250YWluZXJJRDogJ2ItZ2FtZScsXG4gICAgbWFwU2l6ZToge1xuICAgICAgICByb3c6IDksXG4gICAgICAgIGNvbDogMjNcbiAgICB9LFxuICAgIG1hcE9iamVjdHM6IHtcbiAgICAgICAgZ3Jhc3M6IHtcbiAgICAgICAgICAgIG1pbjogOTAsXG4gICAgICAgICAgICBtYXg6IDE3NVxuICAgICAgICB9LFxuICAgICAgICBjb3dzOiB7XG4gICAgICAgICAgICBtaW46IDE1LFxuICAgICAgICAgICAgbWF4OiAyMFxuICAgICAgICB9LFxuICAgICAgICB0aWdlcnM6IHtcbiAgICAgICAgICAgIG1pbjogMyxcbiAgICAgICAgICAgIG1heDogNlxuICAgICAgICB9LFxuICAgICAgICBncm91bmQ6IHtcbiAgICAgICAgICAgIG1pbjogbnVsbCxcbiAgICAgICAgICAgIG1heDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkZXZNb2RlOiBmYWxzZSxcbiAgICB0aW1lUmVuZGVyOiA1MDBcbn07Ki9cblxuLy8gREVWXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZUNvbnRhaW5lcklEOiAnYi1nYW1lJyxcbiAgICBtYXBTaXplOiB7XG4gICAgICAgIHJvdzogNixcbiAgICAgICAgY29sOiA2XG4gICAgfSxcbiAgICBtYXBPYmplY3RzOiB7XG4gICAgICAgIGdyYXNzOiB7XG4gICAgICAgICAgICBtaW46IDcsXG4gICAgICAgICAgICBtYXg6IDEzXG4gICAgICAgIH0sXG4gICAgICAgIGNvd3M6IHtcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogNVxuICAgICAgICB9LFxuICAgICAgICB0aWdlcnM6IHtcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogNFxuICAgICAgICB9LFxuICAgICAgICBncm91bmQ6IHtcbiAgICAgICAgICAgIG1pbjogbnVsbCxcbiAgICAgICAgICAgIG1heDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkZXZNb2RlOiBmYWxzZSxcbiAgICB0aW1lUmVuZGVyOiAxNTMwXG59O1xuXG4iLCIvLyBBVURJTyBJTiBHQU1FXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU291bmRzIHtcbiAgICBjb25zdHJ1Y3RvcihmaWxlKSB7XG4gICAgICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oZmlsZSk7ICAgXG4gICAgfVxuXG4gICAgcGxheSAoKSB7XG4gICAgICAgIHRoaXMuc291bmQucGxheSgpO1xuICAgIH07XG5cbiAgICAvLyDQpNGD0L3QutGG0LjRjyBzdG9wINC00LvRjyBBdWRpbzpcbiAgICBzdG9wICgpIHtcbiAgICAgICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xuICAgICAgICB0aGlzLnNvdW5kLmN1cnJlbnRUaW1lID0gMC4wO1xuICAgIH07XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIvLyDQktGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdGL0LUg0YTRg9C90LrRhtC40Lgg0LTQu9GPINC40LPRgNGLXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNC+0YnRj9C10YIg0YHQu9GD0YfQsNC50L3QvtC1INGH0LjRgdC70L4g0LIg0LTQuNCw0L/QsNC30L7QvdC1IE1pbi9NYXhcbiAgICAgKiBAcGFyYW0gbWluXG4gICAgICogQHBhcmFtIG1heFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJhbmRvbUludGVnZXI6IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cbn07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCBHcmFzc0FsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS9ncmFzc0FsZ29yaXRobSc7XG5pbXBvcnQgQ293c0FsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS9jb3dzQWxnb3JpdGhtJztcbmltcG9ydCBUaWdlcnNBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vdGlnZXJzQWxnb3JpdGhtJztcbmltcG9ydCBHcm91bmRBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZ3JvdW5kQWxnb3JpdGhtJztcbmltcG9ydCBHYW1lU291bmRzIGZyb20gJy4vc291bmQnO1xuXG4vKipcbiAqINCe0YHQvdC+0LLQvdC+0Lkg0J/RgNC+0YLQvtGC0LjQvyDQvtCx0YrQtdC60YLQsCDQvdCwINC60LDRgNGC0LVcbiAqIEBwYXJhbSBjbGFzc05hbWVcbiAqIEBwYXJhbSBpZFxuICogQHBhcmFtIG9ialBvc2l0aW9uUm93XG4gKiBAcGFyYW0gb2JqUG9zaXRpb25Db2xcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml0IGV4dGVuZHMgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICBzdXBlcihwYXJhbSk7XG5cbiAgICAgICAgdGhpcy5mb29kVHlwZSA9IHRoaXMuZ2V0Rm9vZFR5cGUoKTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuZW5lbXkgPSAocGFyYW0uY2xhc3NOYW1lID09ICdjb3dzJyA/ICd0aWdlcnMnIDogbnVsbCk7XG5cbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24gPSB7XG4gICAgICAgICAgICBpc0VhdDogZmFsc2UsXG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBudWxsLFxuICAgICAgICAgICAgaW5kZXhPYmplY3Q6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNvdW5kRWF0ID0gbmV3IEdhbWVTb3VuZHMoXCJhdWRpby9lYXRfXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiLm1wM1wiKTtcblxuICAgICAgICAvLyDQktGL0LHQtdGA0LjQvCDQsNC70LPQvtGA0LjRgtC8INC/0L7QstC10LTQtdC90LjRjyDQtNC70Y8g0L7QsdGK0LXQutGC0LBcbiAgICAgICAgdGhpcy5hbGdvcml0bXMgPSB0aGlzLnNlbGVjdEFsZ29yaXRobShwYXJhbS5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLRi9Cy0L7QtCBIVE1MINC+0LHRitC10LrRgtCwXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzaG93KCkge1xuICAgICAgICBsZXQgdW5pdEhlYWx0aCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NOYW1lID09ICdjb3dzJyB8fCB0aGlzLmNsYXNzTmFtZSA9PSAndGlnZXJzJykge1xuICAgICAgICAgICAgbGV0IGNsYXNzSGVhbHRoQ29sb3IgPSB0aGlzLmdldENsYXNzSGVhbHRoQ29sb3IodGhpcy5oZWFsdGgpO1xuXG4gICAgICAgICAgICB1bml0SGVhbHRoICs9IFwiPGRpdiBjbGFzcz0nYi11bml0X19oZWFsdGgnPjxkaXYgY2xhc3M9J2ItaGVhbHRfX2luZGljYXRvciBcIiArIGNsYXNzSGVhbHRoQ29sb3IgKyBcIicgc3R5bGU9J3dpZHRoOiBcIiArIHRoaXMuaGVhbHRoICsgXCIlOyc+PC9kaXY+PC9kaXY+XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdiLXVuaXQgXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiIHN0YW5kX3N0aWxsJz5cIiArIHVuaXRIZWFsdGggKyBcIjwvZGl2PlwiO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGG0LLQtdGCKNC60LvQsNGB0YEpINC20LjQt9C90LggdW5pdFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2xhc3NIZWFsdGhDb2xvcih2YWx1ZSkge1xuXG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gOTAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtZ29vZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gNzUgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDkwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1hYm92ZS1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSA1MCAmJiBwYXJzZUludCh2YWx1ZSkgPD0gNzUpIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDI1ICYmIHBhcnNlSW50KHZhbHVlKSA8PSA1MCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYmVsb3ctYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gMCAmJiBwYXJzZUludCh2YWx1ZSkgPD0gMjUpIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWxvd1wiO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQoNCw0LfQvdGL0LUg0LTQtdC50YHRgtCy0LjRjyDQvtCx0YrQtdC60YLQsFxuICAgICAqL1xuICAgIGFjdGlvbihtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuYWxnb3JpdG1zLmFjdCh0aGlzLCBtYXAsIGluZGV4T2JqZWN0KTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRhtC10LvRjCDRgNCw0LTQuCDQutC+0YLQvtGA0L7QuSDQttC40LLQtdGCIFVuaXQgOilcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRGb29kVHlwZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY293cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdncmFzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aWdlcnMnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnY293cyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JLQtdGA0L3QtdGCINC00LvRjyDQvtCx0YrQtdC60YLQsCDQtdCz0L4g0LDQu9Cz0L7RgNC40YLQvCDQv9C+0LLQtdC00LXQvdC40Y8g0LIg0LjQs9GA0LVcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzZWxlY3RBbGdvcml0aG0oaWQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDAgLSBncmFzc1xuICAgICAgICAgKiAxIC0gY293c1xuICAgICAgICAgKiAyIC0gdGlnZXJzXG4gICAgICAgICAqIDMgLSBncm91bmRcbiAgICAgICAgICogNCAtIGRlYXRoXG4gICAgICAgICAqL1xuXG4gICAgICAgIHN3aXRjaCAocGFyc2VJbnQoaWQpKSB7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyYXNzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb3dzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUaWdlcnNBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VuZEFsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4vLyDQodGK0LXQtNC10L1cbiAgICBpc0VhdGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQ7XG4gICAgfTtcblxuLy8g0KHRitC10LTQtdC9XG4gICAgZWF0ZW4odW5pdCwgZm9vZEluZGV4KSB7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0ID0gZm9vZEluZGV4O1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5jbGFzc05hbWUgPSB1bml0LmNsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaWQgPSB1bml0LmlkO1xuICAgIH07XG5cbi8vIFJFU0VUINCh0YrQtdC00LXQvVxuICAgIHJlc2V0RWF0ZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvblJvdyA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3QgPSBudWxsO1xuICAgIH07XG5cbiAgICBhZGRIZWFsdGgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggKz0gcGFyc2VJbnQodmFsdWUpO1xuICAgIH07XG5cbiAgICBzdWJIZWFsdGgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gcGFyc2VJbnQodmFsdWUpO1xuICAgIH07XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIl0sInNvdXJjZVJvb3QiOiIifQ==