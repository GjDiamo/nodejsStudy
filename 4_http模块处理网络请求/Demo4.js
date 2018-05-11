/**
 * response响应头的作用：
 *      1.服务端告诉浏览器，我给你响应的是什么数据类型
 *      2.服务端响应给浏览器的数据类型只有两种：字符串和二进制，
 *          通过设置响应头可以告之浏览器这个字符到底是普通文本还是html标签文本或者是一个json字符串，
 *          从而可以让浏览器根据不同的情况做出不同的处理
 */
var http = require('http')

var server = http.createServer()

server.on('request',function(req,res) {
    var url = req.url

    if(url == '/1') {
        res.writeHead(200,{
            //普通文本
            'Content-Type':'text/plain;charset=utf-8'
        })
        res.end('<h1>welcome to itcast</h1>')
    }else if(url == '/2') {
        res.writeHead(200,{
            //超文本标记语言
            'Content-Type':'text/html;charset=utf-8'
        })
        res.end('<h1>欢迎来到黑马！</h1>')
    }else if(url == '/3') {
        res.end(JSON.stringify({
            name: 'itcast'
        }))
    }

    
})

server.listen(3000,function(err) {
    console.log('服务器启动成功')
})