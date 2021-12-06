const router = require("express").Router()
const News = require('../models/news')
f
router.post('/news', async (req, res) => {
    try {
        const {caption, news, media, location} = req.body

        const new_news =  new News({
            caption, news, media, location, user: req.user._id
        })

        await new_news.save()

        res.json({
            msg: 'created post',
            new_news: {
                ...new_news._doc,
                user: req.user
            }
        })

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})


router.get('/news', async (req, res) => {
    try {
        const {caption, news, media, location} = req.body

        const new_news =  new News({
            caption, news, media, location, user: req.user._id
        })

        await new_news.save()
x
        res.json({
            msg: 'created post',
            new_news: {
                ...new_news._doc,
                user: req.user
            }
        })

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})