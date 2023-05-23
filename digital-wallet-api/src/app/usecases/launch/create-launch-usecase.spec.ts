import { InMemoryLaunchRepository } from '@test/repositories/in-memory-launch-repository';
import { CreateLaunch } from './create-launch-usecase';
import { LaunchType } from '@application/entities/launch';

describe('test create launch usecase', () => {
  it('should be able to create an goal', () => {
    const inMemoryLaunchRepository = new InMemoryLaunchRepository();
    const createLaunch = new CreateLaunch(inMemoryLaunchRepository);

    expect(
      async () =>
        await createLaunch.execute({
          value: 'value-Launch',
          createdAt: new Date(),
          type: LaunchType.DEBIT,
        }),
    ).not.toThrow();
  });
});
