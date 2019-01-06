const ConstellationStore = require('./routers/constellation/constellation.store');
const TargetStore = require('./routers/target/target.store');
const mongoose = require('mongoose');

mongoose.connect(require('./config/db').url);

const dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console, 'connection error:'));
dataBase.once('open', () => {

    updateTargets();

    console.log(`Data base is ready!`);
});

function uploadConstellations(dataBase) {
    const constellationStore = new ConstellationStore(dataBase);

    console.log(`Upload constellations!`);
    constellationStore.upload().then(() => {
        console.log(`Constellations have been uploaded!`);
    });
}

function updateTargets() {
    const targetStore = new TargetStore(dataBase);

    console.log(`Loading targets!`);
    targetStore.loadFromCsv().then((targets) => {

        console.log(`Targets have been loaded!`);
    });
}

function parseRa(ra) {
    if (ra == null) {
        return null;
    }

    const [hours, minutes, seconds] = ra.split(':');
    return parseFloat(hours) * 15.0
        + parseFloat(minutes) / 4.0
        + parseFloat(seconds) / 240.0;
}

function parseDec(dec) {
    if (dec == null) {
        return null;
    }

    let [degrees, arcminutes, arcseconds] = dec.split(':');

    degrees = parseFloat(degrees);

    return ((parseFloat(arcseconds) / 3600.0)
        + (parseFloat(arcminutes) / 60.0)
        + Math.abs(degrees)) * Math.sign(degrees);
}