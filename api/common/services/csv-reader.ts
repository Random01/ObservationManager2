import fs from 'fs';
import readline from 'readline';

interface CsvReadResult {
    definition: string[];
    rows: string[][];
};

export class CsvReader {

    private readonly path: string;

    constructor({ path }: { path: string }) {
        this.path = path;
    }

    public read({ separator } = { separator: ';' }): Promise<CsvReadResult> {
        return new Promise((success, fail) => {
            const readLine = readline.createInterface({
                input: fs.createReadStream(this.path),
                console: false,
            } as any);

            const lines: string[][] = [];
            readLine
                .on('line', line => lines.push(line.split(separator)))
                .on('close', () => {
                    const [definition, ...rows] = lines;

                    success({
                        definition,
                        rows,
                    });
                })
                .on('error', fail);
        });
    }
}
