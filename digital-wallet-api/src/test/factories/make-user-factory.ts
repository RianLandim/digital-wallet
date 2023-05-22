import { User } from '@application/entities/user';

type Override = Partial<User>;

export function makeUser(override: Override = {}) {
  return new User({
    earning: 1200,
    earningDay: new Date().getDay(),
    name: 'name-test',
    password: 'teste123',
    username: 'teste@gmail.com',
    cpf: 'cpf-test',
    birthday: new Date(),
    ...override,
  });
}
