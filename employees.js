const express = require('express')
const con= require("./config")
const app= express()

// app.use(express.json())

app.get("/",(req,resp)=>{
    // resp.send("get api")
    
    con.query("select * from ospos_employees where org_id = 40",(err,result)=>{
        if(err){
            console.warn("error",err)
        }else{
            console.log(result)
        }
    })
}) 
app.listen(5000);