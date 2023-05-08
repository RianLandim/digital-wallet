import { InMemoryCategoryRepository } from '@test/repositories/in-memory-category-repository';
import { CreateCategory } from './create-category';

describe('create category [usecase]', () => {
  it('should be able to create an category with yout own usecase', () => {
    const inMemoryCategoryRepostiry = new InMemoryCategoryRepository();
    const createCategory = new CreateCategory(inMemoryCategoryRepostiry);

    expect(
      async () =>
        await createCategory.execute({
          name: 'name-test',
        }),
    ).not.toThrow();
  });
});
