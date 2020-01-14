const EyepieceCsvExporter = require('./eyepiece.csv-exporter.service');

class EyepieceExporterFactory {

    getExporter() {
        return new EyepieceCsvExporter();
    }

}

module.exports = EyepieceExporterFactory;