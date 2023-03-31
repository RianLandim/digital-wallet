import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';
import { User } from './user';

interface CreditCardProps {
  ownerName: string;
  flag: string;
  bank: string;
  expiratedAt: Date;
  closedAt: Date;
  userId: string;
  user?: User;
  createdAt: Date;
  updatedAt: Date;
}

export class CreditCard {
  private _id: string;
  private props: CreditCardProps;

  constructor(
    props: Replace<CreditCardProps, { createdAt?: Date; updatedAt?: Date }>,
  ) {
    this._id = randomUUID();
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

  set flag(flag: string) {
    this.props.flag = flag;
  }

  get flag() {
    return this.props.flag;
  }

  set bank(bank: string) {
    this.props.bank = bank;
  }

  get bank() {
    return this.props.bank;
  }
}
