import express from "express";
import { connectDB } from "./db/config.js";
import dbinit from "./db/init.js";
import allRoutes from "./router/allRoutes.js";
const PORT =3300;
const app = express();
app.use(express.json());
connectDB();
dbinit()
.then(()=>console.log("Db connected"))
.catch((err)=>console.log("Db not synced",err))
app.use("/",allRoutes);


app.listen(PORT,(err)=>{
    if(!err){
        console.log(`server started at http://localhost:${PORT}`);
    }
    else{
        console.log('server not started');
    }
})