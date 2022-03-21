const express = require("express")
const date = require("./date")

const app = express()
app.use(express.json())



app.listen(3123, () => {
    console.log("Locallllllll")
})
app.get('/', (req, res) => {
    res.json({message : "WORKING"})
})
app.get('/po', (req, res) => {
    res.json(date)
})
app.post('/po', (req, res) => {
    let user = {
        "id": date.length + 1,
        "first_name": "Hewett",
        "last_name": "Bradburne",
        "email": "hbradburne8@ihg.com"
    }
    date.push(user)
    res.json(user)
    // console.log(req.body)
    // res.send("Hello post")
})
app.put('/po/:id', (req, res) => {
    console.log(req.params.id)
    date[req.params.id - 1] = req.body
    res.json(date[req.params.id - 1])
})
app.delete('/po/:id', (req, res) => {
    console.log(req.params.id)
    date.splice(req.params.id, 1)
    res.json(date)
})