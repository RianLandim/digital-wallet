import { User } from '@application/entities/user';
import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';

interface UserRequestProps {
  username: string;
  password: string;
  name: string;
  cpf: string;
  earning: number;
  earningDay: number;
  birthday: Date;
}

export interface UserResponseProps {
  user: User;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: UserRequestProps): Promise<UserResponseProps> {
    const { username, earning, earningDay, name, password, cpf, birthday } =
      request;

    const hashedPassword = hashSync(password, 16);

    const user = new User({
      password: hashedPassword,
      username,
      earning,
      earningDay,
      name,
      cpf,
      birthday,
    });

    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
