import { CreditCard } from '@application/entities/credit-card';
import { CreditCardRepository } from '@application/repositories/credit-card-repository';
import { Injectable, NotFoundException } from '@nestjs/common';

interface FindCreditCardRequest {
  userId: string;
}
export interface FindCreditCardResponse {
  creditCard: CreditCard;
}

@Injectable()
export class FindCreditCard {
  constructor(private creditCardRepository: CreditCardRepository) {}

  async execute(request: FindCreditCardRequest) {
    const creditCard = await this.creditCardRepository.find(request.userId);

    if (!creditCard.length) {
      throw new NotFoundException('Nenhum cartão cadastro');
    }

    return {
      creditCard,
    };
  }
}
