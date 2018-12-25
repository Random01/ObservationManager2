const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const session = require('express-session');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'conduit',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));

mongoose.connect(require('./config/db').url);

const isProduction = process.env.NODE_ENV === 'production';
if (!isProduction) {
    mongoose.set('debug', true);
}

const passport = require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

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
    require('./routers/constellation/constellation.router')(app, dataBase);

    app.use('/*', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`);
    });
});
