var http = require('http')

var url = require('url')

var fs = require('fs')

var path = require('path')

var server = http.createServer()

server.on('request',function(req,res) {
    //请求路径
    var urlPath = req.url
    //请求方法
    var method = req.method
    console.log('_dirname:' + __dirname)
    console.log('请求路径:' + urlPath)
    console.log('请求方法:' + method)

    if(urlPath == '/') {
        fs.readFile(path.join(__dirname,'Test.html'),function(err,data) {
            if(err) {
                throw err
            }
            res.end(data)
        })
    }


    if(urlPath.indexOf('/getRequest') == 0 && method == 'GET') {
        var path1 = decodeURI(urlPath)
        console.log(path1)

        var urlobjc = url.parse(path1,true)
        console.log(urlobjc.query)
        res.end(JSON.stringify(urlobjc.query))
    }
})

server.listen(3000,function(err) {
    console.log('服务器启动成功！')
})
