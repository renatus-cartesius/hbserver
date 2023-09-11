import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { HbdriverModule } from './hbdriver/hbdriver.module';
import { ConfigModule } from '@nestjs/config';
import configurationLoad from './configurationLoad';

@Module({
  imports: [
    ApiModule,
    HbdriverModule,
    ConfigModule.forRoot({
      load: [configurationLoad],
      isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
