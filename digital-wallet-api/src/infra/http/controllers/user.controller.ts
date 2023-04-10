import { CreateUser } from '@application/usecases/user/create-user';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserBody } from '../dtos/create-user-body';

@Controller('user')
export class UserController {
  constructor(private createUser: CreateUser) {}

  @Post()
  create(@Body() request: CreateUserBody) {
    return this.createUser.execute(request);
  }
}
