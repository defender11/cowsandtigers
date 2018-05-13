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
                // Вот прям здесь получим
                neighboringsCellInformation.push(neighboringsCell);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vY293c0FsZ29yaXRobS5qcyIsIndlYnBhY2s6Ly8vLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL2dyYXNzQWxnb3JpdGhtLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS9ncm91bmRBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vYWxnb3JpdGhtL3JvdXRlLmpzIiwid2VicGFjazovLy8uL2FsZ29yaXRobS90aWdlcnNBbGdvcml0aG0uanMiLCJ3ZWJwYWNrOi8vLy4vZGllVW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi90b29scy5qcyIsIndlYnBhY2s6Ly8vLi91bml0LmpzIl0sIm5hbWVzIjpbIkFsZ29yaXRobSIsImFkZEhlYWx0aFZhbHVlIiwic3ViSGVhbHRoVmFsdWUiLCJ1bml0IiwibWFwIiwiaW5kZXhPYmplY3QiLCJuZWlnaGJvcmluZ3NDZWxsIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzIiwibmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQiLCJjaGVja1VuaXROZWlnaGJvcmluZ3NDZWxsIiwiZmlsdGVyQ2VsbEJ5VHlwZSIsImZvb2RUeXBlIiwiZW5lbXkiLCJDb3dzQWxnb3JpdGhtIiwiZGlzdGFuY2VWaWV3IiwiZGF0YSIsImdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiIsImNlbGxSYW5kb21Sb3dDb2wiLCJyYW5kb21JbnRlZ2VyIiwibGVuZ3RoIiwib2xkVW5pdCIsInVuaXRQYXJhbSIsImlkIiwiY2xhc3NOYW1lIiwib2JqUG9zaXRpb25Sb3ciLCJwb3NpdGlvblJvdyIsIm9ialBvc2l0aW9uQ29sIiwicG9zaXRpb25Db2wiLCJzZXRDZWxsIiwidXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwIiwic3ViSGVhbHRoIiwiZGllVW5pdFR5cGUiLCJkaWVVbml0SWQiLCJkaWVVbml0IiwiYWRkRGllVW5pdFRvRGllQXJyYXkiLCJoZWFsdGgiLCJhZGRIZWFsdGgiLCJEZWF0aEFsZ29yaXRobSIsImRlYXRoVW5pdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsTGVmdCIsInVuaXRSZXN1cmVjdGlvbkludGVydmFsIiwibmV3UG9zaXRpb24iLCJnZXROZXdSb3dDb2xQb3NpdGlvbiIsInJvdyIsImNvbCIsIm5ld1VuaXQiLCJkaWVPYmplY3RzT25NYXBJbmRleCIsImdldEluZGV4RnJvbURpZU9iamVjdHNPbk1hcCIsImVudGl0eVBhcmFtIiwiYWRkVG9PYmplY3RzT25NYXAiLCJyZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcCIsIkdyYXNzQWxnb3JpdGhtIiwiR3JvdW5kQWxnb3JpdGhtIiwibWFwUm93IiwibWFwQ29sIiwiREVCVUciLCJnZXROZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24iLCJzdGVwcyIsImNvbnNvbGUiLCJsb2ciLCJtYXBEYXRhIiwibmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uIiwic3RlcCIsImdldE5laWdoYm9yaW5nc0NlbGwiLCJwdXNoIiwibmVpZ2hib3JpbmdzQ2VsbEluZm8iLCJ1bml0U2lkZXMiLCJnZXRVbml0QW5nbGVQb2ludHMiLCJzaWRlIiwiaXNzZXQiLCJuYW1lIiwicGFyYW0iLCJ1bml0U2lkZSIsInVuaXRQb3NpdGlvblJvdyIsInVuaXRQb3NpdGlvbkNvbCIsInBhcnNlSW50IiwibGVmdFRvcF9UT19yaWdodFRvcCIsImdldFRvcFNpZGVOZWlnaGJvcmluZ3NDZWxsIiwidW5kZWZpbmVkIiwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b20iLCJnZXRSaWdodHRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20iLCJnZXRCb3R0b21TaWRlTmVpZ2hib3JpbmdzQ2VsbCIsImxlZnRCb3R0b21fVE9fbGVmdFRvcCIsImdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbCIsInN0YXJ0Q2VsbFJvdyIsImFuZ2xlU3RhcnQiLCJlbmRDZWxsQ29sIiwiYW5nbGVFbmQiLCJzdGFydENlbGxDb2wiLCJ1bml0UG9zaXRpb25DZWxsIiwic2VsZWN0UG9zaXRpb25DZWxsIiwiZ2V0Q2VsbCIsImVuZENlbGxSb3ciLCJ1bml0QW5nbGVzIiwibGVmdFRvcCIsInJpZ2h0VG9wIiwicmlnaHRCb3R0b20iLCJsZWZ0Qm90dG9tIiwiZ2V0TGVmdFRvcEFuZ2xlUG9pbnQiLCJ0b1JpZ2h0VG9wIiwiZ2V0UmlnaHRUb3BBbmdsZVBvaW50IiwidG9SaWdodEJvdHRvbSIsImdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludCIsInRvTGVmdEJvdHRvbSIsImdldExlZnRCb3R0b21BbmdsZVBvaW50IiwidG9MZWZ0VG9wIiwibmV3UG9zaXRpb25Sb3ciLCJuZXdQb3NpdGlvbkNvbCIsImFuZ2xlSXNzZXQiLCJpc1VuaXRPdXRPZkJvcmRlciIsImZpbmROZXdBbmdlbCIsImlzRmluZCIsInN0cCIsIm5ld0FuZ2VsIiwiY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zIiwiZGlyZWN0aW9uTGVmdCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdCIsImRpcmVjdGlvblRvcCIsImNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wIiwiZGlyZWN0aW9uUmlnaHQiLCJjaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0IiwiZGlyZWN0aW9uQm90dG9tIiwiY2hlY2tDZWxsQnlEaXJlY3Rpb25Cb3R0b20iLCJ0cnlOZXdQb3NpdGlvbkNvbCIsImZpbmQiLCJ0cnlOZXdQb3NpdGlvblJvdyIsIlRpZ2Vyc0FsZ29yaXRobSIsImZvb2RJbmRleCIsImdldEluZGV4RnJvbU9iamVjdHNPbk1hcCIsImVhdGVuIiwicmVtb3ZlVW5pdEZyb21PYmplY3RzT25NYXAiLCJpc0VhdGVuIiwiZm9vZEluZm9ybWF0aW9uIiwic2V0SW5kZXhPYmplY3QiLCJyZXNldEVhdGVuIiwiRGllVW5pdCIsImFsZ29yaXRtcyIsInByb3RvdHlwZSIsImFjdGlvbiIsImFjdCIsInVwZGF0ZVJvd0NvbCIsIkVudGl0eSIsIkdhbWUiLCJzZXR0aW5nIiwiZGV2TW9kZSIsInRpbWVSZW5kZXIiLCJidG5TdGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJidG5QYXVzZSIsInNjZW5lIiwiYnVpbGQiLCIkIiwibE5vdGlmeSIsInNlbGYiLCJsb29wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwiY2FsbGJhY2siLCJpc3NldE9iamVjdE9uTWFwIiwiZGllTWFuYWdlciIsImFjdGlvbk9uTWFwIiwicmVuZGVyIiwiZ2FtZU92ZXIiLCJjbGVhckludGVydmFsIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJnYW1lIiwicnVuIiwiTWFwIiwibWFwT2JqZWN0cyIsIm9iamVjdHNPbk1hcCIsIkFycmF5IiwiZGllT2JqZWN0c09uTWFwIiwibWFwU2l6ZSIsIm9iaklEIiwib2JqZWN0TmFtZSIsIm9iak1pbiIsIm1pbiIsIm9iak1heCIsIm1heCIsIm9iakNvdW50T25NYXAiLCJpIiwibWFwUm93Q29sIiwiZ2V0UmFuZG9tUm93Q29sQ29vcmQiLCJ1bml0U2V0dGluZyIsInRyeU5ld0dlbmVyYXRlIiwib2JqZWN0U2V0dGluZyIsImNvdW50IiwiY291bnRSb3ciLCJjb3VudENvbCIsImNlbGwiLCJpc3NldFJvdXRlIiwidHJ5Um91dGUiLCJtaW5DZWxsIiwibWF4Q2VsbCIsImV4Y2x1ZGVWYWx1ZSIsInZhbHVlIiwibmV3UG9zaXRpb25Sb3dDb2wiLCJzcGxpY2UiLCJjZWxscyIsImRpcmVjdGlvbiIsImV4aXN0IiwiY29udGVudCIsImJvcmRlciIsInRvcCIsInRvcFJpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwidW5pdFR5cGUiLCJhcnIiLCJTY2VuZSIsInBsYWluIiwiaW5pdCIsImdlbmVyYXRlIiwibWFwSFRNTCIsImNlbGxDb29yZGluYXRlIiwic2hvdyIsImlubmVySFRNTCIsImdhbWVDb250YWluZXJJRCIsImdyYXNzIiwiY293cyIsInRpZ2VycyIsImdyb3VuZCIsIkdhbWVTb3VuZHMiLCJmaWxlIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiVW5pdCIsImdldEZvb2RUeXBlIiwiaXNFYXQiLCJzb3VuZEVhdCIsInNlbGVjdEFsZ29yaXRobSIsInVuaXRIZWFsdGgiLCJjbGFzc0hlYWx0aENvbG9yIiwiZ2V0Q2xhc3NIZWFsdGhDb2xvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsUztBQUNqQix5QkFBYztBQUFBOztB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QUFyQixHQUE2QixJQUE3QjtBQUNBLGlCQUFLM0csZUFBTCxDQUFxQjVHLFdBQXJCLEdBQW1DdkIsS0FBS3VCLFdBQXhDO0FBQ0EsaUJBQUs0RyxlQUFMLENBQXFCMUcsV0FBckIsR0FBbUN6QixLQUFLeUIsV0FBeEM7QUFDQSxpQkFBSzBHLGVBQUwsQ0FBcUJqSSxXQUFyQixHQUFtQzRILFNBQW5DO0FBQ0EsaUJBQUtLLGVBQUwsQ0FBcUI5RyxTQUFyQixHQUFpQ3JCLEtBQUtxQixTQUF0QztBQUNBLGlCQUFLOEcsZUFBTCxDQUFxQi9HLEVBQXJCLEdBQTBCcEIsS0FBS29CLEVBQS9CO0FBQ0g7Ozs7O0FBRUw7cUNBQ2lCO0FBQ1QsbUJBQU8sS0FBSytHLGVBQUwsQ0FBcUIyRyxLQUFyQixHQUE2QixLQUFwQztBQUNBLGlCQUFLM0csZUFBTCxDQUFxQjVHLFdBQXJCLEdBQW1DLElBQW5DO0FBQ0EsaUJBQUs0RyxlQUFMLENBQXFCMUcsV0FBckIsR0FBbUMsSUFBbkM7QUFDQSxpQkFBSzBHLGVBQUwsQ0FBcUJqSSxXQUFyQixHQUFtQyxJQUFuQztBQUNIOzs7a0NBRVNvTSxLLEVBQU87QUFDYixpQkFBS3JLLE1BQUwsSUFBZXdDLFNBQVM2SCxLQUFULENBQWY7QUFDSDs7O2tDQUVTQSxLLEVBQU87QUFDYixpQkFBS3JLLE1BQUwsSUFBZXdDLFNBQVM2SCxLQUFULENBQWY7QUFDSDs7Ozs7O0FBSUw7OztrQkEzSnFCc0MsSSIsImZpbGUiOiJjb3dzYW5kdGlnZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgdG9vbHMgZnJvbSBcIi4uL3Rvb2xzXCI7XG5pbXBvcnQgcm91dGUgZnJvbSBcIi4vcm91dGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxnb3JpdGhtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZGRIZWFsdGhWYWx1ZSA9IDU7XG4gICAgICAgIHRoaXMuc3ViSGVhbHRoVmFsdWUgPSAzO1xuICAgIH1cblxuICAgIGdldEFsbE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbih1bml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGwsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXMsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZDtcblxuICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INGB0L7RgdC10LTQvdC40Lgg0LrQu9C10YLQutC4XG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGwgPSBtYXAuY2hlY2tVbml0TmVpZ2hib3JpbmdzQ2VsbCh1bml0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog0J/RgNC+0LLQtdGA0LjQvCDQstC+0LrRgNGD0LMg0LXQtNGDXG4gICAgICAgICAqINCV0YHQu9C4INC10YHRgtGMLCDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyLCDQuNC90LDRh9C1INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcbiAgICAgICAgICovXG4gICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXQuZm9vZFR5cGUpO1xuXG4gICAgICAgIGlmICh1bml0LmVuZW15ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBUT0RPINGDINGC0LjQs9GA0LAg0L3QtdGCINCy0YDQsNCz0L7QslxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDQn9GA0L7QstC10YDQuNC8INCy0L7QutGA0YPQsyDQstGA0LDQs9C+0LIo0YLQuNCz0YDQvtCyKVxuICAgICAgICAgICAgICog0JXRgdC70Lgg0LXRgdGC0YwsINCy0LXRgNC90LXRgiDQvNCw0YHRgdC40LIsINC40L3QsNGH0LUg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxuICAgICAgICAgICAgICogKi9cbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIHVuaXQuZW5lbXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqINCf0YDQvtCy0LXRgNC40Lwg0LLQvtC60YDRg9CzINGB0LLQvtCx0L7QtNC90YvQtSDRj9GH0LXQudC60Lgg0LrRg9C00LAg0LzQvtC20L3QviDQv9C10YDQtdC80LXRgdGC0LjRgtGM0YHRj1xuICAgICAgICAgKiDQldGB0LvQuCDQtdGB0YLRjCwg0LLQtdGA0L3QtdGCINC80LDRgdGB0LjQsiwg0LjQvdCw0YfQtSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgICAgICAqL1xuICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCA9IG1hcC5maWx0ZXJDZWxsQnlUeXBlKG5laWdoYm9yaW5nc0NlbGwsIFwiZ3JvdW5kXCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsOiBuZWlnaGJvcmluZ3NDZWxsLFxuICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QsXG4gICAgICAgICAgICBuZWlnaGJvcmluZ3NDZWxsV2l0aEVuZW1pZXM6IG5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllcyxcbiAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kOiBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuLy4uL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vLi4vdG9vbHMnO1xuXG4vLyBDT1dTIEFMR09SSVRNXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3dzQWxnb3JpdGhtICBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIENlbGwgRGlzdGFuY2VcbiAgICAgICAgdGhpcy5kaXN0YW5jZVZpZXcgPSAxO1xuICAgIH1cblxuICAgIGFjdCAodW5pdCwgbWFwLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGE6XG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQodC+0YHQtdC00L3QuNC80Lgg0LrQu9C10YLQutCw0LzQuCAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCi0YDQsNCy0L7QuSAgICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLQuNCz0YDQsNC80LggICAgICAgICAgICAgLSBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRW5lbWllc1xuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0JfQtdC80LvRkdC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRcbiAgICAgICAgICovXG5cbiAgICAgICAgLyppZiAodW5pdC5oZWFsdGggPiAwKSB7XG4gICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0KLQuNCz0YDRi1xuICAgICAgICAgICAgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvL9CV0YHQu9C4INC10YHRgtGMINGB0LLQvtCx0L7QtNC90YvQtSDQutC70LXRgtC60LhcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCR0LXQttC40Lwg0L7RgiDQotC40LPRgNCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUF3YXlGcm9tRW5lbXkobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8v0JXRgdC70Lgg0LXRgdGC0Ywg0YDRj9C00L7QvCDRgtGA0LDQstCwINC10LTQuNC8INC10LUg0Lgg0YPQsdC10LPQsNC10LxcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC40Lwg0LXRgdGC0Ywg0YDRj9C00L7QvCDQtdC00LBcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0Zvb2QobWFwLCB1bml0LCBkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRnJlZShtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hcC5raWxsVW5pdCh1bml0LCBpbmRleE9iamVjdCk7XG4gICAgICAgIH0qL1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQkdC10LbQuNC8INC+0YIg0YLQuNCz0YDQsCArXG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUF3YXlGcm9tRW5lbXkgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG5cbiAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0L/RgNC+0LjQt9Cy0L7Qu9C90YvQuSDQuNC90LTQtdC60YEg0LIg0LzQsNGB0YHQuNCy0LVcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vINCh0L7RhdGA0LDQvdC40Lwg0YHRgtCw0YDRi9C5IFVuaXQg0Lgg0LXQs9C+IFJDIChSb3cvQ29sKVxuICAgICAgICBsZXQgb2xkVW5pdCA9IHVuaXQ7XG5cbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sINC4INC30LDQv9C40YjQuNC8INCyINC90L7QstGD0Y4g0Y/Rh9C10LnQutGDINC60L7RgNC+0LLRg1xuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUm93L0NvbCDQsiDQvNCw0YHRgdC40LLQtSBvYmplY3RzT25NYXBcbiAgICAgICAgbWFwLnVwZGF0ZVVuaXRSb3dDb2xJbk9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCiLtC6INC80Ysg0YPQsdC10LPQsNC10Lwg0Lgg0L3QtSDQtdC00LjQvCDRgtGA0LDQstGDLCDQvtGC0L3QuNC80LjQvCDQvdC10LzQvdC+0LPQviDQt9C00L7RgNC+0LLRjNGPXG4gICAgICAgIHVuaXQuc3ViSGVhbHRoKHRoaXMuc3ViSGVhbHRoVmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQldC00LjQvCDRgtGA0LDQstGDXG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVUb0Zvb2QgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCkge1xuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1INC10LTRi1xuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcbiAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHt9O1xuXG4gICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImdyb3VuZFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCd0LAg0LzQtdGB0YLQviDRgdGC0LDRgNC+0LPQviBVbml0INC/0L7RgdGC0LDQstC40LwgZ3JvdW5kXG4gICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG5cbiAgICAgICAgLy8g0JTQu9GPINGB0YLQsNGA0L7Qs9C+IFVuaXQg0LfQsNC00LDQtNC40Lwg0L3QvtCy0YvQtSBSb3cvQ29sXG4gICAgICAgIG1hcC5zZXRDZWxsKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLy8g0JTQvtCx0LDQstC40Lwg0LIg0LzQtdC90LXQtNC20LXRgCDRgdC80LXRgNGC0LXQuSDRgtGA0LDQstGDXG4gICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImRlYXRoXCIsXG4gICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiB1bml0LnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZGllVW5pdFR5cGU6IFwiZ3Jhc3NcIixcbiAgICAgICAgICAgIGRpZVVuaXRJZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICBtYXAuYWRkRGllVW5pdFRvRGllQXJyYXkoZGllVW5pdCk7XG5cbiAgICAgICAgLy8g0J/RgNC4INC/0L7Qs9C70LDRidC10L3QuNC4INGC0YDQsNCy0Ysg0L/RgNC40LHQsNCy0LjQvCDQttC40LfQvdC4LCDQvtCz0YDQsNC90LjRh9C40Lwg0LfQvdCw0YfQtdC90LjQtdC8IDEwMFxuICAgICAgICBpZiAodW5pdC5oZWFsdGggPCAxMDApIHtcblxuICAgICAgICAgICAgaWYgKHVuaXQuaGVhbHRoID4gOTApIHtcbiAgICAgICAgICAgICAgICB1bml0LmFkZEhlYWx0aCgxMDAgLSB1bml0LmhlYWx0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuaXQuYWRkSGVhbHRoKHRoaXMuYWRkSGVhbHRoVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodCy0L7QsdC+0LTQvdC+0LUg0L/QtdGA0LXQvNC10YnQtdC90LjQtVxuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAqIEBwYXJhbSBpbmRleE9iamVjdFxuICAgICAqL1xuICAgIG1vdmVGcmVlIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLCBpbmRleE9iamVjdCkge1xuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1bml0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQpO1xuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvQvdGL0Lkg0LjQvdC00LXQutGBINCyINC80LDRgdGB0LjQstC1INGBINC30LXQvNC70LXQuVxuICAgICAgICBsZXQgY2VsbFJhbmRvbVJvd0NvbCA9IHRvb2xzLnJhbmRvbUludGVnZXIoMCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICB1bml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIvLyBERUFUSCBBTEdPUklUTVxuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgVW5pdCBmcm9tICcuLy4uL3VuaXQnO1xuXG5cbi8vIEdST1VORCBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVhdGhBbGdvcml0aG0ge1xuICAgIGFjdCAoZGVhdGhVbml0LCBtYXAsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIGlmIChkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0IDwgZGVhdGhVbml0LnVuaXRSZXN1cmVjdGlvbkludGVydmFsKSB7XG4gICAgICAgICAgICBkZWF0aFVuaXQudW5pdFJlc3VyZWN0aW9uSW50ZXJ2YWxMZWZ0Kys7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IG1hcC5nZXROZXdSb3dDb2xQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdQb3NpdGlvblJvd0NvbCk7XG5cbiAgICAgICAgICAgIHZhciB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGRlYXRoVW5pdC5kaWVVbml0SWQsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBkZWF0aFVuaXQuZGllVW5pdFR5cGUsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uLnJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogbmV3UG9zaXRpb24uY29sLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG5ld1VuaXQgPSBuZXcgVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgICAgICB2YXIgZGllT2JqZWN0c09uTWFwSW5kZXggPSBtYXAuZ2V0SW5kZXhGcm9tRGllT2JqZWN0c09uTWFwKGRlYXRoVW5pdCk7XG5cbiAgICAgICAgICAgIHZhciBlbnRpdHlQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IGRlYXRoVW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogZGVhdGhVbml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICAgICAgbWFwLnNldENlbGwoZGVhdGhVbml0LCBuZXcgRW50aXR5KGVudGl0eVBhcmFtKSk7XG5cbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKG5ld1VuaXQsIG5ld1VuaXQpO1xuXG4gICAgICAgICAgICBtYXAuYWRkVG9PYmplY3RzT25NYXAobmV3VW5pdCk7XG5cbiAgICAgICAgICAgIG1hcC5yZW1vdmVVbml0RnJvbURpZU9iamVjdHNPbk1hcChkaWVPYmplY3RzT25NYXBJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuXG4vLyBHUkFTUyBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Jhc3NBbGdvcml0aG0gZXh0ZW5kcyBBbGdvcml0aG0ge1xuICAgIGFjdCAoKSB7fTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIiwiaW1wb3J0IEFsZ29yaXRobSBmcm9tICcuL2FsZ29yaXRobSc7XG5cbi8vIEdST1VORCBBTEdPUklUTVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdW5kQWxnb3JpdGhtIGV4dGVuZHMgQWxnb3JpdGhtIHtcbiAgICBhY3QgKCkge307XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiIsImltcG9ydCB0b29scyBmcm9tIFwiLi4vdG9vbHNcIjtcblxuLy8gUm91dGVcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtYXBSb3c6IDAsXG4gICAgbWFwQ29sOiAwLFxuICAgIERFQlVHOiBmYWxzZSxcblxuICAgIGdldE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbjogZnVuY3Rpb24gKG1hcCwgdW5pdCwgaW5kZXhPYmplY3QsIHN0ZXBzKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hcC5tYXBEYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVuaXQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVuaXQpO1xuXG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24gPSBbXTtcblxuICAgICAgICB0aGlzLm1hcFJvdyA9IG1hcC5yb3c7XG4gICAgICAgIHRoaXMubWFwQ29sID0gbWFwLmNvbDtcblxuICAgICAgICAvLyDQv9C+0LvRg9GH0LjQvCDQuNC90YTQviDQviDRh9C10YLRi9GA0LXRhSDRgdGC0L7RgNC+0L3QsNGFINC90LAg0LTQuNGB0YLQsNC90YbQuNC4INC/0L7Qu9GD0YfQtdC90L3QvtC5INC+0YIgVW5pdFxuICAgICAgICBmb3IgKGxldCBzdGVwID0gMTsgc3RlcCA8IHN0ZXBzOyBzdGVwKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtIHN0ZXA6ICcgKyBzdGVwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3wtIHN0ZXA6ICcgKyBzdGVwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGwgPSB0aGlzLmdldE5laWdoYm9yaW5nc0NlbGwoc3RlcCwgdW5pdCwgbWFwKTtcblxuICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vINCS0L7RgiDQv9GA0Y/QvCDQt9C00LXRgdGMINC/0L7Qu9GD0YfQuNC8XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uLnB1c2gobmVpZ2hib3JpbmdzQ2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uO1xuICAgIH0sXG5cbiAgICAvLyDQn9C+0LvRg9GH0LjQvCDQuNC90YTQviDRgdC+0YHQtdC00L3QuNGFINGP0YfQtdC10Log0L3QsCDQutCw0LbQtNC+0Lkg0LjRgtGC0LXRgNCw0YbQuNC4XG4gICAgZ2V0TmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24gKHN0ZXAsIHVuaXQsIG1hcCkge1xuICAgICAgICBsZXQgbmVpZ2hib3JpbmdzQ2VsbEluZm8gPSBbXTtcblxuICAgICAgICAvLyBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAvLyAgICAgdW5pdC5wb3NpdGlvblJvdyA9IDA7XG4gICAgICAgIC8vICAgICB1bml0LnBvc2l0aW9uQ29sID0gMjtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vINC60L7QvtGA0LTQuNC90LDRgtGLINGD0LPQu9C+0LIgVW5pdFxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQutC+0L7RgNC00LjQvdCw0YLRiyA0LdGFINGB0L7RgtC+0YDQvtC9INC90LAg0L7RgdC90L7QstC1IFVuaXRcbiAgICAgICAgbGV0IHVuaXRTaWRlcyA9IHRoaXMuZ2V0VW5pdEFuZ2xlUG9pbnRzKHN0ZXAsIHVuaXQucG9zaXRpb25Sb3csIHVuaXQucG9zaXRpb25Db2wpO1xuXG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLSB1bml0U2lkZXNcIiwgdW5pdFNpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCd0YPQttC90L4g0L/QvtC70YPRh9C40YLRjCDRj9GH0LXQudC60Lgg0L3QsCDQvtGB0L3QvtCy0LUg0L3QsNC50LTQtdC90YvRhSDRgdGC0L7RgNC+0L0hISFcblxuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviA0LdC10Lwg0YHRgtC+0YDQvtC90LDQvCDQuCDQv9C+0LvRg9GH0LjQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDRj9GH0LXQtdC6LCDQt9Cw0LTQtdC50YHRgtCy0YPQtdC8INC80LDRgdGB0LjQsiDRgSDQutCw0YDRgtC+0Lkg0LjQs9GA0YtcbiAgICAgICAgZm9yIChsZXQgc2lkZSA9IDA7IHNpZGUgPCB1bml0U2lkZXMubGVuZ3RoOyBzaWRlKyspIHtcblxuICAgICAgICAgICAgaWYgKHVuaXRTaWRlc1tzaWRlXS5pc3NldCkge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpZGUnLCBzaWRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2lkZV9uYW1lJywgdW5pdFNpZGVzW3NpZGVdLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0tIFNUQVJUIHNpZGU6IFwiICsgdW5pdFNpZGVzW3NpZGVdLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInwtLS0gc2lkZTogXCIsIHVuaXRTaWRlc1tzaWRlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwifC0tLSBzaWRlOiBcIiwgdW5pdFNpZGVzW3NpZGVdKTtcblxuICAgICAgICAgICAgICAgIGxldCBwYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdFNpZGU6IHVuaXRTaWRlc1tzaWRlXSxcbiAgICAgICAgICAgICAgICAgICAgdW5pdFBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICB1bml0UG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2wsXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbWFwXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFyYW06ICcsIHBhcmFtKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyc2VJbnQodW5pdFNpZGVzW3NpZGVdLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0VG9wX1RPX3JpZ2h0VG9wXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZWZ0VG9wX1RPX3JpZ2h0VG9wID0gdGhpcy5nZXRUb3BTaWRlTmVpZ2hib3JpbmdzQ2VsbChwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdFRvcF9UT19yaWdodFRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChsZWZ0VG9wX1RPX3JpZ2h0VG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAvLyByaWdodFRvcF9UT19yaWdodEJvdHRvbVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRUb3BfVE9fcmlnaHRCb3R0b20gPSB0aGlzLmdldFJpZ2h0dFNpZGVOZWlnaGJvcmluZ3NDZWxsKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodFRvcF9UT19yaWdodEJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChyaWdodFRvcF9UT19yaWdodEJvdHRvbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbSA9IHRoaXMuZ2V0Qm90dG9tU2lkZU5laWdoYm9yaW5nc0NlbGwocGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0Qm90dG9tX1RPX2xlZnRCb3R0b20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0Qm90dG9tX1RPX2xlZnRUb3BcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlZnRCb3R0b21fVE9fbGVmdFRvcCA9IHRoaXMuZ2V0TGVmdFNpZGVOZWlnaGJvcmluZ3NDZWxsKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0Qm90dG9tX1RPX2xlZnRUb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gobGVmdEJvdHRvbV9UT19sZWZ0VG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ8LS0tIEVORCBzaWRlOiBcIiArIHVuaXRTaWRlc1tzaWRlXS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcblxuICAgIC8vICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKiDQn9C+0LvRg9GH0LjQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDRj9GH0LXQtdC6INC/0L4g0YHRgtC+0YDQvtC90LDQvCAqL1xuICAgIGdldFRvcFNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG4gICAgICAgIGxldCBlbmRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsQ29sKys7XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbENvbCA8IGVuZENlbGxDb2wpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuICAgIGdldFJpZ2h0dFNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG4gICAgICAgIGxldCBlbmRDZWxsUm93ID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsUm93Kys7XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbFJvdyA8IGVuZENlbGxSb3cpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuICAgIGdldEJvdHRvbVNpZGVOZWlnaGJvcmluZ3NDZWxsOiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvID0gW107XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Sb3c7XG4gICAgICAgIGxldCBlbmRDZWxsQ29sID0gcGFyYW0udW5pdFNpZGUuYW5nbGVFbmQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgbGV0IHN0YXJ0Q2VsbENvbCA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlU3RhcnQucG9zaXRpb25Db2w7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNlbGwgPSBwYXJzZUludChwYXJhbS51bml0UG9zaXRpb25Sb3cgKyAnJyArIHBhcmFtLnVuaXRQb3NpdGlvbkNvbCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQoc3RhcnRDZWxsUm93ICsgJycgKyBzdGFydENlbGxDb2wpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFBvc2l0aW9uQ2VsbCAhPT0gc2VsZWN0UG9zaXRpb25DZWxsKSB7XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JpbmdzQ2VsbEluZm8ucHVzaChwYXJhbS5tYXAuZ2V0Q2VsbChzdGFydENlbGxSb3csIHN0YXJ0Q2VsbENvbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRDZWxsQ29sLS07XG4gICAgICAgIH0gd2hpbGUgKHN0YXJ0Q2VsbENvbCA+IGVuZENlbGxDb2wpO1xuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcmluZ3NDZWxsSW5mbztcbiAgICB9LFxuICAgIGdldExlZnRTaWRlTmVpZ2hib3JpbmdzQ2VsbDogZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIGxldCBuZWlnaGJvcmluZ3NDZWxsSW5mbyA9IFtdO1xuXG4gICAgICAgIGxldCBzdGFydENlbGxDb2wgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uQ29sO1xuICAgICAgICBsZXQgZW5kQ2VsbFJvdyA9IHBhcmFtLnVuaXRTaWRlLmFuZ2xlRW5kLnBvc2l0aW9uUm93O1xuXG4gICAgICAgIGxldCBzdGFydENlbGxSb3cgPSBwYXJhbS51bml0U2lkZS5hbmdsZVN0YXJ0LnBvc2l0aW9uUm93O1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxldCB1bml0UG9zaXRpb25DZWxsID0gcGFyc2VJbnQocGFyYW0udW5pdFBvc2l0aW9uUm93ICsgJycgKyBwYXJhbS51bml0UG9zaXRpb25Db2wpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdFBvc2l0aW9uQ2VsbCA9IHBhcnNlSW50KHN0YXJ0Q2VsbFJvdyArICcnICsgc3RhcnRDZWxsQ29sKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRQb3NpdGlvbkNlbGwgIT09IHNlbGVjdFBvc2l0aW9uQ2VsbCkge1xuICAgICAgICAgICAgICAgIG5laWdoYm9yaW5nc0NlbGxJbmZvLnB1c2gocGFyYW0ubWFwLmdldENlbGwoc3RhcnRDZWxsUm93LCBzdGFydENlbGxDb2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0Q2VsbFJvdy0tO1xuICAgICAgICB9IHdoaWxlIChzdGFydENlbGxSb3cgPiBlbmRDZWxsUm93KTtcblxuICAgICAgICByZXR1cm4gbmVpZ2hib3JpbmdzQ2VsbEluZm87XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC60L7QvtGA0LTQuNC90LDRgtGLIDQt0YUg0YHQvtGC0L7RgNC+0L0g0L3QsCDQvtGB0L3QvtCy0LUgVW5pdFxuICAgICAqIEBwYXJhbSBzdGVwXG4gICAgICogQHBhcmFtIHBvc2l0aW9uUm93XG4gICAgICogQHBhcmFtIHBvc2l0aW9uQ29sXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldFVuaXRBbmdsZVBvaW50czogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgdW5pdEFuZ2xlcyA9IFtdO1xuXG4gICAgICAgIGxldCBsZWZ0VG9wLFxuICAgICAgICAgICAgcmlnaHRUb3AsXG4gICAgICAgICAgICByaWdodEJvdHRvbSxcbiAgICAgICAgICAgIGxlZnRCb3R0b207XG5cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LSBnZXRVbml0QW5nbGVQb2ludHM6ICcsIHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgbGVmdFRvcFxuICAgICAgICBsZWZ0VG9wID0gdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbGVmdFRvcDogJywgbGVmdFRvcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlZnRUb3AuaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvUmlnaHRUb3AgPSB0aGlzLmdldFJpZ2h0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9SaWdodFRvcC5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRUb3AgPSB7cG9zaXRpb25Sb3c6IHRvUmlnaHRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b1JpZ2h0VG9wLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodFRvcCA9IHtwb3NpdGlvblJvdzogbGVmdFRvcC5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IGxlZnRUb3AucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bml0QW5nbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gbGVmdFRvcFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGVmdFRvcF9UT19yaWdodFRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogbGVmdFRvcC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBsZWZ0VG9wLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b1JpZ2h0VG9wLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogbGVmdFRvcC5pc3NldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHRVQgcmlnaHRUb3BcbiAgICAgICAgcmlnaHRUb3AgPSB0aGlzLmdldFJpZ2h0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gcmlnaHRUb3A6ICcsIHJpZ2h0VG9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRUb3AuaXNzZXQpIHtcblxuICAgICAgICAgICAgbGV0IHRvUmlnaHRCb3R0b20gPSB0aGlzLmdldFJpZ2h0Qm90dG9tQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9SaWdodEJvdHRvbS5pc3NldCkge1xuICAgICAgICAgICAgICAgIHRvUmlnaHRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHRvUmlnaHRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b1JpZ2h0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9SaWdodEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiByaWdodFRvcC5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyByaWdodFRvcFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmlnaHRUb3BfVE9fcmlnaHRCb3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVTdGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHJpZ2h0VG9wLnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25Db2w6IHJpZ2h0VG9wLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b1JpZ2h0Qm90dG9tLFxuICAgICAgICAgICAgICAgICAgICBpc3NldDogcmlnaHRUb3AuaXNzZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VUIHJpZ2h0Qm90dG9tXG4gICAgICAgIHJpZ2h0Qm90dG9tID0gdGhpcy5nZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQoc3RlcCwgcG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd8LXwtIHJpZ2h0Qm90dG9tOiAnLCByaWdodEJvdHRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0Qm90dG9tLmlzc2V0KSB7XG5cbiAgICAgICAgICAgIGxldCB0b0xlZnRCb3R0b20gPSB0aGlzLmdldExlZnRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0b0xlZnRCb3R0b20uaXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRCb3R0b20gPSB7cG9zaXRpb25Sb3c6IHRvTGVmdEJvdHRvbS5wb3NpdGlvblJvdywgcG9zaXRpb25Db2w6IHRvTGVmdEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvTGVmdEJvdHRvbSA9IHtwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiByaWdodEJvdHRvbS5wb3NpdGlvbkNvbH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVuaXRBbmdsZXMucHVzaChcbiAgICAgICAgICAgICAgICAvLyByaWdodEJvdHRvbVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmlnaHRCb3R0b21fVE9fbGVmdEJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogcmlnaHRCb3R0b20ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNvbDogcmlnaHRCb3R0b20ucG9zaXRpb25Db2xcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYW5nbGVFbmQ6IHRvTGVmdEJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaXNzZXQ6IHJpZ2h0Qm90dG9tLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdFVCBsZWZ0Qm90dG9tXG4gICAgICAgIGxlZnRCb3R0b20gPSB0aGlzLmdldExlZnRCb3R0b21BbmdsZVBvaW50KHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBsZWZ0Qm90dG9tOiAnLCBsZWZ0Qm90dG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdEJvdHRvbS5pc3NldCkge1xuXG4gICAgICAgICAgICBsZXQgdG9MZWZ0VG9wID0gdGhpcy5nZXRMZWZ0VG9wQW5nbGVQb2ludChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAodG9MZWZ0VG9wLmlzc2V0KSB7XG4gICAgICAgICAgICAgICAgdG9MZWZ0VG9wID0ge3Bvc2l0aW9uUm93OiB0b0xlZnRUb3AucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiB0b0xlZnRUb3AucG9zaXRpb25Db2x9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0xlZnRUb3AgPSB7cG9zaXRpb25Sb3c6IGxlZnRCb3R0b20ucG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sOiBsZWZ0Qm90dG9tLnBvc2l0aW9uQ29sfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdW5pdEFuZ2xlcy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vIGxlZnRCb3R0b21cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImxlZnRCb3R0b21fVE9fbGVmdFRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBhbmdsZVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblJvdzogbGVmdEJvdHRvbS5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBsZWZ0Qm90dG9tLnBvc2l0aW9uQ29sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlRW5kOiB0b0xlZnRUb3AsXG4gICAgICAgICAgICAgICAgICAgIGlzc2V0OiBsZWZ0Qm90dG9tLmlzc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bml0QW5nbGVzO1xuICAgIH0sXG5cbiAgICBnZXRMZWZ0VG9wQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyAtIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sIC0gc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3wtfC0gbmV3UG9zaXRpb246ICcsIG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uUm93ID0gbmV3UG9zaXRpb24ucG9zaXRpb25Sb3c7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Db2wgPSBuZXdQb3NpdGlvbi5wb3NpdGlvbkNvbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGVJc3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUm93OiBuZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIHBvc2l0aW9uQ29sOiBuZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGlzc2V0OiBhbmdsZUlzc2V0XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFJpZ2h0VG9wQW5nbGVQb2ludDogZnVuY3Rpb24gKHN0ZXAsIHBvc2l0aW9uUm93LCBwb3NpdGlvbkNvbCkge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3cgPSBwb3NpdGlvblJvdyAtIHN0ZXA7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbkNvbCA9IHBvc2l0aW9uQ29sICsgc3RlcDtcbiAgICAgICAgbGV0IGFuZ2xlSXNzZXQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzVW5pdE91dE9mQm9yZGVyKG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZmluZE5ld0FuZ2VsKHN0ZXAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi5pc0ZpbmQpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uUm93O1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb24ucG9zaXRpb25Db2w7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ2xlSXNzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvblJvdzogbmV3UG9zaXRpb25Sb3csXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbmV3UG9zaXRpb25Db2wsXG4gICAgICAgICAgICBpc3NldDogYW5nbGVJc3NldFxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRSaWdodEJvdHRvbUFuZ2xlUG9pbnQ6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgKyBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCArIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1VuaXRPdXRPZkJvcmRlcihuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0TGVmdEJvdHRvbUFuZ2xlUG9pbnQ6IGZ1bmN0aW9uIChzdGVwLCBwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uUm93ID0gcG9zaXRpb25Sb3cgKyBzdGVwO1xuICAgICAgICBsZXQgbmV3UG9zaXRpb25Db2wgPSBwb3NpdGlvbkNvbCAtIHN0ZXA7XG4gICAgICAgIGxldCBhbmdsZUlzc2V0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5pc1VuaXRPdXRPZkJvcmRlcihuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmZpbmROZXdBbmdlbChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24uaXNGaW5kKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb25Sb3cgPSBuZXdQb3NpdGlvbi5wb3NpdGlvblJvdztcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uLnBvc2l0aW9uQ29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmdsZUlzc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNzZXQ6IGFuZ2xlSXNzZXRcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNVbml0T3V0T2ZCb3JkZXI6IGZ1bmN0aW9uIChuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKG5ld1Bvc2l0aW9uUm93IDwgMCB8fCBuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKVxuICAgICAgICAgICAgfHxcbiAgICAgICAgICAgIChuZXdQb3NpdGlvbkNvbCA8IDAgfHwgbmV3UG9zaXRpb25Db2wgPiAodGhpcy5tYXBDb2wgLSAxKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgKG5ld1Bvc2l0aW9uUm93IDwgMCB8fCBuZXdQb3NpdGlvblJvdyA+ICh0aGlzLm1hcFJvdyAtIDEpKVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKG5ld1Bvc2l0aW9uQ29sIDwgMCB8fCBuZXdQb3NpdGlvbkNvbCA+ICh0aGlzLm1hcENvbCAtIDEpKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyDQn9C+0L/RgNC+0LHRg9C10Lwg0L3QsNC50YLQuCDQvdC+0LLRg9GOINGP0YfQtdC50LrRgyDQv9GA0LjQsdCw0LLQuNCyINC30L3QsNGH0LXQvdC40LUg0YjQsNCz0LBcbiAgICBmaW5kTmV3QW5nZWw6IGZ1bmN0aW9uIChzdGVwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0L/QviDRiNCw0LPQsNC8INCyIDQt0YUg0L3QsNC/0YDQsNCy0LvQtdC90LjRj9GFINC4INC/0L7RgdC80L7RgtGA0LjQvCwg0L/QvtC/0LDQtNCw0LXQvCDQu9C4INCyINC/0YDQtdC00LXQu9GLINC60LDRgNGC0YtcbiAgICAgICAgZm9yIChsZXQgc3RwID0gMTsgc3RwIDw9IHN0ZXA7IHN0cCsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHN0cCA8PSBzdGVwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBuZXdBbmdlbCA9IHRoaXMuY2hlY2tOZWlnaGJvcmluZ3NDZWxsQnlEaXJlY3Rpb25zKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnfC18LSBuZXdBbmdlbDogJywgbmV3QW5nZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld0FuZ2VsLmlzRmluZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBbmdlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0ZpbmQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrTmVpZ2hib3JpbmdzQ2VsbEJ5RGlyZWN0aW9uczogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb25MZWZ0ID0gdGhpcy5jaGVja0NlbGxCeURpcmVjdGlvbkxlZnQoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uTGVmdC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25MZWZ0OiB0cnVlO1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb25MZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbkxlZnQ6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25Ub3AgPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uVG9wKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvblRvcC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Ub3A6IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvblRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Ub3A6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25SaWdodCA9IHRoaXMuY2hlY2tDZWxsQnlEaXJlY3Rpb25SaWdodChzdHAsIG5ld1Bvc2l0aW9uUm93LCBuZXdQb3NpdGlvbkNvbCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb25SaWdodC5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25SaWdodDogdHJ1ZTtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uUmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGlyZWN0aW9uUmlnaHQ6IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25Cb3R0b20gPSB0aGlzLmNoZWNrQ2VsbEJ5RGlyZWN0aW9uQm90dG9tKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbkJvdHRvbS5pc0ZpbmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkRFQlVHKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Cb3R0b206IHRydWU7XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbkJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXJlY3Rpb25Cb3R0b206IGZhbHNlO1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNoZWNrQ2VsbEJ5RGlyZWN0aW9uTGVmdDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvbkNvbCA9IG5ld1Bvc2l0aW9uQ29sIC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93ID49IDApICYmIChuZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApICYmICh0cnlOZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblRvcDogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93IC0gc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sID49IDApICYmIChuZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvblJpZ2h0OiBmdW5jdGlvbiAoc3RwLCBuZXdQb3NpdGlvblJvdywgbmV3UG9zaXRpb25Db2wpIHtcbiAgICAgICAgbGV0IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgZmluZCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeU5ld1Bvc2l0aW9uQ29sID0gbmV3UG9zaXRpb25Db2wgKyBzdHA7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAoKG5ld1Bvc2l0aW9uUm93ID49IDApICYmIChuZXdQb3NpdGlvblJvdyA8PSAodGhpcy5tYXBSb3cgLSAxKSkpXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAoKHRyeU5ld1Bvc2l0aW9uQ29sID49IDApICYmICh0cnlOZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IHRyeU5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjaGVja0NlbGxCeURpcmVjdGlvbkJvdHRvbTogZnVuY3Rpb24gKHN0cCwgbmV3UG9zaXRpb25Sb3csIG5ld1Bvc2l0aW9uQ29sKSB7XG4gICAgICAgIGxldCB0cnlOZXdQb3NpdGlvblJvdyxcbiAgICAgICAgICAgIGZpbmQgPSBmYWxzZTtcblxuICAgICAgICB0cnlOZXdQb3NpdGlvblJvdyA9IG5ld1Bvc2l0aW9uUm93ICsgc3RwO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICgodHJ5TmV3UG9zaXRpb25Sb3cgPj0gMCkgJiYgKHRyeU5ld1Bvc2l0aW9uUm93IDw9ICh0aGlzLm1hcFJvdyAtIDEpKSlcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAoKG5ld1Bvc2l0aW9uQ29sID49IDApICYmIChuZXdQb3NpdGlvbkNvbCA8PSAodGhpcy5tYXBDb2wgLSAxKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZmluZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IHRyeU5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sLFxuICAgICAgICAgICAgaXNGaW5kOiBmaW5kXG4gICAgICAgIH07XG4gICAgfVxufSIsImltcG9ydCBBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0nO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuLy4uL2VudGl0eSc7XG5pbXBvcnQgRGllVW5pdCBmcm9tICcuLy4uL2RpZVVuaXQnO1xuaW1wb3J0IHRvb2xzIGZyb20gJy4vLi4vdG9vbHMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vcm91dGUnO1xuXG4vLyBUSUdFUlMgQUxHT1JJVE1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpZ2Vyc0FsZ29yaXRobSBleHRlbmRzIEFsZ29yaXRobSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8g0KDQsNC00LjRg9GBINGP0YfQtdC10Log0LIg0YfQtdGC0YvRgNC1INGB0YLQvtGA0L7QvdGLLCDRg9Cy0LXQu9C40YfQtdC9INC90LAg0L7QtNC90YMsINC10YHQu9C4IDQg0YLQviAzXG4gICAgICAgIHRoaXMuZGlzdGFuY2VWaWV3ID0gNDtcbiAgICB9XG5cbiAgICBhY3QgKHVuaXQsIG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICAgICAgLy8g0JLQvtC+0LfQstGA0LDRgtC40YLRjCDQvtCx0YrQtdC60YIg0YEg0YHQvtGB0LXQtNC90LjQvNC4INGP0YfQtdC50LrQsNC80LhcbiAgICAgICAgbGV0IG5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbiA9IFJvdXRlLmdldE5laWdoYm9yaW5nc0NlbGxJbmZvcm1hdGlvbihtYXAsIHVuaXQsIGluZGV4T2JqZWN0LCB0aGlzLmRpc3RhbmNlVmlldyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJORUlHSEJPUklOR1NDRUxMSU5GT1JNQVRJT046IFwiLCBuZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24pO1xuXG4gICAgICAgIC8vIGxldCBkYXRhID0gdGhpcy5nZXRBbGxOZWlnaGJvcmluZ3NDZWxsSW5mb3JtYXRpb24odW5pdCwgbWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGE6XG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQmtCw0YDRgtC+0LkgICAgICAgICAgICAgIC0gZGF0YS5tYXBcbiAgICAgICAgICog0JzQsNGB0YHQuNCyINGBINCh0L7RgdC10LTQvdC40LzQuCDQutC70LXRgtC60LDQvNC4ICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFxuICAgICAgICAgKiDQnNCw0YHRgdC40LIg0YEg0KLRgNCw0LLQvtC5ICAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQotC40LPRgNCw0LzQuCAgICAgICAgICAgICAtIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhFbmVtaWVzXG4gICAgICAgICAqINCc0LDRgdGB0LjQsiDRgSDQl9C10LzQu9GR0LkgICAgICAgICAgICAgIC0gZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFxuICAgICAgICAgKi9cblxuICAgICAgIC8qIGlmICh1bml0LmhlYWx0aCA+IDApIHtcbiAgICAgICAgICAgIC8vICAgICAvLyDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINGA0Y/QtNC+0Lwg0LXQtNCwXG4gICAgICAgICAgICBpZiAoZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvRm9vZChtYXAsIHVuaXQsIGRhdGEubmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGcmVlKG1hcCwgdW5pdCwgZGF0YS5uZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZCwgaW5kZXhPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWFwLmtpbGxVbml0KHVuaXQsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfSovXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCV0LTQuNC8INC60L7RgNC+0LLRg1xuICAgICAqIEBwYXJhbSBtYXBcbiAgICAgKiBAcGFyYW0gdW5pdFxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKi9cbiAgICBtb3ZlVG9Gb29kIChtYXAsIHVuaXQsIG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnN0b3AoKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDQutC+0YDQvtCyXG4gICAgICAgIGxldCBjZWxsUmFuZG9tUm93Q29sID0gdG9vbHMucmFuZG9tSW50ZWdlcigwLCBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2QubGVuZ3RoIC0xKTtcblxuICAgICAgICAvLyDQrdGC0LAg0Y/Rh9C10LnQutCwINGP0LLQu9GP0LXRgtGM0YHRjyDQutC+0YDQvtCy0L7QuSwg0YIu0LUg0JXQlNCe0JkhISFcbiAgICAgICAgLy8gbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdXG4gICAgICAgIC8vIHVuaXQuZWF0ZW4odHJ1ZSwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhGb29kW2NlbGxSYW5kb21Sb3dDb2xdKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCBpbmRleCDRgdGK0LXQtNC10L3QvtC5INC60L7RgNC+0LLRiyDQuNC3INC80LDRgdGB0LjQstCwIG9iamVjdHNPbk1hcFxuICAgICAgICBsZXQgZm9vZEluZGV4ID0gbWFwLmdldEluZGV4RnJvbU9iamVjdHNPbk1hcChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0pO1xuXG4gICAgICAgIC8vINCf0L7QvNC10YLQuNC70Lgg0YLQuNCz0YDQsCDRh9GC0L4g0L7QvSDRgdGK0LXQuyDQutC+0YDQvtCy0YNcbiAgICAgICAgdW5pdC5lYXRlbihuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIGZvb2RJbmRleCk7XG5cbiAgICAgICAgbGV0IG9sZFVuaXQgPSB1bml0O1xuXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgIG9ialBvc2l0aW9uUm93OiB1bml0LnBvc2l0aW9uUm93LFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQucG9zaXRpb25Db2xcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8IGdyb3VuZFxuICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBuZXcgRW50aXR5KHVuaXRQYXJhbSkpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgtC40LPRgNCwINC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF0sIG9sZFVuaXQpO1xuXG4gICAgICAgIC8vINCe0LHQvdC+0LLQuNC8IFJDINCyINC80LDRgdGB0LjQstC1IG9iamVjdHNPbk1hcFxuICAgICAgICBtYXAudXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKG5laWdoYm9yaW5nc0NlbGxXaXRoRm9vZFtjZWxsUmFuZG9tUm93Q29sXSwgaW5kZXhPYmplY3QpO1xuXG4gICAgICAgIC8vINCj0LTQsNC70LjQvCDQutC+0YDQvtCy0YMg0LjQtyDQuNCz0YDQvtCy0L7Qs9C+INC80LDRgdGB0LjQstCwXG4gICAgICAgIG1hcC5yZW1vdmVVbml0RnJvbU9iamVjdHNPbk1hcChmb29kSW5kZXgpO1xuXG4gICAgICAgIGRlbGV0ZSBuZWlnaGJvcmluZ3NDZWxsV2l0aEZvb2RbY2VsbFJhbmRvbVJvd0NvbF07XG5cbiAgICAgICAgLy8g0J/RgNC4INC/0L7Qs9C70LDRidC10L3QuNC4INGC0YDQsNCy0Ysg0L/RgNC40LHQsNCy0LjQvCDQttC40LfQvdC4LCDQvtCz0YDQsNC90LjRh9C40Lwg0LfQvdCw0YfQtdC90LjQtdC8IDEwMFxuICAgICAgICBpZiAodW5pdC5oZWFsdGggPCAxMDAgKSB7XG5cbiAgICAgICAgICAgIGlmICh1bml0LmhlYWx0aCA+IDkwKSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgoMTAwLXVuaXQuaGVhbHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5pdC5hZGRIZWFsdGgodGhpcy5hZGRIZWFsdGhWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQucGxheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCh0LLQvtCx0L7QtNC90L7QtSDQv9C10YDQtdC80LXRidC10L3QuNC1XG4gICAgICogQHBhcmFtIG1hcFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgbW92ZUZyZWUgKG1hcCwgdW5pdCwgbmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIC8vIHVuaXQuc291bmRFYXQuc3RvcCgpO1xuXG4gICAgICAgIGxldCBvbGRVbml0ID0gdW5pdDtcblxuICAgICAgICBsZXQgdW5pdFBhcmFtID0ge307XG5cbiAgICAgICAgLy8gdW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3RcblxuICAgICAgICAvLyDQn9GA0L7QstC10YDQuNC8INGD0LHQuNC7INC70Lgg0LTQsNC90L3Ri9C5INGC0LjQs9GAINGC0L7Qu9GM0LrQviDRh9GC0L4g0LrQvtGA0L7QstGDLFxuICAgICAgICAvLyDQtdGB0LvQuCDQtNCwLCDRgtC+INC90LAg0YHQu9C10LQuINGI0LDQs9C1INC/0L7RgdGC0LDQstC40Lwg0L3QsCDQtdCz0L4g0LzQtdGB0YLQviDRgtCw0LHQu9C40YfQutGDdW5pdC5mb29kSW5mb3JtYXRpb24uaW5kZXhPYmplY3RcbiAgICAgICAgaWYgKHVuaXQuaXNFYXRlbigpKSB7XG5cbiAgICAgICAgICAgIHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZGVhdGhcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3csXG4gICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IHVuaXQuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uQ29sLFxuICAgICAgICAgICAgICAgIGRpZVVuaXRUeXBlOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgZGllVW5pdElkOiB1bml0LmZvb2RJbmZvcm1hdGlvbi5pZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IGRpZVVuaXQgPSBuZXcgRGllVW5pdCh1bml0UGFyYW0pO1xuXG4gICAgICAgICAgICBkaWVVbml0LnNldEluZGV4T2JqZWN0KHVuaXQuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0KTtcblxuICAgICAgICAgICAgbWFwLmFkZERpZVVuaXRUb0RpZUFycmF5KGRpZVVuaXQpO1xuXG4gICAgICAgICAgICBtYXAuc2V0Q2VsbCh1bml0LCBkaWVVbml0KTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdW5pdFBhcmFtID0ge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJncm91bmRcIixcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogdW5pdC5wb3NpdGlvblJvdyxcbiAgICAgICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g0J3QsCDQvNC10YHRgtC+INGB0YLQsNGA0L7Qs9C+IFVuaXQg0L/QvtGB0YLQsNCy0LjQvCBncm91bmRcbiAgICAgICAgICAgIG1hcC5zZXRDZWxsKHVuaXQsIG5ldyBFbnRpdHkodW5pdFBhcmFtKSk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRVbml0LnJlc2V0RWF0ZW4oKTtcblxuICAgICAgICBvbGRVbml0LnN1YkhlYWx0aCh0aGlzLnN1YkhlYWx0aFZhbHVlKTtcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjQvCDQv9GA0L7QuNC30LLQvtC70L3Ri9C5INC40L3QtNC10LrRgSDQsiDQvNCw0YHRgdC40LLQtSDRgSDQt9C10LzQu9C10LlcbiAgICAgICAgbGV0IGNlbGxSYW5kb21Sb3dDb2wgPSB0b29scy5yYW5kb21JbnRlZ2VyKDAsIG5laWdoYm9yaW5nc0NlbGxXaXRoR3JvdW5kLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIC8vINCU0LvRjyDRgdGC0LDRgNC+0LPQviBVbml0INC30LDQtNCw0LTQuNC8INC90L7QstGL0LUgUm93L0NvbFxuICAgICAgICBtYXAuc2V0Q2VsbChuZWlnaGJvcmluZ3NDZWxsV2l0aEdyb3VuZFtjZWxsUmFuZG9tUm93Q29sXSwgb2xkVW5pdCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC40LwgUkMg0LIg0LzQsNGB0YHQuNCy0LUgb2JqZWN0c09uTWFwXG4gICAgICAgIG1hcC51cGRhdGVVbml0Um93Q29sSW5PYmplY3RzT25NYXAobmVpZ2hib3JpbmdzQ2VsbFdpdGhHcm91bmRbY2VsbFJhbmRvbVJvd0NvbF0sIGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyB1bml0LnNvdW5kRWF0LnBsYXkoKTtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgRGVhdGhBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZGVhdGhBbGdvcml0aG0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWVVbml0IGV4dGVuZHMgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbSkge1xuICAgICAgICBzdXBlcihwYXJhbSk7XG5cbiAgICAgICAgdGhpcy5pbmRleE9iamVjdCA9IHBhcmFtLmluZGV4T2JqZWN0O1xuXG4gICAgICAgIHRoaXMuYWxnb3JpdG1zID0gbmV3IERlYXRoQWxnb3JpdGhtKCk7XG5cbiAgICAgICAgdGhpcy5kaWVVbml0VHlwZSA9IHBhcmFtLmRpZVVuaXRUeXBlO1xuICAgICAgICB0aGlzLmRpZVVuaXRJZCA9IHBhcmFtLmRpZVVuaXRJZDtcblxuICAgICAgICB0aGlzLnVuaXRSZXN1cmVjdGlvbkludGVydmFsID0gMztcbiAgICAgICAgdGhpcy51bml0UmVzdXJlY3Rpb25JbnRlcnZhbExlZnQgPSAwO1xuXG4gICAgICAgIC8vIHRoaXMuc291bmREaWUgPSBuZXcgR2FtZVNvdW5kcyhcImF1ZGlvL2RpZV9cIiArIHRoaXMuY2xhc3NOYW1lICsgXCIubXAzXCIpO1xuICAgIH1cbn1cblxuRGllVW5pdC5wcm90b3R5cGUuc2V0SW5kZXhPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXhPYmplY3QpIHtcbiAgICB0aGlzLmluZGV4T2JqZWN0ID0gaW5kZXhPYmplY3Q7XG59O1xuXG5cbi8qKlxuICog0KDQsNC30L3Ri9C1INC00LXQudGB0YLQstC40Y8g0L7QsdGK0LXQutGC0LBcbiAqL1xuRGllVW5pdC5wcm90b3R5cGUuYWN0aW9uID0gZnVuY3Rpb24gKG1hcCwgaW5kZXhPYmplY3QpIHtcbiAgICB0aGlzLmFsZ29yaXRtcy5hY3QodGhpcywgbWFwLCBpbmRleE9iamVjdCk7XG59O1xuXG5cbi8qKlxuICog0J7QsdC90L7QstC40LwgUm93L0NvbCDQvtCx0YrQtdC60YLQsFxuICogQHBhcmFtIHVuaXRcbiAqL1xuRGllVW5pdC5wcm90b3R5cGUudXBkYXRlUm93Q29sID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgICB0aGlzLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICB0aGlzLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbn07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbS5pZDtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBwYXJhbS5jbGFzc05hbWU7XG4gICAgICAgIHRoaXMucG9zaXRpb25Sb3cgPSBwYXJhbS5vYmpQb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNvbCA9IHBhcmFtLm9ialBvc2l0aW9uQ29sO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J7QsdC90L7QstC40LwgUm93L0NvbCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICovXG4gICAgdXBkYXRlUm93Q29sICh1bml0KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25Sb3cgPSB1bml0LnBvc2l0aW9uUm93O1xuICAgICAgICB0aGlzLnBvc2l0aW9uQ29sID0gdW5pdC5wb3NpdGlvbkNvbDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqINCS0YvQstC+0LQgSFRNTCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2hvdyAoKSB7XG4gICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J2ItdW5pdCBcIit0aGlzLmNsYXNzTmFtZStcIic+PC9kaXY+XCI7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTY2VuZSBmcm9tICcuL3NjZW5lJztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIC8qKlxuICAgICAqIE9CSiBHQU1FXG4gICAgICogQHBhcmFtIHNldHRpbmdcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZyA9IHNldHRpbmc7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8g0KPRgdGC0LDQvdC+0LLQuNC8INGA0LXQttC40Lwg0LjQs9GA0YtcbiAgICAgICAgdGhpcy5kZXZNb2RlID0gc2V0dGluZy5kZXZNb2RlIHx8IGZhbHNlO1xuXG4gICAgICAgIC8vINCj0YHRgtCw0L3QvtCy0LjQvCDRgdC60L7RgNC+0YHRgtGMINC40LPRgNC+0LLQvtCz0L4g0YbQuNC60LvQsFxuICAgICAgICB0aGlzLnRpbWVSZW5kZXIgPSBzZXR0aW5nLnRpbWVSZW5kZXIgfHwgNTAwO1xuXG4gICAgICAgIHRoaXMuYnRuU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1idXR0b25zX19idG4tc3RhcnQnKTtcbiAgICAgICAgdGhpcy5idG5QYXVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiLWJ1dHRvbnNfX2J0bi1wYXVzZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdBTUUgTE9PUFxuICAgICAqL1xuICAgIHJ1biAoKSB7XG4gICAgICAgIC8vINCh0L7Qt9C00LDQtNC40Lwg0L3QvtCy0YPRjiDRgdGG0LXQvdGDXG4gICAgICAgIGxldCBzY2VuZSA9IG5ldyBTY2VuZSh0aGlzLnNldHRpbmcpO1xuXG4gICAgICAgIC8vINCh0L7Qt9C00LDQtNC40Lwg0LjQs9GA0L7QstC+0LUg0L/QvtC70LUg0L3QsCDRgdGG0LXQvdC1XG4gICAgICAgIGlmIChzY2VuZS5idWlsZCgpKSB7XG5cbiAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJywn0JjQs9GA0LAg0LfQsNCz0YDRg9C20LXQvdCwLicsICdzdWNjZXNzJyk7XG4gICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsXCLQndCw0LbQvNC40YLQtSAn0J3QsNGH0LDRgtGMINC40LPRgNGDJy5cIiwgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IGxvb3A7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kZXZNb2RlKSB7XG5cbiAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINCyINC+0LHRi9GH0L3QvtC8INGA0LXQttC40LzQtS4nLCAnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idG5TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC30LDQv9GD0YnQtdC90LAuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g0JPQu9Cw0LLQvdGL0LkgTG9vcFxuICAgICAgICAgICAgICAgICAgICBsb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUuaXNzZXRPYmplY3RPbk1hcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuZGllTWFuYWdlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmFjdGlvbk9uTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCBzZWxmLnRpbWVSZW5kZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idG5QYXVzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb29wKTtcblxuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINC+0YHRgtCw0L3QvtCy0LvQtdC90LAuJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lLmlzc2V0T2JqZWN0T25NYXAoKSkge1xuICAgICAgICAgICAgICAgICAgICAkLmxOb3RpZnkoJ2FkZCcsJ9CY0LPRgNCwINCyINGA0LXQttC40LzQtSDRgNCw0LfRgNCw0LHQvtGC0YfQuNC60LAuJywgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgICAgICAgICBzY2VuZS5kaWVNYW5hZ2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmFjdGlvbk9uTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQubE5vdGlmeSgnYWRkJywn0JrQvtC90LXRhiDQuNCz0YDRiy4nLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIgKCkge1xuICAgICAgICBhbGVydCgnR2FtZSBPdmVyJyk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBzZXR0aW5nIGZyb20gXCIuL3NldHRpbmdcIjtcblxuLy8g0J/QvtGB0LvQtSDQt9Cw0LPRgNGD0LfQutC4INC00L7QutGD0LzQtdC90YLQsCDQt9Cw0L/Rg9GB0YLQuNC8INC40LPRgNGDXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkLmxOb3RpZnkoKTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoc2V0dGluZyk7XG5cbiAgICBnYW1lLnJ1bigpO1xufSk7XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcbmltcG9ydCBVbml0IGZyb20gJy4vdW5pdCc7XG5pbXBvcnQgc2V0dGluZyBmcm9tICcuL3NldHRpbmcnO1xuaW1wb3J0IERpZVVuaXQgZnJvbSAnLi9kaWVVbml0JztcbmltcG9ydCB0b29scyBmcm9tICcuL3Rvb2xzJztcblxuLyoqXG4gKiDQmtC70LDRgdGBINGA0LDQsdC+0YLRiyDRgSDQutCw0YDRgtC+0LlcbiAqIEBwYXJhbSBzZXR0aW5nXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gW107XG5cbiAgICAgICAgLy8g0J7QsdGK0LXQutGC0Ysg0LTQu9GPINC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5tYXBPYmplY3RzID0gc2V0dGluZy5tYXBPYmplY3RzO1xuXG4gICAgICAgIC8vINCh0L/QuNGB0L7QuiDQvtCx0YrQtdC60YLQvtCyLCDQutC+0YLQvtGA0YvQtSDQt9Cw0LTQtdC50YHRgtCy0L7QstCw0L3QvdGLINC90LAg0LrQsNGA0YLQtVxuICAgICAgICB0aGlzLm9iamVjdHNPbk1hcCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5yb3cgPSBzZXR0aW5nLm1hcFNpemUucm93IHx8IDA7XG4gICAgICAgIHRoaXMuY29sID0gc2V0dGluZy5tYXBTaXplLmNvbCB8fCAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog0J/QvtGB0YLRgNC+0LjQvCDQv9GD0YHRgtGD0Y4g0LrQsNGA0YLRgyDQvdCwINC+0YHQvdC+0LLQtSDQvdCw0YfQsNC70YzQvdGL0YUgUm93L0NvbFxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLm1hcERhdGEucHVzaChbXSkgPCB0aGlzLnJvdykgO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcERhdGEubGVuZ3RoID09IHRoaXMucm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCT0LXQvdC10YDQsNGG0LjRjyDQutCw0YDRgtGLXG4gICAgICovXG4gICAgZ2VuZXJhdGUoKSB7XG5cbiAgICAgICAgbGV0IG9iaklEID0gMDtcblxuICAgICAgICBmb3IgKGxldCBvYmplY3ROYW1lIGluIHRoaXMubWFwT2JqZWN0cykge1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3ROYW1lKTtcbiAgICAgICAgICAgIGxldCBvYmpNaW4gPSB0aGlzLm1hcE9iamVjdHNbb2JqZWN0TmFtZV0ubWluO1xuICAgICAgICAgICAgbGV0IG9iak1heCA9IHRoaXMubWFwT2JqZWN0c1tvYmplY3ROYW1lXS5tYXg7XG5cbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC+0LHRitC10LrRgiDRj9Cy0LvRj9C10YLRjNGB0Y8g0YHRgtCw0YLQuNC60L7QuSxcbiAgICAgICAgICAgIC8vINGC0L4g0L/QvtGB0YLQsNGA0LXQvNGB0Y8g0LTQsNGC0Ywg0L/QviDQvNCw0LrRgdC40LzRg9C80YMg0LfQvdCw0YfQtdC90LjRjyBtaW4vbWF4XG4gICAgICAgICAgICAvLyDQtNC70Y8g0L/QvtC70L3QvtCz0L4g0LfQsNC/0L7Qu9C90LXQvdC40Y8g0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuICAgICAgICAgICAgaWYgKG9iak1pbiA9PT0gbnVsbCAmJiBvYmpNYXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvYmpNaW4gPSAodGhpcy5yb3cgKyB0aGlzLmNvbCkgKiAyO1xuICAgICAgICAgICAgICAgIG9iak1heCA9ICh0aGlzLnJvdyArIHRoaXMuY29sKSAqIDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g0J/QvtC70YPRh9C40Lwg0LrQvtC7LdCy0L4g0L7QsdGK0LXQutGC0L7QsiDQvdCwINC60LDRgNGC0LVcbiAgICAgICAgICAgIGxldCBvYmpDb3VudE9uTWFwID0gdG9vbHMucmFuZG9tSW50ZWdlcihvYmpNaW4sIG9iak1heCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib2JqZWN0TmFtZVtvYmpDb3VudE9uTWFwXTogXCIgKyBvYmplY3ROYW1lICsgXCIgXCIgKyBvYmpDb3VudE9uTWFwKTtcblxuICAgICAgICAgICAgLy8g0J/RgNC+0LnQtNC10LzRgdGPINC/0L4g0Y3RgtC+0LzRgyDQutC+0LvQuNGH0LXQstGB0YLQstGDXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakNvdW50T25NYXA7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IG1hcFJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXBSb3dDb2xOb3JtYWw6ICcsIG1hcFJvd0NvbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbWFwUm93Q29sLnJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialBvc2l0aW9uQ29sOiBtYXBSb3dDb2wuY29sXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3ROYW1lID09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQgPSBuZXcgRW50aXR5KHVuaXRQYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgPT0gJ2Nvd3MnIHx8IG9iamVjdE5hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9PYmplY3RzT25NYXAodW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdW5pdFNldHRpbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpJRDogb2JqSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJ5TmV3R2VuZXJhdGUodW5pdFNldHRpbmcsIG9iakNvdW50T25NYXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2JqSUQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7QstGC0L7RgNC90LDRjyDQs9C10L3QtdGA0LDRhtC40Y8sINCyINGB0LvRg9GH0LjQuCDQt9Cw0L3Rj9GC0L7Qs9C+INC80LXRgdGC0LAg0LIg0LzQsNGB0YHQuNCy0LVcbiAgICAgKiBAcGFyYW0gb2JqZWN0U2V0dGluZ1xuICAgICAqIEBwYXJhbSBjb3VudFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHRyeU5ld0dlbmVyYXRlKG9iamVjdFNldHRpbmcsIGNvdW50KSB7XG5cbiAgICAgICAgaWYgKGNvdW50IDw9IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDRjdGC0L7QvNGDINC60L7Qu9C40YfQtdCy0YHRgtCy0YNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vINGB0L7Qt9C00LDQtNC40Lwg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LTQu9GPINC/0YDQvtGB0YLQsNCy0LvQtdC90LjRj1xuICAgICAgICAgICAgbGV0IG1hcFJvd0NvbCA9IHRoaXMuZ2V0UmFuZG9tUm93Q29sQ29vcmQoKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21hcFJvd0NvbFJlY3Vyc2l2ZTogJywgbWFwUm93Q29sKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWFwRGF0YVttYXBSb3dDb2wucm93XVttYXBSb3dDb2wuY29sXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRQYXJhbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG9iamVjdFNldHRpbmcub2JqSUQsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBvYmpQb3NpdGlvblJvdzogbWFwUm93Q29sLnJvdyxcbiAgICAgICAgICAgICAgICAgICAgb2JqUG9zaXRpb25Db2w6IG1hcFJvd0NvbC5jb2xcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbGV0IHVuaXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09IFwiZ3JvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdCA9IG5ldyBFbnRpdHkodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1bml0ID0gbmV3IFVuaXQodW5pdFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hcERhdGFbbWFwUm93Q29sLnJvd11bbWFwUm93Q29sLmNvbF0gPSB1bml0O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFNldHRpbmcub2JqZWN0TmFtZSA9PSAnY293cycgfHwgb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lID09ICd0aWdlcnMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9PYmplY3RzT25NYXAodW5pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHVuaXRTZXR0aW5nID0ge1xuICAgICAgICAgICAgICAgICAgICBvYmpJRDogb2JqZWN0U2V0dGluZy5vYmpJRCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0U2V0dGluZy5vYmplY3ROYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cnlOZXdHZW5lcmF0ZSh1bml0U2V0dGluZywgY291bnQgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC/0YDQvtC40LfQstC+0LvRjNC90YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCwINC+0YHQvdC+0LLQtSDQutC+0Lst0LLQviDRgdGC0YDQvtC6INC4INC60L7Qu9C+0L3QvtC6XG4gICAgICogQHJldHVybnMge3tyb3c6ICosIGNvbDogKn19XG4gICAgICovXG4gICAgZ2V0UmFuZG9tUm93Q29sQ29vcmQoKSB7XG4gICAgICAgIGxldCBjb3VudFJvdyA9IHRoaXMucm93LFxuICAgICAgICAgICAgY291bnRDb2wgPSB0aGlzLmNvbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93OiB0b29scy5yYW5kb21JbnRlZ2VyKDAsIGNvdW50Um93KSxcbiAgICAgICAgICAgIGNvbDogdG9vbHMucmFuZG9tSW50ZWdlcigwLCBjb3VudENvbClcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjaGVja1JvdXRlICgpIHtcblxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0QWxsTmVpZ2hib3JpbmdzQ2VsbEluZm9ybWF0aW9uKHVuaXQsIHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG5cbiAgICB9XG4gICAgXG4gICAgZ2V0UmFuZG9tUm93Q29sQmFzZWRPblVuaXQoY2VsbCwgc3RlcHMpIHtcbiAgICAgICAgbGV0IGlzc2V0Um91dGUgPSB0aGlzLnRyeVJvdXRlKHN0ZXBzKTtcblxuXG5cblxuICAgICAgICAvLyBsZXQgcm93TWluID0gKChjZWxsLnBvc2l0aW9uUm93IC0gMSkgPj0gMCkgPyAoY2VsbC5wb3NpdGlvblJvdyAtIDEpIDogMDtcbiAgICAgICAgLy8gbGV0IHJvd01heCA9ICgoY2VsbC5wb3NpdGlvblJvdyArIDEpIDw9IHRoaXMucm93KSA/IChjZWxsLnBvc2l0aW9uUm93ICsgMSkgOiB0aGlzLnJvdztcblxuICAgICAgICAvLyBsZXQgY29sTWluID0gKChjZWxsLnBvc2l0aW9uQ29sIC0gMSkgPj0gMCkgPyAoY2VsbC5wb3NpdGlvblJvdyAtIDEpIDogMDtcbiAgICAgICAgLy8gbGV0IGNvbE1heCA9ICgoY2VsbC5wb3NpdGlvbkNvbCArIDEpIDw9IHRoaXMuY29sKSA/IChjZWxsLnBvc2l0aW9uQ29sICsgMSkgOiB0aGlzLmNvbDtcblxuICAgICAgICAvLyBsZXQgbmV3UG9zaXRpb25Sb3csXG4gICAgICAgIC8vICAgICBuZXdQb3NpdGlvbkNvbDtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gbmV3UG9zaXRpb25Sb3cgPSB0aGlzLmdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKHJvd01pbiwgcm93TWF4LCBjZWxsLnBvc2l0aW9uUm93KTtcbiAgICAgICAgLy8gbmV3UG9zaXRpb25Db2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbFdpdGhFeGNsdWRlKGNvbE1pbiwgY29sTWF4LCBjZWxsLnBvc2l0aW9uUm93KTtcblxuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgICAgcG9zaXRpb25Sb3c6IG5ld1Bvc2l0aW9uUm93LFxuICAgICAgICAvLyAgICAgcG9zaXRpb25Db2w6IG5ld1Bvc2l0aW9uQ29sXG4gICAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgZ2V0UmFuZG9tUm93Q29sV2l0aEV4Y2x1ZGUobWluQ2VsbCwgbWF4Q2VsbCwgZXhjbHVkZVZhbHVlKSB7XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICB2YWx1ZSA9IHRvb2xzLnJhbmRvbUludGVnZXIobWluQ2VsbCwgbWF4Q2VsbCk7XG5cbiAgICAgICAgd2hpbGUgKHZhbHVlID09IGV4Y2x1ZGVWYWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b29scy5yYW5kb21JbnRlZ2VyKG1pbkNlbGwsIG1heENlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cblxuICAgIGdldE5ld1Jvd0NvbFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb25Sb3dDb2wgPSB0aGlzLmdldFJhbmRvbVJvd0NvbENvb3JkKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRk9SIE5FVyBVTklUIEdFTkVSRVRFIE5FVyBQT1NJVElPTjogVFJZW1wiICsgKGkrKykgKyBcIl0gLT4gW1IoXCIgKyBuZXdQb3NpdGlvblJvd0NvbC5yb3cgKyBcIik6QyhcIiArIG5ld1Bvc2l0aW9uUm93Q29sLmNvbCArIFwiKV1cIik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1hcERhdGFbbmV3UG9zaXRpb25Sb3dDb2wucm93XVtuZXdQb3NpdGlvblJvd0NvbC5jb2xdLmNsYXNzTmFtZSA9PT0gXCJncm91bmRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQb3NpdGlvblJvd0NvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNC00LjQvCDRj9GH0LXQudC60YNcbiAgICAgKiBAcGFyYW0gb2xkVW5pdFxuICAgICAqIEBwYXJhbSBuZXdVbml0XG4gICAgICovXG4gICAgc2V0Q2VsbChvbGRVbml0LCBuZXdVbml0KSB7XG5cbiAgICAgICAgdGhpcy5tYXBEYXRhW29sZFVuaXQucG9zaXRpb25Sb3ddW29sZFVuaXQucG9zaXRpb25Db2xdID0gbmV3VW5pdDtcblxuICAgICAgICB0aGlzLm1hcERhdGFbb2xkVW5pdC5wb3NpdGlvblJvd11bb2xkVW5pdC5wb3NpdGlvbkNvbF0udXBkYXRlUm93Q29sKG9sZFVuaXQpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INGP0YfQtdC50LrRg1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblJvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvbkNvbFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldENlbGwocG9zaXRpb25Sb3csIHBvc2l0aW9uQ29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcERhdGFbcG9zaXRpb25Sb3ddW3Bvc2l0aW9uQ29sXTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBVbml0INC40Lcg0LzQsNGB0YHQuNCy0LAgT2JqZWN0T25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDQuNCz0YDQvtCy0YvRhSDQvtCx0YrQtdC60YLQsNGFXG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICogQHJldHVybnMgeypbXX1cbiAgICAgKi9cbiAgICBhZGRUb09iamVjdHNPbk1hcCh1bml0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwLnB1c2godW5pdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBPYmplY3RPbk1hcCxcbiAgICAgKiDQsiDQutC+0YLQvtGA0L7QvCDQvdCw0YXQvtC00LjRgtGM0YHRjyDQuNC90YTQviDQvtCxINC40LPRgNC+0LLRi9GFINC+0LHRitC10LrRgtCw0YVcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIHJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwLnNwbGljZShpbmRleE9iamVjdCwgMSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCj0LTQsNC70Y/QtdGCIFVuaXQg0LjQtyDQvNCw0YHRgdC40LLQsCBEaWVPYmplY3RzT25NYXAsXG4gICAgICog0LIg0LrQvtGC0L7RgNC+0Lwg0L3QsNGF0L7QtNC40YLRjNGB0Y8g0LjQvdGE0L4g0L7QsSDRgdC80LXRgNGC0LggdW5pdHNcbiAgICAgKiBAcGFyYW0gaW5kZXhPYmplY3RcbiAgICAgKiBAcmV0dXJucyB7KltdfVxuICAgICAqL1xuICAgIHJlbW92ZVVuaXRGcm9tRGllT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwLnNwbGljZShpbmRleE9iamVjdCwgMSk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7QsdC90L7QstC40Lwg0LTQu9GPIFVuaXQg0LXQs9C+IFJDKFJvdy9Db2wpINCyINC80LDRgdGB0LjQstC1IE9iamVjdE9uTWFwLFxuICAgICAqINCyINC60L7RgtC+0YDQvtC8INC90LDRhdC+0LTQuNGC0YzRgdGPINC40L3RhNC+INC+0LEg0LjQs9GA0L7QstGL0YUg0L7QsdGK0LXQutGC0LDRhVxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAgdXBkYXRlVW5pdFJvd0NvbEluT2JqZWN0c09uTWFwKHVuaXQsIGluZGV4T2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvblJvdyA9IHVuaXQucG9zaXRpb25Sb3c7XG4gICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9IHVuaXQucG9zaXRpb25Db2w7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KPQtNCw0LvQuNC8INC+0LHRitC10LrRglxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHBhcmFtIGluZGV4T2JqZWN0XG4gICAgICovXG4gICAga2lsbFVuaXQodW5pdCwgaW5kZXhPYmplY3QpIHtcblxuICAgICAgICB0aGlzLnJlbW92ZVVuaXRGcm9tT2JqZWN0c09uTWFwKGluZGV4T2JqZWN0KTtcblxuICAgICAgICAvLyDQndCwINC80LXRgdGC0L4g0YHRgtCw0YDQvtCz0L4gVW5pdCDQv9C+0YHRgtCw0LLQuNC8INC80L7Qs9C40LvQutGDXG4gICAgICAgIGxldCB1bml0UGFyYW0gPSB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJkZWF0aFwiLFxuICAgICAgICAgICAgb2JqUG9zaXRpb25Sb3c6IHVuaXQucG9zaXRpb25Sb3csXG4gICAgICAgICAgICBvYmpQb3NpdGlvbkNvbDogdW5pdC5wb3NpdGlvbkNvbCxcbiAgICAgICAgICAgIGRpZVVuaXRUeXBlOiB1bml0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGRpZVVuaXRJZDogdW5pdC5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBkaWVVbml0ID0gbmV3IERpZVVuaXQodW5pdFBhcmFtKTtcblxuICAgICAgICB0aGlzLnNldENlbGwodW5pdCwgZGllVW5pdCk7XG5cbiAgICAgICAgdGhpcy5hZGREaWVVbml0VG9EaWVBcnJheShkaWVVbml0KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRpZU9iamVjdHNPbk1hcCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LLQtdGA0LjQvCDQtdGB0YLRjCDQu9C4INC10YnQtSDQvtCx0YrQtdC60YLRiyDQsiDQvNCw0YHRgdC40LLQtSDQtNC70Y8g0YHRg9GJ0LXQstGB0YLQstC+0LLQsNC90LjRjyDQuNCz0YDRi1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgaXNzZXRPYmplY3RPbk1hcCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm9iamVjdHNPbk1hcC5sZW5ndGggPiAwID8gMSA6IDApO1xuICAgIH07XG5cblxuLy8g0J/RgNC+0LLQtdGA0LjQvCDRgdC+0YHQtdC00L3QuNC4INC60LvQtdGC0LrQuCArXG4gICAgY2hlY2tVbml0TmVpZ2hib3JpbmdzQ2VsbCh1bml0KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHVuaXQuY2xhc3NOYW1lID09ICd0aWdlcnMnXG4gICAgICAgICAgICB8fFxuICAgICAgICAgICAgdW5pdC5jbGFzc05hbWUgPT0gJ2Nvd3MnXG4gICAgICAgICkge1xuXG4gICAgICAgICAgICBsZXQgY2VsbHMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndG9wUmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHRCb3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnRCb3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsZWZ0VG9wJyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvblJvdyA9IHBhcnNlSW50KHVuaXQucG9zaXRpb25Sb3cpO1xuICAgICAgICAgICAgbGV0IHVuaXRQb3NpdGlvbkNvbCA9IHBhcnNlSW50KHVuaXQucG9zaXRpb25Db2wpO1xuICAgICAgICAgICAgLy8gbGV0IG1hcERhdGUgPSB0aGlzLm1hcERhdGE7XG5cbiAgICAgICAgICAgIC8vINCd0LUg0LfQsNCx0YvRgtGMINC/0YDQviDQs9GA0LDQvdC40YbRiyDQutCw0YDRgtGLXG4gICAgICAgICAgICBsZXQgYm9yZGVyID0ge1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB0b3BSaWdodDogdGhpcy5jb2wsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRoaXMuY29sLFxuICAgICAgICAgICAgICAgIHJpZ2h0Qm90dG9tOiB0aGlzLmNvbCxcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMucm93LFxuICAgICAgICAgICAgICAgIGxlZnRCb3R0b206IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0VG9wOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWFwRGF0ZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBMOlwiLCB1bml0UG9zaXRpb25Sb3csIHVuaXRQb3NpdGlvbkNvbCk7XG5cbiAgICAgICAgICAgIC8vIFRPUCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstCy0LXRgNGF0YMgK1xuICAgICAgICAgICAgaWYgKCh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbMF0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzBdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93IC0gMV1bdW5pdFBvc2l0aW9uQ29sXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBUT1BfUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQstC10YDRhdGDLdCy0L/RgNCw0LLQviArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyAtIDEpID49IGJvcmRlci50b3BcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Db2wgKyAxKSA8IGJvcmRlci50b3BSaWdodFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbMV0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzFdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93IC0gMV1bdW5pdFBvc2l0aW9uQ29sICsgMV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gUklHSFQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0LLQv9GA0LDQstC+ICtcbiAgICAgICAgICAgIGlmICgodW5pdFBvc2l0aW9uQ29sICsgMSkgPCBib3JkZXIucmlnaHQpIHtcbiAgICAgICAgICAgICAgICBjZWxsc1syXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbMl0uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3ddW3VuaXRQb3NpdGlvbkNvbCArIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIFJJR0hUX0JPVFRPTSDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQstC/0YDQsNCy0L4t0LLQvdC40LfRgyArXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbVxuICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgKHVuaXRQb3NpdGlvbkNvbCArIDEpIDwgYm9yZGVyLnJpZ2h0Qm90dG9tXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjZWxsc1szXS5leGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbHNbM10uY29udGVudCA9IHRoaXMubWFwRGF0YVt1bml0UG9zaXRpb25Sb3cgKyAxXVt1bml0UG9zaXRpb25Db2wgKyAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBCT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0LLQvdC40LfRgyArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvblJvdyArIDEpIDwgYm9yZGVyLmJvdHRvbSkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzRdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s0XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyArIDFdW3VuaXRQb3NpdGlvbkNvbF07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gTEVGVF9CT1RUT00g0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsC3QstC90LjQt9GDICtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uUm93ICsgMSkgPCBib3JkZXIuYm90dG9tXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRCb3R0b21cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzVdLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s1XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyArIDFdW3VuaXRQb3NpdGlvbkNvbCAtIDFdO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIExFRlQg0J/RgNC+0LLQtdGA0LjQvCDRj9GH0LXQudC60YMg0YEg0YHQu9C10LLQsCArXG4gICAgICAgICAgICBpZiAoKHVuaXRQb3NpdGlvbkNvbCAtIDEpID49IGJvcmRlci5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgY2VsbHNbNl0uZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGxzWzZdLmNvbnRlbnQgPSB0aGlzLm1hcERhdGFbdW5pdFBvc2l0aW9uUm93XVt1bml0UG9zaXRpb25Db2wgLSAxXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBMRUZUX1RPUCDQn9GA0L7QstC10YDQuNC8INGP0YfQtdC50LrRgyDRgSDQu9C10LLQsC3QstCy0LXRgNGF0YMgK1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh1bml0UG9zaXRpb25Sb3cgLSAxKSA+PSBib3JkZXIudG9wXG4gICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAodW5pdFBvc2l0aW9uQ29sIC0gMSkgPj0gYm9yZGVyLmxlZnRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNlbGxzWzddLmV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsc1s3XS5jb250ZW50ID0gdGhpcy5tYXBEYXRhW3VuaXRQb3NpdGlvblJvdyAtIDFdW3VuaXRQb3NpdGlvbkNvbCAtIDFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnVuaXQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2VsbHMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJST1c6IFwiICsgdW5pdFBvc2l0aW9uUm93LCBcIkNPTDogXCIgKyB1bml0UG9zaXRpb25Db2wgKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J7RgtGE0LjQu9GM0YLRgNGD0LXQvCDRj9GH0LXQudC60Lgg0L/QviDRgtC40L/RgyB1bml0VHlwZVxuICAgICAqIEBwYXJhbSBuZWlnaGJvcmluZ3NDZWxsXG4gICAgICogQHBhcmFtIHVuaXRUeXBlXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGZpbHRlckNlbGxCeVR5cGUobmVpZ2hib3JpbmdzQ2VsbCwgdW5pdFR5cGUpIHtcblxuICAgICAgICBsZXQgYXJyID0gW107XG5cbiAgICAgICAgLy8g0J/QtdGA0LXQsdC10YDQtdC8INC/0L7Qu9GD0YfQtdC90L3Ri9C5INC80LDRgdGB0LjQsiDRgSDRj9GH0LXQudC60LDQvNC4INC90LDRhdC+0LTRj9GJ0LjQvNC40YHRjyDRgNGP0LTQvtC8XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVpZ2hib3JpbmdzQ2VsbC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAvLyDQr9GH0LXQudC60LAg0L3QtSDQstGL0YXQvtC00LjRgiDQt9CwINCz0YDQsNC90LjRhtGLXG4gICAgICAgICAgICBpZiAobmVpZ2hib3JpbmdzQ2VsbFtpXS5leGlzdCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKG5laWdoYm9yaW5nc0NlbGxbaV0uY29udGVudC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQuY2xhc3NOYW1lID09IHVuaXRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChuZWlnaGJvcmluZ3NDZWxsW2ldLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC40L3QtNC10LrRgSDQutC+0YDQvtCy0Ysg0L/RgNC4INC10LUg0YHRitC10LTQsNC90LjQuFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbmRleEZyb21PYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5vYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID09IHVuaXQucG9zaXRpb25Sb3dcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9PSB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbi8vTUFQIERFQVRIIE1BTkFHRVxuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQuNC8INC40L3QtNC10LrRgSDQutC+0YDQvtCy0Ysg0L/RgNC4INC10LUg0YHRitC10LTQsNC90LjQuFxuICAgICAqIEBwYXJhbSB1bml0XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJbmRleEZyb21EaWVPYmplY3RzT25NYXAodW5pdCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5kaWVPYmplY3RzT25NYXAubGVuZ3RoOyBpbmRleE9iamVjdCsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5kaWVPYmplY3RzT25NYXBbaW5kZXhPYmplY3RdLnBvc2l0aW9uUm93ID09IHVuaXQucG9zaXRpb25Sb3dcbiAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5wb3NpdGlvbkNvbCA9PSB1bml0LnBvc2l0aW9uQ29sXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPYmplY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGREaWVVbml0VG9EaWVBcnJheSh1bml0KSB7XG4gICAgICAgIHRoaXMuZGllT2JqZWN0c09uTWFwLnB1c2godW5pdCk7XG4gICAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCJpbXBvcnQgTWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZyc7XG5cbi8qKlxuICog0JjQs9GA0L7QstCw0Y8g0YHRhtC10L3QsFxuICogQHBhcmFtIHNldHRpbmdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYi1nYW1lX19wbGFpbicpO1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoc2V0dGluZyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC60LDRgNGC0YMg0Lgg0LfQsNC/0L7Qu9C90LjQvCDQtdC1INC+0LHRitC10LrRgtCw0LzQuFxuICAgICAqL1xuICAgIGJ1aWxkICgpIHtcblxuICAgICAgICBpZiAodGhpcy5tYXAuaW5pdCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2VuZXJhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCe0YLRgNC40YHQvtCy0LrQsCDQt9Cw0L/QvtC70L3QtdC90L3QvtC5INC60LDRgNGC0YtcbiAgICAgKi9cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBsZXQgbWFwSFRNTCA9ICcnO1xuXG5cbiAgICAgICAgLy8g0J/QvtGB0YLRgNC+0LjQvCDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtVxuICAgICAgICBmb3IgKGxldCBwb3NpdGlvblJvdyA9IDA7IHBvc2l0aW9uUm93IDwgdGhpcy5tYXAucm93OyBwb3NpdGlvblJvdysrKSB7XG4gICAgICAgICAgICBtYXBIVE1MICs9IFwiPGRpdiBjbGFzcz0ncm93Jz5cIjtcbiAgICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uQ29sID0gMDsgcG9zaXRpb25Db2wgPCB0aGlzLm1hcC5jb2w7IHBvc2l0aW9uQ29sKyspIHtcblxuICAgICAgICAgICAgICAgIC8vIERFViBNT0RFXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxDb29yZGluYXRlID0gXCI8ZGl2IGNsYXNzPSdjZWxsQ29vcmRpbmF0ZSc+XCIgKyBwb3NpdGlvblJvdyArIFwiIDogXCIgKyBwb3NpdGlvbkNvbCArIFwiPC9kaXY+XCI7XG5cbiAgICAgICAgICAgICAgICBtYXBIVE1MICs9IFwiPGRpdiBjbGFzcz0nY2VsbCc+XCIgKyBjZWxsQ29vcmRpbmF0ZSArIFwiIFwiICsgdGhpcy5tYXAuZ2V0Q2VsbChwb3NpdGlvblJvdywgcG9zaXRpb25Db2wpLnNob3coKSArIFwiPC9kaXY+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXBIVE1MICs9IFwiPC9kaXY+XCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjQvCDRgdC+0LHRgNCw0L3QvdGD0Y4gSFRNTCDQutCw0YDRgtGDINCyIERPTVxuICAgICAgICB0aGlzLnBsYWluLmlubmVySFRNTCA9IG1hcEhUTUw7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0JTQtdC50YHRgtCy0LjRjyDQstGB0LXRhSDQvtCx0YrQtdC60YLQvtCyINC90LAg0LrQsNGA0YLQtVxuICAgICAqL1xuICAgIGFjdGlvbk9uTWFwICgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXAub2JqZWN0c09uTWFwKTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5tYXAub2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgdGhpcy5tYXAub2JqZWN0c09uTWFwW2luZGV4T2JqZWN0XS5hY3Rpb24odGhpcy5tYXAsIGluZGV4T2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkaWVNYW5hZ2VyICgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleE9iamVjdCA9IDA7IGluZGV4T2JqZWN0IDwgdGhpcy5tYXAuZGllT2JqZWN0c09uTWFwLmxlbmd0aDsgaW5kZXhPYmplY3QrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwLmRpZU9iamVjdHNPbk1hcFtpbmRleE9iamVjdF0uYWN0aW9uKHRoaXMubWFwLCBpbmRleE9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQn9GA0L7QstC10YDQuNC8INC10YHRgtGMINC70Lgg0LXRidC1INC+0LHRitC10LrRgtGLINCyINC80LDRgdGB0LjQstC1INC00LvRjyDRgdGD0YnQtdCy0YHRgtCy0L7QstCw0L3QuNGPINC40LPRgNGLXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBpc3NldE9iamVjdE9uTWFwICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmlzc2V0T2JqZWN0T25NYXAoKTtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiXG4vLyBQUk9EXG4vKmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnYW1lQ29udGFpbmVySUQ6ICdiLWdhbWUnLFxuICAgIG1hcFNpemU6IHtcbiAgICAgICAgcm93OiA5LFxuICAgICAgICBjb2w6IDIzXG4gICAgfSxcbiAgICBtYXBPYmplY3RzOiB7XG4gICAgICAgIGdyYXNzOiB7XG4gICAgICAgICAgICBtaW46IDkwLFxuICAgICAgICAgICAgbWF4OiAxNzVcbiAgICAgICAgfSxcbiAgICAgICAgY293czoge1xuICAgICAgICAgICAgbWluOiAxNSxcbiAgICAgICAgICAgIG1heDogMjBcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDZcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogNTAwXG59OyovXG5cbi8vIERFVlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdhbWVDb250YWluZXJJRDogJ2ItZ2FtZScsXG4gICAgbWFwU2l6ZToge1xuICAgICAgICByb3c6IDYsXG4gICAgICAgIGNvbDogNlxuICAgIH0sXG4gICAgbWFwT2JqZWN0czoge1xuICAgICAgICBncmFzczoge1xuICAgICAgICAgICAgbWluOiA3LFxuICAgICAgICAgICAgbWF4OiAxM1xuICAgICAgICB9LFxuICAgICAgICBjb3dzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDVcbiAgICAgICAgfSxcbiAgICAgICAgdGlnZXJzOiB7XG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IDRcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGV2TW9kZTogZmFsc2UsXG4gICAgdGltZVJlbmRlcjogMTUzMFxufTtcblxuIiwiLy8gQVVESU8gSU4gR0FNRVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNvdW5kcyB7XG4gICAgY29uc3RydWN0b3IoZmlsZSkge1xuICAgICAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKGZpbGUpOyAgIFxuICAgIH1cblxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICB9O1xuXG4gICAgLy8g0KTRg9C90LrRhtC40Y8gc3RvcCDQtNC70Y8gQXVkaW86XG4gICAgc3RvcCAoKSB7XG4gICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5jdXJyZW50VGltZSA9IDAuMDtcbiAgICB9O1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiLy8g0JLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3Ri9C1INGE0YPQvdC60YbQuNC4INC00LvRjyDQuNCz0YDRi1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQvtGJ0Y/QtdGCINGB0LvRg9GH0LDQudC90L7QtSDRh9C40YHQu9C+INCyINC00LjQsNC/0LDQt9C+0L3QtSBNaW4vTWF4XG4gICAgICogQHBhcmFtIG1pblxuICAgICAqIEBwYXJhbSBtYXhcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByYW5kb21JbnRlZ2VyOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG59O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgR3Jhc3NBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vZ3Jhc3NBbGdvcml0aG0nO1xuaW1wb3J0IENvd3NBbGdvcml0aG0gZnJvbSAnLi9hbGdvcml0aG0vY293c0FsZ29yaXRobSc7XG5pbXBvcnQgVGlnZXJzQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL3RpZ2Vyc0FsZ29yaXRobSc7XG5pbXBvcnQgR3JvdW5kQWxnb3JpdGhtIGZyb20gJy4vYWxnb3JpdGhtL2dyb3VuZEFsZ29yaXRobSc7XG5pbXBvcnQgR2FtZVNvdW5kcyBmcm9tICcuL3NvdW5kJztcblxuLyoqXG4gKiDQntGB0L3QvtCy0L3QvtC5INCf0YDQvtGC0L7RgtC40L8g0L7QsdGK0LXQutGC0LAg0L3QsCDQutCw0YDRgtC1XG4gKiBAcGFyYW0gY2xhc3NOYW1lXG4gKiBAcGFyYW0gaWRcbiAqIEBwYXJhbSBvYmpQb3NpdGlvblJvd1xuICogQHBhcmFtIG9ialBvc2l0aW9uQ29sXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdCBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICAgICAgc3VwZXIocGFyYW0pO1xuXG4gICAgICAgIHRoaXMuZm9vZFR5cGUgPSB0aGlzLmdldEZvb2RUeXBlKCk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmVuZW15ID0gKHBhcmFtLmNsYXNzTmFtZSA9PSAnY293cycgPyAndGlnZXJzJyA6IG51bGwpO1xuXG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgaXNFYXQ6IGZhbHNlLFxuICAgICAgICAgICAgcG9zaXRpb25Sb3c6IG51bGwsXG4gICAgICAgICAgICBwb3NpdGlvbkNvbDogbnVsbCxcbiAgICAgICAgICAgIGluZGV4T2JqZWN0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zb3VuZEVhdCA9IG5ldyBHYW1lU291bmRzKFwiYXVkaW8vZWF0X1wiICsgdGhpcy5jbGFzc05hbWUgKyBcIi5tcDNcIik7XG5cbiAgICAgICAgLy8g0JLRi9Cx0LXRgNC40Lwg0LDQu9Cz0L7RgNC40YLQvCDQv9C+0LLQtdC00LXQvdC40Y8g0LTQu9GPINC+0LHRitC10LrRgtCwXG4gICAgICAgIHRoaXMuYWxnb3JpdG1zID0gdGhpcy5zZWxlY3RBbGdvcml0aG0ocGFyYW0uaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0YvQstC+0LQgSFRNTCDQvtCx0YrQtdC60YLQsFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgbGV0IHVuaXRIZWFsdGggPSBcIlwiO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzTmFtZSA9PSAnY293cycgfHwgdGhpcy5jbGFzc05hbWUgPT0gJ3RpZ2VycycpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc0hlYWx0aENvbG9yID0gdGhpcy5nZXRDbGFzc0hlYWx0aENvbG9yKHRoaXMuaGVhbHRoKTtcblxuICAgICAgICAgICAgdW5pdEhlYWx0aCArPSBcIjxkaXYgY2xhc3M9J2ItdW5pdF9faGVhbHRoJz48ZGl2IGNsYXNzPSdiLWhlYWx0X19pbmRpY2F0b3IgXCIgKyBjbGFzc0hlYWx0aENvbG9yICsgXCInIHN0eWxlPSd3aWR0aDogXCIgKyB0aGlzLmhlYWx0aCArIFwiJTsnPjwvZGl2PjwvZGl2PlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0nYi11bml0IFwiICsgdGhpcy5jbGFzc05hbWUgKyBcIic+XCIgKyB1bml0SGVhbHRoICsgXCI8L2Rpdj5cIjtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LjQvCDRhtCy0LXRgijQutC70LDRgdGBKSDQttC40LfQvdC4IHVuaXRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldENsYXNzSGVhbHRoQ29sb3IodmFsdWUpIHtcblxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDkwICYmIHBhcnNlSW50KHZhbHVlKSA8PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWdvb2RcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDc1ICYmIHBhcnNlSW50KHZhbHVlKSA8PSA5MCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYi1oZWFsdF9faW5kaWNhdG9yX2xpZmUtYWJvdmUtYXZlcmFnZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZUludCh2YWx1ZSkgPj0gNTAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDc1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1hdmVyYWdlXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHZhbHVlKSA+PSAyNSAmJiBwYXJzZUludCh2YWx1ZSkgPD0gNTApIHtcbiAgICAgICAgICAgIHJldHVybiBcImItaGVhbHRfX2luZGljYXRvcl9saWZlLWJlbG93LWF2ZXJhZ2VcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodmFsdWUpID49IDAgJiYgcGFyc2VJbnQodmFsdWUpIDw9IDI1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiLWhlYWx0X19pbmRpY2F0b3JfbGlmZS1sb3dcIjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0KDQsNC30L3Ri9C1INC00LXQudGB0YLQstC40Y8g0L7QsdGK0LXQutGC0LBcbiAgICAgKi9cbiAgICBhY3Rpb24obWFwLCBpbmRleE9iamVjdCkge1xuICAgICAgICB0aGlzLmFsZ29yaXRtcy5hY3QodGhpcywgbWFwLCBpbmRleE9iamVjdCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9C40Lwg0YbQtdC70Ywg0YDQsNC00Lgg0LrQvtGC0L7RgNC+0Lkg0LbQuNCy0LXRgiBVbml0IDopXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0Rm9vZFR5cGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Nvd3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZ3Jhc3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGlnZXJzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nvd3MnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqINCS0LXRgNC90LXRgiDQtNC70Y8g0L7QsdGK0LXQutGC0LAg0LXQs9C+INCw0LvQs9C+0YDQuNGC0Lwg0L/QvtCy0LXQtNC10L3QuNGPINCyINC40LPRgNC1XG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc2VsZWN0QWxnb3JpdGhtKGlkKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAwIC0gZ3Jhc3NcbiAgICAgICAgICogMSAtIGNvd3NcbiAgICAgICAgICogMiAtIHRpZ2Vyc1xuICAgICAgICAgKiAzIC0gZ3JvdW5kXG4gICAgICAgICAqIDQgLSBkZWF0aFxuICAgICAgICAgKi9cblxuICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KGlkKSkge1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmFzc0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ293c0FsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVGlnZXJzQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm91bmRBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cblxuLy8g0KHRitC10LTQtdC9XG4gICAgaXNFYXRlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlzRWF0O1xuICAgIH07XG5cbi8vINCh0YrQtdC00LXQvVxuICAgIGVhdGVuKHVuaXQsIGZvb2RJbmRleCkge1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pc0VhdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLnBvc2l0aW9uUm93ID0gdW5pdC5wb3NpdGlvblJvdztcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Db2wgPSB1bml0LnBvc2l0aW9uQ29sO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5pbmRleE9iamVjdCA9IGZvb2RJbmRleDtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24uY2xhc3NOYW1lID0gdW5pdC5jbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmlkID0gdW5pdC5pZDtcbiAgICB9O1xuXG4vLyBSRVNFVCDQodGK0LXQtNC10L1cbiAgICByZXNldEVhdGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb29kSW5mb3JtYXRpb24uaXNFYXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb29kSW5mb3JtYXRpb24ucG9zaXRpb25Sb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmZvb2RJbmZvcm1hdGlvbi5wb3NpdGlvbkNvbCA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9vZEluZm9ybWF0aW9uLmluZGV4T2JqZWN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgYWRkSGVhbHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoICs9IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgc3ViSGVhbHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoIC09IHBhcnNlSW50KHZhbHVlKTtcbiAgICB9O1xuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSJdLCJzb3VyY2VSb290IjoiIn0=