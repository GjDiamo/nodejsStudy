var path = require('path')

// console.log(_dirname)
// console.log(_filename)

var path1 = __dirname
var path2 = '/hello.html'

var myPath = path.join(path1,path2)
console.log(myPath)

var parsePath = path.parse(myPath)
console.log(parsePath)
console.log('文件所在磁盘' + parsePath.root)
console.log('文件所在目录' + parsePath.dir)
console.log('文件相对路径' + parsePath.base)
console.log('文件拓展名' + parsePath.ext)
console.log('文件名' + parsePath.name)