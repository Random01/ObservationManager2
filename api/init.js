const ConstellationStore = require('./routers/constellation/constellation.store');
const TargetModel = require('./routers/target/target.model');
const ObservingProgramModel = require('./routers/observing-program/observing-program.model');
const mongoose = require('mongoose');
const _ = require('lodash');

const TargetCsvLoaderService = require('./routers/target/target-csv-loader.service');

mongoose.connect(require('./config/db').url);

const dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console, 'connection error:'));
dataBase.once('open', async function () {

    const service = new TargetCsvLoaderService();
    service.load().then(async function (targets) {

        let targetIndex = 0;
        for (const target of targets) {
            //await updateTarget(target);

            console.log('Progress: ' + ((targetIndex + 1) / targets.length) * 100);
            targetIndex++;
        }
    });

    console.log(`Data base is ready!`);
});

async function updateTarget(target) {
    return new Promise((success, fail) => {

        const updatedTarget = {
            name: target.name,
            description: target.description,
            type: target.type,
            constellation: target.constellation,
            visMag: target.visMag,
            surfBr: target.surfBr
        };

        if (_.isFinite(target.ra) && _.isFinite(target.dec)) {
            updatedTarget.position = {
                ra: target.ra,
                dec: target.dec
            };
        }

        Object
            .keys(updatedTarget)
            .forEach((key) => (updatedTarget[key] == null) && delete updatedTarget[key]);

        TargetModel
            .updateOne({ name: new RegExp(target.originalName, 'i') }, updatedTarget).exec((err, t) => {
                if (err) {
                    fail(err);
                } else {
                    success(t);
                }
            });
    });
}

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
