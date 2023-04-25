import { CityVO } from './cityVO';

describe('CityVO', () => {
  it('should create a valid city', () => {
    const city = new CityVO('São Paulo');
    expect(city.value).toBe('São Paulo');
  });

  it('should throw an error if city is empty', () => {
    expect(() => new CityVO('')).toThrowError('City is required');
  });
});
