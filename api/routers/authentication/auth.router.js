const express = require('express');
const passport = require('jsonwebtoken');
const fs = require('fs');

const RSA_PRIVATE_KEY = fs.readFileSync('./config/private.key');

module.exports = (app, db) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.status(200).send('Ok!');
    });

    router.post('/login', (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;

        if (validateEmailAndPassword()) {
            const userId = findUserIdForEmail(email);

            const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 120,
                subject: userId
            });

            res.cookie('SESSIONID', jwtBearerToken, { httpOnly: true, secure: true });
        }
        else {
            // send status 401 Unauthorized
            res.sendStatus(401);
        }
    });

    app.use('/authentication', router);
};