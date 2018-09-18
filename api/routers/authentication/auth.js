const jwt = require('express-jwt');
const secret = require('../../config/auth').secret;

function getTokenFromHeader(req) {
    return req.headers.authorization;
}

const auth = {
    required: jwt({
        secret: secret,
        userProperty: 'payload',
        getToken: getTokenFromHeader
    }),
    optional: jwt({
        secret: secret,
        userProperty: 'payload',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
};

module.exports = auth;