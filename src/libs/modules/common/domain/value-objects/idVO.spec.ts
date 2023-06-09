import { IdVO } from './idVO';

describe('IdVO', () => {
  it('should throw a error if the value is empty', () => {
    expect(() => new IdVO('')).toThrow('Id is required');
  });
});
