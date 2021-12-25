const express = require('express');
const Post = require('./../models/promostion');


const router = express.Router();
const promostionController = require('./../controller/promostion');
/**
 * 
 * 
 * GET ALL PROMOSTIONS
 */
router.get('/',promostionController.all);



 /**
  * 
  * 
  * FIND PROMOSTION BY ID
  */
 router.get('/:id',promostionController.get);


/**
  * 
  * 
  * SAVE NEW PROMOSTION
  */
 router.post('/',promostionController.create);


 /***
  * UPDATE PROMOSTION BY ID
  */

  router.put('/:id',promostionController.update);

 /***
  * DELETE PROMOSTION BY ID
  */

  router.delete('/:id',promostionController.delete);


module.exports = router;