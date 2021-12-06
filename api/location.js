const User = require("../models/user")
const Locations = require("../models/location")

router.post("/get_location", async (req, res) => {
    try{

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

