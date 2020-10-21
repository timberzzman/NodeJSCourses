const fs = require('fs');

const func = (file, mode) => {
    try {
        fs.chmodSync(file, mode)
    } catch(err) {
        console.error(err)
    }
}

module.exports = func;