import { expressjwt } from 'express-jwt';

import { Request } from 'express';

import { authConfig } from '../../config';

function getTokenFromHeader(req: Request) {
  return req.headers.authorization;
}

if (!authConfig.secret) {
  throw new Error('Secret should be provided.');
}

export const auth = {
  required: expressjwt({
    secret: authConfig.secret,
    requestProperty: 'payload',
    getToken: getTokenFromHeader,
    algorithms: ['HS256'],
  }),
  optional: expressjwt({
    secret: authConfig.secret,
    requestProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader,
    algorithms: ['HS256'],
  }),
};
