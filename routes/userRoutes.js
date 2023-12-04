const express=require("express");
const {userModel}=require("../model/user.model");

const userRouter=express.Router();

// get all contacts
userRouter.get("/",async(req,res)=>{
    const{q}=req.query
    try{
        let query=userModel.find()
        if(q){
            query.or([{name: new RegExp(q,"i")}])
        }
      const contacts=await query
       res.status(200).send({"msg":"contacts list","data":contacts})
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})

// add contact
userRouter.post("/add",async(req,res)=>{
    try{
        console.log(req.body)
        const user= new userModel(req.body);
        await user.save()
        res.status(200).send({"msg":"contact added successfully"})
    }
    catch(err){
        res.status(400).send({"error":err})
    }
})

userRouter.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    try{
        await userModel.findByIdAndUpdate({_id:id},req.body);
        res.status(200).send(`contact with ${id} updated successfully`)

    }
    catch(err){
        res.status(200).send({"error":err})
    }
})
userRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
        await userModel.findByIdAndDelete({_id:id});
        res.status(200).send(`contact with ${id} deleted successfully`)

    }
    catch(err){
        res.status(200).send({"error":err})
    }
})

module.exports={userRouter}