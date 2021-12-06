const mongoose = require('mongoose')

const newSchema = new mongoose.schema({
    caption: {
        type: String,
        required: true
    },
    news: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'comment'
    }],
    media: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = new mongoose.model("news", newSchema)