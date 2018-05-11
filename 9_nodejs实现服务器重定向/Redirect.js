var http = require('http')

var fs = require('fs')

var path = require('path')

var server = http.createServer()

server.on('request',function(req,res) {
    var urlPath = req.url

    var method = req.method

    if(urlPath == '/') {
        //302表示重定向
        res.writeHead(302,{
            //键值对，键：表示客户端浏览器将进行重定向，值：表示浏览器重定向的请求地址
            'Location': 'login'
        })
        res.end()
    }

    if(urlPath == '/login') {
        fs.readFile(path.join(__dirname,'login.html'),function(err,data) {
            if(err) {
                throw err
            }
            res.end(data)
        })
    }
    
})

server.listen(3000,function() {
    console.log('服务器启动成功！')
})