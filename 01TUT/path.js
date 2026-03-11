const path= require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
})

console.log("Hello...");

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'),'Nice to meet you!',(err)=>{
    if(err) throw err;
    console.log('Write complete!');

    
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'),'\n\nYes it is.',(err)=>{
       if(err) throw err;
       console.log('Append complete!');
    })
})



