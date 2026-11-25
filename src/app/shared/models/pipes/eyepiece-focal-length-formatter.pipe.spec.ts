import { Eyepiece } from '../equipment/eyepiece.model';
import { EyepieceFocalLengthPipe } from './eyepiece-focal-length-formatter.pipe';

describe('EyepieceFocalLengthPipe', () => {
  const pipe = new EyepieceFocalLengthPipe('en-US');

  it('shows an empty value for missing equipment', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('formats a fixed focal length and a zoom range', () => {
    expect(pipe.transform(new Eyepiece({ focalLength: 12.5 }))).toBe('12.5');
    expect(pipe.transform(new Eyepiece({ focalLength: 8, maxFocalLength: 24 }))).toBe('8.0-24.0');
  });
});
