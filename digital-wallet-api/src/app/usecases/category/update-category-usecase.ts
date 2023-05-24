import { Category } from '@application/entities/category';
import { CategoryRepository } from '@application/repositories/category-repository';
import { Injectable } from '@nestjs/common';

export interface UpdateCategoryRequest {
  name: string;
}

export interface UpdateCategoryResponse {
  category: Category;
}

@Injectable()
export class UpdateCategory {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(
    request: UpdateCategoryRequest,
  ): Promise<UpdateCategoryResponse> {
    const { name } = request;

    const category = new Category({
      name,
    });

    await this.categoryRepository.update(category);

    return {
      category,
    };
  }
}
