const {verify} = require("jsonwebtoken")
const Token = process.env.VALIDTOKEN

const validateToken = (req, res, next) => {
    const accessToken = req.headers("accessToken")

    if (!accessToken) return res.json({error: "User not logged in!"})

    try {
        const validToken = verify(accessToken, Token)
        req.user = validToken
        if (validToken) {
            return next()
        }
    } catch (err) {
        return res.status(422).json({
            message: "Validation error.",
            error: err
        })
    }
}

module.exports = {validateToken}