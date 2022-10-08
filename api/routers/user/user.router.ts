import express, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import passport from 'passport';

import { auth } from '../authentication';
import { RouterFactory } from '../common';

import { UserStore } from './user.store';
import { UserModel } from './user.model';

class UserRouterFactory extends RouterFactory {

  public static override create(app: core.Express, store: UserStore, path: string) {
    const router = express.Router();
    const rf = new UserRouterFactory(store, router, undefined);

    app.use('/api' + path, router);

    return rf;
  }

  private getUserById(req: Request, res: Response) {
    this.store.getById(this.getUserId(req)).then((user: any) => {
      if (!user) {
        return res.sendStatus(401);
      } else {
        return res.json({
          success: true,
          user: user.toAuthJSON(),
        });
      }
    });
  }

  private logIn(req: Request, res: Response, next: any) {
    if (!req.body.user.userName) {
      return res.status(422).json({
        success: false,
        errors: { userName: 'can\'t be blank' },
      });
    }

    if (!req.body.user.password) {
      return res.status(422).json({
        success: false,
        errors: { password: 'can\'t be blank' },
      });
    }

    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (user) {
        user.token = user.generateJWT();
        return res.json({
          success: true,
          user: user.toAuthJSON()
        });
      } else {
        return res.status(422).json(info);
      }
    })(req, res, next);
  }

  private createNewUser(req: Request, res: Response, next: any) {
    const { userName, password, email } = req.body;

    if (!userName) {
      return res.status(422).json({
        success: false,
        errors: { userName: 'can\'t be blank' },
      });
    }

    if (!email) {
      return res.status(422).json({
        success: false,
        errors: { email: 'can\'t be blank' },
      });
    }

    if (!password) {
      return res.status(422).json({
        success: false,
        errors: { password: 'can\'t be blank' },
      });
    }

    const user: any = new UserModel();

    user.userName = userName;
    user.email = email;
    user.setPassword(password);

    user.save().then(() => res.json({
      success: true,
      user: user.toAuthJSON(),
    })).catch(next);
  }

  private getUserInfo(req: Request, res: Response, next: any) {
    this.store.getById({ id: this.getUserId(req) }).then((user: any) => {
      if (!user) {
        return res.sendStatus(401);
      } else {
        return res.json({
          success: true,
          user: user.toAuthJSON(),
        });
      }
    }).catch(next);
  }

  protected override setUp() {
    this.router.get('/', auth.required, this.getUserById.bind(this));
    this.router.post('/', this.createNewUser.bind(this));
    this.router.post('/login', this.logIn.bind(this));
    this.router.get('/user', auth.required, this.getUserInfo.bind(this));
  }

}

export class UserRouter {

  constructor(app: core.Express) {
    UserRouterFactory.create(app, new UserStore(), '/users');
  }

}
