// alert("hii")

// console.log(typeof 100)
// console.log(typeof(false))
// console.log(typeof "batata")
// console.log("hi my name is ammar")
// console.log('ammar"s phone')
// console.log(`ammar's phone`)

// var firstName = "Ammar";
var lastName = "Alkhooly";
// var aboutMe = "Hi, my name is " + firstName + " " + lastName;
// console.log(aboutMe);

var firstNumber = 30;
var secondNumber = 30;
// console.log(firstNumber > secondNumber || firstNumber == secondNumber);
if (firstNumber > secondNumber || firstNumber == secondNumber) {
  // console.log(firstNumber + " is greater than " + secondNumber);
}
if (firstNumber != secondNumber) {
} else {
  var thirdNumber = 50;
}
// console.log(thirdNumber)
// add sign
var adding = firstNumber + secondNumber;

// Subtract
var subtract = firstNumber - secondNumber;

// multiply
var multiply = firstNumber * secondNumber;

// divide
var divide = firstNumber / secondNumber;

// console.log(adding, subtract, multiply, divide);

//let grade = prompt("what is the grade");
let button = document.getElementById("submit-grade");
button.addEventListener(
  "click",
  function () {
    var grade = document.getElementById("gradeInput").value;
    // debugger;
    if (grade >= 90 && grade <= 100) {
      alert("A");
    } else if (grade >= 80 && grade <= 89.999) {
      alert("B");
    } else if (grade >= 70 && grade <= 79.999) {
      alert("C");
    } else if (grade >= 60 && grade <= 69.999) {
      alert("D");
    } else if (grade < 60) {
      alert("F");
    } else {
      alert("Please input a number grade from 0 - 100");
    }
  },
  false
);

// Arrays
let favoriteColors = ["Blue", "Green", "White"];
let emptyArray = [];
console.log("Before pushing to array: ", emptyArray);
// pushing to array, we use the .push() method
emptyArray.push("Not empty any more!");
emptyArray.push("Hello World!");
emptyArray.push("I love coding!!!");
console.log("After pushing to array: ", emptyArray);

// Checking the length of an array (how many items in an array) we use the .length property
let arrayLength = emptyArray.length;
console.log("emptyArray Length is: ", arrayLength);

// Removing the last item from an Array we use the .pop() method
emptyArray.pop();
console.log("After removing the last Item: ", emptyArray);
console.log("emptyArray Length is: ", arrayLength);

// We can also have array inside an array
let nestedArray = [1, 2, 3, [99, 100, 101]];
console.log("look at me, I am a nested Array: ", nestedArray);

// you can also sort the items in the array using the .sort() method
let numbers = [1, 5, 2, 9, 8];
console.log("Before sorting the numbers Array: ", numbers);
console.log("After sorting the numbers Array: ", numbers.sort());

// sorting array with strings inside
let strings = ["Feras", "Nabil", "Ammar"];
console.log("Before sorting the strings Array: ", strings);
console.log("After sorting the strings Array: ", strings.sort());

// **** Objects ****

/*
  Objects, like arrays, may contain many values. To create 
  an object, you define what the properties are and set 
  their corresponding values. You can think of a JavaScript 
  object as the same as a real-life object. Consider an object 
  like a vehicle. The vehicle has different properties such as 
  the make, model, weight, color, number of doors and so on. 
  If you wanted to show this vehicle object as a JavaScript 
  object, you would do so as shown below:
*/

// creating an Object:
var vehicle = {
  make: "Toyota",
  model: "Land Cruiser",
  weightInPounds: 3980,
  color: "Red",
  numberOfDoors: 4,
  fourWheelDrive: true,
};

// another example of why you would use Objects over Arrays:

let studentScores = [100, 91, 88, 66, 92];
// with the example above, there is no way to know scores for individual students
let studentScoresObj = {
  Abdallah: 88,
  Maryam: 91,
  Harith: 66,
  Mohammed: 100,
  Bilal: 92,
};

// you can also have nested objects and arrays inside an object:
let studentSemesterScores = {
  Abdallah: {
    semesterOne: 88,
    semesterTwo: 91,
    "Courses taken": ["intro to programming", "Java1", "java2", "Networking1"],
  },
  Maryam: {
    semesterOne: 78,
    semesterTwo: 96,
    "Courses taken": ["intro to programming", "Java1", "java2", "Networking1"],
  },
  Harith: {
    semesterOne: 58,
    semesterTwo: 71,
    "Courses taken": ["intro to programming", "Java1", "java2", "Networking1"],
  },
  Mohammad: "No courses taken",
  Bassam: "Graduated",
};

// while loop

