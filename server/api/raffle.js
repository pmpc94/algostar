const express = require('express')

const app = express()
app.use(express.json())

app.get('/raffle', async (req, res) => {
    const raffle = [1,2,3,4,5,6]

    res.json({ raffle})
})

module.exports = app