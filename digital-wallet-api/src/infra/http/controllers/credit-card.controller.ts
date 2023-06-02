import { CreateCreditCard } from '@application/usecases/credit-card/create-credit-card-usecase';
import { FindCreditCard } from '@application/usecases/credit-card/find-credit-card-usecase';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateCreditCardBody } from '../dtos/create-credit-card-body';
import { CurrentUser, User } from '../auth/decorator/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreditCardViewModel } from '../view-models/credit-card-view-model';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('Cartão de Credito')
@Controller('credit-card')
export class CreditCardController {
  constructor(
    private createCreditCard: CreateCreditCard,
    private findCreditCard: FindCreditCard,
  ) {}

  @Post()
  async create(
    @Body() request: CreateCreditCardBody,
    @User() user: CurrentUser,
  ) {
    await this.createCreditCard.execute({ ...request, userId: user.id });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async find(@User() user: CurrentUser) {
    const { creditCard } = await this.findCreditCard.execute({
      userId: user.id,
    });

    return creditCard.map(CreditCardViewModel.toHttp);
  }
}
