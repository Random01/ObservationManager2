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
        .then((user: any) => {
          if (!user || !user.validPassword(password)) {
            return done(null, false, { errors: { 'user name or password': 'is invalid' } } as any);
          }

          return done(null, user);
        })
        .catch(done);
    },
  ),
);

export default passport;
