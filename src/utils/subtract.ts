export const subtract = (param1: number, param2: number): number => {
  // here using "export syntex we can avoid naming conflicts of global scope, by using "export" syntax we can boxed up any function ,method or variable so that we can redeclare it on other file.
  return param1 - param2;
};

export default subtract;
