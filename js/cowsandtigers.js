var cowsandtigers = (function () {
    var devMode = false;

    // OBJ GAME
    function Game(setting) {
        this.setting = setting;
        // --------------
        // Установим режим игры
        devMode = this.setting.devMode || devMode;

        // Установим скорость игрового цикла
        this.timeRender = this.setting.timeRender || 500;

        // Создадим новую сцену
        this.scene = new Scene(this.setting);
    }

    // GAME LOOP
    Game.prototype.run = function () {
        // Создадим игровое поле на сцене
        this.scene.build();

        if (!devMode) {
            // Главный Loop
            setInterval(() => {
                this.scene.actionOnMap();
                this.scene.render();
            }, this.timeRender);
        } else {
            this.scene.actionOnMap();
            this.scene.render();
        }
    };

    // Игровая сцена
    function Scene(setting) {
        this.gameContainer = document.getElementById(setting.gameContainerID);
        this.map = new Map(setting);
    }
    /**
     * Проинициализируем карту и заполним ее объектами
     */
    Scene.prototype.build = function () {
        this.map.init();
        this.map.generate();
    };
    /**
     * Отрисовка заполненной карты
     */
    Scene.prototype.render = function () {
        var $gameContainer = this.gameContainer;
        var mapHTML = '';

        // Построим игровое поле
        for (var row = 0; row < this.map.row; row++) {

            mapHTML += "<div class='row'>";

            for (var col = 0; col < this.map.col; col++) {

                mapHTML += "<div class='cell'> " + this.map.mapData[row][col].show() + "</div>";

            }

            mapHTML += "</div>";
        }

        // Добавим собранную в html карту в DOM
        $gameContainer.querySelectorAll('.plain')[0].innerHTML = mapHTML;
    };
    Scene.prototype.actionOnMap = function () {
      console.log("Show action on Map in one time");
    };
    // ------------------------------------------

    // Прототип работы с картой
    function Map (setting) {
        this.mapData = [];
        this.mapObjects = setting.mapObjects;
        this.objectsOnMap = [];

        this.row = setting.mapSize.row || 0;
        this.col = setting.mapSize.col || 0;
    }
    /**
     * Построим пустую карту на основе начальных Row/Col
     */
    Map.prototype.init = function () {
        while(this.mapData.push([]) < this.row);
    };
    /**
     * Генерация карты
     */
    Map.prototype.generate = function () {
        // object ID
        var objID = 0;

        for(var objectName in this.mapObjects ) {
            var isStaticObject = false;

            var objMin = this.mapObjects[objectName].min;
            var objMax = this.mapObjects[objectName].max;

            // Если объект являеться статикой,
            // то постаремся дать по максимуму значения min/max
            // для полного заполнения игрового поля
            if (objMin === null && objMax === null) {
                objMin = (this.row + this.col) * 2;
                objMax = (this.row + this.col) * 100;

                isStaticObject = true;
            }

            // Получим кол-во объектов на карте
            var objCountOnMap = tools.randomInteger(objMin, objMax);

            // console.log(objCountOnMap);

            // Пройдемся по этому количевству
            for (var i = 0; i < objCountOnMap; i++) {

                var mapRowCol = this.getRandomRowColCoord();

                // console.log('mapRowColNormal: ', mapRowCol);

                if (this.mapData[mapRowCol.row][mapRowCol.col] == undefined) {
                    var object = new ObjectOnMap(objectName, objID, mapRowCol.row, mapRowCol.col);

                    this.mapData[mapRowCol.row][mapRowCol.col] = object;

                    if (!isStaticObject) {
                        this.objectsOnMap.push(object);
                    }
                } else {
                    var objectSetting = {
                        objID: objID,
                        objectName: objectName,
                        isStaticObject: isStaticObject
                    };
                    this.tryNewGenerate(objectSetting, objCountOnMap);
                }
            }

            objID++;
        }
    };
    /**
     * Повторная генерация, в случии занятого места в массиве
     * @param objectName
     * @param objID
     * @param count
     * @returns {boolean}
     */
    Map.prototype.tryNewGenerate = function (objectSetting, count) {

        if(count <= 0) return false;

        // Пройдемся по этому количевству
        for (var i = 0; i < count; i++) {

            // создадим координаты для проставления
            var mapRowCol = this.getRandomRowColCoord();

            // console.log('mapRowColRecursive: ', mapRowCol);

            if (this.mapData[mapRowCol.row][mapRowCol.col] == undefined) {
                var object = new ObjectOnMap(objectSetting.objectName, objectSetting.objID, mapRowCol.row, mapRowCol.col);

                this.mapData[mapRowCol.row][mapRowCol.col] = object;

                if (!objectSetting.isStaticObject) {
                    this.objectsOnMap.push(object);
                }

                return false;
            } else {
                var objectSetting = {
                    objID: objectSetting.objID,
                    objectName: objectSetting.objectName,
                    isStaticObject: objectSetting.isStaticObject
                };
                return this.tryNewGenerate(objectSetting, count - 1);
            }
        }
    };
    /**
     * Получим произвольные координаты на основе кол-во строк и колонок
     * @param setting
     * @returns {{row: *, col: *}}
     */
    Map.prototype.getRandomRowColCoord = function () {
        var countRow = this.row,
            countCol = this.col;

        return {
            row: tools.randomInteger(0, countRow),
            col: tools.randomInteger(0, countCol)
        }
    };
    // ------------------------------------------

    // Основной Прототип объекта на карте
    function ObjectOnMap(className, id, objPositionRow, objPositionCol) {
        this.id = id;
        this.className = className;
        this.objectPositionRow = objPositionRow || 0;
        this.objectPositionCol = objPositionCol || 0;

        // console.log(this);
    }
    /**
     * Вывод HTML объекта
     * @returns {string}
     */
    ObjectOnMap.prototype.show = function () {
        return "<div class='"+this.className+"'></div>";
    };
    /**
     * Разные действия объекта
     */
    ObjectOnMap.prototype.action = function () {
        console.log('prototype action: ' + this.className);
    };
    // ------------------------------------------

    // Вспомогательные функции для игры
    var tools = {
        randomInteger: function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    };
    // ------------------------------------------

    // ------------
    return {
        init: function ($gameContainer, setting) {
            var game = new Game($gameContainer, setting);

            game.run();
        }
    }
})();