let anything: any;

// anything = "Hamim";
anything = 123;

// anything = (anything as string).toLowerCase(); //toLowerCase() does not mutate the original string. Strings are immutable. so we have to assigned it first
anything = (anything as number).toFixed(1);
// console.log(anything);

const kgToGramConvertor = (
  input: number | string,
): number | string | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is ${Number(value) * 1000}`;
  } else {
    return "Invalid input";
  }
};

const result1 = kgToGramConvertor(1) as number;

console.log({ result1 });

const result2 = kgToGramConvertor("2 kg") as string;

console.log({ result2 });
