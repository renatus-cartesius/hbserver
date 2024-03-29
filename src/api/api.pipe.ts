import { ArgumentMetadata, BadRequestException, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { HbdriverService } from "src/hbdriver/hbdriver.service";
import { isNumber } from "util";

@Injectable()
export class IdPipe implements PipeTransform{
  constructor(private readonly hbdriverService: HbdriverService) {}

  transform(value, metadata: ArgumentMetadata) {
    // If ID is not a number than return a BadRequestException
    if(isNaN(value)) { throw new BadRequestException(`Given account id "${value}" is not a number`);}

    // If account with such ID is not exists than throw HttpException 
    if(!this.hbdriverService.account(value)) { throw new HttpException(`Account ${value} not found`, HttpStatus.NOT_FOUND); }
    return value;
  }
}
