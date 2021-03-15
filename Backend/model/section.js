const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Section = Schema({
    
    className :{
        type: String,
        required: true
    },
    teacherId :{
        type: ObjectID,
        required: true
    },
    classId :{
        type: ObjectID,
        required: true
    },
    created_Date :{
        type: Date,
        required: true
    },
})
const Section_model = mongoose.model('Section_model', Section);
module.exports = Section_model;