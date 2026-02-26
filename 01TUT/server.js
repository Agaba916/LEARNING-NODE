const os = require('os')
const path = require('path')
// const math = require('./math')
// console.log(math.add(8, 9))//this approach works but we can also use this second one 
console.log("Hello world!")
const { add, subtract, multiply, divide}= require('./math')
console.log(add(7, 8))
console.log(subtract(30, 15))
console.log(multiply(5, 3))
console.log(divide(30, 2))

// console.log(global): entire node.js runtime environment object.

// console.log(os.platform())
// console.log(os.type())
// console.log(os.homedir())
// console.log(os.version())
// console.log(__dirname):path to current directory.
// console.log(__filename):path to file.

// console.log(path.dirname(__filename))//what we got with console.log(__dirname)
// console.log(path.basename(__filename))//
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))//object with all with all those values.