import { CreditCard } from '@application/entities/credit-card';
import { CreditCardRepository } from '@application/repositories/credit-card-repository';
import { Injectable } from '@nestjs/common';

export interface CreateCreditCardRequest {
  ownerName: string;
  flag: string;
  bank: string;
  closedAt: Date;
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
    const { bank, closedAt, expiratedAt, flag, ownerName, userId } = request;

    const creditCard = new CreditCard({
      bankId: bank,
      closedAt,
      expiratedAt,
      flagId: flag,
      ownerName,
      userId,
    });

    await this.creditCardRepository.create(creditCard);

    return {
      creditCard,
    };
  }
}
