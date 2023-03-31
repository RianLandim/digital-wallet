import { CreditCard } from '@application/entities/credit-card';
import { CreditCardRepository } from '@application/repositories/credit-card-repository';

export class InMemoryCreditCardRepository implements CreditCardRepository {
  creditCard: CreditCard[] = [];

  async create(creditCard: CreditCard) {
    this.creditCard.push(creditCard);
  }
}
