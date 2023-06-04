import { CreditCard } from '@application/entities/credit-card';
import { CreditCardRepository } from '@application/repositories/credit-card-repository';
import { Injectable } from '@nestjs/common';

export interface CreateCreditCardRequest {
  ownerName: string;
  flag: string;
  bank: string;
  closedAt: Date;
  digits: number;
  expiratedAt: Date;
  userId: string;
}
export interface CreateCreditCardResponse {
  creditCard: CreditCard;
}

@Injectable()
export class CreateCreditCard {
  constructor(private creditCardRepository: CreditCardRepository) {}

  async execute(
    request: CreateCreditCardRequest,
  ): Promise<CreateCreditCardResponse> {
    const { bank, closedAt, expiratedAt, flag, ownerName, userId, digits } =
      request;

    const creditCard = new CreditCard({
      bank,
      closedAt,
      expiratedAt,
      flag,
      ownerName,
      userId,
      digits,
    });

    await this.creditCardRepository.create(creditCard);

    return {
      creditCard,
    };
  }
}
