const express = require('express');
const mongoose = require('mongoose');


// Connect DB

mongoose.connect('mongodb://localhost:27017/helpg',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

const poste = require('./models/Post');

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/api/postes',(req,res)=>{
   poste.find()
   .then(postes=>res.status(200).json(postes))
   .catch(err=>res.status(400).json({error : 'error : '+err.message}));
    // res.json(posts);
    // res.send('hello word');
})

module.exports = app;
