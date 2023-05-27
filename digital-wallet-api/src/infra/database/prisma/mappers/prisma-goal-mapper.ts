import { Goal } from '@application/entities/goal';
import { Prisma, Goal as PrismaGoal } from '@prisma/client';

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
      categoryId,
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
      category: {
        connect: {
          id: categoryId,
        },
      },
      createdAt,
      updatedAt,
    };
  }

  static toDomain(goal: PrismaGoal): Goal {
    return new Goal(
      {
        description: goal.description,
        limitDate: goal.limitDate,
        title: goal.title,
        userId: goal.userId,
        value: goal.value,
        createdAt: goal.createdAt,
        updatedAt: goal.updatedAt,
        categoryId: goal.categoryId,
      },
      goal.id,
    );
  }
}
