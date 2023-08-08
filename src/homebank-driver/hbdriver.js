const fxp = require("fast-xml-parser");
const fs = require("fs");

function julian(date){
    const time_point = 730120;
    const time_post_date = new Date("1/1/2000");
    time_post_date.setDate(time_post_date.getDate() + (date - time_point));

    return time_post_date.toLocaleString();
}

class HBDriver {
    constructor(xhb_file, parser_options = {
        ignoreAttributes: false,
        attributeNamePrefix: ""
    }){
        this.file = fs.readFileSync(xhb_file, 'utf-8');
        this.parser = new fxp.XMLParser(parser_options);
        this.homebank = this.parser.parse(this.file).homebank;
    };

    // Getting raw operations array in xhb file as Array[Object]
    get operations(){
        return this.homebank.ope.map((ope) => {
            return Object.assign({}, {human_date: julian(ope.date)}, ope);
        });
        // return this.homebank.ope;
    }

    // Getting all operations of account, provide with future option    
    account_operations(key, opt={ withFutures: false}){
        return this.operations.filter(ope => {
            if(opt.withFutures) {
                return (ope.account == key && parseInt(ope.date) <= parseInt(this.account(key).rdate));
            } else {
                return (ope.account == key);
            }
        });
    }

    // Getting raw accounts array in xhb file as Array[Object]
    get accounts(){
        return this.homebank.account;
    }

    // Getting info about specific by key account
    account(key){
        return this.accounts.find(acc => acc.key == key);
    }

    // Get a balance
    get_balance(key, opt={ onlyNow: true}){
        return this.account_operations(key, {withFutures: !opt.onlyNow}).reduce((sum, ope)=>{
            return sum += parseInt(ope.amount);
        }, parseInt(this.account(key).initial));
    }
}

module.exports = {
    HBDriver
}
