// Generics are used to create reusable components that work with different types while keeping type safety.

type GenericArray<T> = Array<T>;

// const friends: string[] = ["x", "y", "z"];
const friends: GenericArray<string> = ["x", "y", "z"];

// const rollNumber: number[] = [1, 2, 4, 5];
const rollNumber: GenericArray<number> = [1, 2, 4, 5];

// const isEligible: boolean[] = [true, false];
const isEligible: GenericArray<boolean> = [true, false];

// console.log(friends);

type Coordinates<X, Y> = [X, Y];

const coordinate1: Coordinates<number, number> = [1, 2];
const coordinate2: Coordinates<string, string> = ["1", "2"];
