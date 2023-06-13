import { LaunchRepository } from '@application/repositories/launch-repository';
import { LaunchViewModel } from '@infra/http/view-models/launch-view-model';
import { Injectable } from '@nestjs/common';
import { chain } from 'lodash';

interface FindLaunchRequest {
  userId: string;
  formatted?: boolean;
}

@Injectable()
export class FindLaunch {
  constructor(private launchRepository: LaunchRepository) {}

  async execute({ userId, formatted = true }: FindLaunchRequest) {
    const raw = await this.launchRepository.find(userId);

    if (formatted) {
      const launchViewModel = raw.map(LaunchViewModel.toHttp);

      const intl = new Intl.DateTimeFormat('en', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      });

      const launch = chain(launchViewModel)
        .groupBy((a) => intl.format(a.createdAt))
        .map((v, k) => ({ title: k, data: v.sort() }))
        .value()
        .sort((a, b) => Date.parse(b.title) - Date.parse(a.title));

      return {
        launch,
      };
    } else {
      const launchViewModel = raw
        .map(LaunchViewModel.toHttp)
        .filter((v) => v.category !== 'Salário');

      const launch = chain(launchViewModel)
        .groupBy((a) => a.category)
        .map((v, k) => ({
          title: k,
          data: v
            .filter((item) => item.category === k && item.type === 'DEBIT')
            .map((item) => item.value)
            .reduce((acc, val) => acc + val, 0)
            .toFixed(2),
        }))
        .value();

      return { launch };
    }
  }
}
