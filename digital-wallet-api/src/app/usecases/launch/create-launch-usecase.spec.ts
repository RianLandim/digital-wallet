import { LaunchType } from '@application/entities/launch';
import { InMemoryLaunchRepository } from '@test/repositories/in-memory-launch-repository';
import { CreateLaunch } from './create-launch-usecase';
import { makeLaunch } from '@test/factories/make-launch-factory';

describe('create launch [usecase]', () => {
  it('should be able to create an credit launch', async () => {
    const inMemoryLaunchRepository = new InMemoryLaunchRepository();
    const createLaunch = new CreateLaunch(inMemoryLaunchRepository);

    const { launch } = await createLaunch.execute(
      makeLaunch({ type: LaunchType.CREDIT }),
    );

    expect(launch).toEqual(
      expect.objectContaining({ type: LaunchType.CREDIT }),
    );
  });

  it('should be able to create an debit launch', async () => {
    const inMemoryLaunchRepository = new InMemoryLaunchRepository();
    const createLaunch = new CreateLaunch(inMemoryLaunchRepository);

    const { launch } = await createLaunch.execute(
      makeLaunch({ type: LaunchType.DEBIT }),
    );

    expect(launch).toEqual(expect.objectContaining({ type: LaunchType.DEBIT }));
  });
});
