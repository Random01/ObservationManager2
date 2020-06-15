const FilterCsvExporter = require('./filter.csv-exporter.service');

class FilterCsvExporterFactory {

    getExporter() {
        return new FilterCsvExporter();
    }

}

module.exports = FilterCsvExporterFactory;