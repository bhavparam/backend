require("dotenv").config();
const express=require("express");
const app=express();
const router=require("./router/router.js");
const connectdb=require("./db/database.js");
app.use(express.json());
app.use("/api/router",router);

const PORT=3000;
connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is listening at port: ${PORT}`)
    });
});