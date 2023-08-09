import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { HbdriverModule } from './hbdriver/hbdriver.module';

@Module({
  imports: [ApiModule, HbdriverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
