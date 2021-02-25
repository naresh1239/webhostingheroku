const mongoose = require('mongoose');
 const validator = require("validator");

 const userSchema = mongoose.Schema({
     Name:{
         type:String, 
         require:true,
         minLength:3
     },
     Email:{
         type:String,
         require:true,
         validator(value){
             if(validator.isEmail(value)){
                 throw new Error("invalid Email id")
             }
         }
     },
     Phone:{
        type:Number, 
        require:true,
        min:10
    },
    Massage:{
        type:String, 
        require:true,
        minLength:3
    }
 })

 const dream = mongoose.model("dream",userSchema)

 module.exports = dream;