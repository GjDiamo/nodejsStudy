/**
 * 根据不同请求路径响应不同内容
 * 问题：
 *      目前node服务器存在一个问题：无论浏览器输入什么网址，服务端走的都是server.on方法，而我们返回的数据是固定的
 *      然而，一般的网页，每点击网页上一个按钮就会返回不同的页面，而且这些地址都是不一样的
 * 解决方案：
 *      在server.on拿到request请求的网址url后，根据不同的url返回不同的数据即可
 */
var http = require('http')

var server = http.createServer()

server.on('request',function(req,res) {
    var url = req.url

    if(url == '/home') {
        res.end('welcome to node.js!')
    } else if (url == '/blackhorse') {
        res.end('welcome to itcast')
    } else if (url == '/') {
        res.end('hello node.js')
    }
})

server.listen(3000,function(err) {
    console.log('服务器启动成功！')
})