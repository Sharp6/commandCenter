define(['jquery'], function($) {
	var loadProjects = function() {
		return $.getJSON('/api/projects').promise();
	};

	return {
		loadProjects: loadProjects
	}
});