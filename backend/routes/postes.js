const express = require('express');


const router = express.Router();

const poste = require('./../models/Post');
/**
 * 
 * 
 * GET ALL POSTES
 */
router.get('/',(req,res)=>{
    poste.find()
    .then(postes=>res.status(200).json(postes))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 });



 /**
  * 
  * 
  * FIND POSTE BY ID
  */
 router.get('/:id',(req,res)=>{
    poste.findOne({_id : req.params.id})
    .then(postes=>res.status(200).json(postes))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 });

module.exports = router;