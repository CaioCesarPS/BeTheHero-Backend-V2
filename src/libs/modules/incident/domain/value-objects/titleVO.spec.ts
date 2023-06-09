import { TitleVO } from './titleVO';

describe('TitleVO', () => {
  it('should throw a error if the value is empty', () => {
    expect(() => new TitleVO('')).toThrow('Title is required');
  });

  it('should throw a error if the value is greater than 100 characters', () => {
    expect(() => new TitleVO('a'.repeat(101))).toThrow(
      'Title must be at less than 100 characters',
    );
  });
});
