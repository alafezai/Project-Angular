const express = require('express');
const Post = require('../models/Post');


const router = express.Router();
const postController = require('../controller/help');
/**
 * 
 * 
 * GET ALL POSTES
 */
router.get('/',postController.all);



 /**
  * 
  * 
  * FIND POSTE BY ID
  */
 router.get('/:id',postController.get);


/**
  * 
  * 
  * SAVE NEW POST
  */
 router.post('/',postController.create);


 /***
  * UPDATE POST BY ID
  */

  router.put('/:id',postController.update);

 /***
  * DELETE A COURSE BY ID
  */

  router.delete('/:id',postController.delete);


module.exports = router;