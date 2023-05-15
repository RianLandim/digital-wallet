import { InMemoryGoalRepository } from '@test/repositories/in-memory-goal-repository';
import { CreateGoal } from './create-goal-usecase';

describe('create goal [usecase]', () => {
  it('should be able to create an goal', () => {
    const inMemoryGoalRepository = new InMemoryGoalRepository();
    const createGoal = new CreateGoal(inMemoryGoalRepository);

    expect(async () =>
      createGoal.execute({
        description: 'description-test',
        limitDate: new Date(),
        userId: 'rianlandim',
        title: 'title-test',
        value: 1000,
      }),
    );
  });
});
