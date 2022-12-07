const express = require('express');
const pool = require('./database/db')
const app = express();
const bodyParser = require("body-parser");
const adminrouter = require("./routes/routers")



app.use(bodyParser.json());

app.use(express.json());
app.use("/",adminrouter)

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})
