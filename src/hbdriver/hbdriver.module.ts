import { Module } from '@nestjs/common';
import { HbdriverService } from './hbdriver.service';
import { HbdriverController } from './hbdriver.controller';

@Module({
  providers: [HbdriverService],
  controllers: [HbdriverController],
})
export class HbdriverModule {}
