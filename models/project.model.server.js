var Project = function(mongoose) {
	var Schema = mongoose.Schema;

	var deploySchema = new Schema({
		type: String,
		url: String,
		port: Number
	});

	var projectSchema = new Schema({
		name: String,
		deploy: [ deploySchema ]
	});

	var model = mongoose.model('Project', projectSchema);
	return model;
}

module.exports = Project;