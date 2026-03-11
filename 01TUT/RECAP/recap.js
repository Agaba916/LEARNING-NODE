// const fs= require('fs')
// const path = require('path')
// // const {add, subtract,multiply, divide}=require('../math')

// // console.log(add(6,7));
// // console.log(path.basename(__filename))
// // console.log(path.dirname(__filename))
// // console.log(path.extname(__filename))
// // console.log(path.parse(__filename))
// // console.log(path.basename(__dirname))
// // const {add}=require('./reca');
// // console.log(add(2,4))


// // fs.readFile('./file.txt',(err,data)=>{
// //       if(err) throw err
// //       console.log(data.toString())
// // })

// // console.log('Hello...')
// // process.on('uncaughtExcepttion', (err)=>{
// //     console.log(`There was an uncaught error ${err}`)
// //     process.exit(1)
// // })

// fs.readFile(path.join(__dirname, '../files', 'reply.txt'), 'utf8', (err,data)=>{
//     if(err) throw err
//     console.log(data);
// });

// fs.writeFile(path.join(__dirname, '../files', 'new.txt'), 'We got this!',(err)=>{
//     if(err) throw err
//     console.log('Write file complete!')

// fs.appendFile(path.join(__dirname, '../files','new.txt'),'\n\nThis is got',(err)=>{
//     if(err) throw err
//     console.log('Append complete!')
// })
// })