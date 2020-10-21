const fs = require('fs');

const func = (source, dest, first = true) => {
    path = process.cwd()
    if (!(fs.existsSync(source)) || !(fs.lstatSync(source).isDirectory())) {
        //console.error("There is an error")
        return false
    }
    else {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, {recursive: true})
        }
        files = fs.readdirSync(source)
        files.forEach(element => {
            if (fs.lstatSync(`${source}/${element}`).isDirectory()) {
                func(`${source}/${element}`, `${dest}/${element}`, false)   
            }
            else {
                fs.copyFileSync(`${source}/${element}`, `${dest}/${element}`)
            }
        });
    }
    if (first) {
        console.log(`Directory [ ${source} ] successfully duplicated into [ ${dest} ]`)
    }
    return true
}

module.exports = func;