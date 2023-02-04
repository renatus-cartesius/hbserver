const homebank_driver = require("homebank-driver");
const hbdriver = new homebank_driver.HBDriver();

const controller = {
    list_all: function(){
        return {msg: hbdriver.hello}
    }
}

module.exports = controller;