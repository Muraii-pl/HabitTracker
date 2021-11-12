const express = require('express')
const router = express.Router()

const {Tracker, Habits} = require('../db/models')

const {validateToken} = require("../middlewares/AuthMiddleware");

router.post('/create',validateToken,async (req,res)=>{

})



module.exports = router