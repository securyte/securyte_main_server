require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require("morgan")
const helmet = require("helmet")
const compression = require("compression")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(cookieParser())
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// Socket
const http = require('http').createServer(app)
const io = require('socket.io')(http)

// routes
app.get('/', (req, res) => {
    res.json({
        msg: "Hello world!, Securite is Born, amen"
    })
})
app.use('/api', require('./api/auth'))



// Mongo DB connection
require('./config/config')

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.port || 6000;
app.listen(PORT, () => {
    console.log("Server is lstening on port", PORT)
})