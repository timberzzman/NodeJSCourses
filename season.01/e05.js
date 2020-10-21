const fs = require('fs');

const func = (filename, text) => {
    fs.writeFile(filename, text, err => {
        if (err) {
            return console.error(err);
        }
    })
    console.log(`File ${filename} successfully created!`);
}

module.exports = func;