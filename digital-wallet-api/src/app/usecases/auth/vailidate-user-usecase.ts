import { User } from '@application/entities/user';
import { UserRepository } from '@application/repositories/user-repository';
import { UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';

interface ValidateUserRequestProps {
  username: string;
  password: string;
}
interface ValidateUserResponseProps {
  user: User;
}

export class ValidateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(
    request: ValidateUserRequestProps,
  ): Promise<ValidateUserResponseProps> {
    const { password, username } = request;

    const user = await this.userRepository.getByUsername(username);

    if (!user) {
      throw new UnauthorizedException('Usuario ou senha incorretos');
    }

    const isPasswordCorrect = compareSync(password, user.password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Usuario ou senha incorretos');
    }

    return {
      user,
    };
  }
}
