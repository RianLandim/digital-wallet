import { CreateCategory } from '@application/usecases/category/create-category-usecase';
import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../auth/decorator/currente-user.decorator';
import { CurrentUser } from '../auth/decorator/currente-user.decorator';
import { FindCategory } from '@application/usecases/category/find-category-usecase';
import { CategoryViewModel } from '../view-models/category-view-model';
import { CreateCategoryBody } from '../dtos/create-category-body';

@Controller('category')
export class CategoryController {
  constructor(
    private createCategory: CreateCategory,
    private findCategory: FindCategory,
  ) {}

  @Post()
  create(request: CreateCategoryBody) {
    return this.createCategory.execute(request);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async find(@User() user: CurrentUser) {
    const { category } = await this.findCategory.execute({ userId: user.id });

    return category.map(CategoryViewModel.toHttp);
  }
}
