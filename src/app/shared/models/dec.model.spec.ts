import { Dec } from './dec.model';

describe('Dec', () => {

    it('should work', () => {
        const dec = new Dec({
            degrees: 10,
            arcminutes: 20,
            arcseconds: 30
        });

        expect(dec.degrees).toEqual(10);
        expect(dec.arcminutes).toEqual(20);
        expect(dec.arcseconds).toEqual(30);
    });

    describe('toDegrees', () => {

        it('should work (1)', () => {
            const dec = new Dec();
            expect(dec.toDegrees()).toEqual(0);
        });

        it('should work (2)', () => {
            const dec = new Dec({
                degrees: 1,
                arcminutes: 30
            });

            expect(dec.toDegrees()).toEqual(1.5);
        });

        it('should work (3)', () => {
            const dec = new Dec({
                degrees: 35,
                arcminutes: 51,
                arcseconds: 30
            });

            expect(dec.toDegrees().toFixed(5)).toEqual('35.85833');
        });

        it('should work (4)', () => {
            const dec = new Dec({
                degrees: 47,
                arcminutes: 49,
                arcseconds: 30
            });

            expect(dec.toDegrees().toFixed(5)).toEqual('47.82500');
        });


    });

    describe('fromDegrees', () => {

        it('should work (1)', () => {
            const dec = new Dec();
            dec.fromDegrees(0);

            expect(dec.degrees).toEqual(0);
            expect(dec.arcminutes).toEqual(0);
            expect(dec.arcseconds).toEqual(0);
        });

        it('should work (2)', () => {
            const dec = new Dec();
            dec.fromDegrees(51.5);

            expect(dec.degrees).toEqual(51);
            expect(dec.arcminutes).toEqual(30);
            expect(dec.arcseconds).toEqual(0);
        });

        it('should work (3)', () => {
            const dec = new Dec();
            dec.fromDegrees(51.5);

            expect(dec.degrees).toEqual(51);
            expect(dec.arcminutes).toEqual(30);
            expect(dec.arcseconds).toEqual(0);
        });

    });

});
