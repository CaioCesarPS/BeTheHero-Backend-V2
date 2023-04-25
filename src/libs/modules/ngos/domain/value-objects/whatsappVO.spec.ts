import { WhatsappVO } from './whatsappVO';

describe('WhatsappVO', () => {
  it('should create a valid whatsapp', () => {
    const whatsapp = new WhatsappVO('5511987654321');
    expect(whatsapp.value).toBe('5511987654321');
    expect(whatsapp).toBeInstanceOf(WhatsappVO);
  });

  it('should throw an error if whatsapp is invalid', () => {
    expect(() => new WhatsappVO('1111551198765432')).toThrowError(
      'Invalid whatsapp',
    );
  });
});
