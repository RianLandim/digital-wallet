import { Login } from '@application/usecases/auth/login-usecase';
import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginBody } from '../dtos/user-login-body';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private auth: Login) {}

  @Post()
  login(@Body() request: UserLoginBody) {
    return this.auth.execute(request);
  }
}
