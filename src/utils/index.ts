//re-export methodology.By using this methodology first we have to import all the methods in one file.then we can export all the methods as object notation.on the other hand when we want to import any specific method from other file then first we have to import all the methods as a common name and then select the specific method using "dot notation" such as if the commot name is Methods then the specific method can call like "Methods.add" here add is a single method belongs to common Methods.

import add2 from "./add";
import subtract from "./subtract";
import multiply from "./multiply";
import divided from "./divided";
import average from "./average";

export default {
  add2,
  subtract,
  multiply,
  divided,
  average,
};
