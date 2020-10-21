const path = require('path')

const func = (arg) => {
    console.log(path.extname(arg))
}

module.exports = func;