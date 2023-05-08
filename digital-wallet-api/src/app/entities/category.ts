import { randomUUID } from 'crypto';

interface CategoryProps {
  name: string;
}

export class Category {
  private _id: string;
  private props: CategoryProps;

  constructor(props: CategoryProps) {
    this._id = randomUUID();
    this.props = props;
  }

  get id() {
    return this._id;
  }

  set name(name: string) {
    this.props.name;
  }

  get name() {
    return this.props.name;
  }
}
