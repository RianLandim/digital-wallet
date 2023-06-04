import { PrismaUserRepository } from '@infra/database/prisma/repositories/prisma-user-repository';
import { User } from '../entities/user';
export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract find(): Promise<User[]>;
  abstract findByUsername(username: string): Promise<User>;
  abstract findBalance(
    userId: string,
  ): ReturnType<PrismaUserRepository['findBalance']>;
}
