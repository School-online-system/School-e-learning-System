const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const classschema = require('./class').Classschema
const teacher =require('./employee').employeeschema
const subject = require('./subject').Subjectschema

const Schema = mongoose.Schema;

const Section = Schema({
    
    classID :{
        type: classschema,
        required: true
    },
    teacherID :{
        type: teacher,
        required: true
    },
    subjectID :{
        type: subject,
        required: true
    },
    sectionName :{
        type: String,
        required: true
    },
    semester :{
        type: String,
        required: true
    },
}, { timestamps: true })
const Section_model = mongoose.model('Section_model', Section);
exports.Section_model = Section_model
exports.Sectionschema = Section;
