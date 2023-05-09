import { CreditCard } from '@application/entities/credit-card';
import { Prisma } from '@prisma/client';

export class PrismaCreditCardMapper {
  static toPrisma(creditCard: CreditCard): Prisma.CreditCardCreateInput {
    const { id, ownerName, bankId, closedAt, expiratedAt, flagId, userId } =
      creditCard;
    return {
      bank: bankId,
      closedAt,
      expiratedAt,
      flag: flagId,
      ownerName,
      id,
      user: { connect: { id: userId } },
    };
  }
}
