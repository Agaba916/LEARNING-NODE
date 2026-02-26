const fs = require('fs')

fs.readFile('./files/starter.txt',(err, data)=>{
    if(err) throw err;
    console.log(data.toString());// instead of this toString we pass another param 'utf8' in the fs.readFile
})
console.log('Hello...')
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})