define(["knockout"], function(ko) {
	var projectModel = function(data) {
		var self = this;

		self.name = ko.observable(data.name || '');
		self.deploys = ko.observableArray();

		self.alt = ko.observable('test');
		self.content = ko.observable('Content');
		self.src = '';

		if(data.deploys) {
			data.deploys.forEach(function(deploy) {
				self.deploys().push({
					type: ko.observable(deploy.type),
					url: ko.observable(deploy.url),
					port: ko.observable(deploy.port)
				});
			});
		}
	}

	return projectModel;
});