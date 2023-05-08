import { InMemoryFlagRepository } from '@test/repositories/in-memory-flag-repository';
import { CreateFlag } from './create-flag';

describe('', () => {
  it('should be able to create an flag in usecase', async () => {
    const inMemoryFlagRepository = new InMemoryFlagRepository();
    const createFlag = new CreateFlag(inMemoryFlagRepository);

    expect(
      async () =>
        await createFlag.execute({
          name: 'name-test',
          image: 'image-test',
        }),
    ).not.toThrow();
  });
});
