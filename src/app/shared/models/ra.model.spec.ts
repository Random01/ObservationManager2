import { RA } from './ra.model';

describe('RA', () => {

    it('should have a constructor with parameters', () => {
        const ra = new RA({
            hours: 12,
            minutes: 35,
            seconds: 14
        });

        expect(ra.hours).toEqual(12);
        expect(ra.minutes).toEqual(35);
        expect(ra.seconds).toEqual(14);
    });

    describe('should have a method toDegrees(...) and this method', () => {

        it('should work (1)', () => {
            const ra = new RA();
            expect(ra.toDegrees()).toEqual(0);
        });

        it('should work (2)', () => {
            const ra = new RA({
                hours: 22,
                minutes: 35,
                seconds: 55.85
            });

            expect(ra.toDegrees().toFixed(4)).toEqual('338.9827');
        });

        it('should work (2)', () => {
            const ra = new RA({
                hours: 12,
                minutes: 28,
                seconds: 55
            });

            expect(ra.toDegrees().toFixed(4)).toEqual('187.2292');
        });

        it('should work (3)', () => {
            const ra = new RA({
                hours: 23,
                minutes: 51,
                seconds: 49
            });

            expect(ra.toDegrees().toFixed(6)).toEqual('357.954167');
        });

    });

    describe('should have a method fromDegrees(...) and this method', () => {

        it('should work (1)', () => {
            const ra = new RA();

            ra.fromDegrees(357.95416666666665);

            expect(ra.hours).toEqual(23);
            expect(ra.minutes).toEqual(51);
            expect(ra.seconds).toEqual(49);
        });

    });

});
