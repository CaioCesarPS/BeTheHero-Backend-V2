export class DescriptionVO {
  constructor(public readonly value: string) {
    this.validate();
  }
  validate() {
    if (!this.value) {
      throw new Error('Description is required');
    }
    if (this.value.length < 300) {
      throw new Error('Description must be at least 300 characters long');
    }
  }
}
