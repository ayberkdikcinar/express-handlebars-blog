const express = require('express');
const postRouter = express.Router();
const postController = require('./post.controller')

//postRouter.get('/blog', authController.renderSignIn);
postRouter.get('/add', postController.renderAddPage);
postRouter.post('/add', postController.add);
postRouter.get('/blog', postController.retrieveActives);
postRouter.get('/blog-single', postController.renderBlogSingle);
module.exports = postRouter;