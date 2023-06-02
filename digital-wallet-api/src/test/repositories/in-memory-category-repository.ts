import { Category } from '@application/entities/category';
import { CategoryRepository } from '@application/repositories/category-repository';

export class InMemoryCategoryRepository implements CategoryRepository {
  category: Category[] = [];

  async create(category: Category) {
    this.category.push(category);
  }

  async find(userId: string): Promise<Category[]> {
    return this.category.filter((v) => v.userId === userId);
  }

  async update(category: Category): Promise<Category> {
    const index = this.category.findIndex((v) => v.id === category.id);
    this.category[index] = category;

    return this.category[index];
  }

  async delete(id: string): Promise<void> {
    const index = this.category.findIndex((v) => v.id === id);
    this.category[index] = null;
  }
}
