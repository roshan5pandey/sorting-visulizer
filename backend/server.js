const express = require('express');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Ram = require('./User');
const db = process.env.DB;
mongoose.connect(db,{ useUnifiedTopology: true,}).then(()=>{console.log("success full");}).catch((err)=>{
    console.error(err);
})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
  app.post('/quotes', (req, res) => {
   const ra = new Ram({
    name:req.body.name,
    quote:req.body.quote
   })
   
   ra.save();
  })

app.listen(3000, function() {
    console.log('listening on 3000');
  })