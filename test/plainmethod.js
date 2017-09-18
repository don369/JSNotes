const { promisify } = require("util");

function plainFunc(callback){
    //代码
    //ode.js回调风格的回调函数callback(err, value)
    callback(null, "回调函数的value");
}
const asyncFn = promisify(plainFunc);
asyncFn().then(val => console.log(val));
console.log("输出：");
/*结果：
* "测试promisify转换成Promise版的setTimeout函数，1秒后执行："
* "setTimeout回调函数执行"
*/