"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = void 0;
const subtract = (param1, param2) => {
    // here using "export syntex we can avoid naming conflicts of global scope, by using "export" syntax we can boxed up any function ,method or variable so that we can redeclare it on other file.
    return param1 - param2;
};
exports.subtract = subtract;
exports.default = exports.subtract;
