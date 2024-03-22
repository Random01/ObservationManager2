import express from 'express';
import session from 'express-session';
import compression from 'compression';
import errorhandler from 'errorhandler';

import mongoose from 'mongoose';

import MongoStore from 'connect-mongo';

import passport from './config/passport';
import { dbConfig } from './config';

import { RouterProvider } from './routers';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (!dbConfig.url) {
  throw new Error('DB connection string should be provided.');
}

app.use(session({
  secret: 'conduit',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: dbConfig.url,
  }),
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
    console.log(`Server started on port ${PORT}!`);
  });
});
