import { User } from './user';

describe('User Entity', () => {
  it('should be able to create an user entity', () => {
    const user = new User({
      username: 'username-test',
      password: 'password-test',
      earning: 1200,
      name: 'name-test',
      earningDay: new Date().getDay(),
      cpf: 'cpf-test',
      birthday: new Date(),
    });

    expect(user).toBeInstanceOf(User);
  });
});
