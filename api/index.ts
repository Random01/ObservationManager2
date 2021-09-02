import express from 'express';
import session from 'express-session';

import mongoose from 'mongoose';

import passport from './config/passport';
import { dbConfig } from './config';

import { RouterProvider } from './routers';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'conduit',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
}));

mongoose.connect(dbConfig.url);

const isProduction = process.env.NODE_ENV === 'production';
if (!isProduction) {
    mongoose.set('debug', true);
}

app.use(passport.initialize());
app.use(passport.session());

const dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console, 'connection error:'));
dataBase.once('open', () => {
    new RouterProvider(app, dataBase);

    app.use('/*', (_, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`);
    });
});
