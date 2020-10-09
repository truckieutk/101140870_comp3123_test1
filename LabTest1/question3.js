const fs = require('fs');
var express = require('express')
var app = express()

app.use(express.static('Logs'))

//create directory
var dir = './Logs';

if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
}
else
{
    console.log("Directory already exist");
}


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

const dirpath = require("./Logs")

const removeDir = function(dirpath) {
    if (fs.existsSync(dirpath)) {
        const files = fs.readdirSync(dirpath)

        if (files.length > 0) {
            files.forEach(function(filename) {
                if (fs.statSync(dirpath + "/" + filename).isDirectory()) {
                    removeDir(dirpath + "/" + filename)
                } else {
                    fs.unlinkSync(dirpath + "/" + filename)
                }
            })
        } else {
            console.log("No files found in the directory.")
        }
    } else {
        console.log("Directory path not found.")
    }
}

const pathToDir = dirpath.join(__dirname, "Logs")
removeDir(pathToDir)

//remove directory
const dir ='Logs';
try {
    fs.rmdirSync(dir, { recursive: true });

    console.log(`${dir} is deleted!`);
} catch (err) {
    console.error(`Error while deleting ${dir}.`);
}
