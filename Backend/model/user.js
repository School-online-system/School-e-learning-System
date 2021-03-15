const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = Schema({
    
    email :{
        type: String,
        required: true
    },
    userName_ar :{
        type: String,
        required: true
    },
    userName_en :{
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    },
    role_Id :{
        type: ObjectID,
        required: true
    },
    
   
})
const user_model = mongoose.model('user_model',user);
module.exports =user_model;
