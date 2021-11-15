const express = require('express')
const router = express.Router()

const {Tracker, Habits,Days} = require('../db/models')

const {validateToken} = require("../middlewares/AuthMiddleware");

router.post('/create', validateToken, async (req, res) => {
    const tracker = req.body
    const UserId = req.user.id
    tracker.UserId = UserId
    await Tracker.create(tracker)

    res.json("Success")
})

router.get("/", validateToken, async (req, res) => {
    const UserId = req.user.id
    const listOfTrackers = await Tracker.findAll({
        where: {
            UserId: UserId,
        }, attributes: {
            exclude: ['UserId']
        },
        include: {
            model:Habits,
            through:{
                attributes:[]
            },
            attributes:{
                exclude:["id"]
            },
            include:{
                model:Days,
                through:{
                    attributes:[]
                },
                attributes:{
                    exclude:["id"]
                }
            }
        }
    })
    res.json(listOfTrackers)
})

router.delete("/:trackerId",validateToken,async (req,res)=>{
    const trackerId = req.params.trackerId

    await Tracker.destroy({
        where:{
            id:trackerId
        }
    })
    res.json("Delete Successful")
})

module.exports = router