import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import passport from 'passport';

import { auth } from '../authentication';
import { BaseEntityRouter } from '../common';

import { UserStore } from './user.store';
import { UserModel } from './user.model';

// todo: use user here
export class UserRouter extends BaseEntityRouter<any, UserStore> {
  constructor(router: core.Router, store = new UserStore()) {
    super(router, store);
  }

  protected override setUp() {
    this.router.get('/', auth.required, this.getUserById.bind(this));
    this.router.post('/', this.createNewUser.bind(this));
    this.router.post('/login', this.logIn.bind(this));
    this.router.get('/user', auth.required, this.getUserInfo.bind(this));
  }

  private getUserInfo(req: Request, res: Response, next: any) {
    this.store
      .getById({ id: this.getUserId(req) })
      .then((user: any) => {
        if (!user) {
          return res.sendStatus(401);
        } else {
          return res.json({
            success: true,
            user: user.toAuthJSON(),
          });
        }
      })
      .catch(next);
  }

  private createNewUser(req: Request, res: Response, next: any) {
    const { userName, password, email } = req.body;

    if (!userName) {
      return res.status(422).json({
        success: false,
        errors: { userName: "can't be blank" },
      });
    }

    if (!email) {
      return res.status(422).json({
        success: false,
        errors: { email: "can't be blank" },
      });
    }

    if (!password) {
      return res.status(422).json({
        success: false,
        errors: { password: "can't be blank" },
      });
    }

    const user = new UserModel();

    user.userName = userName;
    user.email = email;
    (user as any).setPassword(password);

    user
      .save()
      .then(() =>
        res.json({
          success: true,
          user: (user as any).toAuthJSON(),
        }),
      )
      .catch(next);
  }

  private getUserById(req: Request, res: Response) {
    this.store.getById({ id: this.getUserId(req) }).then((user) => {
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
        errors: { userName: "can't be blank" },
      });
    }

    if (!req.body.user.password) {
      return res.status(422).json({
        success: false,
        errors: { password: "can't be blank" },
      });
    }

    passport.authenticate('local', { session: false }, (err: any, user: any, info: any) => {
      if (err) {
        return next(err);
      }

      if (user) {
        user.token = user.generateJWT();
        return res.json({
          success: true,
          user: user.toAuthJSON(),
        });
      } else {
        return res.status(422).json(info);
      }
    })(req, res, next);
  }
}
