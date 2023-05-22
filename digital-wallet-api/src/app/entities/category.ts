import { randomUUID } from 'crypto';

interface CategoryProps {
  name: string;
  userId: string;
}

export class Category {
  private _id: string;
  private props: CategoryProps;

  constructor(props: CategoryProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
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

  set userId(userId: string) {
    this.props.userId = userId;
  }

  get userId() {
    return this.props.userId;
  }
}
