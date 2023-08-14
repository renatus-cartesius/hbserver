import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { HbdriverService } from 'src/hbdriver/hbdriver.service';

@Controller('api/accounts')
export class AccountsController {
  constructor(private readonly hbdriverService: HbdriverService) {}

  @Get('')
  listAll(){
    return this.hbdriverService.accounts;
  }

  @Get(':id')
  account(@Param('id', ParseIntPipe) id: number){
    const result = this.hbdriverService.account(id);
    if(!result) { throw new HttpException(`Account ${id} does not exists`, HttpStatus.NOT_FOUND); }
    return result;
  }
}
