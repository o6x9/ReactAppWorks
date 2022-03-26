interface Animal {
  name: string;
  whoAmI(): void;
}

interface Mammal {
  brushHair(): void;
}

interface WingedAnimal {
  fly(): void;
}

class Bat implements Animal, Mammal, WingedAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  whoAmI(): void {
    console.log("I'm " + this.name + "!");
  }

  brushHair(): void {
    console.log("I must brush my hair to look pretty!");
  }

  fly(): void {
    console.log("Look! I can fly!");
  }
}

let bat = new Bat("Bartok");
bat.whoAmI();
bat.brushHair();
bat.fly();

/////////////////////////////////////////////////
// const myName:string="Abdulluh"
// console.log(myName)
// /////////////////////////////////////////////////////////////1
// interface ingredientsBasket {
//     numberOfItems: number;
//     ingredients: string[];
//     calories: number;
// }
// ///////////////////////////////////////////////////////////////2
// function makeASandwich(ingredients: ingredientsBasket): void {
//     console.log(
//         'Your sandwich includes ' +
//         ingredients.numberOfItems +
//         ' items of ' + ingredients.ingredients + ', which comes out to be a total of ' +
//         ingredients.calories +
//         ' calories.'
//     );
// }
// ////////////////////////////////////////////////////////////////3
// const sandwichIngredients = {
//     numberOfItems: 3,
//     ingredients: ['bacon', 'lettuce', 'tomato'],
//     calories: 320
// };
// makeASandwich(sandwichIngredients);
////////////////////////////////////////////////////////////////////4

// class Person {
//     firstName:string:
//     lastName:string:
//     constructor(  firstName:string:,lastName:string:) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }

//     run() {
//       console.log(this.firstName + " " + this.lastName + " is running.");
//     }
//     walk() {
//       console.log(this.firstName + " " + this.lastName + " is walking.");
//     }
//     greeting() {
//       console.log("Hello, my name is " + this.firstName + ".");
//     }
//   }
