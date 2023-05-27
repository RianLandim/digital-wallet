import { Category } from '@application/entities/category';
import { CategoryRepository } from '@application/repositories/category-repository';
import { Injectable } from '@nestjs/common';

export interface UpdateCategoryRequest {
  id: string;
  name: string;
  userId: string;
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
    const { name, userId, id } = request;

    const category = new Category(
      {
        name,
        userId,
      },
      id,
    );

    await this.categoryRepository.update(category);

    return {
      category,
    };
  }
}
