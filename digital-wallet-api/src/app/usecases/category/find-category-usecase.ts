import { Category } from '@application/entities/category';
import { CategoryRepository } from '@application/repositories/category-repository';
import { Injectable } from '@nestjs/common';

interface FindCategoryRequest {
  userId: string;
}
export interface FindCategoryResponse {
  category: Category[];
}

@Injectable()
export class FindCategory {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute({
    userId,
  }: FindCategoryRequest): Promise<FindCategoryResponse> {
    const category = await this.categoryRepository.find(userId);

    return { category };
  }
}
