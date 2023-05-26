import { CreateCategory } from '@application/usecases/category/create-category-usecase';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../auth/decorator/currente-user.decorator';
import { CurrentUser } from '../auth/decorator/currente-user.decorator';
import { FindCategory } from '@application/usecases/category/find-category-usecase';
import { CategoryViewModel } from '../view-models/category-view-model';
import { CreateCategoryBody } from '../dtos/create-category-body';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Category')
@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
  constructor(
    private createCategory: CreateCategory,
    private findCategory: FindCategory,
  ) {}

  @Post()
  create(@Body() request: CreateCategoryBody, @User() user: CurrentUser) {
    return this.createCategory.execute({ ...request, userId: user.id });
  }

  @Get()
  async find(@User() user: CurrentUser) {
    const { category } = await this.findCategory.execute({ userId: user.id });

    return category.map(CategoryViewModel.toHttp);
  }
}
