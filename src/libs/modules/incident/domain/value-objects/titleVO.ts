export class TitleVO {
  constructor(public readonly value: string) {
    this.validate();
  }

  validate() {
    if (!this.value) {
      throw new Error('Title is required');
    }

    if (this.value.length >= 100) {
      throw new Error('Title must be at less than 100 characters');
    }
  }
}
