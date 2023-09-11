import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { XMLParser } from 'fast-xml-parser';
import { readFileSync } from 'fs';

@Injectable()
export class HbdriverService {
  private homebank: any;
  private readonly hbdriver = this.configService.get<{xhbPath: string, parserOpts: any}>('hbdriver');

  constructor(private readonly configService: ConfigService){
    const rawData = readFileSync(this.hbdriver.xhbPath);
    
    const parser = new XMLParser({
      ...this.hbdriver.parserOpts,
      transformTagName: (tagName) => tagName.toLowerCase()
    });

    this.homebank = parser.parse(rawData).homebank;
  }

  get operations(){
    return this.homebank.ope.map((ope) => {
        return {human_date: julian(ope.date), ...ope};
    });
  }

  get accounts(){
    return this.homebank.account;
  }

  account(id: number){
    return this.accounts.find(account => account.key == id)
  }

  accountOperations(key, opt={ withFutures: false}){
      return this.operations.filter(ope => {
          if(opt.withFutures) {
              return (ope.account == key && parseInt(ope.date) <= parseInt(this.account(key).rdate));
          } else {
              return (ope.account == key);
          }
      });
  }

  accountBalance(key, opt={ withFutures: true }){
    return this.accountOperations(key, {withFutures: !opt.withFutures}).reduce((sum, ope)=>{
        return sum += parseInt(ope.amount);
    }, parseInt(this.account(key).initial));
  }
}

function julian(date){
    const time_point = 730120;
    const time_post_date = new Date("1/1/2000");
    time_post_date.setDate(time_post_date.getDate() + (date - time_point));

    return time_post_date;
}
