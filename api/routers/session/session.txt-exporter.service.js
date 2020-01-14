const BaseTxtExporter = require('./../common/baseTxtExporter.service');

class SessionTxtExporter extends BaseTxtExporter {

    /**
     * 
     * @param {*} res 
     * @param {*} session
     * @param {Array.<*>} session.observations
     */
    export(res, session) {
        res.set('Content-Type', 'text/plain');

        let content = 'Session';

        res.send(Buffer.from(content));
    }

}

module.exports = SessionTxtExporter;