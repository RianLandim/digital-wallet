import { Goal } from '../entities/goal';

export abstract class GoalRepository {
  abstract create(goal: Goal): Promise<void>;
  abstract update(goal: Goal): Promise<Goal>;
  abstract findMany(userId: string): Promise<Goal[]>;
}
