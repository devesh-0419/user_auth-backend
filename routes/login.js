const express = require('express');
const  User= require('../models/user');
const  UserLogs= require('../models/loginLogs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const router=express();


router.post('/',async (req,res)=>{
     try {
          let user = await User.findOne({email:req.body.email});
           console.log('user', user)
     if(!user) return res.status(400).send('Invalid UserID or Password');
           
     const validPassword= await bcrypt.compare(req.body.password,user.password);
     if(!validPassword) return res.status(400).send('Invalid UserID or Password');
     

          
         
          const token = user.generateAuthToken();
           res.header('x-auth-token',token).send('login sucessfull (^_^)');

           let userLog = new UserLogs({
               email:req.body.email
          });
          await userLog.save();
          console.log('userLog', userLog);
     } catch (error) {
          console.error("error while login: ",error);
     }
     
});

module.exports=router;