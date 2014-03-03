(function (window, er, {%= name %}, undefined) {
    "use strict";
    /**
     * sample module
     */

    {%= name %}.sample = new er.Module({
        config:{
            action: [
                {
                    path: "/sample",
                    action: "{%= name %}.sampleIndexAction"
                },
                {
                    path: "/sample/index",
                    action: "{%= name %}.sampleIndexAction"
                }
            ]
        }
    });
})(window, window.er, window.{%= name %});