const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Level = Schema({
    
    levelName :{
        type: String,
        required: true
    },
    levelBranch :{
        type: String,
        required: true
    },
    levelId :{
        type: ObjectID,
        required: true
    },
    teacherId :{
        type: ObjectID,
        required: true
    },
   
})
const Level_model = mongoose.model('Level_model', Level);
module.exports = Level_model;