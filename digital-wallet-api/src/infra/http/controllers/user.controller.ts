import { CreateUser } from '@application/usecases/user/create-user-usecase';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserBody } from '../dtos/create-user-body';
import { ApiTags } from '@nestjs/swagger';
import { FindByUsername } from '@application/usecases/user/find-user-by-username';
import { UserViewModel } from '../view-models/user-view-model';

@ApiTags('Usuário')
@Controller('user')
export class UserController {
  constructor(
    private createUser: CreateUser,
    private findUserByUsername: FindByUsername,
  ) {}

  @Post()
  async create(@Body() request: CreateUserBody) {
    const { user } = await this.createUser.execute(request);

    return UserViewModel.toHttp(user);
  }

  @Get(':username/find')
  async findByUsername(@Param('username') username: string) {
    const { user } = await this.findUserByUsername.execute({ username });

    return UserViewModel.toHttp(user);
  }
}
