import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { HbdriverService } from 'src/hbdriver/hbdriver.service';
import { IdPipe } from '../api.pipe';

@Controller('api/accounts')
export class AccountsController {
  constructor(private readonly hbdriverService: HbdriverService) {}

  @Get('')
  listAll(){
    return this.hbdriverService.accounts;
  }

  @Get(':id')
  account(@Param('id', IdPipe) id: number){
    const result = this.hbdriverService.account(id);
    if(!result) { throw new HttpException(`Account ${id} does not exists`, HttpStatus.NOT_FOUND); }
    return result;
  }

  @Get(':id/balance')
  accountBalance(@Param('id', IdPipe) id: number){
    return this.hbdriverService.accountBalance(id);
  }
  
  @Get(':id/operations')
  accountOperations(@Param('id', IdPipe) id: number){
    return this.hbdriverService.accountOperations(id);
  }
}
