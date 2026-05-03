// nullable

const getUser = (input: string | null) => {
  if (input) {
    console.log(`user is ${input}`);
  } else {
    console.log(`All user`);
  }
};

// getUser("hamim");

// unknown
const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    const [discountedPrice] = input.split(" ");
    console.log(Number(discountedPrice) * 0.1);
  } else {
    console.log("Wrong Input");
  }
};
// discountCalculator(1000);

// discountCalculator("1000 tk");

// discountCalculator(null);

// Void

const throwError = (msg: string): never => {
  throw new Error(msg);
};

// throwError("error");
