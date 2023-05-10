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

//Partial is used to make all the properties optional

type Optional = Partial<Person>;

//Required is used to make all the properties mandatory
type AllAreRequired = Required<Person>;

//Readonly is used to make all the propertise immutable

const MyInfo: Readonly<Person> = {
  name: "Rahim Uddin",
  email: "rahim@gmail.com",
  contact: "46465464654",
};

MyInfo.name = "Rahim Uddin";
