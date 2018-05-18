import constant from './constant';

/**
 * LOG
 */
export default {
    /**
     * --- simple text message
     * @param msg
     */
    show (msg) {
        msg != undefined ? console.log("*|MSG-->", msg) : console.log('*|MSG--> Где-то пустой вывод Log.show();');
    },

    /**
     * --- DEBUG
     * FORMAT: [{text:object},{text:object}];
     * @param objects
     * @param LOCAL_DEBUG
     */
    showDebug (objects = null, LOCAL_DEBUG = false) {
        if (objects !== null) {
            if (constant.GLOBAL_DEBUG) {
                this.buildDebugString(objects);
            } else {
                if (LOCAL_DEBUG) {
                    this.buildDebugString(objects);
                }
            }
        } else {
            console.log('*|MSG--> Где-то пустой вывод Log.showDebug();');
        }
    },
    buildDebugString (objects) {
        for (let i = 0; i <= objects.length; i++) {
            for (let object in objects[i]) {
                console.log("!|DBG-->", object, objects[i][object]);
            }
        }
    },

    // --- NOTIFY
    initNotify() {
        $.lNotify({
            animation: 'slide',
            position: 'bottomRight'
        });
    },
    showNotify (text, status) {
        $.lNotify('add', text, status);
    }
}