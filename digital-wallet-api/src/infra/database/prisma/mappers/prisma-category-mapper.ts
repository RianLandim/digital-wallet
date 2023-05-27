import { Category } from '@application/entities/category';
import { Prisma, Category as PrismaCategory } from '@prisma/client';

export class PrismaCategoryMapper {
  static toPrisma(category: Category): Prisma.CategoryCreateInput {
    const { id, name, userId } = category;

    return {
      name,
      id,
      User: {
        connect: {
          id: userId,
        },
      },
    };
  }

  static toDomain(category: PrismaCategory): Category {
    return new Category(
      {
        name: category.name,
        userId: category.userId,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt,
      },
      category.id,
    );
  }
}
