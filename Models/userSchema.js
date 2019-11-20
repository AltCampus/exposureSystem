//Require Mongose

const mongoose = require("mongoose");

//Extracting Schema

const Schema = mongoose.Schema;

//Creating user schema

const userSchema = new Schema({ 
    username: {
        type : String,
        required : true
    }, 
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }, 
    isInCampus: Boolean, 
    isActive: Boolean, 
    isAdmin: false 
}, { 
    timestamp: true 
});

//Creating User Model

const User = mongoose.model("User" , userSchema);


//Exporting User Model

module.exports = User;