// function isAdult(age:number): boolean{
//   return Math.ceil(age) > 18
// }
// console.log(isAdult(18.1555));

// practice void

// function printHello(name: string): void {
//   console.log(name);
// }

// function  showMessage(message:string): void{
//   console.log("News is" + " " + message);

// }

// showMessage("Hello Bangladesh...");

// function multiple(a: number, b: number) {
//   return a * b;
// }

// console.log(multiple(10, 20));

// function pow(a:number, b:number= 10){
//   return a ** b
// }

// console.log(pow(3));

// function sum(a: number, b: number, ...rest: number[]) {
//   return a + b + rest.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// type Nagate = (value: number) => number;

// const negateFunction: Nagate = (value) => value - 1;

// console.log(negateFunction(10));

type Nagate = (value: string) => string;
const negateFunction: Nagate = (value) => {
 return value
};
console.log(negateFunction("Jhulon kumer Ray"));
