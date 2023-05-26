import { InMemoryGoalRepository } from '@test/repositories/in-memory-goal-repository';
import { CreateGoal } from './create-goal-usecase';
import { makeGoal } from '@test/factories/make-goal-factory';

describe('create goal [usecase]', () => {
  it('should be able to create an goal', () => {
    const inMemoryGoalRepository = new InMemoryGoalRepository();
    const createGoal = new CreateGoal(inMemoryGoalRepository);

    expect(async () => createGoal.execute(makeGoal()));
  });
});
