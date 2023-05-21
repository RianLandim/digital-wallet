import { Flag } from '@application/entities/flag';

export abstract class FlagRepository {
  abstract create(flag: Flag): Promise<void>;
}
