import { CreditCard } from '@application/entities/credit-card';
import { CreditCardRepository } from '@application/repositories/credit-card-repository';
import { Injectable } from '@nestjs/common';

export interface CreateCreditCardRequest {
  ownerName: string;
  flag: string;
  bank: string;
  closedAt: string;
  digits: string;
  expiratedAt: string;
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
      closedAt: Number(closedAt),
      expiratedAt: Number(expiratedAt),
      flag,
      ownerName,
      userId,
      digits: Number(digits),
    });

    await this.creditCardRepository.create(creditCard);

    return {
      creditCard,
    };
  }
}
