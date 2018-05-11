/**同步和异步的区别
*       1.同步操作比异步操作先执行
*       2.如果对同步和异步没有特殊要求的情况下，优先使用异步，节省性能
*       3.异步操作的异常直接由回调函数中的error参数来捕捉，而同步操作中只有返回值，无法捕捉error
*       4.同步操作可以使用try-catch来捕捉异常，并且try-catch只能用于同步，异步无法使用
*/
var fs = require('fs')
try {
    var readSyn = fs.readFileSync('test.txt').toString
    console.log(readSyn)
} catch (error) {
    console.log(error)
}