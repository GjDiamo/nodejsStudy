/**
 * web开发的三个特点：
 *      1.浏览器中的所有外部资源路径都会变成网络请求
 *      2.web开发中的路径只是一个资源标识符，'.'表示的是虚拟主机的根目录(127.0.0.1:/)
 *      3.通常我们将网页静态资源（图片文件、css文件等）放在服务端目录的根目录下，更加便于维护
 */
var fs = require('fs')

var path = require('path')

var http = require('http')

var server = http.createServer()

server.on('request',function(req,res) {
    //获取浏览器请求地址，根据不同的网址返回不同的数据
    var url = req.url//获取的是ip+端口号之后的内容
    console.log('浏览器请求路径' + url)
    //根据请求路径拼接文件路径
    var filePath = path.join(__dirname,url)

    fs.readFile(filePath,function(err,data) {
        if (err) {
            throw err
        } else {
            res.end(data)
        }
    })
})

server.listen(3000,function(err) {
    console.log('服务器启动成功！')
})