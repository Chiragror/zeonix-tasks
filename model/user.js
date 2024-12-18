const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const Schema = new mongoose.Schema({
    name:{type:"String"},

    email:{type:"String"},

    phone:{type:"Number"},

    password:{type:"String"},

    role:{type:"String"},

    state:{ type:"String"},

    zipcode:{type:"number"}

    
})
Schema.pre('save',async function(next){
    this.password= await bcrypt.hash(this.password,10)
    next()
})
const users = mongoose.model('Agri-users',Schema);
module.exports=users