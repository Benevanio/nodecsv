const fs = require ('fs');

class Reader {
    Reader(filePath) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }

}

module.exports = Reader;