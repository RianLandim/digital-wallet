import { Goal } from '@application/entities/goal';
import { GoalRepository } from '../../app/repositories/goal-repository';

export class InMemoryGoalRepository implements GoalRepository {
  goal: Goal[] = [];

  async create(goal: Goal) {
    this.goal.push(goal);
  }
}
