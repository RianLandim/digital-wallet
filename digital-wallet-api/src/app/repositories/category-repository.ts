import { Category } from '../entities/category';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract update(category: Category): Promise<void>;
}
