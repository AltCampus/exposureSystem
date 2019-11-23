//Require Mongose

const mongoose = require("mongoose");

//Extracting Schema

const Schema = mongoose.Schema;

//Creating content schema

var challengeSchema = new Schema({ 
    userId: String, 
    contentId: String, 
    hasSubmitted: Boolean, 
    submission: String, 
    pointsAwarded: String, 
    type: { 
        type: "string", 
        enum: [
            "individual", 
            "pair", 
            "group"
        ]
    }, 
    pair: [{ 
        type: app.mongoose.Schema.ObjectId, 
        ref: 'userSchema'
    }], 
    group: [{ 
        type: app.mongoose.Schema.ObjectId, 
        ref: 'userSchema'
    }], 
    hasOptedOut: boolean, 
    deadline: { 
        type: Date, 
        default: Date.now 
    } }, { 
        timestamps: true 
    });

//Creating challenge Model

const Challenge = mongoose.model("Challenge" , challengeSchema);


//Exporting challenge Model

module.exports = Challenge;
