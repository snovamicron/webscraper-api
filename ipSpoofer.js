"use strict";
exports.__esModule = true;
var country_ip_spoofer_1 = require("country-ip-spoofer");
var dataSet = require("./dataSet.json");

exports.random_ip = () => {
    (0, country_ip_spoofer_1.setDataTable)(dataSet);
    var countryCode = 'IN';
    var ip = (0, country_ip_spoofer_1.getIpOfCountry)(countryCode);
    return ip
}




