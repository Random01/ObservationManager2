const express = require('express');
const UserStore = require('../user/user.store');
const passport = require('passport');
const auth = require('../authentication/auth');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app, db) => {

    const router = express.Router();
    const store = new UserStore(db);

    router.get('/', auth.required, (req, res) => {
        const userId = req.payload ? req.payload.id : null;
        store.getById(userId).then((user) => {
            if (!user) {
                return res.sendStatus(401);
            } else {
                return res.json({ user: user.toAuthJSON() });
            }
        });
    });

    router.post('/', (req, res, next) => {
        const { userName, password, email } = req.body;

        if (!userName) {
            return res.status(422).json({ errors: { userName: 'can\'t be blank' } });
        }

        if (!email) {
            return res.status(422).json({ errors: { email: 'can\'t be blank' } });
        }

        if (!password) {
            return res.status(422).json({ errors: { password: 'can\'t be blank' } });
        }

        const user = new User();

        user.userName = userName;
        user.email = email;
        user.setPassword(password);

        user.save().then(() => {
            return res.json({ user: user.toAuthJSON() });
        }).catch(next);
    });

    router.post('/login', (req, res, next) => {
        if (!req.body.user.userName) {
            return res.status(422).json({ errors: { userName: 'can\'t be blank' } });
        }

        if (!req.body.user.password) {
            return res.status(422).json({ errors: { password: 'can\'t be blank' } });
        }

        passport.authenticate('local', { session: false }, (err, user, info) => {
            if (err) {
                return next(err);
            }

            if (user) {
                user.token = user.generateJWT();
                return res.json({ user: user.toAuthJSON() });
            } else {
                return res.status(422).json(info);
            }
        })(req, res, next);
    });

    app.use('/users', router);
};