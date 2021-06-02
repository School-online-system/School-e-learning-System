const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// add classes
var calasses = ['الاول','الثاني','الثالث','الرابع','الخامس','السادس','السابع','الثامن','التاسع','العاشر','الحادي عشر','الثاني عشر']
const Classschema = Schema({
    room :{
        type: String,
        required: true
    },
    branch :{
        type: String,
    },
    grade :{
        type: String,
        required: true
    },
    stage : {
        type: String,
    }
}, { timestamps: true })
const Class_model = mongoose.model('Class_model', Classschema);
exports.Class_model = Class_model
exports.Classschema = Classschema;
exports.calasses =calasses
