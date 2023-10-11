const mongoose = require('mongoose');

const postSchema = new mongoose.Schema( {
    title: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the user model
    },
});

module.exports = Post = mongoose.model('Post', postSchema)