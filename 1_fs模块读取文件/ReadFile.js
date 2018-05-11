//1.导入文件模块
var fs = require('fs')
//2.读取文件

/**
 * 第一个参数：文件的路径
 * 第二个参数：编码格式，默认可以不写则返回原始buffer（二进制数据）
 * 第三个参数：读取回调函数（异步操作）
 *      err：如果读取成功，err为null，否则读取失败
 *      data：读取到的数据，默认为二进制数据
 */
fs.readFile('./a.txt','utf-8',function (err,data) {
    if (err) {
        console.log(err);
        //抛出异常，throw的作用就是让node程序停止，方便调试
        throw '文件路径错误' + err
    } else {
        //如果指定了编码格式，data就是对应格式的数据，例如utf-8就是一个文本
        //如果未指定，data就是二进制数据，需要转成字符串输入
        console.log(data.toString())
    }
});