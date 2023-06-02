import { Goal } from '@application/entities/goal';
import { GoalRepository } from '@application/repositories/goal-repository';
import { Injectable } from '@nestjs/common';

interface FindGoalRequest {
  userId: string;
}
export interface FindGoalResponse {
  goal: Goal[];
}

@Injectable()
export class FindGoal {
  constructor(private goalRepository: GoalRepository) {}

  async execute({ userId }: FindGoalRequest): Promise<FindGoalResponse> {
    const goal = await this.goalRepository.findMany(userId);

    return {
      goal,
    };
  }
}
