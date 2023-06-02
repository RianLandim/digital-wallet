import { InMemoryGoalRepository } from '@test/repositories/in-memory-goal-repository';
import { CreateGoal } from './create-goal-usecase';
import { UpdateGoal } from './update-goal-usecase';
import { makeGoal } from '@test/factories/make-goal-factory';
import { Goal } from '@application/entities/goal';

describe('test all cases for update an goal', () => {
  const inMemoryGoalRepository = new InMemoryGoalRepository();
  const createGoal = new CreateGoal(inMemoryGoalRepository);
  const updateGoal = new UpdateGoal(inMemoryGoalRepository);

  it('should be able to update an goal', async () => {
    const createGoalObject = makeGoal();

    const { goal } = await createGoal.execute(createGoalObject);

    const updatedGoalObject = makeGoal({
      id: goal.id,
      description: 'test-description',
    });

    const { goal: updatedGoal } = await updateGoal.execute(updatedGoalObject);

    expect(updatedGoal).toBeInstanceOf(Goal);
    expect(updatedGoal).toEqual(expect.objectContaining({ _id: goal.id }));
  });
});
