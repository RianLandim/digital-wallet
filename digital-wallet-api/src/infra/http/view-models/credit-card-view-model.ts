import { CreditCard } from '@application/entities/credit-card';

export class CreditCardViewModel {
  static toHttp(creditCard: CreditCard) {
    return {
      id: creditCard.id,
      ownerName: creditCard.ownerName,
      flag: creditCard.flagId,
      bank: creditCard.bankId,
      expiratedAt: creditCard.expiratedAt,
    };
  }
}
