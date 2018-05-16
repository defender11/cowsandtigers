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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vY293c0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL3JvdXRlLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi90b29scy5qcyIsIndlYnBhY2s6Ly8vLi91bml0LmpzIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsImFkZEhlYWx0aFZhbHVlIiwic3ViSGVhbHRoVmFsdWUiLCJ1bml0IiwibWFwIiwiaW5kZXhPYmplY3QiLCJuZWlnaGJvcmluZ3NDZWxsIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQiLCJjaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsIiwiZmlsdGVyQ2VsbEJ5VHlwZSIsImZvb2RUeXBlIiwiZW5lbXkiLCJDb3dzQWxnb3JpdGhtIiwiZGlzdGFuY2VWaWV3IiwiZGF0YSIsImdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiIsImNlbGxSYW5kb21Sb3dDb2wiLCJyYW5kb21JbnRlZ2VyIiwibGVuZ3RoIiwib2xkVW5pdCIsInVuaXRQYXJhbSIsImlkIiwiY2xhc3NOYW1lIiwib2JqUG9zaXRpb25Sb3ciLCJwb3NpdGlvblJvdyIsIm9ialBvc2l0aW9uQ29sIiwicG9zaXRpb25Db2wiLCJzZXRDZWxsIiwidXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwIiwic3ViSGVhbHRoIiwiZGllVW5pdFR5cGUiLCJkaWVVbml0SWQiLCJkaWVVbml0IiwiYWRkRGllVW5pdFRvRGllQXJyYXkiLCJoZWFsdGgiLCJhZGRIZWFsdGgiLCJEZWF0aEFsZ29yaXRobSIsImRlYXRoVW5pdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsIiwibmV3UG9zaXRpb24iLCJnZXROZXdSb3dDb2xQb3NpdGlvbiIsInJvdyIsImNvbCIsIm5ld1VuaXQiLCJkaWVPYmplY3RzT25NYXBJbmRleCIsImdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCIsImVudGl0eVBhcmFtIiwiYWRkVG9PYmplY3RzT25NYXAiLCJyZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcCIsIkdyYXNzQWxnb3JpdGhtIiwiR3JvdW5kQWxnb3JpdGhtIiwibWFwUm93IiwibWFwQ29sIiwiREVCVUciLCJnZXROZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJzdGVwcyIsImNvbnNvbGUiLCJsb2ciLCJtYXBEYXRhIiwibmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uIiwic3RlcCIsImdldE5laWdoYm9yaW5nc0NlbGwiLCJwYXJhbSIsImNlbGxzSW5mbyIsInB1c2giLCJuZWlnaGJvcmluZ3NDZWxsSW5mbyIsInVuaXRTaWRlcyIsImdldFVuaXRBbmdsZVBvaW50cyIsInNpZGUiLCJpc3NldCIsIm5hbWUiLCJ1bml0U2lkZSIsInVuaXRQb3NpdGlvblJvdyIsInVuaXRQb3NpdGlvbkNvbCIsInBhcnNlSW50IiwibGVmdFRvcF9UT19yaWdodFRvcCIsImdldFRvcFNpZGVOZWlnaGJvcmluZ3NDZWxsIiwidW5kZWZpbmVkIiwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b20iLCJnZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20iLCJnZXRCb3R0b21TaWRlTmVpZ2hib3JpbmdzQ2VsbCIsImxlZnRCb3R0b21fVE9fbGVmdFRvcCIsImdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInN0YXJ0Q2VsbFJvdyIsImFuZ2xlU3RhcnQiLCJlbmRDZWxsQ29sIiwiYW5nbGVFbmQiLCJzdGFydENlbGxDb2wiLCJ1bml0UG9zaXRpb25DZWxsIiwic2VsZWN0UG9zaXRpb25DZWxsIiwiZ2V0Q2VsbCIsImVuZENlbGxSb3ciLCJ1bml0QW5nbGVzIiwibGVmdFRvcCIsInJpZ2h0VG9wIiwicmlnaHRCb3R0b20iLCJsZWZ0Qm90dG9tIiwiZ2V0TGVmdFRvcEFuZ2xlUG9pbnQiLCJ0b1JpZ2h0VG9wIiwiZ2V0UmlnaHRUb3BBbmdsZVBvaW50IiwidG9SaWdodEJvdHRvbSIsImdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludCIsInRvTGVmdEJvdHRvbSIsImdldExlZnRCb3R0b21BbmdsZVBvaW50IiwidG9MZWZ0VG9wIiwibmV3UG9zaXRpb25Sb3ciLCJuZXdQb3NpdGlvbkNvbCIsImFuZ2xlSXNzZXQiLCJpc1VuaXRPdXRPZkJvcmRlciIsImZpbmROZXdBbmdlbCIsImlzRmluZCIsInN0cCIsIm5ld0FuZ2VsIiwiY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zIiwiZGlyZWN0aW9uTGVmdCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdCIsImRpcmVjdGlvblRvcCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wIiwiZGlyZWN0aW9uUmlnaHQiLCJjaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0IiwiZGlyZWN0aW9uQm90dG9tIiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b20iLCJ0cnlOZXdQb3NpdGlvbkNvbCIsImZpbmQiLCJ0cnlOZXdQb3NpdGlvblJvdyIsIlRpZ2Vyc0FsZ29yaXRobSIsImZvb2RJbmRleCIsImdldEluZGV4RnJvbU9iamVjdHNPbk1hcCIsImVhdGVuIiwicmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAiLCJpc0VhdGVuIiwiZm9vZEluZm9ybWF0aW9uIiwic2V0SW5kZXhPYmplY3QiLCJyZXNldEVhdGVuIiwiRGllVW5pdCIsImFsZ29yaXRtcyIsInByb3RvdHlwZSIsImFjdGlvbiIsImFjdCIsInVwZGF0ZVJvd0NvbCIsIkVudGl0eSIsIkdhbWUiLCJzZXR0aW5nIiwiZGV2TW9kZSIsInRpbWVSZW5kZXIiLCJidG5TdGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidG5QYXVzZSIsInNjZW5lIiwiYnVpbGQiLCIkIiwibE5vdGlmeSIsInNlbGYiLCJsb29wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwiY2FsbGJhY2siLCJpc3NldE9iamVjdE9uTWFwIiwiZGllTWFuYWdlciIsImFjdGlvbk9uTWFwIiwicmVuZGVyIiwiZ2FtZU92ZXIiLCJjbGVhckludGVydmFsIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJhbmltYXRpb24iLCJwb3NpdGlvbiIsImdhbWUiLCJydW4iLCJNYXAiLCJtYXBPYmplY3RzIiwib2JqZWN0c09uTWFwIiwiQXJyYXkiLCJkaWVPYmplY3RzT25NYXAiLCJtYXBTaXplIiwib2JqSUQiLCJvYmplY3ROYW1lIiwib2JqTWluIiwibWluIiwib2JqTWF4IiwibWF4Iiwib2JqQ291bnRPbk1hcCIsImkiLCJtYXBSb3dDb2wiLCJnZXRSYW5kb21Sb3dDb2xDb29yZCIsInVuaXRTZXR0aW5nIiwidHJ5TmV3R2VuZXJhdGUiLCJvYmplY3RTZXR0aW5nIiwiY291bnQiLCJjb3VudFJvdyIsImNvdW50Q29sIiwiY2VsbCIsImlzc2V0Um91dGUiLCJ0cnlSb3V0ZSIsIm1pbkNlbGwiLCJtYXhDZWxsIiwiZXhjbHVkZVZhbHVlIiwidmFsdWUiLCJuZXdQb3NpdGlvblJvd0NvbCIsInNwbGljZSIsImNlbGxzIiwiZGlyZWN0aW9uIiwiZXhpc3QiLCJjb250ZW50IiwiYm9yZGVyIiwidG9wIiwidG9wUmlnaHQiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ1bml0VHlwZSIsImFyciIsIlNjZW5lIiwicGxhaW4iLCJpbml0IiwiZ2VuZXJhdGUiLCJtYXBIVE1MIiwiY2VsbENvb3JkaW5hdGUiLCJzaG93IiwiaW5uZXJIVE1MIiwiZ2FtZUNvbnRhaW5lcklEIiwiZ3Jhc3MiLCJjb3dzIiwidGlnZXJzIiwiZ3JvdW5kIiwiR2FtZVNvdW5kcyIsImZpbGUiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJVbml0IiwiZ2V0Rm9vZFR5cGUiLCJpc0VhdCIsInNvdW5kRWF0Iiwic2VsZWN0QWxnb3JpdGhtIiwidW5pdEhlYWx0aCIsImNsYXNzSGVhbHRoQ29sb3IiLCJnZXRDbGFzc0hlYWx0aENvbG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7O0FBQ0E7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Q0FBTDtBQUNJLDJCQUFPLCtCQUFQO0FBQ0E7QUFiUjtBQWVIOzs7OztBQUdMO2tDQUNjO0FBQ04sbUJBQU8sS0FBS2dILGVBQUwsQ0FBcUI2RyxLQUE1QjtBQUNIOzs7OztBQUVMOzhCQUNValAsSSxFQUFNK0gsUyxFQUFXO0FBQ25CLGlCQUFLSyxlQUFMLENBQXFCNkcsS0FBckIsR0FBNkIsSUFBN0I7QUFDQSxpQkFBSzdHLGVBQUwsQ0FBcUI3RyxXQUFyQixHQUFtQ3ZCLEtBQUt1QixXQUF4QztBQUNBLGlCQUFLNkcsZUFBTCxDQUFxQjNHLFdBQXJCLEdBQW1DekIsS0FBS3lCLFdBQXhDO0FBQ0EsaUJBQUsyRyxlQUFMLENBQXFCbEksV0FBckIsR0FBbUM2SCxTQUFuQztBQUNBLGlCQUFLSyxlQUFMLENBQXFCL0csU0FBckIsR0FBaUNyQixLQUFLcUIsU0FBdEM7QUFDQSxpQkFBSytHLGVBQUwsQ0FBcUJoSCxFQUFyQixHQUEwQnBCLEtBQUtvQixFQUEvQjtBQUNIOzs7OztBQUVMO3FDQUNpQjtBQUNULG1CQUFPLEtBQUtnSCxlQUFMLENBQXFCNkcsS0FBckIsR0FBNkIsS0FBcEM7QUFDQSxpQkFBSzdHLGVBQUwsQ0FBcUI3RyxXQUFyQixHQUFtQyxJQUFuQztBQUNBLGlCQUFLNkcsZUFBTCxDQUFxQjNHLFdBQXJCLEdBQW1DLElBQW5DO0FBQ0EsaUJBQUsyRyxlQUFMLENBQXFCbEksV0FBckIsR0FBbUMsSUFBbkM7QUFDSDs7O2tDQUVTdU0sSyxFQUFPO0FBQ2IsaUJBQUt4SyxNQUFMLElBQWV5QyxTQUFTK0gsS0FBVCxDQUFmO0FBQ0g7OztrQ0FFU0EsSyxFQUFPO0FBQ2IsaUJBQUt4SyxNQUFMLElBQWV5QyxTQUFTK0gsS0FBVCxDQUFmO0FBQ0g7Ozs7OztBQUlMOzs7a0JBM0pxQnNDLEkiLCJmaWxlIjoiY293c2FuZHRpZ2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHRvb2xzIGZyb20gXCIuLi90b29sc1wiO1xuaW1wb3J0IHJvdXRlIGZyb20gXCIuL3JvdXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWRkSGVhbHRoVmFsdWUgPSA1O1xuICAgICAgICB0aGlzLnN1YkhlYWx0aFZhbHVlID0gMztcbiAgICB9XG5cbiAgICBnZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQ7XG5cbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDRgdC+0YHQtdC00L3QuNC4INC60LvQtdGC0LrQuFxuICAgICAgICBuZWlnaGJvcmluZ3NDZWxsID0gbWFwLmNoZWNrVW5pdE5laWdoYm9yaW5nc0NlbGwodW5pdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINC10LTRg1xuICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAqL1xuICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QgPSBtYXAuZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCB1bml0LmZvb2RUeXBlKTtcblxuICAgICAgICBpZiAodW5pdC5lbmVteSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gVE9ETyDRgyDRgtC40LPRgNCwINC90LXRgiDQstGA0LDQs9C+0LJcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0LLRgNCw0LPQvtCyKNGC0LjQs9GA0L7QsilcbiAgICAgICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICAgICAqICovXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMgPSBtYXAuZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCB1bml0LmVuZW15KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDRgdCy0L7QsdC+0LTQvdGL0LUg0Y/Rh9C10LnQutC4INC60YPQtNCwINC80L7QttC90L4g0L/QtdGA0LXQvNC10YHRgtC40YLRjNGB0Y9cbiAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgKi9cbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQgPSBtYXAuZmlsdGVyQ2VsbEJ5VHlwZShuZWlnaGJvcmluZ3NDZWxsLCBcImdyb3VuZFwiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbDogbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZDogbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZDogbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi8uLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuLy4uL3Rvb2xzJztcblxuLy8gQ09XUyBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ293c0FsZ29yaXRobSAgZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyBDZWxsIERpc3RhbmNlXG4gICAgICAgIHRoaXMuZGlzdGFuY2VWaWV3ID0gMTtcbiAgICB9XG5cbiAgICBhY3QgKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhOlxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KHQvtGB0LXQtNC90LjQvNC4INC60LvQtdGC0LrQsNC80LggIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotGA0LDQstC+0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0LjQs9GA0LDQvNC4ICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXNcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCX0LXQvNC70ZHQuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qaWYgKHVuaXQuaGVhbHRoID4gMCkge1xuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INCi0LjQs9GA0YtcbiAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy/QldGB0LvQuCDQtdGB0YLRjCDRgdCy0L7QsdC+0LTQvdGL0LUg0LrQu9C10YLQutC4XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQkdC10LbQuNC8INC+0YIg0KLQuNCz0YDQsFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVBd2F5RnJvbUVuZW15KG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL9CV0YHQu9C4INC10YHRgtGMINGA0Y/QtNC+0Lwg0YLRgNCw0LLQsCDQtdC00LjQvCDQtdC1INC4INGD0LHQtdCz0LDQtdC8XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Gb29kKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0LXQtNCwXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Gb29kKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUZyZWUobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXAua2lsbFVuaXQodW5pdCwgaW5kZXhPYmplY3QpO1xuICAgICAgICB9Ki9cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JHQtdC20LjQvCDQvtGCINGC0LjQs9GA0LAgK1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVBd2F5RnJvbUVuZW15IChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICAvLyDQodC+0YXRgNCw0L3QuNC8INGB0YLQsNGA0YvQuSBVbml0INC4INC10LPQviBSQyAoUm93L0NvbClcbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbCDQuCDQt9Cw0L/QuNGI0LjQvCDQsiDQvdC+0LLRg9GOINGP0YfQtdC50LrRgyDQutC+0YDQvtCy0YNcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJvdy9Db2wg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQoi7QuiDQvNGLINGD0LHQtdCz0LDQtdC8INC4INC90LUg0LXQtNC40Lwg0YLRgNCw0LLRgywg0L7RgtC90LjQvNC40Lwg0L3QtdC80L3QvtCz0L4g0LfQtNC+0YDQvtCy0YzRj1xuICAgICAgICB1bml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JXQtNC40Lwg0YLRgNCw0LLRg1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlVG9Gb29kIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDQtdC00YtcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggLSAxKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7fTtcblxuICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNC8INCyINC80LXQvdC10LTQttC10YAg0YHQvNC10YDRgtC10Lkg0YLRgNCw0LLRg1xuICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkZWF0aFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGRpZVVuaXRUeXBlOiBcImdyYXNzXCIsXG4gICAgICAgICAgICBkaWVVbml0SWQ6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZGllVW5pdCA9IG5ldyBEaWVVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgbWFwLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgIC8vINCf0YDQuCDQv9C+0LPQu9Cw0YnQtdC90LjQuCDRgtGA0LDQstGLINC/0YDQuNCx0LDQstC40Lwg0LbQuNC30L3QuCwg0L7Qs9GA0LDQvdC40YfQuNC8INC30L3QsNGH0LXQvdC40LXQvCAxMDBcbiAgICAgICAgaWYgKHVuaXQuaGVhbHRoIDwgMTAwKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0LmhlYWx0aCA+IDkwKSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgoMTAwIC0gdW5pdC5oZWFsdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bml0LmFkZEhlYWx0aCh0aGlzLmFkZEhlYWx0aFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHQstC+0LHQvtC00L3QvtC1INC/0LXRgNC10LzQtdGJ0LXQvdC40LVcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlRnJlZSAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codW5pdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDRgSDQt9C10LzQu9C10LlcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgdW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiLy8gREVBVEggQUxHT1JJVE1cbmltcG9ydCBFbnRpdHkgZnJvbSAnLi8uLi9lbnRpdHknO1xuaW1wb3J0IFVuaXQgZnJvbSAnLi8uLi91bml0JztcblxuXG4vLyBHUk9VTkQgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYXRoQWxnb3JpdGhtIHtcbiAgICBhY3QgKGRlYXRoVW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICBpZiAoZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCA8IGRlYXRoVW5pdC51bml0UmVzdXJlY3Rpb25JbnRlcnZhbCkge1xuICAgICAgICAgICAgZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCsrO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSBtYXAuZ2V0TmV3Um93Q29sUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3UG9zaXRpb25Sb3dDb2wpO1xuXG4gICAgICAgICAgICB2YXIgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiBkZWF0aFVuaXQuZGllVW5pdElkLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZGVhdGhVbml0LmRpZVVuaXRUeXBlLFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBuZXdQb3NpdGlvbi5yb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uLmNvbCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBuZXdVbml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICAgICAgdmFyIGRpZU9iamVjdHNPbk1hcEluZGV4ID0gbWFwLmdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcChkZWF0aFVuaXQpO1xuXG4gICAgICAgICAgICB2YXIgZW50aXR5UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiBkZWF0aFVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IGRlYXRoVW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKGRlYXRoVW5pdCwgbmV3IEVudGl0eShlbnRpdHlQYXJhbSkpO1xuXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbChuZXdVbml0LCBuZXdVbml0KTtcblxuICAgICAgICAgICAgbWFwLmFkZFRvT2JqZWN0c09uTWFwKG5ld1VuaXQpO1xuXG4gICAgICAgICAgICBtYXAucmVtb3ZlVW5pdEZyb21EaWVPYmplY3RzT25NYXAoZGllT2JqZWN0c09uTWFwSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcblxuLy8gR1JBU1MgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXNzQWxnb3JpdGhtIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBhY3QgKCkge307XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuXG4vLyBHUk9VTkQgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZEFsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgYWN0ICgpIHt9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgdG9vbHMgZnJvbSBcIi4uL3Rvb2xzXCI7XG5cbi8vIFJvdXRlXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWFwUm93OiAwLFxuICAgIG1hcENvbDogMCxcbiAgICBERUJVRzogZmFsc2UsXG5cbiAgICBnZXROZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb246IGZ1bmN0aW9uIChtYXAsIHVuaXQsIGluZGV4T2JqZWN0LCBzdGVwcykge1xuXG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYXAubWFwRGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1bml0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1bml0KTtcblxuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uID0gW107XG5cbiAgICAgICAgdGhpcy5tYXBSb3cgPSBtYXAucm93O1xuICAgICAgICB0aGlzLm1hcENvbCA9IG1hcC5jb2w7XG5cbiAgICAgICAgLy8g0L/QvtC70YPRh9C40Lwg0LjQvdGE0L4g0L4g0YfQtdGC0YvRgNC10YUg0YHRgtC+0YDQvtC90LDRhSDQvdCwINC00LjRgdGC0LDQvdGG0LjQuCDQv9C+0LvRg9GH0LXQvdC90L7QuSDQvtGCIFVuaXRcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPCBzdGVwczsgc3RlcCsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LSBzdGVwOiAnICsgc3RlcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd8LSBzdGVwOiAnICsgc3RlcCk7XG5cbiAgICAgICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsID0gdGhpcy5nZXROZWlnaGJvcmluZ3NDZWxsKHN0ZXAsIHVuaXQsIG1hcCk7XG5cbiAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RgNCw0LLQuNC70YzQvdC+INC90LDQt9Cy0LDRgtGMIFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBzdGVwLFxuICAgICAgICAgICAgICAgICAgICBjZWxsc0luZm86IG5laWdoYm9yaW5nc0NlbGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyDQktC+0YIg0L/RgNGP0Lwg0LfQtNC10YHRjCDQv9C+0LvRg9GH0LjQvFxuICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbi5wdXNoKHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb247XG4gICAgfSxcblxuICAgIC8vINCf0L7Qu9GD0YfQuNC8INC40L3RhNC+INGB0L7RgdC10LTQvdC40YUg0Y/Rh9C10LXQuiDQvdCwINC60LDQttC00L7QuSDQuNGC0YLQtdGA0LDRhtC40LhcbiAgICBnZXROZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAoc3RlcCwgdW5pdCwgbWFwKSB7XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mbyA9IFtdO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgIC8vICAgICB1bml0LnBvc2l0aW9uUm93ID0gMDtcbiAgICAgICAgLy8gICAgIHVuaXQucG9zaXRpb25Db2wgPSAyO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8g0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YPQs9C70L7QsiBVbml0XG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAgICBsZXQgdW5pdFNpZGVzID0gdGhpcy5nZXRVbml0QW5nbGVQb2ludHMoc3RlcCwgdW5pdC5wb3NpdGlvblJvdywgdW5pdC5wb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tIHVuaXRTaWRlc1wiLCB1bml0U2lkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0J3Rg9C20L3QviDQv9C+0LvRg9GH0LjRgtGMINGP0YfQtdC50LrQuCDQvdCwINC+0YHQvdC+0LLQtSDQvdCw0LnQtNC10L3Ri9GFINGB0YLQvtGA0L7QvSEhIVxuXG4gICAgICAgIC8vINCf0YDQvtC50LTQtdC80YHRjyDQv9C+IDQt0LXQvCDRgdGC0L7RgNC+0L3QsNC8INC4INC/0L7Qu9GD0YfQuNC8INGB0L7QtNC10YDQttC40LzQvtC1INGP0YfQtdC10LosINC30LDQtNC10LnRgdGC0LLRg9C10Lwg0LzQsNGB0YHQuNCyINGBINC60LDRgNGC0L7QuSDQuNCz0YDRi1xuICAgICAgICBmb3IgKGxldCBzaWRlID0gMDsgc2lkZSA8IHVuaXRTaWRlcy5sZW5ndGg7IHNpZGUrKykge1xuXG4gICAgICAgICAgICBpZiAodW5pdFNpZGVzW3NpZGVdLmlzc2V0KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2lkZScsIHNpZGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaWRlX25hbWUnLCB1bml0U2lkZXNbc2lkZV0ubmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gU1RBUlQgc2lkZTogXCIgKyB1bml0U2lkZXNbc2lkZV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tLSBzaWRlOiBcIiwgdW5pdFNpZGVzW3NpZGVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0tIHNpZGU6IFwiLCB1bml0U2lkZXNbc2lkZV0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICB1bml0U2lkZTogdW5pdFNpZGVzW3NpZGVdLFxuICAgICAgICAgICAgICAgICAgICB1bml0UG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgIHVuaXRQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBtYXBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXJhbTogJywgcGFyYW0pO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJzZUludCh1bml0U2lkZXNbc2lkZV0uaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxlZnRUb3BfVE9fcmlnaHRUb3BcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRUb3BfVE9fcmlnaHRUb3AgPSB0aGlzLmdldFRvcFNpZGVOZWlnaGJvcmluZ3NDZWxsKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0VG9wX1RPX3JpZ2h0VG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKGxlZnRUb3BfVE9fcmlnaHRUb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByaWdodFRvcF9UT19yaWdodEJvdHRvbSA9IHRoaXMuZ2V0UmlnaHR0U2lkZU5laWdoYm9yaW5nc0NlbGwocGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHJpZ2h0VG9wX1RPX3JpZ2h0Qm90dG9tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAvLyByaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tID0gdGhpcy5nZXRCb3R0b21TaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChyaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxlZnRCb3R0b21fVE9fbGVmdFRvcFxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVmdEJvdHRvbV9UT19sZWZ0VG9wID0gdGhpcy5nZXRMZWZ0U2lkZU5laWdoYm9yaW5nc0NlbGwocGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnRCb3R0b21fVE9fbGVmdFRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChsZWZ0Qm90dG9tX1RPX2xlZnRUb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gRU5EIHNpZGU6IFwiICsgdW5pdFNpZGVzW3NpZGVdLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuXG4gICAgLy8gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qINCf0L7Qu9GD0YfQuNC8INGB0L7QtNC10YDQttC40LzQvtC1INGP0YfQtdC10Log0L/QviDRgdGC0L7RgNC+0L3QsNC8ICovXG4gICAgZ2V0VG9wU2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcbiAgICAgICAgbGV0IGVuZENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHBhcmFtLnVuaXRQb3NpdGlvblJvdyArICcnICsgcGFyYW0udW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RQb3NpdGlvbkNlbGwgPSBwYXJzZUludChzdGFydENlbGxSb3cgKyAnJyArIHN0YXJ0Q2VsbENvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UG9zaXRpb25DZWxsICE9PSBzZWxlY3RQb3NpdGlvbkNlbGwpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydENlbGxDb2wrKztcbiAgICAgICAgfSB3aGlsZSAoc3RhcnRDZWxsQ29sIDwgZW5kQ2VsbENvbCk7XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0UmlnaHR0U2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvbkNvbDtcbiAgICAgICAgbGV0IGVuZENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvblJvdztcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHBhcmFtLnVuaXRQb3NpdGlvblJvdyArICcnICsgcGFyYW0udW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RQb3NpdGlvbkNlbGwgPSBwYXJzZUludChzdGFydENlbGxSb3cgKyAnJyArIHN0YXJ0Q2VsbENvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UG9zaXRpb25DZWxsICE9PSBzZWxlY3RQb3NpdGlvbkNlbGwpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydENlbGxSb3crKztcbiAgICAgICAgfSB3aGlsZSAoc3RhcnRDZWxsUm93IDwgZW5kQ2VsbFJvdyk7XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0Qm90dG9tU2lkZU5laWdoYm9yaW5nc0NlbGw6IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvblJvdztcbiAgICAgICAgbGV0IGVuZENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZUVuZC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBsZXQgc3RhcnRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVTdGFydC5wb3NpdGlvbkNvbDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgdW5pdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHBhcmFtLnVuaXRQb3NpdGlvblJvdyArICcnICsgcGFyYW0udW5pdFBvc2l0aW9uQ29sKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RQb3NpdGlvbkNlbGwgPSBwYXJzZUludChzdGFydENlbGxSb3cgKyAnJyArIHN0YXJ0Q2VsbENvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UG9zaXRpb25DZWxsICE9PSBzZWxlY3RQb3NpdGlvbkNlbGwpIHtcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mby5wdXNoKHBhcmFtLm1hcC5nZXRDZWxsKHN0YXJ0Q2VsbFJvdywgc3RhcnRDZWxsQ29sKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydENlbGxDb2wtLTtcbiAgICAgICAgfSB3aGlsZSAoc3RhcnRDZWxsQ29sID4gZW5kQ2VsbENvbCk7XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9yaW5nc0NlbGxJbmZvO1xuICAgIH0sXG4gICAgZ2V0TGVmdFNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG4gICAgICAgIGxldCBlbmRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsUm93LS07XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbFJvdyA+IGVuZENlbGxSb3cpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0LrQvtC+0YDQtNC40L3QsNGC0YsgNC3RhSDRgdC+0YLQvtGA0L7QvSDQvdCwINC+0YHQvdC+0LLQtSBVbml0XG4gICAgICogQHBhcmFtIHN0ZXBcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Sb3dcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Db2xcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0VW5pdEFuZ2xlUG9pbnRzOiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB1bml0QW5nbGVzID0gW107XG5cbiAgICAgICAgbGV0IGxlZnRUb3AsXG4gICAgICAgICAgICByaWdodFRvcCxcbiAgICAgICAgICAgIHJpZ2h0Qm90dG9tLFxuICAgICAgICAgICAgbGVmdEJvdHRvbTtcblxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtIGdldFVuaXRBbmdsZVBvaW50czogJywgc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdFVCBsZWZ0VG9wXG4gICAgICAgIGxlZnRUb3AgPSB0aGlzLmdldExlZnRUb3BBbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBsZWZ0VG9wOiAnLCBsZWZ0VG9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdFRvcC5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9SaWdodFRvcCA9IHRoaXMuZ2V0UmlnaHRUb3BBbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b1JpZ2h0VG9wLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodFRvcCA9IHtwb3NpdGlvblJvdzogdG9SaWdodFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvUmlnaHRUb3AucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0VG9wID0ge3Bvc2l0aW9uUm93OiBsZWZ0VG9wLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogbGVmdFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyBsZWZ0VG9wXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsZWZ0VG9wX1RPX3JpZ2h0VG9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uUm93OiBsZWZ0VG9wLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IGxlZnRUb3AucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvUmlnaHRUb3AsXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiBsZWZ0VG9wLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdFVCByaWdodFRvcFxuICAgICAgICByaWdodFRvcCA9IHRoaXMuZ2V0UmlnaHRUb3BBbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSByaWdodFRvcDogJywgcmlnaHRUb3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodFRvcC5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9SaWdodEJvdHRvbSA9IHRoaXMuZ2V0UmlnaHRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b1JpZ2h0Qm90dG9tLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodEJvdHRvbSA9IHtwb3NpdGlvblJvdzogdG9SaWdodEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvUmlnaHRCb3R0b20ucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b1JpZ2h0Qm90dG9tID0ge3Bvc2l0aW9uUm93OiByaWdodFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHJpZ2h0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0VG9wXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyaWdodFRvcF9UT19yaWdodEJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogcmlnaHRUb3AucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogcmlnaHRUb3AucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvUmlnaHRCb3R0b20sXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiByaWdodFRvcC5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgcmlnaHRCb3R0b21cbiAgICAgICAgcmlnaHRCb3R0b20gPSB0aGlzLmdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gcmlnaHRCb3R0b206ICcsIHJpZ2h0Qm90dG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRCb3R0b20uaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvTGVmdEJvdHRvbSA9IHRoaXMuZ2V0TGVmdEJvdHRvbUFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRvTGVmdEJvdHRvbS5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvTGVmdEJvdHRvbSA9IHtwb3NpdGlvblJvdzogdG9MZWZ0Qm90dG9tLnBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbDogdG9MZWZ0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0Qm90dG9tID0ge3Bvc2l0aW9uUm93OiByaWdodEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHJpZ2h0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0Qm90dG9tXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyaWdodEJvdHRvbV9UT19sZWZ0Qm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uUm93OiByaWdodEJvdHRvbS5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sOiByaWdodEJvdHRvbS5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmdsZUVuZDogdG9MZWZ0Qm90dG9tLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogcmlnaHRCb3R0b20uaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIGxlZnRCb3R0b21cbiAgICAgICAgbGVmdEJvdHRvbSA9IHRoaXMuZ2V0TGVmdEJvdHRvbUFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIGxlZnRCb3R0b206ICcsIGxlZnRCb3R0b20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZWZ0Qm90dG9tLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b0xlZnRUb3AgPSB0aGlzLmdldExlZnRUb3BBbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b0xlZnRUb3AuaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRUb3AgPSB7cG9zaXRpb25Sb3c6IHRvTGVmdFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvTGVmdFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvTGVmdFRvcCA9IHtwb3NpdGlvblJvdzogbGVmdEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IGxlZnRCb3R0b20ucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bml0QW5nbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gbGVmdEJvdHRvbVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGVmdEJvdHRvbV9UT19sZWZ0VG9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uUm93OiBsZWZ0Qm90dG9tLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IGxlZnRCb3R0b20ucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvTGVmdFRvcCxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IGxlZnRCb3R0b20uaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuaXRBbmdsZXM7XG4gICAgfSxcblxuICAgIGdldExlZnRUb3BBbmdsZVBvaW50OiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdyA9IHBvc2l0aW9uUm93IC0gc3RlcDtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uQ29sID0gcG9zaXRpb25Db2wgLSBzdGVwO1xuICAgICAgICBsZXQgYW5nbGVJc3NldCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNVbml0T3V0T2ZCb3JkZXIobmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSkge1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5maW5kTmV3QW5nZWwoc3RlcCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBuZXdQb3NpdGlvbjogJywgbmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0UmlnaHRUb3BBbmdsZVBvaW50OiBmdW5jdGlvbiAoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvblJvdyA9IHBvc2l0aW9uUm93IC0gc3RlcDtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uQ29sID0gcG9zaXRpb25Db2wgKyBzdGVwO1xuICAgICAgICBsZXQgYW5nbGVJc3NldCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNVbml0T3V0T2ZCb3JkZXIobmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSkge1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5maW5kTmV3QW5nZWwoc3RlcCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb24ucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbi5wb3NpdGlvbkNvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGVJc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzc2V0OiBhbmdsZUlzc2V0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyArIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sICsgc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRMZWZ0Qm90dG9tQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyArIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sIC0gc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBpc1VuaXRPdXRPZkJvcmRlcjogZnVuY3Rpb24gKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAobmV3UG9zaXRpb25Sb3cgPCAwIHx8IG5ld1Bvc2l0aW9uUm93ID4gKHRoaXMubWFwUm93IC0gMSkpXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgKG5ld1Bvc2l0aW9uQ29sIDwgMCB8fCBuZXdQb3NpdGlvbkNvbCA+ICh0aGlzLm1hcENvbCAtIDEpKVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAobmV3UG9zaXRpb25Sb3cgPCAwIHx8IG5ld1Bvc2l0aW9uUm93ID4gKHRoaXMubWFwUm93IC0gMSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAobmV3UG9zaXRpb25Db2wgPCAwIHx8IG5ld1Bvc2l0aW9uQ29sID4gKHRoaXMubWFwQ29sIC0gMSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vINCf0L7Qv9GA0L7QsdGD0LXQvCDQvdCw0LnRgtC4INC90L7QstGD0Y4g0Y/Rh9C10LnQutGDINC/0YDQuNCx0LDQstC40LIg0LfQvdCw0YfQtdC90LjQtSDRiNCw0LPQsFxuICAgIGZpbmROZXdBbmdlbDogZnVuY3Rpb24gKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDQv9C+INGI0LDQs9Cw0Lwg0LIgNC3RhSDQvdCw0L/RgNCw0LLQu9C10L3QuNGP0YUg0Lgg0L/QvtGB0LzQvtGC0YDQuNC8LCDQv9C+0L/QsNC00LDQtdC8INC70Lgg0LIg0L/RgNC10LTQtdC70Ysg0LrQsNGA0YLRi1xuICAgICAgICBmb3IgKGxldCBzdHAgPSAxOyBzdHAgPD0gc3RlcDsgc3RwKyspIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygoc3RwIDw9IHN0ZXApKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5ld0FuZ2VsID0gdGhpcy5jaGVja05laWdoYm9yaW5nc0NlbGxCeURpcmVjdGlvbnMoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIG5ld0FuZ2VsOiAnLCBuZXdBbmdlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3QW5nZWwuaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0FuZ2VsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzRmluZDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zOiBmdW5jdGlvbiAoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbkxlZnQgPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25MZWZ0LmlzRmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkxlZnQ6IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbkxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uTGVmdDogZmFsc2U7XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpcmVjdGlvblRvcCA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25Ub3Aoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uVG9wLmlzRmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvblRvcDogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uVG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvblRvcDogZmFsc2U7XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpcmVjdGlvblJpZ2h0ID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0KHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvblJpZ2h0LmlzRmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvblJpZ2h0OiB0cnVlO1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25SaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25SaWdodDogZmFsc2U7XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpcmVjdGlvbkJvdHRvbSA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b20oc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uQm90dG9tLmlzRmluZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkJvdHRvbTogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uQm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkJvdHRvbTogZmFsc2U7XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgY2hlY2tDZWxsQnlEaXJlY3Rpb25MZWZ0OiBmdW5jdGlvbiAoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZmluZCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeU5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb25Db2wgLSBzdHA7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICgobmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKG5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Db2wgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uQ29sIDw9ICh0aGlzLm1hcENvbCAtIDEpKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmaW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogdHJ5TmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc0ZpbmQ6IGZpbmRcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wOiBmdW5jdGlvbiAoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgZmluZCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeU5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb25Sb3cgLSBzdHA7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCh0cnlOZXdQb3NpdGlvblJvdyA+PSAwKSAmJiAodHJ5TmV3UG9zaXRpb25Sb3cgPD0gKHRoaXMubWFwUm93IC0gMSkpKVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICgobmV3UG9zaXRpb25Db2wgPj0gMCkgJiYgKG5ld1Bvc2l0aW9uQ29sIDw9ICh0aGlzLm1hcENvbCAtIDEpKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmaW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogdHJ5TmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc0ZpbmQ6IGZpbmRcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNoZWNrQ2VsbEJ5RGlyZWN0aW9uUmlnaHQ6IGZ1bmN0aW9uIChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdHJ5TmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBmaW5kID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5TmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbkNvbCArIHN0cDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICgobmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKG5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Db2wgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uQ29sIDw9ICh0aGlzLm1hcENvbCAtIDEpKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmaW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogdHJ5TmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc0ZpbmQ6IGZpbmRcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNoZWNrQ2VsbEJ5RGlyZWN0aW9uQm90dG9tOiBmdW5jdGlvbiAoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgZmluZCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeU5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb25Sb3cgKyBzdHA7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKCh0cnlOZXdQb3NpdGlvblJvdyA+PSAwKSAmJiAodHJ5TmV3UG9zaXRpb25Sb3cgPD0gKHRoaXMubWFwUm93IC0gMSkpKVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICgobmV3UG9zaXRpb25Db2wgPj0gMCkgJiYgKG5ld1Bvc2l0aW9uQ29sIDw9ICh0aGlzLm1hcENvbCAtIDEpKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBmaW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogdHJ5TmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc0ZpbmQ6IGZpbmRcbiAgICAgICAgfTtcbiAgICB9XG59IiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vLi4vZW50aXR5JztcbmltcG9ydCBEaWVVbml0IGZyb20gJy4vLi4vZGllVW5pdCc7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi8uLi90b29scyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9yb3V0ZSc7XG5cbi8vIFRJR0VSUyBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlnZXJzQWxnb3JpdGhtIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyDQoNCw0LTQuNGD0YEg0Y/Rh9C10LXQuiDQsiDRh9C10YLRi9GA0LUg0YHRgtC+0YDQvtC90YssINGD0LLQtdC70LjRh9C10L0g0L3QsCDQvtC00L3Rgywg0LXRgdC70LggNCDRgtC+IDNcbiAgICAgICAgdGhpcy5kaXN0YW5jZVZpZXcgPSA0O1xuICAgIH1cblxuICAgIGFjdCAodW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICAvLyDQktC+0L7Qt9Cy0YDQsNGC0LjRgtGMINC+0LHRitC10LrRgiDRgSDRgdC+0YHQtdC00L3QuNC80Lgg0Y/Rh9C10LnQutCw0LzQuFxuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uID0gUm91dGUuZ2V0TmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKG1hcCwgdW5pdCwgaW5kZXhPYmplY3QsIHRoaXMuZGlzdGFuY2VWaWV3KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIk5FSUdIQk9SSU5HU0NFTExJTkZPUk1BVElPTjogXCIsIG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbik7XG5cbiAgICAgICAgLy8gbGV0IGRhdGEgPSB0aGlzLmdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbih1bml0LCBtYXAsIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogZGF0YTpcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCa0LDRgNGC0L7QuSAgICAgICAgICAgICAgLSBkYXRhLm1hcFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KHQvtGB0LXQtNC90LjQvNC4INC60LvQtdGC0LrQsNC80LggIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotGA0LDQstC+0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0LjQs9GA0LDQvNC4ICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXNcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCX0LXQvNC70ZHQuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICAgICAqL1xuXG4gICAgICAgLyogaWYgKHVuaXQuaGVhbHRoID4gMCkge1xuICAgICAgICAgICAgLy8gICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0YDRj9C00L7QvCDQtdC00LBcbiAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Gb29kKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUZyZWUobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtYXAua2lsbFVuaXQodW5pdCwgaW5kZXhPYmplY3QpO1xuICAgICAgICB9Ki9cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JXQtNC40Lwg0LrQvtGA0L7QstGDXG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVUb0Zvb2QgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1INC60L7RgNC+0LJcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggLTEpO1xuXG4gICAgICAgIC8vINCt0YLQsCDRj9GH0LXQudC60LAg0Y/QstC70Y/QtdGC0YzRgdGPINC60L7RgNC+0LLQvtC5LCDRgi7QtSDQldCU0J7QmSEhIVxuICAgICAgICAvLyBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF1cbiAgICAgICAgLy8gdW5pdC5lYXRlbih0cnVlLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0pO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8IGluZGV4INGB0YrQtdC00LXQvdC+0Lkg0LrQvtGA0L7QstGLINC40Lcg0LzQsNGB0YHQuNCy0LAgb2JqZWN0c09uTWFwXG4gICAgICAgIGxldCBmb29kSW5kZXggPSBtYXAuZ2V0SW5kZXhGcm9tT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSk7XG5cbiAgICAgICAgLy8g0J/QvtC80LXRgtC40LvQuCDRgtC40LPRgNCwINGH0YLQviDQvtC9INGB0YrQtdC7INC60L7RgNC+0LLRg1xuICAgICAgICB1bml0LmVhdGVuKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgZm9vZEluZGV4KTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGC0LjQs9GA0LAg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0KPQtNCw0LvQuNC8INC60L7RgNC+0LLRgyDQuNC3INC40LPRgNC+0LLQvtCz0L4g0LzQsNGB0YHQuNCy0LBcbiAgICAgICAgbWFwLnJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGZvb2RJbmRleCk7XG5cbiAgICAgICAgZGVsZXRlIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXTtcblxuICAgICAgICAvLyDQn9GA0Lgg0L/QvtCz0LvQsNGJ0LXQvdC40Lgg0YLRgNCw0LLRiyDQv9GA0LjQsdCw0LLQuNC8INC20LjQt9C90LgsINC+0LPRgNCw0L3QuNGH0LjQvCDQt9C90LDRh9C10L3QuNC10LwgMTAwXG4gICAgICAgIGlmICh1bml0LmhlYWx0aCA8IDEwMCApIHtcblxuICAgICAgICAgICAgaWYgKHVuaXQuaGVhbHRoID4gOTApIHtcbiAgICAgICAgICAgICAgICB1bml0LmFkZEhlYWx0aCgxMDAtdW5pdC5oZWFsdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bml0LmFkZEhlYWx0aCh0aGlzLmFkZEhlYWx0aFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5wbGF5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0KHQstC+0LHQvtC00L3QvtC1INC/0LXRgNC10LzQtdGJ0LXQvdC40LVcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlRnJlZSAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7fTtcblxuICAgICAgICAvLyB1bml0LmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdFxuXG4gICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0YPQsdC40Lsg0LvQuCDQtNCw0L3QvdGL0Lkg0YLQuNCz0YAg0YLQvtC70YzQutC+INGH0YLQviDQutC+0YDQvtCy0YMsXG4gICAgICAgIC8vINC10YHQu9C4INC00LAsINGC0L4g0L3QsCDRgdC70LXQtC4g0YjQsNCz0LUg0L/QvtGB0YLQsNCy0LjQvCDQvdCwINC10LPQviDQvNC10YHRgtC+INGC0LDQsdC70LjRh9C60YN1bml0LmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdFxuICAgICAgICBpZiAodW5pdC5pc0VhdGVuKCkpIHtcblxuICAgICAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkZWF0aFwiLFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Db2wsXG4gICAgICAgICAgICAgICAgZGllVW5pdFR5cGU6IHVuaXQuZm9vZEluZm9ybWF0aW9uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBkaWVVbml0SWQ6IHVuaXQuZm9vZEluZm9ybWF0aW9uLmlkXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgZGllVW5pdCA9IG5ldyBEaWVVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgICAgIGRpZVVuaXQuc2V0SW5kZXhPYmplY3QodW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3QpO1xuXG4gICAgICAgICAgICBtYXAuYWRkRGllVW5pdFRvRGllQXJyYXkoZGllVW5pdCk7XG5cbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIGRpZVVuaXQpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZFVuaXQucmVzZXRFYXRlbigpO1xuXG4gICAgICAgIG9sZFVuaXQuc3ViSGVhbHRoKHRoaXMuc3ViSGVhbHRoVmFsdWUpO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1INGBINC30LXQvNC70LXQuVxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCBEZWF0aEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobS9kZWF0aEFsZ29yaXRobSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZVVuaXQgZXh0ZW5kcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtKTtcblxuICAgICAgICB0aGlzLmluZGV4T2JqZWN0ID0gcGFyYW0uaW5kZXhPYmplY3Q7XG5cbiAgICAgICAgdGhpcy5hbGdvcml0bXMgPSBuZXcgRGVhdGhBbGdvcml0aG0oKTtcblxuICAgICAgICB0aGlzLmRpZVVuaXRUeXBlID0gcGFyYW0uZGllVW5pdFR5cGU7XG4gICAgICAgIHRoaXMuZGllVW5pdElkID0gcGFyYW0uZGllVW5pdElkO1xuXG4gICAgICAgIHRoaXMudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWwgPSAzO1xuICAgICAgICB0aGlzLnVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCA9IDA7XG5cbiAgICAgICAgLy8gdGhpcy5zb3VuZERpZSA9IG5ldyBHYW1lU291bmRzKFwiYXVkaW8vZGllX1wiICsgdGhpcy5jbGFzc05hbWUgKyBcIi5tcDNcIik7XG4gICAgfVxufVxuXG5EaWVVbml0LnByb3RvdHlwZS5zZXRJbmRleE9iamVjdCA9IGZ1bmN0aW9uIChpbmRleE9iamVjdCkge1xuICAgIHRoaXMuaW5kZXhPYmplY3QgPSBpbmRleE9iamVjdDtcbn07XG5cblxuLyoqXG4gKiDQoNCw0LfQvdGL0LUg0LTQtdC50YHRgtCy0LjRjyDQvtCx0YrQtdC60YLQsFxuICovXG5EaWVVbml0LnByb3RvdHlwZS5hY3Rpb24gPSBmdW5jdGlvbiAobWFwLCBpbmRleE9iamVjdCkge1xuICAgIHRoaXMuYWxnb3JpdG1zLmFjdCh0aGlzLCBtYXAsIGluZGV4T2JqZWN0KTtcbn07XG5cblxuLyoqXG4gKiDQntCx0L3QvtCy0LjQvCBSb3cvQ29sINC+0LHRitC10LrRgtCwXG4gKiBAcGFyYW0gdW5pdFxuICovXG5EaWVVbml0LnByb3RvdHlwZS51cGRhdGVSb3dDb2wgPSBmdW5jdGlvbiAodW5pdCkge1xuICAgIHRoaXMucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgIHRoaXMucG9zaXRpb25Db2wgPSB1bml0LnBvc2l0aW9uQ29sO1xufTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgdGhpcy5pZCA9IHBhcmFtLmlkO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHBhcmFtLmNsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvblJvdyA9IHBhcmFtLm9ialBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLnBvc2l0aW9uQ29sID0gcGFyYW0ub2JqUG9zaXRpb25Db2w7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQntCx0L3QvtCy0LjQvCBSb3cvQ29sINC+0LHRitC10LrRgtCwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKi9cbiAgICB1cGRhdGVSb3dDb2wgKHVuaXQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMucG9zaXRpb25Db2wgPSB1bml0LnBvc2l0aW9uQ29sO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0JLRi9Cy0L7QtCBIVE1MINC+0LHRitC10LrRgtCwXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzaG93ICgpIHtcbiAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0nYi11bml0IFwiK3RoaXMuY2xhc3NOYW1lK1wiJz48L2Rpdj5cIjtcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4vc2NlbmUnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSAnLi9zZXR0aW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgLyoqXG4gICAgICogT0JKIEdBTUVcbiAgICAgKiBAcGFyYW0gc2V0dGluZ1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nID0gc2V0dGluZztcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyDQo9GB0YLQsNC90L7QstC40Lwg0YDQtdC20LjQvCDQuNCz0YDRi1xuICAgICAgICB0aGlzLmRldk1vZGUgPSBzZXR0aW5nLmRldk1vZGUgfHwgZmFsc2U7XG5cbiAgICAgICAgLy8g0KPRgdGC0LDQvdC+0LLQuNC8INGB0LrQvtGA0L7RgdGC0Ywg0LjQs9GA0L7QstC+0LPQviDRhtC40LrQu9CwXG4gICAgICAgIHRoaXMudGltZVJlbmRlciA9IHNldHRpbmcudGltZVJlbmRlciB8fCA1MDA7XG5cbiAgICAgICAgdGhpcy5idG5TdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWJ1dHRvbnNfX2J0bi1zdGFydCcpO1xuICAgICAgICB0aGlzLmJ0blBhdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ItYnV0dG9uc19fYnRuLXBhdXNlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR0FNRSBMT09QXG4gICAgICovXG4gICAgcnVuICgpIHtcbiAgICAgICAgLy8g0KHQvtC30LTQsNC00LjQvCDQvdC+0LLRg9GOINGB0YbQtdC90YNcbiAgICAgICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKHRoaXMuc2V0dGluZyk7XG5cbiAgICAgICAgLy8g0KHQvtC30LTQsNC00LjQvCDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtSDQvdCwINGB0YbQtdC90LVcbiAgICAgICAgaWYgKHNjZW5lLmJ1aWxkKCkpIHtcblxuICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmNCz0YDQsCDQt9Cw0LPRgNGD0LbQtdC90LAuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJyxcItCd0LDQttC80LjRgtC1ICfQndCw0YfQsNGC0Ywg0LjQs9GA0YMnLlwiLCAnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgbG9vcDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRldk1vZGUpIHtcblxuICAgICAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJywn0JjQs9GA0LAg0LIg0L7QsdGL0YfQvdC+0Lwg0YDQtdC20LjQvNC1LicsICdzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJywn0JjQs9GA0LAg0LfQsNC/0YPRidC10L3QsC4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICAvLyDQk9C70LDQstC90YvQuSBMb29wXG4gICAgICAgICAgICAgICAgICAgIGxvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2VuZS5pc3NldE9iamVjdE9uTWFwKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5kaWVNYW5hZ2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuYWN0aW9uT25NYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHNlbGYudGltZVJlbmRlcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJ0blBhdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGxvb3ApO1xuXG4gICAgICAgICAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJywn0JjQs9GA0LAg0L7RgdGC0LDQvdC+0LLQu9C10L3QsC4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NlbmUuaXNzZXRPYmplY3RPbk1hcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJywn0JjQs9GA0LAg0LIg0YDQtdC20LjQvNC1INGA0LDQt9GA0LDQsdC+0YLRh9C40LrQsC4nLCAnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmRpZU1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuYWN0aW9uT25NYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJC5sTm90aWZ5KCdhZGQnLCfQmtC+0L3QtdGGINC40LPRgNGLLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3ZlciAoKSB7XG4gICAgICAgIGFsZXJ0KCdHYW1lIE92ZXInKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHNldHRpbmcgZnJvbSBcIi4vc2V0dGluZ1wiO1xuXG4vLyDQn9C+0YHQu9C1INC30LDQs9GA0YPQt9C60Lgg0LTQvtC60YPQvNC10L3RgtCwINC30LDQv9GD0YHRgtC40Lwg0LjQs9GA0YNcbiQoZnVuY3Rpb24gKCkge1xuICAgICQubE5vdGlmeSh7XG4gICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlJyxcbiAgICAgICAgcG9zaXRpb246ICdib3R0b21SaWdodCdcbiAgICB9KTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoc2V0dGluZyk7XG5cbiAgICBnYW1lLnJ1bigpO1xufSk7XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCBVbml0IGZyb20gJy4vdW5pdCc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuL3Rvb2xzJztcblxuLyoqXG4gKiDQmtC70LDRgdGBINGA0LDQsdC+0YLRiyDRgSDQutCw0YDRgtC+0LlcbiAqIEBwYXJhbSBzZXR0aW5nXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gW107XG5cbiAgICAgICAgLy8g0J7QsdGK0LXQutGC0Ysg0LTQu9GPINC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzID0gc2V0dGluZy5tYXBPYmplY3RzO1xuXG4gICAgICAgIC8vINCh0L/QuNGB0L7QuiDQvtCx0YrQtdC60YLQvtCyLCDQutC+0YLQvtGA0YvQtSDQt9Cw0LTQtdC50YHRgtCy0L7QstCw0L3QvdGLINC90LAg0LrQsNGA0YLQtVxuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5yb3cgPSBzZXR0aW5nLm1hcFNpemUucm93IHx8IDA7XG4gICAgICAgIHRoaXMuY29sID0gc2V0dGluZy5tYXBTaXplLmNvbCB8fCAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J/QvtGB0YLRgNC+0LjQvCDQv9GD0YHRgtGD0Y4g0LrQsNGA0YLRgyDQvdCwINC+0YHQvdC+0LLQtSDQvdCw0YfQsNC70YzQvdGL0YUgUm93L0NvbFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hcERhdGEucHVzaChbXSkgPCB0aGlzLnJvdykgO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcERhdGEubGVuZ3RoID09IHRoaXMucm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCT0LXQvdC10YDQsNGG0LjRjyDQutCw0YDRgtGLXG4gICAgICovXG4gICAgZ2VuZXJhdGUoKSB7XG5cbiAgICAgICAgbGV0IG9iaklEID0gMDtcblxuICAgICAgICBmb3IgKGxldCBvYmplY3ROYW1lIGluIHRoaXMubWFwT2JqZWN0cykge1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3ROYW1lKTtcbiAgICAgICAgICAgIGxldCBvYmpNaW4gPSB0aGlzLm1hcE9iamVjdHNbb2JqZWN0TmFtZV0ubWluO1xuICAgICAgICAgICAgbGV0IG9iak1heCA9IHRoaXMubWFwT2JqZWN0c1tvYmplY3ROYW1lXS5tYXg7XG5cbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC+0LHRitC10LrRgiDRj9Cy0LvRj9C10YLRjNGB0Y8g0YHRgtCw0YLQuNC60L7QuSxcbiAgICAgICAgICAgIC8vINGC0L4g0L/QvtGB0YLQsNGA0LXQvNGB0Y8g0LTQsNGC0Ywg0L/QviDQvNCw0LrRgdC40LzRg9C80YMg0LfQvdCw0YfQtdC90LjRjyBtaW4vbWF4XG4gICAgICAgICAgICAvLyDQtNC70Y8g0L/QvtC70L3QvtCz0L4g0LfQsNC/0L7Qu9C90LXQvdC40Y8g0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuICAgICAgICAgICAgaWYgKG9iak1pbiA9PT0gbnVsbCAmJiBvYmpNYXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvYmpNaW4gPSAodGhpcy5yb3cgKyB0aGlzLmNvbCkgKiAyO1xuICAgICAgICAgICAgICAgIG9iak1heCA9ICh0aGlzLnJvdyArIHRoaXMuY29sKSAqIDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0LrQvtC7LdCy0L4g0L7QsdGK0LXQutGC0L7QsiDQvdCwINC60LDRgNGC0LVcbiAgICAgICAgICAgIGxldCBvYmpDb3VudE9uTWFwID0gdG9vbHMucmFuZG9tSW50ZWdlcihvYmpNaW4sIG9iak1heCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqZWN0TmFtZVtvYmpDb3VudE9uTWFwXTogXCIgKyBvYmplY3ROYW1lICsgXCIgXCIgKyBvYmpDb3VudE9uTWFwKTtcblxuICAgICAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0Y3RgtC+0LzRgyDQutC+0LvQuNGH0LXQstGB0YLQstGDXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakNvdW50T25NYXA7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IG1hcFJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXBSb3dDb2xOb3JtYWw6ICcsIG1hcFJvd0NvbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbWFwUm93Q29sLnJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBtYXBSb3dDb2wuY29sXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgRW50aXR5KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT0gJ2Nvd3MnIHx8IG9iamVjdE5hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9PYmplY3RzT25NYXAodW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdFNldHRpbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpJRDogb2JqSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJ5TmV3R2VuZXJhdGUodW5pdFNldHRpbmcsIG9iakNvdW50T25NYXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JqSUQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7QstGC0L7RgNC90LDRjyDQs9C10L3QtdGA0LDRhtC40Y8sINCyINGB0LvRg9GH0LjQuCDQt9Cw0L3Rj9GC0L7Qs9C+INC80LXRgdGC0LAg0LIg0LzQsNGB0YHQuNCy0LVcbiAgICAgKiBAcGFyYW0gb2JqZWN0U2V0dGluZ1xuICAgICAqIEBwYXJhbSBjb3VudFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHRyeU5ld0dlbmVyYXRlKG9iamVjdFNldHRpbmcsIGNvdW50KSB7XG5cbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDRjdGC0L7QvNGDINC60L7Qu9C40YfQtdCy0YHRgtCy0YNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vINGB0L7Qt9C00LDQtNC40Lwg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LTQu9GPINC/0YDQvtGB0YLQsNCy0LvQtdC90LjRj1xuICAgICAgICAgICAgbGV0IG1hcFJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21hcFJvd0NvbFJlY3Vyc2l2ZTogJywgbWFwUm93Q29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG9iamVjdFNldHRpbmcub2JqSUQsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbWFwUm93Q29sLnJvdyxcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG1hcFJvd0NvbC5jb2xcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbGV0IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBFbnRpdHkodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPSB1bml0O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSAnY293cycgfHwgb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9PYmplY3RzT25NYXAodW5pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRTZXR0aW5nID0ge1xuICAgICAgICAgICAgICAgICAgICBvYmpJRDogb2JqZWN0U2V0dGluZy5vYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cnlOZXdHZW5lcmF0ZSh1bml0U2V0dGluZywgY291bnQgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvRjNC90YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCwINC+0YHQvdC+0LLQtSDQutC+0Lst0LLQviDRgdGC0YDQvtC6INC4INC60L7Qu9C+0L3QvtC6XG4gICAgICogQHJldHVybnMge3tyb3c6ICosIGNvbDogKn19XG4gICAgICovXG4gICAgZ2V0UmFuZG9tUm93Q29sQ29vcmQoKSB7XG4gICAgICAgIGxldCBjb3VudFJvdyA9IHRoaXMucm93LFxuICAgICAgICAgICAgY291bnRDb2wgPSB0aGlzLmNvbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93OiB0b29scy5yYW5kb21JbnRlZ2VyKDAsIGNvdW50Um93KSxcbiAgICAgICAgICAgIGNvbDogdG9vbHMucmFuZG9tSW50ZWdlcigwLCBjb3VudENvbClcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjaGVja1JvdXRlICgpIHtcblxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICB9XG4gICAgXG4gICAgZ2V0UmFuZG9tUm93Q29sQmFzZWRPblVuaXQoY2VsbCwgc3RlcHMpIHtcbiAgICAgICAgbGV0IGlzc2V0Um91dGUgPSB0aGlzLnRyeVJvdXRlKHN0ZXBzKTtcblxuXG5cblxuICAgICAgICAvLyBsZXQgcm93TWluID0gKChjZWxsLnBvc2l0aW9uUm93IC0gMSkgPj0gMCkgPyAoY2VsbC5wb3NpdGlvblJvdyAtIDEpIDogMDtcbiAgICAgICAgLy8gbGV0IHJvd01heCA9ICgoY2VsbC5wb3NpdGlvblJvdyArIDEpIDw9IHRoaXMucm93KSA/IChjZWxsLnBvc2l0aW9uUm93ICsgMSkgOiB0aGlzLnJvdztcblxuICAgICAgICAvLyBsZXQgY29sTWluID0gKChjZWxsLnBvc2l0aW9uQ29sIC0gMSkgPj0gMCkgPyAoY2VsbC5wb3NpdGlvblJvdyAtIDEpIDogMDtcbiAgICAgICAgLy8gbGV0IGNvbE1heCA9ICgoY2VsbC5wb3NpdGlvbkNvbCArIDEpIDw9IHRoaXMuY29sKSA/IChjZWxsLnBvc2l0aW9uQ29sICsgMSkgOiB0aGlzLmNvbDtcblxuICAgICAgICAvLyBsZXQgbmV3UG9zaXRpb25Sb3csXG4gICAgICAgIC8vICAgICBuZXdQb3NpdGlvbkNvbDtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gbmV3UG9zaXRpb25Sb3cgPSB0aGlzLmdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKHJvd01pbiwgcm93TWF4LCBjZWxsLnBvc2l0aW9uUm93KTtcbiAgICAgICAgLy8gbmV3UG9zaXRpb25Db2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKGNvbE1pbiwgY29sTWF4LCBjZWxsLnBvc2l0aW9uUm93KTtcblxuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAvLyAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sXG4gICAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUobWluQ2VsbCwgbWF4Q2VsbCwgZXhjbHVkZVZhbHVlKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICB2YWx1ZSA9IHRvb2xzLnJhbmRvbUludGVnZXIobWluQ2VsbCwgbWF4Q2VsbCk7XG5cbiAgICAgICAgd2hpbGUgKHZhbHVlID09IGV4Y2x1ZGVWYWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b29scy5yYW5kb21JbnRlZ2VyKG1pbkNlbGwsIG1heENlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cblxuICAgIGdldE5ld1Jvd0NvbFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRk9SIE5FVyBVTklUIEdFTkVSRVRFIE5FVyBQT1NJVElPTjogVFJZW1wiICsgKGkrKykgKyBcIl0gLT4gW1IoXCIgKyBuZXdQb3NpdGlvblJvd0NvbC5yb3cgKyBcIik6QyhcIiArIG5ld1Bvc2l0aW9uUm93Q29sLmNvbCArIFwiKV1cIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1hcERhdGFbbmV3UG9zaXRpb25Sb3dDb2wucm93XVtuZXdQb3NpdGlvblJvd0NvbC5jb2xdLmNsYXNzTmFtZSA9PT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQb3NpdGlvblJvd0NvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNC00LjQvCDRj9GH0LXQudC60YNcbiAgICAgKiBAcGFyYW0gb2xkVW5pdFxuICAgICAqIEBwYXJhbSBuZXdVbml0XG4gICAgICovXG4gICAgc2V0Q2VsbChvbGRVbml0LCBuZXdVbml0KSB7XG5cbiAgICAgICAgdGhpcy5tYXBEYXRhW29sZFVuaXQucG9zaXRpb25Sb3ddW29sZFVuaXQucG9zaXRpb25Db2xdID0gbmV3VW5pdDtcblxuICAgICAgICB0aGlzLm1hcERhdGFbb2xkVW5pdC5wb3NpdGlvblJvd11bb2xkVW5pdC5wb3NpdGlvbkNvbF0udXBkYXRlUm93Q29sKG9sZFVuaXQpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGP0YfQtdC50LrRg1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblJvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbkNvbFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldENlbGwocG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcERhdGFbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sXTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICBhZGRUb09iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwLnB1c2godW5pdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIHJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwLnNwbGljZShpbmRleE9iamVjdCwgMSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBEaWVPYmplY3RzT25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDRgdC80LXRgNGC0LggdW5pdHNcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIHJlbW92ZVVuaXRGcm9tRGllT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwLnNwbGljZShpbmRleE9iamVjdCwgMSk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7QsdC90L7QstC40Lwg0LTQu9GPIFVuaXQg0LXQs9C+IFJDKFJvdy9Db2wpINCyINC80LDRgdGB0LjQstC1IE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgdXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKHVuaXQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvQuNC8INC+0LHRitC10LrRglxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAga2lsbFVuaXQodW5pdCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICB0aGlzLnJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8INC80L7Qs9C40LvQutGDXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkZWF0aFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGRpZVVuaXRUeXBlOiB1bml0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGRpZVVuaXRJZDogdW5pdC5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICB0aGlzLnNldENlbGwodW5pdCwgZGllVW5pdCk7XG5cbiAgICAgICAgdGhpcy5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRpZU9iamVjdHNPbk1hcCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDQu9C4INC10YnQtSDQvtCx0YrQtdC60YLRiyDQsiDQvNCw0YHRgdC40LLQtSDQtNC70Y8g0YHRg9GJ0LXQstGB0YLQstC+0LLQsNC90LjRjyDQuNCz0YDRi1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgaXNzZXRPYmplY3RPbk1hcCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm9iamVjdHNPbk1hcC5sZW5ndGggPiAwID8gMSA6IDApO1xuICAgIH07XG5cblxuLy8g0J/RgNC+0LLQtdGA0LjQvCDRgdC+0YHQtdC00L3QuNC4INC60LvQtdGC0LrQuCArXG4gICAgY2hlY2tVbml0TmVpZ2hib3JpbmdzQ2VsbCh1bml0KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHVuaXQuY2xhc3NOYW1lID09ICd0aWdlcnMnXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgdW5pdC5jbGFzc05hbWUgPT0gJ2Nvd3MnXG4gICAgICAgICkge1xuXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wUmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHRCb3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnRCb3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0VG9wJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvblJvdyA9IHBhcnNlSW50KHVuaXQucG9zaXRpb25Sb3cpO1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNvbCA9IHBhcnNlSW50KHVuaXQucG9zaXRpb25Db2wpO1xuICAgICAgICAgICAgLy8gbGV0IG1hcERhdGUgPSB0aGlzLm1hcERhdGE7XG5cbiAgICAgICAgICAgIC8vINCd0LUg0LfQsNCx0YvRgtGMINC/0YDQviDQs9GA0LDQvdC40YbRiyDQutCw0YDRgtGLXG4gICAgICAgICAgICBsZXQgYm9yZGVyID0ge1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB0b3BSaWdodDogdGhpcy5jb2wsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRoaXMuY29sLFxuICAgICAgICAgICAgICAgIHJpZ2h0Qm90dG9tOiB0aGlzLmNvbCxcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMucm93LFxuICAgICAgICAgICAgICAgIGxlZnRCb3R0b206IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0VG9wOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWFwRGF0ZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBMOlwiLCB1bml0UG9zaXRpb25Sb3csIHVuaXRQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIC8vIFRPUCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstCy0LXRgNGF0YMgK1xuICAgICAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbMF0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzBdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93IC0gMV1bdW5pdFBvc2l0aW9uQ29sXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBUT1BfUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQstC10YDRhdGDLdCy0L/RgNCw0LLQviArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3BcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci50b3BSaWdodFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbMV0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzFdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93IC0gMV1bdW5pdFBvc2l0aW9uQ29sICsgMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQv9GA0LDQstC+ICtcbiAgICAgICAgICAgIGlmICgodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIucmlnaHQpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1syXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbMl0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3ddW3VuaXRQb3NpdGlvbkNvbCArIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFJJR0hUX0JPVFRPTSDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstC/0YDQsNCy0L4t0LLQvdC40LfRgyArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCArIDEpIDwgYm9yZGVyLnJpZ2h0Qm90dG9tXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1szXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbM10uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgKyAxXVt1bml0UG9zaXRpb25Db2wgKyAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBCT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0LLQvdC40LfRgyArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzRdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s0XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyArIDFdW3VuaXRQb3NpdGlvbkNvbF07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTEVGVF9CT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsC3QstC90LjQt9GDICtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uUm93ICsgMSkgPCBib3JkZXIuYm90dG9tXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRCb3R0b21cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzVdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s1XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyArIDFdW3VuaXRQb3NpdGlvbkNvbCAtIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIExFRlQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsCArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvbkNvbCAtIDEpID49IGJvcmRlci5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbNl0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzZdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93XVt1bml0UG9zaXRpb25Db2wgLSAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBMRUZUX1RPUCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQu9C10LLQsC3QstCy0LXRgNGF0YMgK1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzddLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s3XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyAtIDFdW3VuaXRQb3NpdGlvbkNvbCAtIDFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnVuaXQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2VsbHMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJST1c6IFwiICsgdW5pdFBvc2l0aW9uUm93LCBcIkNPTDogXCIgKyB1bml0UG9zaXRpb25Db2wgKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7RgtGE0LjQu9GM0YLRgNGD0LXQvCDRj9GH0LXQudC60Lgg0L/QviDRgtC40L/RgyB1bml0VHlwZVxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsXG4gICAgICogQHBhcmFtIHVuaXRUeXBlXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdFR5cGUpIHtcblxuICAgICAgICBsZXQgYXJyID0gW107XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQsdC10YDQtdC8INC/0L7Qu9GD0YfQtdC90L3Ri9C5INC80LDRgdGB0LjQsiDRgSDRj9GH0LXQudC60LDQvNC4INC90LDRhdC+0LTRj9GJ0LjQvNC40YHRjyDRgNGP0LTQvtC8XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3JpbmdzQ2VsbC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAvLyDQr9GH0LXQudC60LAg0L3QtSDQstGL0YXQvtC00LjRgiDQt9CwINCz0YDQsNC90LjRhtGLXG4gICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5leGlzdCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQuY2xhc3NOYW1lID09IHVuaXRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC40L3QtNC10LrRgSDQutC+0YDQvtCy0Ysg0L/RgNC4INC10LUg0YHRitC10LTQsNC90LjQuFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbmRleEZyb21PYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5vYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID09IHVuaXQucG9zaXRpb25Sb3dcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9PSB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbi8vTUFQIERFQVRIIE1BTkFHRVxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC40L3QtNC10LrRgSDQutC+0YDQvtCy0Ysg0L/RgNC4INC10LUg0YHRitC10LTQsNC90LjQuFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbmRleEZyb21EaWVPYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5kaWVPYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID09IHVuaXQucG9zaXRpb25Sb3dcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9PSB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGREaWVVbml0VG9EaWVBcnJheSh1bml0KSB7XG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwLnB1c2godW5pdCk7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgTWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5cbi8qKlxuICog0JjQs9GA0L7QstCw0Y8g0YHRhtC10L3QsFxuICogQHBhcmFtIHNldHRpbmdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1nYW1lX19wbGFpbicpO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoc2V0dGluZyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC60LDRgNGC0YMg0Lgg0LfQsNC/0L7Qu9C90LjQvCDQtdC1INC+0LHRitC10LrRgtCw0LzQuFxuICAgICAqL1xuICAgIGJ1aWxkICgpIHtcblxuICAgICAgICBpZiAodGhpcy5tYXAuaW5pdCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2VuZXJhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsCDQt9Cw0L/QvtC70L3QtdC90L3QvtC5INC60LDRgNGC0YtcbiAgICAgKi9cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBsZXQgbWFwSFRNTCA9ICcnO1xuXG5cbiAgICAgICAgLy8g0J/QvtGB0YLRgNC+0LjQvCDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtVxuICAgICAgICBmb3IgKGxldCBwb3NpdGlvblJvdyA9IDA7IHBvc2l0aW9uUm93IDwgdGhpcy5tYXAucm93OyBwb3NpdGlvblJvdysrKSB7XG4gICAgICAgICAgICBtYXBIVE1MICs9IFwiPGRpdiBjbGFzcz0ncm93Jz5cIjtcbiAgICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uQ29sID0gMDsgcG9zaXRpb25Db2wgPCB0aGlzLm1hcC5jb2w7IHBvc2l0aW9uQ29sKyspIHtcblxuICAgICAgICAgICAgICAgIC8vIERFViBNT0RFXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxDb29yZGluYXRlID0gXCI8ZGl2IGNsYXNzPSdjZWxsQ29vcmRpbmF0ZSc+XCIgKyBwb3NpdGlvblJvdyArIFwiIDogXCIgKyBwb3NpdGlvbkNvbCArIFwiPC9kaXY+XCI7XG5cbiAgICAgICAgICAgICAgICBtYXBIVE1MICs9IFwiPGRpdiBjbGFzcz0nY2VsbCc+XCIgKyBjZWxsQ29vcmRpbmF0ZSArIFwiIFwiICsgdGhpcy5tYXAuZ2V0Q2VsbChwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpLnNob3coKSArIFwiPC9kaXY+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXBIVE1MICs9IFwiPC9kaXY+XCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjQvCDRgdC+0LHRgNCw0L3QvdGD0Y4gSFRNTCDQutCw0YDRgtGDINCyIERPTVxuICAgICAgICB0aGlzLnBsYWluLmlubmVySFRNTCA9IG1hcEhUTUw7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JTQtdC50YHRgtCy0LjRjyDQstGB0LXRhSDQvtCx0YrQtdC60YLQvtCyINC90LAg0LrQsNGA0YLQtVxuICAgICAqL1xuICAgIGFjdGlvbk9uTWFwICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXAub2JqZWN0c09uTWFwKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5tYXAub2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgdGhpcy5tYXAub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5hY3Rpb24odGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkaWVNYW5hZ2VyICgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5tYXAuZGllT2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0uYWN0aW9uKHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINC70Lgg0LXRidC1INC+0LHRitC10LrRgtGLINCyINC80LDRgdGB0LjQstC1INC00LvRjyDRgdGD0YnQtdCy0YHRgtCy0L7QstCw0L3QuNGPINC40LPRgNGLXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBpc3NldE9iamVjdE9uTWFwICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmlzc2V0T2JqZWN0T25NYXAoKTtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiXG4vLyBQUk9EXG4vKmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnYW1lQ29udGFpbmVySUQ6ICdiLWdhbWUnLFxuICAgIG1hcFNpemU6IHtcbiAgICAgICAgcm93OiA5LFxuICAgICAgICBjb2w6IDIzXG4gICAgfSxcbiAgICBtYXBPYmplY3RzOiB7XG4gICAgICAgIGdyYXNzOiB7XG4gICAgICAgICAgICBtaW46IDkwLFxuICAgICAgICAgICAgbWF4OiAxNzVcbiAgICAgICAgfSxcbiAgICAgICAgY293czoge1xuICAgICAgICAgICAgbWluOiAxNSxcbiAgICAgICAgICAgIG1heDogMjBcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogNTAwXG59OyovXG5cbi8vIERFVlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVDb250YWluZXJJRDogJ2ItZ2FtZScsXG4gICAgbWFwU2l6ZToge1xuICAgICAgICByb3c6IDYsXG4gICAgICAgIGNvbDogNlxuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA3LFxuICAgICAgICAgICAgbWF4OiAxM1xuICAgICAgICB9LFxuICAgICAgICBjb3dzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogMTUzMFxufTtcblxuIiwiLy8gQVVESU8gSU4gR0FNRVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNvdW5kcyB7XG4gICAgY29uc3RydWN0b3IoZmlsZSkge1xuICAgICAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKGZpbGUpOyAgIFxuICAgIH1cblxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICB9O1xuXG4gICAgLy8g0KTRg9C90LrRhtC40Y8gc3RvcCDQtNC70Y8gQXVkaW86XG4gICAgc3RvcCAoKSB7XG4gICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5jdXJyZW50VGltZSA9IDAuMDtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiLy8g0JLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3Ri9C1INGE0YPQvdC60YbQuNC4INC00LvRjyDQuNCz0YDRi1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQvtGJ0Y/QtdGCINGB0LvRg9GH0LDQudC90L7QtSDRh9C40YHQu9C+INCyINC00LjQsNC/0LDQt9C+0L3QtSBNaW4vTWF4XG4gICAgICogQHBhcmFtIG1pblxuICAgICAqIEBwYXJhbSBtYXhcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByYW5kb21JbnRlZ2VyOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgR3Jhc3NBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZ3Jhc3NBbGdvcml0aG0nO1xuaW1wb3J0IENvd3NBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vY293c0FsZ29yaXRobSc7XG5pbXBvcnQgVGlnZXJzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL3RpZ2Vyc0FsZ29yaXRobSc7XG5pbXBvcnQgR3JvdW5kQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2dyb3VuZEFsZ29yaXRobSc7XG5pbXBvcnQgR2FtZVNvdW5kcyBmcm9tICcuL3NvdW5kJztcblxuLyoqXG4gKiDQntGB0L3QvtCy0L3QvtC5INCf0YDQvtGC0L7RgtC40L8g0L7QsdGK0LXQutGC0LAg0L3QsCDQutCw0YDRgtC1XG4gKiBAcGFyYW0gY2xhc3NOYW1lXG4gKiBAcGFyYW0gaWRcbiAqIEBwYXJhbSBvYmpQb3NpdGlvblJvd1xuICogQHBhcmFtIG9ialBvc2l0aW9uQ29sXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuZm9vZFR5cGUgPSB0aGlzLmdldEZvb2RUeXBlKCk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmVuZW15ID0gKHBhcmFtLmNsYXNzTmFtZSA9PSAnY293cycgPyAndGlnZXJzJyA6IG51bGwpO1xuXG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgaXNFYXQ6IGZhbHNlLFxuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG51bGwsXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbnVsbCxcbiAgICAgICAgICAgIGluZGV4T2JqZWN0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zb3VuZEVhdCA9IG5ldyBHYW1lU291bmRzKFwiYXVkaW8vZWF0X1wiICsgdGhpcy5jbGFzc05hbWUgKyBcIi5tcDNcIik7XG5cbiAgICAgICAgLy8g0JLRi9Cx0LXRgNC40Lwg0LDQu9Cz0L7RgNC40YLQvCDQv9C+0LLQtdC00LXQvdC40Y8g0LTQu9GPINC+0LHRitC10LrRgtCwXG4gICAgICAgIHRoaXMuYWxnb3JpdG1zID0gdGhpcy5zZWxlY3RBbGdvcml0aG0ocGFyYW0uaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0YvQstC+0LQgSFRNTCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgbGV0IHVuaXRIZWFsdGggPSBcIlwiO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PSAnY293cycgfHwgdGhpcy5jbGFzc05hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc0hlYWx0aENvbG9yID0gdGhpcy5nZXRDbGFzc0hlYWx0aENvbG9yKHRoaXMuaGVhbHRoKTtcblxuICAgICAgICAgICAgdW5pdEhlYWx0aCArPSBcIjxkaXYgY2xhc3M9J2ItdW5pdF9faGVhbHRoJz48ZGl2IGNsYXNzPSdiLWhlYWx0X19pbmRpY2F0b3IgXCIgKyBjbGFzc0hlYWx0aENvbG9yICsgXCInIHN0eWxlPSd3aWR0aDogXCIgKyB0aGlzLmhlYWx0aCArIFwiJTsnPjwvZGl2PjwvZGl2PlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0nYi11bml0IFwiICsgdGhpcy5jbGFzc05hbWUgKyBcIiBzdGFuZF9zdGlsbCc+XCIgKyB1bml0SGVhbHRoICsgXCI8L2Rpdj5cIjtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRhtCy0LXRgijQutC70LDRgdGBKSDQttC40LfQvdC4IHVuaXRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldENsYXNzSGVhbHRoQ29sb3IodmFsdWUpIHtcblxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDkwICYmIHBhcnNlSW50KHZhbHVlKSA8PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWdvb2RcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDc1ICYmIHBhcnNlSW50KHZhbHVlKSA8PSA5MCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYWJvdmUtYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gNTAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDc1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSAyNSAmJiBwYXJzZUludCh2YWx1ZSkgPD0gNTApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWJlbG93LWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDI1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1sb3dcIjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KDQsNC30L3Ri9C1INC00LXQudGB0YLQstC40Y8g0L7QsdGK0LXQutGC0LBcbiAgICAgKi9cbiAgICBhY3Rpb24obWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLmFsZ29yaXRtcy5hY3QodGhpcywgbWFwLCBpbmRleE9iamVjdCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0YbQtdC70Ywg0YDQsNC00Lgg0LrQvtGC0L7RgNC+0Lkg0LbQuNCy0LXRgiBVbml0IDopXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0Rm9vZFR5cGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nvd3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZ3Jhc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGlnZXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nvd3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCS0LXRgNC90LXRgiDQtNC70Y8g0L7QsdGK0LXQutGC0LAg0LXQs9C+INCw0LvQs9C+0YDQuNGC0Lwg0L/QvtCy0LXQtNC10L3QuNGPINCyINC40LPRgNC1XG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc2VsZWN0QWxnb3JpdGhtKGlkKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAwIC0gZ3Jhc3NcbiAgICAgICAgICogMSAtIGNvd3NcbiAgICAgICAgICogMiAtIHRpZ2Vyc1xuICAgICAgICAgKiAzIC0gZ3JvdW5kXG4gICAgICAgICAqIDQgLSBkZWF0aFxuICAgICAgICAgKi9cblxuICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KGlkKSkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmFzc0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ293c0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVGlnZXJzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91bmRBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cblxuLy8g0KHRitC10LTQtdC9XG4gICAgaXNFYXRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0O1xuICAgIH07XG5cbi8vINCh0YrQtdC00LXQvVxuICAgIGVhdGVuKHVuaXQsIGZvb2RJbmRleCkge1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Db2wgPSB1bml0LnBvc2l0aW9uQ29sO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCA9IGZvb2RJbmRleDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uY2xhc3NOYW1lID0gdW5pdC5jbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlkID0gdW5pdC5pZDtcbiAgICB9O1xuXG4vLyBSRVNFVCDQodGK0LXQtNC10L1cbiAgICByZXNldEVhdGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgYWRkSGVhbHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoICs9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgc3ViSGVhbHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoIC09IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9O1xuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSJdLCJzb3VyY2VSb290IjoiIn0=