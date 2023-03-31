import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    DevtoolsModule.register({
      http: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
