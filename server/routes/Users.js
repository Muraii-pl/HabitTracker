const express = require("express")
const router = express.Router()
const {Users} = require("../db/models")
const bcrypt = require("bcrypt")

const {sign} = require('jsonwebtoken')
const {validateToken} = require("../middlewares/AuthMiddleware");

const Token = process.env.VALIDTOKEN

router.post('/register', async (req, res) => {
    const {username, password, name, email} = req.body

    const user = await Users.findOne({
        where:{
            username: username
        }
    })
    if(user){
        return res.status(403).json({
            message: "User Exist",
            error: "User Exist"
        })
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
        return res.status(403).json({
            message: "User Doesn't Exist",
            error: "User Doesn't Exist"
        })
    }

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            return res.status(403).json({
                message: "Wrong Username and Password",
                error: "Wrong Username and Password"
            })
        }

        const accesToken = sign({
            username: user.username,
            name: user.name
        }, Token)
        res.status(200).json({
            token: accesToken,
            username: user.username,
            name: user.name
        })
    })

})

router.post('/uploadAvatar',validateToken, async (req, res) => {
    if(req.files){
        const file = req.files.avatar
        const fileName = `avatar${file.name.slice(file.name.lastIndexOf('.'))}`
        const directory = `./public/Users/${req.user.username}/${fileName}`
        file.mv(directory, err=>{
            if(err) {
                res.json({error:err})
            } else {
                res.status(200).json({
                    message:"File Uploaded successfully",
                    error:false
                })
            }
        })
    }
})

module.exports = router