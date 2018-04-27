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

var _route = __webpack_require__(/*! ./route */ "./algorithm/route.js");

var _route2 = _interopRequireDefault(_route);

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
            neighboringsCell = map.checkUnitNeighboringsCell(unit);

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

            var data = this.getAllNeighboringsCellInformation(unit, map, indexObject);

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

/***/ "./algorithm/route.js":
/*!****************************!*\
  !*** ./algorithm/route.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tools = __webpack_require__(/*! ../tools */ "./tools.js");

var _tools2 = _interopRequireDefault(_tools);

var _map = __webpack_require__(/*! ../map */ "./map.js");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Route
exports.default = {
    mapRow: 0,
    mapCol: 0,

    getNeighboringsCellInformation: function getNeighboringsCellInformation(map, unit, indexObject, steps, callBackUnitRoute) {

        var neighboringsCellInformation = [];

        this.mapRow = map.row;
        this.mapCol = map.col;

        for (var i = 1; i < steps; i++) {
            this.getNeighboringsCell(i, unit, function (neighboringsCell) {});
        }

        callBackUnitRoute(routeData);
    },

    // Получим соседнии ячейки
    getNeighboringsCell: function getNeighboringsCell(step, unit, callBack) {
        var unitAnglePoints = [];

        // Получим координаты 4-х соторон на основе Unit
        unitAnglePoints = this.getUnitAnglePoints(step, unit.positionRow, unit.positionCol);

        // Пройдемся по 4-ем сторонам и получим содержимое ячеек
        for (var side = 1; side < unitAnglePoints.length; side++) {

            // for (let row = 0; row < .length; row++) {
            //
            //     for (let col = 0; col < .length; col++) {
            //
            //     }
            //
            // }

            // unitAnglePoints[side].positionRow
            // unitAnglePoints[side].positionCol

        }

        callBack(neighboringsCell);
    },

    getLeftTopAnglePoint: function getLeftTopAnglePoint(step, positionRow, positionCol) {
        var row = void 0,
            col = void 0,
            rowRight = void 0,
            colRight = void 0,
            countRow = 0,
            countCol = 0;

        // Получим позицию левого верхнего угла unit
        row = positionRow - step < 0 ? 0 : positionRow - step;
        col = positionCol - step < 0 ? 0 : positionCol - step;

        // Получим позицию правого верхнего угла unit,
        // для подсчета дистанции от левого до правого угла
        colRight = positionCol + step > this.mapCol ? this.mapCol : positionCol + step;

        countCol = colRight - col + 1;

        return {
            positionRow: row,
            // Проверим не вышли за левую часть границы карты
            positionCol: col,
            countRow: countRow,
            countCol: countCol
        };
    },
    getRightTopAnglePoint: function getRightTopAnglePoint(step, positionRow, positionCol) {
        var row = void 0,
            col = void 0,
            rowBottom = void 0,
            colBottom = void 0,
            countRow = 0,
            countCol = 0;

        // Получим позицию правого верхнего угла unit
        row = positionRow - step;
        col = positionCol + step > this.mapCol ? this.mapCol : positionCol + step;

        // Получим позицию правого угла unit,
        // для подсчета дистанции от левого до правого угла
        // {
        //     positionRow: positionRow + step,
        //     positionCol: positionCol + step,
        // }
        rowBottom = positionRow + step > this.mapRow ? this.mapRow : positionRow + step;
        colBottom = positionCol + step > this.mapCol ? this.mapCol : positionCol + step;

        countCol = colRight - col + 1;

        return {
            positionRow: row,
            // Проверим не вышли за левую часть границы карты
            positionCol: col,
            countRow: countRow,
            countCol: countCol
        };
    },
    getRightBottomAnglePoint: function getRightBottomAnglePoint(step, positionRow, positionCol) {},
    getLeftBottomAnglePoint: function getLeftBottomAnglePoint(step, positionRow, positionCol) {},

    /**
     * Получим координаты 4-х соторон на основе Unit
     * @param step
     * @param positionRow
     * @param positionCol
     * @returns {Array}
     */
    getUnitAnglePoints: function getUnitAnglePoints(step, positionRow, positionCol) {
        var unitAnglePoints = [];

        // Left Top Angle Point
        unitAnglePoints.push(this.getLeftTopAnglePoint(step, positionRow, positionCol));

        // Right Top Angle Point
        unitAnglePoints.push(this.getRightTopAnglePoint(step, positionRow, positionCol));
        // {
        //     positionRow: positionRow - step,
        //     positionCol: positionCol + step,
        // }

        // Right Bottom Angle Point
        unitAnglePoints.push(this.getRightBottomAnglePoint(step, positionRow, positionCol));
        // {
        //     positionRow: positionRow + step,
        //     positionCol: positionCol + step,
        // }

        // Left Bottom Angle Point
        unitAnglePoints.push(this.getLeftBottomAnglePoint(step, positionRow, positionCol));
        // {
        //     positionRow: positionRow + step,
        //     positionCol: positionCol - step,
        // }

        return unitAnglePoints;
    }

};

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

var _algorithm = __webpack_require__(/*! ./algorithm */ "./algorithm/algorithm.js");

var _algorithm2 = _interopRequireDefault(_algorithm);

var _entity = __webpack_require__(/*! ./../entity */ "./entity.js");

var _entity2 = _interopRequireDefault(_entity);

var _dieUnit = __webpack_require__(/*! ./../dieUnit */ "./dieUnit.js");

var _dieUnit2 = _interopRequireDefault(_dieUnit);

var _tools = __webpack_require__(/*! ./../tools */ "./tools.js");

var _tools2 = _interopRequireDefault(_tools);

