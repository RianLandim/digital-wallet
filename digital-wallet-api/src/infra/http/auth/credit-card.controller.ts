import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CreateCreditCard } from '@application/usecases/credit-card/create-credit-card-usecase';
import { CurrentUser, User } from './decorator/current-user.decorator';
import { CreateCreditCardBody } from '../dtos/create-credit-card-body';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Cartão de credito')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('credit-card')
export class CreditCardController {
  constructor(private createCreditCard: CreateCreditCard) {}

  @Post()
  create(@Body() request: CreateCreditCardBody, @User() user: CurrentUser) {
    return this.createCreditCard.execute({ ...request, userId: user.id });
  }
}
