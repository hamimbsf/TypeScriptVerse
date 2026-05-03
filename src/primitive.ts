// JS-TS
// sting ,number, boolean ,undefined,null
// TS: never,void,unknown

let useName: string = "Hamim";

// useName= 12 Type 'number' is not assignable to type 'string'.

// useName.toFixed(); // Property 'toFixed' does not exist on type 'string'.

// useName. দেওয়ার মাধ্যমে টাইপস্ক্রিপ্ট এর যত মেথড আছে সেগুলো দেখাবে, উপরে toFixed() কোনও string মেথড না হওয়ায় typescript "does not exist on type 'string'" দেখাচ্ছে

// explicit vs implicit

let isAdmin = true;

// এখানে টাইপস্ক্রিপ্ট কে বোঝানো হয়নি এটা কি ধরনের data টাইপ সে নিজেই বুঝে নিয়েছে যেটাকে implicit বলা হয় অপর দিকে যখন লিখে দেওয়া হয় সেটাকে explicit বলা হয়

let isModarator: boolean = true;

// any data type

let x;

// যখন এভাবে কোনো ভ্যারিয়েবল ডিক্লিয়ার করা হয় তখন টাইপস্ক্রিপ্ট সেটাকে any data type হিসাবে ধরে নেই implicit ভাবে এখানে যেকোনো ডাটা রাখা সম্ভব যেমন:

x = 121;
console.log(x);

x = "Hamim";
console.log(x);
