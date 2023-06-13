import { Launch } from '@application/entities/launch';

export class LaunchViewModel {
  static toHttp(launch: Launch) {
    return {
      id: launch.id,
      value: launch.value,
      title: launch.title,
      type: launch.type,
      category: launch.category,
      createdAt: launch.createdAt,
      updatedAt: launch.updatedAt,
    };
  }
}
