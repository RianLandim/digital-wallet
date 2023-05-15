import { Launch } from '@application/entities/launch';
import { Prisma } from '@prisma/client';

export class PrismaLaunchMapper {
  static toPrisma(launch: Launch): Prisma.LaunchCreateInput {
    const { id, type, value, userId, createdAt, updatedAt } = launch;

    return {
      id,
      type,
      value,
      user: {
        connect: {
          id: userId,
        },
      },
      createdAt,
      updatedAt,
    };
  }
}
