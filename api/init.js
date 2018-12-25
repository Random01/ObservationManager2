const ConstellationStore = require('./routers/constellation/constellation.store');
const mongoose = require('mongoose');

mongoose.connect(require('./config/db').url);

const dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console, 'connection error:'));
dataBase.once('open', () => {

    const constellationStore = new ConstellationStore(dataBase);

    console.log(`Upload constellations!`);
    constellationStore.upload().then(() => {
        console.log(`Constellations have been uploaded!`);
    });

    console.log(`Data base is ready!`);
});
