import { CreateGoal } from '@application/usecases/goal/create-goal-usecase';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateGoalBody } from '../dtos/create-goal-body';
import { FindGoal } from '@application/usecases/goal/find-goal-usecase';
import { CurrentUser, User } from '../auth/decorator/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateGoal } from '@application/usecases/goal/update-goal-usecase';
import { UpdateGoalBody } from '../dtos/update-goal-body';

@Controller('goal')
@UseGuards(JwtAuthGuard)
export class GoalController {
  constructor(
    private createGoal: CreateGoal,
    private findGoal: FindGoal,
    private updateGoal: UpdateGoal,
  ) {}

  @Post()
  async create(@Body() request: CreateGoalBody) {
    return this.createGoal.execute(request);
  }

  @Get()
  async list(@User() user: CurrentUser) {
    return this.findGoal.execute({ userId: user.id });
  }

  @Put(':id')
  async update(
    @Body() request: UpdateGoalBody,
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ) {
    return this.updateGoal.execute({ ...request, id });
  }
}
