import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get('hello')
  hello() {
    return 'asdfasdf';
  }
}
