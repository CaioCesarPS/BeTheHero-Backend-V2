import { DescriptionVO } from './descriptionVO';

describe('DescriptionVO', () => {
  it('should throw a error if the value is empty', () => {
    expect(() => new DescriptionVO('')).toThrow('Description is required');
  });

  it('should throw a error if the value is greater than 300 characters', () => {
    expect(() => new DescriptionVO('a'.repeat(301))).toThrow(
      'Description must be at less than 300 characters',
    );
  });
});
