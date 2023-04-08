import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserControler {
  constructor() {}

  @Post()
  create(@Body() request: CreateUserBody) {}
}
