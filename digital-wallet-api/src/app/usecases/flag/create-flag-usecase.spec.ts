import { InMemoryFlagRepository } from '@test/repositories/in-memory-flag-repository';
import { CreateFlag } from './create-flag-usecase';

describe('test create flag usecase', () => {
  it('should be able to create an flag', () => {
    const inMemoryFlagRepository = new InMemoryFlagRepository();
    const createFlag = new CreateFlag(inMemoryFlagRepository);

    expect(
      async () =>
        await createFlag.execute({
          name: 'name-flag',
          image: 'image-flag',
        }),
    ).not.toThrow();
  });
});
