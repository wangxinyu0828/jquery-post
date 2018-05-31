var express =require("express");
var morgan =require("morgan");
var app =express();
//use意思是使用了一个中间件
app.use(express.static('public'));
//morgan是一个日志中间件
app.use(morgan('dev'));
app.get('/',function(req,res){
    res.send("Hello 我的第一个基于express的web服务器");
});
app.get('/about',function(req,res){
    res.send("这是一个About(关于)页面");
});
app.get('/login',function(req,res){
    res.send("这是登陆页面");
});
app.post('/login',function(req,res){
    res.send("这是一个测试Post的页面");
});
var server = app.listen(8080);
console.log("服务器运行在http://localhost:8080");