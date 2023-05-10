import { add as add2 } from "./main";
import addtwo from "./utils/add";
import subtract from "./utils/subtract";
import multiply from "./utils/multiply";
import divided from "./utils/divided";
import average from "./utils/average";

//wildcart import
import * as AllAritOperatin from "./main"; // here * is for wildcart import by usign "* syntax" we have emported all the methodsat a time as "AllAritOperation".When we want to use any method just need to write AllAritOperatin."when we give "dot" notation it will suggest us availabel methods we can use anyone we need."

//default import methods
import DefaultExportedMethods from "./main"; // here DefaultExportedMethods is used for allmethods exported using default method.when we give "dot" notation it will suggest us availabel methods we can use anyone we need.

export const add = (param1: number, param2: number, param3: number) => {
  return param1 + param2 + param3;
};

// const calculation = add2(8, 5);

// console.log(calculation);

// const calculation2 = subtract(8, 7);

//wildcart import examples
AllAritOperatin.add(25, 78);
AllAritOperatin.subtract(78, 45);
AllAritOperatin.average(85, 108);

//default import methods examples

DefaultExportedMethods.add(98, 45);
DefaultExportedMethods.subtract(980, 452);

add2(98, 88);
