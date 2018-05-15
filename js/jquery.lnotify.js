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
 *        $.lNotify();
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
 *        $.lNotify('add', 'Успешно сохранили', 'success');
 * -----------------------
 */
/**
 * Position default: topLeft,
 * Position available - [ topLeft, topRight, bottomRight, bottomLeft ]
 *
 * Animation default: fade
 * Animation available: [ fade, slide, fromTop, fromBottom ]
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
            animation: 'fade',
            animationTime: 700,
            autoHide: true,
            position: 'topRight'
        },
        options;

    var notify = {
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
            this.animationEnd($(e.target).parent('#'+msgId));

            this.handleCloseMsgOff(e, msgId);
        },

        animationStart: function($msg) {
            var $blockInfo = $('.b-lNotify');

            (options.animation === 'fade') && this.animationFadeShow($blockInfo, $msg);
            (options.animation === 'slide') && this.animationSlideShow($blockInfo, $msg);
        },
        animationEnd: function($msg) {
            (options.animation === 'fade') && this.animationFadeHide($msg);
            (options.animation === 'slide') && this.animationSlideHide($msg);
        },

        // Animation Logic
        animationFadeShow: function ($blockInfo, $msg) {
            $blockInfo.append($msg);
            $msg.fadeIn(options.animationTime);
        },
        animationFadeHide: function ($msg) {
            $msg.fadeOut(options.animationTime, function () {
                $msg.remove();
            });
        },

        animationSlideShow: function ($blockInfo, $msg) {
            $blockInfo.append($msg);

            var msgOffset = -($msg.width() + parseInt(200));

            if (options.position === 'topLeft' || options.position === 'bottomLeft') {

                $msg.css({
                    left: msgOffset
                });

                $msg.animate({
                    left: "0px",
                    opacity: 1
                }, options.animationTime);
            }

            if (options.position === 'topRight' || options.position === 'bottomRight') {

                $msg.css({
                    right: msgOffset
                });

                $msg.animate({
                    right: "0px",
                    opacity: 1
                },options.animationTime);
            }

        },
        animationSlideHide: function ($msg) {

            var msgOffset = -($msg.width() + parseInt(200));

            if (options.position === 'topLeft' || options.position === 'bottomLeft') {

                $msg.animate({
                    left: msgOffset,
                    opacity: 0
                }, options.animationTime, function () {
                    $msg.remove();
                });
            }

            if (options.position === 'topRight' || options.position === 'bottomRight') {

                $msg.animate({
                    right: msgOffset,
                    opacity: 0
                },options.animationTime, function () {
                    $msg.remove();
                });
            }

            //
        },
    };

    // Public methods
    var methods = {
        init: function (param) {

            // актуальные настройки, будут индивидуальными при каждом запуске
            options = $.extend({}, defaults, param);

            // Добавим основной блок в DOM
            $('body').append('<div class="b-lNotify b-lNotify_' + options.position + '"></div>');
        },

        // Добавим сообщение
        /**
         *
         * @param text
         * @param type
         */
        add: function (text, type) {
            var msgId = _radnomId();

            var $msg =  $('<div class="b-lNotify_message b-lNotify_message_' + type + ' b-lNotify_message_' + options.animation + '" id="' + msgId + '">' +
                '<div class="b-lNotify_message_text" >' + text + '</div> ' +
                '<a href="javascript:void(0);" class="b-lNotify_message_close">X</a>' +
                '</div>');

            notify.animationStart($msg);

            notify.handleCloseMsgOn(msgId);

            if (options.autoHide) {
                var interval = setInterval(function () {

                    notify.animationEnd($msg);

                    clearInterval(interval);
                }, options.interval);
            }
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
