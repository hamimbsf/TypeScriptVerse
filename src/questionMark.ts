// ? : Ternary operator : Decision making

// ?? : Nullish Coalescing operator

// .? : Optional Chaining

const marrigeEligibleCalc = (age: number) => {
  const result = age >= 21 ? "eligible" : "not eligible";
  // console.log(result);
};

marrigeEligibleCalc(21);

// On the other hand Nullish only check is the value null or undefined

// const userTheme = null;
const userTheme = "";

// here both are falsy value but nullish only check null or undefined

const selectedTheme = userTheme ?? "LightTheme";

console.log(selectedTheme);
