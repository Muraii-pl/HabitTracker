const express = require("express")
const router = express.Router()
const {Users} = require("../db/models")
const bcrypt = require("bcrypt")

const {sign} = require('jsonwebtoken')
const {validateToken} = require("../middlewares/AuthMiddleware");

const Token = process.env.VALIDTOKEN

router.post('/register', async (req, res) => {
    const {username, password, name, email} = req.body
    bcrypt.hash(password, 10).then(async (hash) => {
        await Users.create({
            username: username,
            password: hash,
            name: name,
            email: email
        })
        res.code(201).json("Succes")
    })
})
router.post('/login', async (req, res) => {
    const {username, password} = req.body
    console.log(req.body)
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
        },Token)
        res.status(200).json({
            token: accesToken,
            username: user.username,
            name: user.name
        })
    })

})

module.exports = router