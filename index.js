const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');
const app=express();


mongoose.connect('mongodb://localhost:27017/Authentication')  // loacal database
        .then(()=> console.log('MongoDB connected...'))
        .catch(err => console.error('Database error: ', err.message));  
        
        
app.use(express.json());
app.use('/api/users',users);









const port = process.env.PORT||5000;
app.listen(port,()=> console.log(`Listening on ${port}...`));