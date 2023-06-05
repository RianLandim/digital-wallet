import { CreditCard } from '@application/entities/credit-card';

export class CreditCardViewModel {
  static toHttp(creditCard: CreditCard) {
    return {
      id: creditCard.id,
      ownerName: creditCard.ownerName,
      flag: creditCard.flag,
      bank: creditCard.bank,
      digits: creditCard.digits,
      expiratedAt: creditCard.expiratedAt,
      closedAt: creditCard.closedAt,
    };
  }
}
