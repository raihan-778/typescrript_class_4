//Pick type. by using Pick tyep we can pick any property type from any type allias or interface.

interface Person {
  name: string;
  email: string;
  contact: string;
}

type email = Pick<Person, "email">;

type contact = Pick<Person, "contact">;
type contacts = Pick<Person, "contact" | "email">;

//Omit. by using Pick tyep we remove  any property type from any type allias or interface.
type name = Omit<Person, "email" | "contact">;

//partial & Required

//Partial is used to make all the properties optional type

type Optional = Partial<Person>;

//Required is used to make all the properties mandatory
type AllAreRequired = Required<Person>;

//Readonly is used to make all the propertise immutable

const MyInfo: Readonly<Person> = {
  name: "Rahim Uddin",
  email: "rahim@gmail.com",
  contact: "46465464654",
};

/* MyInfo.name = "Raihan Uddin"; */
console.log(MyInfo);

//record type
/* type myObject = {
  a: string;
  b: string;
  c: string;
}; */

//indext signature type .here key is defined as parameter such as "a,b,c" and string after "[]:" syntext defined the value of the key also string.
// type myObject = {
//   [key: "a"|"b"|"c"]: string;
// };

// Record "a|"b"|"c" type
type recordStringType = Record<string, string>; // when using record type first paramater indicate the keytype & the second parameter indicate the type of "keyValue"
type myObject = Record<"a" | "b" | "c" | "d", string>; // in this record type we used leteral type to define explecite type "a","b", "c","d".that meant this record type only except a,b,c & d as key.

const obj: myObject = {
  a: "5",
  b: "8",
  c: "09",
  d: "7",
  // f: "6",
};
