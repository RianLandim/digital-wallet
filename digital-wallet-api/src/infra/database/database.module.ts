import { UserRepository } from '@application/repositories/user-repository';
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository';
import { CreditCardRepository } from '@application/repositories/credit-card-repository';
import { PrismaCreditCardRepository } from './prisma/repositories/prisma-credit-card-repository';
import { CategoryRepository } from '@application/repositories/category-repository';
import { PrismaCategoryRepository } from './prisma/repositories/prisma-category-respository';

@Global()
@Module({
  imports: [],
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
    { provide: CreditCardRepository, useClass: PrismaCreditCardRepository },
    { provide: CategoryRepository, useClass: PrismaCategoryRepository },
  ],
  exports: [UserRepository, CreditCardRepository],
})
export class DatabaseModule {}
