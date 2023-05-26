import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';
interface GoalProps {
  value: number;
  limitDate: Date;
  title: string;
  description: string;
  userId: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Goal {
  private _id: string;
  private props: GoalProps;

  constructor(
    props: Replace<GoalProps, { createdAt?: Date; updatedAt?: Date }>,
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
    this.props.value;
  }

  get value() {
    return this.props.value;
  }

  set limitDate(limitDate: Date) {
    this.props.limitDate;
  }

  get limitDate() {
    return this.props.limitDate;
  }

  set title(title: string) {
    this.props.title;
  }

  get title() {
    return this.props.title;
  }

  set description(description: string) {
    this.props.description;
  }

  get description() {
    return this.props.description;
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

  set categoryId(categoryId: string) {
    this.props.categoryId = categoryId;
  }

  get categoryId() {
    return this.props.categoryId;
  }
}
