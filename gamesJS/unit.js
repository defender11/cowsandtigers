import Entity from './entity';
import GrassAlgorithm from './algorithm/grassAlgorithm';
import CowsAlgorithm from './algorithm/cowsAlgorithm';
import TigersAlgorithm from './algorithm/tigersAlgorithm';
import GroundAlgorithm from './algorithm/groundAlgorithm';
import GameSounds from './sound';

/**
 * Основной Прототип объекта на карте
 * @param className
 * @param id
 * @param objPositionRow
 * @param objPositionCol
 * @constructor
 */
export default class Unit extends Entity {
    constructor(param) {
        super(param);

        this.foodType = this.getFoodType();
        this.health = 100;
        this.enemy = (param.className == 'cows' ? 'tigers' : null);

        this.foodInformation = {
            isEat: false,
            positionRow: null,
            positionCol: null,
            indexObject: null
        };

        this.soundEat = new GameSounds("audio/eat_" + this.className + ".mp3");

        // Выберим алгоритм поведения для объекта
        this.algoritms = this.selectAlgorithm(param.id);
    }

    /**
     * Вывод HTML объекта
     * @returns {string}
     */
    show() {
        let unitHealth = "";

        if (this.className == 'cows' || this.className == 'tigers') {
            let classHealthColor = this.getClassHealthColor(this.health);

            unitHealth += "<div class='b-unit__health'><div class='b-healt__indicator " + classHealthColor + "' style='width: " + this.health + "%;'></div></div>";
        }

        return "<div class='b-unit " + this.className + "'>" + unitHealth + "</div>";
    };


    /**
     * Получим цвет(класс) жизни unit
     * @param value
     * @returns {string}
     */
    getClassHealthColor(value) {

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

    };


    /**
     * Разные действия объекта
     */
    action(map, indexObject) {
        this.algoritms.act(this, map, indexObject);
    };


    /**
     * Получим цель ради которой живет Unit :)
     * @returns {*}
     */
    getFoodType() {
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
    };


    /**
     * Вернет для объекта его алгоритм поведения в игре
     * @param id
     * @returns {*}
     */
    selectAlgorithm(id) {
        /**
         * 0 - grass
         * 1 - cows
         * 2 - tigers
         * 3 - ground
         * 4 - death
         */

        switch (parseInt(id)) {

            case 0:
                return new GrassAlgorithm();
                break;
            case 1:
                return new CowsAlgorithm();
                break;
            case 2:
                return new TigersAlgorithm();
                break;
            case 3:
                return new GroundAlgorithm();
                break;
        }
    };


// Съеден
    isEaten() {
        return this.foodInformation.isEat;
    };

// Съеден
    eaten(unit, foodIndex) {
        this.foodInformation.isEat = true;
        this.foodInformation.positionRow = unit.positionRow;
        this.foodInformation.positionCol = unit.positionCol;
        this.foodInformation.indexObject = foodIndex;
        this.foodInformation.className = unit.className;
        this.foodInformation.id = unit.id;
    };

// RESET Съеден
    resetEaten() {
        return this.foodInformation.isEat = false;
        this.foodInformation.positionRow = null;
        this.foodInformation.positionCol = null;
        this.foodInformation.indexObject = null;
    };

    addHealth(value) {
        this.health += parseInt(value);
    };

    subHealth(value) {
        this.health -= parseInt(value);
    };

}

// ------------------------------------------