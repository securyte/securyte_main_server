const router = require("express").Router()
const Users = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('../config/generateToken')

router.post("/register", async (req, res) => {
    try {
        const { name, account, password } = req.body

        const user = await Users.findOne({account})
        if(user) return res.status(400).json({msg: "Account registered!"})

        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = { name, account, password: passwordHash }

        const active_token = generateActiveToken({newUser})

        res.json({
            status: "Success",
            data: newUser,
            msg: "Registration successful, please validate your account!",
            active_token
        })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})
router.post("/activate", async (req, res) => {
    try {
        const active_token = req.body;

        
        
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})
router.post("/login", async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})
router.get("/refresh_token", async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})
router.post("/forget_password", async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})
router.post("/reset_password", async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})
router.post("/google_auth", async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

router.post("/facebook_auth", async (req, res) => {
    try {

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})


module.exports = router