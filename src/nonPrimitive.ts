// Array , Object

let shoppingList: string[] = ["eggs", "milk", "tea", "nuts"];

// shoppingList.push(125); //Argument of type 'number' is not assignable to parameter of type 'string'.

// আমরা তো জেএস এ একটা array এর মধ্যে মাল্টিপল ডাটা টাইপ কালেকশন রাখতে পারতাম কিন্তু typescript এ যদি আমরা explicit array এর মধ্যে যদি অন্য কোনো ডাটা পুশ করতে চাই সেটা error হবে

// যদি মাল্টিপল collection data রাখতে চাই সেক্ষেত্রে আমাদের declear করে দিতে হবে

let nameRollActive: (string | number | boolean)[] = ["hamim", 48, true];
// যদি এখানে আরও অন্য কোনও data type store করা হয় সেক্ষেত্রে ডিক্লিয়ার করে দিতে হবে

// Array type :Tuple

let coordinates: [number, number] = [11, 11];

// এখানে number ব্যতিত অন্য কোন ডাটা স্টোর করা যাবে না এবং দুই এর অধিক data ও store করা যাবে না

let nameAndRoll: [string, number] = ["Hamim", 48];

// Reference Type :Object

let user: {
  organization: "Programming Hero"; //"Programming Hero" is a string literal type,so the value must always be exactly "Programming Hero".It cannot be changed to any other string.
  firstName: string;
  middleName?: string; // optional property
  lastName: string;
  readonly institution: string; // access modifier
} = {
  organization: "Programming Hero",
  firstName: "Muhammad",
  middleName: "Hamim",
  lastName: "Hossain",
  institution: "GSTU",
};

// ❌ Not allowed (different value)
// user.organization = "Programming Hero Fire";

// ✅ Allowed (same literal value)
user.organization = "Programming Hero";

// ✅ Allowed (string type is flexible)
user.lastName = "Bishwas";

// user.institution = "Hero"; //Cannot assign to 'institution' because it is a read-only property.
