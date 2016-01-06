define(["knockout"], function(ko) {
	var projectModel = function(data) {
		var self = this;

		self.name = ko.observable(data.name || '');
		self.deploys = ko.observableArray();
		self.languages = ko.observableArray();
		self.frameworks = ko.observableArray();
		self.hardware = ko.observableArray();

		self.alt = ko.observable(data.name || 'alt');
		self.content = ko.observable(data.name || '');
		self.src = '/img/default.png';

		if(data.deploy) {
			data.deploy.forEach(function(deploy) {
				self.deploys.push({
					type: ko.observable(deploy.type),
					url: ko.observable(deploy.url),
					port: ko.observable(deploy.port)
				});
			});
		}

		if(data.languages) {
			data.languages.forEach(function(language) {
				self.languages.push(language);
			});
		}

		if(data.frameworks) {
			data.frameworks.forEach(function(framework) {
				self.frameworks.push(framework);
			});
		}

		if(data.hardware) {
			data.hardware.forEach(function(piece) {
				self.hardware.push(piece);
			});
		}


	}

	return projectModel;
});