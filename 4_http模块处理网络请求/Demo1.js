/**
 * 服务器响应客户端的请求
 */
var http = require('http')

var server = http.createServer()

server.on('request',function(req,res) {
    res.write('hello world')
    res.end()
})

server.listen(3000,function(err) {
    console.log('服务器启动成功！')
})