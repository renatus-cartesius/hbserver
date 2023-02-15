const fxp = require("fast-xml-parser");
const fs = require("fs");
const jul = require("julian-date");

class HBDriver {
    constructor(xhb_file, parser_options = {
        ignoreAttributes: false,
        attributeNamePrefix: ""
    }){
        this.file = fs.readFileSync(xhb_file, 'utf-8');
        this.parser = new fxp.XMLParser(parser_options);
        this.homebank = this.parser.parse(this.file).homebank;
    };

    get operations(){
        let out_ope = this.homebank.ope;
        
        // Modifying operations for human-readable format
        // out_ope.forEach(operation => {
        //     operation.date = new Date(new jul().julian(738546 - 2440588).getDate())
        //         .toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
        // });

        return out_ope;
    }

    get accounts(){
        return this.homebank.account;
    }    
}

module.exports = {
    HBDriver
}