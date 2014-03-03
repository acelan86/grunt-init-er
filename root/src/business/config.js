(function (window, er, undefined) {
    "use strict";
    
    er.config.MAIN_ELEMENT_ID = 'main';
    er.config.TEMPLATE_LIST = [
        'release/{%= name %}.tpl'
    ];

    er.Action.onenter = function () {
        //这里填充当所有action进入时的动作
    };

    er.Action.onentercomplete = function () {
        //这里填当所有action渲染完成的动作
    };
})(window, window.er);