import { User } from '@application/entities/user';
import { Prisma } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User): Prisma.UserCreateInput {
    const {
      cpf,
      createdAt,
      earning,
      earningDay,
      id,
      name,
      password,
      updatedAt,
      username,
    } = user;
    return {
      id,
      cpf,
      email: username,
      name,
      earningDay,
      password,
      createdAt,
      earning: Number(earning),
      updatedAt,
    };
  }
}
