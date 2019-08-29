// 链接m客户端
var mongoClient=require("mongodb").MongoClient
// 链接地址，
var url="mongodb://127.0.0.1:27017"
// var connect=require("connect")
 

function   ConnectDB(callback){
    // console.log(callback)
    mongoClient.connect(url,(err,db)=>{
    
        // console.log(mongo)
        var dbName=db.db("adminuser")
        if(err){
            callback(err,null)
        }
        callback(err,db,dbName)
        // db.close(mongo)
    })
}
// ming     shuzu      
exports.add=function(collectionName,json,callback){
    ConnectDB(function(err,db,dbName){
        dbName.collection(collectionName).insert(json,function(err,result){
            if(err){
                callback(err,null)
            }
            callback(err,result)
            db.close()
        })
    })

}
exports.find=function(collectionName,json,callback){
    ConnectDB(function(err,db,dbName){
        dbName.collection(collectionName).find(json).toArray(function(err,result){
            if(err){
                callback(err,null)
            }
            callback(err,result)
            db.close()
        })
    })

}