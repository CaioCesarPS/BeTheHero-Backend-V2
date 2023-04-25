export class EmailVO {
  constructor(public value: string) {
    this.isValidEmail(value);
  }

  private isValidEmail = (email: string): void => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isValid = emailRegex.test(email);
    if (!isValid) {
      throw new Error('Invalid e-mail');
    }
  };
}
