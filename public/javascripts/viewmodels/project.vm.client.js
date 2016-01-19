define(['knockout', 'da/project.da.client', 'models/project.model.client'], function(ko,projectDA,Project) {
	var vm = function() {
		var self = this;

		self.projects = ko.observableArray();
		self.currentProject = ko.observable();

		self.loadProjects = function() {
			return projectDA.loadProjects()
				.then(function(projectData) {
					projectData.forEach(function(project) {
						self.projects.push(new Project(project));
					});
				});
		}

		self.showDetails = function(selectedProject) {
			console.log("Boo");
			self.currentProject(selectedProject);
		}

		self.init = function() {
			self.loadProjects()
				.then(function() {
					self.projects.sort(function(a,b) {
						return a.name().toLowerCase() == b.name().toLowerCase() ? 0 : (a.name().toLowerCase() < b.name().toLowerCase() ? -1 : 1);
					});
				});
		}	
	}

	return vm;
	
});
