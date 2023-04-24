import IdVO from '../../commom/domain/value-objects/idVO';

export default class Incidents {
  private _id: IdVO;
  private _title: string;
  private _description: string;
  private _value: number;
  private _ong_id: string;

  constructor(
    id: IdVO,
    title: string,
    description: string,
    value: number,
    ongId: string,
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._value = value;
    this._ong_id = ongId;
  }

  get id(): IdVO {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get value(): number {
    return this._value;
  }

  get ongId(): string {
    return this._ong_id;
  }
}
