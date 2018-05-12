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

        if (this.DEBUG) {
            console.log(map.mapData);
            console.log(unit);
        }
        // console.log(unit);

        var neighboringsCellInformation = [];

        this.mapRow = map.row;
        this.mapCol = map.col;

        // получим инфо о четырех сторонах на дистанции полученной от Unit
        for (var step = 1; step < steps; step++) {
            if (this.DEBUG) {
                console.log('|- step: ' + step);
            }

            // console.log('|- step: ' + step);

            var neighboringsCell = this.getNeighboringsCell(step, unit, map);

            if (neighboringsCell.length > 0) {
                // Вот прям здесь получим
                neighboringsCellInformation.push(neighboringsCell);
            }
        }

        return neighboringsCellInformation;
    },

    // Получим инфо соседних ячеек на кадой иттерации
    getNeighboringsCell: function getNeighboringsCell(step, unit, map) {
        var neighboringsCellInfo = [];

        // if (this.DEBUG) {
        //     unit.positionRow = 0;
        //     unit.positionCol = 2;
        // }

        // координаты углов Unit
        // Получим координаты 4-х соторон на основе Unit
        var unitSides = this.getUnitAnglePoints(step, unit.positionRow, unit.positionCol);

        if (this.DEBUG) {
            console.log("|-- unitSides", unitSides);
        }

        // Нужно получить ячейки на основе найденых сторон!!!

        // Пройдемся по 4-ем сторонам и получим содержимое ячеек, задействуем массив с картой игры
        for (var side = 0; side < unitSides.length; side++) {

            if (unitSides[side].isset) {

                console.log('side', side);
                console.log('side_name', unitSides[side].name);

                if (this.DEBUG) {
                    console.log("|--- START side: " + unitSides[side].name);
                    console.log("|--- side: ", unitSides[side]);
                }

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
                        if (leftTop_TO_rightTop.length > 0) {
                            neighboringsCellInfo.push(leftTop_TO_rightTop);
                        }
                        break;
                    // rightTop_TO_rightBottom
                    case 1:
                        var rightTop_TO_rightBottom = this.getRighttSideNeighboringsCell(param);
                        if (rightTop_TO_rightBottom.length > 0) {
                            neighboringsCellInfo.push(rightTop_TO_rightBottom);
                        }
                        break;
                    // rightBottom_TO_leftBottom
                    case 2:
                        var rightBottom_TO_leftBottom = this.getBottomSideNeighboringsCell(param);
                        if (rightBottom_TO_leftBottom.length > 0) {
                            neighboringsCellInfo.push(rightBottom_TO_leftBottom);
                        }
                        break;

                    // leftBottom_TO_leftTop
                    case 3:
                        var leftBottom_TO_leftTop = this.getLeftSideNeighboringsCell(param);
                        if (leftBottom_TO_leftTop.length > 0) {
                            neighboringsCellInfo.push(leftBottom_TO_leftTop);
                        }
                        break;
                }

                if (this.DEBUG) {
                    console.log("|--- END side: " + unitSides[side].name);
                }
            }
        }
        return neighboringsCellInfo;
    },

    //    -----------------------------------------------------------------------------------------------

    getTopSideNeighboringsCell: function getTopSideNeighboringsCell(param) {
        var neighboringsCellInfo = [];

        var startCellRow = param.unitSide.angleStart.positionRow;
        var endCellCol = param.unitSide.angleEnd.positionCol;

        //mapCol
        for (var startCellCol = param.unitSide.angleStart.positionCol; startCellCol < endCellCol; startCellCol++) {

            if (startCellRow === param.unitPositionRow && startCellCol === param.unitPositionCol) {
                return;
            } else {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
        }

        return neighboringsCellInfo;
    },
    getRighttSideNeighboringsCell: function getRighttSideNeighboringsCell(param) {
        var neighboringsCellInfo = [];

        var startCellCol = param.unitSide.angleStart.positionCol;
        var endCellRow = param.unitSide.angleEnd.positionRow;

        // mapRow
        for (var startCellRow = param.unitSide.angleStart.positionRow; startCellRow < endCellRow; startCellRow++) {

            if (startCellRow === param.unitPositionRow && startCellCol === param.unitPositionCol) {
                return;
            } else {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
        }

        return neighboringsCellInfo;
    },
    getBottomSideNeighboringsCell: function getBottomSideNeighboringsCell(param) {
        var neighboringsCellInfo = [];

        var startCellRow = param.unitSide.angleStart.positionRow;
        var endCellCol = param.unitSide.angleEnd.positionCol;

        //mapCol
        for (var startCellCol = param.unitSide.angleStart.positionCol; startCellCol > endCellCol; startCellCol--) {

            if (startCellRow === param.unitPositionRow && startCellCol === param.unitPositionCol) {
                return;
            } else {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
        }

        return neighboringsCellInfo;
    },
    getLeftSideNeighboringsCell: function getLeftSideNeighboringsCell(param) {
        var neighboringsCellInfo = [];

        var startCellCol = param.unitSide.angleStart.positionCol;
        var endCellRow = param.unitSide.angleEnd.positionRow;

        // mapRow
        for (var startCellRow = param.unitSide.angleStart.positionRow; startCellRow > endCellRow; startCellRow--) {

            if (startCellRow === param.unitPositionRow && startCellCol === param.unitPositionCol) {
                return;
            } else {
                neighboringsCellInfo.push(param.map.getCell(startCellRow, startCellCol));
            }
        }

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
        if (this.DEBUG) {
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
        if (this.DEBUG) {
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
        if (this.DEBUG) {
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
        var newPosition = void 0;
        var newPositionRow = positionRow - step;
        var newPositionCol = positionCol - step;
        var angleIsset = true;

        if (newPositionRow < 0 || newPositionRow > this.mapRow - 1 || newPositionCol < 0 || newPositionCol > this.mapCol - 1 || (newPositionRow < 0 || newPositionRow > this.mapRow - 1) && (newPositionCol < 0 || newPositionCol > this.mapCol - 1)) {
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

        if (newPositionRow < 0 || newPositionRow > this.mapRow - 1 || newPositionCol < 0 || newPositionCol > this.mapCol - 1 || (newPositionRow < 0 || newPositionRow > this.mapRow - 1) && (newPositionCol < 0 || newPositionCol > this.mapCol - 1)) {
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

        if (newPositionRow < 0 || newPositionRow > this.mapRow - 1 || newPositionCol < 0 || newPositionCol > this.mapCol - 1 || (newPositionRow < 0 || newPositionRow > this.mapRow - 1) && (newPositionCol < 0 || newPositionCol > this.mapCol - 1)) {
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

        if (newPositionRow < 0 || newPositionRow > this.mapRow - 1 || newPositionCol < 0 || newPositionCol > this.mapCol - 1 || (newPositionRow < 0 || newPositionRow > this.mapRow - 1) && (newPositionCol < 0 || newPositionCol > this.mapCol - 1)) {
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

            if (this.DEBUG) {
                console.log(stp <= step);
            }

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

            console.log("NEIGHBORINGSCELLINFORMATION: ", neighboringsCellInformation);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vY293c0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL3JvdXRlLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi90b29scy5qcyIsIndlYnBhY2s6Ly8vLi91bml0LmpzIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsImFkZEhlYWx0aFZhbHVlIiwic3ViSGVhbHRoVmFsdWUiLCJ1bml0IiwibWFwIiwiaW5kZXhPYmplY3QiLCJuZWlnaGJvcmluZ3NDZWxsIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQiLCJjaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsIiwiZmlsdGVyQ2VsbEJ5VHlwZSIsImZvb2RUeXBlIiwiZW5lbXkiLCJDb3dzQWxnb3JpdGhtIiwiZGlzdGFuY2VWaWV3IiwiZGF0YSIsImdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiIsImNlbGxSYW5kb21Sb3dDb2wiLCJyYW5kb21JbnRlZ2VyIiwibGVuZ3RoIiwib2xkVW5pdCIsInVuaXRQYXJhbSIsImlkIiwiY2xhc3NOYW1lIiwib2JqUG9zaXRpb25Sb3ciLCJwb3NpdGlvblJvdyIsIm9ialBvc2l0aW9uQ29sIiwicG9zaXRpb25Db2wiLCJzZXRDZWxsIiwidXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwIiwic3ViSGVhbHRoIiwiZGllVW5pdFR5cGUiLCJkaWVVbml0SWQiLCJkaWVVbml0IiwiYWRkRGllVW5pdFRvRGllQXJyYXkiLCJoZWFsdGgiLCJhZGRIZWFsdGgiLCJEZWF0aEFsZ29yaXRobSIsImRlYXRoVW5pdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsIiwibmV3UG9zaXRpb24iLCJnZXROZXdSb3dDb2xQb3NpdGlvbiIsInJvdyIsImNvbCIsIm5ld1VuaXQiLCJkaWVPYmplY3RzT25NYXBJbmRleCIsImdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCIsImVudGl0eVBhcmFtIiwiYWRkVG9PYmplY3RzT25NYXAiLCJyZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcCIsIkdyYXNzQWxnb3JpdGhtIiwiR3JvdW5kQWxnb3JpdGhtIiwibWFwUm93IiwibWFwQ29sIiwiREVCVUciLCJnZXROZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJzdGVwcyIsImNhbGxCYWNrVW5pdFJvdXRlIiwiY29uc29sZSIsImxvZyIsIm1hcERhdGEiLCJuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJzdGVwIiwiZ2V0TmVpZ2hib3JpbmdzQ2VsbCIsInB1c2giLCJuZWlnaGJvcmluZ3NDZWxsSW5mbyIsInVuaXRTaWRlcyIsImdldFVuaXRBbmdsZVBvaW50cyIsInNpZGUiLCJpc3NldCIsIm5hbWUiLCJwYXJhbSIsInVuaXRTaWRlIiwidW5pdFBvc2l0aW9uUm93IiwidW5pdFBvc2l0aW9uQ29sIiwicGFyc2VJbnQiLCJsZWZ0VG9wX1RPX3JpZ2h0VG9wIiwiZ2V0VG9wU2lkZU5laWdoYm9yaW5nc0NlbGwiLCJyaWdodFRvcF9UT19yaWdodEJvdHRvbSIsImdldFJpZ2h0dFNpZGVOZWlnaGJvcmluZ3NDZWxsIiwicmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbSIsImdldEJvdHRvbVNpZGVOZWlnaGJvcmluZ3NDZWxsIiwibGVmdEJvdHRvbV9UT19sZWZ0VG9wIiwiZ2V0TGVmdFNpZGVOZWlnaGJvcmluZ3NDZWxsIiwic3RhcnRDZWxsUm93IiwiYW5nbGVTdGFydCIsImVuZENlbGxDb2wiLCJhbmdsZUVuZCIsInN0YXJ0Q2VsbENvbCIsImdldENlbGwiLCJlbmRDZWxsUm93IiwidW5pdEFuZ2xlcyIsImxlZnRUb3AiLCJyaWdodFRvcCIsInJpZ2h0Qm90dG9tIiwibGVmdEJvdHRvbSIsImdldExlZnRUb3BBbmdsZVBvaW50IiwidG9SaWdodFRvcCIsImdldFJpZ2h0VG9wQW5nbGVQb2ludCIsInRvUmlnaHRCb3R0b20iLCJnZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQiLCJ0b0xlZnRCb3R0b20iLCJnZXRMZWZ0Qm90dG9tQW5nbGVQb2ludCIsInRvTGVmdFRvcCIsIm5ld1Bvc2l0aW9uUm93IiwibmV3UG9zaXRpb25Db2wiLCJhbmdsZUlzc2V0IiwiZmluZE5ld0FuZ2VsIiwiaXNGaW5kIiwic3RwIiwibmV3QW5nZWwiLCJjaGVja05laWdoYm9yaW5nc0NlbGxCeURpcmVjdGlvbnMiLCJkaXJlY3Rpb25MZWZ0IiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25MZWZ0IiwiZGlyZWN0aW9uVG9wIiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25Ub3AiLCJkaXJlY3Rpb25SaWdodCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uUmlnaHQiLCJkaXJlY3Rpb25Cb3R0b20iLCJjaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbSIsInRyeU5ld1Bvc2l0aW9uQ29sIiwiZmluZCIsInRyeU5ld1Bvc2l0aW9uUm93IiwiVGlnZXJzQWxnb3JpdGhtIiwiZm9vZEluZGV4IiwiZ2V0SW5kZXhGcm9tT2JqZWN0c09uTWFwIiwiZWF0ZW4iLCJyZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcCIsImlzRWF0ZW4iLCJmb29kSW5mb3JtYXRpb24iLCJzZXRJbmRleE9iamVjdCIsInJlc2V0RWF0ZW4iLCJEaWVVbml0IiwiYWxnb3JpdG1zIiwicHJvdG90eXBlIiwiYWN0aW9uIiwiYWN0IiwidXBkYXRlUm93Q29sIiwiRW50aXR5IiwiR2FtZSIsInNldHRpbmciLCJkZXZNb2RlIiwidGltZVJlbmRlciIsImJ0blN0YXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ0blBhdXNlIiwic2NlbmUiLCJidWlsZCIsIiQiLCJsTm90aWZ5Iiwic2VsZiIsImxvb3AiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0SW50ZXJ2YWwiLCJjYWxsYmFjayIsImlzc2V0T2JqZWN0T25NYXAiLCJkaWVNYW5hZ2VyIiwiYWN0aW9uT25NYXAiLCJyZW5kZXIiLCJnYW1lT3ZlciIsImNsZWFySW50ZXJ2YWwiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImdhbWUiLCJydW4iLCJNYXAiLCJtYXBPYmplY3RzIiwib2JqZWN0c09uTWFwIiwiQXJyYXkiLCJkaWVPYmplY3RzT25NYXAiLCJtYXBTaXplIiwib2JqSUQiLCJvYmplY3ROYW1lIiwib2JqTWluIiwibWluIiwib2JqTWF4IiwibWF4Iiwib2JqQ291bnRPbk1hcCIsImkiLCJtYXBSb3dDb2wiLCJnZXRSYW5kb21Sb3dDb2xDb29yZCIsInVuaXRTZXR0aW5nIiwidHJ5TmV3R2VuZXJhdGUiLCJvYmplY3RTZXR0aW5nIiwiY291bnQiLCJ1bmRlZmluZWQiLCJjb3VudFJvdyIsImNvdW50Q29sIiwiY2VsbCIsImlzc2V0Um91dGUiLCJ0cnlSb3V0ZSIsIm1pbkNlbGwiLCJtYXhDZWxsIiwiZXhjbHVkZVZhbHVlIiwidmFsdWUiLCJuZXdQb3NpdGlvblJvd0NvbCIsInNwbGljZSIsImNlbGxzIiwiZGlyZWN0aW9uIiwiZXhpc3QiLCJjb250ZW50IiwiYm9yZGVyIiwidG9wIiwidG9wUmlnaHQiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ1bml0VHlwZSIsImFyciIsIlNjZW5lIiwicGxhaW4iLCJpbml0IiwiZ2VuZXJhdGUiLCJtYXBIVE1MIiwiY2VsbENvb3JkaW5hdGUiLCJzaG93IiwiaW5uZXJIVE1MIiwiZ2FtZUNvbnRhaW5lcklEIiwiZ3Jhc3MiLCJjb3dzIiwidGlnZXJzIiwiZ3JvdW5kIiwiR2FtZVNvdW5kcyIsImZpbGUiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJVbml0IiwiZ2V0Rm9vZFR5cGUiLCJpc0VhdCIsInNvdW5kRWF0Iiwic2VsZWN0QWxnb3JpdGhtIiwidW5pdEhlYWx0aCIsImNsYXNzSGVhbHRoQ29sb3IiLCJnZXRDbGFzc0hlYWx0aENvbG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxTO0FBQ2pCLHlCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBLGFBQUtDLGNB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QU8sS0FBSzRHLGVBQUwsQ0FBcUI0RyxLQUE1QjtBQUNIOzs7OztBQUVMOzhCQUNVNU8sSSxFQUFNMkgsUyxFQUFXO0FBQ25CLGlCQUFLSyxlQUFMLENBQXFCNEcsS0FBckIsR0FBNkIsSUFBN0I7QUFDQSxpQkFBSzVHLGVBQUwsQ0FBcUJ6RyxXQUFyQixHQUFtQ3ZCLEtBQUt1QixXQUF4QztBQUNBLGlCQUFLeUcsZUFBTCxDQUFxQnZHLFdBQXJCLEdBQW1DekIsS0FBS3lCLFdBQXhDO0FBQ0EsaUJBQUt1RyxlQUFMLENBQXFCOUgsV0FBckIsR0FBbUN5SCxTQUFuQztBQUNBLGlCQUFLSyxlQUFMLENBQXFCM0csU0FBckIsR0FBaUNyQixLQUFLcUIsU0FBdEM7QUFDQSxpQkFBSzJHLGVBQUwsQ0FBcUI1RyxFQUFyQixHQUEwQnBCLEtBQUtvQixFQUEvQjtBQUNIOzs7OztBQUVMO3FDQUNpQjtBQUNULG1CQUFPLEtBQUs0RyxlQUFMLENBQXFCNEcsS0FBckIsR0FBNkIsS0FBcEM7QUFDQSxpQkFBSzVHLGVBQUwsQ0FBcUJ6RyxXQUFyQixHQUFtQyxJQUFuQztBQUNBLGlCQUFLeUcsZUFBTCxDQUFxQnZHLFdBQXJCLEdBQW1DLElBQW5DO0FBQ0EsaUJBQUt1RyxlQUFMLENBQXFCOUgsV0FBckIsR0FBbUMsSUFBbkM7QUFDSDs7O2tDQUVTa00sSyxFQUFPO0FBQ2IsaUJBQUtuSyxNQUFMLElBQWV5QyxTQUFTMEgsS0FBVCxDQUFmO0FBQ0g7OztrQ0FFU0EsSyxFQUFPO0FBQ2IsaUJBQUtuSyxNQUFMLElBQWV5QyxTQUFTMEgsS0FBVCxDQUFmO0FBQ0g7Ozs7OztBQUlMOzs7a0JBM0pxQnNDLEkiLCJmaWxlIjoiY293c2FuZHRpZ2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHRvb2xzIGZyb20gXCIuLi90b29sc1wiO1xuaW1wb3J0IHJvdXRlIGZyb20gXCIuL3JvdXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWRkSGVhbHRoVmFsdWUgPSA1O1xuICAgICAgICB0aGlzLnN1YkhlYWx0aFZhbHVlID0gMztcbiAgICB9XG5cbiAgICBnZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQ7XG5cbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDRgdC+0YHQtdC00L3QuNC4INC60LvQtdGC0LrQuFxuICAgICAgICBuZWlnaGJvcmluZ3NDZWxsID0gbWFwLmNoZWNrVW5pdE5laWdoYm9yaW5nc0NlbGwodW5pdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINC10LTRg1xuICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAqL1xuICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QgPSBtYXAuZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCB1bml0LmZvb2RUeXBlKTtcblxuICAgICAgICBpZiAodW5pdC5lbmVteSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gVE9ETyDRgyDRgtC40LPRgNCwINC90LXRgiDQstGA0LDQs9C+0LJcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0LLRgNCw0LPQvtCyKNGC0LjQs9GA0L7QsilcbiAgICAgICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICAgICAqICovXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMgPSBtYXAuZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCB1bml0LmVuZW15KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDRgdCy0L7QsdC+0LTQvdGL0LUg0Y/Rh9C10LnQutC4INC60YPQtNCwINC80L7QttC90L4g0L/QtdGA0LXQvNC10YHRgtC40YLRjNGB0Y9cbiAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgKi9cbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQgPSBtYXAuZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCBcImdyb3VuZFwiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbDogbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZDogbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZDogbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi8uLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuLy4uL3Rvb2xzJztcblxuLy8gQ09XUyBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ293c0FsZ29yaXRobSAgZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyBDZWxsIERpc3RhbmNlXG4gICAgICAgIHRoaXMuZGlzdGFuY2VWaWV3ID0gMTtcbiAgICB9XG5cbiAgICBhY3QgKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhOlxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KHQvtGB0LXQtNC90LjQvNC4INC60LvQtdGC0LrQsNC80LggIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotGA0LDQstC+0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0LjQs9GA0LDQvNC4ICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXNcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCX0LXQvNC70ZHQuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qaWYgKHVuaXQuaGVhbHRoID4gMCkge1xuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INCi0LjQs9GA0YtcbiAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy/QldGB0LvQuCDQtdGB0YLRjCDRgdCy0L7QsdC+0LTQvdGL0LUg0LrQu9C10YLQutC4XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQkdC10LbQuNC8INC+0YIg0KLQuNCz0YDQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVBd2F5RnJvbUVuZW15KG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL9CV0YHQu9C4INC10YHRgtGMINGA0Y/QtNC+0Lwg0YLRgNCw0LLQsCDQtdC00LjQvCDQtdC1INC4INGD0LHQtdCz0LDQtdC8XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Gb29kKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0LXQtNCwXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Gb29kKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUZyZWUobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXAua2lsbFVuaXQodW5pdCwgaW5kZXhPYmplY3QpO1xuICAgICAgICB9Ki9cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JHQtdC20LjQvCDQvtGCINGC0LjQs9GA0LAgK1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVBd2F5RnJvbUVuZW15IChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICAvLyDQodC+0YXRgNCw0L3QuNC8INGB0YLQsNGA0YvQuSBVbml0INC4INC10LPQviBSQyAoUm93L0NvbClcbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbCDQuCDQt9Cw0L/QuNGI0LjQvCDQsiDQvdC+0LLRg9GOINGP0YfQtdC50LrRgyDQutC+0YDQvtCy0YNcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQoi7QuiDQvNGLINGD0LHQtdCz0LDQtdC8INC4INC90LUg0LXQtNC40Lwg0YLRgNCw0LLRgywg0L7RgtC90LjQvNC40Lwg0L3QtdC80L3QvtCz0L4g0LfQtNC+0YDQvtCy0YzRj1xuICAgICAgICB1bml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JXQtNC40Lwg0YLRgNCw0LLRg1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlVG9Gb29kIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDQtdC00YtcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggLSAxKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7fTtcblxuICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNC8INCyINC80LXQvdC10LTQttC10YAg0YHQvNC10YDRgtC10Lkg0YLRgNCw0LLRg1xuICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkZWF0aFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGRpZVVuaXRUeXBlOiBcImdyYXNzXCIsXG4gICAgICAgICAgICBkaWVVbml0SWQ6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZGllVW5pdCA9IG5ldyBEaWVVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgbWFwLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgIC8vINCf0YDQuCDQv9C+0LPQu9Cw0YnQtdC90LjQuCDRgtGA0LDQstGLINC/0YDQuNCx0LDQstC40Lwg0LbQuNC30L3QuCwg0L7Qs9GA0LDQvdC40YfQuNC8INC30L3QsNGH0LXQvdC40LXQvCAxMDBcbiAgICAgICAgaWYgKHVuaXQuaGVhbHRoIDwgMTAwKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0LmhlYWx0aCA+IDkwKSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgoMTAwIC0gdW5pdC5oZWFsdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bml0LmFkZEhlYWx0aCh0aGlzLmFkZEhlYWx0aFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHQstC+0LHQvtC00L3QvtC1INC/0LXRgNC10LzQtdGJ0LXQvdC40LVcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlRnJlZSAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codW5pdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDRgSDQt9C10LzQu9C10LlcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgdW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiLy8gREVBVEggQUxHT1JJVE1cbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IFVuaXQgZnJvbSAnLi8uLi91bml0JztcblxuXG4vLyBHUk9VTkQgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYXRoQWxnb3JpdGhtIHtcbiAgICBhY3QgKGRlYXRoVW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICBpZiAoZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCA8IGRlYXRoVW5pdC51bml0UmVzdXJlY3Rpb25JbnRlcnZhbCkge1xuICAgICAgICAgICAgZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCsrO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSBtYXAuZ2V0TmV3Um93Q29sUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3UG9zaXRpb25Sb3dDb2wpO1xuXG4gICAgICAgICAgICB2YXIgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiBkZWF0aFVuaXQuZGllVW5pdElkLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZGVhdGhVbml0LmRpZVVuaXRUeXBlLFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBuZXdQb3NpdGlvbi5yb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uLmNvbCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBuZXdVbml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICAgICAgdmFyIGRpZU9iamVjdHNPbk1hcEluZGV4ID0gbWFwLmdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcChkZWF0aFVuaXQpO1xuXG4gICAgICAgICAgICB2YXIgZW50aXR5UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBkZWF0aFVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IGRlYXRoVW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKGRlYXRoVW5pdCwgbmV3IEVudGl0eShlbnRpdHlQYXJhbSkpO1xuXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbChuZXdVbml0LCBuZXdVbml0KTtcblxuICAgICAgICAgICAgbWFwLmFkZFRvT2JqZWN0c09uTWFwKG5ld1VuaXQpO1xuXG4gICAgICAgICAgICBtYXAucmVtb3ZlVW5pdEZyb21EaWVPYmplY3RzT25NYXAoZGllT2JqZWN0c09uTWFwSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcblxuLy8gR1JBU1MgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXNzQWxnb3JpdGhtIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBhY3QgKCkge307XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuXG4vLyBHUk9VTkQgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZEFsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgYWN0ICgpIHt9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgdG9vbHMgZnJvbSBcIi4uL3Rvb2xzXCI7XG5cbi8vIFJvdXRlXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWFwUm93OiAwLFxuICAgIG1hcENvbDogMCxcbiAgICBERUJVRzogdHJ1ZSxcblxuICAgIGdldE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbjogZnVuY3Rpb24gKG1hcCwgdW5pdCwgaW5kZXhPYmplY3QsIHN0ZXBzLCBjYWxsQmFja1VuaXRSb3V0ZSkge1xuXG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYXAubWFwRGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1bml0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1bml0KTtcblxuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uID0gW107XG5cbiAgICAgICAgdGhpcy5tYXBSb3cgPSBtYXAucm93O1xuICAgICAgICB0aGlzLm1hcENvbCA9IG1hcC5jb2w7XG5cbiAgICAgICAgLy8g0L/QvtC70YPRh9C40Lwg0LjQvdGE0L4g0L4g0YfQtdGC0YvRgNC10YUg0YHRgtC+0YDQvtC90LDRhSDQvdCwINC00LjRgdGC0LDQvdGG0LjQuCDQv9C+0LvRg9GH0LXQvdC90L7QuSDQvtGCIFVuaXRcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPCBzdGVwczsgc3RlcCsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LSBzdGVwOiAnICsgc3RlcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd8LSBzdGVwOiAnICsgc3RlcCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsID0gdGhpcy5nZXROZWlnaGJvcmluZ3NDZWxsKHN0ZXAsIHVuaXQsIG1hcCk7XG5cbiAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyDQktC+0YIg0L/RgNGP0Lwg0LfQtNC10YHRjCDQv9C+0LvRg9GH0LjQvFxuICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbi5wdXNoKG5laWdoYm9yaW5nc0NlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbjtcbiAgICB9LFxuXG4gICAgLy8g0J/QvtC70YPRh9C40Lwg0LjQvdGE0L4g0YHQvtGB0LXQtNC90LjRhSDRj9GH0LXQtdC6INC90LAg0LrQsNC00L7QuSDQuNGC0YLQtdGA0LDRhtC40LhcbiAgICBnZXROZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAoc3RlcCwgdW5pdCwgbWFwKSB7XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mbyA9IFtdO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgIC8vICAgICB1bml0LnBvc2l0aW9uUm93ID0gMDtcbiAgICAgICAgLy8gICAgIHVuaXQucG9zaXRpb25Db2wgPSAyO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8g0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YPQs9C70L7QsiBVbml0XG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAgICBsZXQgdW5pdFNpZGVzID0gdGhpcy5nZXRVbml0QW5nbGVQb2ludHMoc3RlcCwgdW5pdC5wb3NpdGlvblJvdywgdW5pdC5wb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tIHVuaXRTaWRlc1wiLCB1bml0U2lkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0J3Rg9C20L3QviDQv9C+0LvRg9GH0LjRgtGMINGP0YfQtdC50LrQuCDQvdCwINC+0YHQvdC+0LLQtSDQvdCw0LnQtNC10L3Ri9GFINGB0YLQvtGA0L7QvSEhIVxuXG4gICAgICAgIC8vINCf0YDQvtC50LTQtdC80YHRjyDQv9C+IDQt0LXQvCDRgdGC0L7RgNC+0L3QsNC8INC4INC/0L7Qu9GD0YfQuNC8INGB0L7QtNC10YDQttC40LzQvtC1INGP0YfQtdC10LosINC30LDQtNC10LnRgdGC0LLRg9C10Lwg0LzQsNGB0YHQuNCyINGBINC60LDRgNGC0L7QuSDQuNCz0YDRi1xuICAgICAgICBmb3IgKGxldCBzaWRlID0gMDsgc2lkZSA8IHVuaXRTaWRlcy5sZW5ndGg7IHNpZGUrKykge1xuXG4gICAgICAgICAgICBpZiAodW5pdFNpZGVzW3NpZGVdLmlzc2V0KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2lkZScsIHNpZGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaWRlX25hbWUnLCB1bml0U2lkZXNbc2lkZV0ubmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gU1RBUlQgc2lkZTogXCIgKyB1bml0U2lkZXNbc2lkZV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tLSBzaWRlOiBcIiwgdW5pdFNpZGVzW3NpZGVdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXRTaWRlOiB1bml0U2lkZXNbc2lkZV0sXG4gICAgICAgICAgICAgICAgICAgIHVuaXRQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgdW5pdFBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtOiAnLCBwYXJhbSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHVuaXRTaWRlc1tzaWRlXS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdFRvcF9UT19yaWdodFRvcFxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdFRvcF9UT19yaWdodFRvcCA9IHRoaXMuZ2V0VG9wU2lkZU5laWdoYm9yaW5nc0NlbGwocGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnRUb3BfVE9fcmlnaHRUb3AubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gobGVmdFRvcF9UT19yaWdodFRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHRUb3BfVE9fcmlnaHRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHRUb3BfVE9fcmlnaHRCb3R0b20ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocmlnaHRUb3BfVE9fcmlnaHRCb3R0b20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20gPSB0aGlzLmdldEJvdHRvbVNpZGVOZWlnaGJvcmluZ3NDZWxsKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdEJvdHRvbV9UT19sZWZ0VG9wXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0Qm90dG9tX1RPX2xlZnRUb3AgPSB0aGlzLmdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdEJvdHRvbV9UT19sZWZ0VG9wLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKGxlZnRCb3R0b21fVE9fbGVmdFRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tLSBFTkQgc2lkZTogXCIgKyB1bml0U2lkZXNbc2lkZV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG5cbiAgICAvLyAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgZ2V0VG9wU2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcbiAgICAgICAgbGV0IGVuZENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvbkNvbDtcblxuICAgICAgICAvL21hcENvbFxuICAgICAgICBmb3IgKGxldCBzdGFydENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uQ29sOyBzdGFydENlbGxDb2wgPCBlbmRDZWxsQ29sOyBzdGFydENlbGxDb2wrKykge1xuXG4gICAgICAgICAgICBpZiAoKHN0YXJ0Q2VsbFJvdyA9PT0gcGFyYW0udW5pdFBvc2l0aW9uUm93ICYmIHN0YXJ0Q2VsbENvbCA9PT0gcGFyYW0udW5pdFBvc2l0aW9uQ29sKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcbiAgICBnZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mbyA9IFtdO1xuXG4gICAgICAgIGxldCBzdGFydENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uQ29sO1xuICAgICAgICBsZXQgZW5kQ2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlRW5kLnBvc2l0aW9uUm93O1xuXG4gICAgICAgIC8vIG1hcFJvd1xuICAgICAgICBmb3IgKGxldCBzdGFydENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uUm93OyBzdGFydENlbGxSb3cgPCBlbmRDZWxsUm93OyBzdGFydENlbGxSb3crKykge1xuXG4gICAgICAgICAgICBpZiAoKHN0YXJ0Q2VsbFJvdyA9PT0gcGFyYW0udW5pdFBvc2l0aW9uUm93ICYmIHN0YXJ0Q2VsbENvbCA9PT0gcGFyYW0udW5pdFBvc2l0aW9uQ29sKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0Qm90dG9tU2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcbiAgICAgICAgbGV0IGVuZENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvbkNvbDtcblxuICAgICAgICAvL21hcENvbFxuICAgICAgICBmb3IgKGxldCBzdGFydENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uQ29sOyBzdGFydENlbGxDb2wgPiBlbmRDZWxsQ29sOyBzdGFydENlbGxDb2wtLSkge1xuXG4gICAgICAgICAgICBpZiAoKHN0YXJ0Q2VsbFJvdyA9PT0gcGFyYW0udW5pdFBvc2l0aW9uUm93ICYmIHN0YXJ0Q2VsbENvbCA9PT0gcGFyYW0udW5pdFBvc2l0aW9uQ29sKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0TGVmdFNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG4gICAgICAgIGxldCBlbmRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgLy8gbWFwUm93XG4gICAgICAgIGZvciAobGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7IHN0YXJ0Q2VsbFJvdyA+IGVuZENlbGxSb3c7IHN0YXJ0Q2VsbFJvdy0tKSB7XG5cbiAgICAgICAgICAgIGlmICgoc3RhcnRDZWxsUm93ID09PSBwYXJhbS51bml0UG9zaXRpb25Sb3cgJiYgc3RhcnRDZWxsQ29sID09PSBwYXJhbS51bml0UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAqIEBwYXJhbSBzdGVwXG4gICAgICogQHBhcmFtIHBvc2l0aW9uUm93XG4gICAgICogQHBhcmFtIHBvc2l0aW9uQ29sXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldFVuaXRBbmdsZVBvaW50czogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdW5pdEFuZ2xlcyA9IFtdO1xuXG4gICAgICAgIGxldCBsZWZ0VG9wLFxuICAgICAgICAgICAgcmlnaHRUb3AsXG4gICAgICAgICAgICByaWdodEJvdHRvbSxcbiAgICAgICAgICAgIGxlZnRCb3R0b207XG5cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LSBnZXRVbml0QW5nbGVQb2ludHM6ICcsIHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgbGVmdFRvcFxuICAgICAgICBsZWZ0VG9wID0gdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbGVmdFRvcDogJywgbGVmdFRvcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnRUb3AuaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvUmlnaHRUb3AgPSB0aGlzLmdldFJpZ2h0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9SaWdodFRvcC5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRUb3AgPSB7cG9zaXRpb25Sb3c6IHRvUmlnaHRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b1JpZ2h0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodFRvcCA9IHtwb3NpdGlvblJvdzogbGVmdFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IGxlZnRUb3AucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bml0QW5nbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gbGVmdFRvcFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGVmdFRvcF9UT19yaWdodFRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogbGVmdFRvcC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBsZWZ0VG9wLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b1JpZ2h0VG9wLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogbGVmdFRvcC5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgcmlnaHRUb3BcbiAgICAgICAgcmlnaHRUb3AgPSB0aGlzLmdldFJpZ2h0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gcmlnaHRUb3A6ICcsIHJpZ2h0VG9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRUb3AuaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvUmlnaHRCb3R0b20gPSB0aGlzLmdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9SaWdodEJvdHRvbS5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHRvUmlnaHRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b1JpZ2h0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiByaWdodFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyByaWdodFRvcFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHJpZ2h0VG9wLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IHJpZ2h0VG9wLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b1JpZ2h0Qm90dG9tLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogcmlnaHRUb3AuaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIHJpZ2h0Qm90dG9tXG4gICAgICAgIHJpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIHJpZ2h0Qm90dG9tOiAnLCByaWdodEJvdHRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0Qm90dG9tLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b0xlZnRCb3R0b20gPSB0aGlzLmdldExlZnRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b0xlZnRCb3R0b20uaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHRvTGVmdEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvTGVmdEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvTGVmdEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiByaWdodEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyByaWdodEJvdHRvbVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogcmlnaHRCb3R0b20ucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvTGVmdEJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IHJpZ2h0Qm90dG9tLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdFVCBsZWZ0Qm90dG9tXG4gICAgICAgIGxlZnRCb3R0b20gPSB0aGlzLmdldExlZnRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBsZWZ0Qm90dG9tOiAnLCBsZWZ0Qm90dG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdEJvdHRvbS5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9MZWZ0VG9wID0gdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9MZWZ0VG9wLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0VG9wID0ge3Bvc2l0aW9uUm93OiB0b0xlZnRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b0xlZnRUb3AucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRUb3AgPSB7cG9zaXRpb25Sb3c6IGxlZnRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiBsZWZ0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIGxlZnRCb3R0b21cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxlZnRCb3R0b21fVE9fbGVmdFRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogbGVmdEJvdHRvbS5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBsZWZ0Qm90dG9tLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b0xlZnRUb3AsXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiBsZWZ0Qm90dG9tLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bml0QW5nbGVzO1xuICAgIH0sXG5cbiAgICBnZXRMZWZ0VG9wQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb247XG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdyA9IHBvc2l0aW9uUm93IC0gc3RlcDtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uQ29sID0gcG9zaXRpb25Db2wgLSBzdGVwO1xuICAgICAgICBsZXQgYW5nbGVJc3NldCA9IHRydWU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKChuZXdQb3NpdGlvblJvdyA8IDApIHx8IChuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sIDwgMCkgfHwgKG5ld1Bvc2l0aW9uQ29sID4gKHRoaXMubWFwQ29sIC0gMSkpKVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93IDwgMCkgfHwgKG5ld1Bvc2l0aW9uUm93ID4gKHRoaXMubWFwUm93IC0gMSkpKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKChuZXdQb3NpdGlvbkNvbCA8IDApIHx8IChuZXdQb3NpdGlvbkNvbCA+ICh0aGlzLm1hcENvbCAtIDEpKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbmV3UG9zaXRpb246ICcsIG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb24ucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbi5wb3NpdGlvbkNvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGVJc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzc2V0OiBhbmdsZUlzc2V0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFJpZ2h0VG9wQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyAtIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sICsgc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChuZXdQb3NpdGlvblJvdyA8IDAgfHwgbmV3UG9zaXRpb25Sb3cgPiAodGhpcy5tYXBSb3cgLSAxKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAobmV3UG9zaXRpb25Db2wgPCAwIHx8IG5ld1Bvc2l0aW9uQ29sID4gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIChuZXdQb3NpdGlvblJvdyA8IDAgfHwgbmV3UG9zaXRpb25Sb3cgPiAodGhpcy5tYXBSb3cgLSAxKSlcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIChuZXdQb3NpdGlvbkNvbCA8IDAgfHwgbmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0UmlnaHRCb3R0b21BbmdsZVBvaW50OiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdyA9IHBvc2l0aW9uUm93ICsgc3RlcDtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uQ29sID0gcG9zaXRpb25Db2wgKyBzdGVwO1xuICAgICAgICBsZXQgYW5nbGVJc3NldCA9IHRydWU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKG5ld1Bvc2l0aW9uUm93IDwgMCB8fCBuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIChuZXdQb3NpdGlvbkNvbCA8IDAgfHwgbmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKG5ld1Bvc2l0aW9uUm93IDwgMCB8fCBuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKG5ld1Bvc2l0aW9uQ29sIDwgMCB8fCBuZXdQb3NpdGlvbkNvbCA+ICh0aGlzLm1hcENvbCAtIDEpKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRMZWZ0Qm90dG9tQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyArIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sIC0gc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChuZXdQb3NpdGlvblJvdyA8IDAgfHwgbmV3UG9zaXRpb25Sb3cgPiAodGhpcy5tYXBSb3cgLSAxKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAobmV3UG9zaXRpb25Db2wgPCAwIHx8IG5ld1Bvc2l0aW9uQ29sID4gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIChuZXdQb3NpdGlvblJvdyA8IDAgfHwgbmV3UG9zaXRpb25Sb3cgPiAodGhpcy5tYXBSb3cgLSAxKSlcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIChuZXdQb3NpdGlvbkNvbCA8IDAgfHwgbmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyDQn9C+0L/RgNC+0LHRg9C10Lwg0L3QsNC50YLQuCDQvdC+0LLRg9GOINGP0YfQtdC50LrRgyDQv9GA0LjQsdCw0LLQuNCyINC30L3QsNGH0LXQvdC40LUg0YjQsNCz0LBcbiAgICBmaW5kTmV3QW5nZWw6IGZ1bmN0aW9uIChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0L/QviDRiNCw0LPQsNC8INCyIDQt0YUg0L3QsNC/0YDQsNCy0LvQtdC90LjRj9GFINC4INC/0L7RgdC80L7RgtGA0LjQvCwg0L/QvtC/0LDQtNCw0LXQvCDQu9C4INCyINC/0YDQtdC00LXQu9GLINC60LDRgNGC0YtcbiAgICAgICAgZm9yIChsZXQgc3RwID0gMTsgc3RwIDw9IHN0ZXA7IHN0cCsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHN0cCA8PSBzdGVwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBuZXdBbmdlbCA9IHRoaXMuY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBuZXdBbmdlbDogJywgbmV3QW5nZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld0FuZ2VsLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBbmdlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0ZpbmQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrTmVpZ2hib3JpbmdzQ2VsbEJ5RGlyZWN0aW9uczogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25MZWZ0ID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvbkxlZnQoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uTGVmdC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25MZWZ0OiB0cnVlO1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25MZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkxlZnQ6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25Ub3AgPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvblRvcC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Ub3A6IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvblRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Ub3A6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25SaWdodCA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25SaWdodChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25SaWdodC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25SaWdodDogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uUmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uUmlnaHQ6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25Cb3R0b20gPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uQm90dG9tKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbkJvdHRvbS5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Cb3R0b206IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbkJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Cb3R0b206IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uQ29sIC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93ID49IDApICYmIChuZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApICYmICh0cnlOZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblRvcDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93IC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sID49IDApICYmIChuZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0OiBmdW5jdGlvbiAoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZmluZCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeU5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb25Db2wgKyBzdHA7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93ID49IDApICYmIChuZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApICYmICh0cnlOZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbTogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93ICsgc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sID49IDApICYmIChuZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfVxufSIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuLy4uL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vLi4vdG9vbHMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vcm91dGUnO1xuXG4vLyBUSUdFUlMgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2Vyc0FsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8g0KDQsNC00LjRg9GBINGP0YfQtdC10Log0LIg0YfQtdGC0YvRgNC1INGB0YLQvtGA0L7QvdGLLCDRg9Cy0LXQu9C40YfQtdC9INC90LAg0L7QtNC90YMsINC10YHQu9C4IDQg0YLQviAzXG4gICAgICAgIHRoaXMuZGlzdGFuY2VWaWV3ID0gNDtcbiAgICB9XG5cbiAgICBhY3QgKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgLy8g0JLQvtC+0LfQstGA0LDRgtC40YLRjCDQvtCx0YrQtdC60YIg0YEg0YHQvtGB0LXQtNC90LjQvNC4INGP0YfQtdC50LrQsNC80LhcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiA9IFJvdXRlLmdldE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbihtYXAsIHVuaXQsIGluZGV4T2JqZWN0LCB0aGlzLmRpc3RhbmNlVmlldyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJORUlHSEJPUklOR1NDRUxMSU5GT1JNQVRJT046IFwiLCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24pO1xuXG4gICAgICAgIC8vIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGE6XG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQmtCw0YDRgtC+0LkgICAgICAgICAgICAgIC0gZGF0YS5tYXBcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCh0L7RgdC10LTQvdC40LzQuCDQutC70LXRgtC60LDQvNC4ICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLRgNCw0LLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotC40LPRgNCw0LzQuCAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQl9C10LzQu9GR0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICAgKi9cblxuICAgICAgIC8qIGlmICh1bml0LmhlYWx0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0LXQtNCwXG4gICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGcmVlKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWFwLmtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfSovXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCV0LTQuNC8INC60L7RgNC+0LLRg1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlVG9Gb29kIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDQutC+0YDQvtCyXG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoIC0xKTtcblxuICAgICAgICAvLyDQrdGC0LAg0Y/Rh9C10LnQutCwINGP0LLQu9GP0LXRgtGM0YHRjyDQutC+0YDQvtCy0L7QuSwg0YIu0LUg0JXQlNCe0JkhISFcbiAgICAgICAgLy8gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdXG4gICAgICAgIC8vIHVuaXQuZWF0ZW4odHJ1ZSwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCBpbmRleCDRgdGK0LXQtNC10L3QvtC5INC60L7RgNC+0LLRiyDQuNC3INC80LDRgdGB0LjQstCwIG9iamVjdHNPbk1hcFxuICAgICAgICBsZXQgZm9vZEluZGV4ID0gbWFwLmdldEluZGV4RnJvbU9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0pO1xuXG4gICAgICAgIC8vINCf0L7QvNC10YLQuNC70Lgg0YLQuNCz0YDQsCDRh9GC0L4g0L7QvSDRgdGK0LXQuyDQutC+0YDQvtCy0YNcbiAgICAgICAgdW5pdC5lYXRlbihuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGZvb2RJbmRleCk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgtC40LPRgNCwINC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCj0LTQsNC70LjQvCDQutC+0YDQvtCy0YMg0LjQtyDQuNCz0YDQvtCy0L7Qs9C+INC80LDRgdGB0LjQstCwXG4gICAgICAgIG1hcC5yZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChmb29kSW5kZXgpO1xuXG4gICAgICAgIGRlbGV0ZSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF07XG5cbiAgICAgICAgLy8g0J/RgNC4INC/0L7Qs9C70LDRidC10L3QuNC4INGC0YDQsNCy0Ysg0L/RgNC40LHQsNCy0LjQvCDQttC40LfQvdC4LCDQvtCz0YDQsNC90LjRh9C40Lwg0LfQvdCw0YfQtdC90LjQtdC8IDEwMFxuICAgICAgICBpZiAodW5pdC5oZWFsdGggPCAxMDAgKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0LmhlYWx0aCA+IDkwKSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgoMTAwLXVuaXQuaGVhbHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgodGhpcy5hZGRIZWFsdGhWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LLQvtCx0L7QtNC90L7QtSDQv9C10YDQtdC80LXRidC10L3QuNC1XG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUZyZWUgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge307XG5cbiAgICAgICAgLy8gdW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3RcblxuICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INGD0LHQuNC7INC70Lgg0LTQsNC90L3Ri9C5INGC0LjQs9GAINGC0L7Qu9GM0LrQviDRh9GC0L4g0LrQvtGA0L7QstGDLFxuICAgICAgICAvLyDQtdGB0LvQuCDQtNCwLCDRgtC+INC90LAg0YHQu9C10LQuINGI0LDQs9C1INC/0L7RgdGC0LDQstC40Lwg0L3QsCDQtdCz0L4g0LzQtdGB0YLQviDRgtCw0LHQu9C40YfQutGDdW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3RcbiAgICAgICAgaWYgKHVuaXQuaXNFYXRlbigpKSB7XG5cbiAgICAgICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgICAgIGRpZVVuaXRUeXBlOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgZGllVW5pdElkOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5pZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgICAgICBkaWVVbml0LnNldEluZGV4T2JqZWN0KHVuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0KTtcblxuICAgICAgICAgICAgbWFwLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBkaWVVbml0KTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRVbml0LnJlc2V0RWF0ZW4oKTtcblxuICAgICAgICBvbGRVbml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDRgSDQt9C10LzQu9C10LlcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgRGVhdGhBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWVVbml0IGV4dGVuZHMgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICBzdXBlcihwYXJhbSk7XG5cbiAgICAgICAgdGhpcy5pbmRleE9iamVjdCA9IHBhcmFtLmluZGV4T2JqZWN0O1xuXG4gICAgICAgIHRoaXMuYWxnb3JpdG1zID0gbmV3IERlYXRoQWxnb3JpdGhtKCk7XG5cbiAgICAgICAgdGhpcy5kaWVVbml0VHlwZSA9IHBhcmFtLmRpZVVuaXRUeXBlO1xuICAgICAgICB0aGlzLmRpZVVuaXRJZCA9IHBhcmFtLmRpZVVuaXRJZDtcblxuICAgICAgICB0aGlzLnVuaXRSZXN1cmVjdGlvbkludGVydmFsID0gMztcbiAgICAgICAgdGhpcy51bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQgPSAwO1xuXG4gICAgICAgIC8vIHRoaXMuc291bmREaWUgPSBuZXcgR2FtZVNvdW5kcyhcImF1ZGlvL2RpZV9cIiArIHRoaXMuY2xhc3NOYW1lICsgXCIubXAzXCIpO1xuICAgIH1cbn1cblxuRGllVW5pdC5wcm90b3R5cGUuc2V0SW5kZXhPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXhPYmplY3QpIHtcbiAgICB0aGlzLmluZGV4T2JqZWN0ID0gaW5kZXhPYmplY3Q7XG59O1xuXG5cbi8qKlxuICog0KDQsNC30L3Ri9C1INC00LXQudGB0YLQstC40Y8g0L7QsdGK0LXQutGC0LBcbiAqL1xuRGllVW5pdC5wcm90b3R5cGUuYWN0aW9uID0gZnVuY3Rpb24gKG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICB0aGlzLmFsZ29yaXRtcy5hY3QodGhpcywgbWFwLCBpbmRleE9iamVjdCk7XG59O1xuXG5cbi8qKlxuICog0J7QsdC90L7QstC40LwgUm93L0NvbCDQvtCx0YrQtdC60YLQsFxuICogQHBhcmFtIHVuaXRcbiAqL1xuRGllVW5pdC5wcm90b3R5cGUudXBkYXRlUm93Q29sID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgICB0aGlzLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICB0aGlzLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbn07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbS5pZDtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBwYXJhbS5jbGFzc05hbWU7XG4gICAgICAgIHRoaXMucG9zaXRpb25Sb3cgPSBwYXJhbS5vYmpQb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbCA9IHBhcmFtLm9ialBvc2l0aW9uQ29sO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J7QsdC90L7QstC40LwgUm93L0NvbCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICovXG4gICAgdXBkYXRlUm93Q29sICh1bml0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCS0YvQstC+0LQgSFRNTCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J2ItdW5pdCBcIit0aGlzLmNsYXNzTmFtZStcIic+PC9kaXY+XCI7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY2VuZSBmcm9tICcuL3NjZW5lJztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIC8qKlxuICAgICAqIE9CSiBHQU1FXG4gICAgICogQHBhcmFtIHNldHRpbmdcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZyA9IHNldHRpbmc7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8g0KPRgdGC0LDQvdC+0LLQuNC8INGA0LXQttC40Lwg0LjQs9GA0YtcbiAgICAgICAgdGhpcy5kZXZNb2RlID0gc2V0dGluZy5kZXZNb2RlIHx8IGZhbHNlO1xuXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjQvCDRgdC60L7RgNC+0YHRgtGMINC40LPRgNC+0LLQvtCz0L4g0YbQuNC60LvQsFxuICAgICAgICB0aGlzLnRpbWVSZW5kZXIgPSBzZXR0aW5nLnRpbWVSZW5kZXIgfHwgNTAwO1xuXG4gICAgICAgIHRoaXMuYnRuU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1idXR0b25zX19idG4tc3RhcnQnKTtcbiAgICAgICAgdGhpcy5idG5QYXVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWJ1dHRvbnNfX2J0bi1wYXVzZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdBTUUgTE9PUFxuICAgICAqL1xuICAgIHJ1biAoKSB7XG4gICAgICAgIC8vINCh0L7Qt9C00LDQtNC40Lwg0L3QvtCy0YPRjiDRgdGG0LXQvdGDXG4gICAgICAgIGxldCBzY2VuZSA9IG5ldyBTY2VuZSh0aGlzLnNldHRpbmcpO1xuXG4gICAgICAgIC8vINCh0L7Qt9C00LDQtNC40Lwg0LjQs9GA0L7QstC+0LUg0L/QvtC70LUg0L3QsCDRgdGG0LXQvdC1XG4gICAgICAgIGlmIChzY2VuZS5idWlsZCgpKSB7XG5cbiAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJywn0JjQs9GA0LAg0LfQsNCz0YDRg9C20LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsXCLQndCw0LbQvNC40YLQtSAn0J3QsNGH0LDRgtGMINC40LPRgNGDJy5cIiwgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IGxvb3A7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kZXZNb2RlKSB7XG5cbiAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINCyINC+0LHRi9GH0L3QvtC8INGA0LXQttC40LzQtS4nLCAnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC30LDQv9GD0YnQtdC90LAuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JPQu9Cw0LLQvdGL0LkgTG9vcFxuICAgICAgICAgICAgICAgICAgICBsb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUuaXNzZXRPYmplY3RPbk1hcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmFjdGlvbk9uTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCBzZWxmLnRpbWVSZW5kZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idG5QYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb29wKTtcblxuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC+0YHRgtCw0L3QvtCy0LvQtdC90LAuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lLmlzc2V0T2JqZWN0T25NYXAoKSkge1xuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINCyINGA0LXQttC40LzQtSDRgNCw0LfRgNCw0LHQvtGC0YfQuNC60LAuJywgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgICAgICAgICBzY2VuZS5kaWVNYW5hZ2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmFjdGlvbk9uTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJywn0JrQvtC90LXRhiDQuNCz0YDRiy4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIgKCkge1xuICAgICAgICBhbGVydCgnR2FtZSBPdmVyJyk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBzZXR0aW5nIGZyb20gXCIuL3NldHRpbmdcIjtcblxuLy8g0J/QvtGB0LvQtSDQt9Cw0LPRgNGD0LfQutC4INC00L7QutGD0LzQtdC90YLQsCDQt9Cw0L/Rg9GB0YLQuNC8INC40LPRgNGDXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkLmxOb3RpZnkoKTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoc2V0dGluZyk7XG5cbiAgICBnYW1lLnJ1bigpO1xufSk7XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCBVbml0IGZyb20gJy4vdW5pdCc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuL3Rvb2xzJztcblxuLyoqXG4gKiDQmtC70LDRgdGBINGA0LDQsdC+0YLRiyDRgSDQutCw0YDRgtC+0LlcbiAqIEBwYXJhbSBzZXR0aW5nXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gW107XG5cbiAgICAgICAgLy8g0J7QsdGK0LXQutGC0Ysg0LTQu9GPINC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzID0gc2V0dGluZy5tYXBPYmplY3RzO1xuXG4gICAgICAgIC8vINCh0L/QuNGB0L7QuiDQvtCx0YrQtdC60YLQvtCyLCDQutC+0YLQvtGA0YvQtSDQt9Cw0LTQtdC50YHRgtCy0L7QstCw0L3QvdGLINC90LAg0LrQsNGA0YLQtVxuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5yb3cgPSBzZXR0aW5nLm1hcFNpemUucm93IHx8IDA7XG4gICAgICAgIHRoaXMuY29sID0gc2V0dGluZy5tYXBTaXplLmNvbCB8fCAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J/QvtGB0YLRgNC+0LjQvCDQv9GD0YHRgtGD0Y4g0LrQsNGA0YLRgyDQvdCwINC+0YHQvdC+0LLQtSDQvdCw0YfQsNC70YzQvdGL0YUgUm93L0NvbFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hcERhdGEucHVzaChbXSkgPCB0aGlzLnJvdykgO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcERhdGEubGVuZ3RoID09IHRoaXMucm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCT0LXQvdC10YDQsNGG0LjRjyDQutCw0YDRgtGLXG4gICAgICovXG4gICAgZ2VuZXJhdGUoKSB7XG5cbiAgICAgICAgbGV0IG9iaklEID0gMDtcblxuICAgICAgICBmb3IgKGxldCBvYmplY3ROYW1lIGluIHRoaXMubWFwT2JqZWN0cykge1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3ROYW1lKTtcbiAgICAgICAgICAgIGxldCBvYmpNaW4gPSB0aGlzLm1hcE9iamVjdHNbb2JqZWN0TmFtZV0ubWluO1xuICAgICAgICAgICAgbGV0IG9iak1heCA9IHRoaXMubWFwT2JqZWN0c1tvYmplY3ROYW1lXS5tYXg7XG5cbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC+0LHRitC10LrRgiDRj9Cy0LvRj9C10YLRjNGB0Y8g0YHRgtCw0YLQuNC60L7QuSxcbiAgICAgICAgICAgIC8vINGC0L4g0L/QvtGB0YLQsNGA0LXQvNGB0Y8g0LTQsNGC0Ywg0L/QviDQvNCw0LrRgdC40LzRg9C80YMg0LfQvdCw0YfQtdC90LjRjyBtaW4vbWF4XG4gICAgICAgICAgICAvLyDQtNC70Y8g0L/QvtC70L3QvtCz0L4g0LfQsNC/0L7Qu9C90LXQvdC40Y8g0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuICAgICAgICAgICAgaWYgKG9iak1pbiA9PT0gbnVsbCAmJiBvYmpNYXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvYmpNaW4gPSAodGhpcy5yb3cgKyB0aGlzLmNvbCkgKiAyO1xuICAgICAgICAgICAgICAgIG9iak1heCA9ICh0aGlzLnJvdyArIHRoaXMuY29sKSAqIDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0LrQvtC7LdCy0L4g0L7QsdGK0LXQutGC0L7QsiDQvdCwINC60LDRgNGC0LVcbiAgICAgICAgICAgIGxldCBvYmpDb3VudE9uTWFwID0gdG9vbHMucmFuZG9tSW50ZWdlcihvYmpNaW4sIG9iak1heCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqZWN0TmFtZVtvYmpDb3VudE9uTWFwXTogXCIgKyBvYmplY3ROYW1lICsgXCIgXCIgKyBvYmpDb3VudE9uTWFwKTtcblxuICAgICAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0Y3RgtC+0LzRgyDQutC+0LvQuNGH0LXQstGB0YLQstGDXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakNvdW50T25NYXA7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IG1hcFJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXBSb3dDb2xOb3JtYWw6ICcsIG1hcFJvd0NvbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbWFwUm93Q29sLnJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBtYXBSb3dDb2wuY29sXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgRW50aXR5KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT0gJ2Nvd3MnIHx8IG9iamVjdE5hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9PYmplY3RzT25NYXAodW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdFNldHRpbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpJRDogb2JqSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJ5TmV3R2VuZXJhdGUodW5pdFNldHRpbmcsIG9iakNvdW50T25NYXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JqSUQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7QstGC0L7RgNC90LDRjyDQs9C10L3QtdGA0LDRhtC40Y8sINCyINGB0LvRg9GH0LjQuCDQt9Cw0L3Rj9GC0L7Qs9C+INC80LXRgdGC0LAg0LIg0LzQsNGB0YHQuNCy0LVcbiAgICAgKiBAcGFyYW0gb2JqZWN0U2V0dGluZ1xuICAgICAqIEBwYXJhbSBjb3VudFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHRyeU5ld0dlbmVyYXRlKG9iamVjdFNldHRpbmcsIGNvdW50KSB7XG5cbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDRjdGC0L7QvNGDINC60L7Qu9C40YfQtdCy0YHRgtCy0YNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vINGB0L7Qt9C00LDQtNC40Lwg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LTQu9GPINC/0YDQvtGB0YLQsNCy0LvQtdC90LjRj1xuICAgICAgICAgICAgbGV0IG1hcFJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21hcFJvd0NvbFJlY3Vyc2l2ZTogJywgbWFwUm93Q29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG9iamVjdFNldHRpbmcub2JqSUQsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbWFwUm93Q29sLnJvdyxcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG1hcFJvd0NvbC5jb2xcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbGV0IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBFbnRpdHkodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPSB1bml0O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSAnY293cycgfHwgb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9PYmplY3RzT25NYXAodW5pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRTZXR0aW5nID0ge1xuICAgICAgICAgICAgICAgICAgICBvYmpJRDogb2JqZWN0U2V0dGluZy5vYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cnlOZXdHZW5lcmF0ZSh1bml0U2V0dGluZywgY291bnQgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvRjNC90YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCwINC+0YHQvdC+0LLQtSDQutC+0Lst0LLQviDRgdGC0YDQvtC6INC4INC60L7Qu9C+0L3QvtC6XG4gICAgICogQHJldHVybnMge3tyb3c6ICosIGNvbDogKn19XG4gICAgICovXG4gICAgZ2V0UmFuZG9tUm93Q29sQ29vcmQoKSB7XG4gICAgICAgIGxldCBjb3VudFJvdyA9IHRoaXMucm93LFxuICAgICAgICAgICAgY291bnRDb2wgPSB0aGlzLmNvbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93OiB0b29scy5yYW5kb21JbnRlZ2VyKDAsIGNvdW50Um93KSxcbiAgICAgICAgICAgIGNvbDogdG9vbHMucmFuZG9tSW50ZWdlcigwLCBjb3VudENvbClcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjaGVja1JvdXRlICgpIHtcblxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICB9XG4gICAgXG4gICAgZ2V0UmFuZG9tUm93Q29sQmFzZWRPblVuaXQoY2VsbCwgc3RlcHMpIHtcbiAgICAgICAgbGV0IGlzc2V0Um91dGUgPSB0aGlzLnRyeVJvdXRlKHN0ZXBzKTtcblxuXG5cblxuICAgICAgICAvLyBsZXQgcm93TWluID0gKChjZWxsLnBvc2l0aW9uUm93IC0gMSkgPj0gMCkgPyAoY2VsbC5wb3NpdGlvblJvdyAtIDEpIDogMDtcbiAgICAgICAgLy8gbGV0IHJvd01heCA9ICgoY2VsbC5wb3NpdGlvblJvdyArIDEpIDw9IHRoaXMucm93KSA/IChjZWxsLnBvc2l0aW9uUm93ICsgMSkgOiB0aGlzLnJvdztcblxuICAgICAgICAvLyBsZXQgY29sTWluID0gKChjZWxsLnBvc2l0aW9uQ29sIC0gMSkgPj0gMCkgPyAoY2VsbC5wb3NpdGlvblJvdyAtIDEpIDogMDtcbiAgICAgICAgLy8gbGV0IGNvbE1heCA9ICgoY2VsbC5wb3NpdGlvbkNvbCArIDEpIDw9IHRoaXMuY29sKSA/IChjZWxsLnBvc2l0aW9uQ29sICsgMSkgOiB0aGlzLmNvbDtcblxuICAgICAgICAvLyBsZXQgbmV3UG9zaXRpb25Sb3csXG4gICAgICAgIC8vICAgICBuZXdQb3NpdGlvbkNvbDtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gbmV3UG9zaXRpb25Sb3cgPSB0aGlzLmdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKHJvd01pbiwgcm93TWF4LCBjZWxsLnBvc2l0aW9uUm93KTtcbiAgICAgICAgLy8gbmV3UG9zaXRpb25Db2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKGNvbE1pbiwgY29sTWF4LCBjZWxsLnBvc2l0aW9uUm93KTtcblxuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAvLyAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sXG4gICAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUobWluQ2VsbCwgbWF4Q2VsbCwgZXhjbHVkZVZhbHVlKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICB2YWx1ZSA9IHRvb2xzLnJhbmRvbUludGVnZXIobWluQ2VsbCwgbWF4Q2VsbCk7XG5cbiAgICAgICAgd2hpbGUgKHZhbHVlID09IGV4Y2x1ZGVWYWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b29scy5yYW5kb21JbnRlZ2VyKG1pbkNlbGwsIG1heENlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cblxuICAgIGdldE5ld1Jvd0NvbFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRk9SIE5FVyBVTklUIEdFTkVSRVRFIE5FVyBQT1NJVElPTjogVFJZW1wiICsgKGkrKykgKyBcIl0gLT4gW1IoXCIgKyBuZXdQb3NpdGlvblJvd0NvbC5yb3cgKyBcIik6QyhcIiArIG5ld1Bvc2l0aW9uUm93Q29sLmNvbCArIFwiKV1cIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1hcERhdGFbbmV3UG9zaXRpb25Sb3dDb2wucm93XVtuZXdQb3NpdGlvblJvd0NvbC5jb2xdLmNsYXNzTmFtZSA9PT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQb3NpdGlvblJvd0NvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNC00LjQvCDRj9GH0LXQudC60YNcbiAgICAgKiBAcGFyYW0gb2xkVW5pdFxuICAgICAqIEBwYXJhbSBuZXdVbml0XG4gICAgICovXG4gICAgc2V0Q2VsbChvbGRVbml0LCBuZXdVbml0KSB7XG5cbiAgICAgICAgdGhpcy5tYXBEYXRhW29sZFVuaXQucG9zaXRpb25Sb3ddW29sZFVuaXQucG9zaXRpb25Db2xdID0gbmV3VW5pdDtcblxuICAgICAgICB0aGlzLm1hcERhdGFbb2xkVW5pdC5wb3NpdGlvblJvd11bb2xkVW5pdC5wb3NpdGlvbkNvbF0udXBkYXRlUm93Q29sKG9sZFVuaXQpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGP0YfQtdC50LrRg1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblJvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbkNvbFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldENlbGwocG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcERhdGFbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sXTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICBhZGRUb09iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwLnB1c2godW5pdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIHJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwLnNwbGljZShpbmRleE9iamVjdCwgMSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBEaWVPYmplY3RzT25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDRgdC80LXRgNGC0LggdW5pdHNcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIHJlbW92ZVVuaXRGcm9tRGllT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwLnNwbGljZShpbmRleE9iamVjdCwgMSk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7QsdC90L7QstC40Lwg0LTQu9GPIFVuaXQg0LXQs9C+IFJDKFJvdy9Db2wpINCyINC80LDRgdGB0LjQstC1IE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgdXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKHVuaXQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvQuNC8INC+0LHRitC10LrRglxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAga2lsbFVuaXQodW5pdCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICB0aGlzLnJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8INC80L7Qs9C40LvQutGDXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkZWF0aFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGRpZVVuaXRUeXBlOiB1bml0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGRpZVVuaXRJZDogdW5pdC5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICB0aGlzLnNldENlbGwodW5pdCwgZGllVW5pdCk7XG5cbiAgICAgICAgdGhpcy5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRpZU9iamVjdHNPbk1hcCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDQu9C4INC10YnQtSDQvtCx0YrQtdC60YLRiyDQsiDQvNCw0YHRgdC40LLQtSDQtNC70Y8g0YHRg9GJ0LXQstGB0YLQstC+0LLQsNC90LjRjyDQuNCz0YDRi1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgaXNzZXRPYmplY3RPbk1hcCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm9iamVjdHNPbk1hcC5sZW5ndGggPiAwID8gMSA6IDApO1xuICAgIH07XG5cblxuLy8g0J/RgNC+0LLQtdGA0LjQvCDRgdC+0YHQtdC00L3QuNC4INC60LvQtdGC0LrQuCArXG4gICAgY2hlY2tVbml0TmVpZ2hib3JpbmdzQ2VsbCh1bml0KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHVuaXQuY2xhc3NOYW1lID09ICd0aWdlcnMnXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgdW5pdC5jbGFzc05hbWUgPT0gJ2Nvd3MnXG4gICAgICAgICkge1xuXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wUmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHRCb3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnRCb3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0VG9wJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvblJvdyA9IHBhcnNlSW50KHVuaXQucG9zaXRpb25Sb3cpO1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNvbCA9IHBhcnNlSW50KHVuaXQucG9zaXRpb25Db2wpO1xuICAgICAgICAgICAgLy8gbGV0IG1hcERhdGUgPSB0aGlzLm1hcERhdGE7XG5cbiAgICAgICAgICAgIC8vINCd0LUg0LfQsNCx0YvRgtGMINC/0YDQviDQs9GA0LDQvdC40YbRiyDQutCw0YDRgtGLXG4gICAgICAgICAgICBsZXQgYm9yZGVyID0ge1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB0b3BSaWdodDogdGhpcy5jb2wsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRoaXMuY29sLFxuICAgICAgICAgICAgICAgIHJpZ2h0Qm90dG9tOiB0aGlzLmNvbCxcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMucm93LFxuICAgICAgICAgICAgICAgIGxlZnRCb3R0b206IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0VG9wOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWFwRGF0ZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBMOlwiLCB1bml0UG9zaXRpb25Sb3csIHVuaXRQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIC8vIFRPUCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstCy0LXRgNGF0YMgK1xuICAgICAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbMF0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzBdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93IC0gMV1bdW5pdFBvc2l0aW9uQ29sXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBUT1BfUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQstC10YDRhdGDLdCy0L/RgNCw0LLQviArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3BcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci50b3BSaWdodFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbMV0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzFdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93IC0gMV1bdW5pdFBvc2l0aW9uQ29sICsgMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQv9GA0LDQstC+ICtcbiAgICAgICAgICAgIGlmICgodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIucmlnaHQpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1syXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbMl0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3ddW3VuaXRQb3NpdGlvbkNvbCArIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFJJR0hUX0JPVFRPTSDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstC/0YDQsNCy0L4t0LLQvdC40LfRgyArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCArIDEpIDwgYm9yZGVyLnJpZ2h0Qm90dG9tXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1szXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbM10uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgKyAxXVt1bml0UG9zaXRpb25Db2wgKyAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBCT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0LLQvdC40LfRgyArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzRdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s0XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyArIDFdW3VuaXRQb3NpdGlvbkNvbF07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTEVGVF9CT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsC3QstC90LjQt9GDICtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uUm93ICsgMSkgPCBib3JkZXIuYm90dG9tXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRCb3R0b21cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzVdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s1XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyArIDFdW3VuaXRQb3NpdGlvbkNvbCAtIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIExFRlQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsCArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvbkNvbCAtIDEpID49IGJvcmRlci5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbNl0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzZdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93XVt1bml0UG9zaXRpb25Db2wgLSAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBMRUZUX1RPUCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQu9C10LLQsC3QstCy0LXRgNGF0YMgK1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzddLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s3XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyAtIDFdW3VuaXRQb3NpdGlvbkNvbCAtIDFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnVuaXQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2VsbHMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJST1c6IFwiICsgdW5pdFBvc2l0aW9uUm93LCBcIkNPTDogXCIgKyB1bml0UG9zaXRpb25Db2wgKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7RgtGE0LjQu9GM0YLRgNGD0LXQvCDRj9GH0LXQudC60Lgg0L/QviDRgtC40L/RgyB1bml0VHlwZVxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsXG4gICAgICogQHBhcmFtIHVuaXRUeXBlXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdFR5cGUpIHtcblxuICAgICAgICBsZXQgYXJyID0gW107XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQsdC10YDQtdC8INC/0L7Qu9GD0YfQtdC90L3Ri9C5INC80LDRgdGB0LjQsiDRgSDRj9GH0LXQudC60LDQvNC4INC90LDRhdC+0LTRj9GJ0LjQvNC40YHRjyDRgNGP0LTQvtC8XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3JpbmdzQ2VsbC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAvLyDQr9GH0LXQudC60LAg0L3QtSDQstGL0YXQvtC00LjRgiDQt9CwINCz0YDQsNC90LjRhtGLXG4gICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5leGlzdCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQuY2xhc3NOYW1lID09IHVuaXRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC40L3QtNC10LrRgSDQutC+0YDQvtCy0Ysg0L/RgNC4INC10LUg0YHRitC10LTQsNC90LjQuFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbmRleEZyb21PYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5vYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID09IHVuaXQucG9zaXRpb25Sb3dcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9PSB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbi8vTUFQIERFQVRIIE1BTkFHRVxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC40L3QtNC10LrRgSDQutC+0YDQvtCy0Ysg0L/RgNC4INC10LUg0YHRitC10LTQsNC90LjQuFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbmRleEZyb21EaWVPYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5kaWVPYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID09IHVuaXQucG9zaXRpb25Sb3dcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9PSB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGREaWVVbml0VG9EaWVBcnJheSh1bml0KSB7XG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwLnB1c2godW5pdCk7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgTWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5cbi8qKlxuICog0JjQs9GA0L7QstCw0Y8g0YHRhtC10L3QsFxuICogQHBhcmFtIHNldHRpbmdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1nYW1lX19wbGFpbicpO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoc2V0dGluZyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC60LDRgNGC0YMg0Lgg0LfQsNC/0L7Qu9C90LjQvCDQtdC1INC+0LHRitC10LrRgtCw0LzQuFxuICAgICAqL1xuICAgIGJ1aWxkICgpIHtcblxuICAgICAgICBpZiAodGhpcy5tYXAuaW5pdCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2VuZXJhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsCDQt9Cw0L/QvtC70L3QtdC90L3QvtC5INC60LDRgNGC0YtcbiAgICAgKi9cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBsZXQgbWFwSFRNTCA9ICcnO1xuXG5cbiAgICAgICAgLy8g0J/QvtGB0YLRgNC+0LjQvCDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtVxuICAgICAgICBmb3IgKGxldCBwb3NpdGlvblJvdyA9IDA7IHBvc2l0aW9uUm93IDwgdGhpcy5tYXAucm93OyBwb3NpdGlvblJvdysrKSB7XG4gICAgICAgICAgICBtYXBIVE1MICs9IFwiPGRpdiBjbGFzcz0ncm93Jz5cIjtcbiAgICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uQ29sID0gMDsgcG9zaXRpb25Db2wgPCB0aGlzLm1hcC5jb2w7IHBvc2l0aW9uQ29sKyspIHtcblxuICAgICAgICAgICAgICAgIC8vIERFViBNT0RFXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxDb29yZGluYXRlID0gXCI8ZGl2IGNsYXNzPSdjZWxsQ29vcmRpbmF0ZSc+XCIgKyBwb3NpdGlvblJvdyArIFwiIDogXCIgKyBwb3NpdGlvbkNvbCArIFwiPC9kaXY+XCI7XG5cbiAgICAgICAgICAgICAgICBtYXBIVE1MICs9IFwiPGRpdiBjbGFzcz0nY2VsbCc+XCIgKyBjZWxsQ29vcmRpbmF0ZSArIFwiIFwiICsgdGhpcy5tYXAuZ2V0Q2VsbChwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpLnNob3coKSArIFwiPC9kaXY+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXBIVE1MICs9IFwiPC9kaXY+XCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjQvCDRgdC+0LHRgNCw0L3QvdGD0Y4gSFRNTCDQutCw0YDRgtGDINCyIERPTVxuICAgICAgICB0aGlzLnBsYWluLmlubmVySFRNTCA9IG1hcEhUTUw7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JTQtdC50YHRgtCy0LjRjyDQstGB0LXRhSDQvtCx0YrQtdC60YLQvtCyINC90LAg0LrQsNGA0YLQtVxuICAgICAqL1xuICAgIGFjdGlvbk9uTWFwICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXAub2JqZWN0c09uTWFwKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5tYXAub2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgdGhpcy5tYXAub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5hY3Rpb24odGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkaWVNYW5hZ2VyICgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5tYXAuZGllT2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0uYWN0aW9uKHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINC70Lgg0LXRidC1INC+0LHRitC10LrRgtGLINCyINC80LDRgdGB0LjQstC1INC00LvRjyDRgdGD0YnQtdCy0YHRgtCy0L7QstCw0L3QuNGPINC40LPRgNGLXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBpc3NldE9iamVjdE9uTWFwICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmlzc2V0T2JqZWN0T25NYXAoKTtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiXG4vLyBQUk9EXG4vKmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnYW1lQ29udGFpbmVySUQ6ICdiLWdhbWUnLFxuICAgIG1hcFNpemU6IHtcbiAgICAgICAgcm93OiA5LFxuICAgICAgICBjb2w6IDIzXG4gICAgfSxcbiAgICBtYXBPYmplY3RzOiB7XG4gICAgICAgIGdyYXNzOiB7XG4gICAgICAgICAgICBtaW46IDkwLFxuICAgICAgICAgICAgbWF4OiAxNzVcbiAgICAgICAgfSxcbiAgICAgICAgY293czoge1xuICAgICAgICAgICAgbWluOiAxNSxcbiAgICAgICAgICAgIG1heDogMjBcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogNTAwXG59OyovXG5cbi8vIERFVlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVDb250YWluZXJJRDogJ2ItZ2FtZScsXG4gICAgbWFwU2l6ZToge1xuICAgICAgICByb3c6IDYsXG4gICAgICAgIGNvbDogNlxuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA3LFxuICAgICAgICAgICAgbWF4OiAxM1xuICAgICAgICB9LFxuICAgICAgICBjb3dzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogMTUzMFxufTtcblxuIiwiLy8gQVVESU8gSU4gR0FNRVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNvdW5kcyB7XG4gICAgY29uc3RydWN0b3IoZmlsZSkge1xuICAgICAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKGZpbGUpOyAgIFxuICAgIH1cblxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICB9O1xuXG4gICAgLy8g0KTRg9C90LrRhtC40Y8gc3RvcCDQtNC70Y8gQXVkaW86XG4gICAgc3RvcCAoKSB7XG4gICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5jdXJyZW50VGltZSA9IDAuMDtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiLy8g0JLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3Ri9C1INGE0YPQvdC60YbQuNC4INC00LvRjyDQuNCz0YDRi1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQvtGJ0Y/QtdGCINGB0LvRg9GH0LDQudC90L7QtSDRh9C40YHQu9C+INCyINC00LjQsNC/0LDQt9C+0L3QtSBNaW4vTWF4XG4gICAgICogQHBhcmFtIG1pblxuICAgICAqIEBwYXJhbSBtYXhcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByYW5kb21JbnRlZ2VyOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgR3Jhc3NBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZ3Jhc3NBbGdvcml0aG0nO1xuaW1wb3J0IENvd3NBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vY293c0FsZ29yaXRobSc7XG5pbXBvcnQgVGlnZXJzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL3RpZ2Vyc0FsZ29yaXRobSc7XG5pbXBvcnQgR3JvdW5kQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2dyb3VuZEFsZ29yaXRobSc7XG5pbXBvcnQgR2FtZVNvdW5kcyBmcm9tICcuL3NvdW5kJztcblxuLyoqXG4gKiDQntGB0L3QvtCy0L3QvtC5INCf0YDQvtGC0L7RgtC40L8g0L7QsdGK0LXQutGC0LAg0L3QsCDQutCw0YDRgtC1XG4gKiBAcGFyYW0gY2xhc3NOYW1lXG4gKiBAcGFyYW0gaWRcbiAqIEBwYXJhbSBvYmpQb3NpdGlvblJvd1xuICogQHBhcmFtIG9ialBvc2l0aW9uQ29sXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuZm9vZFR5cGUgPSB0aGlzLmdldEZvb2RUeXBlKCk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmVuZW15ID0gKHBhcmFtLmNsYXNzTmFtZSA9PSAnY293cycgPyAndGlnZXJzJyA6IG51bGwpO1xuXG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgaXNFYXQ6IGZhbHNlLFxuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG51bGwsXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbnVsbCxcbiAgICAgICAgICAgIGluZGV4T2JqZWN0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zb3VuZEVhdCA9IG5ldyBHYW1lU291bmRzKFwiYXVkaW8vZWF0X1wiICsgdGhpcy5jbGFzc05hbWUgKyBcIi5tcDNcIik7XG5cbiAgICAgICAgLy8g0JLRi9Cx0LXRgNC40Lwg0LDQu9Cz0L7RgNC40YLQvCDQv9C+0LLQtdC00LXQvdC40Y8g0LTQu9GPINC+0LHRitC10LrRgtCwXG4gICAgICAgIHRoaXMuYWxnb3JpdG1zID0gdGhpcy5zZWxlY3RBbGdvcml0aG0ocGFyYW0uaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0YvQstC+0LQgSFRNTCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgbGV0IHVuaXRIZWFsdGggPSBcIlwiO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PSAnY293cycgfHwgdGhpcy5jbGFzc05hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc0hlYWx0aENvbG9yID0gdGhpcy5nZXRDbGFzc0hlYWx0aENvbG9yKHRoaXMuaGVhbHRoKTtcblxuICAgICAgICAgICAgdW5pdEhlYWx0aCArPSBcIjxkaXYgY2xhc3M9J2ItdW5pdF9faGVhbHRoJz48ZGl2IGNsYXNzPSdiLWhlYWx0X19pbmRpY2F0b3IgXCIgKyBjbGFzc0hlYWx0aENvbG9yICsgXCInIHN0eWxlPSd3aWR0aDogXCIgKyB0aGlzLmhlYWx0aCArIFwiJTsnPjwvZGl2PjwvZGl2PlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0nYi11bml0IFwiICsgdGhpcy5jbGFzc05hbWUgKyBcIic+XCIgKyB1bml0SGVhbHRoICsgXCI8L2Rpdj5cIjtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRhtCy0LXRgijQutC70LDRgdGBKSDQttC40LfQvdC4IHVuaXRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldENsYXNzSGVhbHRoQ29sb3IodmFsdWUpIHtcblxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDkwICYmIHBhcnNlSW50KHZhbHVlKSA8PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWdvb2RcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDc1ICYmIHBhcnNlSW50KHZhbHVlKSA8PSA5MCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYWJvdmUtYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gNTAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDc1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSAyNSAmJiBwYXJzZUludCh2YWx1ZSkgPD0gNTApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWJlbG93LWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDI1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1sb3dcIjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KDQsNC30L3Ri9C1INC00LXQudGB0YLQstC40Y8g0L7QsdGK0LXQutGC0LBcbiAgICAgKi9cbiAgICBhY3Rpb24obWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLmFsZ29yaXRtcy5hY3QodGhpcywgbWFwLCBpbmRleE9iamVjdCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0YbQtdC70Ywg0YDQsNC00Lgg0LrQvtGC0L7RgNC+0Lkg0LbQuNCy0LXRgiBVbml0IDopXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0Rm9vZFR5cGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nvd3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZ3Jhc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGlnZXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nvd3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCS0LXRgNC90LXRgiDQtNC70Y8g0L7QsdGK0LXQutGC0LAg0LXQs9C+INCw0LvQs9C+0YDQuNGC0Lwg0L/QvtCy0LXQtNC10L3QuNGPINCyINC40LPRgNC1XG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc2VsZWN0QWxnb3JpdGhtKGlkKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAwIC0gZ3Jhc3NcbiAgICAgICAgICogMSAtIGNvd3NcbiAgICAgICAgICogMiAtIHRpZ2Vyc1xuICAgICAgICAgKiAzIC0gZ3JvdW5kXG4gICAgICAgICAqIDQgLSBkZWF0aFxuICAgICAgICAgKi9cblxuICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KGlkKSkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmFzc0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ293c0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVGlnZXJzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91bmRBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cblxuLy8g0KHRitC10LTQtdC9XG4gICAgaXNFYXRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0O1xuICAgIH07XG5cbi8vINCh0YrQtdC00LXQvVxuICAgIGVhdGVuKHVuaXQsIGZvb2RJbmRleCkge1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Db2wgPSB1bml0LnBvc2l0aW9uQ29sO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCA9IGZvb2RJbmRleDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uY2xhc3NOYW1lID0gdW5pdC5jbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlkID0gdW5pdC5pZDtcbiAgICB9O1xuXG4vLyBSRVNFVCDQodGK0LXQtNC10L1cbiAgICByZXNldEVhdGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgYWRkSGVhbHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoICs9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgc3ViSGVhbHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoIC09IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9O1xuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSJdLCJzb3VyY2VSb290IjoiIn0=