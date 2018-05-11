//1.导入网络请求http模块
var http = require('http')
//2.创建服务器
var server = http.createServer()
//3.服务器添加接收客户端浏览器请求事件
server.on('request',function(res,req) {
    console.log('客户端请求的数据' + req.url)
})
//4.监听端口号
server.listen ('3000','localhost',function(err) {
        console.log('服务器启动成功！')
})