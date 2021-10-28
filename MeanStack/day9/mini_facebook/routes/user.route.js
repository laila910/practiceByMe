const router = require('express').Router()
const User = require('../models/user.model')
const userController = require('../controller/user.controller')
const sendEmaily = require('../helper/sendEmail.helper')


router.post('/register', async(req, res) => {
    try {
        const userData = new User(req.body)
        await userData.save()
        sendEmaily(userData.email, 'welcome to our site ')
        res.status(200).send({
            apiStatus: true,
            data: userData,
            message: "register sucess :)"
        })
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "user not saved"
        })
    }
})
router.post('/addMobileNo/:id', async(req, res) => {
    try {
        let userData = await User.findById(req.params.id)
        mobileNo = req.body
        userData.mobileNo.push(mobileNo)
        await userData.save()
        res.status(200).send({
            apiStatus: true,
            data: userData,
            message: "mobile number is added"
        })
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "user number not added :("
        })
    }
})
router.post('/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.status(200).send({
            apiStatus: true,
            data: user,
            message: "login sucess:)"
        })
    } catch (e) {
        res.status(500).send({
            apiStatus: false,
            data: e.message,
            message: "login invalid"
        })
    }

})
module.exports = router