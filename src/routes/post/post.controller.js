const postModel = require('../../models/post/post.model')
const categoryModel = require('../../models/category/category.model')
const { arrangePaginationValues } = require('../../services/query')

async function add(req, res) {
    let newPost = req.body;
    const response = await postModel.add(newPost);
    if (response) {
        return res.status(201).json(response);
    }

}

async function retrieveActives(req, res) {
    const { skip, limit } = arrangePaginationValues(req.query);
    const activePosts = await postModel.retrieveActives(skip, limit);
    const categories = await categoryModel.retrieveAll();
    res.render('blog', { posts: activePosts, categories: categories })
}

async function renderAddPage(req, res) {
    const categories = await categoryModel.retrieveAll();
    res.render('addPost', { categories: categories });
}

async function renderBlogSingle(req, res) {
    const post = await postModel.findById(req.query.id);
    console.log(post);
    res.render('blog-single', { post: post });
}

module.exports = {
    add,
    renderAddPage,
    retrieveActives,
    renderBlogSingle,
}