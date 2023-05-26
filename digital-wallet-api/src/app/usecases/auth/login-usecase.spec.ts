import { JwtService } from '@nestjs/jwt';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { CreateUser } from '../user/create-user';
import { Login } from './login-usecase';
import { ValidateUser } from './vailidate-user-usecase';
import { makeUser } from '@test/factories/make-user-factory';

describe('', () => {
  it('should be able to make login', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const createUser = new CreateUser(inMemoryUserRepository);
    const validateUser = new ValidateUser(inMemoryUserRepository);
    const jwtService = new JwtService({ secret: 'test-key' });
    const login = new Login(validateUser, jwtService);

    const password = 'password-test';

    const { user } = await createUser.execute(makeUser({ password }));

    expect(
      login.execute({ password, username: user.username }),
    ).resolves.not.toThrow();
  });
});
