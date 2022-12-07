const express = require("express");
const db = require("../db")

const router = express.Router()

router.get("/login" , async(req,res)=>{
    console.log("started")
    const result = await db.db.query('SELECT id, email, password FROM public."Admin_user"')
    console.log(result)

    res.status(200).json(result)
})

module.exports=router