import { Category } from './category';

describe('Category entity', () => {
  it('should create a launch entity with valid values', () => {
    const category = new Category({ name: 'test-name', userId: 'userId-test' });

    expect(category).toBeInstanceOf(Category);
    expect(category.id).toBeTruthy();
    expect(category.name).toEqual('mercado');
  });
});
