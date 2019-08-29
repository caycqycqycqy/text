var  express=require("express")
var app=express()
// var mongoClient=require("mongodb").mongoClient
//链接mongodb客户端
var mongoClient=require("mongodb").MongoClient
// console.log(mongoClient)
/**
 * 插入数据
*/
// app.get("/add",(req,res)=>{
//     mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
//         //创建数据库
//         var dbName=db.db("adminuser")
//     // 链接集合
//         dbName.collection("test").insert({"username":"aaaaaaaaaaaaaaaaaaaaaa"},function(err){
//             if(err){
//                 throw err
//             }
//             // console.log("插入成功")
//             // 关闭数据库
//             res.send("插入成功")
//             db.close()
//         })
//     })
// })
/**删除数据 */
// app.get("/del",(req,res)=>{
//     mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
//         //创建数据库
//         var dbName=db.db("adminuser")
//     // 链接集合
//         dbName.collection("test").deleteOne({"username":"aaaaaaaaaaaaaaaaaaaaaa"},function(err){
//             if(err){
//                 throw err
//             }
//             console.log("删除成功")
//             // 关闭数据库
//             res.send("删除成功")
//             db.close()
//         })
//     })
// })
/**删除数据 */
app.get("/req",(req,res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
        //创建数据库
        var dbName=db.db("adminuser")
    // 链接集合
        dbName.collection("test").update({"username":"tom"},{$set:{"username":"tom1"}},function(err){
            if(err){
                throw err
            }
            console.log("删除成功")
            // 关闭数据库
            res.send("删除成功")
            db.close()
        })
    })
})

app.listen(3001)

// //**
// npm   install    express    mongodb --save

//  */