import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';

export enum LaunchType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
}

interface LaunchProps {
  value: string;
  createdAt: Date;
  type: LaunchType;
}

export class Launch {
  private _id: string;
  private props: LaunchProps;

  constructor(props: Replace<LaunchProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  set value(value: string) {
    this.props.value = value;
  }

  get value() {
    return this.props.value;
  }

  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  set type(type: LaunchType) {
    this.props.type = type;
  }

  get type() {
    return this.props.type;
  }
}
