// class Box<T>{

//   private items: T;

//   constructor(items:T){
//     this.items = items
//   }

//   getBox():T{
//     return this.items
//   }

// }

// //  string box

// const newStringBox = new Box<string>("Banana")

// // number box

// const newNumber =  new Box<number>(500)

// console.log(newNumber.getBox());

// function createPair<S, T>(v1: S, v2: T): [S, T] {
//     return [v1, v2];
// }

// createPair<string, number>("age", 25)

// type alias

// type Container<T> = {
//   value: T;
//   label: string;
// };

// const myNumber : Container<number> = {
//   value:54,
//   label:"JK Roy"
// }

// const myString : Container<string> = {
//   value : "Name",
//   label: "BK Roy"
// }

// console.log(myString);

// class NamedDefault<T = string> {
//   private items: T;

//   constructor(items: T) {
//     this.items = items;
//   }

//   getValue(): T {
//     return this.items;
//   }
// }

// const v1 = new NamedDefault<number>(40);
// console.log(v1.getValue())


function  showValue<T extends string | number>(value :T ) : T {
  console.log(value);

  return value
  
}
showValue("Bangladesh")