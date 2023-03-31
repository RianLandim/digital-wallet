import { User } from '@application/entities/user';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ValidateUser } from './vailidate-user-usecase';

export interface LoginResponseProps {
  accessToken: string;
  user: User;
}
interface LoginRequestProps {
  username: string;
  password: string;
}

@Injectable()
export class Login {
  constructor(
    private validateUser: ValidateUser,
    private jwtService: JwtService,
  ) {}

  async execute(request: LoginRequestProps): Promise<LoginResponseProps> {
    const { password, username } = request;

    const { user } = await this.validateUser.execute({ username, password });

    const payload = { username: user.username, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
