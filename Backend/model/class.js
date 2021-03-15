const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class = Schema({
    
    className :{
        type: String,
        required: true
    },
    classNumber :{
        type: Number,
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
const Class_model = mongoose.model('Class_model', Class);
module.exports = Class_model;