import { Goal } from '@application/entities/goal';
import { GoalRepository } from '../../app/repositories/goal-repository';

export class InMemoryGoalRepository implements GoalRepository {
  goal: Goal[] = [];

  async create(goal: Goal) {
    this.goal.push(goal);
  }

  async findMany(userId: string): Promise<Goal[]> {
    const goals = this.goal.filter((v) => v.userId === userId);
    return goals;
  }

  async update(goal: Goal): Promise<Goal> {
    const index = this.goal.findIndex((v) => v.id === goal.id);
    this.goal[index] = goal;

    return this.goal[index];
  }
}
