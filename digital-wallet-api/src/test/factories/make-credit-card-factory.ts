import { CreditCard } from '@application/entities/credit-card';
import { randomUUID } from 'crypto';

type Override = Partial<CreditCard>;

export function makeCreditCard(override: Override = {}) {
  return new CreditCard(
    {
      bankId: 'bank-test',
      closedAt: new Date(),
      expiratedAt: new Date(),
      flagId: 'flag-test',
      ownerName: 'ownerName-test',
      userId: randomUUID(),
      ...override,
    },
    override?.id,
  );
}
