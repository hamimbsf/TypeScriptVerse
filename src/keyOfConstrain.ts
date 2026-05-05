// keyof : type operator

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type myVehicle = "bike" | "car" | "cng";
type myVehicle2 = keyof RichPeopleVehicle;

const myVehicle: myVehicle2 = "bike";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: 123,
  name: "Hamim",
  address: {
    city: "Chuadanga",
  },
};

// const myId = user.id;

// const myId = user["id"];
// const myName = user["name"];
// const myAddress = user["address"];

const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const result1 = getPropertyFromObj(user, "name");

const product = {
  brand: "Apple",
};

const result2 = getPropertyFromObj(product, "brand");
console.log(result1);
