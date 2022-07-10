const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config= require('config');

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

userSchema.methods.generateAuthToken=function () {

    const token=jwt.sign({_id:this._id,isAdmin:this.isAdmin},config.get('privateKey'));

    return token;
    
}

const User= mongoose.model('User',userSchema);

module.exports = User;