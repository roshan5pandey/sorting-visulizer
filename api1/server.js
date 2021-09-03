const express = require("express");
const app = express();
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const Eam = require('./Model');
 

const dotenv = require('dotenv');
dotenv.config();

const db = process.env.DB;

mongoose.connect(db,{useUnifiedTopology: true}).then(()=>{console.log("connected");}).catch((err)=>{
    console.error(err);

})


app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/submit', jsonParser, function (req, res) {

    let re =new Eam({
        name:req.body.name,
        password:req.body.password

    });
    re.save((err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("connected successfully");
        }
    })
    
  })

app.listen(3000,()=>{
    console.log("skdjshjdhsjhdhsudh");
})