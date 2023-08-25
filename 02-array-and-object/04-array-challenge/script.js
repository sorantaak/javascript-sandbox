const arr = [1, 2, 3, 4, 5];

arr.reverse().unshift(6);
arr.push(0);
console.log(arr);

//Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8.9, 10];
// arr2.shift()
// console.log(arr1.concat(arr2.splice(1)));
console.log([...arr1, ...arr2.splice(1)]);
