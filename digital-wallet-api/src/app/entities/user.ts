import { hashSync } from 'bcrypt';
import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';

interface UserProps {
  username: string;
  password: string;
  name: string;
  cpf: string;
  earning: number;
  earningDay: number;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(
    props: Replace<UserProps, { createdAt?: Date; updatedAt?: Date }>,
  ) {
    this._id = randomUUID();
    this.props = {
      ...props,
      password: hashSync(props.password, 16),
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  set username(username: string) {
    this.props.username = username;
  }

  get username() {
    return this.props.username;
  }

  set password(password: string) {
    this.props.password = password;
  }

  get password() {
    return this.props.password;
  }

  set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  get cpf() {
    return this.props.cpf;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get name() {
    return this.props.name;
  }

  set earning(earning: number) {
    this.props.earning = earning;
  }

  get earning() {
    return this.props.earning;
  }

  set earningDay(earningDay: number) {
    this.props.earningDay = earningDay;
  }

  get earningDay() {
    return this.props.earningDay;
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
