import express from "express";
import users from "./router/users.js"
const app = express()
app.use(express.json())

app.use("/", users)

app.listen(3000, ()=>{
    console.log("hy")
})