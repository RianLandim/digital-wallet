import { Goal } from '@application/entities/goal';
import { GoalRepository } from '@application/repositories/goal-repository';

interface GoalRequestProps {
  value: number;
  limitDate: Date;
  title: string;
  description: string;
}

interface GoalResponseProps {
  goal: Goal;
}

export class CreateGoal {
  constructor(private goalRepository: GoalRepository) {}

  async execute(request: GoalRequestProps): Promise<GoalResponseProps> {
    const { description, limitDate, title, value } = request;

    const goal = new Goal({
      description,
      limitDate,
      title,
      value,
    });

    await this.goalRepository.create(goal);

    return {
      goal,
    };
  }
}
