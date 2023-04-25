import { randomUUID } from 'crypto';

interface FlagProps {
  name: string;
  image: string;
}

export class Flag {
  private _id: string;
  private props: FlagProps;

  constructor(props: FlagProps) {
    this._id = randomUUID();
    this.props = {
      ...props,
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
}
