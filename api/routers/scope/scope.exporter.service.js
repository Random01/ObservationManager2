const ScopeTxtExporter = require('./scope.txt-exporter.service');

class ScopeExporterFactory {

    getExporter() {
        return new ScopeTxtExporter();
    }

}

module.exports = ScopeExporterFactory;