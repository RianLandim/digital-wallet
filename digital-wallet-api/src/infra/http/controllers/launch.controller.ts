import { CreateLaunch } from '@application/usecases/launch/create-launch-usecase';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser, User } from '../auth/decorator/current-user.decorator';
import { CreateLaunchBody } from '../dtos/create-launch-body';
import { LaunchViewModel } from '../view-models/launch-view-model';
import { FindLaunch } from '@application/usecases/launch/find-launch-usecase';
import { FindMonthBalance } from '@application/usecases/launch/find-month-balance-usecase';
import { FindMonthBalanceBody } from '../dtos/find-month-balance-body';

@UseGuards(JwtAuthGuard)
@ApiTags('Lançamento')
@Controller('launch')
export class LaunchController {
  constructor(
    private createLaunch: CreateLaunch,
    private findLaunch: FindLaunch,
    private findLaunchBalance: FindMonthBalance,
  ) {}

  @Post()
  async create(@Body() request: CreateLaunchBody, @User() user: CurrentUser) {
    const { launch } = await this.createLaunch.execute({
      ...request,
      userId: user.id,
    });

    return LaunchViewModel.toHttp(launch);
  }

  @Get()
  async findAll(@User() user: CurrentUser) {
    const { launch } = await this.findLaunch.execute({ userId: user.id });

    return launch.map(LaunchViewModel.toHttp);
  }

  @Post('month')
  async findMonthBalance(
    @Body() request: FindMonthBalanceBody,
    @User() user: CurrentUser,
  ) {
    const { launch } = await this.findLaunchBalance.execute({
      ...request,
      userId: user.id,
    });

    return launch;
  }
}
