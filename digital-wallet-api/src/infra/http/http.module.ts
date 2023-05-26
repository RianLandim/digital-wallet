import { Login } from '@application/usecases/auth/login-usecase';
import { ValidateUser } from '@application/usecases/auth/vailidate-user-usecase';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './controllers/user.controller';
import { CreateUser } from '@application/usecases/user/create-user';
import { CreditCardController } from './auth/credit-card.controller';
import { CreateCreditCard } from '@application/usecases/credit-card/create-credit-card-usecase';
import { JwtStrategy } from './auth/jwt-strategy';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { AuthController } from './controllers/auth.controller';
import { FindByUsername } from '@application/usecases/user/find-user-by-username';
import { CategoryController } from './controllers/category.controller';
import { CreateCategory } from '@application/usecases/category/create-category-usecase';
import { FindCategory } from '@application/usecases/category/find-category-usecase';
import { CreateLaunch } from '@application/usecases/launch/create-launch-usecase';
import { LaunchController } from './controllers/launch.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'test-key',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [
    UserController,
    CreditCardController,
    AuthController,
    CategoryController,
    LaunchController,
  ],
  providers: [
    Login,
    ValidateUser,
    CreateUser,
    CreateCreditCard,
    JwtStrategy,
    PrismaService,
    FindByUsername,
    CreateCategory,
    FindCategory,
    CreateLaunch,
  ],
})
export class HttpModule {}
