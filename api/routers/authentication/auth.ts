import type { Request, RequestHandler } from 'express';
import { expressjwt, UnauthorizedError } from 'express-jwt';
import { isObjectIdOrHexString } from 'mongoose';

import { getAuthSecret } from '../../config/auth-config';

type AuthenticatedRequest = Request & { payload?: { id?: unknown } };

export function getUserId(req: AuthenticatedRequest): string | undefined {
  const id = req.payload?.id;
  return typeof id === 'string' ? id : undefined;
}

const validateIdentity: RequestHandler = (req: AuthenticatedRequest, _res, next) => {
  if (req.payload !== undefined && !isObjectIdOrHexString(getUserId(req))) {
    return next(new UnauthorizedError('invalid_token', { message: 'Invalid token identity.' }));
  }
  next();
};

const jwtOptions = {
  secret: getAuthSecret,
  requestProperty: 'payload',
  getToken: (req: Request) => req.headers.authorization,
  algorithms: ['HS256' as const],
};

export const auth = {
  required: [expressjwt(jwtOptions), validateIdentity],
  optional: [expressjwt({ ...jwtOptions, credentialsRequired: false }), validateIdentity],
};
