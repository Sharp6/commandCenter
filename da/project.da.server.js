var projectDA = function(Project) {
	var getProjects = function() {
		return new Promise(function(resolve,reject) {
			Project.find().exec(function(err,results) {
				if(err) {
					reject(err);
				} else {
					resolve(results);
				}
			});
		});
	}

	return {
		getProjects: getProjects
	}
}

module.exports = projectDA;