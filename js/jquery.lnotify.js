/**
 * Notify Plugin
 * -----------------------
 * User: o.l [Oganesov Levon]
 * mail: levon.oganesov@mail.ru
 * Date: 23.04.18
 * Version: 1.0.0
 * -----------------------
 */
/**
 * Init Method:
 *        init: function ();
 * Example:
 *        $('body').lNotify();
 * -----------------------
 */
/**
 * Add Method:
 *        add: (text, type);
 *            text - Message text,
 *            type:
 *                - success
 *                - error
 * Example:
 *        $('body').lNotify('add', 'Успешно сохранили', 'success');
 * -----------------------
 */
/*
* Style:
* .b-lNotify
* .b-lNotify_message
* .b-lNotify_message_success
* .b-lNotify_message_error
* */

(function($){
    // Private methods
    function _radnomId () {
        return Math.random().toString().substr(2);
    }

    var defaults = {
            interval: 4000,
            animation: 'none',
            autoHide: true,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        options;

    // Public methods
    var methods = {
        init: function (param) {

            // актуальные настройки, будут индивидуальными при каждом запуске
            options = $.extend({}, defaults, param);

            // Добавим основной блок в DOM
            $('body').append('<div class="b-lNotify"></div>');
        },

        // Добавим сообщение
        /**
         *
         * @param text
         * @param type
         */
        add: function (text, type) {

            var $blockInfo = $('.b-lNotify');
            var msgId = _radnomId();

            var $msg =  $('<div class="b-lNotify_message b-lNotify_message_' + type + '" id="' + msgId + '">' +
                '<div class="b-lNotify_message_text" >' + text + '</div> ' +
                '<a href="javascript:void(0);" class="b-lNotify_message_close">X</a>' +
                '</div>');

            $blockInfo.append($msg.fadeIn(300));

            methods.handleCloseMsgOn(msgId);

            if (options.autoHide) {
                var interval = setInterval(function () {
                    $msg.fadeOut(700, function () {
                        $msg.remove();
                    });

                    clearInterval(interval);
                }, options.interval);
            }
        },
        handleCloseMsgOn: function (msgId) {
            var self = this;
            var $blockInfo = $('.b-lNotify');
            var $addedMsg = $blockInfo.find('#' + msgId);
            var btnClose = $addedMsg.find('.b-lNotify_message_close');

            btnClose.on('click.handleClose' + msgId, function (e) {
                self.closeMsg(e, msgId);
            });
        },
        handleCloseMsgOff: function (e, msgId) {
            $(e.target).off('click.handleClose' + msgId);
        },

        closeMsg: function (e, msgId) {
            $(e.target).parent('#'+msgId).fadeOut(700, function () {
                $(e.target).parent('#'+msgId).remove();
            });

            this.handleCloseMsgOff(e, msgId);
        }
    };

    // Взял из примера
    $.lNotify = function(method){
        // немного магии
        if ( methods[method] ) {
            // если запрашиваемый метод существует, мы его вызываем
            // все параметры, кроме имени метода прийдут в метод
            // this так же перекочует в метод
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            // если первым параметром идет объект, либо совсем пусто
            // выполняем метод init
            return methods.init.apply( this, arguments );
        } else {
            console.log( 'Метод "' +  method + '" не найден в плагине jQuery.lNotify' );
            // если ничего не получилось
            $.error( 'Метод "' +  method + '" не найден в плагине jQuery.lNotify' );
        }
    };
})(jQuery);
