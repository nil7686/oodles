import  express from 'express'

const app = express()

app.get("/student/:catogery/:id", (req,res) =>{
    console.log(req.params)
    const {catogery,id} = req.params;
    res.send(`student catogery is ${catogery} student id is ${id}`)
    
})
app.get("/train/:from-:to", (req,res) =>{
    console.log(req.params)
    const {from,to} = req.params;
    res.send(`from Station: ${from} to Station: ${to}`)
    
})
app.listen(2000);