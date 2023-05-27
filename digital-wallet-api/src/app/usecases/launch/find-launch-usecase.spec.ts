import { InMemoryLaunchRepository } from '@test/repositories/in-memory-launch-repository';
import { CreateLaunch } from './create-launch-usecase';
import { FindLaunch } from './find-launch-usecase';
import { makeLaunch } from '@test/factories/make-launch-factory';
import { LaunchType } from '@application/entities/launch';

describe('test all cases for find an goal', () => {
  const inMemoryLaunchRepository = new InMemoryLaunchRepository();
  const createLaunch = new CreateLaunch(inMemoryLaunchRepository);
  const findLaunch = new FindLaunch(inMemoryLaunchRepository);

  it('should be able to find an launch or many launch', async () => {
    await createLaunch.execute(makeLaunch({ type: LaunchType.CREDIT }));
    await createLaunch.execute(makeLaunch({ type: LaunchType.DEBIT }));

    const { launch } = await findLaunch.execute({ userId: 'test-userId' });

    expect(launch).toHaveLength(2);
    expect(launch).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ type: LaunchType.CREDIT }),
        expect.objectContaining({ type: LaunchType.DEBIT }),
      ]),
    );
  });
});
