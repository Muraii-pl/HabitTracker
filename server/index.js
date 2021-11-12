const express = require('express')
const dotenv = require('dotenv').config()
const fileUpload = require('express-fileupload');
const port = process.env.SERVER_PORT || 3001
const db = require('./db/models')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(fileUpload({
    createParentPath: true
}))
app.use(express.static('public'));


const Users = require("./routes/Users")
const Profiles = require("./routes/Profiles")
const Trackers = require("./routes/Trackers")

app.use("/auth", Users)
app.use("/users", Profiles)
app.use("/trackers", Trackers)

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})
