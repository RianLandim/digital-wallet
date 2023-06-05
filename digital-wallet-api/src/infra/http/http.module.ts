import { Login } from '@application/usecases/auth/login-usecase';
import { ValidateUser } from '@application/usecases/auth/vailidate-user-usecase';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './controllers/user.controller';
import { CreateUser } from '@application/usecases/user/create-user-usecase';
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
import { FindLaunch } from '@application/usecases/launch/find-launch-usecase';
import { FindUserBalance } from '@application/usecases/user/find-user-balance';
import { CreditCardController } from './controllers/credit-card.controller';
import { FindCreditCard } from '@application/usecases/credit-card/find-credit-card-usecase';
import { GoalController } from './controllers/goal.controller';
import { CreateGoal } from '@application/usecases/goal/create-goal-usecase';
import { FindGoal } from '@application/usecases/goal/find-goal-usecase';
import { UpdateGoal } from '@application/usecases/goal/update-goal-usecase';

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
    GoalController,
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
    FindLaunch,
    FindUserBalance,
    FindCreditCard,
    CreateGoal,
    FindGoal,
    UpdateGoal,
  ],
})
export class HttpModule {}
