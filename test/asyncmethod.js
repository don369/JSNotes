const { promisify } = require("util");
const {readFile} = require("fs");
const pReadFile = promisify(readFile);

async function asyncMethod(){
    const data = await pReadFile(__filename,'utf8');
    console.log(data);
}

asyncMethod();