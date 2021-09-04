


import { map } from 'lodash';

import { CsvReader } from '../../common/services/csv-reader';
import { DataConfig } from '../../data';

import { TargetType } from './target-type.enum';
import { Target } from './target.interface';

const enum TargetFieldIndex {
    name = 0,
    type = 1,
    ra = 2,
    dec = 3,
    constellation = 4,
    MajAx = 5,
    MinAx = 6,
    PosAng = 7,
    bMag = 8,
    vMag = 9,
    jMag = 10,
    hMag = 11,
    kMag = 12,
    surfBr = 13,
    hubble = 14,
    cStarUMag = 15,
    cStarBMag = 16,
    cStarVMag = 17,
    messier = 18,
    ngc = 19,
    ic = 20,
    cStarNames = 21,
    identifiers = 22,
    commonNames = 23,
    nedNotes = 24,
    openNgcNotes = 25,
};

export class TargetCsvLoader {

    private readonly typeToTypeMap: Map<string, TargetType>;

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

    private parseRa(ra: string): number | null {
        if (ra == null) {
            return null;
        }

        const [hours, minutes, seconds] = ra.split(':');
        return parseFloat(hours) * 15.0 +
            parseFloat(minutes) / 4.0 +
            parseFloat(seconds) / 240.0;
    }

    private parseDec(dec: string): number | null {
        if (dec == null) {
            return null;
        }

        const [degreesString, arcminutesString, arcsecondsString] = dec.split(':');
        const degrees = parseFloat(degreesString);

        return ((parseFloat(arcsecondsString) / 3600.0) +
            (parseFloat(arcminutesString) / 60.0) +
            Math.abs(degrees)) * Math.sign(degrees);
    }

    private parseType(type: string): TargetType {
        return this.typeToTypeMap.get(type);
    }

    private parseName(name: string) {
        const [catalogName, number] = name.match(/(([(NGC)|(IC)])+)|(([0-9])+)/g);

        return `${catalogName} ${number.replace(/^0+/g, '')}`;
    }

    private parseAliases(identifiersString: string): string[] {
        const identifiers = identifiersString != null ? identifiersString.split(',') : undefined;
        if (identifiers == null || identifiers.length === 0) {
            return undefined;
        }
        return identifiers;
    }

    private parseFloat(valueString: string) {
        try {
            const value = parseFloat(valueString);
            if (!isNaN(value)) {
                return value;
            }
        } catch (ex) {
        }
        return undefined;
    }



    public async load(): Promise<Target[]> {
        const reader = new CsvReader({
            path: DataConfig.targetsCsvFilePath,
        });

        const data = await reader.read();
        // Name;Type;RA;Dec;Const;MajAx;MinAx;PosAng;B-Mag;V-Mag;J-Mag;H-Mag;K-Mag;
        // SurfBr;Hubble;Cstar U-Mag;Cstar B-Mag;Cstar V-Mag;M;NGC;IC;Cstar Names;Identifiers;Common names;NED notes;OpenNGC notes
        return map(data.rows, (row: string[]) => {
            const name = row[TargetFieldIndex.name];
            const type = row[TargetFieldIndex.type];
            const ra = row[TargetFieldIndex.ra];
            const dec = row[TargetFieldIndex.dec];
            const constellation = row[TargetFieldIndex.constellation];
            const identifiers = row[TargetFieldIndex.identifiers];
            const vMag = row[TargetFieldIndex.vMag];
            const surfBr = row[TargetFieldIndex.surfBr];

            return {
                name: this.parseName(name),
                originalName: name,
                type: this.parseType(type),
                ra: this.parseRa(ra),
                dec: this.parseDec(dec),
                constellation,
                aliases: this.parseAliases(identifiers),
                visMag: this.parseFloat(vMag),
                surfBr: this.parseFloat(surfBr),
            } as Target;
        });
    }

}
