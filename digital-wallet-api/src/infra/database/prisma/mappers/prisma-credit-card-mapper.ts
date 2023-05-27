import { CreditCard } from '@application/entities/credit-card';
import { Prisma, CreditCard as PrismaCreditCard } from '@prisma/client';

export class PrismaCreditCardMapper {
  static toPrisma(creditCard: CreditCard): Prisma.CreditCardCreateInput {
    const { id, ownerName, bankId, closedAt, expiratedAt, flagId, userId } =
      creditCard;
    return {
      bank: {
        connect: {
          id: bankId,
        },
      },
      closedAt,
      expiratedAt,
      flag: {
        connect: {
          id: flagId,
        },
      },
      ownerName,
      id,
      user: { connect: { id: userId } },
    };
  }

  static toDomain(creditCard: PrismaCreditCard): CreditCard {
    return new CreditCard(
      {
        bankId: creditCard.bankId,
        closedAt: creditCard.closedAt,
        expiratedAt: creditCard.expiratedAt,
        flagId: creditCard.flagId,
        ownerName: creditCard.ownerName,
        userId: creditCard.userId,
        createdAt: creditCard.createdAt,
        updatedAt: creditCard.updatedAt,
      },
      creditCard.id,
    );
  }
}
