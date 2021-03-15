const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const permissions = Schema({

    role_id: {
        type: ObjectID,
        required: true
    },
    edit_employees: {
        type: Boolean,
        required: true
    },
    edit_students: {
        type: Boolean,
        required: true
    },
    edit_parents: {
        type: Boolean,
        required: true
    },
    edit_levels: {
        type: Boolean,
        required: true
    },
    edit_materials: {
        type: Boolean,
        required: true
    },
})
const permissions_model = mongoose.model('permissions_model', permissions);
module.exports = permissions_model;
