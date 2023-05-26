import { Launch } from '@application/entities/launch';
import { LaunchRepository } from '@application/repositories/launch-repository';

export class InMemoryLaunchRepository implements LaunchRepository {
  launch: Launch[] = [];

  async create(launch: Launch) {
    this.launch.push(launch);
  }

  async find(userId: string): Promise<Launch[]> {
    return this.launch.filter((v) => v.userId === userId);
  }
}
