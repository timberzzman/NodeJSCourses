const fs = require('fs');

const func = (file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) return console.error(err)
        console.log(data)
    })
}

module.exports = func;