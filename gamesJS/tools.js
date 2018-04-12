// Вспомогательные функции для игры
export default {
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