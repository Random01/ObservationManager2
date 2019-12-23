const BaseTxtExporter = require('./../common/baseTxtExporter.service');

class ObservationTxtExporter extends BaseTxtExporter {

    export(res, items) {
        res.set('Content-Type', 'text/plain');
        res.send(Buffer.from('some html'));
    }

}

module.exports = ObservationTxtExporter;