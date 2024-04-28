let fs = require('fs');
let util = require('util');
class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filename, data) {
        try {
            await this.writer(filename, data);
            return true;
        } catch (error) {
            console.log('Error: ', error);
            return false;
        }
    }
    

}

module.exports = Writer;