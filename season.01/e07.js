const fs = require('fs');

const func = (filename) => {
    if (fs.lstatSync(filename).isDirectory()) {
        console.log(`The argument [ ${filename} ] is a directory`);
    } else if(fs.lstatSync(filename).isFile()) {
        console.log(`The argument [ ${filename} ] is a file`);
    } else
        console.log(`The argument [ ${filename} ] is another unix things`);

}

module.exports = func;