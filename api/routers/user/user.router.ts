import type { NextFunction, Request, Response, Router } from 'express';
import passport from 'passport';

import { auth, getUserId } from '../authentication';
import { BaseRouter } from '../common';
import { HttpError } from '../common/router/http-error';
import { UserStore } from './user.store';
import type { UserDocument } from './user.interface';

export class UserRouter extends BaseRouter {
  constructor(router: Router, private readonly store = new UserStore()) {
    super(router);
  }

  public override registerRoutes(): void {
    this.router.get('/', auth.required, this.getUserInfo.bind(this));
    this.router.post('/', this.createNewUser.bind(this));
    this.router.post('/login', this.logIn.bind(this));
    this.router.get('/user', auth.required, this.getUserInfo.bind(this));
  }

  private async getUserInfo(req: Request, res: Response): Promise<void> {
    const user = await this.store.getById(getUserId(req));
    if (!user) {
      throw new HttpError(401, 'User account not found.');
    }
    res.json({ success: true, user: user.toAuthJSON() });
  }

  private async createNewUser(req: Request, res: Response): Promise<void> {
    const { userName, password, email } = req.body ?? {};
    if (typeof userName !== 'string' || !userName.trim()) {
      this.sendMissingField(res, 'userName');
      return;
    }
    if (typeof email !== 'string' || !email.trim()) {
      this.sendMissingField(res, 'email');
      return;
    }
    if (typeof password !== 'string' || !password) {
      this.sendMissingField(res, 'password');
      return;
    }

    const user = await this.store.create({ userName, email, password });
    res.json({ success: true, user: user.toAuthJSON() });
  }

  private logIn(req: Request, res: Response, next: NextFunction): void {
    const { userName, password } = req.body?.user ?? {};
    if (typeof userName !== 'string' || !userName.trim()) {
      this.sendMissingField(res, 'userName');
      return;
    }
    if (typeof password !== 'string' || !password) {
      this.sendMissingField(res, 'password');
      return;
    }

    passport.authenticate('local', { session: false }, (error: unknown, user: UserDocument | false) => {
      if (error) {
        return next(error);
      }
      if (!user) {
        return res.status(422).json({ errors: { 'user name or password': 'is invalid' } });
      }
      res.json({ success: true, user: user.toAuthJSON() });
    })(req, res, next);
  }

  private sendMissingField(res: Response, field: string): void {
    res.status(422).json({
      success: false,
      errors: { [field]: "can't be blank" },
    });
  }
}
