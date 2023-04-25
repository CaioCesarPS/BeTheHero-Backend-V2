import { EmailVO } from './emailVO';

describe('EmailVO', () => {
  it('should create a valid email', () => {
    const email = new EmailVO('caio@gmail.com');
    expect(email.value).toBe('caio@gmail.com');
    expect(email).toBeInstanceOf(EmailVO);
  });

  it('should throw an error if email is invalid', () => {
    expect(() => new EmailVO('caio')).toThrowError('Invalid e-mail');
  });
});
