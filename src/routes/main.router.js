const express = require('express');
const mainRouter = express.Router();
const authRouter = require('./auth/auth.router')
const postRouter = require('./post/post.router')
mainRouter.get('/', (req, res) => {
    res.render('index');
});

mainRouter.get('/about', (req, res) => {
    res.render('about');
});

mainRouter.get('/contact', (req, res) => {
    res.render('contact');
});

mainRouter.use('/auth', authRouter);
mainRouter.use('/post', postRouter);

module.exports = mainRouter;