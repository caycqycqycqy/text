var express=require("express")

var app=express()
// 引入封装的
var db=require("./feng")
// 路由
var router=express.Router()
// post请求
var bodyPerse=require("body-parser")
// post中的json数据
app.use(bodyPerse.json())
// post中的字符串
app.use(bodyPerse.urlencoded({extended:false}))
next()
/**
 * 跨域处理
 * 1.代理   node-http-proxy
 * 2.jsonp    get
 * 3.设置响应请求头
 * 4.
 */
router.all("*",(req,res,next))
// 注册
router.post("/register",(req,res)=>{
    /**
     * 接受前端传过来的值
     */
    var regUser={
        username:req.body.username,
        password:req.body.password
    }
    db.add("userdata",regUser,(arr,result)=>{
        console.log(result)
        if(arr){
            throw arr
        }
        res.send("ok")
    })
})
// 登录
router.get("/login",(req,res)=>{
    var userdata={
        username:req.query.username,
        password:req.query.password
    }
    db.find("userdata",userdata,(err,result)=>{
        if(result.length==0){
            res.send("无此用户")
        }else if(result.length!=0&&){
            res.send("登录成功")
        }

    })
})     
// 使用路由
app.use(router)
app.listen(3000)
 
 