import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';

export enum LaunchType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
}

interface LaunchProps {
  value: number;
  type: LaunchType;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Launch {
  private _id: string;
  private props: LaunchProps;

  constructor(
    props: Replace<LaunchProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  set value(value: number) {
    this.props.value = value;
  }

  get value() {
    return this.props.value;
  }

  set type(type: LaunchType) {
    this.props.type = type;
  }

  get type() {
    return this.props.type;
  }

  set userId(userId: string) {
    this.props.userId = userId;
  }

  get userId() {
    return this.props.userId;
  }

  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}
