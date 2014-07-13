var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

// SCHEMAS
var User = new Schema({
	fullname: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true}
	});
	
// EXPORTS
module.exports.mongoose 		= mongoose;
module.exports.SchemaUser 		= User;
