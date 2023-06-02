import { Login } from '@application/usecases/auth/login-usecase';
import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginBody } from '../dtos/user-login-body';
import { ApiTags } from '@nestjs/swagger';
import { UserViewModel } from '../view-models/user-view-model';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private auth: Login) {}

  @Post()
  async login(@Body() request: UserLoginBody) {
    const { user, accessToken } = await this.auth.execute(request);

    return { user: UserViewModel.toHttp(user), accessToken };
  }
}
