import Incidents from './incidents';
import { Ngos } from '../../';

describe('Incidents', () => {
  it('should create an instance of incident', () => {
    const ngo = new Ngos(
      '1234',
      { firstName: 'Caio', lastName: 'Cesar' },
      'email',
      'whatsapp',
      'city',
      'uf',
    );
    const incident = new Incidents(
      '1',
      'title',
      'description',
      100,
      ngo.id.value,
    );

    expect(incident).toBeInstanceOf(Incidents);
    expect(incident.id.value).toBe('1');
  });
});
