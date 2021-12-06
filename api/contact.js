const User = require("../models/user")
const Locations = require("../models/location")
const Contacts = require("../models/contacts")

router.post("/contacts", async (req, res) => {
    try{
        const { contacts } = req.body

    } catch(err){
        return res.status(500).json({msg: err.message})
    }
})

router.get("/contacts", async (req, res) => {
    try{
        const contacts = await Contacts.findOne
    } catch(err){
        return res.status(500).json({msg: err.message})
    }
})

router.post("/priority_list", async (req, res) => {
    try{
        
    } catch(err){
        return res.status(500).json({msg: err.message})
    }
})

router.get("/priority_list", async (req, res) => {
    try{

    } catch(err){
        return res.status(500).json({msg: err.message})
    }
})