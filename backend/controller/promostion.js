const promostion = require('./../models/promostion');

/**
 * 
 * 
 * GET ALL POSTES
 */
 exports.all = (req,res)=>{
    promostion.find()
    .then(promostions=>res.status(200).json(promostions))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 };



 /**
  * 
  * 
  * FIND POSTE BY ID
  */
exports.get = (req,res)=>{
    promostion.findOne({_id : req.params.id})
    .then(promostions=>res.status(200).json(promostions))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 } ;


/**
  * 
  * 
  * SAVE NEW POST
  */
exports.create = (req,res)=>{
     const promostionn  = new promostion({
         ...req.body
     });
     promostionn.save()
    .then(()=>res.status(200).json("promostion created !!!!!"))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 };


 /***
  * UPDATE POST BY ID
  */

  exports.update = (req,res)=>{
    promostion.updateOne({_id  : req.params.id}, {...req.body, _id : req.params.id})
   .then(()=>res.status(200).json("promostion update succ !! "))
   .catch(err=>res.status(400).json({error : 'error : '+err.message}));
};

 /***
  * DELETE A COURSE BY ID
  */

 exports.delete = (req,res)=>{
    promostion.deleteOne({_id  : req.params.id})
    .then(()=>res.status(200).json("promostion is deleted !! "))
    .catch(err=>res.status(400).json({error : 'error : '+err.message}));
 };
