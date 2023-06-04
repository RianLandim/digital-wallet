import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindUserBalance {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string) {
    const balance = await this.userRepository.findBalance(userId);

    return balance;
  }
}
