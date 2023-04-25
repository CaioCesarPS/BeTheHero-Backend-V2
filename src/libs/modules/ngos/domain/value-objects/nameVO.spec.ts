import { NameVO } from './nameVO';

describe('NameVO', () => {
  it('should create a valid name', () => {
    const name = new NameVO('John', 'Doe');
    expect(name.firstName).toBe('John');
    expect(name.lastName).toBe('Doe');
  });

  it('should throw an error if first name is empty', () => {
    expect(() => new NameVO('', 'Cesar')).toThrowError(
      'First name is required',
    );
  });

  it('should throw an error if last name is empty', () => {
    expect(() => new NameVO('John', '')).toThrowError('Last name is required');
  });
});
