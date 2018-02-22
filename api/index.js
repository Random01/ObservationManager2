'use strict';

const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3001;
const db = require('./config/db');
const eyepieceRouter = require('./routers/eyepieces/eyepiecesRouter');
const scopesRouter = require('./routers/scopes/scopesRouter');

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) {
        return console.log(err);
    }

    eyepieceRouter(app, database);
    scopesRouter(app, database);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
});
