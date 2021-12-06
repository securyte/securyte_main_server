const router = require('express').Router()

const Subscribers = require('../models/subscriber')
const Newsletters = require('../models/newsletter')

router.post('/subscribe', async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})