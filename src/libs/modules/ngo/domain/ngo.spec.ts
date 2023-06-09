import { Ngos } from './ngo';

describe('ngos entity', () => {
  it('Should create a ngos entity', () => {
    const ngo = new Ngos(
      '1',
      'ong test',
      'caio@gmail.com',
      '+5531999999999',
      'Belo Horizonte',
      'MG',
    );

    expect(ngo).toBeInstanceOf(Ngos);
    expect(ngo.id.value).toBe('1');
    expect(ngo.name.value).toBe('ong test');
    expect(ngo.email.value).toBe('caio@gmail.com');
    expect(ngo.whatsapp.value).toBe('+5531999999999');
    expect(ngo.city.value).toBe('Belo Horizonte');
    expect(ngo.state.value).toBe('MG');
  });
});
