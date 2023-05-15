import { Category } from '@application/entities/category';
import { CategoryRepository } from '@application/repositories/category-repository';
import { Injectable } from '@nestjs/common';

export interface CreateCategoryRequest {
  name: string;
  userId: string;
}

export interface CreateCategoryResponse {
  category: Category;
}

@Injectable()
export class CreateCategory {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(
    request: CreateCategoryRequest,
  ): Promise<CreateCategoryResponse> {
    const { name, userId } = request;

    const category = new Category({
      name,
      userId,
    });

    await this.categoryRepository.create(category);

    return {
      category,
    };
  }
}