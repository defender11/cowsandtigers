// AUDIO IN GAME
export default class GameSounds {
    constructor(file) {
        this.sound = new Audio(file);   
    }

    play () {
        this.sound.play();
    };

    // Функция stop для Audio:
    stop () {
        this.sound.pause();
        this.sound.currentTime = 0.0;
    };
}
// ------------------------------------------