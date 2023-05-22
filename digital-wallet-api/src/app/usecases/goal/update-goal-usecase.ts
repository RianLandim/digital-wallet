import { Goal } from '@application/entities/goal';
import { GoalRepository } from '@application/repositories/goal-repository';
import { Injectable } from '@nestjs/common';

interface UpdateGoalRequest {
  value: number;
  limitDate: Date;
  title: string;
  description: string;
  userId: string;
}

interface UpdateGoalResponse {
  goal: Goal;
}

@Injectable()
export class UpdateGoal {
  constructor(private goalRepository: GoalRepository) {}

  async execute(request: UpdateGoalRequest): Promise<UpdateGoalResponse> {
    const { description, limitDate, title, userId, value } = request;

    const goal = new Goal({
      description,
      limitDate,
      title,
      userId,
      value,
    });

    await this.goalRepository.update(goal);

    return {
      goal,
    };
  }
}
