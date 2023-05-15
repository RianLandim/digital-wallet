import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { FindByUsername } from './find-user-by-username';

describe('find user by username', () => {
  it('should be able to find an user by username', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const findUserByUsername = new FindByUsername(inMemoryUserRepository);

    const { user } = await findUserByUsername.execute({
      username: 'rianlandim222@gmail.com',
    });

    expect(user).toBeTruthy();
    expect(user).toBe(
      expect.objectContaining({ username: 'rianlandim222@gmail.com' }),
    );
  });
});
