import { Flag } from '@application/entities/flag';
import { Prisma } from '@prisma/client';

export class PrismaFlagMapper {
  static toPrisma(flag: Flag): Prisma.FlagCreateInput {
    const { id, image, name, createdAt, updatedAt } = flag;

    return {
      id,
      name,
      image,
      createdAt,
      updatedAt,
    };
  }
}
