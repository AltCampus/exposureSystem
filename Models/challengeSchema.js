//Require Mongose

const mongoose = require("mongoose");

//Extracting Schema

const Schema = mongoose.Schema;

//Creating content schema

var challengeSchema = new Schema({ 
    userId: String, 
    contentId: String, 
    hasSubmitted: Boolean, 
    Submission: String, 
    pointsAwarded: String, 
    Type: { 
        type: "string", 
        enum: [
            "individual", 
            "pair", 
            "group"
        ]
    }, 
    Pair: [{ 
        type: app.mongoose.Schema.ObjectId, 
        ref: 'userSchema'
    }], 
    Group: [{ 
        type: app.mongoose.Schema.ObjectId, 
        ref: 'userSchema'
    }], 
    hasOptedOut: boolean, 
    Deadline: { 
        type: Date, 
        default: Date.now 
    } }, { 
        timestamp: true 
    });

//Creating challenge Model

const Challenge = mongoose.model("Challenge" , challengeSchema);


//Exporting challenge Model

module.exports = Challenge;
