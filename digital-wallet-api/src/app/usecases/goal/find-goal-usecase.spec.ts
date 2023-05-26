import { InMemoryGoalRepository } from '@test/repositories/in-memory-goal-repository';
import { CreateGoal } from './create-goal-usecase';
import { makeGoal } from '@test/factories/make-goal-factory';
import { FindGoal } from './find-goal-usecase';

describe('test all cases for update an goal', () => {
  const inMemoryGoalRepository = new InMemoryGoalRepository();
  const createGoal = new CreateGoal(inMemoryGoalRepository);
  const findGoal = new FindGoal(inMemoryGoalRepository);

  it('should be able to update an goal', async () => {
    await createGoal.execute(
      makeGoal({
        description: 'test-description',
      }),
    );

    await createGoal.execute(
      makeGoal({
        description: 'test-description-2',
      }),
    );

    await createGoal.execute(
      makeGoal({
        description: 'test-description-3',
      }),
    );

    const { goal } = await findGoal.execute({ userId: 'test-userId' });

    expect(goal).toHaveLength(3);
    expect(goal).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ description: 'test-description' }),
        expect.objectContaining({ description: 'test-description-2' }),
        expect.objectContaining({ description: 'test-description-3' }),
      ]),
    );
  });
});
