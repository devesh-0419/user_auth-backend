const express = require('express');
const  User= require('../models/user');
const  auth= require('../middleware/auth');
const  admin= require('../middleware/admin');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const router=express();

router.get('/',[auth,admin],async (req,res)=>{
  let users = await User.find();
  res.send(users);
});




router.post('/', async (req,res)=>{
    
    try {
        
        
            let user= await User.findOne({email:req.body.email});
            if(user) return res.send('user already registered..');
        
            user =new User({
                name: req.body.name,
                email:req.body.email,
                password:req.body.password,
                isAdmin: req.body.isAdmin
            });
        
        
            const salt = await bcrypt.genSalt(10);
            user.password= await bcrypt.hash(user.password, salt);
               await user.save();
            res.send(`${user.name} register sucessfull`);


    } catch (error) {

        console.error('error while registering new user',error.message);

        res.send('something went wrong.')
    }

});

module.exports= router;