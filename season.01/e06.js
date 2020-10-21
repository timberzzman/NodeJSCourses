const fs = require('fs');

const func = (filename) => {
    try {
        fs.unlinkSync(filename);
        console.log(`File ${filename} successfully removed!`);
    } catch(err) {
        console.error(err.message)
    }
}

module.exports = func;