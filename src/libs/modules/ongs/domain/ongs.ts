import IdVO from '../../commom/domain/value-objects/idVO';
import NameVO from './value-objects/nameVO';

export default class Ongs {
  private _id: IdVO;
  private _name: NameVO;
  private _email: string;
  private _whatsapp: string;
  private _city: string;
  private _uf: string;

  constructor(
    id: string,
    name: {
      firstName: string;
      lastName: string;
    },
    email: string,
    whatsapp: string,
    city: string,
    uf: string,
  ) {
    this._id = new IdVO(id);
    this._name = new NameVO(name.firstName, name.lastName);
    this._email = email;
    this._whatsapp = whatsapp;
    this._city = city;
    this._uf = uf;
  }

  get id(): IdVO {
    return this._id;
  }

  get name(): NameVO {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get whatsapp(): string {
    return this._whatsapp;
  }

  get city(): string {
    return this._city;
  }

  get uf(): string {
    return this._uf;
  }
}
