import { JwtService } from '@nestjs/jwt';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { CreateUser } from '../user/create-user-usecase';
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

    const userObject = makeUser({ password: 'password-test' });

    const { user: rawUser } = await createUser.execute(userObject);

    const { user, accessToken } = await login.execute({
      password: userObject.password,
      username: rawUser.username,
    });

    expect(jwtService.verify(accessToken)).toEqual(
      expect.objectContaining({
        username: 'teste@gmail.com',
        sub: rawUser.id,
      }),
    );
    expect(user).toEqual(
      expect.objectContaining({
        username: 'teste@gmail.com',
        cpf: 'cpf-test',
      }),
    );
  });
});
