/**
 * 设置响应头解决中文乱码问题
 * 问题：
 *      当服务器返回的是中文字符时，浏览器显示的是一堆乱码
 * 解决：
 *      加上对应的响应头
 * 
 */
var http = require('http')

var server = http.createServer()

server.on('request',function(req,res) {
    res.writeHead(200,{
        'Content-Type':'text/plain;charset=utf-8'
    })

    var url = req.url

    if(url = '/home') {
        res.end('欢迎来到黑马训练营！')
    } else if(url == '/mz'){
        res.end('hello mz')
    } else {
        res.end('empty')
    }
})

server.listen (3000,function(err) {
    console.log('服务器启动成功！')
})