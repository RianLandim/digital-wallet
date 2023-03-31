import { User } from './user';

describe('User Entity', () => {
  it('should be able to create an user entity', () => {
    const user = new User({
      username: 'username-test',
      password: 'password-test',
      earning: 'earning-test',
      name: 'name-test',
      earningDay: new Date(),
      cpf: 'cpf-test',
    });

    expect(user).toBeInstanceOf(User);
  });
});
