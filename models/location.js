const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    location: {
        type: String
    }
},{
    timestamps: true
})

module.exports = new mongoose.model("location", locationSchema)