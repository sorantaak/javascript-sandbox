const myString = 'developer';

// Solution 1 :
const myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);
// Solution 2 :
const myNewString2 = myString[0].toUpperCase() + myString.substring(1);
// Solution 3 :
const myNewString3 = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);
console.log(myNewString2);
console.log(myNewString3);
