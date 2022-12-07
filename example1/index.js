import express from 'express'
import fs from 'fs'
import connectDB from '/home/nilesh/Desktop/express.js/example1/dbconnection/connectDB.js'
import mongoose from 'mongoose';
//const { Schema } = mongoose;


const app = express()

const port = process.env.PORT|| '5000'

const db_url =  process.env.db_url|| "mongodb://localhost:27017/tutorialkart"

connectDB(db_url);


app.listen(port, () =>{
    console.log('server listing at http://locahost:${port}')
})

//get 
app.get('/' ,async(req,res)=>{
  const{page,limit}=req.query;
  const skip=(page-1)*10;
  const users= await UserModel.find().sort({"date":1}).skip(skip).limit(limit);
  res.send(users);
  })

app.post('/city', (req, res) => {
  const body = req.body();
  city.save(body)
  .then(response => {
    console.log('saved to mongo db', response);
    res.json(response);
  })
  .catch(error => {
    console.log('error in saving to mongo db', error);
    res.json(error);
  });
  });

  
let cityData = fs.readFileSync('/home/nilesh/Documents/city.json');  
let cities = JSON.parse(cityData);  
 //db.city.insertMany(cities)  
City.insertMany(cities)  
console.log(cities); 
