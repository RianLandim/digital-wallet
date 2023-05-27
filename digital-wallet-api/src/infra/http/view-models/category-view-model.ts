import { Category } from '@application/entities/category';

export class CategoryViewModel {
  static toHttp(category: Category) {
    return {
      id: category.id,
      name: category.name,
      userId: category.userId,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }
}
