'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3001;
const db = require('./config/db');
const mongoose = require('mongoose');

const hash = require('pbkdf2-password')();
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'shhhh, very secret'
}));

var users = {
    tj: { name: 'tj' }
};

hash({ password: 'foobar' }, function (err, pass, salt, hash) {
    if (err) throw err;
    // store the salt & hash in the "db"
    users.tj.salt = salt;
    users.tj.hash = hash;
});

mongoose.connect(db.url);

const dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console, 'connection error:'));
dataBase.once('open', () => {
    require('./routers/eyepiece/eyepiece.router')(app, dataBase);
    require('./routers/scope/scope.router')(app, dataBase);
    require('./routers/site/site.router')(app, dataBase);
    require('./routers/target/target.router')(app, dataBase);
    require('./routers/observation/observation.router')(app, dataBase);
    require('./routers/session/session.router')(app, dataBase);
    require('./routers/filter/filter.router')(app, dataBase);
    require('./routers/user/user.router')(app, dataBase);
    require('./routers/lens/lens.router')(app, dataBase);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
});
