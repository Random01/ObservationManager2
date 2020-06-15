const BaseTxtExporter = require('../common/base-txt-exporter.service');

class FilterCsvExporter extends BaseTxtExporter {

    export(res, items) {
        res.set('Content-Type', 'text/plain');
        let content = 'Model;Vendor;Filter Type\r\n';
        items.forEach(({ model, vendor, filterType }) => {
            content += `${model};${vendor};${filterType}\r\n`;
        });
        res.send(Buffer.from(content));
    }

}

module.exports = FilterCsvExporter;