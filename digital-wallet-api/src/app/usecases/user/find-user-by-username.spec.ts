import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { FindByUsername } from './find-user-by-username';
import { CreateUser } from './create-user';
import { makeUser } from '@test/factories/make-user-factory';

describe('find user by username', () => {
  it('should be able to find an user by username', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const createUser = new CreateUser(inMemoryUserRepository);
    const findUserByUsername = new FindByUsername(inMemoryUserRepository);

    await createUser.execute(makeUser({ username: 'rianlandim222@gmail.com' }));

    const { user } = await findUserByUsername.execute({
      username: 'rianlandim222@gmail.com',
    });

    expect(user).toEqual(
      expect.objectContaining({ username: 'rianlandim222@gmail.com' }),
    );
  });
});
