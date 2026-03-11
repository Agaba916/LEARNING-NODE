const add = (a, b)=>a + b;
const subtract = (a, b)=>a - b;
const multiply = (a, b)=>a * b;
const divide = (a, b)=>a / b;


// we can also use exports.add= (a,b)=> a + b;    // this exactly exports the module and no need for more declarations and no need for module.exports
module.exports = { add, subtract, multiply, divide}