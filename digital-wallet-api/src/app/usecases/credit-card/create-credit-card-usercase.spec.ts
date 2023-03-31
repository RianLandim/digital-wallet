import { InMemoryCreditCardRepository } from '@test/repositories/in-memory-credit-card-repository';
import { randomUUID } from 'crypto';
import { CreateCreditCard } from './create-credit-card-usecase';

describe('test create credit card usecase', () => {
  it('should be able to create an credit card', () => {
    const inMemoryCreditCardRepository = new InMemoryCreditCardRepository();
    const createCreditCard = new CreateCreditCard(inMemoryCreditCardRepository);

    expect(
      async () =>
        await createCreditCard.execute({
          bank: 'bank-test',
          closedAt: new Date(),
          expiratedAt: new Date(),
          flag: 'flag-test',
          ownerName: 'ownerName-test',
          userId: randomUUID(),
        }),
    ).not.toThrow();
  });
});
