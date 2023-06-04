import { User } from '@application/entities/user';
import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data: raw,
    });
  }

  async find(): Promise<User[]> {
    throw new Error('Method not yet implemented');
  }

  async findByUsername(username: string): Promise<User> {
    const raw = await this.prisma.user.findUnique({
      where: { email: username },
    });

    return PrismaUserMapper.toDomain(raw);
  }

  async findBalance(userId: string) {
    const raw = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { launch: true },
    });

    const credit = raw.launch
      .filter((v) => v.type === 'CREDIT')
      .reduce((acc, val) => {
        return acc + val.value;
      }, 0);

    const debit = raw.launch
      .filter((v) => v.type === 'DEBIT')
      .reduce((acc, val) => {
        return acc + val.value;
      }, 0);

    return {
      balance: raw.balance,
      credit,
      debit,
    };
  }
}
