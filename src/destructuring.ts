const numbers: number[] = [10, 20, 30];

const [a, b, c] = numbers;

// console.log(a); // 10
// console.log(b); // 20

// ✅ Skipping values

const skipNumbers = [10, 20, 30];

// const [first, , third] = skipNumbers;

// console.log(first); // 10
// console.log(third); // 30

// ✅ With Rest
const withRumbers = [1, 2, 3, 4];

// const [first, ...rest] = withRumbers;

// console.log(first); // 1
// console.log(rest);  // [2, 3, 4]

// 2. Object Destructuring
// ✅ Basic
const user = {
  name: "Hamim",
  age: 22,
};

const { name, age } = user;

// console.log(name); // Hamim

// ✅ Renaming variables
const remUser = {
  name: "Hamim",
};

const { name: userName } = remUser;

console.log(userName); // Hamim
