import { CreditCard } from '@application/entities/credit-card';

export abstract class CreditCardRepository {
  abstract create(creditCard: CreditCard): Promise<void>;
  abstract find(userId: string): Promise<CreditCard[]>;
}
