// const Post = require('./../models/Post');
const poste = require('./../models/Post');

/**
 *
 *
 * GET ALL POSTES
 */
 exports.all = (req,res)=>{
    poste.find()
    .then(postes=>res.status(200).json(postes))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 };



 /**
  *
  *
  * FIND POSTE BY ID
  */
exports.get = (req,res)=>{
    poste.findOne({_id : req.params.id})
    .then(postes=>res.status(200).json(postes))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 } ;


/**
  *
  *
  * SAVE NEW POST
  */
exports.create = (req,res)=>{
     const post  = new Post({
         ...req.body
     });
    post.save()
    .then(()=>res.status(200).json("Post created !!!!!"))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 };


 /***
  * UPDATE POST BY ID
  */

  exports.update = (req,res)=>{
   Post.updateOne({_id  : req.params.id}, {...req.body, _id : req.params.id})
   .then(()=>res.status(200).json("Post update succ !! "))
   .catch(err=>res.status(400).json({error : 'error : '+err.message}));
};

 /***
  * DELETE A COURSE BY ID
  */

 exports.delete = (req,res)=>{
    Post.deleteOne({_id  : req.params.id})
    .then(()=>res.status(200).json("Post is deleted !! "))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 };
