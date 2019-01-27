const CsvReader = require('./../../common/services/csvReader');
const _ = require('lodash');
const data = require('../../data/data');
const TargetType = require('./target-type.model');

class TargetCsvLoaderService {

    constructor() {
        this.typeToTypeMap = new Map();

        this.typeToTypeMap.set('*', TargetType.Star);
        this.typeToTypeMap.set('**', TargetType.DoubleStar);
        this.typeToTypeMap.set('*Ass', TargetType.Asterism);
        this.typeToTypeMap.set('Cl+N', TargetType.UnspecifiedDeepSkyObject);
        this.typeToTypeMap.set('Dup', TargetType.UnspecifiedDeepSkyObject);
        this.typeToTypeMap.set('Neb', TargetType.BrightNebula);
        this.typeToTypeMap.set('G', TargetType.Galaxy);
        this.typeToTypeMap.set('GCl', TargetType.GlobularCluster);
        this.typeToTypeMap.set('GGroup', TargetType.UnspecifiedDeepSkyObject);
        this.typeToTypeMap.set('GPair', TargetType.UnspecifiedDeepSkyObject);
        this.typeToTypeMap.set('GTrpl', TargetType.UnspecifiedDeepSkyObject);
        this.typeToTypeMap.set('HII', TargetType.BrightNebula);
        this.typeToTypeMap.set('Neb', TargetType.BrightNebula);
        this.typeToTypeMap.set('NonEx', TargetType.UnspecifiedDeepSkyObject);
        this.typeToTypeMap.set('Nova', TargetType.BrightNebula);
        this.typeToTypeMap.set('OCl', TargetType.OpenCluster);
        this.typeToTypeMap.set('Other', TargetType.UnspecifiedDeepSkyObject);
        this.typeToTypeMap.set('PN', TargetType.PlanetaryNebula);
        this.typeToTypeMap.set('RfN', TargetType.BrightNebula);
        this.typeToTypeMap.set('SNR', TargetType.BrightNebula);
        this.typeToTypeMap.set('EmN', TargetType.BrightNebula);
    }

    static parseRa(ra) {
        if (ra == null) {
            return null;
        }

        const [hours, minutes, seconds] = ra.split(':');
        return parseFloat(hours) * 15.0 +
            parseFloat(minutes) / 4.0 +
            parseFloat(seconds) / 240.0;
    }

    static parseDec(dec) {
        if (dec == null) {
            return null;
        }

        let [degrees, arcminutes, arcseconds] = dec.split(':');

        degrees = parseFloat(degrees);

        return ((parseFloat(arcseconds) / 3600.0) +
            (parseFloat(arcminutes) / 60.0) +
            Math.abs(degrees)) * Math.sign(degrees);
    }

    parseType(type) {
        return this.typeToTypeMap.get(type);
    }

    static parseName(name) {
        const [catalogName, number] = name.match(/(([(NGC)|(IC)])+)|(([0-9])+)/g);

        return `${catalogName} ${number.replace(/^0+/g, '')}`;
    }

    static parseAliases(identifiers) {
        identifiers != null ? identifiers.split(',') : undefined;
        if (identifiers == null || identifiers.length == 0) {
            return undefined;
        }
        return identifiers;
    }

    static parseFloat(value) {
        try {
            value = parseFloat(value);
            if (!isNaN(value)) {
                return value;
            }
        } catch (ex) {
        }
        return undefined;
    }

    load() {
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
                    name: TargetCsvLoaderService.parseName(name),
                    originalName: name,
                    type: this.parseType(type),
                    ra: TargetCsvLoaderService.parseRa(ra),
                    dec: TargetCsvLoaderService.parseDec(dec),
                    constellation,
                    aliases: TargetCsvLoaderService.parseAliases(identifiers),
                    visMag: TargetCsvLoaderService.parseFloat(vMag),
                    surfBr: TargetCsvLoaderService.parseFloat(surfBr)
                };
            });
        });
    }

}

module.exports = TargetCsvLoaderService;
