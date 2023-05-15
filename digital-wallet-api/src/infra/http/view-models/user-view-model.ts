import { User } from '@application/entities/user';

export class UserViewModel {
  static toHttp(user: User) {
    return {
      id: user.id,
      earning: user.earning,
      earningDay: user.earningDay,
      name: user.name,
      cpf: user.cpf,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
