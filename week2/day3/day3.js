class aClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    alert(this.name);
  }

  sayAge() {
    alert(this.age);
  }
}
const myInstance = new aClass("Abdullah", 19);
myInstance.sayName();
///////////////////////////////////////////////////////////

class Abdullah {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  run() {
    console.log(this.firstName + " " + this.lastName + " " + " is running");
  }
  walk() {
    console.log(this.firstName + " " + this.lastName + " " + " is walking ");
  }
  greeting() {
    console.log(
      " Hello, my name is " + " " + this.firstName + " " + this.lastName
    );
  }
}
const Abdullah1 = new Abdullah("Abdullah", "Haidar");
const Abdullah2 = new Abdullah("Abdullah", "Omar");
Abdullah1.run();
Abdullah1.walk();
Abdullah1.greeting();

Abdullah2.run();
Abdullah2.walk();
Abdullah2.greeting();
//////////////////////////////////////////////////////////////

class TUNE {
  constructor(salata, omlet) {
    this.salata = salata;
    this.omlet = omlet;
  }
}
