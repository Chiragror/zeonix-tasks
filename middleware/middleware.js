const express = require('express')
const jwt = require('jsonwebtoken')
const controller = require('../controller/user');
const model = require('../model/user');
const secretkey = "secretkey";

async function verifytoken(req,res,next){
    let value = req.headers['authorization']
    // console.log(value)
    if (typeof value!=="undefined") {
        const valuess = value.split(" ")
        const token = valuess[1];
        req.token = token

        try {   
            const result = jwt.verify(req.token,secretkey)
            id = result.id;
            // console.log(id)
            const users = await model.findOne({_id:id})
            if (users) {
                req.use = id;
                    next();
                    
            } else {
                res.json({
                    message:"token is invalid"
                })
            }

        } catch (error) {
            res.json({
                message:"error"
            })
        }
        
    } else {
        res.json({
            message:"Verification failed"
        })
    }
 
}

module.exports= verifytoken;