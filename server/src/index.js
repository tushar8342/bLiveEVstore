const express = require("express")
const app = express()
const connect = require("./configs/db.js")
const itemController = require("./controllers/item.controller.js")
require('dotenv').config()
app.use(express.json())


app.set('view engine', "ejs")
app.use(express.static("public"))

app.use("/items", itemController)




port = process.env.PORT || 2346

app.listen(port, async () => {
    try {
        await connect()
    } catch (error) {
        console.error(error.message)
    }
    console.log("Listen to the Port Number 2345")
})
