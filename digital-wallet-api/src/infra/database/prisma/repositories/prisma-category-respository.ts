import { Category } from '@application/entities/category';
import { CategoryRepository } from '@application/repositories/category-repository';
import { PrismaService } from '../prisma.service';
import { PrismaCategoryMapper } from '../mappers/prisma-category-mapper';

export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private prisma: PrismaService) {}

  async create(category: Category): Promise<void> {
    const raw = PrismaCategoryMapper.toPrisma(category);

    await this.prisma.category.create({
      data: raw,
    });
  }
}
