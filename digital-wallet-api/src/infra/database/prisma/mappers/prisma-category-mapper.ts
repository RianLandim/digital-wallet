import { Category } from '@application/entities/category';
import { Prisma } from '@prisma/client';

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
}
