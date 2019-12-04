//Require Mongose
const mongoose = require('mongoose');

//Extracting Schema
const Schema = mongoose.Schema;

//Creating content schema
const contentSchema = new Schema(
	{
		type: {
			type: 'string',
			enum: [ 'resource', 'challenge' ]
		},
		contentUrl: String,
		title: String,
		description: String
	},
	{
		timestamps: true
	}
);

//Creating content Model
const Content = mongoose.model('Content', contentSchema);

//Exporting content Model
module.exports = Content;
