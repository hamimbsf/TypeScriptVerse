// Type: Alias

type User = {
  id: number;
  name: {
    firstname: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstname: "Hamim",
    lastName: "Hossain",
  },
  gender: "male",
  contactNo: "0130000000",
  address: {
    division: "Khulna",
    city: "Chuadanga",
  },
};

type IsAdmin = true;

const isAdmin: IsAdmin = true;

type name = string;

const myName: name = "Hamim";

type AddFunc = (number1: number, number2: number) => number;

const addFunc: AddFunc = (number1, number2) => number1 + number2;
