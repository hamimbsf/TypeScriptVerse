// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithUserObj = (value: { id: number; name: string }) => [value];

const createArrayWithGeneric = <T>(...value: T[]) => {
  return value;
};

const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(2, 3);

const arrObj = createArrayWithGeneric<{ id: number; name: string }>({
  id: 123,
  name: "Hamim",
});

console.log(arrString, arrNumber, arrObj);
