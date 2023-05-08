import { Launch } from '@application/entities/launch';
import { LaunchRepository } from '@application/repositories/launch-repository';

export class InMemoryLaunchRepository extends LaunchRepository {
  launch: Launch[] = [];

  async create(launch: Launch) {
    this.launch.push(launch);
  }
}