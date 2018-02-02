const express = require('express');
const app = express();
const port = 3001;
const eyepieceRouter = require('./routers/eyepieces/eyepiecesRouter');

eyepieceRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});