import { randomUUID } from 'crypto';
interface GoalProps {
  value: number;
  limitDate: Date;
  title: string;
  description: string;
}

export class Goal {
  private _id: string;
  private props: GoalProps;

  constructor(props: GoalProps) {
    this._id = randomUUID();
    this.props = props;
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
}
