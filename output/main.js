"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add = void 0;
const add = (param1, param2) => {
    return param1 + param2;
};
exports.add = add;
const subtract = (param1, param2) => {
    // here using "export syntex we can avoid naming conflicts of global scope, by using "export" syntax we can boxed up any function ,method or variable so that we can redeclare it on other file.
    return param1 - param2;
};
exports.subtract = subtract;
// in type script all code base will convirt to common.js formate on compile time.if we want to compile this in other format like es6 er es2015 then we can did it just go to tsconfig.json file and search "module" and change the value from common.js to ex6 or other format you want. You can get availabe suggestion just clicking "ctrl + space bar".
