import { Controller, Get } from '@nestjs/common';
import { HbdriverService } from 'src/hbdriver/hbdriver.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly hbdriverService: HbdriverService) {}
}
