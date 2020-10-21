const fs = require('fs');
const { cpuUsage } = require('process');

const func = (filename) => {
    fs.access(filename, fs.constants.R_OK | fs.constants.W_OK, (err) => {
        console.log(`${err ? 'I dont\'t have access to the file ' : 'I can read or write the file ' }${filename}`);
    })
}

module.exports = func;