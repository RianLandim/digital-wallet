import { User } from '@application/entities/user';
import { Prisma, User as PrismaUser } from '@prisma/client';

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

  static toDomain(user: PrismaUser): User {
    return new User(
      {
        cpf: user.cpf,
        earning: user.earning,
        earningDay: user.earningDay,
        name: user.name,
        password: user.password,
        username: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      user.id,
    );
  }
}