var i = 0;
let pushNumbers = [];
while (i < 10) {
  console.log("adding the number " + i + " to the numbers array");
  pushNumbers.push(i);
  i++;
}
console.log("After pushing numbers with while loop ", pushNumbers);
console.log("pushNumbers Array length", pushNumbers.length);

// for loop

let favoritePets = ["Dogs", "Cats", "Parrots"];

for (var i = 0; i < favoritePets.length; i++) {
  console.log(favoritePets[i]);
}

// functions

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}
multiplyNumbers(11, 33);

function subtractNumbers(num1, num2) {
  if (num1 < num2) {
    return "first number should be greater than second number";
  } else {
    return num1 - num2;
  }
}
subtractNumbers(12, 2);

// *** Scopes ***

/* 
  The Scope is how and where you can access different variables or functions 
  within the code. Imagine your code existing in layers and those layers are 
  defined by the curly braces used in functions, loops, objects, etc.

  In JavaScript, there are several scopes. However, the two primary scopes are:
  - Global: Resides Outside of a Function
  - Local: Resides Inside of the Function
*/

// example for global scope:
var myAge = 26;

function ageInTwentyYears() {
  return myAge + 20; //returns 46
}
console.log(
  "Global ex: ageInTwentyYears function returned: ",
  ageInTwentyYears()
);

function ageTenYearsAgo() {
  return myAge - 10; // returns 16
}
console.log("Global ex: ageTenYearsAgo function returned: ", ageTenYearsAgo());

// example for local scope:
function ageInTwentyYears2() {
  var myAge2 = 26;

  return myAge2 + 20; //returns 46
}
// console.log("Local ex: ageInTwentyYears2 function returned: ", ageInTwentyYears2());

function ageTenYearsAgo2() {
  return myAge2 - 10; // you will get an error
}
// console.log("Local ex: ageTenYearsAgo2 function returned: ", ageTenYearsAgo2());

