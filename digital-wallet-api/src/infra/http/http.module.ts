import { Login } from '@application/usecases/auth/login-usecase';
import { ValidateUser } from '@application/usecases/auth/vailidate-user-usecase';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './controllers/user.controller';
import { CreateUser } from '@application/usecases/user/create-user';
import { CreditCardController } from './controllers/credit-card.controller';
import { CreateCreditCard } from '@application/usecases/credit-card/create-credit-card-usecase';
import { JwtStrategy } from './auth/jwt-strategy';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { AuthController } from './controllers/auth.controller';
import { FindByUsername } from '@application/usecases/user/find-user-by-username';

@Module({
  imports: [
    JwtModule.register({
      secret: 'test-key',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UserController, CreditCardController, AuthController],
  providers: [
    Login,
    ValidateUser,
    CreateUser,
    CreateCreditCard,
    JwtStrategy,
    PrismaService,
    FindByUsername,
  ],
})
export class HttpModule {}
