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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Route
exports.default = {
    mapRow: 0,
    mapCol: 0,
    DEBUG: true,

    getNeighboringsCellInformation: function getNeighboringsCellInformation(map, unit, indexObject, steps, callBackUnitRoute) {

        console.log(map.mapData);
        console.log(unit);

        var neighboringsCellInformation = [];

        this.mapRow = map.row;
        this.mapCol = map.col;

        // получим инфо о четырех сторонах на дистанции полученной от Unit
        for (var step = 1; step < steps; step++) {
            if (this.DEBUG) {
                console.log('|- step: ' + step);
            }

            // Вот прям здесь получим
            neighboringsCellInformation.push(this.getNeighboringsCell(step, unit, map));
        }

        return neighboringsCellInformation;
    },

    // Получим инфо соседних ячеек на кадой иттерации
    getNeighboringsCell: function getNeighboringsCell(step, unit, map) {
        var neighboringsCellInfo = [];

        // if (this.DEBUG) {
        //     unit.positionRow = 0;
        //     unit.positionCol = 0;
        // }

        // координаты углов Unit
        // Получим координаты 4-х соторон на основе Unit
        var unitSides = this.getUnitAnglePoints(step, unit.positionRow, unit.positionCol);

        if (this.DEBUG) {
            console.log("|-- unitSides", unitSides);
        }

        // Пройдемся по 4-ем сторонам и получим содержимое ячеек, задействуем массив с картой игры
        for (var side = 0; side < unitSides.length; side++) {

            if (unitSides[side].isset) {
                if (this.DEBUG) {
                    console.log("|--- START side: " + unitSides[side].name);
                    console.log("|--- side: ", unitSides[side]);
                }

                var startCellRow = unitSides[side].angleStart.positionRow;
                var startCellCol = unitSides[side].angleStart.positionCol;

                // Пройдемся по карте с полученными углами
                var endCellRow = unitSides[side].angleEnd.positionRow;
                var endCellCol = unitSides[side].angleEnd.positionCol;

                // mapRow
                for (; startCellRow <= endCellRow; startCellRow++) {

                    //mapCol
                    for (; startCellCol <= endCellCol; startCellCol++) {

                        if (startCellRow >= 0 && startCellRow <= this.mapRow - 1 && startCellCol >= 0 && startCellCol <= this.mapCol - 1) {
                            if (this.DEBUG) {
                                console.log("|---- angleStartRow: " + unitSides[side].angleStart.positionRow, "endCellRow: " + endCellRow, " | angleStartCol: " + unitSides[side].angleStart.positionCol, "endCellCol: " + endCellCol);
                                console.log("|---- ROW: " + startCellRow, "COL: " + startCellCol);
                                console.log("|---- GET UNIT ON MAP: ", map.getCell(startCellRow, startCellCol));
                                console.log('--------------------');
                                console.log('|---- startCellCol: ' + startCellCol);
                                console.log('--------------------');
                            }

                            neighboringsCellInfo.push(map.getCell(startCellRow, startCellCol));
                        }
                    }
                }

                if (this.DEBUG) {
                    console.log("|--- END side: " + unitSides[side].name);
                }
            }
        }

        // return unitAnglePoints;
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

        if (this.DEBUG) {
            console.log('|- getUnitAnglePoints: ', step, positionRow, positionCol);
        }

        // GET leftTop
        leftTop = this.getLeftTopAnglePoint(step, positionRow, positionCol);
        if (this.DEBUG) {
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
        /*
        return [
            // leftTop
            {
                name: "leftTop_TO_rightTop",
                angleStart: this.getLeftTopAnglePoint(step, positionRow, positionCol),
                angleEnd: this.getRightTopAnglePoint(step, positionRow, positionCol)
            }
            // rightTop
            , {
                name: "rightTop_TO_rightBottom",
                angleStart: this.getRightTopAnglePoint(step, positionRow, positionCol),
                angleEnd: this.getRightBottomAnglePoint(step, positionRow, positionCol)
            }
            // rightBottom
            , {
                name: "rightBottom_TO_leftBottom",
                angleStart: this.getRightBottomAnglePoint(step, positionRow, positionCol),
                angleEnd: this.getLeftBottomAnglePoint(step, positionRow, positionCol)
            }
            // leftBottom
            , {
                name: "leftBottom_TO_leftTop",
                angleStart: this.getLeftBottomAnglePoint(step, positionRow, positionCol),
                angleEnd: this.getLeftTopAnglePoint(step, positionRow, positionCol)
            }
        ];
        */
    },

    getLeftTopAnglePoint: function getLeftTopAnglePoint(step, positionRow, positionCol) {
        var newPosition = void 0;
        var newPositionRow = positionRow - step;
        var newPositionCol = positionCol - step;
        var angleIsset = true;

        if ((newPositionRow < 0 || newPositionRow > this.mapRow - 1) && (newPositionCol < 0 || newPositionCol > this.mapCol - 1) || newPositionRow < 0 || newPositionRow > this.mapRow - 1 || newPositionCol < 0 || newPositionCol > this.mapCol - 1) {
            newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

            if (this.DEBUG) {
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

        if ((newPositionRow < 0 || newPositionRow > this.mapRow - 1) && (newPositionCol < 0 || newPositionCol > this.mapCol - 1) || newPositionRow < 0 || newPositionRow > this.mapRow - 1 || newPositionCol < 0 || newPositionCol > this.mapCol - 1) {
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

        if ((newPositionRow < 0 || newPositionRow > this.mapRow - 1) && (newPositionCol < 0 || newPositionCol > this.mapCol - 1) || newPositionRow < 0 || newPositionRow > this.mapRow - 1 || newPositionCol < 0 || newPositionCol > this.mapCol - 1) {
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

        if ((newPositionRow < 0 || newPositionRow > this.mapRow - 1) && (newPositionCol < 0 || newPositionCol > this.mapCol - 1) || newPositionRow < 0 || newPositionRow > this.mapRow - 1 || newPositionCol < 0 || newPositionCol > this.mapCol - 1) {
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

    // Попробуем найти новую ячейку прибавив значение шага
    findNewAngel: function findNewAngel(step, newPositionRow, newPositionCol) {
        // Пройдемся по по шагам в 4-х направлениях и посмотрим, попадаем ли в пределы карты
        for (var stp = 1; stp <= step; stp++) {

            console.log(stp <= step);

            var newAngel = this.checkNeighboringsCellByDirections(stp, newPositionRow, newPositionCol);

            if (this.DEBUG) {
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
            if (this.DEBUG) {
                console.log("directionLeft: true;");
            }
            return directionLeft;
        }
        if (this.DEBUG) {
            console.log("directionLeft: false;");
        }

        var directionTop = this.checkCellByDirectionTop(stp, newPositionRow, newPositionCol);
        if (directionTop.isFind) {
            if (this.DEBUG) {
                console.log("directionTop: true;");
            }
            return directionTop;
        }
        if (this.DEBUG) {
            console.log("directionTop: false;");
        }

        var directionRight = this.checkCellByDirectionRight(stp, newPositionRow, newPositionCol);
        if (directionRight.isFind) {
            if (this.DEBUG) {
                console.log("directionRight: true;");
            }
            return directionRight;
        }
        if (this.DEBUG) {
            console.log("directionRight: false;");
        }

        var directionBottom = this.checkCellByDirectionBottom(stp, newPositionRow, newPositionCol);
        if (directionBottom.isFind) {
            if (this.DEBUG) {
                console.log("directionBottom: true;");
            }
            return directionBottom;
        }
        if (this.DEBUG) {
            console.log("directionBottom: false;");
        }

        return false;
    },
    checkCellByDirectionLeft: function checkCellByDirectionLeft(stp, newPositionRow, newPositionCol) {
        var tryNewPositionCol = void 0,
            find = false;

        tryNewPositionCol = newPositionCol - stp;
        console.log('newPositionCol: ', tryNewPositionCol, tryNewPositionCol >= 0);

        if (tryNewPositionCol >= 0 && tryNewPositionCol <= this.mapCol - 1) {
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

        if (tryNewPositionRow >= 0 && tryNewPositionRow <= this.mapCol - 1) {
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
        if (tryNewPositionCol >= 0 && tryNewPositionCol <= this.mapCol - 1) {
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

        if (tryNewPositionRow >= 0 && tryNewPositionRow <= this.mapCol - 1) {
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

        // Радиус ячеек в четыре стороны, увеличен на одну, если 4 то 3
        var _this = _possibleConstructorReturn(this, (TigersAlgorithm.__proto__ || Object.getPrototypeOf(TigersAlgorithm)).call(this));

        _this.distanceView = 4;
        return _this;
    }

    _createClass(TigersAlgorithm, [{
        key: 'act',
        value: function act(unit, map, indexObject) {
            // Воозвратить объект с соседними ячейками
            var neighboringsCellInformation = _route2.default.getNeighboringsCellInformation(map, unit, indexObject, this.distanceView);

            console.log(neighboringsCellInformation);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vY293c0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL3JvdXRlLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi90b29scy5qcyIsIndlYnBhY2s6Ly8vLi91bml0LmpzIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsImFkZEhlYWx0aFZhbHVlIiwic3ViSGVhbHRoVmFsdWUiLCJ1bml0IiwibWFwIiwiaW5kZXhPYmplY3QiLCJuZWlnaGJvcmluZ3NDZWxsIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQiLCJjaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsIiwiZmlsdGVyQ2VsbEJ5VHlwZSIsImZvb2RUeXBlIiwiZW5lbXkiLCJDb3dzQWxnb3JpdGhtIiwiZGlzdGFuY2VWaWV3IiwiZGF0YSIsImdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiIsImNlbGxSYW5kb21Sb3dDb2wiLCJyYW5kb21JbnRlZ2VyIiwibGVuZ3RoIiwib2xkVW5pdCIsInVuaXRQYXJhbSIsImlkIiwiY2xhc3NOYW1lIiwib2JqUG9zaXRpb25Sb3ciLCJwb3NpdGlvblJvdyIsIm9ialBvc2l0aW9uQ29sIiwicG9zaXRpb25Db2wiLCJzZXRDZWxsIiwidXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwIiwic3ViSGVhbHRoIiwiZGllVW5pdFR5cGUiLCJkaWVVbml0SWQiLCJkaWVVbml0IiwiYWRkRGllVW5pdFRvRGllQXJyYXkiLCJoZWFsdGgiLCJhZGRIZWFsdGgiLCJEZWF0aEFsZ29yaXRobSIsImRlYXRoVW5pdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsIiwibmV3UG9zaXRpb24iLCJnZXROZXdSb3dDb2xQb3NpdGlvbiIsInJvdyIsImNvbCIsIm5ld1VuaXQiLCJkaWVPYmplY3RzT25NYXBJbmRleCIsImdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCIsImVudGl0eVBhcmFtIiwiYWRkVG9PYmplY3RzT25NYXAiLCJyZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcCIsIkdyYXNzQWxnb3JpdGhtIiwiR3JvdW5kQWxnb3JpdGhtIiwibWFwUm93IiwibWFwQ29sIiwiREVCVUciLCJnZXROZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJzdGVwcyIsImNhbGxCYWNrVW5pdFJvdXRlIiwiY29uc29sZSIsImxvZyIsIm1hcERhdGEiLCJuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJzdGVwIiwicHVzaCIsImdldE5laWdoYm9yaW5nc0NlbGwiLCJuZWlnaGJvcmluZ3NDZWxsSW5mbyIsInVuaXRTaWRlcyIsImdldFVuaXRBbmdsZVBvaW50cyIsInNpZGUiLCJpc3NldCIsIm5hbWUiLCJzdGFydENlbGxSb3ciLCJhbmdsZVN0YXJ0Iiwic3RhcnRDZWxsQ29sIiwiZW5kQ2VsbFJvdyIsImFuZ2xlRW5kIiwiZW5kQ2VsbENvbCIsImdldENlbGwiLCJ1bml0QW5nbGVzIiwibGVmdFRvcCIsInJpZ2h0VG9wIiwicmlnaHRCb3R0b20iLCJsZWZ0Qm90dG9tIiwiZ2V0TGVmdFRvcEFuZ2xlUG9pbnQiLCJ0b1JpZ2h0VG9wIiwiZ2V0UmlnaHRUb3BBbmdsZVBvaW50IiwidG9SaWdodEJvdHRvbSIsImdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludCIsInRvTGVmdEJvdHRvbSIsImdldExlZnRCb3R0b21BbmdsZVBvaW50IiwidG9MZWZ0VG9wIiwibmV3UG9zaXRpb25Sb3ciLCJuZXdQb3NpdGlvbkNvbCIsImFuZ2xlSXNzZXQiLCJmaW5kTmV3QW5nZWwiLCJpc0ZpbmQiLCJzdHAiLCJuZXdBbmdlbCIsImNoZWNrTmVpZ2hib3JpbmdzQ2VsbEJ5RGlyZWN0aW9ucyIsImRpcmVjdGlvbkxlZnQiLCJjaGVja0NlbGxCeURpcmVjdGlvbkxlZnQiLCJkaXJlY3Rpb25Ub3AiLCJjaGVja0NlbGxCeURpcmVjdGlvblRvcCIsImRpcmVjdGlvblJpZ2h0IiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25SaWdodCIsImRpcmVjdGlvbkJvdHRvbSIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uQm90dG9tIiwidHJ5TmV3UG9zaXRpb25Db2wiLCJmaW5kIiwidHJ5TmV3UG9zaXRpb25Sb3ciLCJUaWdlcnNBbGdvcml0aG0iLCJmb29kSW5kZXgiLCJnZXRJbmRleEZyb21PYmplY3RzT25NYXAiLCJlYXRlbiIsInJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwIiwiaXNFYXRlbiIsImZvb2RJbmZvcm1hdGlvbiIsInNldEluZGV4T2JqZWN0IiwicmVzZXRFYXRlbiIsIkRpZVVuaXQiLCJwYXJhbSIsImFsZ29yaXRtcyIsInByb3RvdHlwZSIsImFjdGlvbiIsImFjdCIsInVwZGF0ZVJvd0NvbCIsIkVudGl0eSIsIkdhbWUiLCJzZXR0aW5nIiwiZGV2TW9kZSIsInRpbWVSZW5kZXIiLCJidG5TdGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidG5QYXVzZSIsInNjZW5lIiwiYnVpbGQiLCIkIiwibE5vdGlmeSIsInNlbGYiLCJsb29wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwiY2FsbGJhY2siLCJpc3NldE9iamVjdE9uTWFwIiwiZGllTWFuYWdlciIsImFjdGlvbk9uTWFwIiwicmVuZGVyIiwiZ2FtZU92ZXIiLCJjbGVhckludGVydmFsIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJnYW1lIiwicnVuIiwiTWFwIiwibWFwT2JqZWN0cyIsIm9iamVjdHNPbk1hcCIsIkFycmF5IiwiZGllT2JqZWN0c09uTWFwIiwibWFwU2l6ZSIsIm9iaklEIiwib2JqZWN0TmFtZSIsIm9iak1pbiIsIm1pbiIsIm9iak1heCIsIm1heCIsIm9iakNvdW50T25NYXAiLCJpIiwibWFwUm93Q29sIiwiZ2V0UmFuZG9tUm93Q29sQ29vcmQiLCJ1bml0U2V0dGluZyIsInRyeU5ld0dlbmVyYXRlIiwib2JqZWN0U2V0dGluZyIsImNvdW50IiwidW5kZWZpbmVkIiwiY291bnRSb3ciLCJjb3VudENvbCIsImNlbGwiLCJpc3NldFJvdXRlIiwidHJ5Um91dGUiLCJtaW5DZWxsIiwibWF4Q2VsbCIsImV4Y2x1ZGVWYWx1ZSIsInZhbHVlIiwibmV3UG9zaXRpb25Sb3dDb2wiLCJzcGxpY2UiLCJjZWxscyIsImRpcmVjdGlvbiIsImV4aXN0IiwiY29udGVudCIsInVuaXRQb3NpdGlvblJvdyIsInBhcnNlSW50IiwidW5pdFBvc2l0aW9uQ29sIiwiYm9yZGVyIiwidG9wIiwidG9wUmlnaHQiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ1bml0VHlwZSIsImFyciIsIlNjZW5lIiwicGxhaW4iLCJpbml0IiwiZ2VuZXJhdGUiLCJtYXBIVE1MIiwic2hvdyIsImlubmVySFRNTCIsImdhbWVDb250YWluZXJJRCIsImdyYXNzIiwiY293cyIsInRpZ2VycyIsImdyb3VuZCIsIkdhbWVTb3VuZHMiLCJmaWxlIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiVW5pdCIsImdldEZvb2RUeXBlIiwiaXNFYXQiLCJzb3VuZEVhdCIsInNlbGVjdEFsZ29yaXRobSIsInVuaXRIZWFsdGgiLCJjbGFzc0hlYWx0aENvbG9yIiwiZ2V0Q2xhc3NIZWFsdGhDb2xvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsUztBQUNqQix5QkFBYztBQUFBOztBQUNWLGFBQUtDLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxhQUFLQyxjQUFMLEdBQXNCLENBQXRCO0FBQ0g7Ozs7MERBRWlDQyxJLEVBQU1DLEcsRUFBS0MsVyxFQUFhOztBQUV0RCxnQkFBSUMseUJBQUo7QUFBQSxnQkFDSUMsaUNBREo7QUFBQSxnQkFFSUMsb0NBRko7QUFBQSxnQkFHSUMsbUNBSEo7O0FBS0E7QUFDQUgsK0JBQW1CRixJQUFJTSx5QkFBSixDQUE4QlAsSUFBOUIsQ0FBbkI7O0FBRUE7Ozs7QUFJQUksdUNBQTJCSCxJQUFJTyxnQkFBSixDQUFxQkwsZ0JBQXJCLEVBQXVDSCxLQUFLUyxRQUE1QyxDQUEz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RyxTQUFuQztBQUNBLGlCQUFLSyxlQUFMLENBQXFCOUYsU0FBckIsR0FBaUNyQixLQUFLcUIsU0FBdEM7QUFDQSxpQkFBSzhGLGVBQUwsQ0FBcUIvRixFQUFyQixHQUEwQnBCLEtBQUtvQixFQUEvQjtBQUNIOzs7OztBQUVMO3FDQUNpQjtBQUNULG1CQUFPLEtBQUsrRixlQUFMLENBQXFCK0csS0FBckIsR0FBNkIsS0FBcEM7QUFDQSxpQkFBSy9HLGVBQUwsQ0FBcUI1RixXQUFyQixHQUFtQyxJQUFuQztBQUNBLGlCQUFLNEYsZUFBTCxDQUFxQjFGLFdBQXJCLEdBQW1DLElBQW5DO0FBQ0EsaUJBQUswRixlQUFMLENBQXFCakgsV0FBckIsR0FBbUMsSUFBbkM7QUFDSDs7O2tDQUVTc0wsSyxFQUFPO0FBQ2IsaUJBQUt2SixNQUFMLElBQWUrSixTQUFTUixLQUFULENBQWY7QUFDSDs7O2tDQUVTQSxLLEVBQU87QUFDYixpQkFBS3ZKLE1BQUwsSUFBZStKLFNBQVNSLEtBQVQsQ0FBZjtBQUNIOzs7Ozs7QUFJTDs7O2tCQTNKcUJ3QyxJIiwiZmlsZSI6ImNvd3NhbmR0aWdlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB0b29scyBmcm9tIFwiLi4vdG9vbHNcIjtcbmltcG9ydCByb3V0ZSBmcm9tIFwiLi9yb3V0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkZEhlYWx0aFZhbHVlID0gNTtcbiAgICAgICAgdGhpcy5zdWJIZWFsdGhWYWx1ZSA9IDM7XG4gICAgfVxuXG4gICAgZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kO1xuXG4gICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0YHQvtGB0LXQtNC90LjQuCDQutC70LXRgtC60LhcbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbCA9IG1hcC5jaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsKHVuaXQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDQtdC00YNcbiAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgKi9cbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kID0gbWFwLmZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdC5mb29kVHlwZSk7XG5cbiAgICAgICAgaWYgKHVuaXQuZW5lbXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFRPRE8g0YMg0YLQuNCz0YDQsCDQvdC10YIg0LLRgNCw0LPQvtCyXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINCy0YDQsNCz0L7QsijRgtC40LPRgNC+0LIpXG4gICAgICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzID0gbWFwLmZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdC5lbmVteSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0YHQstC+0LHQvtC00L3Ri9C1INGP0YfQtdC50LrQuCDQutGD0LTQsCDQvNC+0LbQvdC+INC/0LXRgNC10LzQtdGB0YLQuNGC0YzRgdGPXG4gICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICovXG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kID0gbWFwLmZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgXCJncm91bmRcIik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGw6IG5laWdoYm9yaW5nc0NlbGwsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2Q6IG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllczogbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQ6IG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICAgIH07XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vLi4vZW50aXR5JztcbmltcG9ydCBEaWVVbml0IGZyb20gJy4vLi4vZGllVW5pdCc7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi8uLi90b29scyc7XG5cbi8vIENPV1MgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvd3NBbGdvcml0aG0gIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy8gQ2VsbCBEaXN0YW5jZVxuICAgICAgICB0aGlzLmRpc3RhbmNlVmlldyA9IDE7XG4gICAgfVxuXG4gICAgYWN0ICh1bml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbih1bml0LCBtYXAsIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogZGF0YTpcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCh0L7RgdC10LTQvdC40LzQuCDQutC70LXRgtC60LDQvNC4ICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLRgNCw0LLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotC40LPRgNCw0LzQuCAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQl9C10LzQu9GR0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICAgKi9cblxuICAgICAgICAvKmlmICh1bml0LmhlYWx0aCA+IDApIHtcbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0YDRj9C00L7QvCDQotC40LPRgNGLXG4gICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8v0JXRgdC70Lgg0LXRgdGC0Ywg0YHQstC+0LHQvtC00L3Ri9C1INC60LvQtdGC0LrQuFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JHQtdC20LjQvCDQvtGCINCi0LjQs9GA0LBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQXdheUZyb21FbmVteShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy/QldGB0LvQuCDQtdGB0YLRjCDRgNGP0LTQvtC8INGC0YDQsNCy0LAg0LXQtNC40Lwg0LXQtSDQuCDRg9Cx0LXQs9Cw0LXQvFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INC10LTQsFxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGcmVlKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwLmtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfSovXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCR0LXQttC40Lwg0L7RgiDRgtC40LPRgNCwICtcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlQXdheUZyb21FbmVteSAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtVxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgLy8g0KHQvtGF0YDQsNC90LjQvCDRgdGC0LDRgNGL0LkgVW5pdCDQuCDQtdCz0L4gUkMgKFJvdy9Db2wpXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2wg0Lgg0LfQsNC/0LjRiNC40Lwg0LIg0L3QvtCy0YPRjiDRj9GH0LXQudC60YMg0LrQvtGA0L7QstGDXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSb3cvQ29sINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0KIu0Log0LzRiyDRg9Cx0LXQs9Cw0LXQvCDQuCDQvdC1INC10LTQuNC8INGC0YDQsNCy0YMsINC+0YLQvdC40LzQuNC8INC90LXQvNC90L7Qs9C+INC30LTQvtGA0L7QstGM0Y9cbiAgICAgICAgdW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCV0LTQuNC8INGC0YDQsNCy0YNcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZVRvRm9vZCAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0LXQtNGLXG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge307XG5cbiAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjQvCDQsiDQvNC10L3QtdC00LbQtdGAINGB0LzQtdGA0YLQtdC5INGC0YDQsNCy0YNcbiAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2wsXG4gICAgICAgICAgICBkaWVVbml0VHlwZTogXCJncmFzc1wiLFxuICAgICAgICAgICAgZGllVW5pdElkOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgIG1hcC5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAvLyDQn9GA0Lgg0L/QvtCz0LvQsNGJ0LXQvdC40Lgg0YLRgNCw0LLRiyDQv9GA0LjQsdCw0LLQuNC8INC20LjQt9C90LgsINC+0LPRgNCw0L3QuNGH0LjQvCDQt9C90LDRh9C10L3QuNC10LwgMTAwXG4gICAgICAgIGlmICh1bml0LmhlYWx0aCA8IDEwMCkge1xuXG4gICAgICAgICAgICBpZiAodW5pdC5oZWFsdGggPiA5MCkge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKDEwMCAtIHVuaXQuaGVhbHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgodGhpcy5hZGRIZWFsdGhWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LLQvtCx0L7QtNC90L7QtSDQv9C10YDQtdC80LXRidC10L3QuNC1XG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUZyZWUgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVuaXQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0YEg0LfQtdC80LvQtdC5XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIHVuaXQuc3ViSGVhbHRoKHRoaXMuc3ViSGVhbHRoVmFsdWUpO1xuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIi8vIERFQVRIIEFMR09SSVRNXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vLi4vZW50aXR5JztcbmltcG9ydCBVbml0IGZyb20gJy4vLi4vdW5pdCc7XG5cblxuLy8gR1JPVU5EIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWF0aEFsZ29yaXRobSB7XG4gICAgYWN0IChkZWF0aFVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgaWYgKGRlYXRoVW5pdC51bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQgPCBkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGRlYXRoVW5pdC51bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQrKztcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gbWFwLmdldE5ld1Jvd0NvbFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Bvc2l0aW9uUm93Q29sKTtcblxuICAgICAgICAgICAgdmFyIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogZGVhdGhVbml0LmRpZVVuaXRJZCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGRlYXRoVW5pdC5kaWVVbml0VHlwZSxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbmV3UG9zaXRpb24ucm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbi5jb2wsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgbmV3VW5pdCA9IG5ldyBVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgICAgIHZhciBkaWVPYmplY3RzT25NYXBJbmRleCA9IG1hcC5nZXRJbmRleEZyb21EaWVPYmplY3RzT25NYXAoZGVhdGhVbml0KTtcblxuICAgICAgICAgICAgdmFyIGVudGl0eVBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogZGVhdGhVbml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBkZWF0aFVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbChkZWF0aFVuaXQsIG5ldyBFbnRpdHkoZW50aXR5UGFyYW0pKTtcblxuICAgICAgICAgICAgbWFwLnNldENlbGwobmV3VW5pdCwgbmV3VW5pdCk7XG5cbiAgICAgICAgICAgIG1hcC5hZGRUb09iamVjdHNPbk1hcChuZXdVbml0KTtcblxuICAgICAgICAgICAgbWFwLnJlbW92ZVVuaXRGcm9tRGllT2JqZWN0c09uTWFwKGRpZU9iamVjdHNPbk1hcEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5cbi8vIEdSQVNTIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFzc0FsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgYWN0ICgpIHt9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcblxuLy8gR1JPVU5EIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmRBbGdvcml0aG0gZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGFjdCAoKSB7fTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIiwiaW1wb3J0IHRvb2xzIGZyb20gXCIuLi90b29sc1wiO1xuXG4vLyBSb3V0ZVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1hcFJvdzowLFxuICAgIG1hcENvbDowLFxuICAgIERFQlVHOiB0cnVlLFxuXG4gICAgZ2V0TmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uIDogZnVuY3Rpb24gKG1hcCwgdW5pdCwgaW5kZXhPYmplY3QsIHN0ZXBzLCBjYWxsQmFja1VuaXRSb3V0ZSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG1hcC5tYXBEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2codW5pdCk7XG5cbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiA9IFtdO1xuXG4gICAgICAgIHRoaXMubWFwUm93ID0gbWFwLnJvdztcbiAgICAgICAgdGhpcy5tYXBDb2wgPSBtYXAuY29sO1xuXG4gICAgICAgIC8vINC/0L7Qu9GD0YfQuNC8INC40L3RhNC+INC+INGH0LXRgtGL0YDQtdGFINGB0YLQvtGA0L7QvdCw0YUg0L3QsCDQtNC40YHRgtCw0L3RhtC40Lgg0L/QvtC70YPRh9C10L3QvdC+0Lkg0L7RgiBVbml0XG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAxOyBzdGVwICA8IHN0ZXBzOyBzdGVwKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7IGNvbnNvbGUubG9nKCd8LSBzdGVwOiAnICsgc3RlcCk7IH1cblxuICAgICAgICAgICAgLy8g0JLQvtGCINC/0YDRj9C8INC30LTQtdGB0Ywg0L/QvtC70YPRh9C40LxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbi5wdXNoKHRoaXMuZ2V0TmVpZ2hib3JpbmdzQ2VsbChzdGVwLCB1bml0LCBtYXApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb247XG4gICAgfSxcblxuICAgIC8vINCf0L7Qu9GD0YfQuNC8INC40L3RhNC+INGB0L7RgdC10LTQvdC40YUg0Y/Rh9C10LXQuiDQvdCwINC60LDQtNC+0Lkg0LjRgtGC0LXRgNCw0YbQuNC4XG4gICAgZ2V0TmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24oc3RlcCwgdW5pdCwgbWFwKSB7XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mbyA9IFtdO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgIC8vICAgICB1bml0LnBvc2l0aW9uUm93ID0gMDtcbiAgICAgICAgLy8gICAgIHVuaXQucG9zaXRpb25Db2wgPSAwO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8g0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YPQs9C70L7QsiBVbml0XG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAgICBsZXQgdW5pdFNpZGVzID0gdGhpcy5nZXRVbml0QW5nbGVQb2ludHMoc3RlcCwgdW5pdC5wb3NpdGlvblJvdywgdW5pdC5wb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtjb25zb2xlLmxvZyhcInwtLSB1bml0U2lkZXNcIiwgdW5pdFNpZGVzKTt9XG5cbiAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4gNC3QtdC8INGB0YLQvtGA0L7QvdCw0Lwg0Lgg0L/QvtC70YPRh9C40Lwg0YHQvtC00LXRgNC20LjQvNC+0LUg0Y/Rh9C10LXQuiwg0LfQsNC00LXQudGB0YLQstGD0LXQvCDQvNCw0YHRgdC40LIg0YEg0LrQsNGA0YLQvtC5INC40LPRgNGLXG4gICAgICAgIGZvciAobGV0IHNpZGU9MDsgc2lkZSA8IHVuaXRTaWRlcy5sZW5ndGg7IHNpZGUrKykge1xuXG4gICAgICAgICAgICBpZiAodW5pdFNpZGVzW3NpZGVdLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0tIFNUQVJUIHNpZGU6IFwiICsgdW5pdFNpZGVzW3NpZGVdLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gc2lkZTogXCIgLCB1bml0U2lkZXNbc2lkZV0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBzdGFydENlbGxSb3cgPSB1bml0U2lkZXNbc2lkZV0uYW5nbGVTdGFydC5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gdW5pdFNpZGVzW3NpZGVdLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDQutCw0YDRgtC1INGBINC/0L7Qu9GD0YfQtdC90L3Ri9C80Lgg0YPQs9C70LDQvNC4XG4gICAgICAgICAgICAgICAgbGV0IGVuZENlbGxSb3cgPSB1bml0U2lkZXNbc2lkZV0uYW5nbGVFbmQucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbGV0IGVuZENlbGxDb2wgPSB1bml0U2lkZXNbc2lkZV0uYW5nbGVFbmQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgICAgICAgICAvLyBtYXBSb3dcbiAgICAgICAgICAgICAgICBmb3IgKDsgc3RhcnRDZWxsUm93IDw9IGVuZENlbGxSb3c7IHN0YXJ0Q2VsbFJvdysrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9tYXBDb2xcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IHN0YXJ0Q2VsbENvbCA8PSBlbmRDZWxsQ29sOyBzdGFydENlbGxDb2wrKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXJ0Q2VsbFJvdyA+PSAwICYmIHN0YXJ0Q2VsbFJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFydENlbGxDb2wgPj0gMCAmJiBzdGFydENlbGxDb2wgPD0gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0tIGFuZ2xlU3RhcnRSb3c6IFwiICsgdW5pdFNpZGVzW3NpZGVdLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3csIFwiZW5kQ2VsbFJvdzogXCIgKyBlbmRDZWxsUm93LCBcIiB8IGFuZ2xlU3RhcnRDb2w6IFwiICsgdW5pdFNpZGVzW3NpZGVdLmFuZ2xlU3RhcnQucG9zaXRpb25Db2wsIFwiZW5kQ2VsbENvbDogXCIgKyBlbmRDZWxsQ29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0tLSBST1c6IFwiICsgc3RhcnRDZWxsUm93LCBcIkNPTDogXCIgKyBzdGFydENlbGxDb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0tIEdFVCBVTklUIE9OIE1BUDogXCIsIG1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnfC0tLS0gc3RhcnRDZWxsQ29sOiAnICsgc3RhcnRDZWxsQ29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChtYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHsgY29uc29sZS5sb2coXCJ8LS0tIEVORCBzaWRlOiBcIiArIHVuaXRTaWRlc1tzaWRlXS5uYW1lKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV0dXJuIHVuaXRBbmdsZVBvaW50cztcbiAgICAgICAgcmV0dXJuIChuZWlnaGJvcmluZ3NDZWxsSW5mbyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAqIEBwYXJhbSBzdGVwXG4gICAgICogQHBhcmFtIHBvc2l0aW9uUm93XG4gICAgICogQHBhcmFtIHBvc2l0aW9uQ29sXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldFVuaXRBbmdsZVBvaW50czogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdW5pdEFuZ2xlcyA9IFtdO1xuXG4gICAgICAgIGxldCBsZWZ0VG9wLFxuICAgICAgICAgICAgcmlnaHRUb3AsXG4gICAgICAgICAgICByaWdodEJvdHRvbSxcbiAgICAgICAgICAgIGxlZnRCb3R0b207XG5cblxuICAgICAgICBpZiAodGhpcy5ERUJVRykgeyBjb25zb2xlLmxvZygnfC0gZ2V0VW5pdEFuZ2xlUG9pbnRzOiAnLCBzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpOyB9XG4gICAgICAgIFxuICAgICAgICAvLyBHRVQgbGVmdFRvcFxuICAgICAgICBsZWZ0VG9wID0gdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5ERUJVRykgeyBjb25zb2xlLmxvZygnfC18LSBsZWZ0VG9wOiAnLCBsZWZ0VG9wKTsgfVxuICAgICAgICBpZiAobGVmdFRvcC5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9SaWdodFRvcCA9IHRoaXMuZ2V0UmlnaHRUb3BBbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b1JpZ2h0VG9wLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodFRvcCA9IHtwb3NpdGlvblJvdzogdG9SaWdodFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvUmlnaHRUb3AucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0VG9wID0ge3Bvc2l0aW9uUm93OiBsZWZ0VG9wLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogbGVmdFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyBsZWZ0VG9wXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxlZnRUb3BfVE9fcmlnaHRUb3BcIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IGxlZnRUb3AucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogbGVmdFRvcC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZUVuZDogdG9SaWdodFRvcCxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IGxlZnRUb3AuaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIHJpZ2h0VG9wXG4gICAgICAgIHJpZ2h0VG9wID0gdGhpcy5nZXRSaWdodFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHJpZ2h0VG9wLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b1JpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRvUmlnaHRCb3R0b20uaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0Qm90dG9tID0ge3Bvc2l0aW9uUm93OiB0b1JpZ2h0Qm90dG9tLnBvc2l0aW9uUm93LHBvc2l0aW9uQ29sOiB0b1JpZ2h0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRUb3AucG9zaXRpb25Sb3cscG9zaXRpb25Db2w6IHJpZ2h0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0VG9wXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uUm93OiByaWdodFRvcC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sOiByaWdodFRvcC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZUVuZDogdG9SaWdodEJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IHJpZ2h0VG9wLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdFVCByaWdodEJvdHRvbVxuICAgICAgICByaWdodEJvdHRvbSA9IHRoaXMuZ2V0UmlnaHRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChyaWdodEJvdHRvbS5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9MZWZ0Qm90dG9tID0gdGhpcy5nZXRMZWZ0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9MZWZ0Qm90dG9tLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0Qm90dG9tID0ge3Bvc2l0aW9uUm93OiB0b0xlZnRCb3R0b20ucG9zaXRpb25Sb3cscG9zaXRpb25Db2w6IHRvTGVmdEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvTGVmdEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3cscG9zaXRpb25Db2w6IHJpZ2h0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0Qm90dG9tXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHJpZ2h0Qm90dG9tLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IHJpZ2h0Qm90dG9tLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b0xlZnRCb3R0b20sXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiByaWdodEJvdHRvbS5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgbGVmdEJvdHRvbVxuICAgICAgICBsZWZ0Qm90dG9tID0gdGhpcy5nZXRMZWZ0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAobGVmdEJvdHRvbS5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9MZWZ0VG9wID0gdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9MZWZ0VG9wLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0VG9wID0ge3Bvc2l0aW9uUm93OiB0b0xlZnRUb3AucG9zaXRpb25Sb3cscG9zaXRpb25Db2w6IHRvTGVmdFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvTGVmdFRvcCA9IHtwb3NpdGlvblJvdzogbGVmdEJvdHRvbS5wb3NpdGlvblJvdyxwb3NpdGlvbkNvbDogbGVmdEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyBsZWZ0Qm90dG9tXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxlZnRCb3R0b21fVE9fbGVmdFRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogbGVmdEJvdHRvbS5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBsZWZ0Qm90dG9tLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b0xlZnRUb3AsXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiBsZWZ0Qm90dG9tLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bml0QW5nbGVzO1xuICAgICAgICAvKlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLy8gbGVmdFRvcFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibGVmdFRvcF9UT19yaWdodFRvcFwiLFxuICAgICAgICAgICAgICAgIGFuZ2xlU3RhcnQ6IHRoaXMuZ2V0TGVmdFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSxcbiAgICAgICAgICAgICAgICBhbmdsZUVuZDogdGhpcy5nZXRSaWdodFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmlnaHRUb3BcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b21cIixcbiAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB0aGlzLmdldFJpZ2h0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpLFxuICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0aGlzLmdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByaWdodEJvdHRvbVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJyaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tXCIsXG4gICAgICAgICAgICAgICAgYW5nbGVTdGFydDogdGhpcy5nZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSxcbiAgICAgICAgICAgICAgICBhbmdsZUVuZDogdGhpcy5nZXRMZWZ0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsZWZ0Qm90dG9tXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImxlZnRCb3R0b21fVE9fbGVmdFRvcFwiLFxuICAgICAgICAgICAgICAgIGFuZ2xlU3RhcnQ6IHRoaXMuZ2V0TGVmdEJvdHRvbUFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSxcbiAgICAgICAgICAgICAgICBhbmdsZUVuZDogdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgICovXG4gICAgfSxcblxuICAgIGdldExlZnRUb3BBbmdsZVBvaW50OiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbjtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgLSBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCAtIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKChuZXdQb3NpdGlvblJvdyA8IDApIHx8IChuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICgobmV3UG9zaXRpb25Db2wgPCAwKSB8fCAobmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgKChuZXdQb3NpdGlvblJvdyA8IDApIHx8IChuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sIDwgMCkgfHwgKG5ld1Bvc2l0aW9uQ29sID4gKHRoaXMubWFwQ29sIC0gMSkpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gdGhpcy5maW5kTmV3QW5nZWwoc3RlcCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHsgY29uc29sZS5sb2coJ3wtfC0gbmV3UG9zaXRpb246ICcsIG5ld1Bvc2l0aW9uKTsgfVxuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb24ucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbi5wb3NpdGlvbkNvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGVJc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzc2V0OiBhbmdsZUlzc2V0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFJpZ2h0VG9wQW5nbGVQb2ludDogZnVuY3Rpb24oc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdyA9IHBvc2l0aW9uUm93IC0gc3RlcDtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uQ29sID0gcG9zaXRpb25Db2wgKyBzdGVwO1xuICAgICAgICBsZXQgYW5nbGVJc3NldCA9IHRydWU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIChuZXdQb3NpdGlvblJvdyA8IDAgfHwgbmV3UG9zaXRpb25Sb3cgPiAodGhpcy5tYXBSb3cgLSAxKSlcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIChuZXdQb3NpdGlvbkNvbCA8IDAgfHwgbmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAobmV3UG9zaXRpb25Sb3cgPCAwIHx8IG5ld1Bvc2l0aW9uUm93ID4gKHRoaXMubWFwUm93IC0gMSkpXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgKG5ld1Bvc2l0aW9uQ29sIDwgMCB8fCBuZXdQb3NpdGlvbkNvbCA+ICh0aGlzLm1hcENvbCAtIDEpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQ6IGZ1bmN0aW9uKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyArIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sICsgc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAobmV3UG9zaXRpb25Sb3cgPCAwIHx8IG5ld1Bvc2l0aW9uUm93ID4gKHRoaXMubWFwUm93IC0gMSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAobmV3UG9zaXRpb25Db2wgPCAwIHx8IG5ld1Bvc2l0aW9uQ29sID4gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgKG5ld1Bvc2l0aW9uUm93IDwgMCB8fCBuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIChuZXdQb3NpdGlvbkNvbCA8IDAgfHwgbmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0TGVmdEJvdHRvbUFuZ2xlUG9pbnQ6IGZ1bmN0aW9uKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyArIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sIC0gc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAobmV3UG9zaXRpb25Sb3cgPCAwIHx8IG5ld1Bvc2l0aW9uUm93ID4gKHRoaXMubWFwUm93IC0gMSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAobmV3UG9zaXRpb25Db2wgPCAwIHx8IG5ld1Bvc2l0aW9uQ29sID4gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgKG5ld1Bvc2l0aW9uUm93IDwgMCB8fCBuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIChuZXdQb3NpdGlvbkNvbCA8IDAgfHwgbmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyDQn9C+0L/RgNC+0LHRg9C10Lwg0L3QsNC50YLQuCDQvdC+0LLRg9GOINGP0YfQtdC50LrRgyDQv9GA0LjQsdCw0LLQuNCyINC30L3QsNGH0LXQvdC40LUg0YjQsNCz0LBcbiAgICBmaW5kTmV3QW5nZWw6IGZ1bmN0aW9uKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDQv9C+INGI0LDQs9Cw0Lwg0LIgNC3RhSDQvdCw0L/RgNCw0LLQu9C10L3QuNGP0YUg0Lgg0L/QvtGB0LzQvtGC0YDQuNC8LCDQv9C+0L/QsNC00LDQtdC8INC70Lgg0LIg0L/RgNC10LTQtdC70Ysg0LrQsNGA0YLRi1xuICAgICAgICBmb3IgKGxldCBzdHAgPSAxOyBzdHAgPD0gc3RlcDsgc3RwKyspIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coKHN0cCA8PSBzdGVwKSk7XG5cbiAgICAgICAgICAgIGxldCBuZXdBbmdlbCA9IHRoaXMuY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHsgY29uc29sZS5sb2coJ3wtfC0gbmV3QW5nZWw6ICcsIG5ld0FuZ2VsKTsgfVxuICAgICAgICAgICAgaWYgKG5ld0FuZ2VsLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBbmdlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0ZpbmQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrTmVpZ2hib3JpbmdzQ2VsbEJ5RGlyZWN0aW9uczogZnVuY3Rpb24oc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbkxlZnQgPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25MZWZ0LmlzRmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHsgY29uc29sZS5sb2coXCJkaXJlY3Rpb25MZWZ0OiB0cnVlO1wiKTsgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbkxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHsgY29uc29sZS5sb2coXCJkaXJlY3Rpb25MZWZ0OiBmYWxzZTtcIik7IH1cblxuICAgICAgICBsZXQgZGlyZWN0aW9uVG9wID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvblRvcChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25Ub3AuaXNGaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ERUJVRykgeyBjb25zb2xlLmxvZyhcImRpcmVjdGlvblRvcDogdHJ1ZTtcIik7IH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25Ub3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHsgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Ub3A6IGZhbHNlO1wiKTsgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25SaWdodCA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25SaWdodChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25SaWdodC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7IGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uUmlnaHQ6IHRydWU7XCIpOyB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uUmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHsgY29uc29sZS5sb2coXCJkaXJlY3Rpb25SaWdodDogZmFsc2U7XCIpOyB9XG5cbiAgICAgICAgbGV0IGRpcmVjdGlvbkJvdHRvbSA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b20oc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uQm90dG9tLmlzRmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHsgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Cb3R0b206IHRydWU7XCIpOyB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uQm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7IGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uQm90dG9tOiBmYWxzZTtcIik7IH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvbkxlZnQ6IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdHJ5TmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5TmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbkNvbCAtIHN0cDtcbiAgICAgICAgY29uc29sZS5sb2coJ25ld1Bvc2l0aW9uQ29sOiAnLCB0cnlOZXdQb3NpdGlvbkNvbCwgKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodHJ5TmV3UG9zaXRpb25Db2wgPD0gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblRvcDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93IC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMClcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh0cnlOZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmaW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogdHJ5TmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc0ZpbmQ6IGZpbmRcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNoZWNrQ2VsbEJ5RGlyZWN0aW9uUmlnaHQ6IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdHJ5TmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5TmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbkNvbCArIHN0cDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICh0cnlOZXdQb3NpdGlvbkNvbCA+PSAwKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHRyeU5ld1Bvc2l0aW9uQ29sIDw9ICh0aGlzLm1hcENvbCAtIDEpKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzRmluZDogZmluZFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b206IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdHJ5TmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5TmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvblJvdyArIHN0cDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKHRyeU5ld1Bvc2l0aW9uUm93ID49IDApXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodHJ5TmV3UG9zaXRpb25Sb3cgPD0gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfVxufSIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuLy4uL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vLi4vdG9vbHMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vcm91dGUnO1xuXG4vLyBUSUdFUlMgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2Vyc0FsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8g0KDQsNC00LjRg9GBINGP0YfQtdC10Log0LIg0YfQtdGC0YvRgNC1INGB0YLQvtGA0L7QvdGLLCDRg9Cy0LXQu9C40YfQtdC9INC90LAg0L7QtNC90YMsINC10YHQu9C4IDQg0YLQviAzXG4gICAgICAgIHRoaXMuZGlzdGFuY2VWaWV3ID0gNDtcbiAgICB9XG5cbiAgICBhY3QgKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgLy8g0JLQvtC+0LfQstGA0LDRgtC40YLRjCDQvtCx0YrQtdC60YIg0YEg0YHQvtGB0LXQtNC90LjQvNC4INGP0YfQtdC50LrQsNC80LhcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiA9IFJvdXRlLmdldE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbihtYXAsIHVuaXQsIGluZGV4T2JqZWN0LCB0aGlzLmRpc3RhbmNlVmlldyk7XG5cbiAgICAgICAgY29uc29sZS5sb2cobmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKTtcblxuICAgICAgICAvLyBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhOlxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JrQsNGA0YLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubWFwXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQodC+0YHQtdC00L3QuNC80Lgg0LrQu9C10YLQutCw0LzQuCAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0YDQsNCy0L7QuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLQuNCz0YDQsNC80LggICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllc1xuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JfQtdC80LvRkdC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgICovXG5cbiAgICAgICAvKiBpZiAodW5pdC5oZWFsdGggPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INC10LTQsFxuICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1hcC5raWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCk7XG4gICAgICAgIH0qL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQldC00LjQvCDQutC+0YDQvtCy0YNcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZVRvRm9vZCAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0LrQvtGA0L7QslxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCAtMSk7XG5cbiAgICAgICAgLy8g0K3RgtCwINGP0YfQtdC50LrQsCDRj9Cy0LvRj9C10YLRjNGB0Y8g0LrQvtGA0L7QstC+0LksINGCLtC1INCV0JTQntCZISEhXG4gICAgICAgIC8vIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXVxuICAgICAgICAvLyB1bml0LmVhdGVuKHRydWUsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40LwgaW5kZXgg0YHRitC10LTQtdC90L7QuSDQutC+0YDQvtCy0Ysg0LjQtyDQvNCw0YHRgdC40LLQsCBvYmplY3RzT25NYXBcbiAgICAgICAgbGV0IGZvb2RJbmRleCA9IG1hcC5nZXRJbmRleEZyb21PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdKTtcblxuICAgICAgICAvLyDQn9C+0LzQtdGC0LjQu9C4INGC0LjQs9GA0LAg0YfRgtC+INC+0L0g0YHRitC10Lsg0LrQvtGA0L7QstGDXG4gICAgICAgIHVuaXQuZWF0ZW4obmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBmb29kSW5kZXgpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YLQuNCz0YDQsCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQo9C00LDQu9C40Lwg0LrQvtGA0L7QstGDINC40Lcg0LjQs9GA0L7QstC+0LPQviDQvNCw0YHRgdC40LLQsFxuICAgICAgICBtYXAucmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoZm9vZEluZGV4KTtcblxuICAgICAgICBkZWxldGUgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdO1xuXG4gICAgICAgIC8vINCf0YDQuCDQv9C+0LPQu9Cw0YnQtdC90LjQuCDRgtGA0LDQstGLINC/0YDQuNCx0LDQstC40Lwg0LbQuNC30L3QuCwg0L7Qs9GA0LDQvdC40YfQuNC8INC30L3QsNGH0LXQvdC40LXQvCAxMDBcbiAgICAgICAgaWYgKHVuaXQuaGVhbHRoIDwgMTAwICkge1xuXG4gICAgICAgICAgICBpZiAodW5pdC5oZWFsdGggPiA5MCkge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKDEwMC11bml0LmhlYWx0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKHRoaXMuYWRkSGVhbHRoVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodCy0L7QsdC+0LTQvdC+0LUg0L/QtdGA0LXQvNC10YnQtdC90LjQtVxuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVGcmVlIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHt9O1xuXG4gICAgICAgIC8vIHVuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0XG5cbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDRg9Cx0LjQuyDQu9C4INC00LDQvdC90YvQuSDRgtC40LPRgCDRgtC+0LvRjNC60L4g0YfRgtC+INC60L7RgNC+0LLRgyxcbiAgICAgICAgLy8g0LXRgdC70Lgg0LTQsCwg0YLQviDQvdCwINGB0LvQtdC0LiDRiNCw0LPQtSDQv9C+0YHRgtCw0LLQuNC8INC90LAg0LXQs9C+INC80LXRgdGC0L4g0YLQsNCx0LvQuNGH0LrRg3VuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0XG4gICAgICAgIGlmICh1bml0LmlzRWF0ZW4oKSkge1xuXG4gICAgICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgICAgICBkaWVVbml0VHlwZTogdW5pdC5mb29kSW5mb3JtYXRpb24uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGRpZVVuaXRJZDogdW5pdC5mb29kSW5mb3JtYXRpb24uaWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICAgICAgZGllVW5pdC5zZXRJbmRleE9iamVjdCh1bml0LmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCk7XG5cbiAgICAgICAgICAgIG1hcC5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAgICAgbWFwLnNldENlbGwodW5pdCwgZGllVW5pdCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2xkVW5pdC5yZXNldEVhdGVuKCk7XG5cbiAgICAgICAgb2xkVW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0YEg0LfQtdC80LvQtdC5XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IERlYXRoQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2RlYXRoQWxnb3JpdGhtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGllVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuaW5kZXhPYmplY3QgPSBwYXJhbS5pbmRleE9iamVjdDtcblxuICAgICAgICB0aGlzLmFsZ29yaXRtcyA9IG5ldyBEZWF0aEFsZ29yaXRobSgpO1xuXG4gICAgICAgIHRoaXMuZGllVW5pdFR5cGUgPSBwYXJhbS5kaWVVbml0VHlwZTtcbiAgICAgICAgdGhpcy5kaWVVbml0SWQgPSBwYXJhbS5kaWVVbml0SWQ7XG5cbiAgICAgICAgdGhpcy51bml0UmVzdXJlY3Rpb25JbnRlcnZhbCA9IDM7XG4gICAgICAgIHRoaXMudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0ID0gMDtcblxuICAgICAgICAvLyB0aGlzLnNvdW5kRGllID0gbmV3IEdhbWVTb3VuZHMoXCJhdWRpby9kaWVfXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiLm1wM1wiKTtcbiAgICB9XG59XG5cbkRpZVVuaXQucHJvdG90eXBlLnNldEluZGV4T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5pbmRleE9iamVjdCA9IGluZGV4T2JqZWN0O1xufTtcblxuXG4vKipcbiAqINCg0LDQt9C90YvQtSDQtNC10LnRgdGC0LLQuNGPINC+0LHRitC10LrRgtCwXG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLmFjdGlvbiA9IGZ1bmN0aW9uIChtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5hbGdvcml0bXMuYWN0KHRoaXMsIG1hcCwgaW5kZXhPYmplY3QpO1xufTtcblxuXG4vKipcbiAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAqIEBwYXJhbSB1bml0XG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLnVwZGF0ZVJvd0NvbCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gICAgdGhpcy5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICB0aGlzLmlkID0gcGFyYW0uaWQ7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gcGFyYW0uY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gcGFyYW0ub2JqUG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMucG9zaXRpb25Db2wgPSBwYXJhbS5vYmpQb3NpdGlvbkNvbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqL1xuICAgIHVwZGF0ZVJvd0NvbCAodW5pdCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQktGL0LLQvtC0IEhUTUwg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNob3cgKCkge1xuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdiLXVuaXQgXCIrdGhpcy5jbGFzc05hbWUrXCInPjwvZGl2PlwiO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICAvKipcbiAgICAgKiBPQkogR0FNRVxuICAgICAqIEBwYXJhbSBzZXR0aW5nXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmcgPSBzZXR0aW5nO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjQvCDRgNC10LbQuNC8INC40LPRgNGLXG4gICAgICAgIHRoaXMuZGV2TW9kZSA9IHNldHRpbmcuZGV2TW9kZSB8fCBmYWxzZTtcblxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40Lwg0YHQutC+0YDQvtGB0YLRjCDQuNCz0YDQvtCy0L7Qs9C+INGG0LjQutC70LBcbiAgICAgICAgdGhpcy50aW1lUmVuZGVyID0gc2V0dGluZy50aW1lUmVuZGVyIHx8IDUwMDtcblxuICAgICAgICB0aGlzLmJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItYnV0dG9uc19fYnRuLXN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1idXR0b25zX19idG4tcGF1c2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHQU1FIExPT1BcbiAgICAgKi9cbiAgICBydW4gKCkge1xuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC90L7QstGD0Y4g0YHRhtC10L3Rg1xuICAgICAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUodGhpcy5zZXR0aW5nKTtcblxuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1INC90LAg0YHRhtC10L3QtVxuICAgICAgICBpZiAoc2NlbmUuYnVpbGQoKSkge1xuXG4gICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC30LDQs9GA0YPQttC10L3QsC4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLFwi0J3QsNC20LzQuNGC0LUgJ9Cd0LDRh9Cw0YLRjCDQuNCz0YDRgycuXCIsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGxldCBsb29wO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGV2TW9kZSkge1xuXG4gICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQsiDQvtCx0YvRh9C90L7QvCDRgNC10LbQuNC80LUuJywgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQt9Cw0L/Rg9GJ0LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vINCT0LvQsNCy0L3Ri9C5IExvb3BcbiAgICAgICAgICAgICAgICAgICAgbG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lLmlzc2V0T2JqZWN0T25NYXAoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmRpZU1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgc2VsZi50aW1lUmVuZGVyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9vcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQvtGB0YLQsNC90L7QstC70LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzY2VuZS5pc3NldE9iamVjdE9uTWFwKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQsiDRgNC10LbQuNC80LUg0YDQsNC30YDQsNCx0L7RgtGH0LjQutCwLicsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9Ca0L7QvdC10YYg0LjQs9GA0YsuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgYWxlcnQoJ0dhbWUgT3ZlcicpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tIFwiLi9zZXR0aW5nXCI7XG5cbi8vINCf0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDQtNC+0LrRg9C80LXQvdGC0LAg0LfQsNC/0YPRgdGC0LjQvCDQuNCz0YDRg1xuJChmdW5jdGlvbiAoKSB7XG4gICAgJC5sTm90aWZ5KCk7XG5cbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKHNldHRpbmcpO1xuXG4gICAgZ2FtZS5ydW4oKTtcbn0pO1xuIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgVW5pdCBmcm9tICcuL3VuaXQnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9zZXR0aW5nJztcbmltcG9ydCBEaWVVbml0IGZyb20gJy4vZGllVW5pdCc7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi90b29scyc7XG5cbi8qKlxuICog0JrQu9Cw0YHRgSDRgNCw0LHQvtGC0Ysg0YEg0LrQsNGA0YLQvtC5XG4gKiBAcGFyYW0gc2V0dGluZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFwRGF0YSA9IFtdO1xuXG4gICAgICAgIC8vINCe0LHRitC10LrRgtGLINC00LvRjyDQutCw0YDRgtGLXG4gICAgICAgIHRoaXMubWFwT2JqZWN0cyA9IHNldHRpbmcubWFwT2JqZWN0cztcblxuICAgICAgICAvLyDQodC/0LjRgdC+0Log0L7QsdGK0LXQutGC0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0LfQsNC00LXQudGB0YLQstC+0LLQsNC90L3RiyDQvdCwINC60LDRgNGC0LVcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXAgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMucm93ID0gc2V0dGluZy5tYXBTaXplLnJvdyB8fCAwO1xuICAgICAgICB0aGlzLmNvbCA9IHNldHRpbmcubWFwU2l6ZS5jb2wgfHwgMDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7RgdGC0YDQvtC40Lwg0L/Rg9GB0YLRg9GOINC60LDRgNGC0YMg0L3QsCDQvtGB0L3QvtCy0LUg0L3QsNGH0LDQu9GM0L3Ri9GFIFJvdy9Db2xcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB3aGlsZSAodGhpcy5tYXBEYXRhLnB1c2goW10pIDwgdGhpcy5yb3cpIDtcblxuICAgICAgICBpZiAodGhpcy5tYXBEYXRhLmxlbmd0aCA9PSB0aGlzLnJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQk9C10L3QtdGA0LDRhtC40Y8g0LrQsNGA0YLRi1xuICAgICAqL1xuICAgIGdlbmVyYXRlKCkge1xuXG4gICAgICAgIGxldCBvYmpJRCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgb2JqZWN0TmFtZSBpbiB0aGlzLm1hcE9iamVjdHMpIHtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqZWN0TmFtZSk7XG4gICAgICAgICAgICBsZXQgb2JqTWluID0gdGhpcy5tYXBPYmplY3RzW29iamVjdE5hbWVdLm1pbjtcbiAgICAgICAgICAgIGxldCBvYmpNYXggPSB0aGlzLm1hcE9iamVjdHNbb2JqZWN0TmFtZV0ubWF4O1xuXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQvtCx0YrQtdC60YIg0Y/QstC70Y/QtdGC0YzRgdGPINGB0YLQsNGC0LjQutC+0LksXG4gICAgICAgICAgICAvLyDRgtC+INC/0L7RgdGC0LDRgNC10LzRgdGPINC00LDRgtGMINC/0L4g0LzQsNC60YHQuNC80YPQvNGDINC30L3QsNGH0LXQvdC40Y8gbWluL21heFxuICAgICAgICAgICAgLy8g0LTQu9GPINC/0L7Qu9C90L7Qs9C+INC30LDQv9C+0LvQvdC10L3QuNGPINC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbiAgICAgICAgICAgIGlmIChvYmpNaW4gPT09IG51bGwgJiYgb2JqTWF4ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb2JqTWluID0gKHRoaXMucm93ICsgdGhpcy5jb2wpICogMjtcbiAgICAgICAgICAgICAgICBvYmpNYXggPSAodGhpcy5yb3cgKyB0aGlzLmNvbCkgKiAxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC60L7Quy3QstC+INC+0LHRitC10LrRgtC+0LIg0L3QsCDQutCw0YDRgtC1XG4gICAgICAgICAgICBsZXQgb2JqQ291bnRPbk1hcCA9IHRvb2xzLnJhbmRvbUludGVnZXIob2JqTWluLCBvYmpNYXgpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9iamVjdE5hbWVbb2JqQ291bnRPbk1hcF06IFwiICsgb2JqZWN0TmFtZSArIFwiIFwiICsgb2JqQ291bnRPbk1hcCk7XG5cbiAgICAgICAgICAgIC8vINCf0YDQvtC50LTQtdC80YHRjyDQv9C+INGN0YLQvtC80YMg0LrQvtC70LjRh9C10LLRgdGC0LLRg1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpDb3VudE9uTWFwOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCBtYXBSb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFwUm93Q29sTm9ybWFsOiAnLCBtYXBSb3dDb2wpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0pIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaklELFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IG1hcFJvd0NvbC5yb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogbWFwUm93Q29sLmNvbFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0O1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0TmFtZSA9PSBcImdyb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IEVudGl0eSh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBVbml0KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPSB1bml0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09ICdjb3dzJyB8fCBvYmplY3ROYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvT2JqZWN0c09uTWFwKHVuaXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXRTZXR0aW5nID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqSUQ6IG9iaklELFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyeU5ld0dlbmVyYXRlKHVuaXRTZXR0aW5nLCBvYmpDb3VudE9uTWFwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9iaklEKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LLRgtC+0YDQvdCw0Y8g0LPQtdC90LXRgNCw0YbQuNGPLCDQsiDRgdC70YPRh9C40Lgg0LfQsNC90Y/RgtC+0LPQviDQvNC10YHRgtCwINCyINC80LDRgdGB0LjQstC1XG4gICAgICogQHBhcmFtIG9iamVjdFNldHRpbmdcbiAgICAgKiBAcGFyYW0gY291bnRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICB0cnlOZXdHZW5lcmF0ZShvYmplY3RTZXR0aW5nLCBjb3VudCkge1xuXG4gICAgICAgIGlmIChjb3VudCA8PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0Y3RgtC+0LzRgyDQutC+0LvQuNGH0LXQstGB0YLQstGDXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXG4gICAgICAgICAgICAvLyDRgdC+0LfQtNCw0LTQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLINC00LvRjyDQv9GA0L7RgdGC0LDQstC70LXQvdC40Y9cbiAgICAgICAgICAgIGxldCBtYXBSb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXBSb3dDb2xSZWN1cnNpdmU6ICcsIG1hcFJvd0NvbCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBvYmplY3RTZXR0aW5nLm9iaklELFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IG1hcFJvd0NvbC5yb3csXG4gICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBtYXBSb3dDb2wuY29sXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGxldCB1bml0O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSBcImdyb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgRW50aXR5KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBVbml0KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdID0gdW5pdDtcblxuICAgICAgICAgICAgICAgIGlmIChvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUgPT0gJ2Nvd3MnIHx8IG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSAndGlnZXJzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvT2JqZWN0c09uTWFwKHVuaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB1bml0U2V0dGluZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgb2JqSUQ6IG9iamVjdFNldHRpbmcub2JqSUQsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdFNldHRpbmcub2JqZWN0TmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJ5TmV3R2VuZXJhdGUodW5pdFNldHRpbmcsIGNvdW50IC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70YzQvdGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsCDQvtGB0L3QvtCy0LUg0LrQvtC7LdCy0L4g0YHRgtGA0L7QuiDQuCDQutC+0LvQvtC90L7QulxuICAgICAqIEByZXR1cm5zIHt7cm93OiAqLCBjb2w6ICp9fVxuICAgICAqL1xuICAgIGdldFJhbmRvbVJvd0NvbENvb3JkKCkge1xuICAgICAgICBsZXQgY291bnRSb3cgPSB0aGlzLnJvdyxcbiAgICAgICAgICAgIGNvdW50Q29sID0gdGhpcy5jb2w7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvdzogdG9vbHMucmFuZG9tSW50ZWdlcigwLCBjb3VudFJvdyksXG4gICAgICAgICAgICBjb2w6IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgY291bnRDb2wpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY2hlY2tSb3V0ZSAoKSB7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbih1bml0LCB0aGlzLm1hcCwgaW5kZXhPYmplY3QpO1xuXG4gICAgfVxuICAgIFxuICAgIGdldFJhbmRvbVJvd0NvbEJhc2VkT25Vbml0KGNlbGwsIHN0ZXBzKSB7XG4gICAgICAgIGxldCBpc3NldFJvdXRlID0gdGhpcy50cnlSb3V0ZShzdGVwcyk7XG5cblxuXG5cbiAgICAgICAgLy8gbGV0IHJvd01pbiA9ICgoY2VsbC5wb3NpdGlvblJvdyAtIDEpID49IDApID8gKGNlbGwucG9zaXRpb25Sb3cgLSAxKSA6IDA7XG4gICAgICAgIC8vIGxldCByb3dNYXggPSAoKGNlbGwucG9zaXRpb25Sb3cgKyAxKSA8PSB0aGlzLnJvdykgPyAoY2VsbC5wb3NpdGlvblJvdyArIDEpIDogdGhpcy5yb3c7XG5cbiAgICAgICAgLy8gbGV0IGNvbE1pbiA9ICgoY2VsbC5wb3NpdGlvbkNvbCAtIDEpID49IDApID8gKGNlbGwucG9zaXRpb25Sb3cgLSAxKSA6IDA7XG4gICAgICAgIC8vIGxldCBjb2xNYXggPSAoKGNlbGwucG9zaXRpb25Db2wgKyAxKSA8PSB0aGlzLmNvbCkgPyAoY2VsbC5wb3NpdGlvbkNvbCArIDEpIDogdGhpcy5jb2w7XG5cbiAgICAgICAgLy8gbGV0IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAvLyAgICAgbmV3UG9zaXRpb25Db2w7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIG5ld1Bvc2l0aW9uUm93ID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xXaXRoRXhjbHVkZShyb3dNaW4sIHJvd01heCwgY2VsbC5wb3NpdGlvblJvdyk7XG4gICAgICAgIC8vIG5ld1Bvc2l0aW9uQ29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xXaXRoRXhjbHVkZShjb2xNaW4sIGNvbE1heCwgY2VsbC5wb3NpdGlvblJvdyk7XG5cbiAgICAgICAgLy8gcmV0dXJuIHtcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbFxuICAgICAgICAvLyB9XG4gICAgfTtcblxuICAgIGdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKG1pbkNlbGwsIG1heENlbGwsIGV4Y2x1ZGVWYWx1ZSkge1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgdmFsdWUgPSB0b29scy5yYW5kb21JbnRlZ2VyKG1pbkNlbGwsIG1heENlbGwpO1xuXG4gICAgICAgIHdoaWxlICh2YWx1ZSA9PSBleGNsdWRlVmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9vbHMucmFuZG9tSW50ZWdlcihtaW5DZWxsLCBtYXhDZWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG5cbiAgICBnZXROZXdSb3dDb2xQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93Q29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xDb29yZCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZPUiBORVcgVU5JVCBHRU5FUkVURSBORVcgUE9TSVRJT046IFRSWVtcIiArIChpKyspICsgXCJdIC0+IFtSKFwiICsgbmV3UG9zaXRpb25Sb3dDb2wucm93ICsgXCIpOkMoXCIgKyBuZXdQb3NpdGlvblJvd0NvbC5jb2wgKyBcIildXCIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tYXBEYXRhW25ld1Bvc2l0aW9uUm93Q29sLnJvd11bbmV3UG9zaXRpb25Sb3dDb2wuY29sXS5jbGFzc05hbWUgPT09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UG9zaXRpb25Sb3dDb2w7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRydWUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDQtNC40Lwg0Y/Rh9C10LnQutGDXG4gICAgICogQHBhcmFtIG9sZFVuaXRcbiAgICAgKiBAcGFyYW0gbmV3VW5pdFxuICAgICAqL1xuICAgIHNldENlbGwob2xkVW5pdCwgbmV3VW5pdCkge1xuXG4gICAgICAgIHRoaXMubWFwRGF0YVtvbGRVbml0LnBvc2l0aW9uUm93XVtvbGRVbml0LnBvc2l0aW9uQ29sXSA9IG5ld1VuaXQ7XG5cbiAgICAgICAgdGhpcy5tYXBEYXRhW29sZFVuaXQucG9zaXRpb25Sb3ddW29sZFVuaXQucG9zaXRpb25Db2xdLnVwZGF0ZVJvd0NvbChvbGRVbml0KTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRj9GH0LXQudC60YNcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Sb3dcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Db2xcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRDZWxsKHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBEYXRhW3Bvc2l0aW9uUm93XVtwb3NpdGlvbkNvbF07XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvRj9C10YIgVW5pdCDQuNC3INC80LDRgdGB0LjQstCwIE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICovXG4gICAgYWRkVG9PYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcC5wdXNoKHVuaXQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICByZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcC5zcGxpY2UoaW5kZXhPYmplY3QsIDEpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgRGllT2JqZWN0c09uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0YHQvNC10YDRgtC4IHVuaXRzXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICByZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcChpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcC5zcGxpY2UoaW5kZXhPYmplY3QsIDEpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNC8INC00LvRjyBVbml0INC10LPQviBSQyhSb3cvQ29sKSDQsiDQvNCw0YHRgdC40LLQtSBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIHVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcCh1bml0LCBpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Db2wgPSB1bml0LnBvc2l0aW9uQ29sO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70LjQvCDQvtCx0YrQtdC60YJcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIGtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCDQvNC+0LPQuNC70LrRg1xuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2wsXG4gICAgICAgICAgICBkaWVVbml0VHlwZTogdW5pdC5jbGFzc05hbWUsXG4gICAgICAgICAgICBkaWVVbml0SWQ6IHVuaXQuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZGllVW5pdCA9IG5ldyBEaWVVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgdGhpcy5zZXRDZWxsKHVuaXQsIGRpZVVuaXQpO1xuXG4gICAgICAgIHRoaXMuYWRkRGllVW5pdFRvRGllQXJyYXkoZGllVW5pdCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kaWVPYmplY3RzT25NYXApO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0LvQuCDQtdGJ0LUg0L7QsdGK0LXQutGC0Ysg0LIg0LzQsNGB0YHQuNCy0LUg0LTQu9GPINGB0YPRidC10LLRgdGC0LLQvtCy0LDQvdC40Y8g0LjQs9GA0YtcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGlzc2V0T2JqZWN0T25NYXAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5vYmplY3RzT25NYXAubGVuZ3RoID4gMCA/IDEgOiAwKTtcbiAgICB9O1xuXG5cbi8vINCf0YDQvtCy0LXRgNC40Lwg0YHQvtGB0LXQtNC90LjQuCDQutC70LXRgtC60LggK1xuICAgIGNoZWNrVW5pdE5laWdoYm9yaW5nc0NlbGwodW5pdCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB1bml0LmNsYXNzTmFtZSA9PSAndGlnZXJzJ1xuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIHVuaXQuY2xhc3NOYW1lID09ICdjb3dzJ1xuICAgICAgICApIHtcblxuICAgICAgICAgICAgbGV0IGNlbGxzID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3RvcFJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0Qm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0Qm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdFRvcCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGxldCB1bml0UG9zaXRpb25Sb3cgPSBwYXJzZUludCh1bml0LnBvc2l0aW9uUm93KTtcbiAgICAgICAgICAgIGxldCB1bml0UG9zaXRpb25Db2wgPSBwYXJzZUludCh1bml0LnBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIC8vIGxldCBtYXBEYXRlID0gdGhpcy5tYXBEYXRhO1xuXG4gICAgICAgICAgICAvLyDQndC1INC30LDQsdGL0YLRjCDQv9GA0L4g0LPRgNCw0L3QuNGG0Ysg0LrQsNGA0YLRi1xuICAgICAgICAgICAgbGV0IGJvcmRlciA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgdG9wUmlnaHQ6IHRoaXMuY29sLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB0aGlzLmNvbCxcbiAgICAgICAgICAgICAgICByaWdodEJvdHRvbTogdGhpcy5jb2wsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLnJvdyxcbiAgICAgICAgICAgICAgICBsZWZ0Qm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgbGVmdFRvcDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcERhdGUpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQTDpcIiwgdW5pdFBvc2l0aW9uUm93LCB1bml0UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICAvLyBUT1Ag0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQstC10YDRhdGDICtcbiAgICAgICAgICAgIGlmICgodW5pdFBvc2l0aW9uUm93IC0gMSkgPj0gYm9yZGVyLnRvcCkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzBdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1swXS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyAtIDFdW3VuaXRQb3NpdGlvbkNvbF07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gVE9QX1JJR0hUINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0LLQtdGA0YXRgy3QstC/0YDQsNCy0L4gK1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIudG9wUmlnaHRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzFdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1sxXS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyAtIDFdW3VuaXRQb3NpdGlvbkNvbCArIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFJJR0hUINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0L/RgNCw0LLQviArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvbkNvbCArIDEpIDwgYm9yZGVyLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbMl0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzJdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93XVt1bml0UG9zaXRpb25Db2wgKyAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBSSUdIVF9CT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQv9GA0LDQstC+LdCy0L3QuNC30YMgK1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgKyAxKSA8IGJvcmRlci5ib3R0b21cbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci5yaWdodEJvdHRvbVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbM10uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzNdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93ICsgMV1bdW5pdFBvc2l0aW9uQ29sICsgMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gQk9UVE9NINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINCy0L3QuNC30YMgK1xuICAgICAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Sb3cgKyAxKSA8IGJvcmRlci5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICBjZWxsc1s0XS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbNF0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgKyAxXVt1bml0UG9zaXRpb25Db2xdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIExFRlRfQk9UVE9NINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINGB0LvQtdCy0LAt0LLQvdC40LfRgyArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCAtIDEpID49IGJvcmRlci5sZWZ0Qm90dG9tXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1s1XS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbNV0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgKyAxXVt1bml0UG9zaXRpb25Db2wgLSAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBMRUZUINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINGB0LvQtdCy0LAgK1xuICAgICAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Db2wgLSAxKSA+PSBib3JkZXIubGVmdCkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzZdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s2XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvd11bdW5pdFBvc2l0aW9uQ29sIC0gMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTEVGVF9UT1Ag0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LvQtdCy0LAt0LLQstC10YDRhdGDICtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uUm93IC0gMSkgPj0gYm9yZGVyLnRvcFxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCAtIDEpID49IGJvcmRlci5sZWZ0XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1s3XS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbN10uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgLSAxXVt1bml0UG9zaXRpb25Db2wgLSAxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51bml0KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGxzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUk9XOiBcIiArIHVuaXRQb3NpdGlvblJvdywgXCJDT0w6IFwiICsgdW5pdFBvc2l0aW9uQ29sICk7XG5cbiAgICAgICAgICAgIHJldHVybiBjZWxscztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCe0YLRhNC40LvRjNGC0YDRg9C10Lwg0Y/Rh9C10LnQutC4INC/0L4g0YLQuNC/0YMgdW5pdFR5cGVcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFxuICAgICAqIEBwYXJhbSB1bml0VHlwZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBmaWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXRUeXBlKSB7XG5cbiAgICAgICAgbGV0IGFyciA9IFtdO1xuXG4gICAgICAgIC8vINCf0LXRgNC10LHQtdGA0LXQvCDQv9C+0LvRg9GH0LXQvdC90YvQuSDQvNCw0YHRgdC40LIg0YEg0Y/Rh9C10LnQutCw0LzQuCDQvdCw0YXQvtC00Y/RidC40LzQuNGB0Y8g0YDRj9C00L7QvFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5laWdoYm9yaW5nc0NlbGwubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgLy8g0K/Rh9C10LnQutCwINC90LUg0LLRi9GF0L7QtNC40YIg0LfQsCDQs9GA0LDQvdC40YbRi1xuICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uZXhpc3QpIHtcblxuICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQuY2xhc3NOYW1lICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5jb250ZW50LmNsYXNzTmFtZSA9PSB1bml0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gobmVpZ2hib3JpbmdzQ2VsbFtpXS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDQuNC90LTQtdC60YEg0LrQvtGA0L7QstGLINC/0YDQuCDQtdC1INGB0YrQtdC00LDQvdC40LhcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW5kZXhGcm9tT2JqZWN0c09uTWFwKHVuaXQpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMub2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9PSB1bml0LnBvc2l0aW9uUm93XG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Db2wgPT0gdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4T2JqZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4vL01BUCBERUFUSCBNQU5BR0VcbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDQuNC90LTQtdC60YEg0LrQvtGA0L7QstGLINC/0YDQuCDQtdC1INGB0YrQtdC00LDQvdC40LhcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SW5kZXhGcm9tRGllT2JqZWN0c09uTWFwKHVuaXQpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMuZGllT2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9PSB1bml0LnBvc2l0aW9uUm93XG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Db2wgPT0gdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4T2JqZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRGllVW5pdFRvRGllQXJyYXkodW5pdCkge1xuICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcC5wdXNoKHVuaXQpO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuXG4vKipcbiAqINCY0LPRgNC+0LLQsNGPINGB0YbQtdC90LBcbiAqIEBwYXJhbSBzZXR0aW5nXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItZ2FtZV9fcGxhaW4nKTtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKHNldHRpbmcpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQutCw0YDRgtGDINC4INC30LDQv9C+0LvQvdC40Lwg0LXQtSDQvtCx0YrQtdC60YLQsNC80LhcbiAgICAgKi9cbiAgICBidWlsZCAoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMubWFwLmluaXQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdlbmVyYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQntGC0YDQuNGB0L7QstC60LAg0LfQsNC/0L7Qu9C90LXQvdC90L7QuSDQutCw0YDRgtGLXG4gICAgICovXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IG1hcEhUTUwgPSAnJztcblxuXG4gICAgICAgIC8vINCf0L7RgdGC0YDQvtC40Lwg0LjQs9GA0L7QstC+0LUg0L/QvtC70LVcbiAgICAgICAgZm9yIChsZXQgcG9zaXRpb25Sb3cgPSAwOyBwb3NpdGlvblJvdyA8IHRoaXMubWFwLnJvdzsgcG9zaXRpb25Sb3crKykge1xuICAgICAgICAgICAgbWFwSFRNTCArPSBcIjxkaXYgY2xhc3M9J3Jvdyc+XCI7XG4gICAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbkNvbCA9IDA7IHBvc2l0aW9uQ29sIDwgdGhpcy5tYXAuY29sOyBwb3NpdGlvbkNvbCsrKSB7XG4gICAgICAgICAgICAgICAgbWFwSFRNTCArPSBcIjxkaXYgY2xhc3M9J2NlbGwnPiBcIiArIHRoaXMubWFwLmdldENlbGwocG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKS5zaG93KCkgKyBcIjwvZGl2PlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFwSFRNTCArPSBcIjwvZGl2PlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0JTQvtCx0LDQstC40Lwg0YHQvtCx0YDQsNC90L3Rg9GOIEhUTUwg0LrQsNGA0YLRgyDQsiBET01cbiAgICAgICAgdGhpcy5wbGFpbi5pbm5lckhUTUwgPSBtYXBIVE1MO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCU0LXQudGB0YLQstC40Y8g0LLRgdC10YUg0L7QsdGK0LXQutGC0L7QsiDQvdCwINC60LDRgNGC0LVcbiAgICAgKi9cbiAgICBhY3Rpb25Pbk1hcCAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWFwLm9iamVjdHNPbk1hcCk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMubWFwLm9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgIHRoaXMubWFwLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0uYWN0aW9uKHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZGllTWFuYWdlciAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcC5kaWVPYmplY3RzT25NYXAubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhPYmplY3QgPSAwOyBpbmRleE9iamVjdCA8IHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLmFjdGlvbih0aGlzLm1hcCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDQu9C4INC10YnQtSDQvtCx0YrQtdC60YLRiyDQsiDQvNCw0YHRgdC40LLQtSDQtNC70Y8g0YHRg9GJ0LXQstGB0YLQstC+0LLQsNC90LjRjyDQuNCz0YDRi1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgaXNzZXRPYmplY3RPbk1hcCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5pc3NldE9iamVjdE9uTWFwKCk7XG4gICAgfTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIlxuLy8gUFJPRFxuLypleHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZUNvbnRhaW5lcklEOiAnYi1nYW1lJyxcbiAgICBtYXBTaXplOiB7XG4gICAgICAgIHJvdzogOSxcbiAgICAgICAgY29sOiAyM1xuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA5MCxcbiAgICAgICAgICAgIG1heDogMTc1XG4gICAgICAgIH0sXG4gICAgICAgIGNvd3M6IHtcbiAgICAgICAgICAgIG1pbjogMTUsXG4gICAgICAgICAgICBtYXg6IDIwXG4gICAgICAgIH0sXG4gICAgICAgIHRpZ2Vyczoge1xuICAgICAgICAgICAgbWluOiAzLFxuICAgICAgICAgICAgbWF4OiA2XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgbWF4OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRldk1vZGU6IGZhbHNlLFxuICAgIHRpbWVSZW5kZXI6IDUwMFxufTsqL1xuXG4vLyBERVZcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnYW1lQ29udGFpbmVySUQ6ICdiLWdhbWUnLFxuICAgIG1hcFNpemU6IHtcbiAgICAgICAgcm93OiA2LFxuICAgICAgICBjb2w6IDZcbiAgICB9LFxuICAgIG1hcE9iamVjdHM6IHtcbiAgICAgICAgZ3Jhc3M6IHtcbiAgICAgICAgICAgIG1pbjogNyxcbiAgICAgICAgICAgIG1heDogMTNcbiAgICAgICAgfSxcbiAgICAgICAgY293czoge1xuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiA1XG4gICAgICAgIH0sXG4gICAgICAgIHRpZ2Vyczoge1xuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiA0XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgbWF4OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRldk1vZGU6IGZhbHNlLFxuICAgIHRpbWVSZW5kZXI6IDE1MzBcbn07XG5cbiIsIi8vIEFVRElPIElOIEdBTUVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTb3VuZHMge1xuICAgIGNvbnN0cnVjdG9yKGZpbGUpIHtcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbyhmaWxlKTsgICBcbiAgICB9XG5cbiAgICBwbGF5ICgpIHtcbiAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4gICAgfTtcblxuICAgIC8vINCk0YPQvdC60YbQuNGPIHN0b3Ag0LTQu9GPIEF1ZGlvOlxuICAgIHN0b3AgKCkge1xuICAgICAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuc291bmQuY3VycmVudFRpbWUgPSAwLjA7XG4gICAgfTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIi8vINCS0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSDRhNGD0L3QutGG0LjQuCDQtNC70Y8g0LjQs9GA0YtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0L7RidGP0LXRgiDRgdC70YPRh9Cw0LnQvdC+0LUg0YfQuNGB0LvQviDQsiDQtNC40LDQv9Cw0LfQvtC90LUgTWluL01heFxuICAgICAqIEBwYXJhbSBtaW5cbiAgICAgKiBAcGFyYW0gbWF4XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmFuZG9tSW50ZWdlcjogZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgfVxufTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IEdyYXNzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtJztcbmltcG9ydCBDb3dzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2Nvd3NBbGdvcml0aG0nO1xuaW1wb3J0IFRpZ2Vyc0FsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0nO1xuaW1wb3J0IEdyb3VuZEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0nO1xuaW1wb3J0IEdhbWVTb3VuZHMgZnJvbSAnLi9zb3VuZCc7XG5cbi8qKlxuICog0J7RgdC90L7QstC90L7QuSDQn9GA0L7RgtC+0YLQuNC/INC+0LHRitC10LrRgtCwINC90LAg0LrQsNGA0YLQtVxuICogQHBhcmFtIGNsYXNzTmFtZVxuICogQHBhcmFtIGlkXG4gKiBAcGFyYW0gb2JqUG9zaXRpb25Sb3dcbiAqIEBwYXJhbSBvYmpQb3NpdGlvbkNvbFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXQgZXh0ZW5kcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtKTtcblxuICAgICAgICB0aGlzLmZvb2RUeXBlID0gdGhpcy5nZXRGb29kVHlwZSgpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICAgICAgdGhpcy5lbmVteSA9IChwYXJhbS5jbGFzc05hbWUgPT0gJ2Nvd3MnID8gJ3RpZ2VycycgOiBudWxsKTtcblxuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgIGlzRWF0OiBmYWxzZSxcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBudWxsLFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG51bGwsXG4gICAgICAgICAgICBpbmRleE9iamVjdDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc291bmRFYXQgPSBuZXcgR2FtZVNvdW5kcyhcImF1ZGlvL2VhdF9cIiArIHRoaXMuY2xhc3NOYW1lICsgXCIubXAzXCIpO1xuXG4gICAgICAgIC8vINCS0YvQsdC10YDQuNC8INCw0LvQs9C+0YDQuNGC0Lwg0L/QvtCy0LXQtNC10L3QuNGPINC00LvRjyDQvtCx0YrQtdC60YLQsFxuICAgICAgICB0aGlzLmFsZ29yaXRtcyA9IHRoaXMuc2VsZWN0QWxnb3JpdGhtKHBhcmFtLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktGL0LLQvtC0IEhUTUwg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNob3coKSB7XG4gICAgICAgIGxldCB1bml0SGVhbHRoID0gXCJcIjtcblxuICAgICAgICBpZiAodGhpcy5jbGFzc05hbWUgPT0gJ2Nvd3MnIHx8IHRoaXMuY2xhc3NOYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NIZWFsdGhDb2xvciA9IHRoaXMuZ2V0Q2xhc3NIZWFsdGhDb2xvcih0aGlzLmhlYWx0aCk7XG5cbiAgICAgICAgICAgIHVuaXRIZWFsdGggKz0gXCI8ZGl2IGNsYXNzPSdiLXVuaXRfX2hlYWx0aCc+PGRpdiBjbGFzcz0nYi1oZWFsdF9faW5kaWNhdG9yIFwiICsgY2xhc3NIZWFsdGhDb2xvciArIFwiJyBzdHlsZT0nd2lkdGg6IFwiICsgdGhpcy5oZWFsdGggKyBcIiU7Jz48L2Rpdj48L2Rpdj5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J2ItdW5pdCBcIiArIHRoaXMuY2xhc3NOYW1lICsgXCInPlwiICsgdW5pdEhlYWx0aCArIFwiPC9kaXY+XCI7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0YbQstC10YIo0LrQu9Cw0YHRgSkg0LbQuNC30L3QuCB1bml0XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDbGFzc0hlYWx0aENvbG9yKHZhbHVlKSB7XG5cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSA5MCAmJiBwYXJzZUludCh2YWx1ZSkgPD0gMTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1nb29kXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSA3NSAmJiBwYXJzZUludCh2YWx1ZSkgPD0gOTApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWFib3ZlLWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDUwICYmIHBhcnNlSW50KHZhbHVlKSA8PSA3NSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gMjUgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDUwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1iZWxvdy1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSAwICYmIHBhcnNlSW50KHZhbHVlKSA8PSAyNSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtbG93XCI7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCg0LDQt9C90YvQtSDQtNC10LnRgdGC0LLQuNGPINC+0LHRitC10LrRgtCwXG4gICAgICovXG4gICAgYWN0aW9uKG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5hbGdvcml0bXMuYWN0KHRoaXMsIG1hcCwgaW5kZXhPYmplY3QpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGG0LXQu9GMINGA0LDQtNC4INC60L7RgtC+0YDQvtC5INC20LjQstC10YIgVW5pdCA6KVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldEZvb2RUeXBlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdjb3dzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2dyYXNzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RpZ2Vycyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjb3dzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQktC10YDQvdC10YIg0LTQu9GPINC+0LHRitC10LrRgtCwINC10LPQviDQsNC70LPQvtGA0LjRgtC8INC/0L7QstC10LTQtdC90LjRjyDQsiDQuNCz0YDQtVxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNlbGVjdEFsZ29yaXRobShpZCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogMCAtIGdyYXNzXG4gICAgICAgICAqIDEgLSBjb3dzXG4gICAgICAgICAqIDIgLSB0aWdlcnNcbiAgICAgICAgICogMyAtIGdyb3VuZFxuICAgICAgICAgKiA0IC0gZGVhdGhcbiAgICAgICAgICovXG5cbiAgICAgICAgc3dpdGNoIChwYXJzZUludChpZCkpIHtcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3Jhc3NBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvd3NBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRpZ2Vyc0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JvdW5kQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbi8vINCh0YrQtdC00LXQvVxuICAgIGlzRWF0ZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdDtcbiAgICB9O1xuXG4vLyDQodGK0LXQtNC10L1cbiAgICBlYXRlbih1bml0LCBmb29kSW5kZXgpIHtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3QgPSBmb29kSW5kZXg7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmNsYXNzTmFtZSA9IHVuaXQuY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pZCA9IHVuaXQuaWQ7XG4gICAgfTtcblxuLy8gUkVTRVQg0KHRitC10LTQtdC9XG4gICAgcmVzZXRFYXRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93ID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Db2wgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCA9IG51bGw7XG4gICAgfTtcblxuICAgIGFkZEhlYWx0aCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmhlYWx0aCArPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHN1YkhlYWx0aCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmhlYWx0aCAtPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfTtcblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iXSwic291cmNlUm9vdCI6IiJ9