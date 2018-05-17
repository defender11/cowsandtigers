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

var _constant = __webpack_require__(/*! ../constant */ "./constant.js");

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
            if (LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
                console.log("TIGER: ", unit);
            }
            // Воозвратить объект с соседними ячейками
            // let neighboringsCellInformation = map.getMultiLevelCellsInfo(unit, indexObject, this.distanceView);
            var neighboringsCellInformation = map.getOneLevelCellsInfo(unit);

            if (LOCAL_DEBUG || _constant2.default.GLOBAL_DEBUG) {
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
    GLOBAL_DEBUG: false
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

                $.lNotify('add', 'Игра загружена.', 'success');
                $.lNotify('add', "Нажмите 'Начать игру'.", 'success');

                // return false;
                var self = this;
                var loop = void 0;

                if (!this.devMode) {

                    $.lNotify('add', 'Игра в обычном режиме.', 'success');

                    this.btnStart.addEventListener('click', function () {

                        $.lNotify('add', 'Игра запущена.', 'success');
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

                        $.lNotify('add', 'Игра остановлена.', 'success');
                    });
                } else {
                    if (scene.issetObjectOnMap()) {
                        $.lNotify('add', 'Игра в режиме разработчика.', 'success');

                        scene.dieManager();
                        scene.actionOnMap();
                        scene.render();
                    } else {
                        $.lNotify('add', 'Конец игры.', 'success');
                        self.gameOver();
                    }
                }
            }
        }
    }, {
        key: 'gameOver',
        value: function gameOver() {
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


var _game = __webpack_require__(/*! ./game */ "./game.js");

var _game2 = _interopRequireDefault(_game);

var _setting = __webpack_require__(/*! ./setting */ "./setting.js");

var _setting2 = _interopRequireDefault(_setting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// После загрузки документа запустим игру
$(function () {
    $.lNotify({
        animation: 'slide',
        position: 'bottomRight'
    });

    var game = new _game2.default(_setting2.default);

    game.run();
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vYWxnb3JpdGhtRmluZE11bHRpTGV2ZWxOZWlnaGJvcmluZ3NDZWxsSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vYWxnb3JpdGhtRmluZE9uZUxldmVsTmVpZ2hib3JpbmdzQ2VsbEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2Nvd3NBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2RlYXRoQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncmFzc0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZ3JvdW5kQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi90b29scy5qcyIsIndlYnBhY2s6Ly8vLi91bml0LmpzIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsImFkZEhlYWx0aFZhbHVlIiwic3ViSGVhbHRoVmFsdWUiLCJ1bml0IiwibWFwIiwiaW5kZXhPYmplY3QiLCJuZWlnaGJvcmluZ3NDZWxsIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQiLCJnZXRPbmVMZXZlbENlbGxzSW5mbyIsImZpbHRlckNlbGxCeVR5cGUiLCJmb29kVHlwZSIsImVuZW15IiwibWFwUm93IiwibWFwQ29sIiwiTE9DQUxfREVCVUciLCJnZXQiLCJzdGVwcyIsIkdMT0JBTF9ERUJVRyIsImNvbnNvbGUiLCJsb2ciLCJtYXBEYXRhIiwibmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uIiwicm93IiwiY29sIiwic3RlcCIsImdldE5laWdoYm9yaW5nc0NlbGwiLCJsZW5ndGgiLCJwYXJhbSIsImNlbGxzSW5mbyIsInB1c2giLCJuZWlnaGJvcmluZ3NDZWxsSW5mbyIsInVuaXRTaWRlcyIsImdldFVuaXRBbmdsZVBvaW50cyIsInBvc2l0aW9uUm93IiwicG9zaXRpb25Db2wiLCJzaWRlIiwiaXNzZXQiLCJuYW1lIiwidW5pdFNpZGUiLCJ1bml0UG9zaXRpb25Sb3ciLCJ1bml0UG9zaXRpb25Db2wiLCJwYXJzZUludCIsImlkIiwibGVmdFRvcF9UT19yaWdodFRvcCIsImdldFRvcFNpZGVOZWlnaGJvcmluZ3NDZWxsIiwidW5kZWZpbmVkIiwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b20iLCJnZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20iLCJnZXRCb3R0b21TaWRlTmVpZ2hib3JpbmdzQ2VsbCIsImxlZnRCb3R0b21fVE9fbGVmdFRvcCIsImdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInN0YXJ0Q2VsbFJvdyIsImFuZ2xlU3RhcnQiLCJlbmRDZWxsQ29sIiwiYW5nbGVFbmQiLCJzdGFydENlbGxDb2wiLCJ1bml0UG9zaXRpb25DZWxsIiwic2VsZWN0UG9zaXRpb25DZWxsIiwiZ2V0Q2VsbCIsImVuZENlbGxSb3ciLCJ1bml0QW5nbGVzIiwibGVmdFRvcCIsInJpZ2h0VG9wIiwicmlnaHRCb3R0b20iLCJsZWZ0Qm90dG9tIiwiZ2V0TGVmdFRvcEFuZ2xlUG9pbnQiLCJ0b1JpZ2h0VG9wIiwiZ2V0UmlnaHRUb3BBbmdsZVBvaW50IiwidG9SaWdodEJvdHRvbSIsImdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludCIsInRvTGVmdEJvdHRvbSIsImdldExlZnRCb3R0b21BbmdsZVBvaW50IiwidG9MZWZ0VG9wIiwibmV3UG9zaXRpb25Sb3ciLCJuZXdQb3NpdGlvbkNvbCIsImFuZ2xlSXNzZXQiLCJpc1VuaXRPdXRPZkJvcmRlciIsIm5ld1Bvc2l0aW9uIiwiZmluZE5ld0FuZ2VsIiwiaXNGaW5kIiwic3RwIiwibmV3QW5nZWwiLCJjaGVja05laWdoYm9yaW5nc0NlbGxCeURpcmVjdGlvbnMiLCJkaXJlY3Rpb25MZWZ0IiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25MZWZ0IiwiZGlyZWN0aW9uVG9wIiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25Ub3AiLCJkaXJlY3Rpb25SaWdodCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uUmlnaHQiLCJkaXJlY3Rpb25Cb3R0b20iLCJjaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbSIsInRyeU5ld1Bvc2l0aW9uQ29sIiwiZmluZCIsInRyeU5ld1Bvc2l0aW9uUm93IiwiY2VsbHMiLCJib3JkZXIiLCJ0b3AiLCJ0b3BSaWdodCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImRpcmVjdGlvbiIsImV4aXN0IiwiY29udGVudCIsIkNvd3NBbGdvcml0aG0iLCJkaXN0YW5jZVZpZXciLCJjZWxsUmFuZG9tUm93Q29sIiwicmFuZG9tSW50ZWdlciIsIm9sZFVuaXQiLCJ1bml0UGFyYW0iLCJjbGFzc05hbWUiLCJvYmpQb3NpdGlvblJvdyIsIm9ialBvc2l0aW9uQ29sIiwic2V0Q2VsbCIsInVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcCIsInN1YkhlYWx0aCIsImRpZVVuaXRUeXBlIiwiZGllVW5pdElkIiwiZGllVW5pdCIsImFkZERpZVVuaXRUb0RpZUFycmF5IiwiaGVhbHRoIiwiYWRkSGVhbHRoIiwiRGVhdGhBbGdvcml0aG0iLCJkZWF0aFVuaXQiLCJ1bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQiLCJ1bml0UmVzdXJlY3Rpb25JbnRlcnZhbCIsImdldE5ld1Jvd0NvbFBvc2l0aW9uIiwibmV3VW5pdCIsImRpZU9iamVjdHNPbk1hcEluZGV4IiwiZ2V0SW5kZXhGcm9tRGllT2JqZWN0c09uTWFwIiwiZW50aXR5UGFyYW0iLCJhZGRUb09iamVjdHNPbk1hcCIsInJlbW92ZVVuaXRGcm9tRGllT2JqZWN0c09uTWFwIiwiR3Jhc3NBbGdvcml0aG0iLCJHcm91bmRBbGdvcml0aG0iLCJUaWdlcnNBbGdvcml0aG0iLCJmb29kSW5kZXgiLCJnZXRJbmRleEZyb21PYmplY3RzT25NYXAiLCJlYXRlbiIsInJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwIiwiaXNFYXRlbiIsImZvb2RJbmZvcm1hdGlvbiIsInNldEluZGV4T2JqZWN0IiwicmVzZXRFYXRlbiIsIkRpZVVuaXQiLCJhbGdvcml0bXMiLCJwcm90b3R5cGUiLCJhY3Rpb24iLCJhY3QiLCJ1cGRhdGVSb3dDb2wiLCJFbnRpdHkiLCJHYW1lIiwic2V0dGluZyIsImRldk1vZGUiLCJ0aW1lUmVuZGVyIiwiYnRuU3RhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnRuUGF1c2UiLCJzY2VuZSIsImJ1aWxkIiwiJCIsImxOb3RpZnkiLCJzZWxmIiwibG9vcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRJbnRlcnZhbCIsImNhbGxiYWNrIiwiaXNzZXRPYmplY3RPbk1hcCIsImRpZU1hbmFnZXIiLCJhY3Rpb25Pbk1hcCIsInJlbmRlciIsImdhbWVPdmVyIiwiY2xlYXJJbnRlcnZhbCIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiYW5pbWF0aW9uIiwicG9zaXRpb24iLCJnYW1lIiwicnVuIiwiTWFwIiwibWFwT2JqZWN0cyIsIm9iamVjdHNPbk1hcCIsIkFycmF5IiwiZGllT2JqZWN0c09uTWFwIiwibWFwU2l6ZSIsIm9iaklEIiwib2JqZWN0TmFtZSIsIm9iak1pbiIsIm1pbiIsIm9iak1heCIsIm1heCIsIm9iakNvdW50T25NYXAiLCJpIiwibWFwUm93Q29sIiwiZ2V0UmFuZG9tUm93Q29sQ29vcmQiLCJ1bml0U2V0dGluZyIsInRyeU5ld0dlbmVyYXRlIiwib2JqZWN0U2V0dGluZyIsImNvdW50IiwiY291bnRSb3ciLCJjb3VudENvbCIsImRhdGEiLCJnZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJjZWxsIiwiaXNzZXRSb3V0ZSIsInRyeVJvdXRlIiwibWluQ2VsbCIsIm1heENlbGwiLCJleGNsdWRlVmFsdWUiLCJ2YWx1ZSIsIm5ld1Bvc2l0aW9uUm93Q29sIiwic3BsaWNlIiwidW5pdFR5cGUiLCJhcnIiLCJTY2VuZSIsInBsYWluIiwiaW5pdCIsImdlbmVyYXRlIiwibWFwSFRNTCIsImNlbGxDb29yZGluYXRlIiwic2hvdyIsImlubmVySFRNTCIsImdhbWVDb250YWluZXJJRCIsImdyYXNzIiwiY293cyIsInRpZ2VycyIsImdyb3VuZCIsIkdhbWVTb3VuZHMiLCJmaWxlIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiVW5pdCIsImdldEZvb2RUeXBlIiwiaXNFYXQiLCJzb3VuZEVhdCIsInNlbGVjdEFsZ29yaXRobSIsInVuaXRIZWFsdGgiLCJjbGFzc0hlYWx0aENvbG9yIiwiZ2V0Q2xhc3NIZWFsdGhDb2xvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEw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QXFCL0IsU0FBckIsR0FBaUM5RyxLQUFLOEcsU0FBdEM7QUFDQSxpQkFBSytCLGVBQUwsQ0FBcUJwRyxFQUFyQixHQUEwQnpDLEtBQUt5QyxFQUEvQjtBQUNIOzs7OztBQUVMO3FDQUNpQjtBQUNULG1CQUFPLEtBQUtvRyxlQUFMLENBQXFCcUcsS0FBckIsR0FBNkIsS0FBcEM7QUFDQSxpQkFBS3JHLGVBQUwsQ0FBcUI3RyxXQUFyQixHQUFtQyxJQUFuQztBQUNBLGlCQUFLNkcsZUFBTCxDQUFxQjVHLFdBQXJCLEdBQW1DLElBQW5DO0FBQ0EsaUJBQUs0RyxlQUFMLENBQXFCM0ksV0FBckIsR0FBbUMsSUFBbkM7QUFDSDs7O2tDQUVTa04sSyxFQUFPO0FBQ2IsaUJBQUs1RixNQUFMLElBQWVoRixTQUFTNEssS0FBVCxDQUFmO0FBQ0g7OztrQ0FFU0EsSyxFQUFPO0FBQ2IsaUJBQUs1RixNQUFMLElBQWVoRixTQUFTNEssS0FBVCxDQUFmO0FBQ0g7Ozs7OztBQUlMOzs7a0JBM0pxQjRCLEkiLCJmaWxlIjoiY293c2FuZHRpZ2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHRvb2xzIGZyb20gXCIuLi90b29sc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkZEhlYWx0aFZhbHVlID0gNTtcbiAgICAgICAgdGhpcy5zdWJIZWFsdGhWYWx1ZSA9IDM7XG4gICAgfVxuXG4gICAgZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kO1xuXG4gICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0YHQvtGB0LXQtNC90LjQuCDQutC70LXRgtC60LhcbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbCA9IG1hcC5nZXRPbmVMZXZlbENlbGxzSW5mbyh1bml0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0LXQtNGDXG4gICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICovXG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXQuZm9vZFR5cGUpO1xuXG4gICAgICAgIGlmICh1bml0LmVuZW15ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBUT0RPINGDINGC0LjQs9GA0LAg0L3QtdGCINCy0YDQsNCz0L7QslxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDQstGA0LDQs9C+0LIo0YLQuNCz0YDQvtCyKVxuICAgICAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgICAgICogKi9cbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXQuZW5lbXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINGB0LLQvtCx0L7QtNC90YvQtSDRj9GH0LXQudC60Lgg0LrRg9C00LAg0LzQvtC20L3QviDQv9C10YDQtdC80LXRgdGC0LjRgtGM0YHRj1xuICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAqL1xuICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIFwiZ3JvdW5kXCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsOiBuZWlnaGJvcmluZ3NDZWxsLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXM6IG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBjb25zdGFudCBmcm9tICcuLy4uL2NvbnN0YW50J1xuXG4vLyBSb3V0ZVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1hcFJvdzogMCxcbiAgICBtYXBDb2w6IDAsXG4gICAgTE9DQUxfREVCVUc6IGZhbHNlLFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAobWFwLCB1bml0LCBpbmRleE9iamVjdCwgc3RlcHMpIHtcblxuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hcC5tYXBEYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVuaXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVuaXQpO1xuXG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24gPSBbXTtcblxuICAgICAgICB0aGlzLm1hcFJvdyA9IG1hcC5yb3c7XG4gICAgICAgIHRoaXMubWFwQ29sID0gbWFwLmNvbDtcblxuICAgICAgICAvLyDQv9C+0LvRg9GH0LjQvCDQuNC90YTQviDQviDRh9C10YLRi9GA0LXRhSDRgdGC0L7RgNC+0L3QsNGFINC90LAg0LTQuNGB0YLQsNC90YbQuNC4INC/0L7Qu9GD0YfQtdC90L3QvtC5INC+0YIgVW5pdFxuICAgICAgICBmb3IgKGxldCBzdGVwID0gMTsgc3RlcCA8IHN0ZXBzOyBzdGVwKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LSBzdGVwOiAnICsgc3RlcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd8LSBzdGVwOiAnICsgc3RlcCk7XG5cbiAgICAgICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsID0gdGhpcy5nZXROZWlnaGJvcmluZ3NDZWxsKHN0ZXAsIHVuaXQsIG1hcCk7XG5cbiAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RgNCw0LLQuNC70YzQvdC+INC90LDQt9Cy0LDRgtGMXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzSW5mbzogbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vINCS0L7RgiDQv9GA0Y/QvCDQt9C00LXRgdGMINC/0L7Qu9GD0YfQuNC8XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uLnB1c2gocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbjtcbiAgICB9LFxuXG4gICAgLy8g0J/QvtC70YPRh9C40Lwg0LjQvdGE0L4g0YHQvtGB0LXQtNC90LjRhSDRj9GH0LXQtdC6INC90LAg0LrQsNC20LTQvtC5INC40YLRgtC10YDQsNGG0LjQuFxuICAgIGdldE5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChzdGVwLCB1bml0LCBtYXApIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgIC8vICAgICB1bml0LnBvc2l0aW9uUm93ID0gMDtcbiAgICAgICAgLy8gICAgIHVuaXQucG9zaXRpb25Db2wgPSAyO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8g0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YPQs9C70L7QsiBVbml0XG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAgICBsZXQgdW5pdFNpZGVzID0gdGhpcy5nZXRVbml0QW5nbGVQb2ludHMoc3RlcCwgdW5pdC5wb3NpdGlvblJvdywgdW5pdC5wb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLSB1bml0U2lkZXNcIiwgdW5pdFNpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCd0YPQttC90L4g0L/QvtC70YPRh9C40YLRjCDRj9GH0LXQudC60Lgg0L3QsCDQvtGB0L3QvtCy0LUg0L3QsNC50LTQtdC90YvRhSDRgdGC0L7RgNC+0L0hISFcblxuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviA0LdC10Lwg0YHRgtC+0YDQvtC90LDQvCDQuCDQv9C+0LvRg9GH0LjQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDRj9GH0LXQtdC6LCDQt9Cw0LTQtdC50YHRgtCy0YPQtdC8INC80LDRgdGB0LjQsiDRgSDQutCw0YDRgtC+0Lkg0LjQs9GA0YtcbiAgICAgICAgZm9yIChsZXQgc2lkZSA9IDA7IHNpZGUgPCB1bml0U2lkZXMubGVuZ3RoOyBzaWRlKyspIHtcblxuICAgICAgICAgICAgaWYgKHVuaXRTaWRlc1tzaWRlXS5pc3NldCkge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpZGUnLCBzaWRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2lkZV9uYW1lJywgdW5pdFNpZGVzW3NpZGVdLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tLSBTVEFSVCBzaWRlOiBcIiArIHVuaXRTaWRlc1tzaWRlXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0tIHNpZGU6IFwiLCB1bml0U2lkZXNbc2lkZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gc2lkZTogXCIsIHVuaXRTaWRlc1tzaWRlXSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXRTaWRlOiB1bml0U2lkZXNbc2lkZV0sXG4gICAgICAgICAgICAgICAgICAgIHVuaXRQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgdW5pdFBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtOiAnLCBwYXJhbSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHVuaXRTaWRlc1tzaWRlXS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdFRvcF9UT19yaWdodFRvcFxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdFRvcF9UT19yaWdodFRvcCA9IHRoaXMuZ2V0VG9wU2lkZU5laWdoYm9yaW5nc0NlbGwocGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnRUb3BfVE9fcmlnaHRUb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gobGVmdFRvcF9UT19yaWdodFRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHRUb3BfVE9fcmlnaHRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHRUb3BfVE9fcmlnaHRCb3R0b20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocmlnaHRUb3BfVE9fcmlnaHRCb3R0b20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20gPSB0aGlzLmdldEJvdHRvbVNpZGVOZWlnaGJvcmluZ3NDZWxsKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdEJvdHRvbV9UT19sZWZ0VG9wXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0Qm90dG9tX1RPX2xlZnRUb3AgPSB0aGlzLmdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdEJvdHRvbV9UT19sZWZ0VG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKGxlZnRCb3R0b21fVE9fbGVmdFRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gRU5EIHNpZGU6IFwiICsgdW5pdFNpZGVzW3NpZGVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuXG4gICAgLy8gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qINCf0L7Qu9GD0YfQuNC8INGB0L7QtNC10YDQttC40LzQvtC1INGP0YfQtdC10Log0L/QviDRgdGC0L7RgNC+0L3QsNC8ICovXG4gICAgZ2V0VG9wU2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcbiAgICAgICAgbGV0IGVuZENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHBhcmFtLnVuaXRQb3NpdGlvblJvdyArICcnICsgcGFyYW0udW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RQb3NpdGlvbkNlbGwgPSBwYXJzZUludChzdGFydENlbGxSb3cgKyAnJyArIHN0YXJ0Q2VsbENvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UG9zaXRpb25DZWxsICE9PSBzZWxlY3RQb3NpdGlvbkNlbGwpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydENlbGxDb2wrKztcbiAgICAgICAgfSB3aGlsZSAoc3RhcnRDZWxsQ29sIDwgZW5kQ2VsbENvbCk7XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0UmlnaHR0U2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvbkNvbDtcbiAgICAgICAgbGV0IGVuZENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvblJvdztcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHBhcmFtLnVuaXRQb3NpdGlvblJvdyArICcnICsgcGFyYW0udW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RQb3NpdGlvbkNlbGwgPSBwYXJzZUludChzdGFydENlbGxSb3cgKyAnJyArIHN0YXJ0Q2VsbENvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UG9zaXRpb25DZWxsICE9PSBzZWxlY3RQb3NpdGlvbkNlbGwpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydENlbGxSb3crKztcbiAgICAgICAgfSB3aGlsZSAoc3RhcnRDZWxsUm93IDwgZW5kQ2VsbFJvdyk7XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0Qm90dG9tU2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcbiAgICAgICAgbGV0IGVuZENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHBhcmFtLnVuaXRQb3NpdGlvblJvdyArICcnICsgcGFyYW0udW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RQb3NpdGlvbkNlbGwgPSBwYXJzZUludChzdGFydENlbGxSb3cgKyAnJyArIHN0YXJ0Q2VsbENvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UG9zaXRpb25DZWxsICE9PSBzZWxlY3RQb3NpdGlvbkNlbGwpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydENlbGxDb2wtLTtcbiAgICAgICAgfSB3aGlsZSAoc3RhcnRDZWxsQ29sID4gZW5kQ2VsbENvbCk7XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0TGVmdFNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG4gICAgICAgIGxldCBlbmRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsUm93LS07XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbFJvdyA+IGVuZENlbGxSb3cpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0LrQvtC+0YDQtNC40L3QsNGC0YsgNC3RhSDRgdC+0YLQvtGA0L7QvSDQvdCwINC+0YHQvdC+0LLQtSBVbml0XG4gICAgICogQHBhcmFtIHN0ZXBcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Sb3dcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Db2xcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0VW5pdEFuZ2xlUG9pbnRzOiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB1bml0QW5nbGVzID0gW107XG5cbiAgICAgICAgbGV0IGxlZnRUb3AsXG4gICAgICAgICAgICByaWdodFRvcCxcbiAgICAgICAgICAgIHJpZ2h0Qm90dG9tLFxuICAgICAgICAgICAgbGVmdEJvdHRvbTtcblxuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LSBnZXRVbml0QW5nbGVQb2ludHM6ICcsIHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgbGVmdFRvcFxuICAgICAgICBsZWZ0VG9wID0gdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIGxlZnRUb3A6ICcsIGxlZnRUb3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0VG9wLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b1JpZ2h0VG9wID0gdGhpcy5nZXRSaWdodFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRvUmlnaHRUb3AuaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0VG9wID0ge3Bvc2l0aW9uUm93OiB0b1JpZ2h0VG9wLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogdG9SaWdodFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRUb3AgPSB7cG9zaXRpb25Sb3c6IGxlZnRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiBsZWZ0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIGxlZnRUb3BcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxlZnRUb3BfVE9fcmlnaHRUb3BcIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IGxlZnRUb3AucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogbGVmdFRvcC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZUVuZDogdG9SaWdodFRvcCxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IGxlZnRUb3AuaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIHJpZ2h0VG9wXG4gICAgICAgIHJpZ2h0VG9wID0gdGhpcy5nZXRSaWdodFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSByaWdodFRvcDogJywgcmlnaHRUb3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodFRvcC5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9SaWdodEJvdHRvbSA9IHRoaXMuZ2V0UmlnaHRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b1JpZ2h0Qm90dG9tLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodEJvdHRvbSA9IHtwb3NpdGlvblJvdzogdG9SaWdodEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvUmlnaHRCb3R0b20ucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0Qm90dG9tID0ge3Bvc2l0aW9uUm93OiByaWdodFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHJpZ2h0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0VG9wXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyaWdodFRvcF9UT19yaWdodEJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogcmlnaHRUb3AucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogcmlnaHRUb3AucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvUmlnaHRCb3R0b20sXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiByaWdodFRvcC5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgcmlnaHRCb3R0b21cbiAgICAgICAgcmlnaHRCb3R0b20gPSB0aGlzLmdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIHJpZ2h0Qm90dG9tOiAnLCByaWdodEJvdHRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0Qm90dG9tLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b0xlZnRCb3R0b20gPSB0aGlzLmdldExlZnRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b0xlZnRCb3R0b20uaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHRvTGVmdEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvTGVmdEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvTGVmdEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiByaWdodEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyByaWdodEJvdHRvbVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogcmlnaHRCb3R0b20ucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvTGVmdEJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IHJpZ2h0Qm90dG9tLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdFVCBsZWZ0Qm90dG9tXG4gICAgICAgIGxlZnRCb3R0b20gPSB0aGlzLmdldExlZnRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbGVmdEJvdHRvbTogJywgbGVmdEJvdHRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnRCb3R0b20uaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvTGVmdFRvcCA9IHRoaXMuZ2V0TGVmdFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRvTGVmdFRvcC5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvTGVmdFRvcCA9IHtwb3NpdGlvblJvdzogdG9MZWZ0VG9wLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogdG9MZWZ0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0VG9wID0ge3Bvc2l0aW9uUm93OiBsZWZ0Qm90dG9tLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogbGVmdEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyBsZWZ0Qm90dG9tXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsZWZ0Qm90dG9tX1RPX2xlZnRUb3BcIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IGxlZnRCb3R0b20ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogbGVmdEJvdHRvbS5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZUVuZDogdG9MZWZ0VG9wLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogbGVmdEJvdHRvbS5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5pdEFuZ2xlcztcbiAgICB9LFxuXG4gICAgZ2V0TGVmdFRvcEFuZ2xlUG9pbnQ6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgLSBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCAtIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1VuaXRPdXRPZkJvcmRlcihuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBuZXdQb3NpdGlvbjogJywgbmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0UmlnaHRUb3BBbmdsZVBvaW50OiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdyA9IHBvc2l0aW9uUm93IC0gc3RlcDtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uQ29sID0gcG9zaXRpb25Db2wgKyBzdGVwO1xuICAgICAgICBsZXQgYW5nbGVJc3NldCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNVbml0T3V0T2ZCb3JkZXIobmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSkge1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5maW5kTmV3QW5nZWwoc3RlcCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb24ucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbi5wb3NpdGlvbkNvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGVJc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzc2V0OiBhbmdsZUlzc2V0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyArIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sICsgc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRMZWZ0Qm90dG9tQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyArIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sIC0gc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBpc1VuaXRPdXRPZkJvcmRlcjogZnVuY3Rpb24gKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAobmV3UG9zaXRpb25Sb3cgPCAwIHx8IG5ld1Bvc2l0aW9uUm93ID4gKHRoaXMubWFwUm93IC0gMSkpXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgKG5ld1Bvc2l0aW9uQ29sIDwgMCB8fCBuZXdQb3NpdGlvbkNvbCA+ICh0aGlzLm1hcENvbCAtIDEpKVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAobmV3UG9zaXRpb25Sb3cgPCAwIHx8IG5ld1Bvc2l0aW9uUm93ID4gKHRoaXMubWFwUm93IC0gMSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAobmV3UG9zaXRpb25Db2wgPCAwIHx8IG5ld1Bvc2l0aW9uQ29sID4gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vINCf0L7Qv9GA0L7QsdGD0LXQvCDQvdCw0LnRgtC4INC90L7QstGD0Y4g0Y/Rh9C10LnQutGDINC/0YDQuNCx0LDQstC40LIg0LfQvdCw0YfQtdC90LjQtSDRiNCw0LPQsFxuICAgIGZpbmROZXdBbmdlbDogZnVuY3Rpb24gKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDQv9C+INGI0LDQs9Cw0Lwg0LIgNC3RhSDQvdCw0L/RgNCw0LLQu9C10L3QuNGP0YUg0Lgg0L/QvtGB0LzQvtGC0YDQuNC8LCDQv9C+0L/QsNC00LDQtdC8INC70Lgg0LIg0L/RgNC10LTQtdC70Ysg0LrQsNGA0YLRi1xuICAgICAgICBmb3IgKGxldCBzdHAgPSAxOyBzdHAgPD0gc3RlcDsgc3RwKyspIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHN0cCA8PSBzdGVwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBuZXdBbmdlbCA9IHRoaXMuY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbmV3QW5nZWw6ICcsIG5ld0FuZ2VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdBbmdlbC5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QW5nZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNGaW5kOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjaGVja05laWdoYm9yaW5nc0NlbGxCeURpcmVjdGlvbnM6IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgZGlyZWN0aW9uTGVmdCA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25MZWZ0KHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbkxlZnQuaXNGaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkxlZnQ6IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbkxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkxlZnQ6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25Ub3AgPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvblRvcC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uVG9wOiB0cnVlO1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25Ub3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvblRvcDogZmFsc2U7XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpcmVjdGlvblJpZ2h0ID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0KHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvblJpZ2h0LmlzRmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25SaWdodDogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uUmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTE9DQUxfREVCVUcgfHwgY29uc3RhbnQuR0xPQkFMX0RFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvblJpZ2h0OiBmYWxzZTtcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGlyZWN0aW9uQm90dG9tID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbShzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25Cb3R0b20uaXNGaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkJvdHRvbTogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uQm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkxPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Cb3R0b206IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uQ29sIC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93ID49IDApICYmIChuZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApICYmICh0cnlOZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblRvcDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93IC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sID49IDApICYmIChuZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0OiBmdW5jdGlvbiAoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZmluZCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeU5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb25Db2wgKyBzdHA7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93ID49IDApICYmIChuZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApICYmICh0cnlOZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbTogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93ICsgc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sID49IDApICYmIChuZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfVxufSIsImltcG9ydCBjb25zdGFudCBmcm9tICcuLy4uL2NvbnN0YW50J1xuXG4vLyDQn9GA0L7QstC10YDQuNC8INGB0L7RgdC10LTQvdC40Lgg0LrQu9C10YLQutC4ICtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBMT0NBTF9ERUJVRzogZmFsc2UsXG4gICAgZ2V0KG1hcCwgdW5pdCkge1xuXG4gICAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgICBsZXQgdW5pdFBvc2l0aW9uUm93ID0gcGFyc2VJbnQodW5pdC5wb3NpdGlvblJvdyk7XG4gICAgICAgIGxldCB1bml0UG9zaXRpb25Db2wgPSBwYXJzZUludCh1bml0LnBvc2l0aW9uQ29sKTtcblxuICAgICAgICAvLyDQndC1INC30LDQsdGL0YLRjCDQv9GA0L4g0LPRgNCw0L3QuNGG0Ysg0LrQsNGA0YLRi1xuICAgICAgICBsZXQgYm9yZGVyID0ge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgdG9wUmlnaHQ6IG1hcC5jb2wsXG4gICAgICAgICAgICByaWdodDogbWFwLmNvbCxcbiAgICAgICAgICAgIHJpZ2h0Qm90dG9tOiBtYXAuY29sLFxuICAgICAgICAgICAgYm90dG9tOiBtYXAucm93LFxuICAgICAgICAgICAgbGVmdEJvdHRvbTogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBsZWZ0VG9wOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVE9QINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0LLQtdGA0YXRgyArXG4gICAgICAgIGlmICgodW5pdFBvc2l0aW9uUm93IC0gMSkgPj0gYm9yZGVyLnRvcCkge1xuICAgICAgICAgICAgY2VsbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICBleGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtYXAuZ2V0Q2VsbCh1bml0UG9zaXRpb25Sb3cgLSAxLCB1bml0UG9zaXRpb25Db2wpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPUF9SSUdIVCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstCy0LXRgNGF0YMt0LLQv9GA0LDQstC+ICtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3BcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIudG9wUmlnaHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd0b3BSaWdodCcsXG4gICAgICAgICAgICAgICAgZXhpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogbWFwLmdldENlbGwodW5pdFBvc2l0aW9uUm93IC0gMSwgdW5pdFBvc2l0aW9uQ29sICsgMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQv9GA0LDQstC+ICtcbiAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci5yaWdodCkge1xuICAgICAgICAgICAgY2VsbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGV4aXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1hcC5nZXRDZWxsKHVuaXRQb3NpdGlvblJvdywgdW5pdFBvc2l0aW9uQ29sICsgMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUklHSFRfQk9UVE9NINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0L/RgNCw0LLQvi3QstC90LjQt9GDICtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci5yaWdodEJvdHRvbVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGxzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0Qm90dG9tJyxcbiAgICAgICAgICAgICAgICBleGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtYXAuZ2V0Q2VsbCh1bml0UG9zaXRpb25Sb3cgKyAxLCB1bml0UG9zaXRpb25Db2wgKyAxKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0LLQvdC40LfRgyArXG4gICAgICAgIGlmICgodW5pdFBvc2l0aW9uUm93ICsgMSkgPCBib3JkZXIuYm90dG9tKSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIGV4aXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1hcC5nZXRDZWxsKHVuaXRQb3NpdGlvblJvdyArIDEsIHVuaXRQb3NpdGlvbkNvbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTEVGVF9CT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsC3QstC90LjQt9GDICtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgLSAxKSA+PSBib3JkZXIubGVmdEJvdHRvbVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGxzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnRCb3R0b20nLFxuICAgICAgICAgICAgICAgIGV4aXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1hcC5nZXRDZWxsKHVuaXRQb3NpdGlvblJvdyArIDEsIHVuaXRQb3NpdGlvbkNvbCAtIDEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExFRlQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsCArXG4gICAgICAgIGlmICgodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnQpIHtcbiAgICAgICAgICAgIGNlbGxzLnB1c2goe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIGV4aXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1hcC5nZXRDZWxsKHVuaXRQb3NpdGlvblJvdywgdW5pdFBvc2l0aW9uQ29sIC0gMSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTEVGVF9UT1Ag0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LvQtdCy0LAt0LLQstC10YDRhdGDICtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3BcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0VG9wJyxcbiAgICAgICAgICAgICAgICBleGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtYXAuZ2V0Q2VsbCh1bml0UG9zaXRpb25Sb3cgLSAxLCB1bml0UG9zaXRpb25Db2wgLSAxKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5MT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVuaXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2VsbHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJST1c6IFwiICsgdW5pdFBvc2l0aW9uUm93LCBcIkNPTDogXCIgKyB1bml0UG9zaXRpb25Db2wpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9XG59IiwiaW1wb3J0IGNvbnN0YW50IGZyb20gJy4vLi4vY29uc3RhbnQnXG5pbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi8uLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuLy4uL3Rvb2xzJztcblxuLy8gQ09XUyBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ293c0FsZ29yaXRobSAgZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyBDZWxsIERpc3RhbmNlXG4gICAgICAgIHRoaXMuZGlzdGFuY2VWaWV3ID0gMTtcbiAgICB9XG5cbiAgICBhY3QgKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uID0gbWFwLmdldE9uZUxldmVsQ2VsbHNJbmZvKHVuaXQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhOlxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KHQvtGB0LXQtNC90LjQvNC4INC60LvQtdGC0LrQsNC80LggIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotGA0LDQstC+0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0LjQs9GA0LDQvNC4ICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXNcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCX0LXQvNC70ZHQuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qaWYgKHVuaXQuaGVhbHRoID4gMCkge1xuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INCi0LjQs9GA0YtcbiAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy/QldGB0LvQuCDQtdGB0YLRjCDRgdCy0L7QsdC+0LTQvdGL0LUg0LrQu9C10YLQutC4XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQkdC10LbQuNC8INC+0YIg0KLQuNCz0YDQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVBd2F5RnJvbUVuZW15KG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL9CV0YHQu9C4INC10YHRgtGMINGA0Y/QtNC+0Lwg0YLRgNCw0LLQsCDQtdC00LjQvCDQtdC1INC4INGD0LHQtdCz0LDQtdC8XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Gb29kKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0LXQtNCwXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Gb29kKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUZyZWUobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXAua2lsbFVuaXQodW5pdCwgaW5kZXhPYmplY3QpO1xuICAgICAgICB9Ki9cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JHQtdC20LjQvCDQvtGCINGC0LjQs9GA0LAgK1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVBd2F5RnJvbUVuZW15IChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICAvLyDQodC+0YXRgNCw0L3QuNC8INGB0YLQsNGA0YvQuSBVbml0INC4INC10LPQviBSQyAoUm93L0NvbClcbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbCDQuCDQt9Cw0L/QuNGI0LjQvCDQsiDQvdC+0LLRg9GOINGP0YfQtdC50LrRgyDQutC+0YDQvtCy0YNcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQoi7QuiDQvNGLINGD0LHQtdCz0LDQtdC8INC4INC90LUg0LXQtNC40Lwg0YLRgNCw0LLRgywg0L7RgtC90LjQvNC40Lwg0L3QtdC80L3QvtCz0L4g0LfQtNC+0YDQvtCy0YzRj1xuICAgICAgICB1bml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JXQtNC40Lwg0YLRgNCw0LLRg1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlVG9Gb29kIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDQtdC00YtcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggLSAxKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7fTtcblxuICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNC8INCyINC80LXQvdC10LTQttC10YAg0YHQvNC10YDRgtC10Lkg0YLRgNCw0LLRg1xuICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkZWF0aFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGRpZVVuaXRUeXBlOiBcImdyYXNzXCIsXG4gICAgICAgICAgICBkaWVVbml0SWQ6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZGllVW5pdCA9IG5ldyBEaWVVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgbWFwLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgIC8vINCf0YDQuCDQv9C+0LPQu9Cw0YnQtdC90LjQuCDRgtGA0LDQstGLINC/0YDQuNCx0LDQstC40Lwg0LbQuNC30L3QuCwg0L7Qs9GA0LDQvdC40YfQuNC8INC30L3QsNGH0LXQvdC40LXQvCAxMDBcbiAgICAgICAgaWYgKHVuaXQuaGVhbHRoIDwgMTAwKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0LmhlYWx0aCA+IDkwKSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgoMTAwIC0gdW5pdC5oZWFsdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bml0LmFkZEhlYWx0aCh0aGlzLmFkZEhlYWx0aFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHQstC+0LHQvtC00L3QvtC1INC/0LXRgNC10LzQtdGJ0LXQvdC40LVcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlRnJlZSAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codW5pdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDRgSDQt9C10LzQu9C10LlcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgdW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiLy8gREVBVEggQUxHT1JJVE1cbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IFVuaXQgZnJvbSAnLi8uLi91bml0JztcblxuXG4vLyBHUk9VTkQgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYXRoQWxnb3JpdGhtIHtcbiAgICBhY3QgKGRlYXRoVW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICBpZiAoZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCA8IGRlYXRoVW5pdC51bml0UmVzdXJlY3Rpb25JbnRlcnZhbCkge1xuICAgICAgICAgICAgZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCsrO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSBtYXAuZ2V0TmV3Um93Q29sUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3UG9zaXRpb25Sb3dDb2wpO1xuXG4gICAgICAgICAgICB2YXIgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiBkZWF0aFVuaXQuZGllVW5pdElkLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZGVhdGhVbml0LmRpZVVuaXRUeXBlLFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBuZXdQb3NpdGlvbi5yb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uLmNvbCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBuZXdVbml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICAgICAgdmFyIGRpZU9iamVjdHNPbk1hcEluZGV4ID0gbWFwLmdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcChkZWF0aFVuaXQpO1xuXG4gICAgICAgICAgICB2YXIgZW50aXR5UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBkZWF0aFVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IGRlYXRoVW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKGRlYXRoVW5pdCwgbmV3IEVudGl0eShlbnRpdHlQYXJhbSkpO1xuXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbChuZXdVbml0LCBuZXdVbml0KTtcblxuICAgICAgICAgICAgbWFwLmFkZFRvT2JqZWN0c09uTWFwKG5ld1VuaXQpO1xuXG4gICAgICAgICAgICBtYXAucmVtb3ZlVW5pdEZyb21EaWVPYmplY3RzT25NYXAoZGllT2JqZWN0c09uTWFwSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcblxuLy8gR1JBU1MgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXNzQWxnb3JpdGhtIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBhY3QgKCkge307XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuXG4vLyBHUk9VTkQgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZEFsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgYWN0ICgpIHt9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL2NvbnN0YW50XCI7XG5pbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi8uLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuLy4uL3Rvb2xzJztcblxuY29uc3QgTE9DQUxfREVCVUcgPSB0cnVlO1xuXG4vLyBUSUdFUlMgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2Vyc0FsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8g0KDQsNC00LjRg9GBINGP0YfQtdC10Log0LIg0YfQtdGC0YvRgNC1INGB0YLQvtGA0L7QvdGLLCDRg9Cy0LXQu9C40YfQtdC9INC90LAg0L7QtNC90YMsINC10YHQu9C4IDQg0YLQviAzXG4gICAgICAgIHRoaXMuZGlzdGFuY2VWaWV3ID0gNDtcbiAgICB9XG5cbiAgICBhY3QgKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgaWYgKExPQ0FMX0RFQlVHIHx8IGNvbnN0YW50LkdMT0JBTF9ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUSUdFUjogXCIsIHVuaXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vINCS0L7QvtC30LLRgNCw0YLQuNGC0Ywg0L7QsdGK0LXQutGCINGBINGB0L7RgdC10LTQvdC40LzQuCDRj9GH0LXQudC60LDQvNC4XG4gICAgICAgIC8vIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24gPSBtYXAuZ2V0TXVsdGlMZXZlbENlbGxzSW5mbyh1bml0LCBpbmRleE9iamVjdCwgdGhpcy5kaXN0YW5jZVZpZXcpO1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uID0gbWFwLmdldE9uZUxldmVsQ2VsbHNJbmZvKHVuaXQpO1xuXG4gICAgICAgIGlmIChMT0NBTF9ERUJVRyB8fCBjb25zdGFudC5HTE9CQUxfREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTkVJR0hCT1JJTkdTQ0VMTElORk9STUFUSU9OOiBcIiwgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGE6XG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQmtCw0YDRgtC+0LkgICAgICAgICAgICAgIC0gZGF0YS5tYXBcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCh0L7RgdC10LTQvdC40LzQuCDQutC70LXRgtC60LDQvNC4ICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLRgNCw0LLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotC40LPRgNCw0LzQuCAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQl9C10LzQu9GR0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICAgKi9cblxuICAgICAgIC8qIGlmICh1bml0LmhlYWx0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0LXQtNCwXG4gICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGcmVlKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWFwLmtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfSovXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCV0LTQuNC8INC60L7RgNC+0LLRg1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlVG9Gb29kIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDQutC+0YDQvtCyXG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoIC0xKTtcblxuICAgICAgICAvLyDQrdGC0LAg0Y/Rh9C10LnQutCwINGP0LLQu9GP0LXRgtGM0YHRjyDQutC+0YDQvtCy0L7QuSwg0YIu0LUg0JXQlNCe0JkhISFcbiAgICAgICAgLy8gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdXG4gICAgICAgIC8vIHVuaXQuZWF0ZW4odHJ1ZSwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCBpbmRleCDRgdGK0LXQtNC10L3QvtC5INC60L7RgNC+0LLRiyDQuNC3INC80LDRgdGB0LjQstCwIG9iamVjdHNPbk1hcFxuICAgICAgICBsZXQgZm9vZEluZGV4ID0gbWFwLmdldEluZGV4RnJvbU9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0pO1xuXG4gICAgICAgIC8vINCf0L7QvNC10YLQuNC70Lgg0YLQuNCz0YDQsCDRh9GC0L4g0L7QvSDRgdGK0LXQuyDQutC+0YDQvtCy0YNcbiAgICAgICAgdW5pdC5lYXRlbihuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGZvb2RJbmRleCk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgtC40LPRgNCwINC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCj0LTQsNC70LjQvCDQutC+0YDQvtCy0YMg0LjQtyDQuNCz0YDQvtCy0L7Qs9C+INC80LDRgdGB0LjQstCwXG4gICAgICAgIG1hcC5yZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChmb29kSW5kZXgpO1xuXG4gICAgICAgIGRlbGV0ZSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF07XG5cbiAgICAgICAgLy8g0J/RgNC4INC/0L7Qs9C70LDRidC10L3QuNC4INGC0YDQsNCy0Ysg0L/RgNC40LHQsNCy0LjQvCDQttC40LfQvdC4LCDQvtCz0YDQsNC90LjRh9C40Lwg0LfQvdCw0YfQtdC90LjQtdC8IDEwMFxuICAgICAgICBpZiAodW5pdC5oZWFsdGggPCAxMDAgKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0LmhlYWx0aCA+IDkwKSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgoMTAwLXVuaXQuaGVhbHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgodGhpcy5hZGRIZWFsdGhWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LLQvtCx0L7QtNC90L7QtSDQv9C10YDQtdC80LXRidC10L3QuNC1XG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUZyZWUgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge307XG5cbiAgICAgICAgLy8gdW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3RcblxuICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INGD0LHQuNC7INC70Lgg0LTQsNC90L3Ri9C5INGC0LjQs9GAINGC0L7Qu9GM0LrQviDRh9GC0L4g0LrQvtGA0L7QstGDLFxuICAgICAgICAvLyDQtdGB0LvQuCDQtNCwLCDRgtC+INC90LAg0YHQu9C10LQuINGI0LDQs9C1INC/0L7RgdGC0LDQstC40Lwg0L3QsCDQtdCz0L4g0LzQtdGB0YLQviDRgtCw0LHQu9C40YfQutGDdW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3RcbiAgICAgICAgaWYgKHVuaXQuaXNFYXRlbigpKSB7XG5cbiAgICAgICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgICAgIGRpZVVuaXRUeXBlOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgZGllVW5pdElkOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5pZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgICAgICBkaWVVbml0LnNldEluZGV4T2JqZWN0KHVuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0KTtcblxuICAgICAgICAgICAgbWFwLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBkaWVVbml0KTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRVbml0LnJlc2V0RWF0ZW4oKTtcblxuICAgICAgICBvbGRVbml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDRgSDQt9C10LzQu9C10LlcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG59XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIEdMT0JBTF9ERUJVRyA6IGZhbHNlXG59OyIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IERlYXRoQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2RlYXRoQWxnb3JpdGhtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGllVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuaW5kZXhPYmplY3QgPSBwYXJhbS5pbmRleE9iamVjdDtcblxuICAgICAgICB0aGlzLmFsZ29yaXRtcyA9IG5ldyBEZWF0aEFsZ29yaXRobSgpO1xuXG4gICAgICAgIHRoaXMuZGllVW5pdFR5cGUgPSBwYXJhbS5kaWVVbml0VHlwZTtcbiAgICAgICAgdGhpcy5kaWVVbml0SWQgPSBwYXJhbS5kaWVVbml0SWQ7XG5cbiAgICAgICAgdGhpcy51bml0UmVzdXJlY3Rpb25JbnRlcnZhbCA9IDM7XG4gICAgICAgIHRoaXMudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0ID0gMDtcblxuICAgICAgICAvLyB0aGlzLnNvdW5kRGllID0gbmV3IEdhbWVTb3VuZHMoXCJhdWRpby9kaWVfXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiLm1wM1wiKTtcbiAgICB9XG59XG5cbkRpZVVuaXQucHJvdG90eXBlLnNldEluZGV4T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5pbmRleE9iamVjdCA9IGluZGV4T2JqZWN0O1xufTtcblxuXG4vKipcbiAqINCg0LDQt9C90YvQtSDQtNC10LnRgdGC0LLQuNGPINC+0LHRitC10LrRgtCwXG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLmFjdGlvbiA9IGZ1bmN0aW9uIChtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5hbGdvcml0bXMuYWN0KHRoaXMsIG1hcCwgaW5kZXhPYmplY3QpO1xufTtcblxuXG4vKipcbiAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAqIEBwYXJhbSB1bml0XG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLnVwZGF0ZVJvd0NvbCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gICAgdGhpcy5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICB0aGlzLmlkID0gcGFyYW0uaWQ7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gcGFyYW0uY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gcGFyYW0ub2JqUG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMucG9zaXRpb25Db2wgPSBwYXJhbS5vYmpQb3NpdGlvbkNvbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqL1xuICAgIHVwZGF0ZVJvd0NvbCAodW5pdCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQktGL0LLQvtC0IEhUTUwg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNob3cgKCkge1xuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdiLXVuaXQgXCIrdGhpcy5jbGFzc05hbWUrXCInPjwvZGl2PlwiO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICAvKipcbiAgICAgKiBPQkogR0FNRVxuICAgICAqIEBwYXJhbSBzZXR0aW5nXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmcgPSBzZXR0aW5nO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjQvCDRgNC10LbQuNC8INC40LPRgNGLXG4gICAgICAgIHRoaXMuZGV2TW9kZSA9IHNldHRpbmcuZGV2TW9kZSB8fCBmYWxzZTtcblxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40Lwg0YHQutC+0YDQvtGB0YLRjCDQuNCz0YDQvtCy0L7Qs9C+INGG0LjQutC70LBcbiAgICAgICAgdGhpcy50aW1lUmVuZGVyID0gc2V0dGluZy50aW1lUmVuZGVyIHx8IDUwMDtcblxuICAgICAgICB0aGlzLmJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItYnV0dG9uc19fYnRuLXN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1idXR0b25zX19idG4tcGF1c2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHQU1FIExPT1BcbiAgICAgKi9cbiAgICBydW4gKCkge1xuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC90L7QstGD0Y4g0YHRhtC10L3Rg1xuICAgICAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUodGhpcy5zZXR0aW5nKTtcblxuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1INC90LAg0YHRhtC10L3QtVxuICAgICAgICBpZiAoc2NlbmUuYnVpbGQoKSkge1xuXG4gICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC30LDQs9GA0YPQttC10L3QsC4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLFwi0J3QsNC20LzQuNGC0LUgJ9Cd0LDRh9Cw0YLRjCDQuNCz0YDRgycuXCIsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGxldCBsb29wO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGV2TW9kZSkge1xuXG4gICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQsiDQvtCx0YvRh9C90L7QvCDRgNC10LbQuNC80LUuJywgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQt9Cw0L/Rg9GJ0LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vINCT0LvQsNCy0L3Ri9C5IExvb3BcbiAgICAgICAgICAgICAgICAgICAgbG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lLmlzc2V0T2JqZWN0T25NYXAoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmRpZU1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgc2VsZi50aW1lUmVuZGVyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9vcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQvtGB0YLQsNC90L7QstC70LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzY2VuZS5pc3NldE9iamVjdE9uTWFwKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQsiDRgNC10LbQuNC80LUg0YDQsNC30YDQsNCx0L7RgtGH0LjQutCwLicsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9Ca0L7QvdC10YYg0LjQs9GA0YsuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgYWxlcnQoJ0dhbWUgT3ZlcicpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tIFwiLi9zZXR0aW5nXCI7XG5cbi8vINCf0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDQtNC+0LrRg9C80LXQvdGC0LAg0LfQsNC/0YPRgdGC0LjQvCDQuNCz0YDRg1xuJChmdW5jdGlvbiAoKSB7XG4gICAgJC5sTm90aWZ5KHtcbiAgICAgICAgYW5pbWF0aW9uOiAnc2xpZGUnLFxuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbVJpZ2h0J1xuICAgIH0pO1xuXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShzZXR0aW5nKTtcblxuICAgIGdhbWUucnVuKCk7XG59KTtcbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IFVuaXQgZnJvbSAnLi91bml0JztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuaW1wb3J0IG9uZUxldmVsQ2VsbHNJbmZvIGZyb20gJy4vYWxnb3JpdGhtL2FsZ29yaXRobUZpbmRPbmVMZXZlbE5laWdoYm9yaW5nc0NlbGxJbmZvJztcbmltcG9ydCBtdWx0aUxldmVsQ2VsbHNJbmZvIGZyb20gJy4vYWxnb3JpdGhtL2FsZ29yaXRobUZpbmRNdWx0aUxldmVsTmVpZ2hib3JpbmdzQ2VsbEluZm8nO1xuXG5cbi8qKlxuICog0JrQu9Cw0YHRgSDRgNCw0LHQvtGC0Ysg0YEg0LrQsNGA0YLQvtC5XG4gKiBAcGFyYW0gc2V0dGluZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFwRGF0YSA9IFtdO1xuXG4gICAgICAgIC8vINCe0LHRitC10LrRgtGLINC00LvRjyDQutCw0YDRgtGLXG4gICAgICAgIHRoaXMubWFwT2JqZWN0cyA9IHNldHRpbmcubWFwT2JqZWN0cztcblxuICAgICAgICAvLyDQodC/0LjRgdC+0Log0L7QsdGK0LXQutGC0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0LfQsNC00LXQudGB0YLQstC+0LLQsNC90L3RiyDQvdCwINC60LDRgNGC0LVcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXAgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMucm93ID0gc2V0dGluZy5tYXBTaXplLnJvdyB8fCAwO1xuICAgICAgICB0aGlzLmNvbCA9IHNldHRpbmcubWFwU2l6ZS5jb2wgfHwgMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7RgdGC0YDQvtC40Lwg0L/Rg9GB0YLRg9GOINC60LDRgNGC0YMg0L3QsCDQvtGB0L3QvtCy0LUg0L3QsNGH0LDQu9GM0L3Ri9GFIFJvdy9Db2xcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB3aGlsZSAodGhpcy5tYXBEYXRhLnB1c2goW10pIDwgdGhpcy5yb3cpIDtcblxuICAgICAgICBpZiAodGhpcy5tYXBEYXRhLmxlbmd0aCA9PSB0aGlzLnJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQk9C10L3QtdGA0LDRhtC40Y8g0LrQsNGA0YLRi1xuICAgICAqL1xuICAgIGdlbmVyYXRlKCkge1xuXG4gICAgICAgIGxldCBvYmpJRCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgb2JqZWN0TmFtZSBpbiB0aGlzLm1hcE9iamVjdHMpIHtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0TmFtZSk7XG4gICAgICAgICAgICBsZXQgb2JqTWluID0gdGhpcy5tYXBPYmplY3RzW29iamVjdE5hbWVdLm1pbjtcbiAgICAgICAgICAgIGxldCBvYmpNYXggPSB0aGlzLm1hcE9iamVjdHNbb2JqZWN0TmFtZV0ubWF4O1xuXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQvtCx0YrQtdC60YIg0Y/QstC70Y/QtdGC0YzRgdGPINGB0YLQsNGC0LjQutC+0LksXG4gICAgICAgICAgICAvLyDRgtC+INC/0L7RgdGC0LDRgNC10LzRgdGPINC00LDRgtGMINC/0L4g0LzQsNC60YHQuNC80YPQvNGDINC30L3QsNGH0LXQvdC40Y8gbWluL21heFxuICAgICAgICAgICAgLy8g0LTQu9GPINC/0L7Qu9C90L7Qs9C+INC30LDQv9C+0LvQvdC10L3QuNGPINC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbiAgICAgICAgICAgIGlmIChvYmpNaW4gPT09IG51bGwgJiYgb2JqTWF4ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb2JqTWluID0gKHRoaXMucm93ICsgdGhpcy5jb2wpICogMjtcbiAgICAgICAgICAgICAgICBvYmpNYXggPSAodGhpcy5yb3cgKyB0aGlzLmNvbCkgKiAxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC60L7Quy3QstC+INC+0LHRitC10LrRgtC+0LIg0L3QsCDQutCw0YDRgtC1XG4gICAgICAgICAgICBsZXQgb2JqQ291bnRPbk1hcCA9IHRvb2xzLnJhbmRvbUludGVnZXIob2JqTWluLCBvYmpNYXgpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9iamVjdE5hbWVbb2JqQ291bnRPbk1hcF06IFwiICsgb2JqZWN0TmFtZSArIFwiIFwiICsgb2JqQ291bnRPbk1hcCk7XG5cbiAgICAgICAgICAgIC8vINCf0YDQvtC50LTQtdC80YHRjyDQv9C+INGN0YLQvtC80YMg0LrQvtC70LjRh9C10LLRgdGC0LLRg1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpDb3VudE9uTWFwOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCBtYXBSb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFwUm93Q29sTm9ybWFsOiAnLCBtYXBSb3dDb2wpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0pIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaklELFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IG1hcFJvd0NvbC5yb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogbWFwUm93Q29sLmNvbFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0O1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0TmFtZSA9PSBcImdyb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IEVudGl0eSh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBVbml0KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPSB1bml0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09ICdjb3dzJyB8fCBvYmplY3ROYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvT2JqZWN0c09uTWFwKHVuaXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXRTZXR0aW5nID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqSUQ6IG9iaklELFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyeU5ld0dlbmVyYXRlKHVuaXRTZXR0aW5nLCBvYmpDb3VudE9uTWFwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9iaklEKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LLRgtC+0YDQvdCw0Y8g0LPQtdC90LXRgNCw0YbQuNGPLCDQsiDRgdC70YPRh9C40Lgg0LfQsNC90Y/RgtC+0LPQviDQvNC10YHRgtCwINCyINC80LDRgdGB0LjQstC1XG4gICAgICogQHBhcmFtIG9iamVjdFNldHRpbmdcbiAgICAgKiBAcGFyYW0gY291bnRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICB0cnlOZXdHZW5lcmF0ZShvYmplY3RTZXR0aW5nLCBjb3VudCkge1xuXG4gICAgICAgIGlmIChjb3VudCA8PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0Y3RgtC+0LzRgyDQutC+0LvQuNGH0LXQstGB0YLQstGDXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXG4gICAgICAgICAgICAvLyDRgdC+0LfQtNCw0LTQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLINC00LvRjyDQv9GA0L7RgdGC0LDQstC70LXQvdC40Y9cbiAgICAgICAgICAgIGxldCBtYXBSb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXBSb3dDb2xSZWN1cnNpdmU6ICcsIG1hcFJvd0NvbCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBvYmplY3RTZXR0aW5nLm9iaklELFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IG1hcFJvd0NvbC5yb3csXG4gICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBtYXBSb3dDb2wuY29sXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGxldCB1bml0O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSBcImdyb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgRW50aXR5KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBVbml0KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdID0gdW5pdDtcblxuICAgICAgICAgICAgICAgIGlmIChvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUgPT0gJ2Nvd3MnIHx8IG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSAndGlnZXJzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvT2JqZWN0c09uTWFwKHVuaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB1bml0U2V0dGluZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgb2JqSUQ6IG9iamVjdFNldHRpbmcub2JqSUQsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdFNldHRpbmcub2JqZWN0TmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJ5TmV3R2VuZXJhdGUodW5pdFNldHRpbmcsIGNvdW50IC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70YzQvdGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsCDQvtGB0L3QvtCy0LUg0LrQvtC7LdCy0L4g0YHRgtGA0L7QuiDQuCDQutC+0LvQvtC90L7QulxuICAgICAqIEByZXR1cm5zIHt7cm93OiAqLCBjb2w6ICp9fVxuICAgICAqL1xuICAgIGdldFJhbmRvbVJvd0NvbENvb3JkKCkge1xuICAgICAgICBsZXQgY291bnRSb3cgPSB0aGlzLnJvdyxcbiAgICAgICAgICAgIGNvdW50Q29sID0gdGhpcy5jb2w7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvdzogdG9vbHMucmFuZG9tSW50ZWdlcigwLCBjb3VudFJvdyksXG4gICAgICAgICAgICBjb2w6IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgY291bnRDb2wpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY2hlY2tSb3V0ZSAoKSB7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbih1bml0LCB0aGlzLm1hcCwgaW5kZXhPYmplY3QpO1xuXG4gICAgfVxuICAgIFxuICAgIGdldFJhbmRvbVJvd0NvbEJhc2VkT25Vbml0KGNlbGwsIHN0ZXBzKSB7XG4gICAgICAgIGxldCBpc3NldFJvdXRlID0gdGhpcy50cnlSb3V0ZShzdGVwcyk7XG5cblxuXG5cbiAgICAgICAgLy8gbGV0IHJvd01pbiA9ICgoY2VsbC5wb3NpdGlvblJvdyAtIDEpID49IDApID8gKGNlbGwucG9zaXRpb25Sb3cgLSAxKSA6IDA7XG4gICAgICAgIC8vIGxldCByb3dNYXggPSAoKGNlbGwucG9zaXRpb25Sb3cgKyAxKSA8PSB0aGlzLnJvdykgPyAoY2VsbC5wb3NpdGlvblJvdyArIDEpIDogdGhpcy5yb3c7XG5cbiAgICAgICAgLy8gbGV0IGNvbE1pbiA9ICgoY2VsbC5wb3NpdGlvbkNvbCAtIDEpID49IDApID8gKGNlbGwucG9zaXRpb25Sb3cgLSAxKSA6IDA7XG4gICAgICAgIC8vIGxldCBjb2xNYXggPSAoKGNlbGwucG9zaXRpb25Db2wgKyAxKSA8PSB0aGlzLmNvbCkgPyAoY2VsbC5wb3NpdGlvbkNvbCArIDEpIDogdGhpcy5jb2w7XG5cbiAgICAgICAgLy8gbGV0IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAvLyAgICAgbmV3UG9zaXRpb25Db2w7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIG5ld1Bvc2l0aW9uUm93ID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xXaXRoRXhjbHVkZShyb3dNaW4sIHJvd01heCwgY2VsbC5wb3NpdGlvblJvdyk7XG4gICAgICAgIC8vIG5ld1Bvc2l0aW9uQ29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xXaXRoRXhjbHVkZShjb2xNaW4sIGNvbE1heCwgY2VsbC5wb3NpdGlvblJvdyk7XG5cbiAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbFxuICAgICAgICAvLyB9XG4gICAgfTtcblxuICAgIGdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKG1pbkNlbGwsIG1heENlbGwsIGV4Y2x1ZGVWYWx1ZSkge1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgdmFsdWUgPSB0b29scy5yYW5kb21JbnRlZ2VyKG1pbkNlbGwsIG1heENlbGwpO1xuXG4gICAgICAgIHdoaWxlICh2YWx1ZSA9PSBleGNsdWRlVmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9vbHMucmFuZG9tSW50ZWdlcihtaW5DZWxsLCBtYXhDZWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG5cbiAgICBnZXROZXdSb3dDb2xQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93Q29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xDb29yZCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZPUiBORVcgVU5JVCBHRU5FUkVURSBORVcgUE9TSVRJT046IFRSWVtcIiArIChpKyspICsgXCJdIC0+IFtSKFwiICsgbmV3UG9zaXRpb25Sb3dDb2wucm93ICsgXCIpOkMoXCIgKyBuZXdQb3NpdGlvblJvd0NvbC5jb2wgKyBcIildXCIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tYXBEYXRhW25ld1Bvc2l0aW9uUm93Q29sLnJvd11bbmV3UG9zaXRpb25Sb3dDb2wuY29sXS5jbGFzc05hbWUgPT09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UG9zaXRpb25Sb3dDb2w7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRydWUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDQtNC40Lwg0Y/Rh9C10LnQutGDXG4gICAgICogQHBhcmFtIG9sZFVuaXRcbiAgICAgKiBAcGFyYW0gbmV3VW5pdFxuICAgICAqL1xuICAgIHNldENlbGwob2xkVW5pdCwgbmV3VW5pdCkge1xuXG4gICAgICAgIHRoaXMubWFwRGF0YVtvbGRVbml0LnBvc2l0aW9uUm93XVtvbGRVbml0LnBvc2l0aW9uQ29sXSA9IG5ld1VuaXQ7XG5cbiAgICAgICAgdGhpcy5tYXBEYXRhW29sZFVuaXQucG9zaXRpb25Sb3ddW29sZFVuaXQucG9zaXRpb25Db2xdLnVwZGF0ZVJvd0NvbChvbGRVbml0KTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRj9GH0LXQudC60YNcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Sb3dcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Db2xcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRDZWxsKHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBEYXRhW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbF07XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvRj9C10YIgVW5pdCDQuNC3INC80LDRgdGB0LjQstCwIE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICovXG4gICAgYWRkVG9PYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcC5wdXNoKHVuaXQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICByZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcC5zcGxpY2UoaW5kZXhPYmplY3QsIDEpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgRGllT2JqZWN0c09uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0YHQvNC10YDRgtC4IHVuaXRzXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICByZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcChpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcC5zcGxpY2UoaW5kZXhPYmplY3QsIDEpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNC8INC00LvRjyBVbml0INC10LPQviBSQyhSb3cvQ29sKSDQsiDQvNCw0YHRgdC40LLQtSBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIHVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcCh1bml0LCBpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Db2wgPSB1bml0LnBvc2l0aW9uQ29sO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70LjQvCDQvtCx0YrQtdC60YJcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIGtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCDQvNC+0LPQuNC70LrRg1xuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2wsXG4gICAgICAgICAgICBkaWVVbml0VHlwZTogdW5pdC5jbGFzc05hbWUsXG4gICAgICAgICAgICBkaWVVbml0SWQ6IHVuaXQuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZGllVW5pdCA9IG5ldyBEaWVVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgdGhpcy5zZXRDZWxsKHVuaXQsIGRpZVVuaXQpO1xuXG4gICAgICAgIHRoaXMuYWRkRGllVW5pdFRvRGllQXJyYXkoZGllVW5pdCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kaWVPYmplY3RzT25NYXApO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0LvQuCDQtdGJ0LUg0L7QsdGK0LXQutGC0Ysg0LIg0LzQsNGB0YHQuNCy0LUg0LTQu9GPINGB0YPRidC10LLRgdGC0LLQvtCy0LDQvdC40Y8g0LjQs9GA0YtcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGlzc2V0T2JqZWN0T25NYXAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5vYmplY3RzT25NYXAubGVuZ3RoID4gMCA/IDEgOiAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0J7RgtGE0LjQu9GM0YLRgNGD0LXQvCDRj9GH0LXQudC60Lgg0L/QviDRgtC40L/RgyB1bml0VHlwZVxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsXG4gICAgICogQHBhcmFtIHVuaXRUeXBlXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdFR5cGUpIHtcblxuICAgICAgICBsZXQgYXJyID0gW107XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQsdC10YDQtdC8INC/0L7Qu9GD0YfQtdC90L3Ri9C5INC80LDRgdGB0LjQsiDRgSDRj9GH0LXQudC60LDQvNC4INC90LDRhdC+0LTRj9GJ0LjQvNC40YHRjyDRgNGP0LTQvtC8XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3JpbmdzQ2VsbC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAvLyDQr9GH0LXQudC60LAg0L3QtSDQstGL0YXQvtC00LjRgiDQt9CwINCz0YDQsNC90LjRhtGLXG4gICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5leGlzdCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQuY2xhc3NOYW1lID09IHVuaXRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC40L3QtNC10LrRgSDQutC+0YDQvtCy0Ysg0L/RgNC4INC10LUg0YHRitC10LTQsNC90LjQuFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbmRleEZyb21PYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5vYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID09IHVuaXQucG9zaXRpb25Sb3dcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9PSB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbi8vTUFQIERFQVRIIE1BTkFHRVxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC40L3QtNC10LrRgSDQutC+0YDQvtCy0Ysg0L/RgNC4INC10LUg0YHRitC10LTQsNC90LjQuFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbmRleEZyb21EaWVPYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5kaWVPYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID09IHVuaXQucG9zaXRpb25Sb3dcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9PSB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGREaWVVbml0VG9EaWVBcnJheSh1bml0KSB7XG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwLnB1c2godW5pdCk7XG4gICAgfVxuXG4vLyAgICBBTEdPUklUSE1TIEZJTkQgTkVJR0JPUklOR1MgQ0VMTFxuXG4gICAgZ2V0T25lTGV2ZWxDZWxsc0luZm8gKHVuaXQpIHtcbiAgICAgICAgcmV0dXJuIG9uZUxldmVsQ2VsbHNJbmZvLmdldCh0aGlzLCB1bml0KTtcbiAgICB9XG4gICAgZ2V0TXVsdGlMZXZlbENlbGxzSW5mbyAodW5pdCwgaW5kZXhPYmplY3QsIHN0ZXBzKSB7XG4gICAgICAgIHJldHVybiBtdWx0aUxldmVsQ2VsbHNJbmZvLmdldCh0aGlzLCB1bml0LCBpbmRleE9iamVjdCwgc3RlcHMpO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuXG4vKipcbiAqINCY0LPRgNC+0LLQsNGPINGB0YbQtdC90LBcbiAqIEBwYXJhbSBzZXR0aW5nXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItZ2FtZV9fcGxhaW4nKTtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKHNldHRpbmcpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQutCw0YDRgtGDINC4INC30LDQv9C+0LvQvdC40Lwg0LXQtSDQvtCx0YrQtdC60YLQsNC80LhcbiAgICAgKi9cbiAgICBidWlsZCAoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMubWFwLmluaXQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdlbmVyYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQntGC0YDQuNGB0L7QstC60LAg0LfQsNC/0L7Qu9C90LXQvdC90L7QuSDQutCw0YDRgtGLXG4gICAgICovXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IG1hcEhUTUwgPSAnJztcblxuXG4gICAgICAgIC8vINCf0L7RgdGC0YDQvtC40Lwg0LjQs9GA0L7QstC+0LUg0L/QvtC70LVcbiAgICAgICAgZm9yIChsZXQgcG9zaXRpb25Sb3cgPSAwOyBwb3NpdGlvblJvdyA8IHRoaXMubWFwLnJvdzsgcG9zaXRpb25Sb3crKykge1xuICAgICAgICAgICAgbWFwSFRNTCArPSBcIjxkaXYgY2xhc3M9J3Jvdyc+XCI7XG4gICAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbkNvbCA9IDA7IHBvc2l0aW9uQ29sIDwgdGhpcy5tYXAuY29sOyBwb3NpdGlvbkNvbCsrKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBERVYgTU9ERVxuICAgICAgICAgICAgICAgIGxldCBjZWxsQ29vcmRpbmF0ZSA9IFwiPGRpdiBjbGFzcz0nY2VsbENvb3JkaW5hdGUnPlwiICsgcG9zaXRpb25Sb3cgKyBcIiA6IFwiICsgcG9zaXRpb25Db2wgKyBcIjwvZGl2PlwiO1xuXG4gICAgICAgICAgICAgICAgbWFwSFRNTCArPSBcIjxkaXYgY2xhc3M9J2NlbGwnPlwiICsgY2VsbENvb3JkaW5hdGUgKyBcIiBcIiArIHRoaXMubWFwLmdldENlbGwocG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKS5zaG93KCkgKyBcIjwvZGl2PlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFwSFRNTCArPSBcIjwvZGl2PlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JTQvtCx0LDQstC40Lwg0YHQvtCx0YDQsNC90L3Rg9GOIEhUTUwg0LrQsNGA0YLRgyDQsiBET01cbiAgICAgICAgdGhpcy5wbGFpbi5pbm5lckhUTUwgPSBtYXBIVE1MO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCU0LXQudGB0YLQstC40Y8g0LLRgdC10YUg0L7QsdGK0LXQutGC0L7QsiDQvdCwINC60LDRgNGC0LVcbiAgICAgKi9cbiAgICBhY3Rpb25Pbk1hcCAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWFwLm9iamVjdHNPbk1hcCk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMubWFwLm9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgIHRoaXMubWFwLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0uYWN0aW9uKHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZGllTWFuYWdlciAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcC5kaWVPYmplY3RzT25NYXAubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLmFjdGlvbih0aGlzLm1hcCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDQu9C4INC10YnQtSDQvtCx0YrQtdC60YLRiyDQsiDQvNCw0YHRgdC40LLQtSDQtNC70Y8g0YHRg9GJ0LXQstGB0YLQstC+0LLQsNC90LjRjyDQuNCz0YDRi1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgaXNzZXRPYmplY3RPbk1hcCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5pc3NldE9iamVjdE9uTWFwKCk7XG4gICAgfTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIlxuLy8gUFJPRFxuLypleHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZUNvbnRhaW5lcklEOiAnYi1nYW1lJyxcbiAgICBtYXBTaXplOiB7XG4gICAgICAgIHJvdzogOSxcbiAgICAgICAgY29sOiAyM1xuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA5MCxcbiAgICAgICAgICAgIG1heDogMTc1XG4gICAgICAgIH0sXG4gICAgICAgIGNvd3M6IHtcbiAgICAgICAgICAgIG1pbjogMTUsXG4gICAgICAgICAgICBtYXg6IDIwXG4gICAgICAgIH0sXG4gICAgICAgIHRpZ2Vyczoge1xuICAgICAgICAgICAgbWluOiAzLFxuICAgICAgICAgICAgbWF4OiA2XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgbWF4OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRldk1vZGU6IGZhbHNlLFxuICAgIHRpbWVSZW5kZXI6IDUwMFxufTsqL1xuXG4vLyBERVZcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnYW1lQ29udGFpbmVySUQ6ICdiLWdhbWUnLFxuICAgIG1hcFNpemU6IHtcbiAgICAgICAgcm93OiA2LFxuICAgICAgICBjb2w6IDZcbiAgICB9LFxuICAgIG1hcE9iamVjdHM6IHtcbiAgICAgICAgZ3Jhc3M6IHtcbiAgICAgICAgICAgIG1pbjogNyxcbiAgICAgICAgICAgIG1heDogMTNcbiAgICAgICAgfSxcbiAgICAgICAgY293czoge1xuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiA1XG4gICAgICAgIH0sXG4gICAgICAgIHRpZ2Vyczoge1xuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiA0XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgbWF4OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRldk1vZGU6IGZhbHNlLFxuICAgIHRpbWVSZW5kZXI6IDE1MzBcbn07XG5cbiIsIi8vIEFVRElPIElOIEdBTUVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTb3VuZHMge1xuICAgIGNvbnN0cnVjdG9yKGZpbGUpIHtcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbyhmaWxlKTsgICBcbiAgICB9XG5cbiAgICBwbGF5ICgpIHtcbiAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4gICAgfTtcblxuICAgIC8vINCk0YPQvdC60YbQuNGPIHN0b3Ag0LTQu9GPIEF1ZGlvOlxuICAgIHN0b3AgKCkge1xuICAgICAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuc291bmQuY3VycmVudFRpbWUgPSAwLjA7XG4gICAgfTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIi8vINCS0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSDRhNGD0L3QutGG0LjQuCDQtNC70Y8g0LjQs9GA0YtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0L7RidGP0LXRgiDRgdC70YPRh9Cw0LnQvdC+0LUg0YfQuNGB0LvQviDQsiDQtNC40LDQv9Cw0LfQvtC90LUgTWluL01heFxuICAgICAqIEBwYXJhbSBtaW5cbiAgICAgKiBAcGFyYW0gbWF4XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmFuZG9tSW50ZWdlcjogZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgfVxufTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IEdyYXNzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtJztcbmltcG9ydCBDb3dzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2Nvd3NBbGdvcml0aG0nO1xuaW1wb3J0IFRpZ2Vyc0FsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0nO1xuaW1wb3J0IEdyb3VuZEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0nO1xuaW1wb3J0IEdhbWVTb3VuZHMgZnJvbSAnLi9zb3VuZCc7XG5cbi8qKlxuICog0J7RgdC90L7QstC90L7QuSDQn9GA0L7RgtC+0YLQuNC/INC+0LHRitC10LrRgtCwINC90LAg0LrQsNGA0YLQtVxuICogQHBhcmFtIGNsYXNzTmFtZVxuICogQHBhcmFtIGlkXG4gKiBAcGFyYW0gb2JqUG9zaXRpb25Sb3dcbiAqIEBwYXJhbSBvYmpQb3NpdGlvbkNvbFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXQgZXh0ZW5kcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtKTtcblxuICAgICAgICB0aGlzLmZvb2RUeXBlID0gdGhpcy5nZXRGb29kVHlwZSgpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICAgICAgdGhpcy5lbmVteSA9IChwYXJhbS5jbGFzc05hbWUgPT0gJ2Nvd3MnID8gJ3RpZ2VycycgOiBudWxsKTtcblxuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgIGlzRWF0OiBmYWxzZSxcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBudWxsLFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG51bGwsXG4gICAgICAgICAgICBpbmRleE9iamVjdDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc291bmRFYXQgPSBuZXcgR2FtZVNvdW5kcyhcImF1ZGlvL2VhdF9cIiArIHRoaXMuY2xhc3NOYW1lICsgXCIubXAzXCIpO1xuXG4gICAgICAgIC8vINCS0YvQsdC10YDQuNC8INCw0LvQs9C+0YDQuNGC0Lwg0L/QvtCy0LXQtNC10L3QuNGPINC00LvRjyDQvtCx0YrQtdC60YLQsFxuICAgICAgICB0aGlzLmFsZ29yaXRtcyA9IHRoaXMuc2VsZWN0QWxnb3JpdGhtKHBhcmFtLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktGL0LLQvtC0IEhUTUwg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNob3coKSB7XG4gICAgICAgIGxldCB1bml0SGVhbHRoID0gXCJcIjtcblxuICAgICAgICBpZiAodGhpcy5jbGFzc05hbWUgPT0gJ2Nvd3MnIHx8IHRoaXMuY2xhc3NOYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NIZWFsdGhDb2xvciA9IHRoaXMuZ2V0Q2xhc3NIZWFsdGhDb2xvcih0aGlzLmhlYWx0aCk7XG5cbiAgICAgICAgICAgIHVuaXRIZWFsdGggKz0gXCI8ZGl2IGNsYXNzPSdiLXVuaXRfX2hlYWx0aCc+PGRpdiBjbGFzcz0nYi1oZWFsdF9faW5kaWNhdG9yIFwiICsgY2xhc3NIZWFsdGhDb2xvciArIFwiJyBzdHlsZT0nd2lkdGg6IFwiICsgdGhpcy5oZWFsdGggKyBcIiU7Jz48L2Rpdj48L2Rpdj5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J2ItdW5pdCBcIiArIHRoaXMuY2xhc3NOYW1lICsgXCIgc3RhbmRfc3RpbGwnPlwiICsgdW5pdEhlYWx0aCArIFwiPC9kaXY+XCI7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0YbQstC10YIo0LrQu9Cw0YHRgSkg0LbQuNC30L3QuCB1bml0XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDbGFzc0hlYWx0aENvbG9yKHZhbHVlKSB7XG5cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSA5MCAmJiBwYXJzZUludCh2YWx1ZSkgPD0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1nb29kXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSA3NSAmJiBwYXJzZUludCh2YWx1ZSkgPD0gOTApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWFib3ZlLWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDUwICYmIHBhcnNlSW50KHZhbHVlKSA8PSA3NSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gMjUgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDUwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1iZWxvdy1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSAwICYmIHBhcnNlSW50KHZhbHVlKSA8PSAyNSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtbG93XCI7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCg0LDQt9C90YvQtSDQtNC10LnRgdGC0LLQuNGPINC+0LHRitC10LrRgtCwXG4gICAgICovXG4gICAgYWN0aW9uKG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5hbGdvcml0bXMuYWN0KHRoaXMsIG1hcCwgaW5kZXhPYmplY3QpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGG0LXQu9GMINGA0LDQtNC4INC60L7RgtC+0YDQvtC5INC20LjQstC10YIgVW5pdCA6KVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldEZvb2RUeXBlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdjb3dzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2dyYXNzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RpZ2Vycyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjb3dzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQktC10YDQvdC10YIg0LTQu9GPINC+0LHRitC10LrRgtCwINC10LPQviDQsNC70LPQvtGA0LjRgtC8INC/0L7QstC10LTQtdC90LjRjyDQsiDQuNCz0YDQtVxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNlbGVjdEFsZ29yaXRobShpZCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogMCAtIGdyYXNzXG4gICAgICAgICAqIDEgLSBjb3dzXG4gICAgICAgICAqIDIgLSB0aWdlcnNcbiAgICAgICAgICogMyAtIGdyb3VuZFxuICAgICAgICAgKiA0IC0gZGVhdGhcbiAgICAgICAgICovXG5cbiAgICAgICAgc3dpdGNoIChwYXJzZUludChpZCkpIHtcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3Jhc3NBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvd3NBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRpZ2Vyc0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdW5kQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbi8vINCh0YrQtdC00LXQvVxuICAgIGlzRWF0ZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdDtcbiAgICB9O1xuXG4vLyDQodGK0LXQtNC10L1cbiAgICBlYXRlbih1bml0LCBmb29kSW5kZXgpIHtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3QgPSBmb29kSW5kZXg7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmNsYXNzTmFtZSA9IHVuaXQuY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pZCA9IHVuaXQuaWQ7XG4gICAgfTtcblxuLy8gUkVTRVQg0KHRitC10LTQtdC9XG4gICAgcmVzZXRFYXRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93ID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Db2wgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCA9IG51bGw7XG4gICAgfTtcblxuICAgIGFkZEhlYWx0aCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmhlYWx0aCArPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHN1YkhlYWx0aCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmhlYWx0aCAtPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfTtcblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iXSwic291cmNlUm9vdCI6IiJ9