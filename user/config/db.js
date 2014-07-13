var mongoose = require('mongoose');
	
// EXPORTS
exports.connect = function () {
	mongoose.connect('mongodb://localhost/danahallnode');
};