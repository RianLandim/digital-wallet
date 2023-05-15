import { Goal } from '@application/entities/goal';
import { GoalRepository } from '@application/repositories/goal-repository';
import { PrismaService } from '../prisma.service';
import { PrismaGoalMapper } from '../mappers/prisma-goal-mapper';

export class PrismaGoalRepository implements GoalRepository {
  constructor(private prisma: PrismaService) {}

  async create(goal: Goal): Promise<void> {
    const raw = PrismaGoalMapper.toPrisma(goal);

    await this.prisma.goal.create({
      data: raw,
    });
  }
}
