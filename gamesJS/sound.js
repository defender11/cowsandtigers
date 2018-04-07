// AUDIO IN GAME
function GameSounds(file) {
    this.sound = new Audio(file);
}
GameSounds.prototype = new Audio();
GameSounds.constructor = GameSounds;
GameSounds.prototype.play = function () {
    this.sound.play();
};
// Функция stop для Audio:
GameSounds.prototype.stop = function() {
    this.sound.pause();
    this.sound.currentTime = 0.0;
};
// ------------------------------------------