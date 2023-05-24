import { Category } from '@application/entities/category';
import { CategoryRepository } from '@application/repositories/category-repository';

export class InMemoryCategoryRepository implements CategoryRepository {
  category: Category[] = [];

  async create(category: Category) {
    this.category.push(category);
  }

  async update(category: Category) {
    this.category.push(category);
  }
}
