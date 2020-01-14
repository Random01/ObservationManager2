const SessionTxtExporter = require('./session.txt-exporter.service');

class SessionExporterFactory {

    getExporter() {
        return new SessionTxtExporter();
    }

}

module.exports = SessionExporterFactory;