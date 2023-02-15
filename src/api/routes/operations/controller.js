const homebank_driver = require("homebank-driver");
const hbdriver = new homebank_driver.HBDriver("/home/renatus/moneys_backup_auto/moneys.origin-20230206.bak");

const controller = {
    list_all: function(){
        return {ops: hbdriver.operations}
    }
}

module.exports = controller;