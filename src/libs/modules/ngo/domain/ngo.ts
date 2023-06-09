import { IdVO } from '../../common';
import { CityVO, EmailVO, NameVO, StateVO, WhatsappVO } from './value-objects';

export class Ngo {
  private _id: IdVO;
  private _name: NameVO;
  private _email: EmailVO;
  private _whatsapp: WhatsappVO;
  private _city: CityVO;
  private _state: StateVO;

  constructor(
    id: string,
    name: string,
    email: string,
    whatsapp: string,
    city: string,
    state: string,
  ) {
    this._id = new IdVO(id);
    this._name = new NameVO(name);
    this._email = new EmailVO(email);
    this._whatsapp = new WhatsappVO(whatsapp);
    this._city = new CityVO(city);
    this._state = new StateVO(state);
  }

  get id(): IdVO {
    return this._id;
  }

  get name(): NameVO {
    return this._name;
  }

  get email(): EmailVO {
    return this._email;
  }

  get whatsapp(): WhatsappVO {
    return this._whatsapp;
  }

  get city(): CityVO {
    return this._city;
  }

  get state(): StateVO {
    return this._state;
  }
}
