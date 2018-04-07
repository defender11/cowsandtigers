// Вспомогательные функции для игры
var tools = {
    /**
     * Возврощяет случайное число в диапазоне Min/Max
     * @param min
     * @param max
     * @returns {*}
     */
    randomInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};
// ------------------------------------------