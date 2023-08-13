import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { OperationsController } from './operations/operations.controller';
import { AccountsController } from './accounts/accounts.controller';
import { HbdriverModule } from 'src/hbdriver/hbdriver.module';

@Module({
  imports: [
    HbdriverModule
  ],
  controllers: [ApiController, OperationsController, AccountsController],
  providers: [ApiService],
})
export class ApiModule {}
