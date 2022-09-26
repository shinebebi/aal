const express = require('express')
const app = express()

app.use(express.json())
const users = []
app.get('/api', (req, res) => {
    res.json({"users": users })
})

app.post('/api', (req, res) => {
    const { user } = req.body
    users.push(user)
    res.json({"status": "OK"})
})

app.listen(4000, () => { console.log("Server started on port 4000") })