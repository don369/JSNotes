###util.promisify(original)

node8.0提供新的函数promisify，使用promisify可以将遵循node.js回调风格的函数转换为Promise版本的函数；
如：
```js
count { promisify } = require("util");

const pSetTimeout = promisify(setTimeout);

pSetTimeout(1000).then(()=>{
    console.log("setTimeout回调函数执行");
})
console.log("测试promisify转换成Promise版的setTimeout函数，1秒后执行：");
/*
*结果：
* "测试promisify转换成Promise版的setTimeout函数，1秒后执行："
* "setTimeout回调函数执行"
*／
```
也可以配合async/await使用；如:
```js
const {readFile} = require("fs");
const pReadFile = promisify(readFile);
async function asyncMethod(){
    await const data = pReadFile(__filename,'utf8');
    console.log(data);
} 
```
能将遵循node.js回调风格的自定义同步函数或同步函数转为Promise版的异步函数;
如:
```js
function plainFunc(callback){
    //代码
    //ode.js回调风格的回调函数callback(err, value)
    callback(null, "回调函数的value");
}
const asyncFn = promisify(plainFunc);
asyncFn().then(val => console.log(val));
console.log("输出：");
/*
*结果：
* 输出：
* "回调函数的value"
*／
```
也能是匿名函数:
```js
const asyncFunc = promisify((param, callback) =>{
    callback(null, param);
})
asyncFunc("param参数").then(val => console.log(val));//param参数
```