"use strict";
// import { add as add2 } from "./main";
// import addtwo from "./utils/add";
// import subtract from "./utils/subtract";
// import multiply from "./utils/multiply";
// import divided from "./utils/divided";
// import average from "./utils/average";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const index_1 = __importDefault(require("./utils/index"));
//wildcart import
const AllAritOperatin = __importStar(require("./main")); // here * is for wildcart import by usign "* syntax" we have emported all the methodsat a time as "AllAritOperation".When we want to use any method just need to write AllAritOperatin."when we give "dot" notation it will suggest us availabel methods we can use anyone we need."
//default import methods
/* import DefaultExportedMethods from "./main"; // here DefaultExportedMethods is used for allmethods exported using default method.when we give "dot" notation it will suggest us availabel methods we can use anyone we need. */
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
exports.add = add;
// const calculation = add2(8, 5);
// console.log(calculation);
// const calculation2 = subtract(8, 7);
//wildcart import examples
AllAritOperatin.add(25, 78);
AllAritOperatin.subtract(78, 45);
AllAritOperatin.average(85, 108);
//default import methods examples
/* DefaultExportedMethods.add(98, 45);
DefaultExportedMethods.subtract(980, 452); */
//re-export methodology.By using this methodology first we have to import all the methods in one file.then we can export all the methods as object notation.on the other hand when we want to import any specific method from other file then first we have to import all the methods as a common name and then select the specific method using "dot notation" such as if the commot name is Methods then the specific method can call like "Methods.add" here add is a single method belongs to common Methods.
index_1.default.add2(98, 88);
index_1.default.subtract(780, 560);
