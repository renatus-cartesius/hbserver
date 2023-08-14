import { Controller, Get } from '@nestjs/common';
import { HbdriverService } from 'src/hbdriver/hbdriver.service';

@Controller('api')
export class ApiController {
  constructor(private readonly hbdriveService: HbdriverService) {}

  @Get('hello')
  hello() {
    return 'asdfasdf';
  }
  
  @Get('hb')
  hb(){
    return this.hbdriveService.operations;
  }
}
