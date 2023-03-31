import { User } from '../entities/user';
export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract get(): Promise<User[]>;
  abstract getByUsername(username: string): Promise<User>;
}
