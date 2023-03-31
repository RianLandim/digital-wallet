import { Login } from '@application/usecases/auth/login-usecase';
import { ValidateUser } from '@application/usecases/auth/vailidate-user-usecase';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'test-key',
      signOptions: { expiresIn: '360s' },
    }),
  ],
  controllers: [],
  providers: [Login, ValidateUser],
})
export class HttpModule {}
