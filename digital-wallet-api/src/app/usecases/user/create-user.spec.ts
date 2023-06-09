import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { CreateUser } from './create-user';

describe('create user usecase', () => {
  it('should be able to create an user', () => {
    const userRepository = new InMemoryUserRepository();
    const createUser = new CreateUser(userRepository);

    expect(
      async () =>
        await createUser.execute({
          earning: 'earning-test',
          earningDay: new Date(),
          name: 'name-test',
          password: 'password-test',
          username: 'username-test',
          cpf: 'cpf-test',
        }),
    ).not.toThrow();
  });
});
