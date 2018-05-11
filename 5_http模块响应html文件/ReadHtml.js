//获取fs模块
var fs = require('fs')
//获取http模块
var http = require('http')
//创建服务器
var server = http.createServer()
//启动服务器
server.on('request',function(req,res) {
    //获取浏览器地址
    var url = req.url

    console.log('浏览器的地址' + url)

    if(url == '/') {
        //读取本地文件
        fs.readFile('./home.html',function(err,data) {
            if(err) {
                throw err
            } else {
                console.log(data.toString)
                res.end(data)
            }
        })
    }
})
//监听端口
server.listen(3000,function(err) {
    console.log('服务器启动成功！')
})