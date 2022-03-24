import express from "express";
import user from  "./Routes/user.js";

const PORT = 8080;
const app = express();
app.use(express.json());
app.use("/user", (req, res, next) => {
  if (req.params.id === "10") {
    res.status(404).json({message: "User not found"})
    return
  }
  next()
})
app.use("/user", user)

app.listen(PORT, () => console.log("Gooooo " + PORT));