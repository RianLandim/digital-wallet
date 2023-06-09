import { User } from 'src/app/entities/user';
import { UserRepository } from 'src/app/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
  user: User[] = [];

  async create(user: User) {
    this.user.push(user);
  }

  async get(): Promise<User[]> {
    return this.user;
  }

  async getByUsername(username: string): Promise<User> {
    const index = this.user.findIndex((item) => item.username === username);

    return this.user[index];
  }
}
