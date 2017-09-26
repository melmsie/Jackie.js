const express = require("express")
const app = express()

app.use(express.static('website'))
app.get('/', (req, res) => {
    let data = {
        'uptime': formatTime(process.uptime()),
        'ram': (process.memoryUsage().rss / 1024 / 1024).toFixed(2)
    }
    res.status(200).send(source(data))
})
