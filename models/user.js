const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        minlength:5,
        maxlength:255,
        required:true
    },
    email:{
        type:String,
        minlength:5,
        maxlength:255,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:5,
        maxlength:1024,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});


const User= mongoose.model('User',userSchema);

module.exports = User;