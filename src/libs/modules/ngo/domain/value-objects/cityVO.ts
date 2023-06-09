export class CityVO {
  constructor(public readonly value: string) {
    if (!value.length) {
      throw new Error('City is required');
    }
  }
}
