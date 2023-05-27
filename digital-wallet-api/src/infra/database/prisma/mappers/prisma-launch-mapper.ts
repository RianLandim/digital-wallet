import { Launch, LaunchType } from '@application/entities/launch';
import { Prisma, Launch as PrismaLaunch } from '@prisma/client';

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

  static toDomain(launch: PrismaLaunch): Launch {
    return new Launch(
      {
        type: launch.type as LaunchType,
        userId: launch.userId,
        value: launch.value,
        createdAt: launch.createdAt,
        updatedAt: launch.updatedAt,
      },
      launch.id,
    );
  }
}
