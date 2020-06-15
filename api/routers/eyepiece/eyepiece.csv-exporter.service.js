const BaseTxtExporter = require('../common/base-txt-exporter.service');

class EyepieceCsvExporter extends BaseTxtExporter {

    export(res, items) {
        res.set('Content-Type', 'text/plain');
        let content = 'Model;Vendor;Focal Length (mm);Apparent FOV (deg)\r\n';
        items.forEach(({ model, vendor, focalLength, apparentFOV }) => {
            content += `${model};${vendor};${focalLength};${apparentFOV}\r\n`;
        });
        res.send(Buffer.from(content));
    }

}

module.exports = EyepieceCsvExporter;