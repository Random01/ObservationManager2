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

    require('./routers/eyepiece/eyepiece.router')(app, database);
    require('./routers/scope/scope.router')(app, database);
    require('./routers/site/site.router')(app, database);
    require('./routers/target/target.router')(app, database);
    require('./routers/observation/observation.router')(app, database);
    require('./routers/session/session.router')(app, database);
    require('./routers/filter/filter.router')(app, database);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
});
