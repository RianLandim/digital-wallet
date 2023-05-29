import { InMemoryCreditCardRepository } from '@test/repositories/in-memory-credit-card-repository';
import { CreateCreditCard } from './create-credit-card-usecase';
import { makeCreditCard } from '@test/factories/make-credit-card-factory';

describe('test create credit card usecase', () => {
  it('should be able to create an credit card', async () => {
    const inMemoryCreditCardRepository = new InMemoryCreditCardRepository();
    const createCreditCard = new CreateCreditCard(inMemoryCreditCardRepository);

    const { creditCard } = await createCreditCard.execute(
      makeCreditCard({ userId: 'test-userId' }),
    );

    expect(creditCard).toEqual(
      expect.objectContaining({ userId: 'test-userId' }),
    );
  });
});
