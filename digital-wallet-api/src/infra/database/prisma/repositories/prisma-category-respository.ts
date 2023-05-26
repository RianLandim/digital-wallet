import { Category } from '@application/entities/category';
import { CategoryRepository } from '@application/repositories/category-repository';
import { PrismaService } from '../prisma.service';
import { PrismaCategoryMapper } from '../mappers/prisma-category-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private prisma: PrismaService) {}

  async create(category: Category): Promise<void> {
    const raw = PrismaCategoryMapper.toPrisma(category);

    await this.prisma.category.create({
      data: raw,
    });
  }

  async find(userId: string): Promise<Category[]> {
    const rawCategory = await this.prisma.category.findMany({
      where: { userId },
    });

    const category = rawCategory.map(PrismaCategoryMapper.toDomain);

    return category;
  }

  async update(category: Category, id: string): Promise<Category> {
    const raw = PrismaCategoryMapper.toPrisma(category);

    const rawCategory = await this.prisma.category.update({
      data: raw,
      where: { id },
    });

    return PrismaCategoryMapper.toDomain(rawCategory);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.category.delete({ where: { id } });
  }
}
