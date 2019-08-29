var express=require("express")
var app=express()
var db=require("./feng.js")
app.get("/add",(req,res)=>{
    db.add("test",{"username":"可以的"},(err)=>{
        if(err){
            throw   err
        }
        res.send("成功")
    })
})
app.listen(3000)