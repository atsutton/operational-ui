"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
exports.months = months;
var range = function (n) { return Array.apply(null, { length: n }).map(function (val, i) { return i; }); };
exports.range = range;
var toDate = function (year, month, day) {
    return year + "-" + (month < 9 ? "0" : "") + (month + 1) + "-" + (day < 9 ? "0" : "") + (day + 1);
};
exports.toDate = toDate;
var daysInMonth = function (month, year) {
    return moment_1.default(toDate(year, month, 2)).daysInMonth();
};
exports.daysInMonth = daysInMonth;
//# sourceMappingURL=utils.js.map