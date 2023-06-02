import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { CreateUser } from './create-user-usecase';
import { makeUser } from '@test/factories/make-user-factory';

describe('create user', () => {
  it('should be able to create an user', () => {
    const userRepository = new InMemoryUserRepository();
    const createUser = new CreateUser(userRepository);

    expect(async () => await createUser.execute(makeUser())).not.toThrow();
  });
});
