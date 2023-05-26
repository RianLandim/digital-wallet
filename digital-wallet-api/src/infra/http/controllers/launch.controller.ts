import { CreateLaunch } from '@application/usecases/launch/create-launch-usecase';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser, User } from '../auth/decorator/currente-user.decorator';
import { CreateLaunchBody } from '../dtos/create-launch-body';

@ApiTags('Launch')
@UseGuards(JwtAuthGuard)
@Controller('launch')
export class LaunchController {
  constructor(private createLaunch: CreateLaunch) {}

  @Post()
  create(@Body() request: CreateLaunchBody, @User() user: CurrentUser) {
    return this.createLaunch.execute({ ...request, userId: user.id });
  }
}
