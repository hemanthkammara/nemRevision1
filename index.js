const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());

const {userRouter}=require("./routes/userRoutes");
const {connection}=require("./db")
app.use("/contacts",userRouter)


app.get("/",(req,res)=>{
    res.send("test app")
})
app.listen(8000,async(req,res)=>{
    try{
        await connection
        console.log("server connected to atlas");
        console.log("port running at port 8000");

    }catch(err){
        console.log(err)
    }
})