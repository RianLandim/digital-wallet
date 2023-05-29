import { CreditCard } from '@application/entities/credit-card';
import { Prisma, CreditCard as PrismaCreditCard } from '@prisma/client';

type CreditCardToDomain = PrismaCreditCard & {
  flag: {
    name: string;
  };
  bank: {
    name: string;
  };
};

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

  static toDomain(creditCard: CreditCardToDomain): CreditCard {
    return new CreditCard(
      {
        bankId: creditCard.bank.name,
        closedAt: creditCard.closedAt,
        expiratedAt: creditCard.expiratedAt,
        flagId: creditCard.flag.name,
        ownerName: creditCard.ownerName,
        userId: creditCard.userId,
        createdAt: creditCard.createdAt,
        updatedAt: creditCard.updatedAt,
      },
      creditCard.id,
    );
  }
}
