import { Goal } from '@application/entities/goal';
import { Prisma } from '@prisma/client';

export class PrismaGoalMapper {
  static toPrisma(goal: Goal): Prisma.GoalCreateInput {
    const {
      id,
      description,
      limitDate,
      title,
      value,
      userId,
      createdAt,
      updatedAt,
    } = goal;

    return {
      id,
      description,
      limitDate,
      title,
      User: {
        connect: {
          id: userId,
        },
      },
      value,
      createdAt,
      updatedAt,
    };
  }
}
