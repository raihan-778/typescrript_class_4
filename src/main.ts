export const add = (param1: number, param2: number): number => {
  return param1 + param2;
};

export const subtract = (param1: number, param2: number): number => {
  // here using "export syntex we can avoid naming conflicts of global scope, by using "export" syntax we can boxed up any function ,method or variable so that we can redeclare it on other file.
  return param1 - param2;
};
// in type script all code base will convirt to common.js formate on compile time.if we want to compile this in other format like es6 er es2015 then we can did it just go to tsconfig.json file and search "module" and change the value from common.js to ex6 or other format you want. You can get availabe suggestion just clicking "ctrl + space bar".

export const multiply = (param1: number, param2: number): number => {
  return param1 * param2;
};

export const divided = (param1: number, param2: number): number => {
  return param1 / param2;
};

export const average = (param1: number, param2: number): number => {
  return (param1 + param2) / 2;
};

// default export method for all methods

/* export default {
  // here using "{}" object notation we can export all methods at a time
  add,
  subtract,
  multiply,
  divided,
  average,
}; */
