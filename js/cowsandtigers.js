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
    DEBUG: false,

    getNeighboringsCellInformation: function getNeighboringsCellInformation(map, unit, indexObject, steps) {

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

                if (this.DEBUG) {
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
        var newPositionRow = positionRow - step;
        var newPositionCol = positionCol - step;
        var angleIsset = true;

        if (this.isUnitOutOfBorder(newPositionRow, newPositionCol)) {
            var newPosition = this.findNewAngel(step, newPositionRow, newPositionCol);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vY293c0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL3JvdXRlLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi90b29scy5qcyIsIndlYnBhY2s6Ly8vLi91bml0LmpzIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsImFkZEhlYWx0aFZhbHVlIiwic3ViSGVhbHRoVmFsdWUiLCJ1bml0IiwibWFwIiwiaW5kZXhPYmplY3QiLCJuZWlnaGJvcmluZ3NDZWxsIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQiLCJjaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsIiwiZmlsdGVyQ2VsbEJ5VHlwZSIsImZvb2RUeXBlIiwiZW5lbXkiLCJDb3dzQWxnb3JpdGhtIiwiZGlzdGFuY2VWaWV3IiwiZGF0YSIsImdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiIsImNlbGxSYW5kb21Sb3dDb2wiLCJyYW5kb21JbnRlZ2VyIiwibGVuZ3RoIiwib2xkVW5pdCIsInVuaXRQYXJhbSIsImlkIiwiY2xhc3NOYW1lIiwib2JqUG9zaXRpb25Sb3ciLCJwb3NpdGlvblJvdyIsIm9ialBvc2l0aW9uQ29sIiwicG9zaXRpb25Db2wiLCJzZXRDZWxsIiwidXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwIiwic3ViSGVhbHRoIiwiZGllVW5pdFR5cGUiLCJkaWVVbml0SWQiLCJkaWVVbml0IiwiYWRkRGllVW5pdFRvRGllQXJyYXkiLCJoZWFsdGgiLCJhZGRIZWFsdGgiLCJEZWF0aEFsZ29yaXRobSIsImRlYXRoVW5pdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsIiwibmV3UG9zaXRpb24iLCJnZXROZXdSb3dDb2xQb3NpdGlvbiIsInJvdyIsImNvbCIsIm5ld1VuaXQiLCJkaWVPYmplY3RzT25NYXBJbmRleCIsImdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCIsImVudGl0eVBhcmFtIiwiYWRkVG9PYmplY3RzT25NYXAiLCJyZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcCIsIkdyYXNzQWxnb3JpdGhtIiwiR3JvdW5kQWxnb3JpdGhtIiwibWFwUm93IiwibWFwQ29sIiwiREVCVUciLCJnZXROZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJzdGVwcyIsImNvbnNvbGUiLCJsb2ciLCJtYXBEYXRhIiwibmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uIiwic3RlcCIsImdldE5laWdoYm9yaW5nc0NlbGwiLCJwYXJhbSIsImNlbGxzSW5mbyIsInB1c2giLCJuZWlnaGJvcmluZ3NDZWxsSW5mbyIsInVuaXRTaWRlcyIsImdldFVuaXRBbmdsZVBvaW50cyIsInNpZGUiLCJpc3NldCIsIm5hbWUiLCJ1bml0U2lkZSIsInVuaXRQb3NpdGlvblJvdyIsInVuaXRQb3NpdGlvbkNvbCIsInBhcnNlSW50IiwibGVmdFRvcF9UT19yaWdodFRvcCIsImdldFRvcFNpZGVOZWlnaGJvcmluZ3NDZWxsIiwidW5kZWZpbmVkIiwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b20iLCJnZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20iLCJnZXRCb3R0b21TaWRlTmVpZ2hib3JpbmdzQ2VsbCIsImxlZnRCb3R0b21fVE9fbGVmdFRvcCIsImdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInN0YXJ0Q2VsbFJvdyIsImFuZ2xlU3RhcnQiLCJlbmRDZWxsQ29sIiwiYW5nbGVFbmQiLCJzdGFydENlbGxDb2wiLCJ1bml0UG9zaXRpb25DZWxsIiwic2VsZWN0UG9zaXRpb25DZWxsIiwiZ2V0Q2VsbCIsImVuZENlbGxSb3ciLCJ1bml0QW5nbGVzIiwibGVmdFRvcCIsInJpZ2h0VG9wIiwicmlnaHRCb3R0b20iLCJsZWZ0Qm90dG9tIiwiZ2V0TGVmdFRvcEFuZ2xlUG9pbnQiLCJ0b1JpZ2h0VG9wIiwiZ2V0UmlnaHRUb3BBbmdsZVBvaW50IiwidG9SaWdodEJvdHRvbSIsImdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludCIsInRvTGVmdEJvdHRvbSIsImdldExlZnRCb3R0b21BbmdsZVBvaW50IiwidG9MZWZ0VG9wIiwibmV3UG9zaXRpb25Sb3ciLCJuZXdQb3NpdGlvbkNvbCIsImFuZ2xlSXNzZXQiLCJpc1VuaXRPdXRPZkJvcmRlciIsImZpbmROZXdBbmdlbCIsImlzRmluZCIsInN0cCIsIm5ld0FuZ2VsIiwiY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zIiwiZGlyZWN0aW9uTGVmdCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdCIsImRpcmVjdGlvblRvcCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wIiwiZGlyZWN0aW9uUmlnaHQiLCJjaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0IiwiZGlyZWN0aW9uQm90dG9tIiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b20iLCJ0cnlOZXdQb3NpdGlvbkNvbCIsImZpbmQiLCJ0cnlOZXdQb3NpdGlvblJvdyIsIlRpZ2Vyc0FsZ29yaXRobSIsImZvb2RJbmRleCIsImdldEluZGV4RnJvbU9iamVjdHNPbk1hcCIsImVhdGVuIiwicmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAiLCJpc0VhdGVuIiwiZm9vZEluZm9ybWF0aW9uIiwic2V0SW5kZXhPYmplY3QiLCJyZXNldEVhdGVuIiwiRGllVW5pdCIsImFsZ29yaXRtcyIsInByb3RvdHlwZSIsImFjdGlvbiIsImFjdCIsInVwZGF0ZVJvd0NvbCIsIkVudGl0eSIsIkdhbWUiLCJzZXR0aW5nIiwiZGV2TW9kZSIsInRpbWVSZW5kZXIiLCJidG5TdGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidG5QYXVzZSIsInNjZW5lIiwiYnVpbGQiLCIkIiwibE5vdGlmeSIsInNlbGYiLCJsb29wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwiY2FsbGJhY2siLCJpc3NldE9iamVjdE9uTWFwIiwiZGllTWFuYWdlciIsImFjdGlvbk9uTWFwIiwicmVuZGVyIiwiZ2FtZU92ZXIiLCJjbGVhckludGVydmFsIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJhbmltYXRpb24iLCJwb3NpdGlvbiIsImdhbWUiLCJydW4iLCJNYXAiLCJtYXBPYmplY3RzIiwib2JqZWN0c09uTWFwIiwiQXJyYXkiLCJkaWVPYmplY3RzT25NYXAiLCJtYXBTaXplIiwib2JqSUQiLCJvYmplY3ROYW1lIiwib2JqTWluIiwibWluIiwib2JqTWF4IiwibWF4Iiwib2JqQ291bnRPbk1hcCIsImkiLCJtYXBSb3dDb2wiLCJnZXRSYW5kb21Sb3dDb2xDb29yZCIsInVuaXRTZXR0aW5nIiwidHJ5TmV3R2VuZXJhdGUiLCJvYmplY3RTZXR0aW5nIiwiY291bnQiLCJjb3VudFJvdyIsImNvdW50Q29sIiwiY2VsbCIsImlzc2V0Um91dGUiLCJ0cnlSb3V0ZSIsIm1pbkNlbGwiLCJtYXhDZWxsIiwiZXhjbHVkZVZhbHVlIiwidmFsdWUiLCJuZXdQb3NpdGlvblJvd0NvbCIsInNwbGljZSIsImNlbGxzIiwiZGlyZWN0aW9uIiwiZXhpc3QiLCJjb250ZW50IiwiYm9yZGVyIiwidG9wIiwidG9wUmlnaHQiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ1bml0VHlwZSIsImFyciIsIlNjZW5lIiwicGxhaW4iLCJpbml0IiwiZ2VuZXJhdGUiLCJtYXBIVE1MIiwiY2VsbENvb3JkaW5hdGUiLCJzaG93IiwiaW5uZXJIVE1MIiwiZ2FtZUNvbnRhaW5lcklEIiwiZ3Jhc3MiLCJjb3dzIiwidGlnZXJzIiwiZ3JvdW5kIiwiR2FtZVNvdW5kcyIsImZpbGUiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJVbml0IiwiZ2V0Rm9vZFR5cGUiLCJpc0VhdCIsInNvdW5kRWF0Iiwic2VsZWN0QWxnb3JpdGhtIiwidW5pdEhlYWx0aCIsImNsYXNzSGVhbHRoQ29sb3IiLCJnZXRDbGFzc0hlYWx0aENvbG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7O0FBQ0E7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QUFMO0FBQ0ksMkJBQU8sK0JBQVA7QUFDQTtBQWJSO0FBZUg7Ozs7O0FBR0w7a0NBQ2M7QUFDTixtQkFBTyxLQUFLZ0gsZUFBTCxDQUFxQjZHLEtBQTVCO0FBQ0g7Ozs7O0FBRUw7OEJBQ1VqUCxJLEVBQU0rSCxTLEVBQVc7QUFDbkIsaUJBQUtLLGVBQUwsQ0FBcUI2RyxLQUFyQixHQUE2QixJQUE3QjtBQUNBLGlCQUFLN0csZUFBTCxDQUFxQjdHLFdBQXJCLEdBQW1DdkIsS0FBS3VCLFdBQXhDO0FBQ0EsaUJBQUs2RyxlQUFMLENBQXFCM0csV0FBckIsR0FBbUN6QixLQUFLeUIsV0FBeEM7QUFDQSxpQkFBSzJHLGVBQUwsQ0FBcUJsSSxXQUFyQixHQUFtQzZILFNBQW5DO0FBQ0EsaUJBQUtLLGVBQUwsQ0FBcUIvRyxTQUFyQixHQUFpQ3JCLEtBQUtxQixTQUF0QztBQUNBLGlCQUFLK0csZUFBTCxDQUFxQmhILEVBQXJCLEdBQTBCcEIsS0FBS29CLEVBQS9CO0FBQ0g7Ozs7O0FBRUw7cUNBQ2lCO0FBQ1QsbUJBQU8sS0FBS2dILGVBQUwsQ0FBcUI2RyxLQUFyQixHQUE2QixLQUFwQztBQUNBLGlCQUFLN0csZUFBTCxDQUFxQjdHLFdBQXJCLEdBQW1DLElBQW5DO0FBQ0EsaUJBQUs2RyxlQUFMLENBQXFCM0csV0FBckIsR0FBbUMsSUFBbkM7QUFDQSxpQkFBSzJHLGVBQUwsQ0FBcUJsSSxXQUFyQixHQUFtQyxJQUFuQztBQUNIOzs7a0NBRVN1TSxLLEVBQU87QUFDYixpQkFBS3hLLE1BQUwsSUFBZXlDLFNBQVMrSCxLQUFULENBQWY7QUFDSDs7O2tDQUVTQSxLLEVBQU87QUFDYixpQkFBS3hLLE1BQUwsSUFBZXlDLFNBQVMrSCxLQUFULENBQWY7QUFDSDs7Ozs7O0FBSUw7OztrQkEzSnFCc0MsSSIsImZpbGUiOiJjb3dzYW5kdGlnZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgdG9vbHMgZnJvbSBcIi4uL3Rvb2xzXCI7XG5pbXBvcnQgcm91dGUgZnJvbSBcIi4vcm91dGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxnb3JpdGhtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRIZWFsdGhWYWx1ZSA9IDU7XG4gICAgICAgIHRoaXMuc3ViSGVhbHRoVmFsdWUgPSAzO1xuICAgIH1cblxuICAgIGdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbih1bml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGwsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZDtcblxuICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INGB0L7RgdC10LTQvdC40Lgg0LrQu9C10YLQutC4XG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGwgPSBtYXAuY2hlY2tVbml0TmVpZ2hib3JpbmdzQ2VsbCh1bml0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0LXQtNGDXG4gICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICovXG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXQuZm9vZFR5cGUpO1xuXG4gICAgICAgIGlmICh1bml0LmVuZW15ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBUT0RPINGDINGC0LjQs9GA0LAg0L3QtdGCINCy0YDQsNCz0L7QslxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDQstGA0LDQs9C+0LIo0YLQuNCz0YDQvtCyKVxuICAgICAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgICAgICogKi9cbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXQuZW5lbXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINGB0LLQvtCx0L7QtNC90YvQtSDRj9GH0LXQudC60Lgg0LrRg9C00LAg0LzQvtC20L3QviDQv9C10YDQtdC80LXRgdGC0LjRgtGM0YHRj1xuICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAqL1xuICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIFwiZ3JvdW5kXCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsOiBuZWlnaGJvcmluZ3NDZWxsLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXM6IG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuLy4uL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vLi4vdG9vbHMnO1xuXG4vLyBDT1dTIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3dzQWxnb3JpdGhtICBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIENlbGwgRGlzdGFuY2VcbiAgICAgICAgdGhpcy5kaXN0YW5jZVZpZXcgPSAxO1xuICAgIH1cblxuICAgIGFjdCAodW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGE6XG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQodC+0YHQtdC00L3QuNC80Lgg0LrQu9C10YLQutCw0LzQuCAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0YDQsNCy0L7QuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLQuNCz0YDQsNC80LggICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllc1xuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JfQtdC80LvRkdC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgICovXG5cbiAgICAgICAgLyppZiAodW5pdC5oZWFsdGggPiAwKSB7XG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0KLQuNCz0YDRi1xuICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvL9CV0YHQu9C4INC10YHRgtGMINGB0LLQvtCx0L7QtNC90YvQtSDQutC70LXRgtC60LhcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCR0LXQttC40Lwg0L7RgiDQotC40LPRgNCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUF3YXlGcm9tRW5lbXkobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8v0JXRgdC70Lgg0LXRgdGC0Ywg0YDRj9C00L7QvCDRgtGA0LDQstCwINC10LTQuNC8INC10LUg0Lgg0YPQsdC10LPQsNC10LxcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0YDRj9C00L7QvCDQtdC00LBcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcC5raWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCk7XG4gICAgICAgIH0qL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQkdC10LbQuNC8INC+0YIg0YLQuNCz0YDQsCArXG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUF3YXlGcm9tRW5lbXkgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LVcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vINCh0L7RhdGA0LDQvdC40Lwg0YHRgtCw0YDRi9C5IFVuaXQg0Lgg0LXQs9C+IFJDIChSb3cvQ29sKVxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sINC4INC30LDQv9C40YjQuNC8INCyINC90L7QstGD0Y4g0Y/Rh9C10LnQutGDINC60L7RgNC+0LLRg1xuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUm93L0NvbCDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCiLtC6INC80Ysg0YPQsdC10LPQsNC10Lwg0Lgg0L3QtSDQtdC00LjQvCDRgtGA0LDQstGDLCDQvtGC0L3QuNC80LjQvCDQvdC10LzQvdC+0LPQviDQt9C00L7RgNC+0LLRjNGPXG4gICAgICAgIHVuaXQuc3ViSGVhbHRoKHRoaXMuc3ViSGVhbHRoVmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQldC00LjQvCDRgtGA0LDQstGDXG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVUb0Zvb2QgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1INC10LTRi1xuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHt9O1xuXG4gICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0JTQvtCx0LDQstC40Lwg0LIg0LzQtdC90LXQtNC20LXRgCDRgdC80LXRgNGC0LXQuSDRgtGA0LDQstGDXG4gICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZGllVW5pdFR5cGU6IFwiZ3Jhc3NcIixcbiAgICAgICAgICAgIGRpZVVuaXRJZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICBtYXAuYWRkRGllVW5pdFRvRGllQXJyYXkoZGllVW5pdCk7XG5cbiAgICAgICAgLy8g0J/RgNC4INC/0L7Qs9C70LDRidC10L3QuNC4INGC0YDQsNCy0Ysg0L/RgNC40LHQsNCy0LjQvCDQttC40LfQvdC4LCDQvtCz0YDQsNC90LjRh9C40Lwg0LfQvdCw0YfQtdC90LjQtdC8IDEwMFxuICAgICAgICBpZiAodW5pdC5oZWFsdGggPCAxMDApIHtcblxuICAgICAgICAgICAgaWYgKHVuaXQuaGVhbHRoID4gOTApIHtcbiAgICAgICAgICAgICAgICB1bml0LmFkZEhlYWx0aCgxMDAgLSB1bml0LmhlYWx0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKHRoaXMuYWRkSGVhbHRoVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodCy0L7QsdC+0LTQvdC+0LUg0L/QtdGA0LXQvNC10YnQtdC90LjQtVxuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVGcmVlIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1bml0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQpO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1INGBINC30LXQvNC70LXQuVxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICB1bml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIvLyBERUFUSCBBTEdPUklUTVxuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgVW5pdCBmcm9tICcuLy4uL3VuaXQnO1xuXG5cbi8vIEdST1VORCBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVhdGhBbGdvcml0aG0ge1xuICAgIGFjdCAoZGVhdGhVbml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIGlmIChkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0IDwgZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsKSB7XG4gICAgICAgICAgICBkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0Kys7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IG1hcC5nZXROZXdSb3dDb2xQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdQb3NpdGlvblJvd0NvbCk7XG5cbiAgICAgICAgICAgIHZhciB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGRlYXRoVW5pdC5kaWVVbml0SWQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBkZWF0aFVuaXQuZGllVW5pdFR5cGUsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uLnJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogbmV3UG9zaXRpb24uY29sLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG5ld1VuaXQgPSBuZXcgVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgICAgICB2YXIgZGllT2JqZWN0c09uTWFwSW5kZXggPSBtYXAuZ2V0SW5kZXhGcm9tRGllT2JqZWN0c09uTWFwKGRlYXRoVW5pdCk7XG5cbiAgICAgICAgICAgIHZhciBlbnRpdHlQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IGRlYXRoVW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogZGVhdGhVbml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICAgICAgbWFwLnNldENlbGwoZGVhdGhVbml0LCBuZXcgRW50aXR5KGVudGl0eVBhcmFtKSk7XG5cbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKG5ld1VuaXQsIG5ld1VuaXQpO1xuXG4gICAgICAgICAgICBtYXAuYWRkVG9PYmplY3RzT25NYXAobmV3VW5pdCk7XG5cbiAgICAgICAgICAgIG1hcC5yZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcChkaWVPYmplY3RzT25NYXBJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuXG4vLyBHUkFTUyBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Jhc3NBbGdvcml0aG0gZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGFjdCAoKSB7fTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5cbi8vIEdST1VORCBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdW5kQWxnb3JpdGhtIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBhY3QgKCkge307XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCB0b29scyBmcm9tIFwiLi4vdG9vbHNcIjtcblxuLy8gUm91dGVcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtYXBSb3c6IDAsXG4gICAgbWFwQ29sOiAwLFxuICAgIERFQlVHOiBmYWxzZSxcblxuICAgIGdldE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbjogZnVuY3Rpb24gKG1hcCwgdW5pdCwgaW5kZXhPYmplY3QsIHN0ZXBzKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hcC5tYXBEYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVuaXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVuaXQpO1xuXG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24gPSBbXTtcblxuICAgICAgICB0aGlzLm1hcFJvdyA9IG1hcC5yb3c7XG4gICAgICAgIHRoaXMubWFwQ29sID0gbWFwLmNvbDtcblxuICAgICAgICAvLyDQv9C+0LvRg9GH0LjQvCDQuNC90YTQviDQviDRh9C10YLRi9GA0LXRhSDRgdGC0L7RgNC+0L3QsNGFINC90LAg0LTQuNGB0YLQsNC90YbQuNC4INC/0L7Qu9GD0YfQtdC90L3QvtC5INC+0YIgVW5pdFxuICAgICAgICBmb3IgKGxldCBzdGVwID0gMTsgc3RlcCA8IHN0ZXBzOyBzdGVwKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtIHN0ZXA6ICcgKyBzdGVwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3wtIHN0ZXA6ICcgKyBzdGVwKTtcblxuICAgICAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGwgPSB0aGlzLmdldE5laWdoYm9yaW5nc0NlbGwoc3RlcCwgdW5pdCwgbWFwKTtcblxuICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGwubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0LDQstC40LvRjNC90L4g0L3QsNC30LLQsNGC0YwgXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzSW5mbzogbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vINCS0L7RgiDQv9GA0Y/QvCDQt9C00LXRgdGMINC/0L7Qu9GD0YfQuNC8XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uLnB1c2gocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbjtcbiAgICB9LFxuXG4gICAgLy8g0J/QvtC70YPRh9C40Lwg0LjQvdGE0L4g0YHQvtGB0LXQtNC90LjRhSDRj9GH0LXQtdC6INC90LAg0LrQsNC20LTQvtC5INC40YLRgtC10YDQsNGG0LjQuFxuICAgIGdldE5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChzdGVwLCB1bml0LCBtYXApIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgLy8gICAgIHVuaXQucG9zaXRpb25Sb3cgPSAwO1xuICAgICAgICAvLyAgICAgdW5pdC5wb3NpdGlvbkNvbCA9IDI7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyDQutC+0L7RgNC00LjQvdCw0YLRiyDRg9Cz0LvQvtCyIFVuaXRcbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0LrQvtC+0YDQtNC40L3QsNGC0YsgNC3RhSDRgdC+0YLQvtGA0L7QvSDQvdCwINC+0YHQvdC+0LLQtSBVbml0XG4gICAgICAgIGxldCB1bml0U2lkZXMgPSB0aGlzLmdldFVuaXRBbmdsZVBvaW50cyhzdGVwLCB1bml0LnBvc2l0aW9uUm93LCB1bml0LnBvc2l0aW9uQ29sKTtcblxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0gdW5pdFNpZGVzXCIsIHVuaXRTaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQndGD0LbQvdC+INC/0L7Qu9GD0YfQuNGC0Ywg0Y/Rh9C10LnQutC4INC90LAg0L7RgdC90L7QstC1INC90LDQudC00LXQvdGL0YUg0YHRgtC+0YDQvtC9ISEhXG5cbiAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4gNC3QtdC8INGB0YLQvtGA0L7QvdCw0Lwg0Lgg0L/QvtC70YPRh9C40Lwg0YHQvtC00LXRgNC20LjQvNC+0LUg0Y/Rh9C10LXQuiwg0LfQsNC00LXQudGB0YLQstGD0LXQvCDQvNCw0YHRgdC40LIg0YEg0LrQsNGA0YLQvtC5INC40LPRgNGLXG4gICAgICAgIGZvciAobGV0IHNpZGUgPSAwOyBzaWRlIDwgdW5pdFNpZGVzLmxlbmd0aDsgc2lkZSsrKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0U2lkZXNbc2lkZV0uaXNzZXQpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaWRlJywgc2lkZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpZGVfbmFtZScsIHVuaXRTaWRlc1tzaWRlXS5uYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tLSBTVEFSVCBzaWRlOiBcIiArIHVuaXRTaWRlc1tzaWRlXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0tIHNpZGU6IFwiLCB1bml0U2lkZXNbc2lkZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gc2lkZTogXCIsIHVuaXRTaWRlc1tzaWRlXSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXRTaWRlOiB1bml0U2lkZXNbc2lkZV0sXG4gICAgICAgICAgICAgICAgICAgIHVuaXRQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgdW5pdFBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtOiAnLCBwYXJhbSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHVuaXRTaWRlc1tzaWRlXS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdFRvcF9UT19yaWdodFRvcFxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdFRvcF9UT19yaWdodFRvcCA9IHRoaXMuZ2V0VG9wU2lkZU5laWdoYm9yaW5nc0NlbGwocGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnRUb3BfVE9fcmlnaHRUb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gobGVmdFRvcF9UT19yaWdodFRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHRUb3BfVE9fcmlnaHRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHRUb3BfVE9fcmlnaHRCb3R0b20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocmlnaHRUb3BfVE9fcmlnaHRCb3R0b20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20gPSB0aGlzLmdldEJvdHRvbVNpZGVOZWlnaGJvcmluZ3NDZWxsKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdEJvdHRvbV9UT19sZWZ0VG9wXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0Qm90dG9tX1RPX2xlZnRUb3AgPSB0aGlzLmdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdEJvdHRvbV9UT19sZWZ0VG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKGxlZnRCb3R0b21fVE9fbGVmdFRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tLSBFTkQgc2lkZTogXCIgKyB1bml0U2lkZXNbc2lkZV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG5cbiAgICAvLyAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLyog0J/QvtC70YPRh9C40Lwg0YHQvtC00LXRgNC20LjQvNC+0LUg0Y/Rh9C10LXQuiDQv9C+INGB0YLQvtGA0L7QvdCw0LwgKi9cbiAgICBnZXRUb3BTaWRlTmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mbyA9IFtdO1xuXG4gICAgICAgIGxldCBzdGFydENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uUm93O1xuICAgICAgICBsZXQgZW5kQ2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlRW5kLnBvc2l0aW9uQ29sO1xuXG4gICAgICAgIGxldCBzdGFydENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uQ29sO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCB1bml0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQocGFyYW0udW5pdFBvc2l0aW9uUm93ICsgJycgKyBwYXJhbS51bml0UG9zaXRpb25Db2wpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHN0YXJ0Q2VsbFJvdyArICcnICsgc3RhcnRDZWxsQ29sKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRQb3NpdGlvbkNlbGwgIT09IHNlbGVjdFBvc2l0aW9uQ2VsbCkge1xuICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocGFyYW0ubWFwLmdldENlbGwoc3RhcnRDZWxsUm93LCBzdGFydENlbGxDb2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0Q2VsbENvbCsrO1xuICAgICAgICB9IHdoaWxlIChzdGFydENlbGxDb2wgPCBlbmRDZWxsQ29sKTtcblxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcbiAgICBnZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mbyA9IFtdO1xuXG4gICAgICAgIGxldCBzdGFydENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uQ29sO1xuICAgICAgICBsZXQgZW5kQ2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlRW5kLnBvc2l0aW9uUm93O1xuXG4gICAgICAgIGxldCBzdGFydENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uUm93O1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCB1bml0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQocGFyYW0udW5pdFBvc2l0aW9uUm93ICsgJycgKyBwYXJhbS51bml0UG9zaXRpb25Db2wpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHN0YXJ0Q2VsbFJvdyArICcnICsgc3RhcnRDZWxsQ29sKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRQb3NpdGlvbkNlbGwgIT09IHNlbGVjdFBvc2l0aW9uQ2VsbCkge1xuICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocGFyYW0ubWFwLmdldENlbGwoc3RhcnRDZWxsUm93LCBzdGFydENlbGxDb2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0Q2VsbFJvdysrO1xuICAgICAgICB9IHdoaWxlIChzdGFydENlbGxSb3cgPCBlbmRDZWxsUm93KTtcblxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcbiAgICBnZXRCb3R0b21TaWRlTmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mbyA9IFtdO1xuXG4gICAgICAgIGxldCBzdGFydENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uUm93O1xuICAgICAgICBsZXQgZW5kQ2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlRW5kLnBvc2l0aW9uQ29sO1xuXG4gICAgICAgIGxldCBzdGFydENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uQ29sO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCB1bml0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQocGFyYW0udW5pdFBvc2l0aW9uUm93ICsgJycgKyBwYXJhbS51bml0UG9zaXRpb25Db2wpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHN0YXJ0Q2VsbFJvdyArICcnICsgc3RhcnRDZWxsQ29sKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRQb3NpdGlvbkNlbGwgIT09IHNlbGVjdFBvc2l0aW9uQ2VsbCkge1xuICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocGFyYW0ubWFwLmdldENlbGwoc3RhcnRDZWxsUm93LCBzdGFydENlbGxDb2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0Q2VsbENvbC0tO1xuICAgICAgICB9IHdoaWxlIChzdGFydENlbGxDb2wgPiBlbmRDZWxsQ29sKTtcblxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcbiAgICBnZXRMZWZ0U2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvbkNvbDtcbiAgICAgICAgbGV0IGVuZENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvblJvdztcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHBhcmFtLnVuaXRQb3NpdGlvblJvdyArICcnICsgcGFyYW0udW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RQb3NpdGlvbkNlbGwgPSBwYXJzZUludChzdGFydENlbGxSb3cgKyAnJyArIHN0YXJ0Q2VsbENvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UG9zaXRpb25DZWxsICE9PSBzZWxlY3RQb3NpdGlvbkNlbGwpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydENlbGxSb3ctLTtcbiAgICAgICAgfSB3aGlsZSAoc3RhcnRDZWxsUm93ID4gZW5kQ2VsbFJvdyk7XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDQutC+0L7RgNC00LjQvdCw0YLRiyA0LdGFINGB0L7RgtC+0YDQvtC9INC90LAg0L7RgdC90L7QstC1IFVuaXRcbiAgICAgKiBAcGFyYW0gc3RlcFxuICAgICAqIEBwYXJhbSBwb3NpdGlvblJvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbkNvbFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBnZXRVbml0QW5nbGVQb2ludHM6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IHVuaXRBbmdsZXMgPSBbXTtcblxuICAgICAgICBsZXQgbGVmdFRvcCxcbiAgICAgICAgICAgIHJpZ2h0VG9wLFxuICAgICAgICAgICAgcmlnaHRCb3R0b20sXG4gICAgICAgICAgICBsZWZ0Qm90dG9tO1xuXG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC0gZ2V0VW5pdEFuZ2xlUG9pbnRzOiAnLCBzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIGxlZnRUb3BcbiAgICAgICAgbGVmdFRvcCA9IHRoaXMuZ2V0TGVmdFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIGxlZnRUb3A6ICcsIGxlZnRUb3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0VG9wLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b1JpZ2h0VG9wID0gdGhpcy5nZXRSaWdodFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRvUmlnaHRUb3AuaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0VG9wID0ge3Bvc2l0aW9uUm93OiB0b1JpZ2h0VG9wLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogdG9SaWdodFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRUb3AgPSB7cG9zaXRpb25Sb3c6IGxlZnRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiBsZWZ0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIGxlZnRUb3BcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxlZnRUb3BfVE9fcmlnaHRUb3BcIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IGxlZnRUb3AucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogbGVmdFRvcC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZUVuZDogdG9SaWdodFRvcCxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IGxlZnRUb3AuaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIHJpZ2h0VG9wXG4gICAgICAgIHJpZ2h0VG9wID0gdGhpcy5nZXRSaWdodFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIHJpZ2h0VG9wOiAnLCByaWdodFRvcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0VG9wLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b1JpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRvUmlnaHRCb3R0b20uaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0Qm90dG9tID0ge3Bvc2l0aW9uUm93OiB0b1JpZ2h0Qm90dG9tLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogdG9SaWdodEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHJpZ2h0VG9wLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogcmlnaHRUb3AucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bml0QW5nbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gcmlnaHRUb3BcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uUm93OiByaWdodFRvcC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sOiByaWdodFRvcC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZUVuZDogdG9SaWdodEJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IHJpZ2h0VG9wLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdFVCByaWdodEJvdHRvbVxuICAgICAgICByaWdodEJvdHRvbSA9IHRoaXMuZ2V0UmlnaHRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSByaWdodEJvdHRvbTogJywgcmlnaHRCb3R0b20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodEJvdHRvbS5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9MZWZ0Qm90dG9tID0gdGhpcy5nZXRMZWZ0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9MZWZ0Qm90dG9tLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0Qm90dG9tID0ge3Bvc2l0aW9uUm93OiB0b0xlZnRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b0xlZnRCb3R0b20ucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHJpZ2h0Qm90dG9tLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogcmlnaHRCb3R0b20ucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bml0QW5nbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gcmlnaHRCb3R0b21cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHJpZ2h0Qm90dG9tLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IHJpZ2h0Qm90dG9tLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b0xlZnRCb3R0b20sXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiByaWdodEJvdHRvbS5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgbGVmdEJvdHRvbVxuICAgICAgICBsZWZ0Qm90dG9tID0gdGhpcy5nZXRMZWZ0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbGVmdEJvdHRvbTogJywgbGVmdEJvdHRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnRCb3R0b20uaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvTGVmdFRvcCA9IHRoaXMuZ2V0TGVmdFRvcEFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRvTGVmdFRvcC5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvTGVmdFRvcCA9IHtwb3NpdGlvblJvdzogdG9MZWZ0VG9wLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogdG9MZWZ0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0VG9wID0ge3Bvc2l0aW9uUm93OiBsZWZ0Qm90dG9tLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogbGVmdEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyBsZWZ0Qm90dG9tXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsZWZ0Qm90dG9tX1RPX2xlZnRUb3BcIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IGxlZnRCb3R0b20ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogbGVmdEJvdHRvbS5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZUVuZDogdG9MZWZ0VG9wLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogbGVmdEJvdHRvbS5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5pdEFuZ2xlcztcbiAgICB9LFxuXG4gICAgZ2V0TGVmdFRvcEFuZ2xlUG9pbnQ6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgLSBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCAtIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1VuaXRPdXRPZkJvcmRlcihuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIG5ld1Bvc2l0aW9uOiAnLCBuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRSaWdodFRvcEFuZ2xlUG9pbnQ6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgLSBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCArIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1VuaXRPdXRPZkJvcmRlcihuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0UmlnaHRCb3R0b21BbmdsZVBvaW50OiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdyA9IHBvc2l0aW9uUm93ICsgc3RlcDtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uQ29sID0gcG9zaXRpb25Db2wgKyBzdGVwO1xuICAgICAgICBsZXQgYW5nbGVJc3NldCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNVbml0T3V0T2ZCb3JkZXIobmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSkge1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5maW5kTmV3QW5nZWwoc3RlcCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb24ucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbi5wb3NpdGlvbkNvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGVJc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzc2V0OiBhbmdsZUlzc2V0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldExlZnRCb3R0b21BbmdsZVBvaW50OiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdyA9IHBvc2l0aW9uUm93ICsgc3RlcDtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uQ29sID0gcG9zaXRpb25Db2wgLSBzdGVwO1xuICAgICAgICBsZXQgYW5nbGVJc3NldCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNVbml0T3V0T2ZCb3JkZXIobmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSkge1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5maW5kTmV3QW5nZWwoc3RlcCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb24ucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbi5wb3NpdGlvbkNvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGVJc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzc2V0OiBhbmdsZUlzc2V0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGlzVW5pdE91dE9mQm9yZGVyOiBmdW5jdGlvbiAobmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChuZXdQb3NpdGlvblJvdyA8IDAgfHwgbmV3UG9zaXRpb25Sb3cgPiAodGhpcy5tYXBSb3cgLSAxKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAobmV3UG9zaXRpb25Db2wgPCAwIHx8IG5ld1Bvc2l0aW9uQ29sID4gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIChuZXdQb3NpdGlvblJvdyA8IDAgfHwgbmV3UG9zaXRpb25Sb3cgPiAodGhpcy5tYXBSb3cgLSAxKSlcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIChuZXdQb3NpdGlvbkNvbCA8IDAgfHwgbmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8g0J/QvtC/0YDQvtCx0YPQtdC8INC90LDQudGC0Lgg0L3QvtCy0YPRjiDRj9GH0LXQudC60YMg0L/RgNC40LHQsNCy0LjQsiDQt9C90LDRh9C10L3QuNC1INGI0LDQs9CwXG4gICAgZmluZE5ld0FuZ2VsOiBmdW5jdGlvbiAoc3RlcCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIC8vINCf0YDQvtC50LTQtdC80YHRjyDQv9C+INC/0L4g0YjQsNCz0LDQvCDQsiA0LdGFINC90LDQv9GA0LDQstC70LXQvdC40Y/RhSDQuCDQv9C+0YHQvNC+0YLRgNC40LwsINC/0L7Qv9Cw0LTQsNC10Lwg0LvQuCDQsiDQv9GA0LXQtNC10LvRiyDQutCw0YDRgtGLXG4gICAgICAgIGZvciAobGV0IHN0cCA9IDE7IHN0cCA8PSBzdGVwOyBzdHArKykge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKChzdHAgPD0gc3RlcCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbmV3QW5nZWwgPSB0aGlzLmNoZWNrTmVpZ2hib3JpbmdzQ2VsbEJ5RGlyZWN0aW9ucyhzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbmV3QW5nZWw6ICcsIG5ld0FuZ2VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdBbmdlbC5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QW5nZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNGaW5kOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjaGVja05laWdoYm9yaW5nc0NlbGxCeURpcmVjdGlvbnM6IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgZGlyZWN0aW9uTGVmdCA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25MZWZ0KHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbkxlZnQuaXNGaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uTGVmdDogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uTGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25MZWZ0OiBmYWxzZTtcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGlyZWN0aW9uVG9wID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvblRvcChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25Ub3AuaXNGaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uVG9wOiB0cnVlO1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25Ub3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uVG9wOiBmYWxzZTtcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGlyZWN0aW9uUmlnaHQgPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uUmlnaHQoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uUmlnaHQuaXNGaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uUmlnaHQ6IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvblJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvblJpZ2h0OiBmYWxzZTtcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGlyZWN0aW9uQm90dG9tID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbShzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25Cb3R0b20uaXNGaW5kKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uQm90dG9tOiB0cnVlO1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25Cb3R0b207XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uQm90dG9tOiBmYWxzZTtcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvbkxlZnQ6IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdHJ5TmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5TmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbkNvbCAtIHN0cDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKChuZXdQb3NpdGlvblJvdyA+PSAwKSAmJiAobmV3UG9zaXRpb25Sb3cgPD0gKHRoaXMubWFwUm93IC0gMSkpKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKCh0cnlOZXdQb3NpdGlvbkNvbCA+PSAwKSAmJiAodHJ5TmV3UG9zaXRpb25Db2wgPD0gKHRoaXMubWFwQ29sIC0gMSkpKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzRmluZDogZmluZFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY2hlY2tDZWxsQnlEaXJlY3Rpb25Ub3A6IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdHJ5TmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5TmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvblJvdyAtIHN0cDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uUm93ID49IDApICYmICh0cnlOZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgKChuZXdQb3NpdGlvbkNvbCA+PSAwKSAmJiAobmV3UG9zaXRpb25Db2wgPD0gKHRoaXMubWFwQ29sIC0gMSkpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzRmluZDogZmluZFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY2hlY2tDZWxsQnlEaXJlY3Rpb25SaWdodDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uQ29sICsgc3RwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKChuZXdQb3NpdGlvblJvdyA+PSAwKSAmJiAobmV3UG9zaXRpb25Sb3cgPD0gKHRoaXMubWFwUm93IC0gMSkpKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKCh0cnlOZXdQb3NpdGlvbkNvbCA+PSAwKSAmJiAodHJ5TmV3UG9zaXRpb25Db2wgPD0gKHRoaXMubWFwQ29sIC0gMSkpKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzRmluZDogZmluZFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b206IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdHJ5TmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5TmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvblJvdyArIHN0cDtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uUm93ID49IDApICYmICh0cnlOZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgKChuZXdQb3NpdGlvbkNvbCA+PSAwKSAmJiAobmV3UG9zaXRpb25Db2wgPD0gKHRoaXMubWFwQ29sIC0gMSkpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZpbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzRmluZDogZmluZFxuICAgICAgICB9O1xuICAgIH1cbn0iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi8uLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuLy4uL3Rvb2xzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL3JvdXRlJztcblxuLy8gVElHRVJTIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlcnNBbGdvcml0aG0gZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vINCg0LDQtNC40YPRgSDRj9GH0LXQtdC6INCyINGH0LXRgtGL0YDQtSDRgdGC0L7RgNC+0L3Riywg0YPQstC10LvQuNGH0LXQvSDQvdCwINC+0LTQvdGDLCDQtdGB0LvQuCA0INGC0L4gM1xuICAgICAgICB0aGlzLmRpc3RhbmNlVmlldyA9IDQ7XG4gICAgfVxuXG4gICAgYWN0ICh1bml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIC8vINCS0L7QvtC30LLRgNCw0YLQuNGC0Ywg0L7QsdGK0LXQutGCINGBINGB0L7RgdC10LTQvdC40LzQuCDRj9GH0LXQudC60LDQvNC4XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24gPSBSb3V0ZS5nZXROZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24obWFwLCB1bml0LCBpbmRleE9iamVjdCwgdGhpcy5kaXN0YW5jZVZpZXcpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTkVJR0hCT1JJTkdTQ0VMTElORk9STUFUSU9OOiBcIiwgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKTtcblxuICAgICAgICAvLyBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhOlxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JrQsNGA0YLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubWFwXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQodC+0YHQtdC00L3QuNC80Lgg0LrQu9C10YLQutCw0LzQuCAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0YDQsNCy0L7QuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLQuNCz0YDQsNC80LggICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllc1xuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JfQtdC80LvRkdC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgICovXG5cbiAgICAgICAvKiBpZiAodW5pdC5oZWFsdGggPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INC10LTQsFxuICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1hcC5raWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCk7XG4gICAgICAgIH0qL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQldC00LjQvCDQutC+0YDQvtCy0YNcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZVRvRm9vZCAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0LrQvtGA0L7QslxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCAtMSk7XG5cbiAgICAgICAgLy8g0K3RgtCwINGP0YfQtdC50LrQsCDRj9Cy0LvRj9C10YLRjNGB0Y8g0LrQvtGA0L7QstC+0LksINGCLtC1INCV0JTQntCZISEhXG4gICAgICAgIC8vIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXVxuICAgICAgICAvLyB1bml0LmVhdGVuKHRydWUsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40LwgaW5kZXgg0YHRitC10LTQtdC90L7QuSDQutC+0YDQvtCy0Ysg0LjQtyDQvNCw0YHRgdC40LLQsCBvYmplY3RzT25NYXBcbiAgICAgICAgbGV0IGZvb2RJbmRleCA9IG1hcC5nZXRJbmRleEZyb21PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdKTtcblxuICAgICAgICAvLyDQn9C+0LzQtdGC0LjQu9C4INGC0LjQs9GA0LAg0YfRgtC+INC+0L0g0YHRitC10Lsg0LrQvtGA0L7QstGDXG4gICAgICAgIHVuaXQuZWF0ZW4obmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBmb29kSW5kZXgpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YLQuNCz0YDQsCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQo9C00LDQu9C40Lwg0LrQvtGA0L7QstGDINC40Lcg0LjQs9GA0L7QstC+0LPQviDQvNCw0YHRgdC40LLQsFxuICAgICAgICBtYXAucmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoZm9vZEluZGV4KTtcblxuICAgICAgICBkZWxldGUgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdO1xuXG4gICAgICAgIC8vINCf0YDQuCDQv9C+0LPQu9Cw0YnQtdC90LjQuCDRgtGA0LDQstGLINC/0YDQuNCx0LDQstC40Lwg0LbQuNC30L3QuCwg0L7Qs9GA0LDQvdC40YfQuNC8INC30L3QsNGH0LXQvdC40LXQvCAxMDBcbiAgICAgICAgaWYgKHVuaXQuaGVhbHRoIDwgMTAwICkge1xuXG4gICAgICAgICAgICBpZiAodW5pdC5oZWFsdGggPiA5MCkge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKDEwMC11bml0LmhlYWx0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKHRoaXMuYWRkSGVhbHRoVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodCy0L7QsdC+0LTQvdC+0LUg0L/QtdGA0LXQvNC10YnQtdC90LjQtVxuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVGcmVlIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHt9O1xuXG4gICAgICAgIC8vIHVuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0XG5cbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDRg9Cx0LjQuyDQu9C4INC00LDQvdC90YvQuSDRgtC40LPRgCDRgtC+0LvRjNC60L4g0YfRgtC+INC60L7RgNC+0LLRgyxcbiAgICAgICAgLy8g0LXRgdC70Lgg0LTQsCwg0YLQviDQvdCwINGB0LvQtdC0LiDRiNCw0LPQtSDQv9C+0YHRgtCw0LLQuNC8INC90LAg0LXQs9C+INC80LXRgdGC0L4g0YLQsNCx0LvQuNGH0LrRg3VuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0XG4gICAgICAgIGlmICh1bml0LmlzRWF0ZW4oKSkge1xuXG4gICAgICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgICAgICBkaWVVbml0VHlwZTogdW5pdC5mb29kSW5mb3JtYXRpb24uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGRpZVVuaXRJZDogdW5pdC5mb29kSW5mb3JtYXRpb24uaWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICAgICAgZGllVW5pdC5zZXRJbmRleE9iamVjdCh1bml0LmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCk7XG5cbiAgICAgICAgICAgIG1hcC5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAgICAgbWFwLnNldENlbGwodW5pdCwgZGllVW5pdCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2xkVW5pdC5yZXNldEVhdGVuKCk7XG5cbiAgICAgICAgb2xkVW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0YEg0LfQtdC80LvQtdC5XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IERlYXRoQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2RlYXRoQWxnb3JpdGhtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGllVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuaW5kZXhPYmplY3QgPSBwYXJhbS5pbmRleE9iamVjdDtcblxuICAgICAgICB0aGlzLmFsZ29yaXRtcyA9IG5ldyBEZWF0aEFsZ29yaXRobSgpO1xuXG4gICAgICAgIHRoaXMuZGllVW5pdFR5cGUgPSBwYXJhbS5kaWVVbml0VHlwZTtcbiAgICAgICAgdGhpcy5kaWVVbml0SWQgPSBwYXJhbS5kaWVVbml0SWQ7XG5cbiAgICAgICAgdGhpcy51bml0UmVzdXJlY3Rpb25JbnRlcnZhbCA9IDM7XG4gICAgICAgIHRoaXMudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0ID0gMDtcblxuICAgICAgICAvLyB0aGlzLnNvdW5kRGllID0gbmV3IEdhbWVTb3VuZHMoXCJhdWRpby9kaWVfXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiLm1wM1wiKTtcbiAgICB9XG59XG5cbkRpZVVuaXQucHJvdG90eXBlLnNldEluZGV4T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5pbmRleE9iamVjdCA9IGluZGV4T2JqZWN0O1xufTtcblxuXG4vKipcbiAqINCg0LDQt9C90YvQtSDQtNC10LnRgdGC0LLQuNGPINC+0LHRitC10LrRgtCwXG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLmFjdGlvbiA9IGZ1bmN0aW9uIChtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgdGhpcy5hbGdvcml0bXMuYWN0KHRoaXMsIG1hcCwgaW5kZXhPYmplY3QpO1xufTtcblxuXG4vKipcbiAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAqIEBwYXJhbSB1bml0XG4gKi9cbkRpZVVuaXQucHJvdG90eXBlLnVwZGF0ZVJvd0NvbCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gICAgdGhpcy5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICB0aGlzLmlkID0gcGFyYW0uaWQ7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gcGFyYW0uY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gcGFyYW0ub2JqUG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMucG9zaXRpb25Db2wgPSBwYXJhbS5vYmpQb3NpdGlvbkNvbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqL1xuICAgIHVwZGF0ZVJvd0NvbCAodW5pdCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQktGL0LLQvtC0IEhUTUwg0L7QsdGK0LXQutGC0LBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNob3cgKCkge1xuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdiLXVuaXQgXCIrdGhpcy5jbGFzc05hbWUrXCInPjwvZGl2PlwiO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICAvKipcbiAgICAgKiBPQkogR0FNRVxuICAgICAqIEBwYXJhbSBzZXR0aW5nXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnNldHRpbmcgPSBzZXR0aW5nO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjQvCDRgNC10LbQuNC8INC40LPRgNGLXG4gICAgICAgIHRoaXMuZGV2TW9kZSA9IHNldHRpbmcuZGV2TW9kZSB8fCBmYWxzZTtcblxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40Lwg0YHQutC+0YDQvtGB0YLRjCDQuNCz0YDQvtCy0L7Qs9C+INGG0LjQutC70LBcbiAgICAgICAgdGhpcy50aW1lUmVuZGVyID0gc2V0dGluZy50aW1lUmVuZGVyIHx8IDUwMDtcblxuICAgICAgICB0aGlzLmJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItYnV0dG9uc19fYnRuLXN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuYnRuUGF1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1idXR0b25zX19idG4tcGF1c2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHQU1FIExPT1BcbiAgICAgKi9cbiAgICBydW4gKCkge1xuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC90L7QstGD0Y4g0YHRhtC10L3Rg1xuICAgICAgICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUodGhpcy5zZXR0aW5nKTtcblxuICAgICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1INC90LAg0YHRhtC10L3QtVxuICAgICAgICBpZiAoc2NlbmUuYnVpbGQoKSkge1xuXG4gICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC30LDQs9GA0YPQttC10L3QsC4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLFwi0J3QsNC20LzQuNGC0LUgJ9Cd0LDRh9Cw0YLRjCDQuNCz0YDRgycuXCIsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGxldCBsb29wO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGV2TW9kZSkge1xuXG4gICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQsiDQvtCx0YvRh9C90L7QvCDRgNC10LbQuNC80LUuJywgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQt9Cw0L/Rg9GJ0LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vINCT0LvQsNCy0L3Ri9C5IExvb3BcbiAgICAgICAgICAgICAgICAgICAgbG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lLmlzc2V0T2JqZWN0T25NYXAoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmRpZU1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgc2VsZi50aW1lUmVuZGVyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnRuUGF1c2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9vcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQvtGB0YLQsNC90L7QstC70LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzY2VuZS5pc3NldE9iamVjdE9uTWFwKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQsiDRgNC10LbQuNC80LUg0YDQsNC30YDQsNCx0L7RgtGH0LjQutCwLicsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5hY3Rpb25Pbk1hcCgpO1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9Ca0L7QvdC10YYg0LjQs9GA0YsuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPdmVyICgpIHtcbiAgICAgICAgYWxlcnQoJ0dhbWUgT3ZlcicpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9cIik7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgc2V0dGluZyBmcm9tIFwiLi9zZXR0aW5nXCI7XG5cbi8vINCf0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDQtNC+0LrRg9C80LXQvdGC0LAg0LfQsNC/0YPRgdGC0LjQvCDQuNCz0YDRg1xuJChmdW5jdGlvbiAoKSB7XG4gICAgJC5sTm90aWZ5KHtcbiAgICAgICAgYW5pbWF0aW9uOiAnc2xpZGUnLFxuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbVJpZ2h0J1xuICAgIH0pO1xuXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShzZXR0aW5nKTtcblxuICAgIGdhbWUucnVuKCk7XG59KTtcbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuaW1wb3J0IFVuaXQgZnJvbSAnLi91bml0JztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vdG9vbHMnO1xuXG4vKipcbiAqINCa0LvQsNGB0YEg0YDQsNCx0L7RgtGLINGBINC60LDRgNGC0L7QuVxuICogQHBhcmFtIHNldHRpbmdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1hcERhdGEgPSBbXTtcblxuICAgICAgICAvLyDQntCx0YrQtdC60YLRiyDQtNC70Y8g0LrQsNGA0YLRi1xuICAgICAgICB0aGlzLm1hcE9iamVjdHMgPSBzZXR0aW5nLm1hcE9iamVjdHM7XG5cbiAgICAgICAgLy8g0KHQv9C40YHQvtC6INC+0LHRitC10LrRgtC+0LIsINC60L7RgtC+0YDRi9C1INC30LDQtNC10LnRgdGC0LLQvtCy0LDQvdC90Ysg0L3QsCDQutCw0YDRgtC1XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXAgPSBuZXcgQXJyYXkoKTtcblxuICAgICAgICB0aGlzLnJvdyA9IHNldHRpbmcubWFwU2l6ZS5yb3cgfHwgMDtcbiAgICAgICAgdGhpcy5jb2wgPSBzZXR0aW5nLm1hcFNpemUuY29sIHx8IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0YHRgtGA0L7QuNC8INC/0YPRgdGC0YPRjiDQutCw0YDRgtGDINC90LAg0L7RgdC90L7QstC1INC90LDRh9Cw0LvRjNC90YvRhSBSb3cvQ29sXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMubWFwRGF0YS5wdXNoKFtdKSA8IHRoaXMucm93KSA7XG5cbiAgICAgICAgaWYgKHRoaXMubWFwRGF0YS5sZW5ndGggPT0gdGhpcy5yb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JPQtdC90LXRgNCw0YbQuNGPINC60LDRgNGC0YtcbiAgICAgKi9cbiAgICBnZW5lcmF0ZSgpIHtcblxuICAgICAgICBsZXQgb2JqSUQgPSAwO1xuXG4gICAgICAgIGZvciAobGV0IG9iamVjdE5hbWUgaW4gdGhpcy5tYXBPYmplY3RzKSB7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdE5hbWUpO1xuICAgICAgICAgICAgbGV0IG9iak1pbiA9IHRoaXMubWFwT2JqZWN0c1tvYmplY3ROYW1lXS5taW47XG4gICAgICAgICAgICBsZXQgb2JqTWF4ID0gdGhpcy5tYXBPYmplY3RzW29iamVjdE5hbWVdLm1heDtcblxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0L7QsdGK0LXQutGCINGP0LLQu9GP0LXRgtGM0YHRjyDRgdGC0LDRgtC40LrQvtC5LFxuICAgICAgICAgICAgLy8g0YLQviDQv9C+0YHRgtCw0YDQtdC80YHRjyDQtNCw0YLRjCDQv9C+INC80LDQutGB0LjQvNGD0LzRgyDQt9C90LDRh9C10L3QuNGPIG1pbi9tYXhcbiAgICAgICAgICAgIC8vINC00LvRjyDQv9C+0LvQvdC+0LPQviDQt9Cw0L/QvtC70L3QtdC90LjRjyDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXG4gICAgICAgICAgICBpZiAob2JqTWluID09PSBudWxsICYmIG9iak1heCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9iak1pbiA9ICh0aGlzLnJvdyArIHRoaXMuY29sKSAqIDI7XG4gICAgICAgICAgICAgICAgb2JqTWF4ID0gKHRoaXMucm93ICsgdGhpcy5jb2wpICogMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQutC+0Lst0LLQviDQvtCx0YrQtdC60YLQvtCyINC90LAg0LrQsNGA0YLQtVxuICAgICAgICAgICAgbGV0IG9iakNvdW50T25NYXAgPSB0b29scy5yYW5kb21JbnRlZ2VyKG9iak1pbiwgb2JqTWF4KTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvYmplY3ROYW1lW29iakNvdW50T25NYXBdOiBcIiArIG9iamVjdE5hbWUgKyBcIiBcIiArIG9iakNvdW50T25NYXApO1xuXG4gICAgICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDRjdGC0L7QvNGDINC60L7Qu9C40YfQtdCy0YHRgtCy0YNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqQ291bnRPbk1hcDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgbWFwUm93Q29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xDb29yZCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21hcFJvd0NvbE5vcm1hbDogJywgbWFwUm93Q29sKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBtYXBSb3dDb2wucm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG1hcFJvd0NvbC5jb2xcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBFbnRpdHkodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgVW5pdCh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdID0gdW5pdDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0TmFtZSA9PSAnY293cycgfHwgb2JqZWN0TmFtZSA9PSAndGlnZXJzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb09iamVjdHNPbk1hcCh1bml0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0U2V0dGluZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaklEOiBvYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cnlOZXdHZW5lcmF0ZSh1bml0U2V0dGluZywgb2JqQ291bnRPbk1hcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvYmpJRCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtCy0YLQvtGA0L3QsNGPINCz0LXQvdC10YDQsNGG0LjRjywg0LIg0YHQu9GD0YfQuNC4INC30LDQvdGP0YLQvtCz0L4g0LzQtdGB0YLQsCDQsiDQvNCw0YHRgdC40LLQtVxuICAgICAqIEBwYXJhbSBvYmplY3RTZXR0aW5nXG4gICAgICogQHBhcmFtIGNvdW50XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgdHJ5TmV3R2VuZXJhdGUob2JqZWN0U2V0dGluZywgY291bnQpIHtcblxuICAgICAgICBpZiAoY291bnQgPD0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vINCf0YDQvtC50LTQtdC80YHRjyDQv9C+INGN0YLQvtC80YMg0LrQvtC70LjRh9C10LLRgdGC0LLRg1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblxuICAgICAgICAgICAgLy8g0YHQvtC30LTQsNC00LjQvCDQutC+0L7RgNC00LjQvdCw0YLRiyDQtNC70Y8g0L/RgNC+0YHRgtCw0LLQu9C10L3QuNGPXG4gICAgICAgICAgICBsZXQgbWFwUm93Q29sID0gdGhpcy5nZXRSYW5kb21Sb3dDb2xDb29yZCgpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFwUm93Q29sUmVjdXJzaXZlOiAnLCBtYXBSb3dDb2wpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tYXBEYXRhW21hcFJvd0NvbC5yb3ddW21hcFJvd0NvbC5jb2xdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogb2JqZWN0U2V0dGluZy5vYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBtYXBSb3dDb2wucm93LFxuICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogbWFwUm93Q29sLmNvbFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsZXQgdW5pdDtcblxuICAgICAgICAgICAgICAgIGlmIChvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUgPT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IEVudGl0eSh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgVW5pdCh1bml0UGFyYW0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09ICdjb3dzJyB8fCBvYmplY3RTZXR0aW5nLm9iamVjdE5hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb09iamVjdHNPbk1hcCh1bml0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdW5pdFNldHRpbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaklEOiBvYmplY3RTZXR0aW5nLm9iaklELFxuICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3RTZXR0aW5nLm9iamVjdE5hbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyeU5ld0dlbmVyYXRlKHVuaXRTZXR0aW5nLCBjb3VudCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9GM0L3Ri9C1INC60L7QvtGA0LTQuNC90LDRgtGLINC90LAg0L7RgdC90L7QstC1INC60L7Quy3QstC+INGB0YLRgNC+0Log0Lgg0LrQvtC70L7QvdC+0LpcbiAgICAgKiBAcmV0dXJucyB7e3JvdzogKiwgY29sOiAqfX1cbiAgICAgKi9cbiAgICBnZXRSYW5kb21Sb3dDb2xDb29yZCgpIHtcbiAgICAgICAgbGV0IGNvdW50Um93ID0gdGhpcy5yb3csXG4gICAgICAgICAgICBjb3VudENvbCA9IHRoaXMuY29sO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3c6IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgY291bnRSb3cpLFxuICAgICAgICAgICAgY29sOiB0b29scy5yYW5kb21JbnRlZ2VyKDAsIGNvdW50Q29sKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNoZWNrUm91dGUgKCkge1xuXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgdGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcblxuICAgIH1cbiAgICBcbiAgICBnZXRSYW5kb21Sb3dDb2xCYXNlZE9uVW5pdChjZWxsLCBzdGVwcykge1xuICAgICAgICBsZXQgaXNzZXRSb3V0ZSA9IHRoaXMudHJ5Um91dGUoc3RlcHMpO1xuXG5cblxuXG4gICAgICAgIC8vIGxldCByb3dNaW4gPSAoKGNlbGwucG9zaXRpb25Sb3cgLSAxKSA+PSAwKSA/IChjZWxsLnBvc2l0aW9uUm93IC0gMSkgOiAwO1xuICAgICAgICAvLyBsZXQgcm93TWF4ID0gKChjZWxsLnBvc2l0aW9uUm93ICsgMSkgPD0gdGhpcy5yb3cpID8gKGNlbGwucG9zaXRpb25Sb3cgKyAxKSA6IHRoaXMucm93O1xuXG4gICAgICAgIC8vIGxldCBjb2xNaW4gPSAoKGNlbGwucG9zaXRpb25Db2wgLSAxKSA+PSAwKSA/IChjZWxsLnBvc2l0aW9uUm93IC0gMSkgOiAwO1xuICAgICAgICAvLyBsZXQgY29sTWF4ID0gKChjZWxsLnBvc2l0aW9uQ29sICsgMSkgPD0gdGhpcy5jb2wpID8gKGNlbGwucG9zaXRpb25Db2wgKyAxKSA6IHRoaXMuY29sO1xuXG4gICAgICAgIC8vIGxldCBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgLy8gICAgIG5ld1Bvc2l0aW9uQ29sO1xuICAgICAgICAvL1xuICAgICAgICAvLyBuZXdQb3NpdGlvblJvdyA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUocm93TWluLCByb3dNYXgsIGNlbGwucG9zaXRpb25Sb3cpO1xuICAgICAgICAvLyBuZXdQb3NpdGlvbkNvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUoY29sTWluLCBjb2xNYXgsIGNlbGwucG9zaXRpb25Sb3cpO1xuXG4gICAgICAgIC8vIHJldHVybiB7XG4gICAgICAgIC8vICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgIC8vICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2xcbiAgICAgICAgLy8gfVxuICAgIH07XG5cbiAgICBnZXRSYW5kb21Sb3dDb2xXaXRoRXhjbHVkZShtaW5DZWxsLCBtYXhDZWxsLCBleGNsdWRlVmFsdWUpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIHZhbHVlID0gdG9vbHMucmFuZG9tSW50ZWdlcihtaW5DZWxsLCBtYXhDZWxsKTtcblxuICAgICAgICB3aGlsZSAodmFsdWUgPT0gZXhjbHVkZVZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvb2xzLnJhbmRvbUludGVnZXIobWluQ2VsbCwgbWF4Q2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuXG4gICAgZ2V0TmV3Um93Q29sUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvblJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGT1IgTkVXIFVOSVQgR0VORVJFVEUgTkVXIFBPU0lUSU9OOiBUUllbXCIgKyAoaSsrKSArIFwiXSAtPiBbUihcIiArIG5ld1Bvc2l0aW9uUm93Q29sLnJvdyArIFwiKTpDKFwiICsgbmV3UG9zaXRpb25Sb3dDb2wuY29sICsgXCIpXVwiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWFwRGF0YVtuZXdQb3NpdGlvblJvd0NvbC5yb3ddW25ld1Bvc2l0aW9uUm93Q29sLmNvbF0uY2xhc3NOYW1lID09PSBcImdyb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Bvc2l0aW9uUm93Q29sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0cnVlKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0LTQuNC8INGP0YfQtdC50LrRg1xuICAgICAqIEBwYXJhbSBvbGRVbml0XG4gICAgICogQHBhcmFtIG5ld1VuaXRcbiAgICAgKi9cbiAgICBzZXRDZWxsKG9sZFVuaXQsIG5ld1VuaXQpIHtcblxuICAgICAgICB0aGlzLm1hcERhdGFbb2xkVW5pdC5wb3NpdGlvblJvd11bb2xkVW5pdC5wb3NpdGlvbkNvbF0gPSBuZXdVbml0O1xuXG4gICAgICAgIHRoaXMubWFwRGF0YVtvbGRVbml0LnBvc2l0aW9uUm93XVtvbGRVbml0LnBvc2l0aW9uQ29sXS51cGRhdGVSb3dDb2wob2xkVW5pdCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0Y/Rh9C10LnQutGDXG4gICAgICogQHBhcmFtIHBvc2l0aW9uUm93XG4gICAgICogQHBhcmFtIHBvc2l0aW9uQ29sXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0Q2VsbChwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwRGF0YVtwb3NpdGlvblJvd11bcG9zaXRpb25Db2xdO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIGFkZFRvT2JqZWN0c09uTWFwKHVuaXQpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXAucHVzaCh1bml0KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvRj9C10YIgVW5pdCDQuNC3INC80LDRgdGB0LjQstCwIE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICovXG4gICAgcmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXAuc3BsaWNlKGluZGV4T2JqZWN0LCAxKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvRj9C10YIgVW5pdCDQuNC3INC80LDRgdGB0LjQstCwIERpZU9iamVjdHNPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINGB0LzQtdGA0YLQuCB1bml0c1xuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqIEByZXR1cm5zIHsqW119XG4gICAgICovXG4gICAgcmVtb3ZlVW5pdEZyb21EaWVPYmplY3RzT25NYXAoaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXAuc3BsaWNlKGluZGV4T2JqZWN0LCAxKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQntCx0L3QvtCy0LjQvCDQtNC70Y8gVW5pdCDQtdCz0L4gUkMoUm93L0NvbCkg0LIg0LzQsNGB0YHQuNCy0LUgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICB1cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAodW5pdCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9C40Lwg0L7QsdGK0LXQutGCXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBraWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIHRoaXMucmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAoaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40Lwg0LzQvtCz0LjQu9C60YNcbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZGllVW5pdFR5cGU6IHVuaXQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgZGllVW5pdElkOiB1bml0LmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgIHRoaXMuc2V0Q2VsbCh1bml0LCBkaWVVbml0KTtcblxuICAgICAgICB0aGlzLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGllT2JqZWN0c09uTWFwKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINC70Lgg0LXRidC1INC+0LHRitC10LrRgtGLINCyINC80LDRgdGB0LjQstC1INC00LvRjyDRgdGD0YnQtdCy0YHRgtCy0L7QstCw0L3QuNGPINC40LPRgNGLXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBpc3NldE9iamVjdE9uTWFwKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMub2JqZWN0c09uTWFwLmxlbmd0aCA+IDAgPyAxIDogMCk7XG4gICAgfTtcblxuXG4vLyDQn9GA0L7QstC10YDQuNC8INGB0L7RgdC10LTQvdC40Lgg0LrQu9C10YLQutC4ICtcbiAgICBjaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsKHVuaXQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdW5pdC5jbGFzc05hbWUgPT0gJ3RpZ2VycydcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICB1bml0LmNsYXNzTmFtZSA9PSAnY293cydcbiAgICAgICAgKSB7XG5cbiAgICAgICAgICAgIGxldCBjZWxscyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd0b3BSaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodEJvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdEJvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnRUb3AnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uUm93ID0gcGFyc2VJbnQodW5pdC5wb3NpdGlvblJvdyk7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ29sID0gcGFyc2VJbnQodW5pdC5wb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICAvLyBsZXQgbWFwRGF0ZSA9IHRoaXMubWFwRGF0YTtcblxuICAgICAgICAgICAgLy8g0J3QtSDQt9Cw0LHRi9GC0Ywg0L/RgNC+INCz0YDQsNC90LjRhtGLINC60LDRgNGC0YtcbiAgICAgICAgICAgIGxldCBib3JkZXIgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHRvcFJpZ2h0OiB0aGlzLmNvbCxcbiAgICAgICAgICAgICAgICByaWdodDogdGhpcy5jb2wsXG4gICAgICAgICAgICAgICAgcmlnaHRCb3R0b206IHRoaXMuY29sLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5yb3csXG4gICAgICAgICAgICAgICAgbGVmdEJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGxlZnRUb3A6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXBEYXRlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUEw6XCIsIHVuaXRQb3NpdGlvblJvdywgdW5pdFBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgLy8gVE9QINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0LLQtdGA0YXRgyArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3ApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1swXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbMF0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgLSAxXVt1bml0UG9zaXRpb25Db2xdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFRPUF9SSUdIVCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstCy0LXRgNGF0YMt0LLQv9GA0LDQstC+ICtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uUm93IC0gMSkgPj0gYm9yZGVyLnRvcFxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCArIDEpIDwgYm9yZGVyLnRvcFJpZ2h0XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1sxXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbMV0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgLSAxXVt1bml0UG9zaXRpb25Db2wgKyAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBSSUdIVCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstC/0YDQsNCy0L4gK1xuICAgICAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci5yaWdodCkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzJdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1syXS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvd11bdW5pdFBvc2l0aW9uQ29sICsgMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gUklHSFRfQk9UVE9NINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINCy0L/RgNCw0LLQvi3QstC90LjQt9GDICtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uUm93ICsgMSkgPCBib3JkZXIuYm90dG9tXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIucmlnaHRCb3R0b21cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzNdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1szXS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyArIDFdW3VuaXRQb3NpdGlvbkNvbCArIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIEJPVFRPTSDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDQstC90LjQt9GDICtcbiAgICAgICAgICAgIGlmICgodW5pdFBvc2l0aW9uUm93ICsgMSkgPCBib3JkZXIuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbNF0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzRdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93ICsgMV1bdW5pdFBvc2l0aW9uQ29sXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBMRUZUX0JPVFRPTSDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDRgdC70LXQstCwLdCy0L3QuNC30YMgK1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgKyAxKSA8IGJvcmRlci5ib3R0b21cbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgLSAxKSA+PSBib3JkZXIubGVmdEJvdHRvbVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbNV0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzVdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93ICsgMV1bdW5pdFBvc2l0aW9uQ29sIC0gMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTEVGVCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDRgdC70LXQstCwICtcbiAgICAgICAgICAgIGlmICgodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnQpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1s2XS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbNl0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3ddW3VuaXRQb3NpdGlvbkNvbCAtIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIExFRlRfVE9QINCf0YDQvtCy0LXRgNC40Lwg0Y/Rh9C10LnQutGDINGBINC70LXQstCwLdCy0LLQtdGA0YXRgyArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3BcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgLSAxKSA+PSBib3JkZXIubGVmdFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbN10uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzddLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93IC0gMV1bdW5pdFBvc2l0aW9uQ29sIC0gMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudW5pdCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjZWxscyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJPVzogXCIgKyB1bml0UG9zaXRpb25Sb3csIFwiQ09MOiBcIiArIHVuaXRQb3NpdGlvbkNvbCApO1xuXG4gICAgICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQntGC0YTQuNC70YzRgtGA0YPQtdC8INGP0YfQtdC50LrQuCDQv9C+INGC0LjQv9GDIHVuaXRUeXBlXG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxcbiAgICAgKiBAcGFyYW0gdW5pdFR5cGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCB1bml0VHlwZSkge1xuXG4gICAgICAgIGxldCBhcnIgPSBbXTtcblxuICAgICAgICAvLyDQn9C10YDQtdCx0LXRgNC10Lwg0L/QvtC70YPRh9C10L3QvdGL0Lkg0LzQsNGB0YHQuNCyINGBINGP0YfQtdC50LrQsNC80Lgg0L3QsNGF0L7QtNGP0YnQuNC80LjRgdGPINGA0Y/QtNC+0LxcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZWlnaGJvcmluZ3NDZWxsLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vINCv0YfQtdC50LrQsCDQvdC1INCy0YvRhdC+0LTQuNGCINC30LAg0LPRgNCw0L3QuNGG0YtcbiAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmV4aXN0KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5jb250ZW50LmNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudC5jbGFzc05hbWUgPT0gdW5pdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0LjQvdC00LXQutGBINC60L7RgNC+0LLRiyDQv9GA0Lgg0LXQtSDRgdGK0LXQtNCw0L3QuNC4XG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEluZGV4RnJvbU9iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLm9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Sb3cgPT0gdW5pdC5wb3NpdGlvblJvd1xuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uQ29sID09IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleE9iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuLy9NQVAgREVBVEggTUFOQUdFXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0LjQvdC00LXQutGBINC60L7RgNC+0LLRiyDQv9GA0Lgg0LXQtSDRgdGK0LXQtNCw0L3QuNC4XG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLmRpZU9iamVjdHNPbk1hcC5sZW5ndGg7IGluZGV4T2JqZWN0KyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0ucG9zaXRpb25Sb3cgPT0gdW5pdC5wb3NpdGlvblJvd1xuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uQ29sID09IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleE9iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZERpZVVuaXRUb0RpZUFycmF5KHVuaXQpIHtcbiAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXAucHVzaCh1bml0KTtcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBNYXAgZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9zZXR0aW5nJztcblxuLyoqXG4gKiDQmNCz0YDQvtCy0LDRjyDRgdGG0LXQvdCwXG4gKiBAcGFyYW0gc2V0dGluZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWdhbWVfX3BsYWluJyk7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChzZXR0aW5nKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCf0YDQvtC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0LrQsNGA0YLRgyDQuCDQt9Cw0L/QvtC70L3QuNC8INC10LUg0L7QsdGK0LXQutGC0LDQvNC4XG4gICAgICovXG4gICAgYnVpbGQgKCkge1xuXG4gICAgICAgIGlmICh0aGlzLm1hcC5pbml0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZW5lcmF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7RgtGA0LjRgdC+0LLQutCwINC30LDQv9C+0LvQvdC10L3QvdC+0Lkg0LrQsNGA0YLRi1xuICAgICAqL1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGxldCBtYXBIVE1MID0gJyc7XG5cblxuICAgICAgICAvLyDQn9C+0YHRgtGA0L7QuNC8INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1XG4gICAgICAgIGZvciAobGV0IHBvc2l0aW9uUm93ID0gMDsgcG9zaXRpb25Sb3cgPCB0aGlzLm1hcC5yb3c7IHBvc2l0aW9uUm93KyspIHtcbiAgICAgICAgICAgIG1hcEhUTUwgKz0gXCI8ZGl2IGNsYXNzPSdyb3cnPlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgcG9zaXRpb25Db2wgPSAwOyBwb3NpdGlvbkNvbCA8IHRoaXMubWFwLmNvbDsgcG9zaXRpb25Db2wrKykge1xuXG4gICAgICAgICAgICAgICAgLy8gREVWIE1PREVcbiAgICAgICAgICAgICAgICBsZXQgY2VsbENvb3JkaW5hdGUgPSBcIjxkaXYgY2xhc3M9J2NlbGxDb29yZGluYXRlJz5cIiArIHBvc2l0aW9uUm93ICsgXCIgOiBcIiArIHBvc2l0aW9uQ29sICsgXCI8L2Rpdj5cIjtcblxuICAgICAgICAgICAgICAgIG1hcEhUTUwgKz0gXCI8ZGl2IGNsYXNzPSdjZWxsJz5cIiArIGNlbGxDb29yZGluYXRlICsgXCIgXCIgKyB0aGlzLm1hcC5nZXRDZWxsKHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkuc2hvdygpICsgXCI8L2Rpdj5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcEhUTUwgKz0gXCI8L2Rpdj5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNC8INGB0L7QsdGA0LDQvdC90YPRjiBIVE1MINC60LDRgNGC0YMg0LIgRE9NXG4gICAgICAgIHRoaXMucGxhaW4uaW5uZXJIVE1MID0gbWFwSFRNTDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQlNC10LnRgdGC0LLQuNGPINCy0YHQtdGFINC+0LHRitC10LrRgtC+0LIg0L3QsCDQutCw0YDRgtC1XG4gICAgICovXG4gICAgYWN0aW9uT25NYXAgKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hcC5vYmplY3RzT25NYXApO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLm1hcC5vYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLmFjdGlvbih0aGlzLm1hcCwgaW5kZXhPYmplY3QpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRpZU1hbmFnZXIgKCkge1xuICAgICAgICBpZiAodGhpcy5tYXAuZGllT2JqZWN0c09uTWFwLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4T2JqZWN0ID0gMDsgaW5kZXhPYmplY3QgPCB0aGlzLm1hcC5kaWVPYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5hY3Rpb24odGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0LvQuCDQtdGJ0LUg0L7QsdGK0LXQutGC0Ysg0LIg0LzQsNGB0YHQuNCy0LUg0LTQu9GPINGB0YPRidC10LLRgdGC0LLQvtCy0LDQvdC40Y8g0LjQs9GA0YtcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGlzc2V0T2JqZWN0T25NYXAgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaXNzZXRPYmplY3RPbk1hcCgpO1xuICAgIH07XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJcbi8vIFBST0Rcbi8qZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVDb250YWluZXJJRDogJ2ItZ2FtZScsXG4gICAgbWFwU2l6ZToge1xuICAgICAgICByb3c6IDksXG4gICAgICAgIGNvbDogMjNcbiAgICB9LFxuICAgIG1hcE9iamVjdHM6IHtcbiAgICAgICAgZ3Jhc3M6IHtcbiAgICAgICAgICAgIG1pbjogOTAsXG4gICAgICAgICAgICBtYXg6IDE3NVxuICAgICAgICB9LFxuICAgICAgICBjb3dzOiB7XG4gICAgICAgICAgICBtaW46IDE1LFxuICAgICAgICAgICAgbWF4OiAyMFxuICAgICAgICB9LFxuICAgICAgICB0aWdlcnM6IHtcbiAgICAgICAgICAgIG1pbjogMyxcbiAgICAgICAgICAgIG1heDogNlxuICAgICAgICB9LFxuICAgICAgICBncm91bmQ6IHtcbiAgICAgICAgICAgIG1pbjogbnVsbCxcbiAgICAgICAgICAgIG1heDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkZXZNb2RlOiBmYWxzZSxcbiAgICB0aW1lUmVuZGVyOiA1MDBcbn07Ki9cblxuLy8gREVWXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZUNvbnRhaW5lcklEOiAnYi1nYW1lJyxcbiAgICBtYXBTaXplOiB7XG4gICAgICAgIHJvdzogNixcbiAgICAgICAgY29sOiA2XG4gICAgfSxcbiAgICBtYXBPYmplY3RzOiB7XG4gICAgICAgIGdyYXNzOiB7XG4gICAgICAgICAgICBtaW46IDcsXG4gICAgICAgICAgICBtYXg6IDEzXG4gICAgICAgIH0sXG4gICAgICAgIGNvd3M6IHtcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogNVxuICAgICAgICB9LFxuICAgICAgICB0aWdlcnM6IHtcbiAgICAgICAgICAgIG1pbjogMixcbiAgICAgICAgICAgIG1heDogNFxuICAgICAgICB9LFxuICAgICAgICBncm91bmQ6IHtcbiAgICAgICAgICAgIG1pbjogbnVsbCxcbiAgICAgICAgICAgIG1heDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkZXZNb2RlOiBmYWxzZSxcbiAgICB0aW1lUmVuZGVyOiAxNTMwXG59O1xuXG4iLCIvLyBBVURJTyBJTiBHQU1FXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU291bmRzIHtcbiAgICBjb25zdHJ1Y3RvcihmaWxlKSB7XG4gICAgICAgIHRoaXMuc291bmQgPSBuZXcgQXVkaW8oZmlsZSk7ICAgXG4gICAgfVxuXG4gICAgcGxheSAoKSB7XG4gICAgICAgIHRoaXMuc291bmQucGxheSgpO1xuICAgIH07XG5cbiAgICAvLyDQpNGD0L3QutGG0LjRjyBzdG9wINC00LvRjyBBdWRpbzpcbiAgICBzdG9wICgpIHtcbiAgICAgICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xuICAgICAgICB0aGlzLnNvdW5kLmN1cnJlbnRUaW1lID0gMC4wO1xuICAgIH07XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIvLyDQktGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdGL0LUg0YTRg9C90LrRhtC40Lgg0LTQu9GPINC40LPRgNGLXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNC+0YnRj9C10YIg0YHQu9GD0YfQsNC50L3QvtC1INGH0LjRgdC70L4g0LIg0LTQuNCw0L/QsNC30L7QvdC1IE1pbi9NYXhcbiAgICAgKiBAcGFyYW0gbWluXG4gICAgICogQHBhcmFtIG1heFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJhbmRvbUludGVnZXI6IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cbn07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCBHcmFzc0FsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS9ncmFzc0FsZ29yaXRobSc7XG5pbXBvcnQgQ293c0FsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS9jb3dzQWxnb3JpdGhtJztcbmltcG9ydCBUaWdlcnNBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vdGlnZXJzQWxnb3JpdGhtJztcbmltcG9ydCBHcm91bmRBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZ3JvdW5kQWxnb3JpdGhtJztcbmltcG9ydCBHYW1lU291bmRzIGZyb20gJy4vc291bmQnO1xuXG4vKipcbiAqINCe0YHQvdC+0LLQvdC+0Lkg0J/RgNC+0YLQvtGC0LjQvyDQvtCx0YrQtdC60YLQsCDQvdCwINC60LDRgNGC0LVcbiAqIEBwYXJhbSBjbGFzc05hbWVcbiAqIEBwYXJhbSBpZFxuICogQHBhcmFtIG9ialBvc2l0aW9uUm93XG4gKiBAcGFyYW0gb2JqUG9zaXRpb25Db2xcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml0IGV4dGVuZHMgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICBzdXBlcihwYXJhbSk7XG5cbiAgICAgICAgdGhpcy5mb29kVHlwZSA9IHRoaXMuZ2V0Rm9vZFR5cGUoKTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuZW5lbXkgPSAocGFyYW0uY2xhc3NOYW1lID09ICdjb3dzJyA/ICd0aWdlcnMnIDogbnVsbCk7XG5cbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24gPSB7XG4gICAgICAgICAgICBpc0VhdDogZmFsc2UsXG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBudWxsLFxuICAgICAgICAgICAgaW5kZXhPYmplY3Q6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNvdW5kRWF0ID0gbmV3IEdhbWVTb3VuZHMoXCJhdWRpby9lYXRfXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiLm1wM1wiKTtcblxuICAgICAgICAvLyDQktGL0LHQtdGA0LjQvCDQsNC70LPQvtGA0LjRgtC8INC/0L7QstC10LTQtdC90LjRjyDQtNC70Y8g0L7QsdGK0LXQutGC0LBcbiAgICAgICAgdGhpcy5hbGdvcml0bXMgPSB0aGlzLnNlbGVjdEFsZ29yaXRobShwYXJhbS5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLRi9Cy0L7QtCBIVE1MINC+0LHRitC10LrRgtCwXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzaG93KCkge1xuICAgICAgICBsZXQgdW5pdEhlYWx0aCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3NOYW1lID09ICdjb3dzJyB8fCB0aGlzLmNsYXNzTmFtZSA9PSAndGlnZXJzJykge1xuICAgICAgICAgICAgbGV0IGNsYXNzSGVhbHRoQ29sb3IgPSB0aGlzLmdldENsYXNzSGVhbHRoQ29sb3IodGhpcy5oZWFsdGgpO1xuXG4gICAgICAgICAgICB1bml0SGVhbHRoICs9IFwiPGRpdiBjbGFzcz0nYi11bml0X19oZWFsdGgnPjxkaXYgY2xhc3M9J2ItaGVhbHRfX2luZGljYXRvciBcIiArIGNsYXNzSGVhbHRoQ29sb3IgKyBcIicgc3R5bGU9J3dpZHRoOiBcIiArIHRoaXMuaGVhbHRoICsgXCIlOyc+PC9kaXY+PC9kaXY+XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdiLXVuaXQgXCIgKyB0aGlzLmNsYXNzTmFtZSArIFwiJz5cIiArIHVuaXRIZWFsdGggKyBcIjwvZGl2PlwiO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGG0LLQtdGCKNC60LvQsNGB0YEpINC20LjQt9C90LggdW5pdFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2xhc3NIZWFsdGhDb2xvcih2YWx1ZSkge1xuXG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gOTAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtZ29vZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gNzUgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDkwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1hYm92ZS1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSA1MCAmJiBwYXJzZUludCh2YWx1ZSkgPD0gNzUpIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDI1ICYmIHBhcnNlSW50KHZhbHVlKSA8PSA1MCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYmVsb3ctYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gMCAmJiBwYXJzZUludCh2YWx1ZSkgPD0gMjUpIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWxvd1wiO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQoNCw0LfQvdGL0LUg0LTQtdC50YHRgtCy0LjRjyDQvtCx0YrQtdC60YLQsFxuICAgICAqL1xuICAgIGFjdGlvbihtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuYWxnb3JpdG1zLmFjdCh0aGlzLCBtYXAsIGluZGV4T2JqZWN0KTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRhtC10LvRjCDRgNCw0LTQuCDQutC+0YLQvtGA0L7QuSDQttC40LLQtdGCIFVuaXQgOilcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRGb29kVHlwZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY293cyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdncmFzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aWdlcnMnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnY293cyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JLQtdGA0L3QtdGCINC00LvRjyDQvtCx0YrQtdC60YLQsCDQtdCz0L4g0LDQu9Cz0L7RgNC40YLQvCDQv9C+0LLQtdC00LXQvdC40Y8g0LIg0LjQs9GA0LVcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzZWxlY3RBbGdvcml0aG0oaWQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDAgLSBncmFzc1xuICAgICAgICAgKiAxIC0gY293c1xuICAgICAgICAgKiAyIC0gdGlnZXJzXG4gICAgICAgICAqIDMgLSBncm91bmRcbiAgICAgICAgICogNCAtIGRlYXRoXG4gICAgICAgICAqL1xuXG4gICAgICAgIHN3aXRjaCAocGFyc2VJbnQoaWQpKSB7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyYXNzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb3dzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUaWdlcnNBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyb3VuZEFsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4vLyDQodGK0LXQtNC10L1cbiAgICBpc0VhdGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQ7XG4gICAgfTtcblxuLy8g0KHRitC10LTQtdC9XG4gICAgZWF0ZW4odW5pdCwgZm9vZEluZGV4KSB7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0ID0gZm9vZEluZGV4O1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5jbGFzc05hbWUgPSB1bml0LmNsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaWQgPSB1bml0LmlkO1xuICAgIH07XG5cbi8vIFJFU0VUINCh0YrQtdC00LXQvVxuICAgIHJlc2V0RWF0ZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvblJvdyA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3QgPSBudWxsO1xuICAgIH07XG5cbiAgICBhZGRIZWFsdGgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggKz0gcGFyc2VJbnQodmFsdWUpO1xuICAgIH07XG5cbiAgICBzdWJIZWFsdGgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gcGFyc2VJbnQodmFsdWUpO1xuICAgIH07XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIl0sInNvdXJjZVJvb3QiOiIifQ==