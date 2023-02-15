const homebank_driver = require("homebank-driver");
const hbdriver = new homebank_driver.HBDriver("/home/renatus/moneys_backup_auto/moneys.origin-20230206.bak");

const controller = {
    list_all: function(){
        return {accounts: hbdriver.accounts}
    },
    status: function(key, opt={byToday: true}){
        return {
            account: hbdriver.account(key),
            balance: hbdriver.get_balance(key, {
                onlyNow: opt.byToday
            })
        }
    },
    operations: function(key, opt={byToday: true}){
        return {
            account: hbdriver.account(key),
            operations: hbdriver.account_operations(key, {
                withFutures: !opt.byToday
            }) 
        }
    }
}

module.exports = controller;