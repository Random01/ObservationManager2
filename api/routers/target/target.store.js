const TargetSchema = require('./target.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

const CsvReader = require('./../../common/services/csvReader');
const _ = require('lodash');
const data = require('../../data/data');

class TargetStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('targets', TargetSchema));
    }

    getById({ id }) {
        return super.getById({ id, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName']
        ]});
    }

    search({
        name,
        maxCount = 10
    } = {}) {
        return new Promise((success, fail) => {
            this.model
                .find({
                    name: new RegExp(name)
                })
                .limit(maxCount)
                .exec((err, docs) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

    loadFromCsv() {
        const reader = new CsvReader({
            path: data.targetsCsvFilePath
        });

        return reader.read().then((data) => {
            // Name;Type;RA;Dec;Const;MajAx;MinAx;PosAng;B-Mag;V-Mag;J-Mag;H-Mag;K-Mag;SurfBr;Hubble;Cstar U-Mag;Cstar B-Mag;Cstar V-Mag;M;NGC;IC;Cstar Names;Identifiers;Common names;NED notes;OpenNGC notes 
            return _.map(data.rows, (row, rowIndex) => {
                const [
                    name,
                    type,
                    ra,
                    dec,
                    constellation,
                    MajAx,
                    MinAx,
                    PosAng,
                    bMag,
                    vMag,
                    jMag,
                    hMag,
                    kMag,
                    surfBr,
                    hubble,
                    cStarUMag,
                    cStarBMag,
                    cStarVMag,
                    messier,
                    ngc,
                    ic,
                    cStarNames,
                    identifiers,
                    commonNames,
                    nedNotes,
                    openNgcNotes
                ] = row;

                return {
                    name,
                    type,
                    ra: this.parseRa(ra),
                    dec: this.parseDec(dec),
                    constellation,
                    alliases: identifiers != null ? identifiers.split(',') : undefined
                };
            });
        });
    }

    parseRa(ra) {
        if (ra == null) {
            return null;
        }

        const [hours, minutes, seconds] = ra.split(':');
        return parseFloat(hours) * 15.0 +
            parseFloat(minutes) / 4.0 +
            parseFloat(seconds) / 240.0;
    }

    parseDec(dec) {
        if (dec == null) {
            return null;
        }

        let [degrees, arcminutes, arcseconds] = dec.split(':');

        degrees = parseFloat(degrees);

        return ((parseFloat(arcseconds) / 3600.0) +
            (parseFloat(arcminutes) / 60.0) +
            Math.abs(degrees)) * Math.sign(degrees);
    }

    upload() {
        return this.loadFromCsv().then((targets) => {
            return new Promise((success, fail) => {
                this.model.insertMany(targets, function (err) {
                    if (err) {
                        fail(err);
                    } else {
                        success();
                    }
                });
            });
        });
    }

    batchUpdate() {
        return new Promise((success, fail) => {

        });
    }
    
}

module.exports = TargetStore;
