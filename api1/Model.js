const mongoose = require('mongoose');
const userSchema  = mongoose.Schema({
    name:String,
    password:String
});

const Model = mongoose.model('Model',userSchema );

module.exports = Model;