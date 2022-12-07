import express from "express";
import { Router } from "express";
import filterquery from "./filter.js"



const app = express();
const route = Router();

const port = process.env.PORT||'2000'




app.get('/home',filterquery, (req, res) => {
    res.send("welcome to home page");
});

app.get('/about', (req, res) => {
    res.send("welcome to about page");
});

//app.listen(2000);
app.listen(port,()=>{
    console.log('server listing at',{port});
})