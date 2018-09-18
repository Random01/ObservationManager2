const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const UserSchema = require('../routers/user/user.schema');

const User = mongoose.model('users');

passport.use(new LocalStrategy({
    usernameField: 'user[userName]',
    passwordField: 'user[password]'
}, (userName, password, done) => {
    User
        .findOne({ userName: userName })
        .then((user) => {
            if (!user || !user.validPassword(password)) {
                return done(null, false, { errors: { 'user name or password': 'is invalid' } });
            }

            return done(null, user);
        }).catch(done);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

module.exports = passport;