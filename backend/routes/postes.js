const express = require('express');


const router = express.Router();

const poste = require('./../models/Post');
//GET ALL POSTES
router.get('/',(req,res)=>{
    poste.find()
    .then(postes=>res.status(200).json(postes))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
     // res.json(posts);
     // res.send('hello word');
 });


module.exports = router;