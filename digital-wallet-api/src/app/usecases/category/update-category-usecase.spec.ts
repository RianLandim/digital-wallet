import { InMemoryCategoryRepository } from '@test/repositories/in-memory-category-repository';
import { UpdateCategory } from './update-category-usecase';

describe('test update category usecase', () => {
  it('should be able to update an category', () => {
    const inMemoryCategoryRepository = new InMemoryCategoryRepository();
    const updateCategory = new UpdateCategory(inMemoryCategoryRepository);

    expect(
      async () =>
        await updateCategory.execute({
          name: 'name-category',
        }),
    ).not.toThrow();
  });
});
