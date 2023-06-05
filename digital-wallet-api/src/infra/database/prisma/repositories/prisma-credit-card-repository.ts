import { CreditCard } from '@application/entities/credit-card';
import { CreditCardRepository } from '@application/repositories/credit-card-repository';
import { PrismaCreditCardMapper } from '../mappers/prisma-credit-card-mapper';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCreditCardRepository implements CreditCardRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(creditCard: CreditCard) {
    const rawCreditCard = PrismaCreditCardMapper.toPrisma(creditCard);

    await this.prisma.creditCard.create({
      data: rawCreditCard,
    });
  }

  async find(userId: string): Promise<CreditCard[]> {
    const raw = await this.prisma.creditCard.findMany({
      where: {
        userId,
      },
    });

    return raw.map(PrismaCreditCardMapper.toDomain);
  }
}
