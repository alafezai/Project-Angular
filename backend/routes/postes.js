const express = require('express');
const Post = require('./../models/Post');


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


/**
  * 
  * 
  * SAVE NEW POST
  */
 router.post('/',(req,res)=>{
     const post  = new Post({
         ...req.body
     });
    post.save()
    .then(()=>res.status(200).json("Post created !!!!!"))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 });


 /***
  * UPDATE POST BY ID
  */

  router.put('/:id',(req,res)=>{
   Post.updateOne({_id  : req.params.id}, {...req.body, _id : req.params.id})
   .then(()=>res.status(200).json("Post update succ !! "))
   .catch(err=>res.status(400).json({error : 'error : '+err.message}));
});

 /***
  * DELETE A COURSE BY ID
  */

  router.delete('/:id',(req,res)=>{
    Post.deleteOne({_id  : req.params.id})
    .then(()=>res.status(200).json("Post is deleted !! "))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 });


module.exports = router;