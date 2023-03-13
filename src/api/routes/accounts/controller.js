const homebank_driver = require("homebank-driver");
const hbdriver = new homebank_driver.HBDriver(process.env.XHB_PATH);

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
