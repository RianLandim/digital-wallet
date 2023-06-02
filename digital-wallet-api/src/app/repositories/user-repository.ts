import { User } from '../entities/user';
export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract find(): Promise<User[]>;
  abstract findByUsername(username: string): Promise<User>;
}
