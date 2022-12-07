import express from "express";

const app = express();


const filterquery = (req,res,next)=>{
    if(!req.query.age){
        res.send("please provide age")
    }
    else if (req.query.age<18){
        res.send("you cannot access this page")

    }
    else{
        next();
        
    }
}
app.use(filterquery);

export default filterquery;