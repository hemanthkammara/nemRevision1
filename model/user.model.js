const mongoose=require("mongoose");

const userSchma=mongoose.Schema({
   name:String,
   email:String,
   phone:String,
   label:String,
   booked_slots:[String]
},{versionKey:false})


const userModel=mongoose.model("user",userSchma);

module.exports={userModel}
