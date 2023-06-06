import { LaunchType } from '@application/entities/launch';
import { LaunchRepository } from '@application/repositories/launch-repository';
import { LaunchViewModel } from '@infra/http/view-models/launch-view-model';
import { Injectable } from '@nestjs/common';
import { chain } from 'lodash';

interface FindLaunchRequest {
  userId: string;
}
interface FindLaunchResponse {
  launch: {
    title: string;
    data: {
      id: string;
      value: number;
      type: LaunchType;
      createdAt: Date;
      updatedAt: Date;
    }[];
  }[];
}

@Injectable()
export class FindLaunch {
  constructor(private launchRepository: LaunchRepository) {}

  async execute({ userId }: FindLaunchRequest): Promise<FindLaunchResponse> {
    const raw = await this.launchRepository.find(userId);

    const launchViewModel = raw.map(LaunchViewModel.toHttp);

    const intl = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    });

    const launch = chain(launchViewModel)
      .groupBy((a) => intl.format(a.createdAt))
      .map((v, k) => ({ title: k, data: v.sort().reverse() }))
      .sort()
      .reverse()
      .value();

    return {
      launch,
    };
  }
}
