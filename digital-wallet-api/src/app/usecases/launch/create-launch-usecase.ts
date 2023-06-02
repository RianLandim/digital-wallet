import { Launch, LaunchType } from '@application/entities/launch';
import { LaunchRepository } from '@application/repositories/launch-repository';
import { Injectable } from '@nestjs/common';

export interface CreateLaunchRequest {
  value: number;
  type: LaunchType;
  userId: string;
}

export interface CreateLaunchResponse {
  launch: Launch;
}

@Injectable()
export class CreateLaunch {
  constructor(private launchRepository: LaunchRepository) {}

  async execute(request: CreateLaunchRequest): Promise<CreateLaunchResponse> {
    const { value, type, userId } = request;

    const launch = new Launch({
      value,
      type,
      userId,
    });

    await this.launchRepository.create(launch);

    return {
      launch,
    };
  }
}
