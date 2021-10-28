const mongoose = require('mongoose')
const validator = require('validator')

const postSchema = new mongoose.Schema({
    content: {
        type: String
    },
    type: {
        type: String,
        enum: ['image', 'txt', 'video']

    },
    user: {

    },
    audience: {
        type: String,
        enum: ['public', 'onlyMe', 'custom']

    },
    comments: [{
        user: {

        },
        details: {
            type: String

        }
    }],
    likes: [{
        user: {

        }
    }]
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post