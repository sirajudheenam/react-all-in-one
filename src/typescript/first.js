// interface User {
//   name: string;
//   id: number;
// }
// class UserAccount {
//   name: string;
//   id: number;
//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }
// const user: User = new UserAccount('Murphy', 1);
// console.log(user);
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet('Brendan');
