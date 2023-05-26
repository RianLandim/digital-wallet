import { Goal } from '@application/entities/goal';

type Override = Partial<Goal>;

export function makeGoal(override: Override = {}) {
  return new Goal(
    {
      description: 'test-description',
      limitDate: new Date(),
      title: 'test-title',
      userId: 'test-userId',
      value: 1000,
      categoryId: 'test-categoryId',
      ...override,
    },
    override?.id,
  );
}
