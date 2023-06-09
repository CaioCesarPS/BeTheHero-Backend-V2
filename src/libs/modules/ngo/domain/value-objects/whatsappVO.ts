export class WhatsappVO {
  constructor(public value: string) {
    this.isValidWhatsapp(value);
  }

  private isValidWhatsapp = (value: string): void => {
    const emailRegex =
      /^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/;
    const isValid = emailRegex.test(value);
    if (!isValid) {
      throw new Error('Invalid whatsapp');
    }
  };
}
