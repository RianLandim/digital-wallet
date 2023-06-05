import { Launch } from '@application/entities/launch';
import { LaunchRepository } from '@application/repositories/launch-repository';
import { Injectable } from '@nestjs/common';

interface FindMonthBalanceRequest {
  userId: string;
  current: boolean;
  day?: Date;
}

export interface FindMonthBalanceResponse {
  launch: Launch[];
}

@Injectable()
export class FindMonthBalance {
  constructor(private launchRepository: LaunchRepository) {}

  async execute(
    request: FindMonthBalanceRequest,
  ): Promise<FindMonthBalanceResponse> {
    const { userId, current, day } = request;

    const launch = await this.launchRepository.findMonthBalance(
      userId,
      current,
      day,
    );

    return { launch };
  }
}
