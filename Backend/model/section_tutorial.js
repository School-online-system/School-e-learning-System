const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const teacher =require('./employee').employeeschema
const section = require('./section').Sectionschema

const Schema = mongoose.Schema;

const Section_tutorial = Schema({
    
    material :{
        type: String,
        required: true
    },
    teacherId :{
        type: teacher,
        required: true
    },
    sectionId :{
        type: section,
        required: true
    },
    created_Date :{
        type: Date,
        required: true
    },
})
const Section_tutorial_model = mongoose.model('Section_tutorial_model', Section_tutorial);
exports.Section_tutorial_model = Section_tutorial_model
exports.Section_tutorial = Section_tutorial;
