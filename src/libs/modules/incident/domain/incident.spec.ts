import { Ngos } from '../..';
import { IdVO } from '../../common';
import Incident from './incident';

describe('Incidents Entity', () => {
  it('Should create a instance of Incidents', () => {
    const ngo = new Ngos(
      '1234',
      'ong test',
      'caiotest@gmail.com',
      '+5531999999999',
      'Belo Horizonte',
      'MG',
    );
    const incident = new Incident(
      '1',
      'title',
      'description',
      100,
      ngo.id.value,
    );

    expect(incident).toBeInstanceOf(Incident);
    expect(incident.id).toBeInstanceOf(IdVO);
    expect(incident.title.value).toBe('title');
    expect(incident.description.value).toBe('description');
    expect(incident.value.value).toBe(100);
    expect(incident.ongId.value).toBe(ngo.id.value);
  });
});