interface User {
  name: string;
  age: number;
  email?: string;
}

//partial

// let draft: Partial<User> = {};
// draft.name = "Jhulon Kumar Ray";

// console.log(draft.name);

// required

// let fullName: Required<User> = {
//   name: "JK Roy",
//   age: 25,
//   email: "jhulonkumar888@gmail.com",
// };

// console.log(fullName);

// let nameOnly: Pick<User, "name"> = { name: "JK roy" };

// console.log(nameOnly);

// let noAge :  Omit<User, "age"> = {name : "Jhulon"}

// console.log(noAge);

// const scores: Record<string, number> = {
//   JK: 50,
//   Jhulon: 100,
// };

// console.log(scores);

// const readonly : Readonly<User>  = {name: "20"}

// ReturnType

// type GetUser = () => { name: string; age: number };

// const user: ReturnType<GetUser> = { name: "JK Roy", age: 20 };

// console.log(user);

// type OnlyNumbers = Exclude<string | number | boolean, string>;
// const val: OnlyNumbers = 42;
// console.log(  val);
