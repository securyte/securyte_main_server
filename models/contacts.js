const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone_number: {
        type: String
    }
},{
    timestamps: true
})

module.exports = new mongoose.model("user", contactSchema)