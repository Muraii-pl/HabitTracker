const express = require('express')
const router = express.Router()

const {Tracker, Habits,Tracker_Habits,Habits_Days} = require('../db/models')

const {validateToken} = require("../middlewares/AuthMiddleware");

router.post('/create',validateToken,async (req,res)=>{
    const TrackerId = req.query.trackerId
    const name = req.body
    const habit = await Habits.create(name)
    await Tracker_Habits.create({
        TrackerId:TrackerId,
        HabitId:habit.id
    })
    res.json("Succes")
})

router.post('/addDays/:dayId',validateToken,async (req,res)=>{
    const dayId = req.params.dayId
    const habitId = req.query.habitId

    await Habits_Days.create({
        DayId:dayId,
        HabitId:habitId
    })
    res.json("Success")
})


module.exports = router