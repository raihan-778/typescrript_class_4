"use strict";
//re-export methodology.By using this methodology first we have to import all the methods in one file.then we can export all the methods as object notation.on the other hand when we want to import any specific method from other file then first we have to import all the methods as a common name and then select the specific method using "dot notation" such as if the commot name is Methods then the specific method can call like "Methods.add" here add is a single method belongs to common Methods.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = __importDefault(require("./add"));
const subtract_1 = __importDefault(require("./subtract"));
const multiply_1 = __importDefault(require("./multiply"));
const divided_1 = __importDefault(require("./divided"));
const average_1 = __importDefault(require("./average"));
exports.default = {
    add2: add_1.default,
    subtract: subtract_1.default,
    multiply: multiply_1.default,
    divided: divided_1.default,
    average: average_1.default,
};
