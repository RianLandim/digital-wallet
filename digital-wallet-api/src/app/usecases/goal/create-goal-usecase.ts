import { Goal } from '@application/entities/goal';
import { GoalRepository } from '@application/repositories/goal-repository';
import { Injectable } from '@nestjs/common';

export interface CreateGoalRequest {
  value: number;
  limitDate: Date;
  title: string;
  description: string;
  userId: string;
  categoryId: string;
}

export interface CreateGoalResponse {
  goal: Goal;
}

@Injectable()
export class CreateGoal {
  constructor(private goalRepository: GoalRepository) {}

  async execute(request: CreateGoalRequest): Promise<CreateGoalResponse> {
    const { value, limitDate, title, description, userId, categoryId } =
      request;

    const goal = new Goal({
      value,
      limitDate,
      title,
      description,
      userId,
      categoryId,
    });

    await this.goalRepository.create(goal);

    return {
      goal,
    };
  }
}
