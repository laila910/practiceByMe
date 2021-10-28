const router = require('express').Router()
const Post = require('../models/post.model')
const postController = require('../controller/post.controller')


router.get('', (req, res) => {
    res.status(200).send('test Post')
})
module.exports = router