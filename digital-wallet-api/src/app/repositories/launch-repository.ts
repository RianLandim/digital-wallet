import { Launch } from '../entities/launch';

export abstract class LaunchRepository {
  abstract create(launch: Launch): Promise<void>;
}
