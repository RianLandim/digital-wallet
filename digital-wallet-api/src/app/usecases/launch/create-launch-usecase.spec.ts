import { LaunchType } from '@application/entities/launch';
import { InMemoryLaunchRepository } from '@test/repositories/in-memory-launch-repository';
import { CreateLaunch } from './create-launch-usecase';

describe('create launch [usecase]', () => {
  it('should be able to create an credit launch', () => {
    const inMemoryLaunchRepository = new InMemoryLaunchRepository();
    const createLaunch = new CreateLaunch(inMemoryLaunchRepository);

    expect(async () =>
      createLaunch.execute({
        userId: 'test-userId',
        value: 1000,
        type: LaunchType.CREDIT,
        createdAt: new Date(),
      }),
    ).not.toThrow();
  });

  it('should be able to create an debit launch', () => {
    const inMemoryLaunchRepository = new InMemoryLaunchRepository();
    const createLaunch = new CreateLaunch(inMemoryLaunchRepository);

    expect(async () =>
      createLaunch.execute({
        value: 1000,
        type: LaunchType.DEBIT,
        userId: 'test-userId',
        createdAt: new Date(),
      }),
    ).not.toThrow();
  });
});
