const mongoose = require('mongoose');
const manager =require('./employee').employeeschema
const Schema = mongoose.Schema;

const School = Schema({
    school_Name :{
        type: String,
        required: true
    },
    city :{
        type: String,
        required: true
    },
    ministry :{
        type: String,
        required: true
    },
    managerId :{
        type: mongoose.Schema.ObjectId,
        ref: 'employee_model',
        required: true
    },
    phone_number :{
        type: Number,
        required: true
    }
}, { timestamps: true })
const Schoolmode = mongoose.model('School', School);
exports.Schoolmode = Schoolmode
exports.Schoolschema = School;
