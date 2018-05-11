var fs = require('fs')
/**
 * 第一个参数：写入文件的路径
 * 第二个参数：文件数据
 * 第三个参数：编码格式，一般省略
 * 第四个参数：回调函数（异步操作）
 *      err：如果读取成功，err为null，否则读取失败
 */
fs.writeFile('./b.txt','hello node.js',function (err) {
    if (err) {
        return console.log('写入文件失败');
    }else {
        console.log('写入成功')
    }
})