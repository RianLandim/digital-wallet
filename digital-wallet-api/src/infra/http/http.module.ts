import { Login } from '@application/usecases/auth/login-usecase';
import { ValidateUser } from '@application/usecases/auth/vailidate-user-usecase';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './controllers/user.controller';
import { CreateUser } from '@application/usecases/user/create-user';

@Module({
  imports: [
    JwtModule.register({
      secret: 'test-key',
      signOptions: { expiresIn: '360s' },
    }),
  ],
  controllers: [UserController],
  providers: [Login, ValidateUser, CreateUser],
})
export class HttpModule {}
