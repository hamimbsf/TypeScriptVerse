// Constraint = restricting what types are allowed

type Student = { name: string; id: number };

const createArrayWithGeneric = <T extends Student>(studentInfo: T) => {
  return {
    course: "next level",
    ...studentInfo,
  };
};

// Without the constraint, TypeScript cannot guarantee that name and id exist, which may cause errors when accessing them.

const studentOne = {
  name: "hamim",
  id: 122,
  smartPhone: true,
};

const result = createArrayWithGeneric(studentOne);

console.log(result);
