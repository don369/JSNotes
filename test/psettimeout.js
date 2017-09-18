/**
 * node版本：^8.0
 */
const { promisify } = require("util");

const pSetTimeout = promisify(setTimeout);

pSetTimeout(1000).then(()=>{
    console.log("setTimeout回调函数执行");
})
console.log("测试promisify转换成Promise版的setTimeout函数，1秒后执行：");

/*结果：
* "测试promisify转换成Promise版的setTimeout函数，1秒后执行："
* "setTimeout回调函数执行"
*/
