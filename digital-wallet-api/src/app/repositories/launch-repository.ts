import { Launch } from '../entities/launch';

export abstract class LaunchRepository {
  abstract create(launch: Launch): Promise<void>;
  abstract find(userId: string): Promise<Launch[]>;
}
