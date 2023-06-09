import { IdVO } from '../../common';
import { DescriptionVO, TitleVO, ValueVO } from './value-objects';

export default class Incidents {
  private _id: IdVO;
  private _title: TitleVO;
  private _description: DescriptionVO;
  private _value: ValueVO;
  private _ong_id: IdVO;

  constructor(
    id: string,
    title: string,
    description: string,
    value: number,
    ongId: string,
  ) {
    this._id = new IdVO(id);
    this._title = new TitleVO(title);
    this._description = new DescriptionVO(description);
    this._value = new ValueVO(value);
    this._ong_id = new IdVO(ongId);
  }

  get id(): IdVO {
    return this._id;
  }

  get title(): TitleVO {
    return this._title;
  }

  get description(): DescriptionVO {
    return this._description;
  }

  get value(): ValueVO {
    return this._value;
  }

  get ongId(): IdVO {
    return this._ong_id;
  }
}
