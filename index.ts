// class Person {
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const p1 = new Person("JK Roy");

// console.log(p1.name);

// class Person{

//   private name : string ;

//   constructor(name:string){
//      this.name =  name
//   }

//   getName():string{
//     return this.name
//   }

// }

//  const p1 =  new Person("JK Roy")

//  console.log(p1.getName());

// class Father {
//   protected taka: number = 5000;
// }

// class Soon extends Father {
//   show(){
//     console.log(this.taka);

//   }
// }

// const taka1 =  new Soon()

// taka1.show()
// console.log(taka1.taka);

// class Person {
//   readonly name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const p1 =  new Person("BK Roy")

// p1.name = "JK ROy"
// console.log(p1.name);

// class Regtunglar {
//   constructor(
//     protected width: number,
//     protected height: number,
//   ) {}

//   getArea(): number {
//     return this.height * this.width;
//   }

// }

// class Square extends Regtunglar {
//   constructor(width: number){
//     super(width, width)
//   }
// }

// const r1 =  new Square(10)
// const r2 =  new Square(100)

// console.log(r1.getArea());
// console.log(r2.getArea());

abstract class Shpe {
  abstract getArea(): number;

  describe(): string {
    return "This shapes ages = "  + this.getArea();
  }
}

class Circle extends Shpe {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return 3.14 * this.radius * this.radius;
  }
}

const c = new Circle(7);

console.log(c.describe());
