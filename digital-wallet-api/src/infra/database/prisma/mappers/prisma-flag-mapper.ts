import { Flag } from '@application/entities/flag';
import { Prisma, Flag as PrismaFlag } from '@prisma/client';

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

  static toDomain(flag: PrismaFlag): Flag {
    return new Flag(
      {
        image: flag.image,
        name: flag.name,
        createdAt: flag.createdAt,
        updatedAt: flag.updatedAt,
      },
      flag.id,
    );
  }
}
