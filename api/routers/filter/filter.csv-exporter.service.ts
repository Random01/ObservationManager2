import { Response } from 'express';

import { BaseTxtExporter } from '../common';

import { Filter } from './filter.entity';

/**
 * Exports Filters to CSV file.
 */
export class FilterCsvExporter extends BaseTxtExporter {

    public export(res: Response, items: Filter[]) {
        res.set('Content-Type', 'text/plain');
        let content = 'Model;Vendor;Filter Type\r\n';
        items.forEach(({ model, vendor, filterType }) => {
            content += `${model};${vendor};${filterType}\r\n`;
        });
        res.send(Buffer.from(content));
    }

}
