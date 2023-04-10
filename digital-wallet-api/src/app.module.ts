import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    DevtoolsModule.register({
      http: true,
    }),
    HttpModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
