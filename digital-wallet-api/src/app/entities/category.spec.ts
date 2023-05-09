import { Category }  from './category';

describe('Category entity', () => {
  it('should create a launch entity with valid values', () => {
    const props = {
      name: 'mercado'
    };

    const category = new Category(props);

    expect(category).toBeInstanceOf(Category);
    expect(category.id).toBeTruthy();
    expect(category.name).toEqual('mercado');
  });
});