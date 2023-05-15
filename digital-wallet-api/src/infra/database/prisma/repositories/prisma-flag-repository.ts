import { FlagRepository } from '@application/repositories/flag-repository';
import { PrismaService } from '../prisma.service';
import { Flag } from '@application/entities/flag';
import { PrismaFlagMapper } from '../mappers/prisma-flag-mapper';

export class PrismaFlagRepository implements FlagRepository {
  constructor(private prisma: PrismaService) {}

  async create(flag: Flag): Promise<void> {
    const raw = PrismaFlagMapper.toPrisma(flag);

    await this.prisma.flag.create({
      data: raw,
    });
  }
}
