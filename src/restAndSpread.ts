// spread opearator

const friends: string[] = ["tanzim", "sadib", "alif"];
const clgFriend: string[] = ["shanto"];
const univFriend: string[] = ["monir", "sakib"];

// friends.push(clgFriend); //Argument of type 'string[]' is not assignable to parameter of type 'string'.

// cause this array will be this ["tanzim", "sadib", "alif",["shanto"]]

// we can't push any type of data instead of string so we used rest opearator

friends.push(...clgFriend, ...univFriend);

// console.log(friends);

// rest

const sendInvite = (...friends: string[]) => {
  return friends.forEach((element: string) => {
    console.log(`sent message to ${element}`);
  });
};

sendInvite("tanzim", "sadib", "alif", "shanto", "monir", "sakib");

// console.log(sendInvite);
