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


const CitySchema = new mongoose.Schema({
  
  first_name: {type: String},
  last_name: {type: String},
  email: {type: String},
  gender: {type: String},
  ip_address: {type: String},
  date: {type: Date}
});

const CityModel =  mongoose.model('City', CitySchema);

//module.exports = StudentModel



let cityData = fs.readFileSync('/home/nilesh/Documents/MOCK_DATA.json');  
let cities = JSON.parse(cityData);  

 CityModel.insertMany(cities)  
console.log(cities); 


//const  createcity = async () => {
  //  const city = new CityModel({cities})

   //city.save(function (err, book) {
     // if (err) return console.error(err);
      //console.log(book.name + " saved to bookstore collection.");
    //});

    //const result = await city.save();
    //console.log(result);
  //}
  //createcity();

  //get 
app.get('/get' ,async(req,res)=>{
  const{page,limit}=req.query;
  const skip=(page-1)*10;
  const users= await CityModel.find().skip(skip).limit(limit).sort({"date":1})
  res.send(users);
  })

  app.post('/city', (req, res) => {
    const body = req.body;
    cities.save(body)
    .then(response => {
      console.log('saved to mongo db', response);
      res.json(response);
    })
    .catch(error => {
      console.log('error in saving to mongo db', error);
      res.json(error);
    });
    });
    

  


 

  
  
  
