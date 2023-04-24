export default class IdVO {
  constructor(public readonly id: string) {
    if (!id) {
      throw new Error('Id is required');
    }
  }
}
