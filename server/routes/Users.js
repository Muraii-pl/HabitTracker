const express = require("express")
const router = express.Router()
const {Users} = require("../db/models")
const bcrypt = require("bcrypt")

const {sign} = require('jsonwebtoken')
const {validateToken} = require("../middlewares/AuthMiddleware");

const Token = process.env.VALIDTOKEN


router.post('/register', async (req, res) => {
    const {username, password, name, email} = req.body

    const user_username = await Users.findOne({
        where:{
            username: username
        }
    })
    if(user_username){
        return res.json({
            message: "User Exist",
            error: "User Exist"
        })
    } else {
        const user_email = await Users.findOne({
            where:{
                email:email
            }
        })
        if(user_email){
            return res.json({
                message: "Email Busy",
                error: "Email Busy"
            })
        }
    }
    bcrypt.hash(password, 10).then(async (hash) => {
        await Users.create({
            username: username,
            password: hash,
            name: name,
            email: email
        }).then(()=>{
            res.status(201).json("Succes")
        })
    })
})

router.post('/login', async (req, res) => {
    const {username, password} = req.body
    const user = await Users.findOne({
        where: {
            username: username
        }
    })
    if (!user) {
        return res.json({
            message: "User Doesn't Exist",
            error: "User Doesn't Exist"
        })
    }

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            return res.json({
                message: "Wrong Username and Password",
                error: "Wrong Username and Password"
            })
        }

        const accessToken = sign({
            id:user.id,
            username: user.username,
            name: user.name
        }, Token,{
            expiresIn: process.env.EXPIRES_IN
        })
        res.status(200).json({
            token: accessToken,
            username: user.username,
            name: user.name
        })
    })

})

router.get('/auth',validateToken,(req,res)=>{
    res.json(req.user)
})

module.exports = router