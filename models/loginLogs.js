const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config= require('config');

const userLogSchema= new mongoose.Schema({

    email:String,
    date:{type:Date,
        default:Date.now()}
});

const UserLog = mongoose.model('User_Logs',userLogSchema);

module.exports= UserLog;