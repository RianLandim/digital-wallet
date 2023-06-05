import { Goal } from '@application/entities/goal';

export class GoalViewModel {
  static toHttp(goal: Goal) {
    return {
      id: goal.id,
      category: goal.categoryId,
      value: goal.value,
      limitDate: goal.limitDate,
      title: goal.title,
      description: goal.description,
    };
  }
}
