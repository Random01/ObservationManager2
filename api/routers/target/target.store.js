const Target = require('./target.model');
const BaseStore = require('./../common/base.store');
const CsvReader = require('./../../common/services/csvReader');
const path = require('path');
const _ = require('lodash');

class TargetStore extends BaseStore {
    constructor(db) {
        super(db, 'target', Target);
    }

    getAll() {
        return new Promise((success, fail) => {
            if (this.targets) {
                success(this.targets);
                return;
            }

            const reader = new CsvReader({
                path: path.normalize('E:\\WorkingProject\\InternalProjects\\ObservationManager22\\api\\data\\NGC_light.csv')
            });

            reader.read().then((data) => {
                // Name;Type;RA;Dec;Const;MajAx;MinAx;PosAng;B-Mag;V-Mag;J-Mag;H-Mag;K-Mag;SurfBr;Hubble;Cstar U-Mag;Cstar B-Mag;Cstar V-Mag;M;NGC;IC;Cstar Names;Identifiers;Common names;NED notes;OpenNGC notes 
                this.targets = _.map(data.rows, (row, rowIndex) => {
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

                    return new Target({
                        id: (rowIndex + 1),
                        name: name,
                        targetType: type,
                        alliases: identifiers != null
                            ? identifiers.split(',') : undefined
                    });
                });

                success(this.targets);
            }, fail);
        });
    }
}

module.exports = TargetStore;