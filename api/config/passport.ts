import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { UserModel } from '../routers/user/user.model';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'user[userName]',
      passwordField: 'user[password]',
    },
    (userName, password, done) => {
      UserModel.findOne({ userName })
        .exec()
        .then((user) => {
          if (!user || !user.validPassword(password)) {
            return done(null, false);
          }
          return done(null, user);
        })
        .catch(done);
    },
  ),
);

export default passport;
