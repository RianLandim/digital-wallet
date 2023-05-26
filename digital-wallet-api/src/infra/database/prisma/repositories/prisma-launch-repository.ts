import { Launch } from '@application/entities/launch';
import { LaunchRepository } from '@application/repositories/launch-repository';
import { PrismaService } from '../prisma.service';
import { PrismaLaunchMapper } from '../mappers/prisma-launch-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaLaunchRepository implements LaunchRepository {
  constructor(private prisma: PrismaService) {}

  async create(launch: Launch): Promise<void> {
    const raw = PrismaLaunchMapper.toPrisma(launch);

    await this.prisma.launch.create({
      data: raw,
    });
  }
}
