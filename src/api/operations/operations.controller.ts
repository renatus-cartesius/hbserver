import { Controller, Get } from '@nestjs/common';
import { HbdriverService } from 'src/hbdriver/hbdriver.service';

@Controller('api/operations')
export class OperationsController {
  constructor(private readonly hbdriverService: HbdriverService) {}

  @Get('all')
  listAll(){
    return this.hbdriverService.operations;
  }
}
