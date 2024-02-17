import { randomUUID } from 'crypto';

export class UniqueEntityID {
  private _value: string;

  toString() {
    return this._value;
  }

  toValue() {
    return this._value;
  }

  constructor(_value?: string) {
    this._value = _value ?? randomUUID();
  }

  equals(id: UniqueEntityID) {
    return id.toValue() === this._value;
  }
}
