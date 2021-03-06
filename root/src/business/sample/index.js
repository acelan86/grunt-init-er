(function (window, er, {%= name %}, undefined) {
    "use strict";

    {%= name %}.sampleIndexModel = new er.Model({
        LOADER_LIST: ["remotedata", "staticdata"],
        QUERY_MAP: {},
        remotedata: new er.Model.Loader(function() {
            // this.stop();
            // this.start();
        }),
        staticdata: new er.Model.Loader(function () {

        })
    });
    {%= name %}.sampleIndexAction = new er.Action({
        model: {%= name %}.sampleIndexModel,
        STATE_MAP: {
        },
        view: new er.View({
            template: 'sampleindextpl',
            UI_PROP: {
            }
        }),
        onafterrender : function () {
            window.alert('sample index afterrender');
        },
        onentercomplete: function() {
            window.alert('sample index entercomplete');
        }
    });
})(window, window.er, window.{%= name %});