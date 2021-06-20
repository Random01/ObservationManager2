import jwt from 'express-jwt';

import { Request } from 'express';

import { authConfig } from '../../config';

function getTokenFromHeader(req: Request) {
    return req.headers.authorization;
}

export const auth = {
    required: jwt({
        secret: authConfig.secret,
        userProperty: 'payload',
        getToken: getTokenFromHeader,
        algorithms: ['HS256'],
    }),
    optional: jwt({
        secret: authConfig.secret,
        userProperty: 'payload',
        credentialsRequired: false,
        getToken: getTokenFromHeader,
        algorithms: ['HS256'],
    }),
};
