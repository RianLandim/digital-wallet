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
            data: { totalAmount: { decrement: launch.value } },
          });

          if (user.totalAmount < 0) {
            throw new Error(`${user.name} não possui dinheiro suficiente`);
          }
        } else {
          await tx.user.update({
            where: { id: launch.userId },
            data: {
              totalAmount: {
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
}
