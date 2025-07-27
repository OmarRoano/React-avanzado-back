
const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller.js')

router.get('/',postController.getAllPost);  //endpoint = http://localhost:3000/post/

router.get('/:id',postController.getPostById);  //endpoint = http://localhost:3000/post/:id = http://localhost:3000/post/1

router.post('/',postController.createPost);

router.put('/:id',postController.updatePost);

router.delete('/:id',postController.deletePost);

module.exports = router;