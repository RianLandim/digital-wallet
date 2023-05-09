import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';
import { Flag } from './flag';
import { User } from './user';

interface CreditCardProps {
  ownerName: string;
  expiratedAt: Date;
  bankId: string;
  flagId: string;
  flag?: Flag;
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

  set expiratedAt(expiratedAt: Date) {
    this.props.expiratedAt = expiratedAt;
  }

  get expiratedAt() {
    return this.props.expiratedAt;
  }

  set closedAt(closedAt: Date) {
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

  set bankId(bankId: string) {
    this.props.bankId = bankId;
  }

  get bankId() {
    return this.props.bankId;
  }

  set flagId(flagId: string) {
    this.props.flagId = flagId;
  }

  get flagId() {
    return this.props.flagId;
  }
}
