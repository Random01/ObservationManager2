const fs = require('fs');

class CsvReader {

    constructor({
        path
    }) {
        this.path = path;
    }

    read() {
        return new Promise((success, fail) => {
            fs.readFile(this.path, (err, data) => {
                if (err) {
                    fail(err);
                    return;
                }

                success(data);
            });
        });
    }
}