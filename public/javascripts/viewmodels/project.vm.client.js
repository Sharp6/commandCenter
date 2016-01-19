define(['knockout', 'da/project.da.client', 'models/project.model.client'], function(ko,projectDA,Project) {
	var vm = function() {
		var self = this;

		self.projects = ko.observableArray();
		self.currentProject = ko.observable();

		self.loadProjects = function() {
			projectDA.loadProjects()
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
			self.loadProjects();
			self.projects(self.projects.sort(function(a,b) {
				return a.name == b.name ? 0 : (a.name < b.name ? -1 : 1);
			}));
		}
	}

	return vm;
});