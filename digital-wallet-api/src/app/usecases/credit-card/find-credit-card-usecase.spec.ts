import { InMemoryCreditCardRepository } from '@test/repositories/in-memory-credit-card-repository';
import { CreateCreditCard } from './create-credit-card-usecase';
import { makeCreditCard } from '@test/factories/make-credit-card-factory';
import { FindCreditCard } from './find-credit-card-usecase';

describe('test suite to test find credit card use case', () => {
  const inMemoryCreditCardRepository = new InMemoryCreditCardRepository();
  const createCreditCard = new CreateCreditCard(inMemoryCreditCardRepository);
  const findCreditCard = new FindCreditCard(inMemoryCreditCardRepository);

  it('should be able to find all user credit cards', async () => {
    await createCreditCard.execute(makeCreditCard({ userId: 'test-userId' }));
    await createCreditCard.execute(makeCreditCard({ userId: 'test-userId' }));
    await createCreditCard.execute(makeCreditCard({ userId: 'test-userId2' }));

    const { creditCard } = await findCreditCard.execute({
      userId: 'test-userId',
    });

    const { creditCard: otherUserCreditCard } = await findCreditCard.execute({
      userId: 'test-userId2',
    });

    expect(creditCard.length).toEqual(2);
    expect(creditCard).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userId: 'test-userId',
        }),
        expect.objectContaining({
          userId: 'test-userId',
        }),
      ]),
    );

    expect(otherUserCreditCard.length).toEqual(1);
    expect(otherUserCreditCard).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userId: 'test-userId2',
        }),
      ]),
    );
  });

  it('should throw an error for not found credit card', () => {
    expect(findCreditCard.execute({ userId: 'test' })).rejects.toThrow();
  });
});
