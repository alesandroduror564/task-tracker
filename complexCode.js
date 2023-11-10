// filename: complexCode.js

// Complex JavaScript Code

// Constants
const PI = 3.14159265359;
const E = 2.718281828459;

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }
}

class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }

  work() {
    console.log(`${this.name} is working as a ${this.role}.`);
  }
}

// Helper Functions
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Example Usage
const rectangle = new Rectangle(5, 10);
console.log(`Area of rectangle: ${rectangle.calculateArea()}`);

const john = new Employee("John Smith", 30, "Developer");
john.greet();
john.work();

console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`10th Fibonacci number: ${fibonacci(10)}`);
console.log(`Is 17 prime? ${isPrime(17)}`);

// ... continue adding more code

// End of complexCode.js