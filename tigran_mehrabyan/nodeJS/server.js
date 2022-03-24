let express = require("express");
let app = express();

const pool = require("./db");
const users = require("./routes/users");
app.use(express.json());

app.use("/todos", users);


app.listen(5000, function () {});
