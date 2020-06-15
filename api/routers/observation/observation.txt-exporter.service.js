const BaseTxtExporter = require('./../common/base-txt-exporter.service');

class ObservationTxtExporter extends BaseTxtExporter {

    export(res, items) {
        res.set('Content-Type', 'text/plain');
        res.send(Buffer.from('some html'));
    }

}

module.exports = ObservationTxtExporter;