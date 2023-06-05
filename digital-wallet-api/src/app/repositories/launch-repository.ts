import { Launch } from '../entities/launch';

export abstract class LaunchRepository {
  abstract create(launch: Launch): Promise<void>;
  abstract find(userId: string): Promise<Launch[]>;
  abstract findMonthBalance(
    userId: string,
    current: boolean,
    day?: Date,
  ): Promise<Launch[]>;
}
