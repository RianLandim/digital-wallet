import { CreditCard } from '@application/entities/credit-card';
import { Prisma, CreditCard as PrismaCreditCard } from '@prisma/client';

export class PrismaCreditCardMapper {
  static toPrisma(creditCard: CreditCard): Prisma.CreditCardCreateInput {
    const { id, ownerName, bank, closedAt, expiratedAt, flag, userId, digits } =
      creditCard;
    return {
      closedAt,
      expiratedAt,
      bank,
      flag,
      ownerName,
      id,
      user: { connect: { id: userId } },
      digits,
    };
  }

  static toDomain(creditCard: PrismaCreditCard): CreditCard {
    return new CreditCard(
      {
        bank: creditCard.bank,
        closedAt: creditCard.closedAt,
        expiratedAt: creditCard.expiratedAt,
        flag: creditCard.flag,
        ownerName: creditCard.ownerName,
        userId: creditCard.userId,
        digits: creditCard.digits,
        createdAt: creditCard.createdAt,
        updatedAt: creditCard.updatedAt,
      },
      creditCard.id,
    );
  }
}
