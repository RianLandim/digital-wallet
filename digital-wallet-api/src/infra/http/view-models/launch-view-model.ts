import { Launch } from '@application/entities/launch';

export class LaunchViewModel {
  static toHttp(launch: Launch) {
    return {
      id: launch.id,
      value: launch.value,
      type: launch.type,
      createdAt: launch.createdAt,
      updatedAt: launch.updatedAt,
    };
  }
}
