const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.SERVER_PORT || 3001
const db = require('./api/models')

const app = express()


db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server running on port ${port}`)
    })
})
