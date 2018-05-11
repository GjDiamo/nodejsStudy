/**
 * 文件同步操作特点
 *      1.同步操作没有回调函数，但是有返回值，默认是二进制，需要转成字符串
 *      2.同步操作会阻塞当前线程
 *      3.实际开发中应该根据具体的业务需求来判断应该使用同步还是异步（同步操作一定是按照顺序执行的）
 *      4.同步操作代码性能低，资源损耗高
 */
var fs = require('fs')

var readFileSyn = fs.readFileSync('test.txt').toString
console.log('1111')
console.log(readFileSyn)

/**
 * 异步操作特点:
 *      1.一定有回调函数
 *      2.不会阻塞当前线程
 *      3.代码性能高，资源损耗低
 */
fs.readFile('test.txt','utf-8',function(err,data) {
    if(err) {
        throw err
    }else {
        console.log('hello')
    }
})

console.log('程序执行结束！')

/**
 * 如果一个文件中既有同步操作又有异步操作的情况下
 *      1.编译器从上往下逐行编译代码
 *      2.如果是同步操作，则立即执行（有序执行）
 *      3.如果是异步操作，不执行，将异步操作中的回调函数放入一个专门的堆中（事件循环）
 *      4.编译完最后一行代码时，开始执行异步栈堆中的代码
 */