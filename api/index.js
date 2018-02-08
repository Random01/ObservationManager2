const express = require('express');
const app = express();
const port = 3001;
const eyepieceRouter = require('./routers/eyepieces/eyepiecesRouter');
const scopesRouter = require('./routers/scopes/scopesRouter');

eyepieceRouter(app);
scopesRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});