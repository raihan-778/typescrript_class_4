"use strict";
class User {
    constructor(firstName, lastName) {
        (this.data = { firstName, lastName }), //data is defined as object which comes from Iuser & Iuser has two property "firstName" & "lastName" thas why this.data get an object with two property
            (this.methods = { fullName: () => `${firstName} ${lastName}` }); // here this.methods difineds as object which comest from IMethods & IMethods has one method "fullName" which return a string. here we can impliment these method in our won way. here we have returned it using templet string with "firstName" & "lastName"
    }
}
const user1 = new User("Jannatul", "Ferdouse");
console.log(user1.methods.fullName());
