import { Flag } from '@application/entities/flag';
import { FlagRepository } from '@application/repositories/flag-repository';

interface CreateFlagRequest {
  name: string;
  image: string;
}
interface CreateFlagResponse {
  flag: Flag;
}

export class CreateFlag {
  constructor(private flagRepository: FlagRepository) {}

  execute(request: CreateFlagRequest) {
    const { image, name } = request;

    const flag = new Flag({
      name,
      image,
    });

    this.flagRepository.create(flag);

    return { flag };
  }
}