var _route = __webpack_require__(/*! ./route */ "./algorithm/route.js");

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TIGERS ALGORITM
var TigersAlgorithm = function (_Algorithm) {
    _inherits(TigersAlgorithm, _Algorithm);

    function TigersAlgorithm() {
        _classCallCheck(this, TigersAlgorithm);

        // Cell Distance
        var _this = _possibleConstructorReturn(this, (TigersAlgorithm.__proto__ || Object.getPrototypeOf(TigersAlgorithm)).call(this));

        _this.distanceView = 2;
        return _this;
    }

    _createClass(TigersAlgorithm, [{
        key: 'act',
        value: function act(unit, map, indexObject) {

            _route2.default.getNeighboringsCellInformation(map, unit, indexObject, this.distanceView, function (data) {
                // Воозвратить объект с соседними ячейками
                console.log(data);
            });

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
    $.lNotify();

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
        key: 'checkUnitNeighboringsCell',


        // Проверим соседнии клетки +
        value: function checkUnitNeighboringsCell(unit) {
            if (unit.className == 'tigers' || unit.className == 'cows') {

                var cells = [{
                    direction: 'top',
                    exist: false,
                    content: null
                }, {
                    direction: 'topRight',
                    exist: false,
                    content: null
                }, {
                    direction: 'right',
                    exist: false,
                    content: null
                }, {
                    direction: 'rightBottom',
                    exist: false,
                    content: null
                }, {
                    direction: 'bottom',
                    exist: false,
                    content: null
                }, {
                    direction: 'leftBottom',
                    exist: false,
                    content: null
                }, {
                    direction: 'left',
                    exist: false,
                    content: null
                }, {
                    direction: 'leftTop',
                    exist: false,
                    content: null
                }];

                var unitPositionRow = parseInt(unit.positionRow);
                var unitPositionCol = parseInt(unit.positionCol);
                // let mapDate = this.mapData;

                // Не забыть про границы карты
                var border = {
                    top: 0,
                    topRight: this.col,
                    right: this.col,
                    rightBottom: this.col,
                    bottom: this.row,
                    leftBottom: 0,
                    left: 0,
                    leftTop: 0
                };
                // console.log(mapDate);
                // console.log("PL:", unitPositionRow, unitPositionCol);

                // TOP Проверим ячейку с вверху +
                if (unitPositionRow - 1 >= border.top) {
                    cells[0].exist = true;
                    cells[0].content = this.mapData[unitPositionRow - 1][unitPositionCol];
                }

                // TOP_RIGHT Проверим ячейку с вверху-вправо +
                if (unitPositionRow - 1 >= border.top && unitPositionCol + 1 < border.topRight) {
                    cells[1].exist = true;
                    cells[1].content = this.mapData[unitPositionRow - 1][unitPositionCol + 1];
                }

                // RIGHT Проверим ячейку с вправо +
                if (unitPositionCol + 1 < border.right) {
                    cells[2].exist = true;
                    cells[2].content = this.mapData[unitPositionRow][unitPositionCol + 1];
                }

                // RIGHT_BOTTOM Проверим ячейку с вправо-внизу +
                if (unitPositionRow + 1 < border.bottom && unitPositionCol + 1 < border.rightBottom) {
                    cells[3].exist = true;
                    cells[3].content = this.mapData[unitPositionRow + 1][unitPositionCol + 1];
                }

                // BOTTOM Проверим ячейку внизу +
                if (unitPositionRow + 1 < border.bottom) {
                    cells[4].exist = true;
                    cells[4].content = this.mapData[unitPositionRow + 1][unitPositionCol];
                }

                // LEFT_BOTTOM Проверим ячейку с слева-внизу +
                if (unitPositionRow + 1 < border.bottom && unitPositionCol - 1 >= border.leftBottom) {
                    cells[5].exist = true;
                    cells[5].content = this.mapData[unitPositionRow + 1][unitPositionCol - 1];
                }

                // LEFT Проверим ячейку с слева +
                if (unitPositionCol - 1 >= border.left) {
                    cells[6].exist = true;
                    cells[6].content = this.mapData[unitPositionRow][unitPositionCol - 1];
                }

                // LEFT_TOP Проверим ячейку с лева-вверху +
                if (unitPositionRow - 1 >= border.top && unitPositionCol - 1 >= border.left) {
                    cells[7].exist = true;
                    cells[7].content = this.mapData[unitPositionRow - 1][unitPositionCol - 1];
                }

                // console.log(this.unit);
                // console.log(cells);
                // console.log("ROW: " + unitPositionRow, "COL: " + unitPositionCol );

                return cells;
            } else {
                return false;
            }
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
                    mapHTML += "<div class='cell'> " + this.map.getCell(positionRow, positionCol).show() + "</div>";
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

            return "<div class='b-unit " + this.className + "'>" + unitHealth + "</div>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vY293c0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL3JvdXRlLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi90b29scy5qcyIsIndlYnBhY2s6Ly8vLi91bml0LmpzIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsImFkZEhlYWx0aFZhbHVlIiwic3ViSGVhbHRoVmFsdWUiLCJ1bml0IiwibWFwIiwiaW5kZXhPYmplY3QiLCJuZWlnaGJvcmluZ3NDZWxsIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQiLCJjaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsIiwiZmlsdGVyQ2VsbEJ5VHlwZSIsImZvb2RUeXBlIiwiZW5lbXkiLCJDb3dzQWxnb3JpdGhtIiwiZGlzdGFuY2VWaWV3IiwiZGF0YSIsImdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiIsImNlbGxSYW5kb21Sb3dDb2wiLCJyYW5kb21JbnRlZ2VyIiwibGVuZ3RoIiwib2xkVW5pdCIsInVuaXRQYXJhbSIsImlkIiwiY2xhc3NOYW1lIiwib2JqUG9zaXRpb25Sb3ciLCJwb3NpdGlvblJvdyIsIm9ialBvc2l0aW9uQ29sIiwicG9zaXRpb25Db2wiLCJzZXRDZWxsIiwidXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwIiwic3ViSGVhbHRoIiwiZGllVW5pdFR5cGUiLCJkaWVVbml0SWQiLCJkaWVVbml0IiwiYWRkRGllVW5pdFRvRGllQXJyYXkiLCJoZWFsdGgiLCJhZGRIZWFsdGgiLCJEZWF0aEFsZ29yaXRobSIsImRlYXRoVW5pdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsIiwibmV3UG9zaXRpb24iLCJnZXROZXdSb3dDb2xQb3NpdGlvbiIsInJvdyIsImNvbCIsIm5ld1VuaXQiLCJkaWVPYmplY3RzT25NYXBJbmRleCIsImdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCIsImVudGl0eVBhcmFtIiwiYWRkVG9PYmplY3RzT25NYXAiLCJyZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcCIsIkdyYXNzQWxnb3JpdGhtIiwiR3JvdW5kQWxnb3JpdGhtIiwibWFwUm93IiwibWFwQ29sIiwiZ2V0TmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uIiwic3RlcHMiLCJjYWxsQmFja1VuaXRSb3V0ZSIsIm5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiIsImkiLCJnZXROZWlnaGJvcmluZ3NDZWxsIiwicm91dGVEYXRhIiwic3RlcCIsImNhbGxCYWNrIiwidW5pdEFuZ2xlUG9pbnRzIiwiZ2V0VW5pdEFuZ2xlUG9pbnRzIiwic2lkZSIsImdldExlZnRUb3BBbmdsZVBvaW50Iiwicm93UmlnaHQiLCJjb2xSaWdodCIsImNvdW50Um93IiwiY291bnRDb2wiLCJnZXRSaWdodFRvcEFuZ2xlUG9pbnQiLCJyb3dCb3R0b20iLCJjb2xCb3R0b20iLCJnZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQiLCJnZXRMZWZ0Qm90dG9tQW5nbGVQb2ludCIsInB1c2giLCJUaWdlcnNBbGdvcml0aG0iLCJjb25zb2xlIiwibG9nIiwiZm9vZEluZGV4IiwiZ2V0SW5kZXhGcm9tT2JqZWN0c09uTWFwIiwiZWF0ZW4iLCJyZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcCIsImlzRWF0ZW4iLCJmb29kSW5mb3JtYXRpb24iLCJzZXRJbmRleE9iamVjdCIsInJlc2V0RWF0ZW4iLCJEaWVVbml0IiwicGFyYW0iLCJhbGdvcml0bXMiLCJwcm90b3R5cGUiLCJhY3Rpb24iLCJhY3QiLCJ1cGRhdGVSb3dDb2wiLCJFbnRpdHkiLCJHYW1lIiwic2V0dGluZyIsImRldk1vZGUiLCJ0aW1lUmVuZGVyIiwiYnRuU3RhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnRuUGF1c2UiLCJzY2VuZSIsImJ1aWxkIiwiJCIsImxOb3RpZnkiLCJzZWxmIiwibG9vcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRJbnRlcnZhbCIsImNhbGxiYWNrIiwiaXNzZXRPYmplY3RPbk1hcCIsImRpZU1hbmFnZXIiLCJhY3Rpb25Pbk1hcCIsInJlbmRlciIsImdhbWVPdmVyIiwiY2xlYXJJbnRlcnZhbCIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZ2FtZSIsInJ1biIsIk1hcCIsIm1hcERhdGEiLCJtYXBPYmplY3RzIiwib2JqZWN0c09uTWFwIiwiQXJyYXkiLCJkaWVPYmplY3RzT25NYXAiLCJtYXBTaXplIiwib2JqSUQiLCJvYmplY3ROYW1lIiwib2JqTWluIiwibWluIiwib2JqTWF4IiwibWF4Iiwib2JqQ291bnRPbk1hcCIsIm1hcFJvd0NvbCIsImdldFJhbmRvbVJvd0NvbENvb3JkIiwidW5pdFNldHRpbmciLCJ0cnlOZXdHZW5lcmF0ZSIsIm9iamVjdFNldHRpbmciLCJjb3VudCIsInVuZGVmaW5lZCIsImNlbGwiLCJpc3NldFJvdXRlIiwidHJ5Um91dGUiLCJtaW5DZWxsIiwibWF4Q2VsbCIsImV4Y2x1ZGVWYWx1ZSIsInZhbHVlIiwibmV3UG9zaXRpb25Sb3dDb2wiLCJzcGxpY2UiLCJjZWxscyIsImRpcmVjdGlvbiIsImV4aXN0IiwiY29udGVudCIsInVuaXRQb3NpdGlvblJvdyIsInBhcnNlSW50IiwidW5pdFBvc2l0aW9uQ29sIiwiYm9yZGVyIiwidG9wIiwidG9wUmlnaHQiLCJyaWdodCIsInJpZ2h0Qm90dG9tIiwiYm90dG9tIiwibGVmdEJvdHRvbSIsImxlZnQiLCJsZWZ0VG9wIiwidW5pdFR5cGUiLCJhcnIiLCJTY2VuZSIsInBsYWluIiwiaW5pdCIsImdlbmVyYXRlIiwibWFwSFRNTCIsImdldENlbGwiLCJzaG93IiwiaW5uZXJIVE1MIiwiZ2FtZUNvbnRhaW5lcklEIiwiZ3Jhc3MiLCJjb3dzIiwidGlnZXJzIiwiZ3JvdW5kIiwiR2FtZVNvdW5kcyIsImZpbGUiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJVbml0IiwiZ2V0Rm9vZFR5cGUiLCJpc0VhdCIsInNvdW5kRWF0Iiwic2VsZWN0QWxnb3JpdGhtIiwidW5pdEhlYWx0aCIsImNsYXNzSGVhbHRoQ29sb3IiLCJnZXRDbGFzc0hlYWx0aENvbG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFD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QUFxQmxGLFdBQXJCLEdBQW1DLElBQW5DO0FBQ0g7OztrQ0FFU3FKLEssRUFBTztBQUNiLGlCQUFLdEgsTUFBTCxJQUFlOEgsU0FBU1IsS0FBVCxDQUFmO0FBQ0g7OztrQ0FFU0EsSyxFQUFPO0FBQ2IsaUJBQUt0SCxNQUFMLElBQWU4SCxTQUFTUixLQUFULENBQWY7QUFDSDs7Ozs7O0FBSUw7OztrQkEzSnFCNEMsSSIsImZpbGUiOiJjb3dzYW5kdGlnZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgdG9vbHMgZnJvbSBcIi4uL3Rvb2xzXCI7XG5pbXBvcnQgcm91dGUgZnJvbSBcIi4vcm91dGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxnb3JpdGhtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRIZWFsdGhWYWx1ZSA9IDU7XG4gICAgICAgIHRoaXMuc3ViSGVhbHRoVmFsdWUgPSAzO1xuICAgIH1cblxuICAgIGdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbih1bml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGwsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZDtcblxuICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INGB0L7RgdC10LTQvdC40Lgg0LrQu9C10YLQutC4XG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGwgPSBtYXAuY2hlY2tVbml0TmVpZ2hib3JpbmdzQ2VsbCh1bml0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0LXQtNGDXG4gICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICovXG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXQuZm9vZFR5cGUpO1xuXG4gICAgICAgIGlmICh1bml0LmVuZW15ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBUT0RPINGDINGC0LjQs9GA0LAg0L3QtdGCINCy0YDQsNCz0L7QslxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDQstGA0LDQs9C+0LIo0YLQuNCz0YDQvtCyKVxuICAgICAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgICAgICogKi9cbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXQuZW5lbXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINGB0LLQvtCx0L7QtNC90YvQtSDRj9GH0LXQudC60Lgg0LrRg9C00LAg0LzQvtC20L3QviDQv9C10YDQtdC80LXRgdGC0LjRgtGM0YHRj1xuICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAqL1xuICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIFwiZ3JvdW5kXCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsOiBuZWlnaGJvcmluZ3NDZWxsLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXM6IG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuLy4uL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vLi4vdG9vbHMnO1xuXG4vLyBDT1dTIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3dzQWxnb3JpdGhtICBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIENlbGwgRGlzdGFuY2VcbiAgICAgICAgdGhpcy5kaXN0YW5jZVZpZXcgPSAxO1xuICAgIH1cblxuICAgIGFjdCAodW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGE6XG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQodC+0YHQtdC00L3QuNC80Lgg0LrQu9C10YLQutCw0LzQuCAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0YDQsNCy0L7QuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLQuNCz0YDQsNC80LggICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllc1xuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JfQtdC80LvRkdC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgICovXG5cbiAgICAgICAgLyppZiAodW5pdC5oZWFsdGggPiAwKSB7XG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0KLQuNCz0YDRi1xuICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvL9CV0YHQu9C4INC10YHRgtGMINGB0LLQvtCx0L7QtNC90YvQtSDQutC70LXRgtC60LhcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCR0LXQttC40Lwg0L7RgiDQotC40LPRgNCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUF3YXlGcm9tRW5lbXkobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8v0JXRgdC70Lgg0LXRgdGC0Ywg0YDRj9C00L7QvCDRgtGA0LDQstCwINC10LTQuNC8INC10LUg0Lgg0YPQsdC10LPQsNC10LxcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0YDRj9C00L7QvCDQtdC00LBcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcC5raWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCk7XG4gICAgICAgIH0qL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQkdC10LbQuNC8INC+0YIg0YLQuNCz0YDQsCArXG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUF3YXlGcm9tRW5lbXkgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LVcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vINCh0L7RhdGA0LDQvdC40Lwg0YHRgtCw0YDRi9C5IFVuaXQg0Lgg0LXQs9C+IFJDIChSb3cvQ29sKVxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sINC4INC30LDQv9C40YjQuNC8INCyINC90L7QstGD0Y4g0Y/Rh9C10LnQutGDINC60L7RgNC+0LLRg1xuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUm93L0NvbCDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCiLtC6INC80Ysg0YPQsdC10LPQsNC10Lwg0Lgg0L3QtSDQtdC00LjQvCDRgtGA0LDQstGDLCDQvtGC0L3QuNC80LjQvCDQvdC10LzQvdC+0LPQviDQt9C00L7RgNC+0LLRjNGPXG4gICAgICAgIHVuaXQuc3ViSGVhbHRoKHRoaXMuc3ViSGVhbHRoVmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQldC00LjQvCDRgtGA0LDQstGDXG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVUb0Zvb2QgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1INC10LTRi1xuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHt9O1xuXG4gICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0JTQvtCx0LDQstC40Lwg0LIg0LzQtdC90LXQtNC20LXRgCDRgdC80LXRgNGC0LXQuSDRgtGA0LDQstGDXG4gICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZGllVW5pdFR5cGU6IFwiZ3Jhc3NcIixcbiAgICAgICAgICAgIGRpZVVuaXRJZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICBtYXAuYWRkRGllVW5pdFRvRGllQXJyYXkoZGllVW5pdCk7XG5cbiAgICAgICAgLy8g0J/RgNC4INC/0L7Qs9C70LDRidC10L3QuNC4INGC0YDQsNCy0Ysg0L/RgNC40LHQsNCy0LjQvCDQttC40LfQvdC4LCDQvtCz0YDQsNC90LjRh9C40Lwg0LfQvdCw0YfQtdC90LjQtdC8IDEwMFxuICAgICAgICBpZiAodW5pdC5oZWFsdGggPCAxMDApIHtcblxuICAgICAgICAgICAgaWYgKHVuaXQuaGVhbHRoID4gOTApIHtcbiAgICAgICAgICAgICAgICB1bml0LmFkZEhlYWx0aCgxMDAgLSB1bml0LmhlYWx0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKHRoaXMuYWRkSGVhbHRoVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodCy0L7QsdC+0LTQvdC+0LUg0L/QtdGA0LXQvNC10YnQtdC90LjQtVxuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVGcmVlIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1bml0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQpO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1INGBINC30LXQvNC70LXQuVxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICB1bml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIvLyBERUFUSCBBTEdPUklUTVxuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgVW5pdCBmcm9tICcuLy4uL3VuaXQnO1xuXG5cbi8vIEdST1VORCBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVhdGhBbGdvcml0aG0ge1xuICAgIGFjdCAoZGVhdGhVbml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIGlmIChkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0IDwgZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsKSB7XG4gICAgICAgICAgICBkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0Kys7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IG1hcC5nZXROZXdSb3dDb2xQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdQb3NpdGlvblJvd0NvbCk7XG5cbiAgICAgICAgICAgIHZhciB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGRlYXRoVW5pdC5kaWVVbml0SWQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBkZWF0aFVuaXQuZGllVW5pdFR5cGUsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uLnJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogbmV3UG9zaXRpb24uY29sLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG5ld1VuaXQgPSBuZXcgVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgICAgICB2YXIgZGllT2JqZWN0c09uTWFwSW5kZXggPSBtYXAuZ2V0SW5kZXhGcm9tRGllT2JqZWN0c09uTWFwKGRlYXRoVW5pdCk7XG5cbiAgICAgICAgICAgIHZhciBlbnRpdHlQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IGRlYXRoVW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogZGVhdGhVbml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICAgICAgbWFwLnNldENlbGwoZGVhdGhVbml0LCBuZXcgRW50aXR5KGVudGl0eVBhcmFtKSk7XG5cbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKG5ld1VuaXQsIG5ld1VuaXQpO1xuXG4gICAgICAgICAgICBtYXAuYWRkVG9PYmplY3RzT25NYXAobmV3VW5pdCk7XG5cbiAgICAgICAgICAgIG1hcC5yZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcChkaWVPYmplY3RzT25NYXBJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuXG4vLyBHUkFTUyBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Jhc3NBbGdvcml0aG0gZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGFjdCAoKSB7fTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5cbi8vIEdST1VORCBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdW5kQWxnb3JpdGhtIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBhY3QgKCkge307XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCB0b29scyBmcm9tIFwiLi4vdG9vbHNcIjtcbmltcG9ydCBtYXAgZnJvbSBcIi4uL21hcFwiO1xuXG4vLyBSb3V0ZVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1hcFJvdzowLFxuICAgIG1hcENvbDowLFxuXG4gICAgZ2V0TmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uIDogZnVuY3Rpb24gKG1hcCwgdW5pdCwgaW5kZXhPYmplY3QsIHN0ZXBzLCBjYWxsQmFja1VuaXRSb3V0ZSkge1xuXG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24gPSBbXTtcblxuICAgICAgICB0aGlzLm1hcFJvdyA9IG1hcC5yb3c7XG4gICAgICAgIHRoaXMubWFwQ29sID0gbWFwLmNvbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ZXBzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TmVpZ2hib3JpbmdzQ2VsbChpLCB1bml0LCBmdW5jdGlvbiAobmVpZ2hib3JpbmdzQ2VsbCkge1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxCYWNrVW5pdFJvdXRlKHJvdXRlRGF0YSk7XG4gICAgfSxcblxuICAgIC8vINCf0L7Qu9GD0YfQuNC8INGB0L7RgdC10LTQvdC40Lgg0Y/Rh9C10LnQutC4XG4gICAgZ2V0TmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24oc3RlcCwgdW5pdCwgY2FsbEJhY2spIHtcbiAgICAgICAgbGV0IHVuaXRBbmdsZVBvaW50cyA9IFtdO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAgICB1bml0QW5nbGVQb2ludHMgPSB0aGlzLmdldFVuaXRBbmdsZVBvaW50cyhzdGVwLCB1bml0LnBvc2l0aW9uUm93LCB1bml0LnBvc2l0aW9uQ29sKTtcblxuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviA0LdC10Lwg0YHRgtC+0YDQvtC90LDQvCDQuCDQv9C+0LvRg9GH0LjQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDRj9GH0LXQtdC6XG4gICAgICAgIGZvciAobGV0IHNpZGUgPSAxOyBzaWRlIDwgdW5pdEFuZ2xlUG9pbnRzLmxlbmd0aDsgc2lkZSsrKSB7XG5cblxuXG4gICAgICAgICAgICAvLyBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyB1bml0QW5nbGVQb2ludHNbc2lkZV0ucG9zaXRpb25Sb3dcbiAgICAgICAgICAgIC8vIHVuaXRBbmdsZVBvaW50c1tzaWRlXS5wb3NpdGlvbkNvbFxuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNhbGxCYWNrKG5laWdoYm9yaW5nc0NlbGwpO1xuICAgIH0sXG5cbiAgICBnZXRMZWZ0VG9wQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgcm93LFxuICAgICAgICAgICAgY29sLFxuICAgICAgICAgICAgcm93UmlnaHQsXG4gICAgICAgICAgICBjb2xSaWdodCxcbiAgICAgICAgICAgIGNvdW50Um93ID0gMCxcbiAgICAgICAgICAgIGNvdW50Q29sID0gMDtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9C+0LfQuNGG0LjRjiDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCB1bml0XG4gICAgICAgIHJvdyA9IChwb3NpdGlvblJvdyAtIHN0ZXApIDwgMCA/IDAgOiBwb3NpdGlvblJvdyAtIHN0ZXA7XG4gICAgICAgIGNvbCA9IChwb3NpdGlvbkNvbCAtIHN0ZXApIDwgMCA/IDAgOiBwb3NpdGlvbkNvbCAtIHN0ZXA7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/QvtC30LjRhtC40Y4g0L/RgNCw0LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCB1bml0LFxuICAgICAgICAvLyDQtNC70Y8g0L/QvtC00YHRh9C10YLQsCDQtNC40YHRgtCw0L3RhtC40Lgg0L7RgiDQu9C10LLQvtCz0L4g0LTQviDQv9GA0LDQstC+0LPQviDRg9Cz0LvQsFxuICAgICAgICBjb2xSaWdodCA9IChwb3NpdGlvbkNvbCArIHN0ZXApID4gdGhpcy5tYXBDb2wgPyB0aGlzLm1hcENvbCA6IHBvc2l0aW9uQ29sICsgc3RlcDtcblxuICAgICAgICBjb3VudENvbCA9IChjb2xSaWdodCAtIGNvbCkgKyAxO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogcm93LFxuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQvdC1INCy0YvRiNC70Lgg0LfQsCDQu9C10LLRg9GOINGH0LDRgdGC0Ywg0LPRgNCw0L3QuNGG0Ysg0LrQsNGA0YLRi1xuICAgICAgICAgICAgcG9zaXRpb25Db2w6IGNvbCxcbiAgICAgICAgICAgIGNvdW50Um93OiBjb3VudFJvdyxcbiAgICAgICAgICAgIGNvdW50Q29sOiBjb3VudENvbCxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0UmlnaHRUb3BBbmdsZVBvaW50OiBmdW5jdGlvbihzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IHJvdyxcbiAgICAgICAgICAgIGNvbCxcbiAgICAgICAgICAgIHJvd0JvdHRvbSxcbiAgICAgICAgICAgIGNvbEJvdHRvbSxcbiAgICAgICAgICAgIGNvdW50Um93ID0gMCxcbiAgICAgICAgICAgIGNvdW50Q29sID0gMDtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9C+0LfQuNGG0LjRjiDQv9GA0LDQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwIHVuaXRcbiAgICAgICAgcm93ID0gcG9zaXRpb25Sb3cgLSBzdGVwO1xuICAgICAgICBjb2wgPSAocG9zaXRpb25Db2wgKyBzdGVwKSA+IHRoaXMubWFwQ29sID8gdGhpcy5tYXBDb2wgOiBwb3NpdGlvbkNvbCArIHN0ZXA7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/QvtC30LjRhtC40Y4g0L/RgNCw0LLQvtCz0L4g0YPQs9C70LAgdW5pdCxcbiAgICAgICAgLy8g0LTQu9GPINC/0L7QtNGB0YfQtdGC0LAg0LTQuNGB0YLQsNC90YbQuNC4INC+0YIg0LvQtdCy0L7Qs9C+INC00L4g0L/RgNCw0LLQvtCz0L4g0YPQs9C70LBcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgcG9zaXRpb25Sb3c6IHBvc2l0aW9uUm93ICsgc3RlcCxcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uQ29sOiBwb3NpdGlvbkNvbCArIHN0ZXAsXG4gICAgICAgIC8vIH1cbiAgICAgICAgcm93Qm90dG9tID0gKHBvc2l0aW9uUm93ICsgc3RlcCkgPiB0aGlzLm1hcFJvdyA/IHRoaXMubWFwUm93IDogcG9zaXRpb25Sb3cgKyBzdGVwO1xuICAgICAgICBjb2xCb3R0b20gPSAocG9zaXRpb25Db2wgKyBzdGVwKSA+IHRoaXMubWFwQ29sID8gdGhpcy5tYXBDb2wgOiBwb3NpdGlvbkNvbCArIHN0ZXA7XG5cbiAgICAgICAgY291bnRDb2wgPSAoY29sUmlnaHQgLSBjb2wpICsgMTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHJvdyxcbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0L3QtSDQstGL0YjQu9C4INC30LAg0LvQtdCy0YPRjiDRh9Cw0YHRgtGMINCz0YDQsNC90LjRhtGLINC60LDRgNGC0YtcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBjb2wsXG4gICAgICAgICAgICBjb3VudFJvdzogY291bnRSb3csXG4gICAgICAgICAgICBjb3VudENvbDogY291bnRDb2wsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludDogZnVuY3Rpb24oc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7fSxcbiAgICBnZXRMZWZ0Qm90dG9tQW5nbGVQb2ludDogZnVuY3Rpb24oc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7fSxcblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAqIEBwYXJhbSBzdGVwXG4gICAgICogQHBhcmFtIHBvc2l0aW9uUm93XG4gICAgICogQHBhcmFtIHBvc2l0aW9uQ29sXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldFVuaXRBbmdsZVBvaW50czogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdW5pdEFuZ2xlUG9pbnRzID0gW107XG5cbiAgICAgICAgLy8gTGVmdCBUb3AgQW5nbGUgUG9pbnRcbiAgICAgICAgdW5pdEFuZ2xlUG9pbnRzLnB1c2godGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpKTtcblxuICAgICAgICAvLyBSaWdodCBUb3AgQW5nbGUgUG9pbnRcbiAgICAgICAgdW5pdEFuZ2xlUG9pbnRzLnB1c2godGhpcy5nZXRSaWdodFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSk7XG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgcG9zaXRpb25Sb3c6IHBvc2l0aW9uUm93IC0gc3RlcCxcbiAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbkNvbDogcG9zaXRpb25Db2wgKyBzdGVwLFxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIFJpZ2h0IEJvdHRvbSBBbmdsZSBQb2ludFxuICAgICAgICB1bml0QW5nbGVQb2ludHMucHVzaCh0aGlzLmdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpKTtcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICBwb3NpdGlvblJvdzogcG9zaXRpb25Sb3cgKyBzdGVwLFxuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uQ29sOiBwb3NpdGlvbkNvbCArIHN0ZXAsXG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gTGVmdCBCb3R0b20gQW5nbGUgUG9pbnRcbiAgICAgICAgdW5pdEFuZ2xlUG9pbnRzLnB1c2godGhpcy5nZXRMZWZ0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpKTtcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICBwb3NpdGlvblJvdzogcG9zaXRpb25Sb3cgKyBzdGVwLFxuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uQ29sOiBwb3NpdGlvbkNvbCAtIHN0ZXAsXG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgcmV0dXJuIHVuaXRBbmdsZVBvaW50cztcbiAgICB9XG5cbn0iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi8uLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuLy4uL3Rvb2xzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL3JvdXRlJztcblxuLy8gVElHRVJTIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlcnNBbGdvcml0aG0gZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIENlbGwgRGlzdGFuY2VcbiAgICAgICAgdGhpcy5kaXN0YW5jZVZpZXcgPSAyO1xuICAgIH1cblxuICAgIGFjdCAodW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIFJvdXRlLmdldE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbihtYXAsIHVuaXQsIGluZGV4T2JqZWN0LCB0aGlzLmRpc3RhbmNlVmlldywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vINCS0L7QvtC30LLRgNCw0YLQuNGC0Ywg0L7QsdGK0LXQutGCINGBINGB0L7RgdC10LTQvdC40LzQuCDRj9GH0LXQudC60LDQvNC4XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhOlxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JrQsNGA0YLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubWFwXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQodC+0YHQtdC00L3QuNC80Lgg0LrQu9C10YLQutCw0LzQuCAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0YDQsNCy0L7QuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLQuNCz0YDQsNC80LggICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllc1xuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JfQtdC80LvRkdC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgICovXG5cbiAgICAgICAvKiBpZiAodW5pdC5oZWFsdGggPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INC10LTQsFxuICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1hcC5raWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCk7XG4gICAgICAgIH0qL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQldC00LjQvCDQutC+0YDQvtCy0YNcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZVRvRm9vZCAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0LrQvtGA0L7QslxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCAtMSk7XG5cbiAgICAgICAgLy8g0K3RgtCwINGP0YfQtdC50LrQsCDRj9Cy0LvRj9C10YLRjNGB0Y8g0LrQvtGA0L7QstC+0LksINGCLtC1INCV0JTQntCZISEhXG4gICAgICAgIC8vIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXVxuICAgICAgICAvLyB1bml0LmVhdGVuKHRydWUsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40LwgaW5kZXgg0YHRitC10LTQtdC90L7QuSDQutC+0YDQvtCy0Ysg0LjQtyDQvNCw0YHRgdC40LLQsCBvYmplY3RzT25NYXBcbiAgICAgICAgbGV0IGZvb2RJbmRleCA9IG1hcC5nZXRJbmRleEZyb21PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdKTtcblxuICAgICAgICAvLyDQn9C+0LzQtdGC0LjQu9C4INGC0LjQs9GA0LAg0YfRgtC+INC+0L0g0YHRitC10Lsg0LrQvtGA0L7QstGDXG4gICAgICAgIHVuaXQuZWF0ZW4obmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBmb29kSW5kZXgpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YLQuNCz0YDQsCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQo9C00LDQu9C40Lwg0LrQvtGA0L7QstGDINC40Lcg0LjQs9GA0L7QstC+0LPQviDQvNCw0YHRgdC40LLQsFxuICAgICAgICBtYXAucmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoZm9vZEluZGV4KTtcblxuICAgICAgICBkZWxldGUgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdO1xuXG4gICAgICAgIC8vINCf0YDQuCDQv9C+0LPQu9Cw0YnQtdC90LjQuCDRgtGA0LDQstGLINC/0YDQuNCx0LDQstC40Lwg0LbQuNC30L3QuCwg0L7Qs9GA0LDQvdC40YfQuNC8INC30L3QsNGH0LXQvdC40LXQvCAxMDBcbiAgICAgICAgaWYgKHVuaXQuaGVhbHRoIDwgMTAwICkge1xuXG4gICAgICAgICAgICBpZiAodW5pdC5oZWFsdGggPiA5MCkge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKDEwMC11bml0LmhlYWx0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKHRoaXMuYWRkSGVhbHRoVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodCy0L7QsdC+0LTQvdC+0LUg0L/QtdGA0LXQvNC10YnQtdC90LjQtVxuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVGcmVlIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHt9O1xuXG4gICAgICAgIC8vIHVuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0XG5cbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDRg9Cx0LjQuyDQu9C4INC00LDQvdC90YvQuSDRgtC40LPRgCDRgtC+0LvRjNC60L4g0YfRgtC+INC60L7RgNC+0LLRgyxcbiAgICAgICAgLy8g0LXRgdC70Lgg0LTQsCwg0YLQviDQvdCwINGB0LvQtdC0LiDRiNCw0LPQtSDQv9C+0YHRgtCw0LLQuNC8INC90LAg0LXQs9C+INC80LXRgdGC0L4g0YLQsNCx0LvQuNGH0LrRg3VuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0XG4gICAgICAgIGlmICh1bml0LmlzRWF0ZW4oKSkge1xuXG4gICAgICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgICAgICBkaWVVbml0VHlwZTogdW5pdC5mb29kSW5mb3JtYXRpb24uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGRpZVVuaXRJZDogdW5pdC5mb29kSW5mb3JtYXRpb24uaWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICAgICAgZGllVW5pdC5zZXRJbmRleE9iamVjdCh1bml0LmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCk7XG5cbiAgICAgICAgICAgIG1hcC5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAgICAgbWFwLnNldENlbGwodW5pdCwgZGllVW5pdCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2xkVW5pdC5yZXNldEVhdGVuKCk7XG5cbiAgICAgICAgb2xkVW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0YEg0LfQtdC80LvQtdC5XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IERlYXRoQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2RlYXRoQWxnb3JpdGhtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGllVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuaW5kZXhPYmplY3QgPSBwYXJhbS5pbmRleE9iamVjdDtcblxuICAgICAgICB0aGlzLmFsZ29yaXRtcyA9IG5ldyBEZWF0aEFsZ29yaXRobSgpO1xuXG4gICAgICAgIHRoaXMuZGllVW5pdFR5cGUgPSBwYXJhbS5kaWVVbml0VHlwZTtcbiAgICAgICAgdGhpcy5kaWVVbml0SWQgPSBwYXJhbS5kaWVVbml0SWQ7XG5cbiAgICAgICAgdGhpcy51bml0UmVzdXJlY3Rpb25JbnRlcnZhbCA9IDM7XG4gICAgICAgIHRoaXMudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0ID0gMDtcblxuICAgICAgICAvLyB0aGlzLnNvdW5kRGllID0gbmV3IEdhbWVTb3VuZHMoXCJhdWRpby9kaWVfXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiLm1wM1wiKTtcbiAgICB9XG59XG5cbkRpZVVuaXQucHJvdG90eXBlLnNldEluZGV4T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5pbmRleE9iamVjdCA9IGluZGV4T2JqZWN0O1xufTtcblxuXG4vKipcbiAqINCg0LDQt9C90YvQtSDQtNC10LnRgdGC0LLQuNGPINC+0LHRitC10LrRgtCwXG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLmFjdGlvbiA9IGZ1bmN0aW9uIChtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5hbGdvcml0bXMuYWN0KHRoaXMsIG1hcCwgaW5kZXhPYmplY3QpO1xufTtcblxuXG4vKipcbiAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAqIEBwYXJhbSB1bml0XG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLnVwZGF0ZVJvd0NvbCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gICAgdGhpcy5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICB0aGlzLmlkID0gcGFyYW0uaWQ7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gcGFyYW0uY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gcGFyYW0ub2JqUG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMucG9zaXRpb25Db2wgPSBwYXJhbS5vYmpQb3NpdGlvbkNvbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqL1xuICAgIHVwZGF0ZVJvd0NvbCAodW5pdCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQktGL0LLQvtC0IEhUTUwg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNob3cgKCkge1xuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdiLXVuaXQgXCIrdGhpcy5jbGFzc05hbWUrXCInPjwvZGl2PlwiO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICAvKipcbiAgICAgKiBPQkogR0FNRVxuICAgICAqIEBwYXJhbSBzZXR0aW5nXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmcgPSBzZXR0aW5nO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjQvCDRgNC10LbQuNC8INC40LPRgNGLXG4gICAgICAgIHRoaXMuZGV2TW9kZSA9IHNldHRpbmcuZGV2TW9kZSB8fCBmYWxzZTtcblxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40Lwg0YHQutC+0YDQvtGB0YLRjCDQuNCz0YDQvtCy0L7Qs9C+INGG0LjQutC70LBcbiAgICAgICAgdGhpcy50aW1lUmVuZGVyID0gc2V0dGluZy50aW1lUmVuZGVyIHx8IDUwMDtcblxuICAgICAgICB0aGlzLmJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItYnV0dG9uc19fYnRuLXN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1idXR0b25zX19idG4tcGF1c2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHQU1FIExPT1BcbiAgICAgKi9cbiAgICBydW4gKCkge1xuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC90L7QstGD0Y4g0YHRhtC10L3Rg1xuICAgICAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUodGhpcy5zZXR0aW5nKTtcblxuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1INC90LAg0YHRhtC10L3QtVxuICAgICAgICBpZiAoc2NlbmUuYnVpbGQoKSkge1xuXG4gICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC30LDQs9GA0YPQttC10L3QsC4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLFwi0J3QsNC20LzQuNGC0LUgJ9Cd0LDRh9Cw0YLRjCDQuNCz0YDRgycuXCIsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGxldCBsb29wO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGV2TW9kZSkge1xuXG4gICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQsiDQvtCx0YvRh9C90L7QvCDRgNC10LbQuNC80LUuJywgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQt9Cw0L/Rg9GJ0LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vINCT0LvQsNCy0L3Ri9C5IExvb3BcbiAgICAgICAgICAgICAgICAgICAgbG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lLmlzc2V0T2JqZWN0T25NYXAoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmRpZU1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgc2VsZi50aW1lUmVuZGVyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9vcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQvtGB0YLQsNC90L7QstC70LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzY2VuZS5pc3NldE9iamVjdE9uTWFwKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQsiDRgNC10LbQuNC80LUg0YDQsNC30YDQsNCx0L7RgtGH0LjQutCwLicsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9Ca0L7QvdC10YYg0LjQs9GA0YsuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgYWxlcnQoJ0dhbWUgT3ZlcicpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tIFwiLi9zZXR0aW5nXCI7XG5cbi8vINCf0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDQtNC+0LrRg9C80LXQvdGC0LAg0LfQsNC/0YPRgdGC0LjQvCDQuNCz0YDRg1xuJChmdW5jdGlvbiAoKSB7XG4gICAgJC5sTm90aWZ5KCk7XG5cbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKHNldHRpbmcpO1xuXG4gICAgZ2FtZS5ydW4oKTtcbn0pO1xuIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgVW5pdCBmcm9tICcuL3VuaXQnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9zZXR0aW5nJztcbmltcG9ydCBEaWVVbml0IGZyb20gJy4vZGllVW5pdCc7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5cbi8qKlxuICog0JrQu9Cw0YHRgSDRgNCw0LHQvtGC0Ysg0YEg0LrQsNGA0YLQvtC5XG4gKiBAcGFyYW0gc2V0dGluZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFwRGF0YSA9IFtdO1xuXG4gICAgICAgIC8vINCe0LHRitC10LrRgtGLINC00LvRjyDQutCw0YDRgtGLXG4gICAgICAgIHRoaXMubWFwT2JqZWN0cyA9IHNldHRpbmcubWFwT2JqZWN0cztcblxuICAgICAgICAvLyDQodC/0LjRgdC+0Log0L7QsdGK0LXQutGC0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0LfQsNC00LXQudGB0YLQstC+0LLQsNC90L3RiyDQvdCwINC60LDRgNGC0LVcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXAgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMucm93ID0gc2V0dGluZy5tYXBTaXplLnJvdyB8fCAwO1xuICAgICAgICB0aGlzLmNvbCA9IHNldHRpbmcubWFwU2l6ZS5jb2wgfHwgMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7RgdGC0YDQvtC40Lwg0L/Rg9GB0YLRg9GOINC60LDRgNGC0YMg0L3QsCDQvtGB0L3QvtCy0LUg0L3QsNGH0LDQu9GM0L3Ri9GFIFJvdy9Db2xcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB3aGlsZSAodGhpcy5tYXBEYXRhLnB1c2goW10pIDwgdGhpcy5yb3cpIDtcblxuICAgICAgICBpZiAodGhpcy5tYXBEYXRhLmxlbmd0aCA9PSB0aGlzLnJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQk9C10L3QtdGA0LDRhtC40Y8g0LrQsNGA0YLRi1xuICAgICAqL1xuICAgIGdlbmVyYXRlKCkge1xuXG4gICAgICAgIGxldCBvYmpJRCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgb2JqZWN0TmFtZSBpbiB0aGlzLm1hcE9iamVjdHMpIHtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0TmFtZSk7XG4gICAgICAgICAgICBsZXQgb2JqTWluID0gdGhpcy5tYXBPYmplY3RzW29iamVjdE5hbWVdLm1pbjtcbiAgICAgICAgICAgIGxldCBvYmpNYXggPSB0aGlzLm1hcE9iamVjdHNbb2JqZWN0TmFtZV0ubWF4O1xuXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQvtCx0YrQtdC60YIg0Y/QstC70Y/QtdGC0YzRgdGPINGB0YLQsNGC0LjQutC+0LksXG4gICAgICAgICAgICAvLyDRgtC+INC/0L7RgdGC0LDRgNC10LzRgdGPINC00LDRgtGMINC/0L4g0LzQsNC60YHQuNC80YPQvNGDINC30L3QsNGH0LXQvdC40Y8gbWluL21heFxuICAgICAgICAgICAgLy8g0LTQu9GPINC/0L7Qu9C90L7Qs9C+INC30LDQv9C+0LvQvdC10L3QuNGPINC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbiAgICAgICAgICAgIGlmIChvYmpNaW4gPT09IG51bGwgJiYgb2JqTWF4ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb2JqTWluID0gKHRoaXMucm93ICsgdGhpcy5jb2wpICogMjtcbiAgICAgICAgICAgICAgICBvYmpNYXggPSAodGhpcy5yb3cgKyB0aGlzLmNvbCkgKiAxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC60L7Quy3QstC+INC+0LHRitC10LrRgtC+0LIg0L3QsCDQutCw0YDRgtC1XG4gICAgICAgICAgICBsZXQgb2JqQ291bnRPbk1hcCA9IHRvb2xzLnJhbmRvbUludGVnZXIob2JqTWluLCBvYmpNYXgpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9iamVjdE5hbWVbb2JqQ291bnRPbk1hcF06IFwiICsgb2JqZWN0TmFtZSArIFwiIFwiICsgb2JqQ291bnRPbk1hcCk7XG5cbiAgICAgICAgICAgIC8vINCf0YDQvtC50LTQtdC80YHRjyDQv9C+INGN0YLQvtC80YMg0LrQvtC70LjRh9C10LLRgdGC0LLRg1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpDb3VudE9uTWFwOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCBtYXBSb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFwUm93Q29sTm9ybWFsOiAnLCBtYXBSb3dDb2wpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0pIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaklELFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IG1hcFJvd0NvbC5yb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogbWFwUm93Q29sLmNvbFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0O1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0TmFtZSA9PSBcImdyb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IEVudGl0eSh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBVbml0KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPSB1bml0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09ICdjb3dzJyB8fCBvYmplY3ROYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvT2JqZWN0c09uTWFwKHVuaXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXRTZXR0aW5nID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqSUQ6IG9iaklELFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyeU5ld0dlbmVyYXRlKHVuaXRTZXR0aW5nLCBvYmpDb3VudE9uTWFwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9iaklEKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LLRgtC+0YDQvdCw0Y8g0LPQtdC90LXRgNCw0YbQuNGPLCDQsiDRgdC70YPRh9C40Lgg0LfQsNC90Y/RgtC+0LPQviDQvNC10YHRgtCwINCyINC80LDRgdGB0LjQstC1XG4gICAgICogQHBhcmFtIG9iamVjdFNldHRpbmdcbiAgICAgKiBAcGFyYW0gY291bnRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICB0cnlOZXdHZW5lcmF0ZShvYmplY3RTZXR0aW5nLCBjb3VudCkge1xuXG4gICAgICAgIGlmIChjb3VudCA8PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0Y3RgtC+0LzRgyDQutC+0LvQuNGH0LXQstGB0YLQstGDXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXG4gICAgICAgICAgICAvLyDRgdC+0LfQtNCw0LTQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLINC00LvRjyDQv9GA0L7RgdGC0LDQstC70LXQvdC40Y9cbiAgICAgICAgICAgIGxldCBtYXBSb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXBSb3dDb2xSZWN1cnNpdmU6ICcsIG1hcFJvd0NvbCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBvYmplY3RTZXR0aW5nLm9iaklELFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IG1hcFJvd0NvbC5yb3csXG4gICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBtYXBSb3dDb2wuY29sXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGxldCB1bml0O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSBcImdyb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgRW50aXR5KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBVbml0KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdID0gdW5pdDtcblxuICAgICAgICAgICAgICAgIGlmIChvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUgPT0gJ2Nvd3MnIHx8IG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSAndGlnZXJzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvT2JqZWN0c09uTWFwKHVuaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB1bml0U2V0dGluZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgb2JqSUQ6IG9iamVjdFNldHRpbmcub2JqSUQsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdFNldHRpbmcub2JqZWN0TmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJ5TmV3R2VuZXJhdGUodW5pdFNldHRpbmcsIGNvdW50IC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70YzQvdGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsCDQvtGB0L3QvtCy0LUg0LrQvtC7LdCy0L4g0YHRgtGA0L7QuiDQuCDQutC+0LvQvtC90L7QulxuICAgICAqIEByZXR1cm5zIHt7cm93OiAqLCBjb2w6ICp9fVxuICAgICAqL1xuICAgIGdldFJhbmRvbVJvd0NvbENvb3JkKCkge1xuICAgICAgICBsZXQgY291bnRSb3cgPSB0aGlzLnJvdyxcbiAgICAgICAgICAgIGNvdW50Q29sID0gdGhpcy5jb2w7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvdzogdG9vbHMucmFuZG9tSW50ZWdlcigwLCBjb3VudFJvdyksXG4gICAgICAgICAgICBjb2w6IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgY291bnRDb2wpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY2hlY2tSb3V0ZSAoKSB7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbih1bml0LCB0aGlzLm1hcCwgaW5kZXhPYmplY3QpO1xuXG4gICAgfVxuICAgIFxuICAgIGdldFJhbmRvbVJvd0NvbEJhc2VkT25Vbml0KGNlbGwsIHN0ZXBzKSB7XG4gICAgICAgIGxldCBpc3NldFJvdXRlID0gdGhpcy50cnlSb3V0ZShzdGVwcyk7XG5cblxuXG5cbiAgICAgICAgLy8gbGV0IHJvd01pbiA9ICgoY2VsbC5wb3NpdGlvblJvdyAtIDEpID49IDApID8gKGNlbGwucG9zaXRpb25Sb3cgLSAxKSA6IDA7XG4gICAgICAgIC8vIGxldCByb3dNYXggPSAoKGNlbGwucG9zaXRpb25Sb3cgKyAxKSA8PSB0aGlzLnJvdykgPyAoY2VsbC5wb3NpdGlvblJvdyArIDEpIDogdGhpcy5yb3c7XG5cbiAgICAgICAgLy8gbGV0IGNvbE1pbiA9ICgoY2VsbC5wb3NpdGlvbkNvbCAtIDEpID49IDApID8gKGNlbGwucG9zaXRpb25Sb3cgLSAxKSA6IDA7XG4gICAgICAgIC8vIGxldCBjb2xNYXggPSAoKGNlbGwucG9zaXRpb25Db2wgKyAxKSA8PSB0aGlzLmNvbCkgPyAoY2VsbC5wb3NpdGlvbkNvbCArIDEpIDogdGhpcy5jb2w7XG5cbiAgICAgICAgLy8gbGV0IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAvLyAgICAgbmV3UG9zaXRpb25Db2w7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIG5ld1Bvc2l0aW9uUm93ID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xXaXRoRXhjbHVkZShyb3dNaW4sIHJvd01heCwgY2VsbC5wb3NpdGlvblJvdyk7XG4gICAgICAgIC8vIG5ld1Bvc2l0aW9uQ29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xXaXRoRXhjbHVkZShjb2xNaW4sIGNvbE1heCwgY2VsbC5wb3NpdGlvblJvdyk7XG5cbiAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbFxuICAgICAgICAvLyB9XG4gICAgfTtcblxuICAgIGdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKG1pbkNlbGwsIG1heENlbGwsIGV4Y2x1ZGVWYWx1ZSkge1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgdmFsdWUgPSB0b29scy5yYW5kb21JbnRlZ2VyKG1pbkNlbGwsIG1heENlbGwpO1xuXG4gICAgICAgIHdoaWxlICh2YWx1ZSA9PSBleGNsdWRlVmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9vbHMucmFuZG9tSW50ZWdlcihtaW5DZWxsLCBtYXhDZWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG5cbiAgICBnZXROZXdSb3dDb2xQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93Q29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xDb29yZCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZPUiBORVcgVU5JVCBHRU5FUkVURSBORVcgUE9TSVRJT046IFRSWVtcIiArIChpKyspICsgXCJdIC0+IFtSKFwiICsgbmV3UG9zaXRpb25Sb3dDb2wucm93ICsgXCIpOkMoXCIgKyBuZXdQb3NpdGlvblJvd0NvbC5jb2wgKyBcIildXCIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tYXBEYXRhW25ld1Bvc2l0aW9uUm93Q29sLnJvd11bbmV3UG9zaXRpb25Sb3dDb2wuY29sXS5jbGFzc05hbWUgPT09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UG9zaXRpb25Sb3dDb2w7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRydWUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDQtNC40Lwg0Y/Rh9C10LnQutGDXG4gICAgICogQHBhcmFtIG9sZFVuaXRcbiAgICAgKiBAcGFyYW0gbmV3VW5pdFxuICAgICAqL1xuICAgIHNldENlbGwob2xkVW5pdCwgbmV3VW5pdCkge1xuXG4gICAgICAgIHRoaXMubWFwRGF0YVtvbGRVbml0LnBvc2l0aW9uUm93XVtvbGRVbml0LnBvc2l0aW9uQ29sXSA9IG5ld1VuaXQ7XG5cbiAgICAgICAgdGhpcy5tYXBEYXRhW29sZFVuaXQucG9zaXRpb25Sb3ddW29sZFVuaXQucG9zaXRpb25Db2xdLnVwZGF0ZVJvd0NvbChvbGRVbml0KTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRj9GH0LXQudC60YNcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Sb3dcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Db2xcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRDZWxsKHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBEYXRhW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbF07XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvRj9C10YIgVW5pdCDQuNC3INC80LDRgdGB0LjQstCwIE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICovXG4gICAgYWRkVG9PYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcC5wdXNoKHVuaXQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICByZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcC5zcGxpY2UoaW5kZXhPYmplY3QsIDEpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgRGllT2JqZWN0c09uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0YHQvNC10YDRgtC4IHVuaXRzXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICByZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcChpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcC5zcGxpY2UoaW5kZXhPYmplY3QsIDEpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNC8INC00LvRjyBVbml0INC10LPQviBSQyhSb3cvQ29sKSDQsiDQvNCw0YHRgdC40LLQtSBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIHVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcCh1bml0LCBpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Db2wgPSB1bml0LnBvc2l0aW9uQ29sO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70LjQvCDQvtCx0YrQtdC60YJcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIGtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCDQvNC+0LPQuNC70LrRg1xuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2wsXG4gICAgICAgICAgICBkaWVVbml0VHlwZTogdW5pdC5jbGFzc05hbWUsXG4gICAgICAgICAgICBkaWVVbml0SWQ6IHVuaXQuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZGllVW5pdCA9IG5ldyBEaWVVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgdGhpcy5zZXRDZWxsKHVuaXQsIGRpZVVuaXQpO1xuXG4gICAgICAgIHRoaXMuYWRkRGllVW5pdFRvRGllQXJyYXkoZGllVW5pdCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kaWVPYmplY3RzT25NYXApO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0LvQuCDQtdGJ0LUg0L7QsdGK0LXQutGC0Ysg0LIg0LzQsNGB0YHQuNCy0LUg0LTQu9GPINGB0YPRidC10LLRgdGC0LLQvtCy0LDQvdC40Y8g0LjQs9GA0YtcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGlzc2V0T2JqZWN0T25NYXAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5vYmplY3RzT25NYXAubGVuZ3RoID4gMCA/IDEgOiAwKTtcbiAgICB9O1xuXG5cbi8vINCf0YDQvtCy0LXRgNC40Lwg0YHQvtGB0LXQtNC90LjQuCDQutC70LXRgtC60LggK1xuICAgIGNoZWNrVW5pdE5laWdoYm9yaW5nc0NlbGwodW5pdCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB1bml0LmNsYXNzTmFtZSA9PSAndGlnZXJzJ1xuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIHVuaXQuY2xhc3NOYW1lID09ICdjb3dzJ1xuICAgICAgICApIHtcblxuICAgICAgICAgICAgbGV0IGNlbGxzID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3RvcFJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0Qm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0Qm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdFRvcCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGxldCB1bml0UG9zaXRpb25Sb3cgPSBwYXJzZUludCh1bml0LnBvc2l0aW9uUm93KTtcbiAgICAgICAgICAgIGxldCB1bml0UG9zaXRpb25Db2wgPSBwYXJzZUludCh1bml0LnBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIC8vIGxldCBtYXBEYXRlID0gdGhpcy5tYXBEYXRhO1xuXG4gICAgICAgICAgICAvLyDQndC1INC30LDQsdGL0YLRjCDQv9GA0L4g0LPRgNCw0L3QuNGG0Ysg0LrQsNGA0YLRi1xuICAgICAgICAgICAgbGV0IGJvcmRlciA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgdG9wUmlnaHQ6IHRoaXMuY29sLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB0aGlzLmNvbCxcbiAgICAgICAgICAgICAgICByaWdodEJvdHRvbTogdGhpcy5jb2wsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLnJvdyxcbiAgICAgICAgICAgICAgICBsZWZ0Qm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgbGVmdFRvcDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcERhdGUpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQTDpcIiwgdW5pdFBvc2l0aW9uUm93LCB1bml0UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICAvLyBUT1Ag0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQstC10YDRhdGDICtcbiAgICAgICAgICAgIGlmICgodW5pdFBvc2l0aW9uUm93IC0gMSkgPj0gYm9yZGVyLnRvcCkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzBdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1swXS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyAtIDFdW3VuaXRQb3NpdGlvbkNvbF07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gVE9QX1JJR0hUINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0LLQtdGA0YXRgy3QstC/0YDQsNCy0L4gK1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIudG9wUmlnaHRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzFdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1sxXS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyAtIDFdW3VuaXRQb3NpdGlvbkNvbCArIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFJJR0hUINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0L/RgNCw0LLQviArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvbkNvbCArIDEpIDwgYm9yZGVyLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbMl0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzJdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93XVt1bml0UG9zaXRpb25Db2wgKyAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBSSUdIVF9CT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQv9GA0LDQstC+LdCy0L3QuNC30YMgK1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgKyAxKSA8IGJvcmRlci5ib3R0b21cbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci5yaWdodEJvdHRvbVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbM10uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzNdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93ICsgMV1bdW5pdFBvc2l0aW9uQ29sICsgMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gQk9UVE9NINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINCy0L3QuNC30YMgK1xuICAgICAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Sb3cgKyAxKSA8IGJvcmRlci5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBjZWxsc1s0XS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbNF0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgKyAxXVt1bml0UG9zaXRpb25Db2xdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIExFRlRfQk9UVE9NINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINGB0LvQtdCy0LAt0LLQvdC40LfRgyArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCAtIDEpID49IGJvcmRlci5sZWZ0Qm90dG9tXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1s1XS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbNV0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgKyAxXVt1bml0UG9zaXRpb25Db2wgLSAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBMRUZUINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINGB0LvQtdCy0LAgK1xuICAgICAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Db2wgLSAxKSA+PSBib3JkZXIubGVmdCkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzZdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s2XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvd11bdW5pdFBvc2l0aW9uQ29sIC0gMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTEVGVF9UT1Ag0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LvQtdCy0LAt0LLQstC10YDRhdGDICtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uUm93IC0gMSkgPj0gYm9yZGVyLnRvcFxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCAtIDEpID49IGJvcmRlci5sZWZ0XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1s3XS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbN10uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgLSAxXVt1bml0UG9zaXRpb25Db2wgLSAxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51bml0KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGxzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUk9XOiBcIiArIHVuaXRQb3NpdGlvblJvdywgXCJDT0w6IFwiICsgdW5pdFBvc2l0aW9uQ29sICk7XG5cbiAgICAgICAgICAgIHJldHVybiBjZWxscztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCe0YLRhNC40LvRjNGC0YDRg9C10Lwg0Y/Rh9C10LnQutC4INC/0L4g0YLQuNC/0YMgdW5pdFR5cGVcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFxuICAgICAqIEBwYXJhbSB1bml0VHlwZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBmaWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXRUeXBlKSB7XG5cbiAgICAgICAgbGV0IGFyciA9IFtdO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LHQtdGA0LXQvCDQv9C+0LvRg9GH0LXQvdC90YvQuSDQvNCw0YHRgdC40LIg0YEg0Y/Rh9C10LnQutCw0LzQuCDQvdCw0YXQvtC00Y/RidC40LzQuNGB0Y8g0YDRj9C00L7QvFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5laWdoYm9yaW5nc0NlbGwubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgLy8g0K/Rh9C10LnQutCwINC90LUg0LLRi9GF0L7QtNC40YIg0LfQsCDQs9GA0LDQvdC40YbRi1xuICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uZXhpc3QpIHtcblxuICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQuY2xhc3NOYW1lICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5jb250ZW50LmNsYXNzTmFtZSA9PSB1bml0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gobmVpZ2hib3JpbmdzQ2VsbFtpXS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDQuNC90LTQtdC60YEg0LrQvtGA0L7QstGLINC/0YDQuCDQtdC1INGB0YrQtdC00LDQvdC40LhcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW5kZXhGcm9tT2JqZWN0c09uTWFwKHVuaXQpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMub2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9PSB1bml0LnBvc2l0aW9uUm93XG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Db2wgPT0gdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4T2JqZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4vL01BUCBERUFUSCBNQU5BR0VcbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDQuNC90LTQtdC60YEg0LrQvtGA0L7QstGLINC/0YDQuCDQtdC1INGB0YrQtdC00LDQvdC40LhcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW5kZXhGcm9tRGllT2JqZWN0c09uTWFwKHVuaXQpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMuZGllT2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9PSB1bml0LnBvc2l0aW9uUm93XG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Db2wgPT0gdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4T2JqZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRGllVW5pdFRvRGllQXJyYXkodW5pdCkge1xuICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcC5wdXNoKHVuaXQpO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuXG4vKipcbiAqINCY0LPRgNC+0LLQsNGPINGB0YbQtdC90LBcbiAqIEBwYXJhbSBzZXR0aW5nXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItZ2FtZV9fcGxhaW4nKTtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKHNldHRpbmcpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQutCw0YDRgtGDINC4INC30LDQv9C+0LvQvdC40Lwg0LXQtSDQvtCx0YrQtdC60YLQsNC80LhcbiAgICAgKi9cbiAgICBidWlsZCAoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMubWFwLmluaXQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdlbmVyYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQntGC0YDQuNGB0L7QstC60LAg0LfQsNC/0L7Qu9C90LXQvdC90L7QuSDQutCw0YDRgtGLXG4gICAgICovXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IG1hcEhUTUwgPSAnJztcblxuXG4gICAgICAgIC8vINCf0L7RgdGC0YDQvtC40Lwg0LjQs9GA0L7QstC+0LUg0L/QvtC70LVcbiAgICAgICAgZm9yIChsZXQgcG9zaXRpb25Sb3cgPSAwOyBwb3NpdGlvblJvdyA8IHRoaXMubWFwLnJvdzsgcG9zaXRpb25Sb3crKykge1xuICAgICAgICAgICAgbWFwSFRNTCArPSBcIjxkaXYgY2xhc3M9J3Jvdyc+XCI7XG4gICAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbkNvbCA9IDA7IHBvc2l0aW9uQ29sIDwgdGhpcy5tYXAuY29sOyBwb3NpdGlvbkNvbCsrKSB7XG4gICAgICAgICAgICAgICAgbWFwSFRNTCArPSBcIjxkaXYgY2xhc3M9J2NlbGwnPiBcIiArIHRoaXMubWFwLmdldENlbGwocG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKS5zaG93KCkgKyBcIjwvZGl2PlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFwSFRNTCArPSBcIjwvZGl2PlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JTQvtCx0LDQstC40Lwg0YHQvtCx0YDQsNC90L3Rg9GOIEhUTUwg0LrQsNGA0YLRgyDQsiBET01cbiAgICAgICAgdGhpcy5wbGFpbi5pbm5lckhUTUwgPSBtYXBIVE1MO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCU0LXQudGB0YLQstC40Y8g0LLRgdC10YUg0L7QsdGK0LXQutGC0L7QsiDQvdCwINC60LDRgNGC0LVcbiAgICAgKi9cbiAgICBhY3Rpb25Pbk1hcCAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWFwLm9iamVjdHNPbk1hcCk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMubWFwLm9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgIHRoaXMubWFwLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0uYWN0aW9uKHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZGllTWFuYWdlciAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcC5kaWVPYmplY3RzT25NYXAubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLmFjdGlvbih0aGlzLm1hcCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDQu9C4INC10YnQtSDQvtCx0YrQtdC60YLRiyDQsiDQvNCw0YHRgdC40LLQtSDQtNC70Y8g0YHRg9GJ0LXQstGB0YLQstC+0LLQsNC90LjRjyDQuNCz0YDRi1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgaXNzZXRPYmplY3RPbk1hcCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5pc3NldE9iamVjdE9uTWFwKCk7XG4gICAgfTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIlxuLy8gUFJPRFxuLypleHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZUNvbnRhaW5lcklEOiAnYi1nYW1lJyxcbiAgICBtYXBTaXplOiB7XG4gICAgICAgIHJvdzogOSxcbiAgICAgICAgY29sOiAyM1xuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA5MCxcbiAgICAgICAgICAgIG1heDogMTc1XG4gICAgICAgIH0sXG4gICAgICAgIGNvd3M6IHtcbiAgICAgICAgICAgIG1pbjogMTUsXG4gICAgICAgICAgICBtYXg6IDIwXG4gICAgICAgIH0sXG4gICAgICAgIHRpZ2Vyczoge1xuICAgICAgICAgICAgbWluOiAzLFxuICAgICAgICAgICAgbWF4OiA2XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgbWF4OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRldk1vZGU6IGZhbHNlLFxuICAgIHRpbWVSZW5kZXI6IDUwMFxufTsqL1xuXG4vLyBERVZcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnYW1lQ29udGFpbmVySUQ6ICdiLWdhbWUnLFxuICAgIG1hcFNpemU6IHtcbiAgICAgICAgcm93OiA2LFxuICAgICAgICBjb2w6IDZcbiAgICB9LFxuICAgIG1hcE9iamVjdHM6IHtcbiAgICAgICAgZ3Jhc3M6IHtcbiAgICAgICAgICAgIG1pbjogNyxcbiAgICAgICAgICAgIG1heDogMTNcbiAgICAgICAgfSxcbiAgICAgICAgY293czoge1xuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiA1XG4gICAgICAgIH0sXG4gICAgICAgIHRpZ2Vyczoge1xuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiA0XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgbWF4OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRldk1vZGU6IGZhbHNlLFxuICAgIHRpbWVSZW5kZXI6IDE1MzBcbn07XG5cbiIsIi8vIEFVRElPIElOIEdBTUVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTb3VuZHMge1xuICAgIGNvbnN0cnVjdG9yKGZpbGUpIHtcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbyhmaWxlKTsgICBcbiAgICB9XG5cbiAgICBwbGF5ICgpIHtcbiAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4gICAgfTtcblxuICAgIC8vINCk0YPQvdC60YbQuNGPIHN0b3Ag0LTQu9GPIEF1ZGlvOlxuICAgIHN0b3AgKCkge1xuICAgICAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuc291bmQuY3VycmVudFRpbWUgPSAwLjA7XG4gICAgfTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIi8vINCS0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSDRhNGD0L3QutGG0LjQuCDQtNC70Y8g0LjQs9GA0YtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0L7RidGP0LXRgiDRgdC70YPRh9Cw0LnQvdC+0LUg0YfQuNGB0LvQviDQsiDQtNC40LDQv9Cw0LfQvtC90LUgTWluL01heFxuICAgICAqIEBwYXJhbSBtaW5cbiAgICAgKiBAcGFyYW0gbWF4XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmFuZG9tSW50ZWdlcjogZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgfVxufTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IEdyYXNzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtJztcbmltcG9ydCBDb3dzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2Nvd3NBbGdvcml0aG0nO1xuaW1wb3J0IFRpZ2Vyc0FsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0nO1xuaW1wb3J0IEdyb3VuZEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0nO1xuaW1wb3J0IEdhbWVTb3VuZHMgZnJvbSAnLi9zb3VuZCc7XG5cbi8qKlxuICog0J7RgdC90L7QstC90L7QuSDQn9GA0L7RgtC+0YLQuNC/INC+0LHRitC10LrRgtCwINC90LAg0LrQsNGA0YLQtVxuICogQHBhcmFtIGNsYXNzTmFtZVxuICogQHBhcmFtIGlkXG4gKiBAcGFyYW0gb2JqUG9zaXRpb25Sb3dcbiAqIEBwYXJhbSBvYmpQb3NpdGlvbkNvbFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXQgZXh0ZW5kcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtKTtcblxuICAgICAgICB0aGlzLmZvb2RUeXBlID0gdGhpcy5nZXRGb29kVHlwZSgpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICAgICAgdGhpcy5lbmVteSA9IChwYXJhbS5jbGFzc05hbWUgPT0gJ2Nvd3MnID8gJ3RpZ2VycycgOiBudWxsKTtcblxuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgIGlzRWF0OiBmYWxzZSxcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBudWxsLFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG51bGwsXG4gICAgICAgICAgICBpbmRleE9iamVjdDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc291bmRFYXQgPSBuZXcgR2FtZVNvdW5kcyhcImF1ZGlvL2VhdF9cIiArIHRoaXMuY2xhc3NOYW1lICsgXCIubXAzXCIpO1xuXG4gICAgICAgIC8vINCS0YvQsdC10YDQuNC8INCw0LvQs9C+0YDQuNGC0Lwg0L/QvtCy0LXQtNC10L3QuNGPINC00LvRjyDQvtCx0YrQtdC60YLQsFxuICAgICAgICB0aGlzLmFsZ29yaXRtcyA9IHRoaXMuc2VsZWN0QWxnb3JpdGhtKHBhcmFtLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktGL0LLQvtC0IEhUTUwg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNob3coKSB7XG4gICAgICAgIGxldCB1bml0SGVhbHRoID0gXCJcIjtcblxuICAgICAgICBpZiAodGhpcy5jbGFzc05hbWUgPT0gJ2Nvd3MnIHx8IHRoaXMuY2xhc3NOYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NIZWFsdGhDb2xvciA9IHRoaXMuZ2V0Q2xhc3NIZWFsdGhDb2xvcih0aGlzLmhlYWx0aCk7XG5cbiAgICAgICAgICAgIHVuaXRIZWFsdGggKz0gXCI8ZGl2IGNsYXNzPSdiLXVuaXRfX2hlYWx0aCc+PGRpdiBjbGFzcz0nYi1oZWFsdF9faW5kaWNhdG9yIFwiICsgY2xhc3NIZWFsdGhDb2xvciArIFwiJyBzdHlsZT0nd2lkdGg6IFwiICsgdGhpcy5oZWFsdGggKyBcIiU7Jz48L2Rpdj48L2Rpdj5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J2ItdW5pdCBcIiArIHRoaXMuY2xhc3NOYW1lICsgXCInPlwiICsgdW5pdEhlYWx0aCArIFwiPC9kaXY+XCI7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0YbQstC10YIo0LrQu9Cw0YHRgSkg0LbQuNC30L3QuCB1bml0XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDbGFzc0hlYWx0aENvbG9yKHZhbHVlKSB7XG5cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSA5MCAmJiBwYXJzZUludCh2YWx1ZSkgPD0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1nb29kXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSA3NSAmJiBwYXJzZUludCh2YWx1ZSkgPD0gOTApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWFib3ZlLWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDUwICYmIHBhcnNlSW50KHZhbHVlKSA8PSA3NSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gMjUgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDUwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1iZWxvdy1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSAwICYmIHBhcnNlSW50KHZhbHVlKSA8PSAyNSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtbG93XCI7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCg0LDQt9C90YvQtSDQtNC10LnRgdGC0LLQuNGPINC+0LHRitC10LrRgtCwXG4gICAgICovXG4gICAgYWN0aW9uKG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5hbGdvcml0bXMuYWN0KHRoaXMsIG1hcCwgaW5kZXhPYmplY3QpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGG0LXQu9GMINGA0LDQtNC4INC60L7RgtC+0YDQvtC5INC20LjQstC10YIgVW5pdCA6KVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldEZvb2RUeXBlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdjb3dzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2dyYXNzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RpZ2Vycyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjb3dzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQktC10YDQvdC10YIg0LTQu9GPINC+0LHRitC10LrRgtCwINC10LPQviDQsNC70LPQvtGA0LjRgtC8INC/0L7QstC10LTQtdC90LjRjyDQsiDQuNCz0YDQtVxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNlbGVjdEFsZ29yaXRobShpZCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogMCAtIGdyYXNzXG4gICAgICAgICAqIDEgLSBjb3dzXG4gICAgICAgICAqIDIgLSB0aWdlcnNcbiAgICAgICAgICogMyAtIGdyb3VuZFxuICAgICAgICAgKiA0IC0gZGVhdGhcbiAgICAgICAgICovXG5cbiAgICAgICAgc3dpdGNoIChwYXJzZUludChpZCkpIHtcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3Jhc3NBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvd3NBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRpZ2Vyc0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdW5kQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbi8vINCh0YrQtdC00LXQvVxuICAgIGlzRWF0ZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdDtcbiAgICB9O1xuXG4vLyDQodGK0LXQtNC10L1cbiAgICBlYXRlbih1bml0LCBmb29kSW5kZXgpIHtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3QgPSBmb29kSW5kZXg7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmNsYXNzTmFtZSA9IHVuaXQuY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pZCA9IHVuaXQuaWQ7XG4gICAgfTtcblxuLy8gUkVTRVQg0KHRitC10LTQtdC9XG4gICAgcmVzZXRFYXRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93ID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Db2wgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCA9IG51bGw7XG4gICAgfTtcblxuICAgIGFkZEhlYWx0aCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmhlYWx0aCArPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHN1YkhlYWx0aCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmhlYWx0aCAtPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfTtcblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iXSwic291cmNlUm9vdCI6IiJ9