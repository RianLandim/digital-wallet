import { Launch } from '@application/entities/launch';
import { LaunchRepository } from '@application/repositories/launch-repository';
import { PrismaService } from '../prisma.service';
import { PrismaLaunchMapper } from '../mappers/prisma-launch-mapper';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class PrismaLaunchRepository implements LaunchRepository {
  constructor(private prisma: PrismaService) {}

  async create(launch: Launch): Promise<void> {
    const raw = PrismaLaunchMapper.toPrisma(launch);

    try {
      await this.prisma.$transaction(async (tx) => {
        const launch = await tx.launch.create({
          data: raw,
        });

        if (launch.type === 'DEBIT') {
          const user = await tx.user.update({
            where: { id: launch.userId },
            data: { balance: { decrement: launch.value } },
          });

          if (user.balance < 0) {
            throw new Error(`Você não possui dinheiro suficiente`);
          }
        }

        if (launch.type === 'CREDIT') {
          await tx.user.update({
            where: { id: launch.userId },
            data: {
              balance: {
                increment: launch.value,
              },
            },
          });
        }
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async find(userId: string): Promise<Launch[]> {
    const rawLaunch = await this.prisma.launch.findMany({ where: { userId } });

    return rawLaunch.map(PrismaLaunchMapper.toDomain);
  }

  async findMonthBalance(
    userId: string,
    current: boolean,
    day?: Date,
  ): Promise<Launch[]> {
    if (current) {
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const rawLaunch = await this.prisma.launch.findMany({
        where: {
          userId,
          createdAt: {
            gte: firstDay,
            lt: lastDay,
          },
        },
      });

      return rawLaunch.map(PrismaLaunchMapper.toDomain);
    } else {
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const rawLaunch = await this.prisma.launch.findMany({
        where: {
          userId,
          createdAt: {
            gte: firstDay,
            lt: lastDay,
          },
        },
      });

      return rawLaunch.map(PrismaLaunchMapper.toDomain);
    }
  }
}
