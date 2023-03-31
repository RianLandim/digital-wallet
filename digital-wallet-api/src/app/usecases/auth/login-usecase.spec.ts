import { JwtService } from '@nestjs/jwt';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { CreateUser } from '../user/create-user';
import { Login } from './login-usecase';
import { ValidateUser } from './vailidate-user-usecase';

describe('', () => {
  it('should be able to make login', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository();
    const createUser = new CreateUser(inMemoryUserRepository);
    const validateUser = new ValidateUser(inMemoryUserRepository);
    const jwtService = new JwtService({ secret: 'test-key' });
    const login = new Login(validateUser, jwtService);

    const password = 'password-test';

    const { user } = await createUser.execute({
      cpf: 'cpf-test',
      earning: 'earning-test',
      earningDay: new Date(),
      name: 'name-user',
      password,
      username: 'username-test',
    });

    expect(
      login.execute({ password, username: user.username }),
    ).resolves.not.toThrow();
  });
});
