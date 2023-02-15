const { HBDriver } = require(".");
const driver = new HBDriver('/home/renatus/moneys_backup_auto/moneys.origin-20230206.bak')
// console.log(driver.accounts);
// console.log(driver.account_status("2"));
console.log(driver.get_balance(1));
console.log(driver.get_balance(1, {onlyNow: true}));
// console.log(driver.homebank);