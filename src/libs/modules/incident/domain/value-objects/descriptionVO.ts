export class DescriptionVO {
  constructor(public readonly value: string) {
    this.validate();
  }
  validate() {
    if (!this.value) {
      throw new Error('Description is required');
    }
    if (this.value.length > 300) {
      throw new Error('Description must be at less than 300 characters');
    }
  }
}
