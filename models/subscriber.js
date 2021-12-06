const mongoose = require('mongoose')

const subscriberSchema = new mongoose.schema({


}, {
    timestamps: true
})

module.exports = new mongoose.model("subscribers", subscriberSchema)