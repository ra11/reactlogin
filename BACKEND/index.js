const express = require("express")
const cors=require("cors")
const app=express()
var username="raji"
var password=123

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.post("/login",function(req,res){

    console.log(req.body.username)
     if(req.body.username===username && Number(req.body.password )=== password){
        
        res.send(true)

     }
     else{
        res.send(false)
     }
})



app.listen(5000,function(){
    console.log("server started...")
})