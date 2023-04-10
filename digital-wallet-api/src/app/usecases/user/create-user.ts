import { User } from '@application/entities/user';
import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';

interface UserRequestProps {
  username: string;
  password: string;
  name: string;
  cpf: string;
  earning: number;
  earningDay: number;
}

export interface UserResponseProps {
  user: User;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: UserRequestProps): Promise<UserResponseProps> {
    const { username, earning, earningDay, name, password, cpf } = request;

    const user = new User({
      password,
      username,
      earning,
      earningDay,
      name,
      cpf,
    });

    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
