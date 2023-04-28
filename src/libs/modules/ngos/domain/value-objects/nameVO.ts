export class NameVO {
  constructor(public value: string) {
    if (!this.validate(value)) {
      throw new Error('Invalid name');
    }
  }

  private validate(value: string): boolean {
    if (!value) {
      return false;
    }

    if (value.length < 3) {
      return false;
    }

    return true;
  }
}
