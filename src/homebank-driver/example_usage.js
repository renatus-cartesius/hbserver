const { HBDriver } = require(".");
const driver = new HBDriver('/home/renatus/moneys_backup_auto/moneys.origin-20230206.bak')
console.log(driver.operations);
// console.log(driver.homebank);