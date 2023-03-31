import { randomUUID } from 'crypto';
import { CreditCard } from './credit-card';

describe('', () => {
  it('should be able to create an credid card entity', () => {
    const creditCard = new CreditCard({
      bank: 'bank-test',
      closedAt: new Date(),
      expiratedAt: new Date(),
      flag: 'flag-test',
      ownerName: 'ownerName-test',
      userId: randomUUID(),
    });

    expect(creditCard).toBeInstanceOf(CreditCard);
  });
});
