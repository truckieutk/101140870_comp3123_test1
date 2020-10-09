const fs = require('fs');
var express = require('express')
var app = express()

app.use(express.static('Logs'))

for(let i=0; i<10; i++) {
    fs.writeFile('./Logs/log.txt','Hello', (err,data) => {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    });
}

//remove file

const path = './Logs/log.txt';
fs.unlink(path, (err) => {
    if (err) {
        console.error(err)
        return;
    }

    //file removed
})

//remove directory
const dir ='Logs';
try {
    fs.rmdirSync(dir, { recursive: true });

    console.log(`${dir} is deleted!`);
} catch (err) {
    console.error(`Error while deleting ${dir}.`);
}
