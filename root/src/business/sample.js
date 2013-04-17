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