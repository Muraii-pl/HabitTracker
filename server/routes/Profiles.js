const express = require("express")
const router = express.Router()


const {validateToken} = require("../middlewares/AuthMiddleware");

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
