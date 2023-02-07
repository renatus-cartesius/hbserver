const fxp = require("fast-xml-parser");
const fs = require("fs");

class HBDriver {
    constructor(xhb_file, options = {
        ignoreAttributes: false,
        attributeNamePrefix: ""
    }){
        this.file = fs.readFileSync(xhb_file, 'utf-8');
        this.parser = new fxp.XMLParser(options);
        this.homebank = this.parser.parse(this.file).homebank;
    };

    get operations(){
        return this.homebank.ope;
    }

}

module.exports = {
    HBDriver
}