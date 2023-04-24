export class IdVO {
  constructor(public readonly value: string) {
    if (!value) {
      throw new Error('Id is required');
    }
  }
}
