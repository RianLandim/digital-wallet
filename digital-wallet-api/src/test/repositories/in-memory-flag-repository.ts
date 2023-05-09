import { Flag } from '@application/entities/flag';
import { FlagRepository } from '@application/repositories/flag-repository';

export class InMemoryFlagRepository implements FlagRepository {
  flag: Flag[] = [];

  async create(flag: Flag) {
    this.flag.push(flag);
  }
}
