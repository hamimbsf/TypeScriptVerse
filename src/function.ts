// Arrow function && Normal Function

// function add(number1, number2) {
//   return number1 + number2;
// }

// let first = add(1, 2);
// let second = add(1, "2");
// let third = add("Hamim", 2);
// let forth = add("Hamim", "Hossain");

// console.log(first);
// console.log(second);
// console.log(third);

// in typescript it gives us type security which js can't

// It can add any type, so to restrict it to numbers only, we need to declare parameter types.

// better version in ts

function numAdd(number1: number, number2: number): number {
  return number1 + number2;
}

numAdd(1, 2);

// numAdd(1, "hamim"); //Argument of type 'string' is not assignable to parameter of type 'number'.

const strAdd = (str1: string, str2: string) => str1 + str2;

strAdd("Hamim", "Hossain");

// Method in ts

// method means when we use a function in an object this called method

const user = {
  balance: 0,
  addMoney(value: number): number {
    return value + this.balance;
  },
};

let newBalance = user.addMoney(100000);

// console.log(newBalance);

// map function

const arr: number[] = [1, 2, 3, 4, 5];

const sqArr = arr.map((elem: number): number => elem * elem);

// console.log(sqArr);
