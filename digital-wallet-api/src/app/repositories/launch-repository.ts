import { Launch } from '../entities/launch';

export abstract class LaunchRepository {
  abstract create(user: Launch): Promise<void>;
}
