const BaseTxtExporter = require('./../common/baseTxtExporter.service');

class ScopeTxtExporter extends BaseTxtExporter {

    export(res, items) {
        res.set('Content-Type', 'text/plain');
        let content = 'Model;Aperture;Focal Length;Vendor\r\n';
        items.forEach(({ model, aperture, focalLength, vendor }) => {
            content += `${model};${aperture};${focalLength};${vendor}\r\n`;
        });
        res.send(Buffer.from(content));
    }

}

module.exports = ScopeTxtExporter;