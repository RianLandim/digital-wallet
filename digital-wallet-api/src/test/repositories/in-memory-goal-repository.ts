import { Goal } from '@application/entities/goal';
import { GoalRepository } from '../../app/repositories/goal-repository';

export class InMemoryGoalRepository extends GoalRepository {
  goal: Goal[] = [];

  async create(goal: Goal) {
    this.goal.push(goal);
  }
}
