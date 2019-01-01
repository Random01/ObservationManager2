import { RA } from './ra.model';

describe('RA', () => {

    it('should work', () => {
        const ra = new RA({
            hours: 12,
            minutes: 35,
            seconds: 14
        });

        expect(ra.hours).toEqual(12);
        expect(ra.minutes).toEqual(35);
        expect(ra.seconds).toEqual(14);
    });

    describe('toDegrees', () => {

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

    });

    
});
