const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	email: String, 
	password: String,
	climbs:[{
		rating: Number,
		name: String
	}]
})

module.exports = mongoose.model('User', userSchema);