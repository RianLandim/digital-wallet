import { User } from '@application/entities/user';
import { UserRepository } from '@application/repositories/user-repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';

interface ValidateUserRequestProps {
  username: string;
  password: string;
}
interface ValidateUserResponseProps {
  user: User;
}

@Injectable()
export class ValidateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(
    request: ValidateUserRequestProps,
  ): Promise<ValidateUserResponseProps> {
    const { password, username } = request;

    const user = await this.userRepository.findByUsername(username);

    if (!user) {
      throw new UnauthorizedException('Usuário ou senha incorretos');
    }

    const isPasswordCorrect = compareSync(password, user.password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Usuário ou senha incorretos');
    }

    return {
      user,
    };
  }
}
