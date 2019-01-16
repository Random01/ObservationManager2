const ConstellationStore = require('./routers/constellation/constellation.store');
const TargetModel = require('./routers/target/target.model');
const ObservingProgramModel = require('./routers/observing-program/observing-program.model');
const mongoose = require('mongoose');
const _ = require('lodash');

const CsvReader = require('./common/services/csvReader');
const data = require('./data/data');

mongoose.connect(require('./config/db').url);

const dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console, 'connection error:'));
dataBase.once('open', () => {

    //uploadH400ObservingProgram();

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
    console.log(`Loading targets!`);
    targetStore.loadFromCsv().then((targets) => {
        const groups = _.groupBy(targets, (t) => t.type);
        console.log(`Targets have been loaded!`);
    });
}

function uploadH400ObservingProgram() {
    const reader = new CsvReader({
        path: data.h400FilePath
    });

    reader
        .read()
        .then((result) => {
            const targetNames = result.rows.map(([targetName]) => 'NGC' + targetName.padStart(4, '0'));
            return TargetModel.findByNames(targetNames);
        })
        .then((targets) => {
            return ObservingProgramModel
                .getById('5c30b3dc82bdf1230406f400')
                .then((observingProgram) => {
                    observingProgram.targets = targets.map(({ _id }) => _id);
                    observingProgram.save();
                });
        });
}

function updateName(name) {

}
