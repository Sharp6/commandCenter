require.config({
	shim : {
		"bootstrap" : { "deps" :['jquery']  },
		"knockstrap" : { "deps": [ 'bootstrap', 'knockout' ]}
	},
	paths: {
		jquery: '/libraries/jquery.min',
		knockout: '/libraries/knockout',
		bootstrap: '/libraries/bootstrap.min',
		knockstrap: '/libraries/knockstrap.min',
		moment: '/libraries/moment.min'
	}
});

require(['jquery', 'knockout', 'bootstrap', 'knockstrap', 'viewmodels/project.vm.client'], 
function($, ko, bootstrap, knockstrap, CcVM) {
	var ccVM = new CcVM();
	ccVM.init();
	ko.applyBindings(ccVM);

	$('.carousel').carousel()
});