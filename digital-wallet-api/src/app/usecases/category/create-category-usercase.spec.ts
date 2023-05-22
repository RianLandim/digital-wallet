import { InMemoryCategoryRepository } from "@test/repositories/in-memory-category-repository"
import { CreateCategory } from "./create-category-usecase";

describe('test create category usecase', () => {
  it('should be able to create an category', () => {
    const inMemoryCategoryRepository = new InMemoryCategoryRepository();
    const createCategory = new CreateCategory(inMemoryCategoryRepository);

    expect(
      async () => 
        await createCategory.execute({
          name: 'lazer',
        }),
    ).not.toThrow();
  });
});