const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    postDate: {
        type: Date,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: 1,
    },
    user: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }

});

module.exports = model('posts', postSchema);