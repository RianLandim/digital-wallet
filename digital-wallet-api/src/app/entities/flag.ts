import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';

interface FlagProps {
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Flag {
  private _id: string;
  private props: FlagProps;

  constructor(
    props: Replace<FlagProps, { createdAt?: Date; updatedAt?: Date }>,
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

  set name(name: string) {
    this.props.name = name;
  }

  get name() {
    return this.props.name;
  }

  set image(image: string) {
    this.props.image = image;
  }

  get image() {
    return this.props.image;
  }

  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.createdAt = updatedAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }
}
