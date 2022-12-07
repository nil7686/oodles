const express = require('express');
const pool = require('./student/database/db')
const app = express();
const bodyParser = require("body-parser");
const studentrouter = require("./student/database/routers");



app.use(bodyParser.json());

app.use(express.json());
app.use("/",studentrouter)

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})
