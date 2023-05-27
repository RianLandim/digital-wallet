import { User } from '@application/entities/user';
import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';

interface FindUserByUsernameRequest {
  username: string;
}

export interface FindUserByUsernameResponse {
  user: User;
}

@Injectable()
export class FindByUsername {
  constructor(private userRepository: UserRepository) {}

  async execute(
    request: FindUserByUsernameRequest,
  ): Promise<FindUserByUsernameResponse> {
    const user = await this.userRepository.findByUsername(request.username);

    return { user };
  }
}
