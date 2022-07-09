const express = require('express');
const  User= require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const router=express();


router.post('/',async (req,res)=>{
     let user = User.findOne({email:req.body.email});
     if(!user) return res.send('Invalid UserID or Password');

     let validPassword= await bcrypt.compare(req.body.password,user.password);
     if(!validPassword) return res.send('Invalid UserID or Password');

     
});