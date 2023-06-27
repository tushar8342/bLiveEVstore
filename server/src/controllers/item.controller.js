const express = require("express")
const router = express.Router()
const Item = require("../models/item.model")

router.get("", async (req, res) => {
    try {
        const items = await Item.find().lean().exec()
        res.send({ items })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.post("", async (req, res) => {
    try {
        console.log(req.body)
        const items = await Item.create(req.body)
        res.send({ items })
    } catch (error) {
        res.status(400).json({ error: 'Bad request' })
    }
})

module.exports = router


