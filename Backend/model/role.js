const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const role = Schema({

    name: {
        type: String,
        required: true
    },
    permissions_id: {
        type: ObjectID,
        required: true
    },

})
const role_model = mongoose.model('role_model', role);
module.exports = role_model;
