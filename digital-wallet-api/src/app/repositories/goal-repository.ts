import { Goal } from '../entities/goal';

export abstract class GoalRepository {
  abstract create(goal: Goal): Promise<void>;
  abstract update(goal: Goal, id: string): Promise<Goal[]>;
  abstract findMany(): Promise<Goal[]>;
}
