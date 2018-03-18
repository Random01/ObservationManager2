'use strict';

const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3001;
const db = require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {
    if (err) {
        return console.log(err);
    }

    require('./routers/eyepieces/eyepiecesRouter')(app, database);
    require('./routers/scopes/scopesRouter')(app, database);
    require('./routers/sites/sitesRouter')(app, database);
    require('./routers/targets/targetsRouter')(app, database);
    require('./routers/observations/observationsRouter')(app, database);
    require('./routers/sessions/sessionsRouter')(app, database);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
});
