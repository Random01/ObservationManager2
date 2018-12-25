const fs = require('fs');
const readline = require('readline');

class CsvReader {

    constructor({
        path
    }) {
        this.path = path;
    }

    read({ separator } = { separator: ';' }) {
        return new Promise((success, fail) => {
            const rl = readline.createInterface({
                input: fs.createReadStream(this.path),
                console: false
            });

            const lines = [];
            rl
                .on('line', (line) => lines.push(line.split(separator)))
                .on('close', () => {
                    let [definition, ...rows] = lines;

                    success({
                        definition,
                        rows
                    });
                })
                .on('error', fail);
        });
    }
}

module.exports = CsvReader;