import { InMemoryGoalRepository } from '@test/repositories/in-memory-goal-repository';
import { CreateGoal } from './create-goal-usecase';

describe('test create goal usecase', () => {
  it('should be able to create an flag', () => {
    const inMemoryGoalRepository = new InMemoryGoalRepository();
    const createGoal = new CreateGoal(inMemoryGoalRepository);

    expect(
      async () =>
        await createGoal.execute({
          value: 123,
          limitDate: new Date(),
          title: 'title-Goal',
          description: 'description-Goal',
        }),
    ).not.toThrow();
  });
});
