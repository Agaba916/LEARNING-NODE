const fsPromises= require('fs').promises;
const path = require('path');

const fileOps = async ()=>{
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files','starter.txt'), 'utf8');
        console.log("File contents:", data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promisesWrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'files', 'promisesWrite.txt'), '\n\nWe have done this all.', 'utf8');
        await fsPromises.appendFile(path.join(__dirname,'files', 'promisesComplete.txt'), path.join(__dirname, 'files', 'promisesComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promisesComplete.txt'), 'utf8');
        console.log('New data: ', newData)

    } catch (err) {
        console.error(err)
    }
}

fileOps();

