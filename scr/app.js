const express = require("express");

const app = express();
const port = process.env.PORT || 7000;
require("../scr/dbs/connection");
const record = require("../scr/models/mod")

app.use(express.json());

app.post("/models", async (req, res)=>{
    try{
        const addetails = new record(req.body)
            console.log(req.body);
            const insertMm= await addetails.save();
            res.send(insertMm);

            addetails.save();
        
       
    }catch(e){
         res.send(e);
    }
})

app.get("/models", async (req, res)=>{
    try{   
       // const _id=req.params.id
           const getsReport= await Report.find({societies:"nss"});// for selecing any quary 
            res.status(201).send(getsReport);  
    }catch(e){
         res.status(400).send(e);
    }
    
})

    app.listen(port,()=>{
        console.log("the port is listining");
    })

 