const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./route/routes");



app.use(express.json());
app.use(bodyparser.json());
app.use(route);




mongoose.connect("mongodb://127.0.0.1:27017/Agri-Backend")
try{
    console.log("Mongoose Connected");
}catch(error){
    console.log('error.message');
}

app.listen(5000, () => {
    console.log("Connected to http://localhost:5000/ ");
  });