var person = {
  firstName: "John",
  lastName: "Smith",
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let firstName2 = "ahmad";
var age = 23;

function addNums(age) {
  var egg = true;
  let male = false;
  console.log(male);
  return age + 1;
}
addNums();

if (true) {
  var egg = "happy egg";
  var male = true;
}

var user = {
  fullName: "John Done",
  car: null,
  son: 3,
};

// this keyword
console.log("this from global", this);

var person = {
  firstName: "Ammar",
  lastName: "Alk",
  getFullName: function () {
    console.log("this from the person obj: ", this);
    console.log(this.firstName + " " + this.lastName);
  },
};
console.log(this.firstName);
person.getFullName();

// spread operator

let arrObj = [
  {
    "first Name": "Abdallah",
    age: 12,
    courses: ["java1", "intro to programming"],
  },
  {
    name: "Ammar",
    age: 23,
    semester: {
      semesterOne: ["java1", "intro to programming"],
      semesterTwo: ["java1", "intro to programming"],
      graduation: {
        year: 2024,
        campus: "istanbul",
      },
    },
  },
  {
    name: "Almuhannad",
    age: 22,
  },
  {
    name: "Mohammad",
    age: 29,
  },
];
console.log("print java 1: ", arrObj[1].semester.semesterOne[0]);
console.log("age: ", arrObj[0].age);

console.log("campus: ", arrObj[1].semester.graduation["campus"]);
console.log("name with space: ", arrObj[0][0]);

// let midArray = [12, 13];
// let normArray = [1, 2, 3, midArray, 4, 5]; // [1, 2, 3, [12, 13], 4, 5];

let midArray = [12, 13];
let normArray = [1, 2, 3, ...midArray, 4, 5]; // [1, 2, 3, 12, 13, 4, 5]
console.log("normArray: ", normArray);

let arr1 = ["a", "b", "c", "d"];
let arr2 = ["e", "f", "g", "h"];

let arr3 = [...arr1, ...arr2];

console.log("G: ", arr3[6]);

let obj1 = { name: "John", age: 29 };
let obj2 = { name: "Alice", email: "alice@email.com" };

let mergeObj = { ...obj1, ...obj2 };

console.log("mergeObj", mergeObj);
// Output: {name: "Alice", age: 29, email: "alice@email.com"}

// Spread Operators Activity
// Using the spread operator combine the given arrays into given variable grades.
let goodGrades = ["A", "B"];
let notSoGoodGrades = ["C", "D", "F"];
let grades;

// logical operators

/*
  Arithmetic Operators
  +
  -
  *
  /
  %
  ++
  --

  Assignment Operators
  =
  +=
  -=
  *=
  /=
  %=

  String Operators
  +
  +=

  Comparison Operators
  ==
  ===
  !=
  !==
  >
  <
  >=
  <=

  Logical Operators
  &&
  ||
  !

  Before you continue, it is essential to know what an Operand is.
  An Operand is the value that the operator operates on.

  ex: 4 + 5 - Here 4 and 5 are the operands and + is the operator.
  ex: a + b - Here the operands are a and b, and the operator is +.

  Arithmetic Operators
  Arithmetic Operators are used when you want to do math. 
  This can include something like adding two strings together, 
  along with math and numbers. Some of the below operators will 
  look the same as what you saw in your grade school math class.

  + is used for addition
  - is used for subtraction
  * is used for multiplication
  / is used for division
  % is used for modulus or the remainder of the division of two numbers.
  y = 5 so x = y % 2 would result in x = 1
  ++ is used for incrementing
  -- is used for decrement

  Assignment Operators
  Assignment Operators are used for assigning certain values 
  to variables.

  = - Assigns a value
  a = 5 this assigns the value of 5 to the variable a.
  c = a + b this assigns the value of a + b to the variable c.
  += - Adds the right operand to the left operand and assigns the result to the left operand.
  c += a is the equivalent to c = c + a.
  -= - Subtracts the right operand from the left operand and assigns the result to the left operand.
  c -= a is the equivalent to c = c - a.
  *= - Multiplies the right operand with the left operand and assigns the result to the left operand.
  c *= a is the equivalent to c = c * a.
  /= - Divides the left operand with the right operand and assigns the result to the left operand.
  c /= a is the equivalent to c = c / a.
  %= - It takes the modulus using two operands and assigns the result to the left operand.
  c %= a is the equivalent to c = c % a.

  Comparison Operators
  ==  If the values of the two operands are equal, then the condition becomes true.
  3 == 3 would equal true but 3 == 2 is false.
  ===  If the values of the two operands are of equal value and equal type.
  If x = 5 then x === "5" would result in false whereas x === 5 would result in true.
  != - If values of two operands are not equal, then the condition becomes true.
  2 != 5 would return true.
  !== - If values of two operands are not of equal value or not equal type.
  If x = 5 then x !== "5" results in true, and x !== 5 results in false.
  >  If the value of the left operand is greater than the value of the right operand, then condition becomes true.
  5 > 2 would be true because 5 is greater than 2.
  <  If the value of the left operand is less than the value of the right operand, then the condition is true.
  5 < 10 would be true because 5 is less than 10.
  >=  If the value of the left-hand operand is greater than or equal to the value of the right operand, then the condition becomes true.
  10 >= 10 would be true because 10 is equal to 10.
  <=  If the value of the left operand is less than or equal to the value of right operand, then the condition becomes true.
  5 <= 6 would be true because 5 is less than or equal to 6.


  Logical Operators
  Logical Operators are used to determine logic between two variables.

  Given x = 6 and y = 3, review the below operators:

  && - The logical AND, (x < 10 && y > 1) would result in true.
  || - Logical OR, (x === 5 || y === 5) is false.
  ! - Logical NOT, !(x === y) would result in true.
*/

// operators activity

// Operators Activity
/* 
  Using the logical operator for AND, complete the if statement to check if 
  both of the variables even and odd are greater than 19. 
*/
// let odd = 7;
// let even = 20;
// let greaterThan;
// if(odd > 19 && even > 19){
//     greaterThan = true;
// }
// else {
//     greaterThan = false;
// }

/* 
  Using the logical operator for OR, complete the if statement to 
  check if either the variable even or the variable odd are greater than 19. 
*/
// let odd = 7;
// let even = 20;
// let greaterThan;
// if(odd > 19 || even > 19){
//     greaterThan = true;
// }
// else {
//     greaterThan = false;
// }

/* 
  Using the comparison operator for equal value and equal type, complete the if 
  statement to check if even is equal to odd. 
*/
let odd = "20";
let even = 20;
let equalTo;
if (odd === even) {
  equalTo = true;
} else {
  equalTo = false;
}

// Arrow functions
/* 
  ES6 brings Arrow Functions to JavaScript. Arrow Functions are useful because 
  they break down the amount of code needed for a function by using a shorter syntax. 
*/

function addition(param1, param2) {
  return param1 + param2;
}

addition(2, 4);

// Take a look at the same function using an arrow function:

const addFunction = (param1, param2) => {
  return param1 + param2;
};

addFunction(2, 4);

/* 
  ES6 allows for something called implicit return which means you do not 
  need the curly brackets or the return keyword in some cases. You will explore 
  other cases where you will need the curly brackets because you are handling more 
  functionality within your function. But for now, examine how this will look with, 
  implicit return. 
*/

const addFunctionTwo = (param1, param2) => param1 + param2;

addFunctionTwo(2, 4);

// Now, if you have only one parameter, the parenthesis is not needed:

const stringFunction = (string) => string + "!";

stringFunction("My name is Hermione");
// The output of the above function will be "My name is Hermione!", and because you
// only take in one parameter (string), this works without the parenthesis.

// If you have no parameters, you can express an arrow function with empty
// parenthesis like so:

const hello = () => console.log("Hello World!");

// This is equivalent to:
function helloTwo() {
  console.log("Hello World!");
}

// Default Parameters
// In ES6, JavaScript allows you to specify default values for parameters.

// For example:

const defParam = (a, b = 20) => a * b;

defParam(10);
// Here, you can see that parameter b was given the default value of 20,
// this means that b is no longer undefined. When you invoke the parameter,
// you only need to define a because b has a default value. When this code is run,
// the output will be 200 since 10 * 20 = 200.

// One thing to remember is that even though you have set a default value for
// a parameter, this does not mean you can't pass in another value for that parameter.

// Consider below:

const defParamTwo = (a, b = 20) => a * b;

defParamTwo(3, 10);
// Above, you have reset b to 10, and are no longer using the default parameter
// of 20. Since 3 * 10 = 30, that is what your output is.

// Switch Statement
// The switch statement is a flow-control statement that is similar
// to the if...else statement. The switch...case keywords are used to control
// the complex conditional operations.

// Structure
// Take a look at the structure of a switch...case statement:

let dayOfTheWeek = "Monday";

switch (dayOfTheWeek) {
  case "Sunday":
    console.log("Happy " + dayOfTheWeek);
    break;
  case "Monday":
    console.log("Happy " + dayOfTheWeek);
    break;
  case "Tuesday":
    console.log("Happy " + dayOfTheWeek);
    break;
  default:
    console.log("Enjoy your day");
}

// it's the equivilant of using the following if, else if, and else statement below:

if (dayOfTheWeek === "Sunday") {
  console.log("Happy " + dayOfTheWeek);
} else if (dayOfTheWeek === "Monday") {
  console.log("Happy " + dayOfTheWeek);
} else if (dayOfTheWeek === "Tuesday") {
  console.log("Happy " + dayOfTheWeek);
} else {
  console.log("Enjoy your day");
}

// Error Handling

// try {
//   alert('Start of try block'); // #1 This line runs first

//   // No errors occurred so you move on to number #2

//   alert('End of try block'); // #2 This line runs next
// } catch (err) {
//   alert('Catch is ignored because there are no errors'); // #3 This is line ignored due to there being no errors.
// }

// alert('...Then the execution continues'); // #4 This alert is executed

// try {
//   alert('Start of try block'); // #1 This line executes

//   randomVariable; // error, variable is not defined!

//   alert('End of try (never reached)'); // #2 This line is never reached
// } catch (err) {
//   alert('Error has occurred!', ); // #3 This is line executed since an error has occurred.
// }

// alert('...Then the execution continues'); // #4 Finally, this is executed.

try {
  // Block of code to try
} catch (err) {
  // Block of code to handle errors
} finally {
  // Block of code to be executed regardless of the try..catch result
}

// throw error to control program flow and generate custom error messages
let x = 2;
console.log("display x: ", x);
try {
  if (x == "") throw "Please input a number";
  if (x < 10) throw "Your number is too low!";
  if (x > 25) throw "Your number is too high!";
} catch (err) {
  console.log(err);
} finally {
  x = "qq";
}
console.log("display x: ", x);

// Ternary operator

// The Ternary Operator is an operator frequently used as shorthand for the
// if...else statement. It is read just like an if statement. If a condition
// is true, do something; otherwise, do something else.

// Below is the ternary operator syntax:

// condition ? expression on true : expression on false

let studentAge = 17;

const isOldEnough =
  studentAge >= 18
    ? "Welcome to our site."
    : "Sorry; you must be 18 or older to enter.";

console.log(isOldEnough);

// The if...else equivalent to this would be:

let studentAgeTwo = 17;

if (studentAgeTwo >= 18) {
  ("Welcome to our site.");
} else {
  ("Sorry, you must be 18 or older to enter");
}

// OOP
/* 
  Object-Oriented Programming (OOP), is another way of organizing your program; 
  it combines data and functionality and wraps it inside an object, this is one 
  of the most effective approaches to writing software.
  
  The first step to writing Object-Oriented Programming, is to identify all of the 
  objects that you want to work with and how they relate to each other. Then, that 
  object is generalized as a class. When writing a class, define the general behavior 
  that a category of objects can have. When individual objects are created from the 
  class, each object is automatically equipped with the general behavior; each object 
  can then be given unique traits. Making an object from a class is called 
  instantiation, and you will work with instances of a class.
*/
