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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vY293c0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL3JvdXRlLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi90b29scy5qcyIsIndlYnBhY2s6Ly8vLi91bml0LmpzIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsImFkZEhlYWx0aFZhbHVlIiwic3ViSGVhbHRoVmFsdWUiLCJ1bml0IiwibWFwIiwiaW5kZXhPYmplY3QiLCJuZWlnaGJvcmluZ3NDZWxsIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQiLCJjaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsIiwiZmlsdGVyQ2VsbEJ5VHlwZSIsImZvb2RUeXBlIiwiZW5lbXkiLCJDb3dzQWxnb3JpdGhtIiwiZGlzdGFuY2VWaWV3IiwiZGF0YSIsImdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiIsImNlbGxSYW5kb21Sb3dDb2wiLCJyYW5kb21JbnRlZ2VyIiwibGVuZ3RoIiwib2xkVW5pdCIsInVuaXRQYXJhbSIsImlkIiwiY2xhc3NOYW1lIiwib2JqUG9zaXRpb25Sb3ciLCJwb3NpdGlvblJvdyIsIm9ialBvc2l0aW9uQ29sIiwicG9zaXRpb25Db2wiLCJzZXRDZWxsIiwidXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwIiwic3ViSGVhbHRoIiwiZGllVW5pdFR5cGUiLCJkaWVVbml0SWQiLCJkaWVVbml0IiwiYWRkRGllVW5pdFRvRGllQXJyYXkiLCJoZWFsdGgiLCJhZGRIZWFsdGgiLCJEZWF0aEFsZ29yaXRobSIsImRlYXRoVW5pdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsIiwibmV3UG9zaXRpb24iLCJnZXROZXdSb3dDb2xQb3NpdGlvbiIsInJvdyIsImNvbCIsIm5ld1VuaXQiLCJkaWVPYmplY3RzT25NYXBJbmRleCIsImdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCIsImVudGl0eVBhcmFtIiwiYWRkVG9PYmplY3RzT25NYXAiLCJyZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcCIsIkdyYXNzQWxnb3JpdGhtIiwiR3JvdW5kQWxnb3JpdGhtIiwibWFwUm93IiwibWFwQ29sIiwiREVCVUciLCJnZXROZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJzdGVwcyIsImNvbnNvbGUiLCJsb2ciLCJtYXBEYXRhIiwibmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uIiwic3RlcCIsImdldE5laWdoYm9yaW5nc0NlbGwiLCJwYXJhbSIsImNlbGxzSW5mbyIsInB1c2giLCJuZWlnaGJvcmluZ3NDZWxsSW5mbyIsInVuaXRTaWRlcyIsImdldFVuaXRBbmdsZVBvaW50cyIsInNpZGUiLCJpc3NldCIsIm5hbWUiLCJ1bml0U2lkZSIsInVuaXRQb3NpdGlvblJvdyIsInVuaXRQb3NpdGlvbkNvbCIsInBhcnNlSW50IiwibGVmdFRvcF9UT19yaWdodFRvcCIsImdldFRvcFNpZGVOZWlnaGJvcmluZ3NDZWxsIiwidW5kZWZpbmVkIiwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b20iLCJnZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20iLCJnZXRCb3R0b21TaWRlTmVpZ2hib3JpbmdzQ2VsbCIsImxlZnRCb3R0b21fVE9fbGVmdFRvcCIsImdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInN0YXJ0Q2VsbFJvdyIsImFuZ2xlU3RhcnQiLCJlbmRDZWxsQ29sIiwiYW5nbGVFbmQiLCJzdGFydENlbGxDb2wiLCJ1bml0UG9zaXRpb25DZWxsIiwic2VsZWN0UG9zaXRpb25DZWxsIiwiZ2V0Q2VsbCIsImVuZENlbGxSb3ciLCJ1bml0QW5nbGVzIiwibGVmdFRvcCIsInJpZ2h0VG9wIiwicmlnaHRCb3R0b20iLCJsZWZ0Qm90dG9tIiwiZ2V0TGVmdFRvcEFuZ2xlUG9pbnQiLCJ0b1JpZ2h0VG9wIiwiZ2V0UmlnaHRUb3BBbmdsZVBvaW50IiwidG9SaWdodEJvdHRvbSIsImdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludCIsInRvTGVmdEJvdHRvbSIsImdldExlZnRCb3R0b21BbmdsZVBvaW50IiwidG9MZWZ0VG9wIiwibmV3UG9zaXRpb25Sb3ciLCJuZXdQb3NpdGlvbkNvbCIsImFuZ2xlSXNzZXQiLCJpc1VuaXRPdXRPZkJvcmRlciIsImZpbmROZXdBbmdlbCIsImlzRmluZCIsInN0cCIsIm5ld0FuZ2VsIiwiY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zIiwiZGlyZWN0aW9uTGVmdCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdCIsImRpcmVjdGlvblRvcCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wIiwiZGlyZWN0aW9uUmlnaHQiLCJjaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0IiwiZGlyZWN0aW9uQm90dG9tIiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b20iLCJ0cnlOZXdQb3NpdGlvbkNvbCIsImZpbmQiLCJ0cnlOZXdQb3NpdGlvblJvdyIsIlRpZ2Vyc0FsZ29yaXRobSIsImZvb2RJbmRleCIsImdldEluZGV4RnJvbU9iamVjdHNPbk1hcCIsImVhdGVuIiwicmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAiLCJpc0VhdGVuIiwiZm9vZEluZm9ybWF0aW9uIiwic2V0SW5kZXhPYmplY3QiLCJyZXNldEVhdGVuIiwiRGllVW5pdCIsImFsZ29yaXRtcyIsInByb3RvdHlwZSIsImFjdGlvbiIsImFjdCIsInVwZGF0ZVJvd0NvbCIsIkVudGl0eSIsIkdhbWUiLCJzZXR0aW5nIiwiZGV2TW9kZSIsInRpbWVSZW5kZXIiLCJidG5TdGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidG5QYXVzZSIsInNjZW5lIiwiYnVpbGQiLCIkIiwibE5vdGlmeSIsInNlbGYiLCJsb29wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwiY2FsbGJhY2siLCJpc3NldE9iamVjdE9uTWFwIiwiZGllTWFuYWdlciIsImFjdGlvbk9uTWFwIiwicmVuZGVyIiwiZ2FtZU92ZXIiLCJjbGVhckludGVydmFsIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJnYW1lIiwicnVuIiwiTWFwIiwibWFwT2JqZWN0cyIsIm9iamVjdHNPbk1hcCIsIkFycmF5IiwiZGllT2JqZWN0c09uTWFwIiwibWFwU2l6ZSIsIm9iaklEIiwib2JqZWN0TmFtZSIsIm9iak1pbiIsIm1pbiIsIm9iak1heCIsIm1heCIsIm9iakNvdW50T25NYXAiLCJpIiwibWFwUm93Q29sIiwiZ2V0UmFuZG9tUm93Q29sQ29vcmQiLCJ1bml0U2V0dGluZyIsInRyeU5ld0dlbmVyYXRlIiwib2JqZWN0U2V0dGluZyIsImNvdW50IiwiY291bnRSb3ciLCJjb3VudENvbCIsImNlbGwiLCJpc3NldFJvdXRlIiwidHJ5Um91dGUiLCJtaW5DZWxsIiwibWF4Q2VsbCIsImV4Y2x1ZGVWYWx1ZSIsInZhbHVlIiwibmV3UG9zaXRpb25Sb3dDb2wiLCJzcGxpY2UiLCJjZWxscyIsImRpcmVjdGlvbiIsImV4aXN0IiwiY29udGVudCIsImJvcmRlciIsInRvcCIsInRvcFJpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwidW5pdFR5cGUiLCJhcnIiLCJTY2VuZSIsInBsYWluIiwiaW5pdCIsImdlbmVyYXRlIiwibWFwSFRNTCIsImNlbGxDb29yZGluYXRlIiwic2hvdyIsImlubmVySFRNTCIsImdhbWVDb250YWluZXJJRCIsImdyYXNzIiwiY293cyIsInRpZ2VycyIsImdyb3VuZCIsIkdhbWVTb3VuZHMiLCJmaWxlIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiVW5pdCIsImdldEZvb2RUeXBlIiwiaXNFYXQiLCJzb3VuZEVhdCIsInNlbGVjdEFsZ29yaXRobSIsInVuaXRIZWFsdGgiLCJjbGFzc0hlYWx0aENvbG9yIiwiZ2V0Q2xhc3NIZWFsdGhDb2xvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsUztBQUNqQix5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SCxlQUFMLENBQXFCMkcsS0FBNUI7QUFDSDs7Ozs7QUFFTDs4QkFDVS9PLEksRUFBTStILFMsRUFBVztBQUNuQixpQkFBS0ssZUFBTCxDQUFxQjJHLEtBQXJCLEdBQTZCLElBQTdCO0FBQ0EsaUJBQUszRyxlQUFMLENBQXFCN0csV0FBckIsR0FBbUN2QixLQUFLdUIsV0FBeEM7QUFDQSxpQkFBSzZHLGVBQUwsQ0FBcUIzRyxXQUFyQixHQUFtQ3pCLEtBQUt5QixXQUF4QztBQUNBLGlCQUFLMkcsZUFBTCxDQUFxQmxJLFdBQXJCLEdBQW1DNkgsU0FBbkM7QUFDQSxpQkFBS0ssZUFBTCxDQUFxQi9HLFNBQXJCLEdBQWlDckIsS0FBS3FCLFNBQXRDO0FBQ0EsaUJBQUsrRyxlQUFMLENBQXFCaEgsRUFBckIsR0FBMEJwQixLQUFLb0IsRUFBL0I7QUFDSDs7Ozs7QUFFTDtxQ0FDaUI7QUFDVCxtQkFBTyxLQUFLZ0gsZUFBTCxDQUFxQjJHLEtBQXJCLEdBQTZCLEtBQXBDO0FBQ0EsaUJBQUszRyxlQUFMLENBQXFCN0csV0FBckIsR0FBbUMsSUFBbkM7QUFDQSxpQkFBSzZHLGVBQUwsQ0FBcUIzRyxXQUFyQixHQUFtQyxJQUFuQztBQUNBLGlCQUFLMkcsZUFBTCxDQUFxQmxJLFdBQXJCLEdBQW1DLElBQW5DO0FBQ0g7OztrQ0FFU3FNLEssRUFBTztBQUNiLGlCQUFLdEssTUFBTCxJQUFleUMsU0FBUzZILEtBQVQsQ0FBZjtBQUNIOzs7a0NBRVNBLEssRUFBTztBQUNiLGlCQUFLdEssTUFBTCxJQUFleUMsU0FBUzZILEtBQVQsQ0FBZjtBQUNIOzs7Ozs7QUFJTDs7O2tCQTNKcUJzQyxJIiwiZmlsZSI6ImNvd3NhbmR0aWdlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB0b29scyBmcm9tIFwiLi4vdG9vbHNcIjtcbmltcG9ydCByb3V0ZSBmcm9tIFwiLi9yb3V0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGdvcml0aG0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkZEhlYWx0aFZhbHVlID0gNTtcbiAgICAgICAgdGhpcy5zdWJIZWFsdGhWYWx1ZSA9IDM7XG4gICAgfVxuXG4gICAgZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kO1xuXG4gICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0YHQvtGB0LXQtNC90LjQuCDQutC70LXRgtC60LhcbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbCA9IG1hcC5jaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsKHVuaXQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDQtdC00YNcbiAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgKi9cbiAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kID0gbWFwLmZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdC5mb29kVHlwZSk7XG5cbiAgICAgICAgaWYgKHVuaXQuZW5lbXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFRPRE8g0YMg0YLQuNCz0YDQsCDQvdC10YIg0LLRgNCw0LPQvtCyXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINCy0YDQsNCz0L7QsijRgtC40LPRgNC+0LIpXG4gICAgICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzID0gbWFwLmZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdC5lbmVteSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0YHQstC+0LHQvtC00L3Ri9C1INGP0YfQtdC50LrQuCDQutGD0LTQsCDQvNC+0LbQvdC+INC/0LXRgNC10LzQtdGB0YLQuNGC0YzRgdGPXG4gICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICovXG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kID0gbWFwLmZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgXCJncm91bmRcIik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGw6IG5laWdoYm9yaW5nc0NlbGwsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2Q6IG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllczogbmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQ6IG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICAgIH07XG4gICAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vLi4vZW50aXR5JztcbmltcG9ydCBEaWVVbml0IGZyb20gJy4vLi4vZGllVW5pdCc7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi8uLi90b29scyc7XG5cbi8vIENPV1MgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvd3NBbGdvcml0aG0gIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy8gQ2VsbCBEaXN0YW5jZVxuICAgICAgICB0aGlzLmRpc3RhbmNlVmlldyA9IDE7XG4gICAgfVxuXG4gICAgYWN0ICh1bml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbih1bml0LCBtYXAsIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogZGF0YTpcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCh0L7RgdC10LTQvdC40LzQuCDQutC70LXRgtC60LDQvNC4ICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLRgNCw0LLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotC40LPRgNCw0LzQuCAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQl9C10LzQu9GR0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICAgKi9cblxuICAgICAgICAvKmlmICh1bml0LmhlYWx0aCA+IDApIHtcbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0YDRj9C00L7QvCDQotC40LPRgNGLXG4gICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8v0JXRgdC70Lgg0LXRgdGC0Ywg0YHQstC+0LHQvtC00L3Ri9C1INC60LvQtdGC0LrQuFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JHQtdC20LjQvCDQvtGCINCi0LjQs9GA0LBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQXdheUZyb21FbmVteShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy/QldGB0LvQuCDQtdGB0YLRjCDRgNGP0LTQvtC8INGC0YDQsNCy0LAg0LXQtNC40Lwg0LXQtSDQuCDRg9Cx0LXQs9Cw0LXQvFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDRgNGP0LTQvtC8INC10LTQsFxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGcmVlKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwLmtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfSovXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCR0LXQttC40Lwg0L7RgiDRgtC40LPRgNCwICtcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlQXdheUZyb21FbmVteSAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtVxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgLy8g0KHQvtGF0YDQsNC90LjQvCDRgdGC0LDRgNGL0LkgVW5pdCDQuCDQtdCz0L4gUkMgKFJvdy9Db2wpXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2wg0Lgg0LfQsNC/0LjRiNC40Lwg0LIg0L3QvtCy0YPRjiDRj9GH0LXQudC60YMg0LrQvtGA0L7QstGDXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSb3cvQ29sINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0KIu0Log0LzRiyDRg9Cx0LXQs9Cw0LXQvCDQuCDQvdC1INC10LTQuNC8INGC0YDQsNCy0YMsINC+0YLQvdC40LzQuNC8INC90LXQvNC90L7Qs9C+INC30LTQvtGA0L7QstGM0Y9cbiAgICAgICAgdW5pdC5zdWJIZWFsdGgodGhpcy5zdWJIZWFsdGhWYWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCV0LTQuNC8INGC0YDQsNCy0YNcbiAgICAgKiBAcGFyYW0gbWFwXG4gICAgICogQHBhcmFtIHVuaXRcbiAgICAgKiBAcGFyYW0gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZVRvRm9vZCAobWFwLCB1bml0LCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8gdW5pdC5zb3VuZEVhdC5zdG9wKCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0LXQtNGLXG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge307XG5cbiAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgbWFwLnNldENlbGwodW5pdCwgbmV3IEVudGl0eSh1bml0UGFyYW0pKTtcblxuICAgICAgICAvLyDQlNC70Y8g0YHRgtCw0YDQvtCz0L4gVW5pdCDQt9Cw0LTQsNC00LjQvCDQvdC+0LLRi9C1IFJvdy9Db2xcbiAgICAgICAgbWFwLnNldENlbGwobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjQvCDQsiDQvNC10L3QtdC00LbQtdGAINGB0LzQtdGA0YLQtdC5INGC0YDQsNCy0YNcbiAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2wsXG4gICAgICAgICAgICBkaWVVbml0VHlwZTogXCJncmFzc1wiLFxuICAgICAgICAgICAgZGllVW5pdElkOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgIG1hcC5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAvLyDQn9GA0Lgg0L/QvtCz0LvQsNGJ0LXQvdC40Lgg0YLRgNCw0LLRiyDQv9GA0LjQsdCw0LLQuNC8INC20LjQt9C90LgsINC+0LPRgNCw0L3QuNGH0LjQvCDQt9C90LDRh9C10L3QuNC10LwgMTAwXG4gICAgICAgIGlmICh1bml0LmhlYWx0aCA8IDEwMCkge1xuXG4gICAgICAgICAgICBpZiAodW5pdC5oZWFsdGggPiA5MCkge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKDEwMCAtIHVuaXQuaGVhbHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgodGhpcy5hZGRIZWFsdGhWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LLQvtCx0L7QtNC90L7QtSDQv9C10YDQtdC80LXRidC10L3QuNC1XG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUZyZWUgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVuaXQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCk7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LUg0YEg0LfQtdC80LvQtdC5XG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggLSAxKTtcblxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kW2NlbGxSYW5kb21Sb3dDb2xdLCBvbGRVbml0KTtcblxuICAgICAgICAvLyDQntCx0L3QvtCy0LjQvCBSQyDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIHVuaXQuc3ViSGVhbHRoKHRoaXMuc3ViSGVhbHRoVmFsdWUpO1xuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIi8vIERFQVRIIEFMR09SSVRNXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vLi4vZW50aXR5JztcbmltcG9ydCBVbml0IGZyb20gJy4vLi4vdW5pdCc7XG5cblxuLy8gR1JPVU5EIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWF0aEFsZ29yaXRobSB7XG4gICAgYWN0IChkZWF0aFVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgaWYgKGRlYXRoVW5pdC51bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQgPCBkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIGRlYXRoVW5pdC51bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQrKztcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gbWFwLmdldE5ld1Jvd0NvbFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Bvc2l0aW9uUm93Q29sKTtcblxuICAgICAgICAgICAgdmFyIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogZGVhdGhVbml0LmRpZVVuaXRJZCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGRlYXRoVW5pdC5kaWVVbml0VHlwZSxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbmV3UG9zaXRpb24ucm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbi5jb2wsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgbmV3VW5pdCA9IG5ldyBVbml0KHVuaXRQYXJhbSk7XG5cbiAgICAgICAgICAgIHZhciBkaWVPYmplY3RzT25NYXBJbmRleCA9IG1hcC5nZXRJbmRleEZyb21EaWVPYmplY3RzT25NYXAoZGVhdGhVbml0KTtcblxuICAgICAgICAgICAgdmFyIGVudGl0eVBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogZGVhdGhVbml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBkZWF0aFVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbChkZWF0aFVuaXQsIG5ldyBFbnRpdHkoZW50aXR5UGFyYW0pKTtcblxuICAgICAgICAgICAgbWFwLnNldENlbGwobmV3VW5pdCwgbmV3VW5pdCk7XG5cbiAgICAgICAgICAgIG1hcC5hZGRUb09iamVjdHNPbk1hcChuZXdVbml0KTtcblxuICAgICAgICAgICAgbWFwLnJlbW92ZVVuaXRGcm9tRGllT2JqZWN0c09uTWFwKGRpZU9iamVjdHNPbk1hcEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5cbi8vIEdSQVNTIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFzc0FsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgYWN0ICgpIHt9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4iLCJpbXBvcnQgQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtJztcblxuLy8gR1JPVU5EIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmRBbGdvcml0aG0gZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGFjdCAoKSB7fTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIiwiaW1wb3J0IHRvb2xzIGZyb20gXCIuLi90b29sc1wiO1xuXG4vLyBSb3V0ZVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1hcFJvdzogMCxcbiAgICBtYXBDb2w6IDAsXG4gICAgREVCVUc6IGZhbHNlLFxuXG4gICAgZ2V0TmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uOiBmdW5jdGlvbiAobWFwLCB1bml0LCBpbmRleE9iamVjdCwgc3RlcHMpIHtcblxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWFwLm1hcERhdGEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codW5pdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codW5pdCk7XG5cbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiA9IFtdO1xuXG4gICAgICAgIHRoaXMubWFwUm93ID0gbWFwLnJvdztcbiAgICAgICAgdGhpcy5tYXBDb2wgPSBtYXAuY29sO1xuXG4gICAgICAgIC8vINC/0L7Qu9GD0YfQuNC8INC40L3RhNC+INC+INGH0LXRgtGL0YDQtdGFINGB0YLQvtGA0L7QvdCw0YUg0L3QsCDQtNC40YHRgtCw0L3RhtC40Lgg0L/QvtC70YPRh9C10L3QvdC+0Lkg0L7RgiBVbml0XG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAxOyBzdGVwIDwgc3RlcHM7IHN0ZXArKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnfC0gc3RlcDogJyArIHN0ZXApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnfC0gc3RlcDogJyArIHN0ZXApO1xuXG4gICAgICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbCA9IHRoaXMuZ2V0TmVpZ2hib3JpbmdzQ2VsbChzdGVwLCB1bml0LCBtYXApO1xuXG4gICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbC5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCf0YDQsNCy0LjQu9GM0L3QviDQvdCw0LfQstCw0YLRjCBcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNJbmZvOiBuZWlnaGJvcmluZ3NDZWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8g0JLQvtGCINC/0YDRj9C8INC30LTQtdGB0Ywg0L/QvtC70YPRh9C40LxcbiAgICAgICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24ucHVzaChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uO1xuICAgIH0sXG5cbiAgICAvLyDQn9C+0LvRg9GH0LjQvCDQuNC90YTQviDRgdC+0YHQtdC00L3QuNGFINGP0YfQtdC10Log0L3QsCDQutCw0LbQtNC+0Lkg0LjRgtGC0LXRgNCw0YbQuNC4XG4gICAgZ2V0TmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24gKHN0ZXAsIHVuaXQsIG1hcCkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICAvLyBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAvLyAgICAgdW5pdC5wb3NpdGlvblJvdyA9IDA7XG4gICAgICAgIC8vICAgICB1bml0LnBvc2l0aW9uQ29sID0gMjtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vINC60L7QvtGA0LTQuNC90LDRgtGLINGD0LPQu9C+0LIgVW5pdFxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQutC+0L7RgNC00LjQvdCw0YLRiyA0LdGFINGB0L7RgtC+0YDQvtC9INC90LAg0L7RgdC90L7QstC1IFVuaXRcbiAgICAgICAgbGV0IHVuaXRTaWRlcyA9IHRoaXMuZ2V0VW5pdEFuZ2xlUG9pbnRzKHN0ZXAsIHVuaXQucG9zaXRpb25Sb3csIHVuaXQucG9zaXRpb25Db2wpO1xuXG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLSB1bml0U2lkZXNcIiwgdW5pdFNpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCd0YPQttC90L4g0L/QvtC70YPRh9C40YLRjCDRj9GH0LXQudC60Lgg0L3QsCDQvtGB0L3QvtCy0LUg0L3QsNC50LTQtdC90YvRhSDRgdGC0L7RgNC+0L0hISFcblxuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviA0LdC10Lwg0YHRgtC+0YDQvtC90LDQvCDQuCDQv9C+0LvRg9GH0LjQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDRj9GH0LXQtdC6LCDQt9Cw0LTQtdC50YHRgtCy0YPQtdC8INC80LDRgdGB0LjQsiDRgSDQutCw0YDRgtC+0Lkg0LjQs9GA0YtcbiAgICAgICAgZm9yIChsZXQgc2lkZSA9IDA7IHNpZGUgPCB1bml0U2lkZXMubGVuZ3RoOyBzaWRlKyspIHtcblxuICAgICAgICAgICAgaWYgKHVuaXRTaWRlc1tzaWRlXS5pc3NldCkge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpZGUnLCBzaWRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2lkZV9uYW1lJywgdW5pdFNpZGVzW3NpZGVdLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0tIFNUQVJUIHNpZGU6IFwiICsgdW5pdFNpZGVzW3NpZGVdLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gc2lkZTogXCIsIHVuaXRTaWRlc1tzaWRlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tLSBzaWRlOiBcIiwgdW5pdFNpZGVzW3NpZGVdKTtcblxuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdFNpZGU6IHVuaXRTaWRlc1tzaWRlXSxcbiAgICAgICAgICAgICAgICAgICAgdW5pdFBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICB1bml0UG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2wsXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbWFwXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFyYW06ICcsIHBhcmFtKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyc2VJbnQodW5pdFNpZGVzW3NpZGVdLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0VG9wX1RPX3JpZ2h0VG9wXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0VG9wX1RPX3JpZ2h0VG9wID0gdGhpcy5nZXRUb3BTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdFRvcF9UT19yaWdodFRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChsZWZ0VG9wX1RPX3JpZ2h0VG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAvLyByaWdodFRvcF9UT19yaWdodEJvdHRvbVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRUb3BfVE9fcmlnaHRCb3R0b20gPSB0aGlzLmdldFJpZ2h0dFNpZGVOZWlnaGJvcmluZ3NDZWxsKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodFRvcF9UT19yaWdodEJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChyaWdodFRvcF9UT19yaWdodEJvdHRvbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbSA9IHRoaXMuZ2V0Qm90dG9tU2lkZU5laWdoYm9yaW5nc0NlbGwocGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0Qm90dG9tX1RPX2xlZnRUb3BcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRCb3R0b21fVE9fbGVmdFRvcCA9IHRoaXMuZ2V0TGVmdFNpZGVOZWlnaGJvcmluZ3NDZWxsKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0Qm90dG9tX1RPX2xlZnRUb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gobGVmdEJvdHRvbV9UT19sZWZ0VG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0tIEVORCBzaWRlOiBcIiArIHVuaXRTaWRlc1tzaWRlXS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcblxuICAgIC8vICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKiDQn9C+0LvRg9GH0LjQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDRj9GH0LXQtdC6INC/0L4g0YHRgtC+0YDQvtC90LDQvCAqL1xuICAgIGdldFRvcFNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG4gICAgICAgIGxldCBlbmRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsQ29sKys7XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbENvbCA8IGVuZENlbGxDb2wpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuICAgIGdldFJpZ2h0dFNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG4gICAgICAgIGxldCBlbmRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsUm93Kys7XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbFJvdyA8IGVuZENlbGxSb3cpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuICAgIGdldEJvdHRvbVNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG4gICAgICAgIGxldCBlbmRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsQ29sLS07XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbENvbCA+IGVuZENlbGxDb2wpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuICAgIGdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mbyA9IFtdO1xuXG4gICAgICAgIGxldCBzdGFydENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uQ29sO1xuICAgICAgICBsZXQgZW5kQ2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlRW5kLnBvc2l0aW9uUm93O1xuXG4gICAgICAgIGxldCBzdGFydENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uUm93O1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCB1bml0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQocGFyYW0udW5pdFBvc2l0aW9uUm93ICsgJycgKyBwYXJhbS51bml0UG9zaXRpb25Db2wpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHN0YXJ0Q2VsbFJvdyArICcnICsgc3RhcnRDZWxsQ29sKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRQb3NpdGlvbkNlbGwgIT09IHNlbGVjdFBvc2l0aW9uQ2VsbCkge1xuICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocGFyYW0ubWFwLmdldENlbGwoc3RhcnRDZWxsUm93LCBzdGFydENlbGxDb2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0Q2VsbFJvdy0tO1xuICAgICAgICB9IHdoaWxlIChzdGFydENlbGxSb3cgPiBlbmRDZWxsUm93KTtcblxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAqIEBwYXJhbSBzdGVwXG4gICAgICogQHBhcmFtIHBvc2l0aW9uUm93XG4gICAgICogQHBhcmFtIHBvc2l0aW9uQ29sXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldFVuaXRBbmdsZVBvaW50czogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdW5pdEFuZ2xlcyA9IFtdO1xuXG4gICAgICAgIGxldCBsZWZ0VG9wLFxuICAgICAgICAgICAgcmlnaHRUb3AsXG4gICAgICAgICAgICByaWdodEJvdHRvbSxcbiAgICAgICAgICAgIGxlZnRCb3R0b207XG5cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LSBnZXRVbml0QW5nbGVQb2ludHM6ICcsIHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgbGVmdFRvcFxuICAgICAgICBsZWZ0VG9wID0gdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbGVmdFRvcDogJywgbGVmdFRvcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnRUb3AuaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvUmlnaHRUb3AgPSB0aGlzLmdldFJpZ2h0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9SaWdodFRvcC5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRUb3AgPSB7cG9zaXRpb25Sb3c6IHRvUmlnaHRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b1JpZ2h0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodFRvcCA9IHtwb3NpdGlvblJvdzogbGVmdFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IGxlZnRUb3AucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bml0QW5nbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gbGVmdFRvcFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGVmdFRvcF9UT19yaWdodFRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogbGVmdFRvcC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBsZWZ0VG9wLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b1JpZ2h0VG9wLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogbGVmdFRvcC5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgcmlnaHRUb3BcbiAgICAgICAgcmlnaHRUb3AgPSB0aGlzLmdldFJpZ2h0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gcmlnaHRUb3A6ICcsIHJpZ2h0VG9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRUb3AuaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvUmlnaHRCb3R0b20gPSB0aGlzLmdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9SaWdodEJvdHRvbS5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHRvUmlnaHRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b1JpZ2h0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiByaWdodFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyByaWdodFRvcFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHJpZ2h0VG9wLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IHJpZ2h0VG9wLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b1JpZ2h0Qm90dG9tLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogcmlnaHRUb3AuaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIHJpZ2h0Qm90dG9tXG4gICAgICAgIHJpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIHJpZ2h0Qm90dG9tOiAnLCByaWdodEJvdHRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0Qm90dG9tLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b0xlZnRCb3R0b20gPSB0aGlzLmdldExlZnRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b0xlZnRCb3R0b20uaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHRvTGVmdEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvTGVmdEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvTGVmdEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiByaWdodEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyByaWdodEJvdHRvbVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogcmlnaHRCb3R0b20ucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvTGVmdEJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IHJpZ2h0Qm90dG9tLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdFVCBsZWZ0Qm90dG9tXG4gICAgICAgIGxlZnRCb3R0b20gPSB0aGlzLmdldExlZnRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBsZWZ0Qm90dG9tOiAnLCBsZWZ0Qm90dG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdEJvdHRvbS5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9MZWZ0VG9wID0gdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9MZWZ0VG9wLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0VG9wID0ge3Bvc2l0aW9uUm93OiB0b0xlZnRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b0xlZnRUb3AucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRUb3AgPSB7cG9zaXRpb25Sb3c6IGxlZnRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiBsZWZ0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIGxlZnRCb3R0b21cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxlZnRCb3R0b21fVE9fbGVmdFRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogbGVmdEJvdHRvbS5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBsZWZ0Qm90dG9tLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b0xlZnRUb3AsXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiBsZWZ0Qm90dG9tLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bml0QW5nbGVzO1xuICAgIH0sXG5cbiAgICBnZXRMZWZ0VG9wQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyAtIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sIC0gc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbmV3UG9zaXRpb246ICcsIG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb24ucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbi5wb3NpdGlvbkNvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGVJc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzc2V0OiBhbmdsZUlzc2V0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFJpZ2h0VG9wQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyAtIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sICsgc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQ6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgKyBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCArIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1VuaXRPdXRPZkJvcmRlcihuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0TGVmdEJvdHRvbUFuZ2xlUG9pbnQ6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgKyBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCAtIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1VuaXRPdXRPZkJvcmRlcihuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNVbml0T3V0T2ZCb3JkZXI6IGZ1bmN0aW9uIChuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKG5ld1Bvc2l0aW9uUm93IDwgMCB8fCBuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIChuZXdQb3NpdGlvbkNvbCA8IDAgfHwgbmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKG5ld1Bvc2l0aW9uUm93IDwgMCB8fCBuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKG5ld1Bvc2l0aW9uQ29sIDwgMCB8fCBuZXdQb3NpdGlvbkNvbCA+ICh0aGlzLm1hcENvbCAtIDEpKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyDQn9C+0L/RgNC+0LHRg9C10Lwg0L3QsNC50YLQuCDQvdC+0LLRg9GOINGP0YfQtdC50LrRgyDQv9GA0LjQsdCw0LLQuNCyINC30L3QsNGH0LXQvdC40LUg0YjQsNCz0LBcbiAgICBmaW5kTmV3QW5nZWw6IGZ1bmN0aW9uIChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0L/QviDRiNCw0LPQsNC8INCyIDQt0YUg0L3QsNC/0YDQsNCy0LvQtdC90LjRj9GFINC4INC/0L7RgdC80L7RgtGA0LjQvCwg0L/QvtC/0LDQtNCw0LXQvCDQu9C4INCyINC/0YDQtdC00LXQu9GLINC60LDRgNGC0YtcbiAgICAgICAgZm9yIChsZXQgc3RwID0gMTsgc3RwIDw9IHN0ZXA7IHN0cCsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHN0cCA8PSBzdGVwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBuZXdBbmdlbCA9IHRoaXMuY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBuZXdBbmdlbDogJywgbmV3QW5nZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld0FuZ2VsLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBbmdlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0ZpbmQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrTmVpZ2hib3JpbmdzQ2VsbEJ5RGlyZWN0aW9uczogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25MZWZ0ID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvbkxlZnQoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uTGVmdC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25MZWZ0OiB0cnVlO1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25MZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkxlZnQ6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25Ub3AgPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvblRvcC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Ub3A6IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvblRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Ub3A6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25SaWdodCA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25SaWdodChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25SaWdodC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25SaWdodDogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uUmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uUmlnaHQ6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25Cb3R0b20gPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uQm90dG9tKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbkJvdHRvbS5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Cb3R0b206IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbkJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Cb3R0b206IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uQ29sIC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93ID49IDApICYmIChuZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApICYmICh0cnlOZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblRvcDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93IC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sID49IDApICYmIChuZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0OiBmdW5jdGlvbiAoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZmluZCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeU5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb25Db2wgKyBzdHA7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93ID49IDApICYmIChuZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApICYmICh0cnlOZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbTogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93ICsgc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sID49IDApICYmIChuZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfVxufSIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuLy4uL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vLi4vdG9vbHMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vcm91dGUnO1xuXG4vLyBUSUdFUlMgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2Vyc0FsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8g0KDQsNC00LjRg9GBINGP0YfQtdC10Log0LIg0YfQtdGC0YvRgNC1INGB0YLQvtGA0L7QvdGLLCDRg9Cy0LXQu9C40YfQtdC9INC90LAg0L7QtNC90YMsINC10YHQu9C4IDQg0YLQviAzXG4gICAgICAgIHRoaXMuZGlzdGFuY2VWaWV3ID0gNDtcbiAgICB9XG5cbiAgICBhY3QgKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgLy8g0JLQvtC+0LfQstGA0LDRgtC40YLRjCDQvtCx0YrQtdC60YIg0YEg0YHQvtGB0LXQtNC90LjQvNC4INGP0YfQtdC50LrQsNC80LhcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiA9IFJvdXRlLmdldE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbihtYXAsIHVuaXQsIGluZGV4T2JqZWN0LCB0aGlzLmRpc3RhbmNlVmlldyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJORUlHSEJPUklOR1NDRUxMSU5GT1JNQVRJT046IFwiLCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24pO1xuXG4gICAgICAgIC8vIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGE6XG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQmtCw0YDRgtC+0LkgICAgICAgICAgICAgIC0gZGF0YS5tYXBcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCh0L7RgdC10LTQvdC40LzQuCDQutC70LXRgtC60LDQvNC4ICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLRgNCw0LLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotC40LPRgNCw0LzQuCAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQl9C10LzQu9GR0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICAgKi9cblxuICAgICAgIC8qIGlmICh1bml0LmhlYWx0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0LXQtNCwXG4gICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGcmVlKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWFwLmtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfSovXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCV0LTQuNC8INC60L7RgNC+0LLRg1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlVG9Gb29kIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDQutC+0YDQvtCyXG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoIC0xKTtcblxuICAgICAgICAvLyDQrdGC0LAg0Y/Rh9C10LnQutCwINGP0LLQu9GP0LXRgtGM0YHRjyDQutC+0YDQvtCy0L7QuSwg0YIu0LUg0JXQlNCe0JkhISFcbiAgICAgICAgLy8gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdXG4gICAgICAgIC8vIHVuaXQuZWF0ZW4odHJ1ZSwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCBpbmRleCDRgdGK0LXQtNC10L3QvtC5INC60L7RgNC+0LLRiyDQuNC3INC80LDRgdGB0LjQstCwIG9iamVjdHNPbk1hcFxuICAgICAgICBsZXQgZm9vZEluZGV4ID0gbWFwLmdldEluZGV4RnJvbU9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0pO1xuXG4gICAgICAgIC8vINCf0L7QvNC10YLQuNC70Lgg0YLQuNCz0YDQsCDRh9GC0L4g0L7QvSDRgdGK0LXQuyDQutC+0YDQvtCy0YNcbiAgICAgICAgdW5pdC5lYXRlbihuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGZvb2RJbmRleCk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgtC40LPRgNCwINC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCj0LTQsNC70LjQvCDQutC+0YDQvtCy0YMg0LjQtyDQuNCz0YDQvtCy0L7Qs9C+INC80LDRgdGB0LjQstCwXG4gICAgICAgIG1hcC5yZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChmb29kSW5kZXgpO1xuXG4gICAgICAgIGRlbGV0ZSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF07XG5cbiAgICAgICAgLy8g0J/RgNC4INC/0L7Qs9C70LDRidC10L3QuNC4INGC0YDQsNCy0Ysg0L/RgNC40LHQsNCy0LjQvCDQttC40LfQvdC4LCDQvtCz0YDQsNC90LjRh9C40Lwg0LfQvdCw0YfQtdC90LjQtdC8IDEwMFxuICAgICAgICBpZiAodW5pdC5oZWFsdGggPCAxMDAgKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0LmhlYWx0aCA+IDkwKSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgoMTAwLXVuaXQuaGVhbHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgodGhpcy5hZGRIZWFsdGhWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LLQvtCx0L7QtNC90L7QtSDQv9C10YDQtdC80LXRidC10L3QuNC1XG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUZyZWUgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge307XG5cbiAgICAgICAgLy8gdW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3RcblxuICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INGD0LHQuNC7INC70Lgg0LTQsNC90L3Ri9C5INGC0LjQs9GAINGC0L7Qu9GM0LrQviDRh9GC0L4g0LrQvtGA0L7QstGDLFxuICAgICAgICAvLyDQtdGB0LvQuCDQtNCwLCDRgtC+INC90LAg0YHQu9C10LQuINGI0LDQs9C1INC/0L7RgdGC0LDQstC40Lwg0L3QsCDQtdCz0L4g0LzQtdGB0YLQviDRgtCw0LHQu9C40YfQutGDdW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3RcbiAgICAgICAgaWYgKHVuaXQuaXNFYXRlbigpKSB7XG5cbiAgICAgICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgICAgIGRpZVVuaXRUeXBlOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgZGllVW5pdElkOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5pZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgICAgICBkaWVVbml0LnNldEluZGV4T2JqZWN0KHVuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0KTtcblxuICAgICAgICAgICAgbWFwLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBkaWVVbml0KTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRVbml0LnJlc2V0RWF0ZW4oKTtcblxuICAgICAgICBvbGRVbml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDRgSDQt9C10LzQu9C10LlcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgRGVhdGhBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWVVbml0IGV4dGVuZHMgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICBzdXBlcihwYXJhbSk7XG5cbiAgICAgICAgdGhpcy5pbmRleE9iamVjdCA9IHBhcmFtLmluZGV4T2JqZWN0O1xuXG4gICAgICAgIHRoaXMuYWxnb3JpdG1zID0gbmV3IERlYXRoQWxnb3JpdGhtKCk7XG5cbiAgICAgICAgdGhpcy5kaWVVbml0VHlwZSA9IHBhcmFtLmRpZVVuaXRUeXBlO1xuICAgICAgICB0aGlzLmRpZVVuaXRJZCA9IHBhcmFtLmRpZVVuaXRJZDtcblxuICAgICAgICB0aGlzLnVuaXRSZXN1cmVjdGlvbkludGVydmFsID0gMztcbiAgICAgICAgdGhpcy51bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQgPSAwO1xuXG4gICAgICAgIC8vIHRoaXMuc291bmREaWUgPSBuZXcgR2FtZVNvdW5kcyhcImF1ZGlvL2RpZV9cIiArIHRoaXMuY2xhc3NOYW1lICsgXCIubXAzXCIpO1xuICAgIH1cbn1cblxuRGllVW5pdC5wcm90b3R5cGUuc2V0SW5kZXhPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXhPYmplY3QpIHtcbiAgICB0aGlzLmluZGV4T2JqZWN0ID0gaW5kZXhPYmplY3Q7XG59O1xuXG5cbi8qKlxuICog0KDQsNC30L3Ri9C1INC00LXQudGB0YLQstC40Y8g0L7QsdGK0LXQutGC0LBcbiAqL1xuRGllVW5pdC5wcm90b3R5cGUuYWN0aW9uID0gZnVuY3Rpb24gKG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICB0aGlzLmFsZ29yaXRtcy5hY3QodGhpcywgbWFwLCBpbmRleE9iamVjdCk7XG59O1xuXG5cbi8qKlxuICog0J7QsdC90L7QstC40LwgUm93L0NvbCDQvtCx0YrQtdC60YLQsFxuICogQHBhcmFtIHVuaXRcbiAqL1xuRGllVW5pdC5wcm90b3R5cGUudXBkYXRlUm93Q29sID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgICB0aGlzLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICB0aGlzLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbn07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbS5pZDtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBwYXJhbS5jbGFzc05hbWU7XG4gICAgICAgIHRoaXMucG9zaXRpb25Sb3cgPSBwYXJhbS5vYmpQb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbCA9IHBhcmFtLm9ialBvc2l0aW9uQ29sO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J7QsdC90L7QstC40LwgUm93L0NvbCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICovXG4gICAgdXBkYXRlUm93Q29sICh1bml0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCS0YvQstC+0LQgSFRNTCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J2ItdW5pdCBcIit0aGlzLmNsYXNzTmFtZStcIic+PC9kaXY+XCI7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY2VuZSBmcm9tICcuL3NjZW5lJztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIC8qKlxuICAgICAqIE9CSiBHQU1FXG4gICAgICogQHBhcmFtIHNldHRpbmdcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZyA9IHNldHRpbmc7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8g0KPRgdGC0LDQvdC+0LLQuNC8INGA0LXQttC40Lwg0LjQs9GA0YtcbiAgICAgICAgdGhpcy5kZXZNb2RlID0gc2V0dGluZy5kZXZNb2RlIHx8IGZhbHNlO1xuXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjQvCDRgdC60L7RgNC+0YHRgtGMINC40LPRgNC+0LLQvtCz0L4g0YbQuNC60LvQsFxuICAgICAgICB0aGlzLnRpbWVSZW5kZXIgPSBzZXR0aW5nLnRpbWVSZW5kZXIgfHwgNTAwO1xuXG4gICAgICAgIHRoaXMuYnRuU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1idXR0b25zX19idG4tc3RhcnQnKTtcbiAgICAgICAgdGhpcy5idG5QYXVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWJ1dHRvbnNfX2J0bi1wYXVzZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdBTUUgTE9PUFxuICAgICAqL1xuICAgIHJ1biAoKSB7XG4gICAgICAgIC8vINCh0L7Qt9C00LDQtNC40Lwg0L3QvtCy0YPRjiDRgdGG0LXQvdGDXG4gICAgICAgIGxldCBzY2VuZSA9IG5ldyBTY2VuZSh0aGlzLnNldHRpbmcpO1xuXG4gICAgICAgIC8vINCh0L7Qt9C00LDQtNC40Lwg0LjQs9GA0L7QstC+0LUg0L/QvtC70LUg0L3QsCDRgdGG0LXQvdC1XG4gICAgICAgIGlmIChzY2VuZS5idWlsZCgpKSB7XG5cbiAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJywn0JjQs9GA0LAg0LfQsNCz0YDRg9C20LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsXCLQndCw0LbQvNC40YLQtSAn0J3QsNGH0LDRgtGMINC40LPRgNGDJy5cIiwgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IGxvb3A7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kZXZNb2RlKSB7XG5cbiAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINCyINC+0LHRi9GH0L3QvtC8INGA0LXQttC40LzQtS4nLCAnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC30LDQv9GD0YnQtdC90LAuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JPQu9Cw0LLQvdGL0LkgTG9vcFxuICAgICAgICAgICAgICAgICAgICBsb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUuaXNzZXRPYmplY3RPbk1hcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmFjdGlvbk9uTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCBzZWxmLnRpbWVSZW5kZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idG5QYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb29wKTtcblxuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC+0YHRgtCw0L3QvtCy0LvQtdC90LAuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lLmlzc2V0T2JqZWN0T25NYXAoKSkge1xuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINCyINGA0LXQttC40LzQtSDRgNCw0LfRgNCw0LHQvtGC0YfQuNC60LAuJywgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgICAgICAgICBzY2VuZS5kaWVNYW5hZ2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmFjdGlvbk9uTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJywn0JrQvtC90LXRhiDQuNCz0YDRiy4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIgKCkge1xuICAgICAgICBhbGVydCgnR2FtZSBPdmVyJyk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBzZXR0aW5nIGZyb20gXCIuL3NldHRpbmdcIjtcblxuLy8g0J/QvtGB0LvQtSDQt9Cw0LPRgNGD0LfQutC4INC00L7QutGD0LzQtdC90YLQsCDQt9Cw0L/Rg9GB0YLQuNC8INC40LPRgNGDXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkLmxOb3RpZnkoKTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoc2V0dGluZyk7XG5cbiAgICBnYW1lLnJ1bigpO1xufSk7XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCBVbml0IGZyb20gJy4vdW5pdCc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuL3Rvb2xzJztcblxuLyoqXG4gKiDQmtC70LDRgdGBINGA0LDQsdC+0YLRiyDRgSDQutCw0YDRgtC+0LlcbiAqIEBwYXJhbSBzZXR0aW5nXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gW107XG5cbiAgICAgICAgLy8g0J7QsdGK0LXQutGC0Ysg0LTQu9GPINC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzID0gc2V0dGluZy5tYXBPYmplY3RzO1xuXG4gICAgICAgIC8vINCh0L/QuNGB0L7QuiDQvtCx0YrQtdC60YLQvtCyLCDQutC+0YLQvtGA0YvQtSDQt9Cw0LTQtdC50YHRgtCy0L7QstCw0L3QvdGLINC90LAg0LrQsNGA0YLQtVxuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5yb3cgPSBzZXR0aW5nLm1hcFNpemUucm93IHx8IDA7XG4gICAgICAgIHRoaXMuY29sID0gc2V0dGluZy5tYXBTaXplLmNvbCB8fCAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J/QvtGB0YLRgNC+0LjQvCDQv9GD0YHRgtGD0Y4g0LrQsNGA0YLRgyDQvdCwINC+0YHQvdC+0LLQtSDQvdCw0YfQsNC70YzQvdGL0YUgUm93L0NvbFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hcERhdGEucHVzaChbXSkgPCB0aGlzLnJvdykgO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcERhdGEubGVuZ3RoID09IHRoaXMucm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCT0LXQvdC10YDQsNGG0LjRjyDQutCw0YDRgtGLXG4gICAgICovXG4gICAgZ2VuZXJhdGUoKSB7XG5cbiAgICAgICAgbGV0IG9iaklEID0gMDtcblxuICAgICAgICBmb3IgKGxldCBvYmplY3ROYW1lIGluIHRoaXMubWFwT2JqZWN0cykge1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3ROYW1lKTtcbiAgICAgICAgICAgIGxldCBvYmpNaW4gPSB0aGlzLm1hcE9iamVjdHNbb2JqZWN0TmFtZV0ubWluO1xuICAgICAgICAgICAgbGV0IG9iak1heCA9IHRoaXMubWFwT2JqZWN0c1tvYmplY3ROYW1lXS5tYXg7XG5cbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC+0LHRitC10LrRgiDRj9Cy0LvRj9C10YLRjNGB0Y8g0YHRgtCw0YLQuNC60L7QuSxcbiAgICAgICAgICAgIC8vINGC0L4g0L/QvtGB0YLQsNGA0LXQvNGB0Y8g0LTQsNGC0Ywg0L/QviDQvNCw0LrRgdC40LzRg9C80YMg0LfQvdCw0YfQtdC90LjRjyBtaW4vbWF4XG4gICAgICAgICAgICAvLyDQtNC70Y8g0L/QvtC70L3QvtCz0L4g0LfQsNC/0L7Qu9C90LXQvdC40Y8g0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuICAgICAgICAgICAgaWYgKG9iak1pbiA9PT0gbnVsbCAmJiBvYmpNYXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvYmpNaW4gPSAodGhpcy5yb3cgKyB0aGlzLmNvbCkgKiAyO1xuICAgICAgICAgICAgICAgIG9iak1heCA9ICh0aGlzLnJvdyArIHRoaXMuY29sKSAqIDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0LrQvtC7LdCy0L4g0L7QsdGK0LXQutGC0L7QsiDQvdCwINC60LDRgNGC0LVcbiAgICAgICAgICAgIGxldCBvYmpDb3VudE9uTWFwID0gdG9vbHMucmFuZG9tSW50ZWdlcihvYmpNaW4sIG9iak1heCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqZWN0TmFtZVtvYmpDb3VudE9uTWFwXTogXCIgKyBvYmplY3ROYW1lICsgXCIgXCIgKyBvYmpDb3VudE9uTWFwKTtcblxuICAgICAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0Y3RgtC+0LzRgyDQutC+0LvQuNGH0LXQstGB0YLQstGDXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakNvdW50T25NYXA7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IG1hcFJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXBSb3dDb2xOb3JtYWw6ICcsIG1hcFJvd0NvbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbWFwUm93Q29sLnJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBtYXBSb3dDb2wuY29sXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgRW50aXR5KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT0gJ2Nvd3MnIHx8IG9iamVjdE5hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9PYmplY3RzT25NYXAodW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdFNldHRpbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpJRDogb2JqSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJ5TmV3R2VuZXJhdGUodW5pdFNldHRpbmcsIG9iakNvdW50T25NYXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JqSUQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7QstGC0L7RgNC90LDRjyDQs9C10L3QtdGA0LDRhtC40Y8sINCyINGB0LvRg9GH0LjQuCDQt9Cw0L3Rj9GC0L7Qs9C+INC80LXRgdGC0LAg0LIg0LzQsNGB0YHQuNCy0LVcbiAgICAgKiBAcGFyYW0gb2JqZWN0U2V0dGluZ1xuICAgICAqIEBwYXJhbSBjb3VudFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHRyeU5ld0dlbmVyYXRlKG9iamVjdFNldHRpbmcsIGNvdW50KSB7XG5cbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDRjdGC0L7QvNGDINC60L7Qu9C40YfQtdCy0YHRgtCy0YNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vINGB0L7Qt9C00LDQtNC40Lwg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LTQu9GPINC/0YDQvtGB0YLQsNCy0LvQtdC90LjRj1xuICAgICAgICAgICAgbGV0IG1hcFJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21hcFJvd0NvbFJlY3Vyc2l2ZTogJywgbWFwUm93Q29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG9iamVjdFNldHRpbmcub2JqSUQsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbWFwUm93Q29sLnJvdyxcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG1hcFJvd0NvbC5jb2xcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbGV0IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBFbnRpdHkodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPSB1bml0O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSAnY293cycgfHwgb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9PYmplY3RzT25NYXAodW5pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRTZXR0aW5nID0ge1xuICAgICAgICAgICAgICAgICAgICBvYmpJRDogb2JqZWN0U2V0dGluZy5vYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cnlOZXdHZW5lcmF0ZSh1bml0U2V0dGluZywgY291bnQgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvRjNC90YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCwINC+0YHQvdC+0LLQtSDQutC+0Lst0LLQviDRgdGC0YDQvtC6INC4INC60L7Qu9C+0L3QvtC6XG4gICAgICogQHJldHVybnMge3tyb3c6ICosIGNvbDogKn19XG4gICAgICovXG4gICAgZ2V0UmFuZG9tUm93Q29sQ29vcmQoKSB7XG4gICAgICAgIGxldCBjb3VudFJvdyA9IHRoaXMucm93LFxuICAgICAgICAgICAgY291bnRDb2wgPSB0aGlzLmNvbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93OiB0b29scy5yYW5kb21JbnRlZ2VyKDAsIGNvdW50Um93KSxcbiAgICAgICAgICAgIGNvbDogdG9vbHMucmFuZG9tSW50ZWdlcigwLCBjb3VudENvbClcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjaGVja1JvdXRlICgpIHtcblxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICB9XG4gICAgXG4gICAgZ2V0UmFuZG9tUm93Q29sQmFzZWRPblVuaXQoY2VsbCwgc3RlcHMpIHtcbiAgICAgICAgbGV0IGlzc2V0Um91dGUgPSB0aGlzLnRyeVJvdXRlKHN0ZXBzKTtcblxuXG5cblxuICAgICAgICAvLyBsZXQgcm93TWluID0gKChjZWxsLnBvc2l0aW9uUm93IC0gMSkgPj0gMCkgPyAoY2VsbC5wb3NpdGlvblJvdyAtIDEpIDogMDtcbiAgICAgICAgLy8gbGV0IHJvd01heCA9ICgoY2VsbC5wb3NpdGlvblJvdyArIDEpIDw9IHRoaXMucm93KSA/IChjZWxsLnBvc2l0aW9uUm93ICsgMSkgOiB0aGlzLnJvdztcblxuICAgICAgICAvLyBsZXQgY29sTWluID0gKChjZWxsLnBvc2l0aW9uQ29sIC0gMSkgPj0gMCkgPyAoY2VsbC5wb3NpdGlvblJvdyAtIDEpIDogMDtcbiAgICAgICAgLy8gbGV0IGNvbE1heCA9ICgoY2VsbC5wb3NpdGlvbkNvbCArIDEpIDw9IHRoaXMuY29sKSA/IChjZWxsLnBvc2l0aW9uQ29sICsgMSkgOiB0aGlzLmNvbDtcblxuICAgICAgICAvLyBsZXQgbmV3UG9zaXRpb25Sb3csXG4gICAgICAgIC8vICAgICBuZXdQb3NpdGlvbkNvbDtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gbmV3UG9zaXRpb25Sb3cgPSB0aGlzLmdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKHJvd01pbiwgcm93TWF4LCBjZWxsLnBvc2l0aW9uUm93KTtcbiAgICAgICAgLy8gbmV3UG9zaXRpb25Db2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKGNvbE1pbiwgY29sTWF4LCBjZWxsLnBvc2l0aW9uUm93KTtcblxuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAvLyAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sXG4gICAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUobWluQ2VsbCwgbWF4Q2VsbCwgZXhjbHVkZVZhbHVlKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICB2YWx1ZSA9IHRvb2xzLnJhbmRvbUludGVnZXIobWluQ2VsbCwgbWF4Q2VsbCk7XG5cbiAgICAgICAgd2hpbGUgKHZhbHVlID09IGV4Y2x1ZGVWYWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b29scy5yYW5kb21JbnRlZ2VyKG1pbkNlbGwsIG1heENlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cblxuICAgIGdldE5ld1Jvd0NvbFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRk9SIE5FVyBVTklUIEdFTkVSRVRFIE5FVyBQT1NJVElPTjogVFJZW1wiICsgKGkrKykgKyBcIl0gLT4gW1IoXCIgKyBuZXdQb3NpdGlvblJvd0NvbC5yb3cgKyBcIik6QyhcIiArIG5ld1Bvc2l0aW9uUm93Q29sLmNvbCArIFwiKV1cIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1hcERhdGFbbmV3UG9zaXRpb25Sb3dDb2wucm93XVtuZXdQb3NpdGlvblJvd0NvbC5jb2xdLmNsYXNzTmFtZSA9PT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQb3NpdGlvblJvd0NvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNC00LjQvCDRj9GH0LXQudC60YNcbiAgICAgKiBAcGFyYW0gb2xkVW5pdFxuICAgICAqIEBwYXJhbSBuZXdVbml0XG4gICAgICovXG4gICAgc2V0Q2VsbChvbGRVbml0LCBuZXdVbml0KSB7XG5cbiAgICAgICAgdGhpcy5tYXBEYXRhW29sZFVuaXQucG9zaXRpb25Sb3ddW29sZFVuaXQucG9zaXRpb25Db2xdID0gbmV3VW5pdDtcblxuICAgICAgICB0aGlzLm1hcERhdGFbb2xkVW5pdC5wb3NpdGlvblJvd11bb2xkVW5pdC5wb3NpdGlvbkNvbF0udXBkYXRlUm93Q29sKG9sZFVuaXQpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGP0YfQtdC50LrRg1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblJvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbkNvbFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldENlbGwocG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcERhdGFbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sXTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICBhZGRUb09iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwLnB1c2godW5pdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIHJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwLnNwbGljZShpbmRleE9iamVjdCwgMSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBEaWVPYmplY3RzT25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDRgdC80LXRgNGC0LggdW5pdHNcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIHJlbW92ZVVuaXRGcm9tRGllT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwLnNwbGljZShpbmRleE9iamVjdCwgMSk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7QsdC90L7QstC40Lwg0LTQu9GPIFVuaXQg0LXQs9C+IFJDKFJvdy9Db2wpINCyINC80LDRgdGB0LjQstC1IE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgdXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKHVuaXQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvQuNC8INC+0LHRitC10LrRglxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAga2lsbFVuaXQodW5pdCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICB0aGlzLnJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8INC80L7Qs9C40LvQutGDXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkZWF0aFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGRpZVVuaXRUeXBlOiB1bml0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGRpZVVuaXRJZDogdW5pdC5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICB0aGlzLnNldENlbGwodW5pdCwgZGllVW5pdCk7XG5cbiAgICAgICAgdGhpcy5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRpZU9iamVjdHNPbk1hcCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDQu9C4INC10YnQtSDQvtCx0YrQtdC60YLRiyDQsiDQvNCw0YHRgdC40LLQtSDQtNC70Y8g0YHRg9GJ0LXQstGB0YLQstC+0LLQsNC90LjRjyDQuNCz0YDRi1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgaXNzZXRPYmplY3RPbk1hcCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm9iamVjdHNPbk1hcC5sZW5ndGggPiAwID8gMSA6IDApO1xuICAgIH07XG5cblxuLy8g0J/RgNC+0LLQtdGA0LjQvCDRgdC+0YHQtdC00L3QuNC4INC60LvQtdGC0LrQuCArXG4gICAgY2hlY2tVbml0TmVpZ2hib3JpbmdzQ2VsbCh1bml0KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHVuaXQuY2xhc3NOYW1lID09ICd0aWdlcnMnXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgdW5pdC5jbGFzc05hbWUgPT0gJ2Nvd3MnXG4gICAgICAgICkge1xuXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wUmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHRCb3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnRCb3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0VG9wJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvblJvdyA9IHBhcnNlSW50KHVuaXQucG9zaXRpb25Sb3cpO1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNvbCA9IHBhcnNlSW50KHVuaXQucG9zaXRpb25Db2wpO1xuICAgICAgICAgICAgLy8gbGV0IG1hcERhdGUgPSB0aGlzLm1hcERhdGE7XG5cbiAgICAgICAgICAgIC8vINCd0LUg0LfQsNCx0YvRgtGMINC/0YDQviDQs9GA0LDQvdC40YbRiyDQutCw0YDRgtGLXG4gICAgICAgICAgICBsZXQgYm9yZGVyID0ge1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB0b3BSaWdodDogdGhpcy5jb2wsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRoaXMuY29sLFxuICAgICAgICAgICAgICAgIHJpZ2h0Qm90dG9tOiB0aGlzLmNvbCxcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMucm93LFxuICAgICAgICAgICAgICAgIGxlZnRCb3R0b206IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0VG9wOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWFwRGF0ZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBMOlwiLCB1bml0UG9zaXRpb25Sb3csIHVuaXRQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIC8vIFRPUCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstCy0LXRgNGF0YMgK1xuICAgICAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbMF0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzBdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93IC0gMV1bdW5pdFBvc2l0aW9uQ29sXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBUT1BfUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQstC10YDRhdGDLdCy0L/RgNCw0LLQviArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3BcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci50b3BSaWdodFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbMV0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzFdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93IC0gMV1bdW5pdFBvc2l0aW9uQ29sICsgMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQv9GA0LDQstC+ICtcbiAgICAgICAgICAgIGlmICgodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIucmlnaHQpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1syXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbMl0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3ddW3VuaXRQb3NpdGlvbkNvbCArIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFJJR0hUX0JPVFRPTSDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstC/0YDQsNCy0L4t0LLQvdC40LfRgyArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCArIDEpIDwgYm9yZGVyLnJpZ2h0Qm90dG9tXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1szXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbM10uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgKyAxXVt1bml0UG9zaXRpb25Db2wgKyAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBCT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0LLQvdC40LfRgyArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzRdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s0XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyArIDFdW3VuaXRQb3NpdGlvbkNvbF07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTEVGVF9CT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsC3QstC90LjQt9GDICtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uUm93ICsgMSkgPCBib3JkZXIuYm90dG9tXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRCb3R0b21cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzVdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s1XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyArIDFdW3VuaXRQb3NpdGlvbkNvbCAtIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIExFRlQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsCArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvbkNvbCAtIDEpID49IGJvcmRlci5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbNl0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzZdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93XVt1bml0UG9zaXRpb25Db2wgLSAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBMRUZUX1RPUCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQu9C10LLQsC3QstCy0LXRgNGF0YMgK1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzddLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s3XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyAtIDFdW3VuaXRQb3NpdGlvbkNvbCAtIDFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnVuaXQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2VsbHMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJST1c6IFwiICsgdW5pdFBvc2l0aW9uUm93LCBcIkNPTDogXCIgKyB1bml0UG9zaXRpb25Db2wgKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7RgtGE0LjQu9GM0YLRgNGD0LXQvCDRj9GH0LXQudC60Lgg0L/QviDRgtC40L/RgyB1bml0VHlwZVxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsXG4gICAgICogQHBhcmFtIHVuaXRUeXBlXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdFR5cGUpIHtcblxuICAgICAgICBsZXQgYXJyID0gW107XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQsdC10YDQtdC8INC/0L7Qu9GD0YfQtdC90L3Ri9C5INC80LDRgdGB0LjQsiDRgSDRj9GH0LXQudC60LDQvNC4INC90LDRhdC+0LTRj9GJ0LjQvNC40YHRjyDRgNGP0LTQvtC8XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3JpbmdzQ2VsbC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAvLyDQr9GH0LXQudC60LAg0L3QtSDQstGL0YXQvtC00LjRgiDQt9CwINCz0YDQsNC90LjRhtGLXG4gICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5leGlzdCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQuY2xhc3NOYW1lID09IHVuaXRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC40L3QtNC10LrRgSDQutC+0YDQvtCy0Ysg0L/RgNC4INC10LUg0YHRitC10LTQsNC90LjQuFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbmRleEZyb21PYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5vYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID09IHVuaXQucG9zaXRpb25Sb3dcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9PSB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbi8vTUFQIERFQVRIIE1BTkFHRVxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC40L3QtNC10LrRgSDQutC+0YDQvtCy0Ysg0L/RgNC4INC10LUg0YHRitC10LTQsNC90LjQuFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbmRleEZyb21EaWVPYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5kaWVPYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID09IHVuaXQucG9zaXRpb25Sb3dcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9PSB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGREaWVVbml0VG9EaWVBcnJheSh1bml0KSB7XG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwLnB1c2godW5pdCk7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgTWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5cbi8qKlxuICog0JjQs9GA0L7QstCw0Y8g0YHRhtC10L3QsFxuICogQHBhcmFtIHNldHRpbmdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1nYW1lX19wbGFpbicpO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoc2V0dGluZyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC60LDRgNGC0YMg0Lgg0LfQsNC/0L7Qu9C90LjQvCDQtdC1INC+0LHRitC10LrRgtCw0LzQuFxuICAgICAqL1xuICAgIGJ1aWxkICgpIHtcblxuICAgICAgICBpZiAodGhpcy5tYXAuaW5pdCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2VuZXJhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsCDQt9Cw0L/QvtC70L3QtdC90L3QvtC5INC60LDRgNGC0YtcbiAgICAgKi9cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBsZXQgbWFwSFRNTCA9ICcnO1xuXG5cbiAgICAgICAgLy8g0J/QvtGB0YLRgNC+0LjQvCDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtVxuICAgICAgICBmb3IgKGxldCBwb3NpdGlvblJvdyA9IDA7IHBvc2l0aW9uUm93IDwgdGhpcy5tYXAucm93OyBwb3NpdGlvblJvdysrKSB7XG4gICAgICAgICAgICBtYXBIVE1MICs9IFwiPGRpdiBjbGFzcz0ncm93Jz5cIjtcbiAgICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uQ29sID0gMDsgcG9zaXRpb25Db2wgPCB0aGlzLm1hcC5jb2w7IHBvc2l0aW9uQ29sKyspIHtcblxuICAgICAgICAgICAgICAgIC8vIERFViBNT0RFXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxDb29yZGluYXRlID0gXCI8ZGl2IGNsYXNzPSdjZWxsQ29vcmRpbmF0ZSc+XCIgKyBwb3NpdGlvblJvdyArIFwiIDogXCIgKyBwb3NpdGlvbkNvbCArIFwiPC9kaXY+XCI7XG5cbiAgICAgICAgICAgICAgICBtYXBIVE1MICs9IFwiPGRpdiBjbGFzcz0nY2VsbCc+XCIgKyBjZWxsQ29vcmRpbmF0ZSArIFwiIFwiICsgdGhpcy5tYXAuZ2V0Q2VsbChwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpLnNob3coKSArIFwiPC9kaXY+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXBIVE1MICs9IFwiPC9kaXY+XCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjQvCDRgdC+0LHRgNCw0L3QvdGD0Y4gSFRNTCDQutCw0YDRgtGDINCyIERPTVxuICAgICAgICB0aGlzLnBsYWluLmlubmVySFRNTCA9IG1hcEhUTUw7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JTQtdC50YHRgtCy0LjRjyDQstGB0LXRhSDQvtCx0YrQtdC60YLQvtCyINC90LAg0LrQsNGA0YLQtVxuICAgICAqL1xuICAgIGFjdGlvbk9uTWFwICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXAub2JqZWN0c09uTWFwKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5tYXAub2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgdGhpcy5tYXAub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5hY3Rpb24odGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkaWVNYW5hZ2VyICgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5tYXAuZGllT2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0uYWN0aW9uKHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINC70Lgg0LXRidC1INC+0LHRitC10LrRgtGLINCyINC80LDRgdGB0LjQstC1INC00LvRjyDRgdGD0YnQtdCy0YHRgtCy0L7QstCw0L3QuNGPINC40LPRgNGLXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBpc3NldE9iamVjdE9uTWFwICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmlzc2V0T2JqZWN0T25NYXAoKTtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiXG4vLyBQUk9EXG4vKmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnYW1lQ29udGFpbmVySUQ6ICdiLWdhbWUnLFxuICAgIG1hcFNpemU6IHtcbiAgICAgICAgcm93OiA5LFxuICAgICAgICBjb2w6IDIzXG4gICAgfSxcbiAgICBtYXBPYmplY3RzOiB7XG4gICAgICAgIGdyYXNzOiB7XG4gICAgICAgICAgICBtaW46IDkwLFxuICAgICAgICAgICAgbWF4OiAxNzVcbiAgICAgICAgfSxcbiAgICAgICAgY293czoge1xuICAgICAgICAgICAgbWluOiAxNSxcbiAgICAgICAgICAgIG1heDogMjBcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogNTAwXG59OyovXG5cbi8vIERFVlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVDb250YWluZXJJRDogJ2ItZ2FtZScsXG4gICAgbWFwU2l6ZToge1xuICAgICAgICByb3c6IDYsXG4gICAgICAgIGNvbDogNlxuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA3LFxuICAgICAgICAgICAgbWF4OiAxM1xuICAgICAgICB9LFxuICAgICAgICBjb3dzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogMTUzMFxufTtcblxuIiwiLy8gQVVESU8gSU4gR0FNRVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNvdW5kcyB7XG4gICAgY29uc3RydWN0b3IoZmlsZSkge1xuICAgICAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKGZpbGUpOyAgIFxuICAgIH1cblxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICB9O1xuXG4gICAgLy8g0KTRg9C90LrRhtC40Y8gc3RvcCDQtNC70Y8gQXVkaW86XG4gICAgc3RvcCAoKSB7XG4gICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5jdXJyZW50VGltZSA9IDAuMDtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiLy8g0JLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3Ri9C1INGE0YPQvdC60YbQuNC4INC00LvRjyDQuNCz0YDRi1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQvtGJ0Y/QtdGCINGB0LvRg9GH0LDQudC90L7QtSDRh9C40YHQu9C+INCyINC00LjQsNC/0LDQt9C+0L3QtSBNaW4vTWF4XG4gICAgICogQHBhcmFtIG1pblxuICAgICAqIEBwYXJhbSBtYXhcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByYW5kb21JbnRlZ2VyOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgR3Jhc3NBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZ3Jhc3NBbGdvcml0aG0nO1xuaW1wb3J0IENvd3NBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vY293c0FsZ29yaXRobSc7XG5pbXBvcnQgVGlnZXJzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL3RpZ2Vyc0FsZ29yaXRobSc7XG5pbXBvcnQgR3JvdW5kQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2dyb3VuZEFsZ29yaXRobSc7XG5pbXBvcnQgR2FtZVNvdW5kcyBmcm9tICcuL3NvdW5kJztcblxuLyoqXG4gKiDQntGB0L3QvtCy0L3QvtC5INCf0YDQvtGC0L7RgtC40L8g0L7QsdGK0LXQutGC0LAg0L3QsCDQutCw0YDRgtC1XG4gKiBAcGFyYW0gY2xhc3NOYW1lXG4gKiBAcGFyYW0gaWRcbiAqIEBwYXJhbSBvYmpQb3NpdGlvblJvd1xuICogQHBhcmFtIG9ialBvc2l0aW9uQ29sXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuZm9vZFR5cGUgPSB0aGlzLmdldEZvb2RUeXBlKCk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmVuZW15ID0gKHBhcmFtLmNsYXNzTmFtZSA9PSAnY293cycgPyAndGlnZXJzJyA6IG51bGwpO1xuXG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgaXNFYXQ6IGZhbHNlLFxuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG51bGwsXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbnVsbCxcbiAgICAgICAgICAgIGluZGV4T2JqZWN0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zb3VuZEVhdCA9IG5ldyBHYW1lU291bmRzKFwiYXVkaW8vZWF0X1wiICsgdGhpcy5jbGFzc05hbWUgKyBcIi5tcDNcIik7XG5cbiAgICAgICAgLy8g0JLRi9Cx0LXRgNC40Lwg0LDQu9Cz0L7RgNC40YLQvCDQv9C+0LLQtdC00LXQvdC40Y8g0LTQu9GPINC+0LHRitC10LrRgtCwXG4gICAgICAgIHRoaXMuYWxnb3JpdG1zID0gdGhpcy5zZWxlY3RBbGdvcml0aG0ocGFyYW0uaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0YvQstC+0LQgSFRNTCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgbGV0IHVuaXRIZWFsdGggPSBcIlwiO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PSAnY293cycgfHwgdGhpcy5jbGFzc05hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc0hlYWx0aENvbG9yID0gdGhpcy5nZXRDbGFzc0hlYWx0aENvbG9yKHRoaXMuaGVhbHRoKTtcblxuICAgICAgICAgICAgdW5pdEhlYWx0aCArPSBcIjxkaXYgY2xhc3M9J2ItdW5pdF9faGVhbHRoJz48ZGl2IGNsYXNzPSdiLWhlYWx0X19pbmRpY2F0b3IgXCIgKyBjbGFzc0hlYWx0aENvbG9yICsgXCInIHN0eWxlPSd3aWR0aDogXCIgKyB0aGlzLmhlYWx0aCArIFwiJTsnPjwvZGl2PjwvZGl2PlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0nYi11bml0IFwiICsgdGhpcy5jbGFzc05hbWUgKyBcIic+XCIgKyB1bml0SGVhbHRoICsgXCI8L2Rpdj5cIjtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRhtCy0LXRgijQutC70LDRgdGBKSDQttC40LfQvdC4IHVuaXRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldENsYXNzSGVhbHRoQ29sb3IodmFsdWUpIHtcblxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDkwICYmIHBhcnNlSW50KHZhbHVlKSA8PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWdvb2RcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDc1ICYmIHBhcnNlSW50KHZhbHVlKSA8PSA5MCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYWJvdmUtYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gNTAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDc1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSAyNSAmJiBwYXJzZUludCh2YWx1ZSkgPD0gNTApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWJlbG93LWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDI1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1sb3dcIjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KDQsNC30L3Ri9C1INC00LXQudGB0YLQstC40Y8g0L7QsdGK0LXQutGC0LBcbiAgICAgKi9cbiAgICBhY3Rpb24obWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLmFsZ29yaXRtcy5hY3QodGhpcywgbWFwLCBpbmRleE9iamVjdCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0YbQtdC70Ywg0YDQsNC00Lgg0LrQvtGC0L7RgNC+0Lkg0LbQuNCy0LXRgiBVbml0IDopXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0Rm9vZFR5cGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nvd3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZ3Jhc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGlnZXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nvd3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCS0LXRgNC90LXRgiDQtNC70Y8g0L7QsdGK0LXQutGC0LAg0LXQs9C+INCw0LvQs9C+0YDQuNGC0Lwg0L/QvtCy0LXQtNC10L3QuNGPINCyINC40LPRgNC1XG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc2VsZWN0QWxnb3JpdGhtKGlkKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAwIC0gZ3Jhc3NcbiAgICAgICAgICogMSAtIGNvd3NcbiAgICAgICAgICogMiAtIHRpZ2Vyc1xuICAgICAgICAgKiAzIC0gZ3JvdW5kXG4gICAgICAgICAqIDQgLSBkZWF0aFxuICAgICAgICAgKi9cblxuICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KGlkKSkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmFzc0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ293c0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVGlnZXJzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91bmRBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cblxuLy8g0KHRitC10LTQtdC9XG4gICAgaXNFYXRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0O1xuICAgIH07XG5cbi8vINCh0YrQtdC00LXQvVxuICAgIGVhdGVuKHVuaXQsIGZvb2RJbmRleCkge1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Db2wgPSB1bml0LnBvc2l0aW9uQ29sO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCA9IGZvb2RJbmRleDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uY2xhc3NOYW1lID0gdW5pdC5jbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlkID0gdW5pdC5pZDtcbiAgICB9O1xuXG4vLyBSRVNFVCDQodGK0LXQtNC10L1cbiAgICByZXNldEVhdGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgYWRkSGVhbHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoICs9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgc3ViSGVhbHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoIC09IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9O1xuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSJdLCJzb3VyY2VSb290IjoiIn0=