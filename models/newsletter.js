const mongoose = require('mongoose')

const newsletterSchema = new mongoose.schema({
    caption: {
        type: String,
        required: true
    },
   
}, {
    timestamps: true
})

module.exports = new mongoose.model("newsletter", newsletterSchema)