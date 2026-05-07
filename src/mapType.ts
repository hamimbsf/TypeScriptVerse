// mapped types

const arrayOfNum: number[] = [1, 2, 3, 4, 5];
const arrayOfStr: string[] = ["1", "2", "3", "4"];

const arrStringUsingMap: string[] = arrayOfNum.map((elem) => {
  return elem.toString();
});

type AreaOfNum = {
  height: number;
  width: number;
};

type AreaOfStr = {
  height: string;
  width: string;
};

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: number }> = {
  height: "54",
  width: 8,
};
