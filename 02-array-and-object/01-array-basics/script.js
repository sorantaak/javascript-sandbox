let x;
// Array Literal
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'Hello', true, null];
// Array Constractor
const fruits = new Array('Apple', 'Grape', 'Orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is ${fruits[2]}`;
x = numbers.length;

fruits[2] = 'Pear';
// fruits.length = 2;
fruits[3] = 'strawberry';
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';
x = fruits;

console.log(x);
