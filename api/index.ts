import express from 'express';
import session from 'express-session';
import compression from 'compression';
import errorhandler from 'errorhandler';

import mongoose from 'mongoose';

import passport from './config/passport';
import { dbConfig } from './config';

import { RouterProvider } from './routers';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'conduit',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(dbConfig.url);

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler());
  mongoose.set('debug', true);
} else {
  app.use(compression({ level: 1 }));
}

const dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console, 'connection error:'));
dataBase.once('open', () => {
  new RouterProvider(app);

  app.use('/*', (_, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

  app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}!`);
  });
});
