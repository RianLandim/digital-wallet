import { Goal } from '../entities/goal';

export abstract class GoalRepository {
  abstract create(goal: Goal): Promise<void>;
}