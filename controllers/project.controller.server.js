var projectCtrl = function(projectDA) {
	var getProjects = function(req,res) {
		projectDA.getProjects()
			.then(function(projects) {
				res.json(projects);
			})
			.catch(function(err) {
				res.status(500).send(err);
			});
	}

	return {
		getProjects: getProjects
	}
}

module.exports = projectCtrl;