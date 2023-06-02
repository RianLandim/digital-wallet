import { Launch } from '@application/entities/launch';
import { LaunchRepository } from '@application/repositories/launch-repository';
import { Injectable } from '@nestjs/common';

interface FindLaunchRequest {
  userId: string;
}
interface FindLaunchResponse {
  launch: Launch[];
}

@Injectable()
export class FindLaunch {
  constructor(private launchRepository: LaunchRepository) {}

  async execute({ userId }: FindLaunchRequest): Promise<FindLaunchResponse> {
    const launch = await this.launchRepository.find(userId);

    return {
      launch,
    };
  }
}
