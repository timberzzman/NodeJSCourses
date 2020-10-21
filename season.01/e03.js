const fs = require('fs')

const func = (file) => {
    try {
        const data = fs.readFileSync(file, 'utf8')
        console.log(data)
    } catch (err) {
        console.error(err)
    }

}

module.exports = func;