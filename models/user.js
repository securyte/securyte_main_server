const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone_number: {
        type: String
    },
    proirity_contacts: {
        type: Array,
        default: []
    },
    primaryLocation: {
        type: Array
    }
},{
    timestamps: true
})

module.exports = new mongoose.model("user", userSchema)