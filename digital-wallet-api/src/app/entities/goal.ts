import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';

interface GoalProps {
  value: number;
  limitDate: Date;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Goal {
  private _id: string;
  private props: GoalProps;

  constructor(
    props: Replace<GoalProps, { createdAt?: Date; updatedAt?: Date }>,
  ) {
    this._id = randomUUID();
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

  set limitDate(limitDate: Date) {
    this.props.limitDate = limitDate;
  }

  get limitDate() {
    return this.props.limitDate;
  }

  set title(title: string) {
    this.props.title = title;
  }

  get title() {
    return this.props.title;
  }

  set description(description: string) {
    this.props.description = description;
  }

  get description() {
    return this.props.description;
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
