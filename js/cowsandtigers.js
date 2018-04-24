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

        return _possibleConstructorReturn(this, (CowsAlgorithm.__proto__ || Object.getPrototypeOf(CowsAlgorithm)).apply(this, arguments));
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

exports.default = {

    calculate: function calculate(map, unit, indexObject, steps, callBackUnitRoute) {

        var routeData = [],
            unitRowColSource = void 0,
            routeCellSteps = [{
            positionRow: unit.positionRow,
            positionCol: unit.positionCol
        }],
            routes = new Array(steps);

        for (var i = 0; i < steps; i++) {
            var direction = ['top', 'topRight', 'right', 'rightBottom', 'bottom', 'leftBottom', 'left', 'leftTop'];
            var directionWay = void 0;
            var newDirectionWay = void 0;

            // выберим направление
            directionWay = _tools2.default.randomInteger(0, direction.length);

            do {
                newDirectionWay = this.getNewRowColCell(routeCellSteps[i], directionWay, i);
            } while (!newDirectionWay);

            console.log(newDirectionWay);
            // Получим новые координаты ячейки
            routeCellSteps.push(newDirectionWay);

            this.calculateRoute(routeCellSteps[i], function (route) {

                routes.push(route);

                routeData.push(route);
            });
        }

        callBackUnitRoute(routeData);
    },

    // Получим новые координаты на основе выбранного направления
    // проверим не вышли за границы
    getNewRowColCell: function getNewRowColCell(cell, way, step) {
        // cell.positionRow
        // cell.positionCol

        console.log(cell);

        // return function (cell, way, step) {
        //    
        // }
    },

    // Просчитаем маршрут наверное ))
    calculateRoute: function calculateRoute(steps, callBack) {
        callBack(route);
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

        return _possibleConstructorReturn(this, (TigersAlgorithm.__proto__ || Object.getPrototypeOf(TigersAlgorithm)).apply(this, arguments));
    }

    _createClass(TigersAlgorithm, [{
        key: 'act',
        value: function act(unit, map, indexObject) {

            _route2.default.calculate(map, unit, indexObject, 4, function (data) {});

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

                $('body').lNotify('add', 'Игра загружена.', 'success');
                $('body').lNotify('add', "Нажмите 'Начать игру'.", 'success');

                // return false;
                var self = this;
                var loop = void 0;

                if (!this.devMode) {

                    $('body').lNotify('add', 'Игра в обычном режиме.', 'success');

                    this.btnStart.addEventListener('click', function () {

                        $('body').lNotify('add', 'Игра запущена.', 'success');
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

                        $('body').lNotify('add', 'Игра остановлена.', 'success');
                    });
                } else {
                    if (scene.issetObjectOnMap()) {
                        $('body').lNotify('add', 'Игра в режиме разработчика.', 'success');

                        scene.dieManager();
                        scene.actionOnMap();
                        scene.render();
                    } else {
                        $('body').lNotify('add', 'Конец игры.', 'success');
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
    $('body').lNotify();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vY293c0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL3JvdXRlLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi90b29scy5qcyIsIndlYnBhY2s6Ly8vLi91bml0LmpzIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsImFkZEhlYWx0aFZhbHVlIiwic3ViSGVhbHRoVmFsdWUiLCJ1bml0IiwibWFwIiwiaW5kZXhPYmplY3QiLCJuZWlnaGJvcmluZ3NDZWxsIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQiLCJjaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsIiwiZmlsdGVyQ2VsbEJ5VHlwZSIsImZvb2RUeXBlIiwiZW5lbXkiLCJDb3dzQWxnb3JpdGhtIiwiZGF0YSIsImdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiIsImNlbGxSYW5kb21Sb3dDb2wiLCJyYW5kb21JbnRlZ2VyIiwibGVuZ3RoIiwib2xkVW5pdCIsInVuaXRQYXJhbSIsImlkIiwiY2xhc3NOYW1lIiwib2JqUG9zaXRpb25Sb3ciLCJwb3NpdGlvblJvdyIsIm9ialBvc2l0aW9uQ29sIiwicG9zaXRpb25Db2wiLCJzZXRDZWxsIiwidXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwIiwic3ViSGVhbHRoIiwiZGllVW5pdFR5cGUiLCJkaWVVbml0SWQiLCJkaWVVbml0IiwiYWRkRGllVW5pdFRvRGllQXJyYXkiLCJoZWFsdGgiLCJhZGRIZWFsdGgiLCJEZWF0aEFsZ29yaXRobSIsImRlYXRoVW5pdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsIiwibmV3UG9zaXRpb24iLCJnZXROZXdSb3dDb2xQb3NpdGlvbiIsInJvdyIsImNvbCIsIm5ld1VuaXQiLCJkaWVPYmplY3RzT25NYXBJbmRleCIsImdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCIsImVudGl0eVBhcmFtIiwiYWRkVG9PYmplY3RzT25NYXAiLCJyZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcCIsIkdyYXNzQWxnb3JpdGhtIiwiR3JvdW5kQWxnb3JpdGhtIiwiY2FsY3VsYXRlIiwic3RlcHMiLCJjYWxsQmFja1VuaXRSb3V0ZSIsInJvdXRlRGF0YSIsInVuaXRSb3dDb2xTb3VyY2UiLCJyb3V0ZUNlbGxTdGVwcyIsInJvdXRlcyIsIkFycmF5IiwiaSIsImRpcmVjdGlvbiIsImRpcmVjdGlvbldheSIsIm5ld0RpcmVjdGlvbldheSIsImdldE5ld1Jvd0NvbENlbGwiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImNhbGN1bGF0ZVJvdXRlIiwicm91dGUiLCJjZWxsIiwid2F5Iiwic3RlcCIsImNhbGxCYWNrIiwiVGlnZXJzQWxnb3JpdGhtIiwiZm9vZEluZGV4IiwiZ2V0SW5kZXhGcm9tT2JqZWN0c09uTWFwIiwiZWF0ZW4iLCJyZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcCIsImlzRWF0ZW4iLCJmb29kSW5mb3JtYXRpb24iLCJzZXRJbmRleE9iamVjdCIsInJlc2V0RWF0ZW4iLCJEaWVVbml0IiwicGFyYW0iLCJhbGdvcml0bXMiLCJwcm90b3R5cGUiLCJhY3Rpb24iLCJhY3QiLCJ1cGRhdGVSb3dDb2wiLCJFbnRpdHkiLCJHYW1lIiwic2V0dGluZyIsImRldk1vZGUiLCJ0aW1lUmVuZGVyIiwiYnRuU3RhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnRuUGF1c2UiLCJzY2VuZSIsImJ1aWxkIiwiJCIsImxOb3RpZnkiLCJzZWxmIiwibG9vcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRJbnRlcnZhbCIsImNhbGxiYWNrIiwiaXNzZXRPYmplY3RPbk1hcCIsImRpZU1hbmFnZXIiLCJhY3Rpb25Pbk1hcCIsInJlbmRlciIsImdhbWVPdmVyIiwiY2xlYXJJbnRlcnZhbCIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZ2FtZSIsInJ1biIsIk1hcCIsIm1hcERhdGEiLCJtYXBPYmplY3RzIiwib2JqZWN0c09uTWFwIiwiZGllT2JqZWN0c09uTWFwIiwibWFwU2l6ZSIsIm9iaklEIiwib2JqZWN0TmFtZSIsIm9iak1pbiIsIm1pbiIsIm9iak1heCIsIm1heCIsIm9iakNvdW50T25NYXAiLCJtYXBSb3dDb2wiLCJnZXRSYW5kb21Sb3dDb2xDb29yZCIsInVuaXRTZXR0aW5nIiwidHJ5TmV3R2VuZXJhdGUiLCJvYmplY3RTZXR0aW5nIiwiY291bnQiLCJ1bmRlZmluZWQiLCJjb3VudFJvdyIsImNvdW50Q29sIiwiaXNzZXRSb3V0ZSIsInRyeVJvdXRlIiwibWluQ2VsbCIsIm1heENlbGwiLCJleGNsdWRlVmFsdWUiLCJ2YWx1ZSIsIm5ld1Bvc2l0aW9uUm93Q29sIiwic3BsaWNlIiwiY2VsbHMiLCJleGlzdCIsImNvbnRlbnQiLCJ1bml0UG9zaXRpb25Sb3ciLCJwYXJzZUludCIsInVuaXRQb3NpdGlvbkNvbCIsImJvcmRlciIsInRvcCIsInRvcFJpZ2h0IiwicmlnaHQiLCJyaWdodEJvdHRvbSIsImJvdHRvbSIsImxlZnRCb3R0b20iLCJsZWZ0IiwibGVmdFRvcCIsInVuaXRUeXBlIiwiYXJyIiwiU2NlbmUiLCJwbGFpbiIsImluaXQiLCJnZW5lcmF0ZSIsIm1hcEhUTUwiLCJnZXRDZWxsIiwic2hvdyIsImlubmVySFRNTCIsImdhbWVDb250YWluZXJJRCIsImdyYXNzIiwiY293cyIsInRpZ2VycyIsImdyb3VuZCIsIkdhbWVTb3VuZHMiLCJmaWxlIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiVW5pdCIsImdldEZvb2RUeXBlIiwiaXNFYXQiLCJzb3VuZEVhdCIsInNlbGVjdEFsZ29yaXRobSIsInVuaXRIZWFsdGgiLCJjbGFzc0hlYWx0aENvbG9yIiwiZ2V0Q2xhc3NIZWFsdGhDb2xvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsUztBQUNqQix5QkFBYztBQUFBOztBQUNWLGFBQUtDLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxhQUFLQyxj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LFdBQXJCLEdBQW1DLElBQW5DO0FBQ0EsaUJBQUtzRCxlQUFMLENBQXFCNUUsV0FBckIsR0FBbUMsSUFBbkM7QUFDSDs7O2tDQUVTK0ksSyxFQUFPO0FBQ2IsaUJBQUtqSCxNQUFMLElBQWV3SCxTQUFTUCxLQUFULENBQWY7QUFDSDs7O2tDQUVTQSxLLEVBQU87QUFDYixpQkFBS2pILE1BQUwsSUFBZXdILFNBQVNQLEtBQVQsQ0FBZjtBQUNIOzs7Ozs7QUFJTDs7O2tCQTNKcUIyQyxJIiwiZmlsZSI6ImNvd3NhbmR0aWdlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB0b29scyBmcm9tIFwiLi4vdG9vbHNcIjtcbmltcG9ydCByb3V0ZSBmcm9tIFwiLi9yb3V0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkZEhlYWx0aFZhbHVlID0gNTtcbiAgICAgICAgdGhpcy5zdWJIZWFsdGhWYWx1ZSA9IDM7XG4gICAgfVxuXG4gICAgZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kO1xuXG4gICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0YHQvtGB0LXQtNC90LjQuCDQutC70LXRgtC60LhcbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbCA9IG1hcC5jaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsKHVuaXQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDQtdC00YNcbiAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgKi9cbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kID0gbWFwLmZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdC5mb29kVHlwZSk7XG5cbiAgICAgICAgaWYgKHVuaXQuZW5lbXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFRPRE8g0YMg0YLQuNCz0YDQsCDQvdC10YIg0LLRgNCw0LPQvtCyXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINCy0YDQsNCz0L7QsijRgtC40LPRgNC+0LIpXG4gICAgICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzID0gbWFwLmZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdC5lbmVteSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0YHQstC+0LHQvtC00L3Ri9C1INGP0YfQtdC50LrQuCDQutGD0LTQsCDQvNC+0LbQvdC+INC/0LXRgNC10LzQtdGB0YLQuNGC0YzRgdGPXG4gICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICovXG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kID0gbWFwLmZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgXCJncm91bmRcIik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGw6IG5laWdoYm9yaW5nc0NlbGwsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2Q6IG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllczogbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQ6IG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICAgIH07XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vLi4vZW50aXR5JztcbmltcG9ydCBEaWVVbml0IGZyb20gJy4vLi4vZGllVW5pdCc7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi8uLi90b29scyc7XG5cbi8vIENPV1MgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvd3NBbGdvcml0aG0gIGV4dGVuZHMgQWxnb3JpdGhtIHtcblxuICAgIGFjdCAodW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGE6XG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQodC+0YHQtdC00L3QuNC80Lgg0LrQu9C10YLQutCw0LzQuCAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0YDQsNCy0L7QuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLQuNCz0YDQsNC80LggICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllc1xuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JfQtdC80LvRkdC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgICovXG5cbiAgICAgICAgLyppZiAodW5pdC5oZWFsdGggPiAwKSB7XG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0KLQuNCz0YDRi1xuICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvL9CV0YHQu9C4INC10YHRgtGMINGB0LLQvtCx0L7QtNC90YvQtSDQutC70LXRgtC60LhcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCR0LXQttC40Lwg0L7RgiDQotC40LPRgNCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUF3YXlGcm9tRW5lbXkobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8v0JXRgdC70Lgg0LXRgdGC0Ywg0YDRj9C00L7QvCDRgtGA0LDQstCwINC10LTQuNC8INC10LUg0Lgg0YPQsdC10LPQsNC10LxcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0YDRj9C00L7QvCDQtdC00LBcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcC5raWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCk7XG4gICAgICAgIH0qL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQkdC10LbQuNC8INC+0YIg0YLQuNCz0YDQsCArXG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUF3YXlGcm9tRW5lbXkgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LVcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vINCh0L7RhdGA0LDQvdC40Lwg0YHRgtCw0YDRi9C5IFVuaXQg0Lgg0LXQs9C+IFJDIChSb3cvQ29sKVxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sINC4INC30LDQv9C40YjQuNC8INCyINC90L7QstGD0Y4g0Y/Rh9C10LnQutGDINC60L7RgNC+0LLRg1xuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUm93L0NvbCDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCiLtC6INC80Ysg0YPQsdC10LPQsNC10Lwg0Lgg0L3QtSDQtdC00LjQvCDRgtGA0LDQstGDLCDQvtGC0L3QuNC80LjQvCDQvdC10LzQvdC+0LPQviDQt9C00L7RgNC+0LLRjNGPXG4gICAgICAgIHVuaXQuc3ViSGVhbHRoKHRoaXMuc3ViSGVhbHRoVmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQldC00LjQvCDRgtGA0LDQstGDXG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVUb0Zvb2QgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1INC10LTRi1xuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHt9O1xuXG4gICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0JTQvtCx0LDQstC40Lwg0LIg0LzQtdC90LXQtNC20LXRgCDRgdC80LXRgNGC0LXQuSDRgtGA0LDQstGDXG4gICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZGllVW5pdFR5cGU6IFwiZ3Jhc3NcIixcbiAgICAgICAgICAgIGRpZVVuaXRJZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICBtYXAuYWRkRGllVW5pdFRvRGllQXJyYXkoZGllVW5pdCk7XG5cbiAgICAgICAgLy8g0J/RgNC4INC/0L7Qs9C70LDRidC10L3QuNC4INGC0YDQsNCy0Ysg0L/RgNC40LHQsNCy0LjQvCDQttC40LfQvdC4LCDQvtCz0YDQsNC90LjRh9C40Lwg0LfQvdCw0YfQtdC90LjQtdC8IDEwMFxuICAgICAgICBpZiAodW5pdC5oZWFsdGggPCAxMDApIHtcblxuICAgICAgICAgICAgaWYgKHVuaXQuaGVhbHRoID4gOTApIHtcbiAgICAgICAgICAgICAgICB1bml0LmFkZEhlYWx0aCgxMDAgLSB1bml0LmhlYWx0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKHRoaXMuYWRkSGVhbHRoVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodCy0L7QsdC+0LTQvdC+0LUg0L/QtdGA0LXQvNC10YnQtdC90LjQtVxuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVGcmVlIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1bml0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQpO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1INGBINC30LXQvNC70LXQuVxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICB1bml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIvLyBERUFUSCBBTEdPUklUTVxuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgVW5pdCBmcm9tICcuLy4uL3VuaXQnO1xuXG5cbi8vIEdST1VORCBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVhdGhBbGdvcml0aG0ge1xuICAgIGFjdCAoZGVhdGhVbml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIGlmIChkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0IDwgZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsKSB7XG4gICAgICAgICAgICBkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0Kys7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IG1hcC5nZXROZXdSb3dDb2xQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdQb3NpdGlvblJvd0NvbCk7XG5cbiAgICAgICAgICAgIHZhciB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGRlYXRoVW5pdC5kaWVVbml0SWQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBkZWF0aFVuaXQuZGllVW5pdFR5cGUsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uLnJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogbmV3UG9zaXRpb24uY29sLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG5ld1VuaXQgPSBuZXcgVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgICAgICB2YXIgZGllT2JqZWN0c09uTWFwSW5kZXggPSBtYXAuZ2V0SW5kZXhGcm9tRGllT2JqZWN0c09uTWFwKGRlYXRoVW5pdCk7XG5cbiAgICAgICAgICAgIHZhciBlbnRpdHlQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IGRlYXRoVW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogZGVhdGhVbml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICAgICAgbWFwLnNldENlbGwoZGVhdGhVbml0LCBuZXcgRW50aXR5KGVudGl0eVBhcmFtKSk7XG5cbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKG5ld1VuaXQsIG5ld1VuaXQpO1xuXG4gICAgICAgICAgICBtYXAuYWRkVG9PYmplY3RzT25NYXAobmV3VW5pdCk7XG5cbiAgICAgICAgICAgIG1hcC5yZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcChkaWVPYmplY3RzT25NYXBJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuXG4vLyBHUkFTUyBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Jhc3NBbGdvcml0aG0gZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGFjdCAoKSB7fTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5cbi8vIEdST1VORCBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdW5kQWxnb3JpdGhtIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBhY3QgKCkge307XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCB0b29scyBmcm9tIFwiLi4vdG9vbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgY2FsY3VsYXRlIDogZnVuY3Rpb24gKG1hcCwgdW5pdCwgaW5kZXhPYmplY3QsIHN0ZXBzLCBjYWxsQmFja1VuaXRSb3V0ZSkge1xuXG4gICAgICAgIGxldCByb3V0ZURhdGEgPSBbXSxcbiAgICAgICAgICAgIHVuaXRSb3dDb2xTb3VyY2UsXG4gICAgICAgICAgICByb3V0ZUNlbGxTdGVwcyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcm91dGVzID0gbmV3IEFycmF5KHN0ZXBzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBbXG4gICAgICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICAgICAgJ3RvcFJpZ2h0JyxcbiAgICAgICAgICAgICAgICAncmlnaHQnLFxuICAgICAgICAgICAgICAgICdyaWdodEJvdHRvbScsXG4gICAgICAgICAgICAgICAgJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgJ2xlZnRCb3R0b20nLFxuICAgICAgICAgICAgICAgICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAnbGVmdFRvcCdcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uV2F5O1xuICAgICAgICAgICAgbGV0IG5ld0RpcmVjdGlvbldheTtcblxuICAgICAgICAgICAgLy8g0LLRi9Cx0LXRgNC40Lwg0L3QsNC/0YDQsNCy0LvQtdC90LjQtVxuICAgICAgICAgICAgZGlyZWN0aW9uV2F5ID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBkaXJlY3Rpb24ubGVuZ3RoKTtcblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIG5ld0RpcmVjdGlvbldheSA9IHRoaXMuZ2V0TmV3Um93Q29sQ2VsbChyb3V0ZUNlbGxTdGVwc1tpXSwgZGlyZWN0aW9uV2F5LCBpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKCFuZXdEaXJlY3Rpb25XYXkpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdEaXJlY3Rpb25XYXkpO1xuICAgICAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L3QvtCy0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDRj9GH0LXQudC60LhcbiAgICAgICAgICAgIHJvdXRlQ2VsbFN0ZXBzLnB1c2gobmV3RGlyZWN0aW9uV2F5KTtcblxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVSb3V0ZShyb3V0ZUNlbGxTdGVwc1tpXSwgZnVuY3Rpb24gKHJvdXRlKSB7XG5cbiAgICAgICAgICAgICAgICByb3V0ZXMucHVzaChyb3V0ZSk7XG5cbiAgICAgICAgICAgICAgICByb3V0ZURhdGEucHVzaChyb3V0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxCYWNrVW5pdFJvdXRlKHJvdXRlRGF0YSk7XG4gICAgfSxcblxuICAgIC8vINCf0L7Qu9GD0YfQuNC8INC90L7QstGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsCDQvtGB0L3QvtCy0LUg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0L3QsNC/0YDQsNCy0LvQtdC90LjRj1xuICAgIC8vINC/0YDQvtCy0LXRgNC40Lwg0L3QtSDQstGL0YjQu9C4INC30LAg0LPRgNCw0L3QuNGG0YtcbiAgICBnZXROZXdSb3dDb2xDZWxsOiBmdW5jdGlvbiAoY2VsbCwgd2F5LCBzdGVwKSB7XG4gICAgICAgIC8vIGNlbGwucG9zaXRpb25Sb3dcbiAgICAgICAgLy8gY2VsbC5wb3NpdGlvbkNvbFxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coY2VsbCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIGZ1bmN0aW9uIChjZWxsLCB3YXksIHN0ZXApIHtcbiAgICAgICAgLy8gICAgXG4gICAgICAgIC8vIH1cbiAgICB9LFxuXG4gICAgLy8g0J/RgNC+0YHRh9C40YLQsNC10Lwg0LzQsNGA0YjRgNGD0YIg0L3QsNCy0LXRgNC90L7QtSApKVxuICAgIGNhbGN1bGF0ZVJvdXRlOiBmdW5jdGlvbihzdGVwcywgY2FsbEJhY2spIHtcbiAgICAgICAgY2FsbEJhY2socm91dGUpO1xuICAgIH1cblxufSIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuLy4uL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vLi4vdG9vbHMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vcm91dGUnO1xuXG4vLyBUSUdFUlMgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2Vyc0FsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgYWN0ICh1bml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgUm91dGUuY2FsY3VsYXRlKG1hcCwgdW5pdCwgaW5kZXhPYmplY3QsIDQsIGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhOlxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JrQsNGA0YLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubWFwXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQodC+0YHQtdC00L3QuNC80Lgg0LrQu9C10YLQutCw0LzQuCAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0YDQsNCy0L7QuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLQuNCz0YDQsNC80LggICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllc1xuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JfQtdC80LvRkdC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgICovXG5cbiAgICAgICAvKiBpZiAodW5pdC5oZWFsdGggPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INC10LTQsFxuICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1hcC5raWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCk7XG4gICAgICAgIH0qL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQldC00LjQvCDQutC+0YDQvtCy0YNcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZVRvRm9vZCAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0LrQvtGA0L7QslxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCAtMSk7XG5cbiAgICAgICAgLy8g0K3RgtCwINGP0YfQtdC50LrQsCDRj9Cy0LvRj9C10YLRjNGB0Y8g0LrQvtGA0L7QstC+0LksINGCLtC1INCV0JTQntCZISEhXG4gICAgICAgIC8vIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXVxuICAgICAgICAvLyB1bml0LmVhdGVuKHRydWUsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40LwgaW5kZXgg0YHRitC10LTQtdC90L7QuSDQutC+0YDQvtCy0Ysg0LjQtyDQvNCw0YHRgdC40LLQsCBvYmplY3RzT25NYXBcbiAgICAgICAgbGV0IGZvb2RJbmRleCA9IG1hcC5nZXRJbmRleEZyb21PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdKTtcblxuICAgICAgICAvLyDQn9C+0LzQtdGC0LjQu9C4INGC0LjQs9GA0LAg0YfRgtC+INC+0L0g0YHRitC10Lsg0LrQvtGA0L7QstGDXG4gICAgICAgIHVuaXQuZWF0ZW4obmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBmb29kSW5kZXgpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YLQuNCz0YDQsCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQo9C00LDQu9C40Lwg0LrQvtGA0L7QstGDINC40Lcg0LjQs9GA0L7QstC+0LPQviDQvNCw0YHRgdC40LLQsFxuICAgICAgICBtYXAucmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoZm9vZEluZGV4KTtcblxuICAgICAgICBkZWxldGUgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdO1xuXG4gICAgICAgIC8vINCf0YDQuCDQv9C+0LPQu9Cw0YnQtdC90LjQuCDRgtGA0LDQstGLINC/0YDQuNCx0LDQstC40Lwg0LbQuNC30L3QuCwg0L7Qs9GA0LDQvdC40YfQuNC8INC30L3QsNGH0LXQvdC40LXQvCAxMDBcbiAgICAgICAgaWYgKHVuaXQuaGVhbHRoIDwgMTAwICkge1xuXG4gICAgICAgICAgICBpZiAodW5pdC5oZWFsdGggPiA5MCkge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKDEwMC11bml0LmhlYWx0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKHRoaXMuYWRkSGVhbHRoVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodCy0L7QsdC+0LTQvdC+0LUg0L/QtdGA0LXQvNC10YnQtdC90LjQtVxuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVGcmVlIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHt9O1xuXG4gICAgICAgIC8vIHVuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0XG5cbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDRg9Cx0LjQuyDQu9C4INC00LDQvdC90YvQuSDRgtC40LPRgCDRgtC+0LvRjNC60L4g0YfRgtC+INC60L7RgNC+0LLRgyxcbiAgICAgICAgLy8g0LXRgdC70Lgg0LTQsCwg0YLQviDQvdCwINGB0LvQtdC0LiDRiNCw0LPQtSDQv9C+0YHRgtCw0LLQuNC8INC90LAg0LXQs9C+INC80LXRgdGC0L4g0YLQsNCx0LvQuNGH0LrRg3VuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0XG4gICAgICAgIGlmICh1bml0LmlzRWF0ZW4oKSkge1xuXG4gICAgICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgICAgICBkaWVVbml0VHlwZTogdW5pdC5mb29kSW5mb3JtYXRpb24uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGRpZVVuaXRJZDogdW5pdC5mb29kSW5mb3JtYXRpb24uaWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICAgICAgZGllVW5pdC5zZXRJbmRleE9iamVjdCh1bml0LmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCk7XG5cbiAgICAgICAgICAgIG1hcC5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAgICAgbWFwLnNldENlbGwodW5pdCwgZGllVW5pdCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2xkVW5pdC5yZXNldEVhdGVuKCk7XG5cbiAgICAgICAgb2xkVW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0YEg0LfQtdC80LvQtdC5XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IERlYXRoQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2RlYXRoQWxnb3JpdGhtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGllVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuaW5kZXhPYmplY3QgPSBwYXJhbS5pbmRleE9iamVjdDtcblxuICAgICAgICB0aGlzLmFsZ29yaXRtcyA9IG5ldyBEZWF0aEFsZ29yaXRobSgpO1xuXG4gICAgICAgIHRoaXMuZGllVW5pdFR5cGUgPSBwYXJhbS5kaWVVbml0VHlwZTtcbiAgICAgICAgdGhpcy5kaWVVbml0SWQgPSBwYXJhbS5kaWVVbml0SWQ7XG5cbiAgICAgICAgdGhpcy51bml0UmVzdXJlY3Rpb25JbnRlcnZhbCA9IDM7XG4gICAgICAgIHRoaXMudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0ID0gMDtcblxuICAgICAgICAvLyB0aGlzLnNvdW5kRGllID0gbmV3IEdhbWVTb3VuZHMoXCJhdWRpby9kaWVfXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiLm1wM1wiKTtcbiAgICB9XG59XG5cbkRpZVVuaXQucHJvdG90eXBlLnNldEluZGV4T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5pbmRleE9iamVjdCA9IGluZGV4T2JqZWN0O1xufTtcblxuXG4vKipcbiAqINCg0LDQt9C90YvQtSDQtNC10LnRgdGC0LLQuNGPINC+0LHRitC10LrRgtCwXG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLmFjdGlvbiA9IGZ1bmN0aW9uIChtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5hbGdvcml0bXMuYWN0KHRoaXMsIG1hcCwgaW5kZXhPYmplY3QpO1xufTtcblxuXG4vKipcbiAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAqIEBwYXJhbSB1bml0XG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLnVwZGF0ZVJvd0NvbCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gICAgdGhpcy5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICB0aGlzLmlkID0gcGFyYW0uaWQ7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gcGFyYW0uY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gcGFyYW0ub2JqUG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMucG9zaXRpb25Db2wgPSBwYXJhbS5vYmpQb3NpdGlvbkNvbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqL1xuICAgIHVwZGF0ZVJvd0NvbCAodW5pdCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQktGL0LLQvtC0IEhUTUwg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNob3cgKCkge1xuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdiLXVuaXQgXCIrdGhpcy5jbGFzc05hbWUrXCInPjwvZGl2PlwiO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICAvKipcbiAgICAgKiBPQkogR0FNRVxuICAgICAqIEBwYXJhbSBzZXR0aW5nXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmcgPSBzZXR0aW5nO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjQvCDRgNC10LbQuNC8INC40LPRgNGLXG4gICAgICAgIHRoaXMuZGV2TW9kZSA9IHNldHRpbmcuZGV2TW9kZSB8fCBmYWxzZTtcblxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40Lwg0YHQutC+0YDQvtGB0YLRjCDQuNCz0YDQvtCy0L7Qs9C+INGG0LjQutC70LBcbiAgICAgICAgdGhpcy50aW1lUmVuZGVyID0gc2V0dGluZy50aW1lUmVuZGVyIHx8IDUwMDtcblxuICAgICAgICB0aGlzLmJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItYnV0dG9uc19fYnRuLXN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1idXR0b25zX19idG4tcGF1c2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHQU1FIExPT1BcbiAgICAgKi9cbiAgICBydW4gKCkge1xuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC90L7QstGD0Y4g0YHRhtC10L3Rg1xuICAgICAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUodGhpcy5zZXR0aW5nKTtcblxuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1INC90LAg0YHRhtC10L3QtVxuICAgICAgICBpZiAoc2NlbmUuYnVpbGQoKSkge1xuXG4gICAgICAgICAgICAkKCdib2R5JykubE5vdGlmeSgnYWRkJywn0JjQs9GA0LAg0LfQsNCz0YDRg9C20LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAkKCdib2R5JykubE5vdGlmeSgnYWRkJyxcItCd0LDQttC80LjRgtC1ICfQndCw0YfQsNGC0Ywg0LjQs9GA0YMnLlwiLCAnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgbG9vcDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRldk1vZGUpIHtcblxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQsiDQvtCx0YvRh9C90L7QvCDRgNC10LbQuNC80LUuJywgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC30LDQv9GD0YnQtdC90LAuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JPQu9Cw0LLQvdGL0LkgTG9vcFxuICAgICAgICAgICAgICAgICAgICBsb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUuaXNzZXRPYmplY3RPbk1hcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmFjdGlvbk9uTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCBzZWxmLnRpbWVSZW5kZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idG5QYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb29wKTtcblxuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykubE5vdGlmeSgnYWRkJywn0JjQs9GA0LAg0L7RgdGC0LDQvdC+0LLQu9C10L3QsC4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NlbmUuaXNzZXRPYmplY3RPbk1hcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQsiDRgNC10LbQuNC80LUg0YDQsNC30YDQsNCx0L7RgtGH0LjQutCwLicsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykubE5vdGlmeSgnYWRkJywn0JrQvtC90LXRhiDQuNCz0YDRiy4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIgKCkge1xuICAgICAgICBhbGVydCgnR2FtZSBPdmVyJyk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBzZXR0aW5nIGZyb20gXCIuL3NldHRpbmdcIjtcblxuLy8g0J/QvtGB0LvQtSDQt9Cw0LPRgNGD0LfQutC4INC00L7QutGD0LzQtdC90YLQsCDQt9Cw0L/Rg9GB0YLQuNC8INC40LPRgNGDXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5JykubE5vdGlmeSgpO1xuXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShzZXR0aW5nKTtcblxuICAgIGdhbWUucnVuKCk7XG59KTtcbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IFVuaXQgZnJvbSAnLi91bml0JztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuXG4vKipcbiAqINCa0LvQsNGB0YEg0YDQsNCx0L7RgtGLINGBINC60LDRgNGC0L7QuVxuICogQHBhcmFtIHNldHRpbmdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1hcERhdGEgPSBbXTtcblxuICAgICAgICAvLyDQntCx0YrQtdC60YLRiyDQtNC70Y8g0LrQsNGA0YLRi1xuICAgICAgICB0aGlzLm1hcE9iamVjdHMgPSBzZXR0aW5nLm1hcE9iamVjdHM7XG5cbiAgICAgICAgLy8g0KHQv9C40YHQvtC6INC+0LHRitC10LrRgtC+0LIsINC60L7RgtC+0YDRi9C1INC30LDQtNC10LnRgdGC0LLQvtCy0LDQvdC90Ysg0L3QsCDQutCw0YDRgtC1XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXAgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICB0aGlzLnJvdyA9IHNldHRpbmcubWFwU2l6ZS5yb3cgfHwgMDtcbiAgICAgICAgdGhpcy5jb2wgPSBzZXR0aW5nLm1hcFNpemUuY29sIHx8IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0YHRgtGA0L7QuNC8INC/0YPRgdGC0YPRjiDQutCw0YDRgtGDINC90LAg0L7RgdC90L7QstC1INC90LDRh9Cw0LvRjNC90YvRhSBSb3cvQ29sXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMubWFwRGF0YS5wdXNoKFtdKSA8IHRoaXMucm93KSA7XG5cbiAgICAgICAgaWYgKHRoaXMubWFwRGF0YS5sZW5ndGggPT0gdGhpcy5yb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JPQtdC90LXRgNCw0YbQuNGPINC60LDRgNGC0YtcbiAgICAgKi9cbiAgICBnZW5lcmF0ZSgpIHtcblxuICAgICAgICBsZXQgb2JqSUQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IG9iamVjdE5hbWUgaW4gdGhpcy5tYXBPYmplY3RzKSB7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdE5hbWUpO1xuICAgICAgICAgICAgbGV0IG9iak1pbiA9IHRoaXMubWFwT2JqZWN0c1tvYmplY3ROYW1lXS5taW47XG4gICAgICAgICAgICBsZXQgb2JqTWF4ID0gdGhpcy5tYXBPYmplY3RzW29iamVjdE5hbWVdLm1heDtcblxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0L7QsdGK0LXQutGCINGP0LLQu9GP0LXRgtGM0YHRjyDRgdGC0LDRgtC40LrQvtC5LFxuICAgICAgICAgICAgLy8g0YLQviDQv9C+0YHRgtCw0YDQtdC80YHRjyDQtNCw0YLRjCDQv9C+INC80LDQutGB0LjQvNGD0LzRgyDQt9C90LDRh9C10L3QuNGPIG1pbi9tYXhcbiAgICAgICAgICAgIC8vINC00LvRjyDQv9C+0LvQvdC+0LPQviDQt9Cw0L/QvtC70L3QtdC90LjRjyDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXG4gICAgICAgICAgICBpZiAob2JqTWluID09PSBudWxsICYmIG9iak1heCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9iak1pbiA9ICh0aGlzLnJvdyArIHRoaXMuY29sKSAqIDI7XG4gICAgICAgICAgICAgICAgb2JqTWF4ID0gKHRoaXMucm93ICsgdGhpcy5jb2wpICogMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQutC+0Lst0LLQviDQvtCx0YrQtdC60YLQvtCyINC90LAg0LrQsNGA0YLQtVxuICAgICAgICAgICAgbGV0IG9iakNvdW50T25NYXAgPSB0b29scy5yYW5kb21JbnRlZ2VyKG9iak1pbiwgb2JqTWF4KTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvYmplY3ROYW1lW29iakNvdW50T25NYXBdOiBcIiArIG9iamVjdE5hbWUgKyBcIiBcIiArIG9iakNvdW50T25NYXApO1xuXG4gICAgICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDRjdGC0L7QvNGDINC60L7Qu9C40YfQtdCy0YHRgtCy0YNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqQ291bnRPbk1hcDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgbWFwUm93Q29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xDb29yZCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21hcFJvd0NvbE5vcm1hbDogJywgbWFwUm93Q29sKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBtYXBSb3dDb2wucm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG1hcFJvd0NvbC5jb2xcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBFbnRpdHkodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgVW5pdCh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdID0gdW5pdDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0TmFtZSA9PSAnY293cycgfHwgb2JqZWN0TmFtZSA9PSAndGlnZXJzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb09iamVjdHNPbk1hcCh1bml0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0U2V0dGluZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaklEOiBvYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cnlOZXdHZW5lcmF0ZSh1bml0U2V0dGluZywgb2JqQ291bnRPbk1hcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvYmpJRCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtCy0YLQvtGA0L3QsNGPINCz0LXQvdC10YDQsNGG0LjRjywg0LIg0YHQu9GD0YfQuNC4INC30LDQvdGP0YLQvtCz0L4g0LzQtdGB0YLQsCDQsiDQvNCw0YHRgdC40LLQtVxuICAgICAqIEBwYXJhbSBvYmplY3RTZXR0aW5nXG4gICAgICogQHBhcmFtIGNvdW50XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgdHJ5TmV3R2VuZXJhdGUob2JqZWN0U2V0dGluZywgY291bnQpIHtcblxuICAgICAgICBpZiAoY291bnQgPD0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vINCf0YDQvtC50LTQtdC80YHRjyDQv9C+INGN0YLQvtC80YMg0LrQvtC70LjRh9C10LLRgdGC0LLRg1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblxuICAgICAgICAgICAgLy8g0YHQvtC30LTQsNC00LjQvCDQutC+0L7RgNC00LjQvdCw0YLRiyDQtNC70Y8g0L/RgNC+0YHRgtCw0LLQu9C10L3QuNGPXG4gICAgICAgICAgICBsZXQgbWFwUm93Q29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xDb29yZCgpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFwUm93Q29sUmVjdXJzaXZlOiAnLCBtYXBSb3dDb2wpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogb2JqZWN0U2V0dGluZy5vYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBtYXBSb3dDb2wucm93LFxuICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogbWFwUm93Q29sLmNvbFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsZXQgdW5pdDtcblxuICAgICAgICAgICAgICAgIGlmIChvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUgPT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IEVudGl0eSh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgVW5pdCh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09ICdjb3dzJyB8fCBvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb09iamVjdHNPbk1hcCh1bml0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdW5pdFNldHRpbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaklEOiBvYmplY3RTZXR0aW5nLm9iaklELFxuICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3RTZXR0aW5nLm9iamVjdE5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyeU5ld0dlbmVyYXRlKHVuaXRTZXR0aW5nLCBjb3VudCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9GM0L3Ri9C1INC60L7QvtGA0LTQuNC90LDRgtGLINC90LAg0L7RgdC90L7QstC1INC60L7Quy3QstC+INGB0YLRgNC+0Log0Lgg0LrQvtC70L7QvdC+0LpcbiAgICAgKiBAcmV0dXJucyB7e3JvdzogKiwgY29sOiAqfX1cbiAgICAgKi9cbiAgICBnZXRSYW5kb21Sb3dDb2xDb29yZCgpIHtcbiAgICAgICAgbGV0IGNvdW50Um93ID0gdGhpcy5yb3csXG4gICAgICAgICAgICBjb3VudENvbCA9IHRoaXMuY29sO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3c6IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgY291bnRSb3cpLFxuICAgICAgICAgICAgY29sOiB0b29scy5yYW5kb21JbnRlZ2VyKDAsIGNvdW50Q29sKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNoZWNrUm91dGUgKCkge1xuXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgdGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcblxuICAgIH1cbiAgICBcbiAgICBnZXRSYW5kb21Sb3dDb2xCYXNlZE9uVW5pdChjZWxsLCBzdGVwcykge1xuICAgICAgICBsZXQgaXNzZXRSb3V0ZSA9IHRoaXMudHJ5Um91dGUoc3RlcHMpO1xuXG5cblxuXG4gICAgICAgIC8vIGxldCByb3dNaW4gPSAoKGNlbGwucG9zaXRpb25Sb3cgLSAxKSA+PSAwKSA/IChjZWxsLnBvc2l0aW9uUm93IC0gMSkgOiAwO1xuICAgICAgICAvLyBsZXQgcm93TWF4ID0gKChjZWxsLnBvc2l0aW9uUm93ICsgMSkgPD0gdGhpcy5yb3cpID8gKGNlbGwucG9zaXRpb25Sb3cgKyAxKSA6IHRoaXMucm93O1xuXG4gICAgICAgIC8vIGxldCBjb2xNaW4gPSAoKGNlbGwucG9zaXRpb25Db2wgLSAxKSA+PSAwKSA/IChjZWxsLnBvc2l0aW9uUm93IC0gMSkgOiAwO1xuICAgICAgICAvLyBsZXQgY29sTWF4ID0gKChjZWxsLnBvc2l0aW9uQ29sICsgMSkgPD0gdGhpcy5jb2wpID8gKGNlbGwucG9zaXRpb25Db2wgKyAxKSA6IHRoaXMuY29sO1xuXG4gICAgICAgIC8vIGxldCBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgLy8gICAgIG5ld1Bvc2l0aW9uQ29sO1xuICAgICAgICAvL1xuICAgICAgICAvLyBuZXdQb3NpdGlvblJvdyA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUocm93TWluLCByb3dNYXgsIGNlbGwucG9zaXRpb25Sb3cpO1xuICAgICAgICAvLyBuZXdQb3NpdGlvbkNvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUoY29sTWluLCBjb2xNYXgsIGNlbGwucG9zaXRpb25Sb3cpO1xuXG4gICAgICAgIC8vIHJldHVybiB7XG4gICAgICAgIC8vICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgIC8vICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2xcbiAgICAgICAgLy8gfVxuICAgIH07XG5cbiAgICBnZXRSYW5kb21Sb3dDb2xXaXRoRXhjbHVkZShtaW5DZWxsLCBtYXhDZWxsLCBleGNsdWRlVmFsdWUpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIHZhbHVlID0gdG9vbHMucmFuZG9tSW50ZWdlcihtaW5DZWxsLCBtYXhDZWxsKTtcblxuICAgICAgICB3aGlsZSAodmFsdWUgPT0gZXhjbHVkZVZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvb2xzLnJhbmRvbUludGVnZXIobWluQ2VsbCwgbWF4Q2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuXG4gICAgZ2V0TmV3Um93Q29sUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvblJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGT1IgTkVXIFVOSVQgR0VORVJFVEUgTkVXIFBPU0lUSU9OOiBUUllbXCIgKyAoaSsrKSArIFwiXSAtPiBbUihcIiArIG5ld1Bvc2l0aW9uUm93Q29sLnJvdyArIFwiKTpDKFwiICsgbmV3UG9zaXRpb25Sb3dDb2wuY29sICsgXCIpXVwiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWFwRGF0YVtuZXdQb3NpdGlvblJvd0NvbC5yb3ddW25ld1Bvc2l0aW9uUm93Q29sLmNvbF0uY2xhc3NOYW1lID09PSBcImdyb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Bvc2l0aW9uUm93Q29sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0cnVlKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0LTQuNC8INGP0YfQtdC50LrRg1xuICAgICAqIEBwYXJhbSBvbGRVbml0XG4gICAgICogQHBhcmFtIG5ld1VuaXRcbiAgICAgKi9cbiAgICBzZXRDZWxsKG9sZFVuaXQsIG5ld1VuaXQpIHtcblxuICAgICAgICB0aGlzLm1hcERhdGFbb2xkVW5pdC5wb3NpdGlvblJvd11bb2xkVW5pdC5wb3NpdGlvbkNvbF0gPSBuZXdVbml0O1xuXG4gICAgICAgIHRoaXMubWFwRGF0YVtvbGRVbml0LnBvc2l0aW9uUm93XVtvbGRVbml0LnBvc2l0aW9uQ29sXS51cGRhdGVSb3dDb2wob2xkVW5pdCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0Y/Rh9C10LnQutGDXG4gICAgICogQHBhcmFtIHBvc2l0aW9uUm93XG4gICAgICogQHBhcmFtIHBvc2l0aW9uQ29sXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0Q2VsbChwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwRGF0YVtwb3NpdGlvblJvd11bcG9zaXRpb25Db2xdO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIGFkZFRvT2JqZWN0c09uTWFwKHVuaXQpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXAucHVzaCh1bml0KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvRj9C10YIgVW5pdCDQuNC3INC80LDRgdGB0LjQstCwIE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICovXG4gICAgcmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXAuc3BsaWNlKGluZGV4T2JqZWN0LCAxKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvRj9C10YIgVW5pdCDQuNC3INC80LDRgdGB0LjQstCwIERpZU9iamVjdHNPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINGB0LzQtdGA0YLQuCB1bml0c1xuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICovXG4gICAgcmVtb3ZlVW5pdEZyb21EaWVPYmplY3RzT25NYXAoaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXAuc3BsaWNlKGluZGV4T2JqZWN0LCAxKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQntCx0L3QvtCy0LjQvCDQtNC70Y8gVW5pdCDQtdCz0L4gUkMoUm93L0NvbCkg0LIg0LzQsNGB0YHQuNCy0LUgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICB1cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAodW5pdCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9C40Lwg0L7QsdGK0LXQutGCXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBraWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIHRoaXMucmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40Lwg0LzQvtCz0LjQu9C60YNcbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZGllVW5pdFR5cGU6IHVuaXQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgZGllVW5pdElkOiB1bml0LmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgIHRoaXMuc2V0Q2VsbCh1bml0LCBkaWVVbml0KTtcblxuICAgICAgICB0aGlzLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGllT2JqZWN0c09uTWFwKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINC70Lgg0LXRidC1INC+0LHRitC10LrRgtGLINCyINC80LDRgdGB0LjQstC1INC00LvRjyDRgdGD0YnQtdCy0YHRgtCy0L7QstCw0L3QuNGPINC40LPRgNGLXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBpc3NldE9iamVjdE9uTWFwKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMub2JqZWN0c09uTWFwLmxlbmd0aCA+IDAgPyAxIDogMCk7XG4gICAgfTtcblxuXG4vLyDQn9GA0L7QstC10YDQuNC8INGB0L7RgdC10LTQvdC40Lgg0LrQu9C10YLQutC4ICtcbiAgICBjaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsKHVuaXQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdW5pdC5jbGFzc05hbWUgPT0gJ3RpZ2VycydcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICB1bml0LmNsYXNzTmFtZSA9PSAnY293cydcbiAgICAgICAgKSB7XG5cbiAgICAgICAgICAgIGxldCBjZWxscyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd0b3BSaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodEJvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdEJvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnRUb3AnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uUm93ID0gcGFyc2VJbnQodW5pdC5wb3NpdGlvblJvdyk7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ29sID0gcGFyc2VJbnQodW5pdC5wb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICAvLyBsZXQgbWFwRGF0ZSA9IHRoaXMubWFwRGF0YTtcblxuICAgICAgICAgICAgLy8g0J3QtSDQt9Cw0LHRi9GC0Ywg0L/RgNC+INCz0YDQsNC90LjRhtGLINC60LDRgNGC0YtcbiAgICAgICAgICAgIGxldCBib3JkZXIgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHRvcFJpZ2h0OiB0aGlzLmNvbCxcbiAgICAgICAgICAgICAgICByaWdodDogdGhpcy5jb2wsXG4gICAgICAgICAgICAgICAgcmlnaHRCb3R0b206IHRoaXMuY29sLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5yb3csXG4gICAgICAgICAgICAgICAgbGVmdEJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGxlZnRUb3A6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXBEYXRlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUEw6XCIsIHVuaXRQb3NpdGlvblJvdywgdW5pdFBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgLy8gVE9QINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0LLQtdGA0YXRgyArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3ApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1swXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbMF0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgLSAxXVt1bml0UG9zaXRpb25Db2xdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFRPUF9SSUdIVCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstCy0LXRgNGF0YMt0LLQv9GA0LDQstC+ICtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uUm93IC0gMSkgPj0gYm9yZGVyLnRvcFxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCArIDEpIDwgYm9yZGVyLnRvcFJpZ2h0XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1sxXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbMV0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgLSAxXVt1bml0UG9zaXRpb25Db2wgKyAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBSSUdIVCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstC/0YDQsNCy0L4gK1xuICAgICAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci5yaWdodCkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzJdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1syXS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvd11bdW5pdFBvc2l0aW9uQ29sICsgMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gUklHSFRfQk9UVE9NINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0L/RgNCw0LLQvi3QstC90LjQt9GDICtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uUm93ICsgMSkgPCBib3JkZXIuYm90dG9tXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIucmlnaHRCb3R0b21cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzNdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1szXS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyArIDFdW3VuaXRQb3NpdGlvbkNvbCArIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIEJPVFRPTSDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDQstC90LjQt9GDICtcbiAgICAgICAgICAgIGlmICgodW5pdFBvc2l0aW9uUm93ICsgMSkgPCBib3JkZXIuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbNF0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzRdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93ICsgMV1bdW5pdFBvc2l0aW9uQ29sXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBMRUZUX0JPVFRPTSDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDRgdC70LXQstCwLdCy0L3QuNC30YMgK1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgKyAxKSA8IGJvcmRlci5ib3R0b21cbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgLSAxKSA+PSBib3JkZXIubGVmdEJvdHRvbVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbNV0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzVdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93ICsgMV1bdW5pdFBvc2l0aW9uQ29sIC0gMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTEVGVCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDRgdC70LXQstCwICtcbiAgICAgICAgICAgIGlmICgodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnQpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1s2XS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbNl0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3ddW3VuaXRQb3NpdGlvbkNvbCAtIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIExFRlRfVE9QINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINC70LXQstCwLdCy0LLQtdGA0YXRgyArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3BcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgLSAxKSA+PSBib3JkZXIubGVmdFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbN10uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzddLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93IC0gMV1bdW5pdFBvc2l0aW9uQ29sIC0gMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudW5pdCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjZWxscyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJPVzogXCIgKyB1bml0UG9zaXRpb25Sb3csIFwiQ09MOiBcIiArIHVuaXRQb3NpdGlvbkNvbCApO1xuXG4gICAgICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQntGC0YTQuNC70YzRgtGA0YPQtdC8INGP0YfQtdC50LrQuCDQv9C+INGC0LjQv9GDIHVuaXRUeXBlXG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxcbiAgICAgKiBAcGFyYW0gdW5pdFR5cGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCB1bml0VHlwZSkge1xuXG4gICAgICAgIGxldCBhcnIgPSBbXTtcblxuICAgICAgICAvLyDQn9C10YDQtdCx0LXRgNC10Lwg0L/QvtC70YPRh9C10L3QvdGL0Lkg0LzQsNGB0YHQuNCyINGBINGP0YfQtdC50LrQsNC80Lgg0L3QsNGF0L7QtNGP0YnQuNC80LjRgdGPINGA0Y/QtNC+0LxcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZWlnaGJvcmluZ3NDZWxsLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vINCv0YfQtdC50LrQsCDQvdC1INCy0YvRhdC+0LTQuNGCINC30LAg0LPRgNCw0L3QuNGG0YtcbiAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmV4aXN0KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5jb250ZW50LmNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudC5jbGFzc05hbWUgPT0gdW5pdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0LjQvdC00LXQutGBINC60L7RgNC+0LLRiyDQv9GA0Lgg0LXQtSDRgdGK0LXQtNCw0L3QuNC4XG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEluZGV4RnJvbU9iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLm9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Sb3cgPT0gdW5pdC5wb3NpdGlvblJvd1xuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uQ29sID09IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleE9iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuLy9NQVAgREVBVEggTUFOQUdFXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0LjQvdC00LXQutGBINC60L7RgNC+0LLRiyDQv9GA0Lgg0LXQtSDRgdGK0LXQtNCw0L3QuNC4XG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLmRpZU9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Sb3cgPT0gdW5pdC5wb3NpdGlvblJvd1xuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uQ29sID09IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleE9iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZERpZVVuaXRUb0RpZUFycmF5KHVuaXQpIHtcbiAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXAucHVzaCh1bml0KTtcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBNYXAgZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9zZXR0aW5nJztcblxuLyoqXG4gKiDQmNCz0YDQvtCy0LDRjyDRgdGG0LXQvdCwXG4gKiBAcGFyYW0gc2V0dGluZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWdhbWVfX3BsYWluJyk7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChzZXR0aW5nKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCf0YDQvtC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0LrQsNGA0YLRgyDQuCDQt9Cw0L/QvtC70L3QuNC8INC10LUg0L7QsdGK0LXQutGC0LDQvNC4XG4gICAgICovXG4gICAgYnVpbGQgKCkge1xuXG4gICAgICAgIGlmICh0aGlzLm1hcC5pbml0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZW5lcmF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7RgtGA0LjRgdC+0LLQutCwINC30LDQv9C+0LvQvdC10L3QvdC+0Lkg0LrQsNGA0YLRi1xuICAgICAqL1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGxldCBtYXBIVE1MID0gJyc7XG5cblxuICAgICAgICAvLyDQn9C+0YHRgtGA0L7QuNC8INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1XG4gICAgICAgIGZvciAobGV0IHBvc2l0aW9uUm93ID0gMDsgcG9zaXRpb25Sb3cgPCB0aGlzLm1hcC5yb3c7IHBvc2l0aW9uUm93KyspIHtcbiAgICAgICAgICAgIG1hcEhUTUwgKz0gXCI8ZGl2IGNsYXNzPSdyb3cnPlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgcG9zaXRpb25Db2wgPSAwOyBwb3NpdGlvbkNvbCA8IHRoaXMubWFwLmNvbDsgcG9zaXRpb25Db2wrKykge1xuICAgICAgICAgICAgICAgIG1hcEhUTUwgKz0gXCI8ZGl2IGNsYXNzPSdjZWxsJz4gXCIgKyB0aGlzLm1hcC5nZXRDZWxsKHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkuc2hvdygpICsgXCI8L2Rpdj5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcEhUTUwgKz0gXCI8L2Rpdj5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNC8INGB0L7QsdGA0LDQvdC90YPRjiBIVE1MINC60LDRgNGC0YMg0LIgRE9NXG4gICAgICAgIHRoaXMucGxhaW4uaW5uZXJIVE1MID0gbWFwSFRNTDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQlNC10LnRgdGC0LLQuNGPINCy0YHQtdGFINC+0LHRitC10LrRgtC+0LIg0L3QsCDQutCw0YDRgtC1XG4gICAgICovXG4gICAgYWN0aW9uT25NYXAgKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hcC5vYmplY3RzT25NYXApO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLm1hcC5vYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLmFjdGlvbih0aGlzLm1hcCwgaW5kZXhPYmplY3QpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRpZU1hbmFnZXIgKCkge1xuICAgICAgICBpZiAodGhpcy5tYXAuZGllT2JqZWN0c09uTWFwLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLm1hcC5kaWVPYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5hY3Rpb24odGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0LvQuCDQtdGJ0LUg0L7QsdGK0LXQutGC0Ysg0LIg0LzQsNGB0YHQuNCy0LUg0LTQu9GPINGB0YPRidC10LLRgdGC0LLQvtCy0LDQvdC40Y8g0LjQs9GA0YtcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGlzc2V0T2JqZWN0T25NYXAgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaXNzZXRPYmplY3RPbk1hcCgpO1xuICAgIH07XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJcbi8vIFBST0Rcbi8qZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVDb250YWluZXJJRDogJ2ItZ2FtZScsXG4gICAgbWFwU2l6ZToge1xuICAgICAgICByb3c6IDksXG4gICAgICAgIGNvbDogMjNcbiAgICB9LFxuICAgIG1hcE9iamVjdHM6IHtcbiAgICAgICAgZ3Jhc3M6IHtcbiAgICAgICAgICAgIG1pbjogOTAsXG4gICAgICAgICAgICBtYXg6IDE3NVxuICAgICAgICB9LFxuICAgICAgICBjb3dzOiB7XG4gICAgICAgICAgICBtaW46IDE1LFxuICAgICAgICAgICAgbWF4OiAyMFxuICAgICAgICB9LFxuICAgICAgICB0aWdlcnM6IHtcbiAgICAgICAgICAgIG1pbjogMyxcbiAgICAgICAgICAgIG1heDogNlxuICAgICAgICB9LFxuICAgICAgICBncm91bmQ6IHtcbiAgICAgICAgICAgIG1pbjogbnVsbCxcbiAgICAgICAgICAgIG1heDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkZXZNb2RlOiBmYWxzZSxcbiAgICB0aW1lUmVuZGVyOiA1MDBcbn07Ki9cblxuLy8gREVWXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZUNvbnRhaW5lcklEOiAnYi1nYW1lJyxcbiAgICBtYXBTaXplOiB7XG4gICAgICAgIHJvdzogNixcbiAgICAgICAgY29sOiA2XG4gICAgfSxcbiAgICBtYXBPYmplY3RzOiB7XG4gICAgICAgIGdyYXNzOiB7XG4gICAgICAgICAgICBtaW46IDcsXG4gICAgICAgICAgICBtYXg6IDEzXG4gICAgICAgIH0sXG4gICAgICAgIGNvd3M6IHtcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogNVxuICAgICAgICB9LFxuICAgICAgICB0aWdlcnM6IHtcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogNFxuICAgICAgICB9LFxuICAgICAgICBncm91bmQ6IHtcbiAgICAgICAgICAgIG1pbjogbnVsbCxcbiAgICAgICAgICAgIG1heDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkZXZNb2RlOiBmYWxzZSxcbiAgICB0aW1lUmVuZGVyOiAxNTMwXG59O1xuXG4iLCIvLyBBVURJTyBJTiBHQU1FXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU291bmRzIHtcbiAgICBjb25zdHJ1Y3RvcihmaWxlKSB7XG4gICAgICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oZmlsZSk7ICAgXG4gICAgfVxuXG4gICAgcGxheSAoKSB7XG4gICAgICAgIHRoaXMuc291bmQucGxheSgpO1xuICAgIH07XG5cbiAgICAvLyDQpNGD0L3QutGG0LjRjyBzdG9wINC00LvRjyBBdWRpbzpcbiAgICBzdG9wICgpIHtcbiAgICAgICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xuICAgICAgICB0aGlzLnNvdW5kLmN1cnJlbnRUaW1lID0gMC4wO1xuICAgIH07XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIvLyDQktGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdGL0LUg0YTRg9C90LrRhtC40Lgg0LTQu9GPINC40LPRgNGLXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNC+0YnRj9C10YIg0YHQu9GD0YfQsNC50L3QvtC1INGH0LjRgdC70L4g0LIg0LTQuNCw0L/QsNC30L7QvdC1IE1pbi9NYXhcbiAgICAgKiBAcGFyYW0gbWluXG4gICAgICogQHBhcmFtIG1heFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJhbmRvbUludGVnZXI6IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cbn07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCBHcmFzc0FsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS9ncmFzc0FsZ29yaXRobSc7XG5pbXBvcnQgQ293c0FsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS9jb3dzQWxnb3JpdGhtJztcbmltcG9ydCBUaWdlcnNBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vdGlnZXJzQWxnb3JpdGhtJztcbmltcG9ydCBHcm91bmRBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZ3JvdW5kQWxnb3JpdGhtJztcbmltcG9ydCBHYW1lU291bmRzIGZyb20gJy4vc291bmQnO1xuXG4vKipcbiAqINCe0YHQvdC+0LLQvdC+0Lkg0J/RgNC+0YLQvtGC0LjQvyDQvtCx0YrQtdC60YLQsCDQvdCwINC60LDRgNGC0LVcbiAqIEBwYXJhbSBjbGFzc05hbWVcbiAqIEBwYXJhbSBpZFxuICogQHBhcmFtIG9ialBvc2l0aW9uUm93XG4gKiBAcGFyYW0gb2JqUG9zaXRpb25Db2xcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml0IGV4dGVuZHMgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICBzdXBlcihwYXJhbSk7XG5cbiAgICAgICAgdGhpcy5mb29kVHlwZSA9IHRoaXMuZ2V0Rm9vZFR5cGUoKTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuZW5lbXkgPSAocGFyYW0uY2xhc3NOYW1lID09ICdjb3dzJyA/ICd0aWdlcnMnIDogbnVsbCk7XG5cbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24gPSB7XG4gICAgICAgICAgICBpc0VhdDogZmFsc2UsXG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBudWxsLFxuICAgICAgICAgICAgaW5kZXhPYmplY3Q6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNvdW5kRWF0ID0gbmV3IEdhbWVTb3VuZHMoXCJhdWRpby9lYXRfXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiLm1wM1wiKTtcblxuICAgICAgICAvLyDQktGL0LHQtdGA0LjQvCDQsNC70LPQvtGA0LjRgtC8INC/0L7QstC10LTQtdC90LjRjyDQtNC70Y8g0L7QsdGK0LXQutGC0LBcbiAgICAgICAgdGhpcy5hbGdvcml0bXMgPSB0aGlzLnNlbGVjdEFsZ29yaXRobShwYXJhbS5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLRi9Cy0L7QtCBIVE1MINC+0LHRitC10LrRgtCwXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzaG93KCkge1xuICAgICAgICBsZXQgdW5pdEhlYWx0aCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NOYW1lID09ICdjb3dzJyB8fCB0aGlzLmNsYXNzTmFtZSA9PSAndGlnZXJzJykge1xuICAgICAgICAgICAgbGV0IGNsYXNzSGVhbHRoQ29sb3IgPSB0aGlzLmdldENsYXNzSGVhbHRoQ29sb3IodGhpcy5oZWFsdGgpO1xuXG4gICAgICAgICAgICB1bml0SGVhbHRoICs9IFwiPGRpdiBjbGFzcz0nYi11bml0X19oZWFsdGgnPjxkaXYgY2xhc3M9J2ItaGVhbHRfX2luZGljYXRvciBcIiArIGNsYXNzSGVhbHRoQ29sb3IgKyBcIicgc3R5bGU9J3dpZHRoOiBcIiArIHRoaXMuaGVhbHRoICsgXCIlOyc+PC9kaXY+PC9kaXY+XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdiLXVuaXQgXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiJz5cIiArIHVuaXRIZWFsdGggKyBcIjwvZGl2PlwiO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGG0LLQtdGCKNC60LvQsNGB0YEpINC20LjQt9C90LggdW5pdFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2xhc3NIZWFsdGhDb2xvcih2YWx1ZSkge1xuXG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gOTAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtZ29vZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gNzUgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDkwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1hYm92ZS1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSA1MCAmJiBwYXJzZUludCh2YWx1ZSkgPD0gNzUpIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDI1ICYmIHBhcnNlSW50KHZhbHVlKSA8PSA1MCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYmVsb3ctYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gMCAmJiBwYXJzZUludCh2YWx1ZSkgPD0gMjUpIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWxvd1wiO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQoNCw0LfQvdGL0LUg0LTQtdC50YHRgtCy0LjRjyDQvtCx0YrQtdC60YLQsFxuICAgICAqL1xuICAgIGFjdGlvbihtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuYWxnb3JpdG1zLmFjdCh0aGlzLCBtYXAsIGluZGV4T2JqZWN0KTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRhtC10LvRjCDRgNCw0LTQuCDQutC+0YLQvtGA0L7QuSDQttC40LLQtdGCIFVuaXQgOilcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRGb29kVHlwZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY293cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdncmFzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aWdlcnMnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnY293cyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JLQtdGA0L3QtdGCINC00LvRjyDQvtCx0YrQtdC60YLQsCDQtdCz0L4g0LDQu9Cz0L7RgNC40YLQvCDQv9C+0LLQtdC00LXQvdC40Y8g0LIg0LjQs9GA0LVcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzZWxlY3RBbGdvcml0aG0oaWQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDAgLSBncmFzc1xuICAgICAgICAgKiAxIC0gY293c1xuICAgICAgICAgKiAyIC0gdGlnZXJzXG4gICAgICAgICAqIDMgLSBncm91bmRcbiAgICAgICAgICogNCAtIGRlYXRoXG4gICAgICAgICAqL1xuXG4gICAgICAgIHN3aXRjaCAocGFyc2VJbnQoaWQpKSB7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyYXNzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb3dzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUaWdlcnNBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VuZEFsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4vLyDQodGK0LXQtNC10L1cbiAgICBpc0VhdGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQ7XG4gICAgfTtcblxuLy8g0KHRitC10LTQtdC9XG4gICAgZWF0ZW4odW5pdCwgZm9vZEluZGV4KSB7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0ID0gZm9vZEluZGV4O1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5jbGFzc05hbWUgPSB1bml0LmNsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaWQgPSB1bml0LmlkO1xuICAgIH07XG5cbi8vIFJFU0VUINCh0YrQtdC00LXQvVxuICAgIHJlc2V0RWF0ZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvblJvdyA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3QgPSBudWxsO1xuICAgIH07XG5cbiAgICBhZGRIZWFsdGgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggKz0gcGFyc2VJbnQodmFsdWUpO1xuICAgIH07XG5cbiAgICBzdWJIZWFsdGgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gcGFyc2VJbnQodmFsdWUpO1xuICAgIH07XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIl0sInNvdXJjZVJvb3QiOiIifQ==