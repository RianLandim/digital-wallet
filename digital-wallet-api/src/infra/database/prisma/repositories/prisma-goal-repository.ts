import { Goal } from '@application/entities/goal';
import { GoalRepository } from '@application/repositories/goal-repository';
import { PrismaService } from '../prisma.service';
import { PrismaGoalMapper } from '../mappers/prisma-goal-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaGoalRepository implements GoalRepository {
  constructor(private prisma: PrismaService) {}

  async create(goal: Goal): Promise<void> {
    const raw = PrismaGoalMapper.toPrisma(goal);

    await this.prisma.goal.create({
      data: raw,
    });
  }

  async findMany(userId: string): Promise<Goal[]> {
    const rawGoal = await this.prisma.goal.findMany({ where: { userId } });

    return rawGoal.map(PrismaGoalMapper.toDomain);
  }

  async update(goal: Goal): Promise<Goal> {
    const rawGoal = await this.prisma.goal.update({
      data: goal,
      where: { id: goal.id },
    });

    return PrismaGoalMapper.toDomain(rawGoal);
  }
}
