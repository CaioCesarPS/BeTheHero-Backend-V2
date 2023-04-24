export class WhatsappVO {
  private isValidEmail = (value: string): boolean => {
    const emailRegex =
      /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/;
    return emailRegex.test(value);
  };
  constructor(value: string) {
    this.isValidEmail(value);
  }
}
