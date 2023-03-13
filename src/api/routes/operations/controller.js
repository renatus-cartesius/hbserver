const homebank_driver = require("homebank-driver");
const hbdriver = new homebank_driver.HBDriver(process.env.XHB_PATH);

const controller = {
    list_all: function(){
        return {ops: hbdriver.operations}
    }
}

module.exports = controller;
