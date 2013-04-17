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
    	alert('sample index afterrender');
    },
    onentercomplete: function() {
    	alert('sample index entercomplete');
    }
});