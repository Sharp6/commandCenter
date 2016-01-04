var projectRoutes = function(projectCtrl) {

	var express = require('express');
	var router = express.Router();

	/* GET home page. */
	router.get('/', function(req, res) {
	  res.render('index', { title: 'Express' });
	});

	/* API */
	router.route('/api/projects')
		.get(function(req,res) {
			return projectCtrl.getProjects(req,res);
		});

	module.exports = router;

	return router;
}

module.exports = projectRoutes;