export class StateVO {
  constructor(public readonly value: string) {
    this.validate();
  }

  validate() {
    if (!this.value) {
      throw new Error('State is required');
    }

    if (this.value.length < 2) {
      throw new Error('State must be at least 2 characters long');
    }

    if (this.value.length > 2) {
      throw new Error('State must be at most 2 characters long');
    }
  }
}
