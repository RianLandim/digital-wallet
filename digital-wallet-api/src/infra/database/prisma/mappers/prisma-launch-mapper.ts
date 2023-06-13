import { Launch, LaunchType } from '@application/entities/launch';
import { Prisma, Launch as PrismaLaunch } from '@prisma/client';

export class PrismaLaunchMapper {
  static toPrisma(launch: Launch): Prisma.LaunchCreateInput {
    const { id, type, value, userId, createdAt, updatedAt, title, category } =
      launch;

    return {
      id,
      type,
      value,
      title,
      category,
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
        title: launch.title,
        userId: launch.userId,
        value: launch.value,
        category: launch.category,
        createdAt: launch.createdAt,
        updatedAt: launch.updatedAt,
      },
      launch.id,
    );
  }
}
