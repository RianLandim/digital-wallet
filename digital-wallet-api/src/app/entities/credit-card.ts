import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';

interface CreditCardProps {
  ownerName: string;
  expiratedAt: number;
  bank: string;
  flag: string;
  digits: number;
  closedAt: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CreditCard {
  private _id: string;
  private props: CreditCardProps;

  constructor(
    props: Replace<CreditCardProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  get id() {
    return this._id;
  }

  set ownerName(ownerName: string) {
    this.props.ownerName = ownerName;
  }

  get ownerName() {
    return this.props.ownerName;
  }

  set expiratedAt(expiratedAt: number) {
    this.props.expiratedAt = expiratedAt;
  }

  get expiratedAt() {
    return this.props.expiratedAt;
  }

  set closedAt(closedAt: number) {
    this.props.closedAt = closedAt;
  }

  get closedAt() {
    return this.props.closedAt;
  }

  set userId(userId: string) {
    this.props.userId = userId;
  }

  get userId() {
    return this.props.userId;
  }

  set bank(bank: string) {
    this.props.bank = bank;
  }

  get bank() {
    return this.props.bank;
  }

  set flag(flag: string) {
    this.props.flag = flag;
  }

  get flag() {
    return this.props.flag;
  }

  set digits(digits: number) {
    this.props.digits = digits;
  }

  get digits() {
    return this.props.digits;
  }
}
