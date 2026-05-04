// Basic example:
interface User {
  name: string;
  age: number;
}

// Now any object of type User must follow this structure:

const user1: User = {
  name: "Hamim",
  age: 22,
};

// If you do this:

// const user2: User = {
//   name: "Hamim",
// };

// ❌ Error → age is missing

// Why use interface?
// Enforces type safety
// Makes code predictable
// Helps with autocomplete & readability

// Interface with functions:
interface Add {
  (a: number, b: number): number;
}

const add: Add = (x, y) => x + y;

// Interface with methods:
interface Person {
  name: string;
  greet(): void;
}

const p: Person = {
  name: "Hamim",
  greet() {
    console.log("Hello");
  },
};

p.greet();
