"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const main_1 = require("./main");
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
exports.add = add;
const calculation = (0, main_1.add)(8, 5);
console.log(calculation);
const calculation2 = (0, main_1.subtract)(8, 7);
