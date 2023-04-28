import { NameVO } from './nameVO';

describe('NameVO', () => {
  it('should create a valid name', () => {
    const name = new NameVO('ong test');
    expect(name.value).toBe('ong test');
  });

  it('should throw an error if an empty string is passed', () => {
    expect(() => new NameVO('')).toThrowError('Invalid name');
  });

  it('should throw an error if a string with less than 3 caracters its passed', () => {
    expect(() => new NameVO('on')).toThrowError('Invalid name');
  });
});
