import { CreditCard } from '@application/entities/credit-card';
import { randomUUID } from 'crypto';

type Override = Partial<CreditCard>;

export function makeCreditCard(override: Override = {}) {
  return new CreditCard(
    {
      bank: 'bank-test',
      digits: 4546,
      closedAt: new Date(),
      expiratedAt: new Date(),
      flag: 'flag-test',
      ownerName: 'ownerName-test',
      userId: randomUUID(),
      ...override,
    },
    override?.id,
  );
}
