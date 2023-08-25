// Ways to declare a variable
// var , let, const

let firstName = 'John';
let lastName = 'Doe';
console.log(firstName, lastName);

let age = 30;
console.log(age);

//Nameing conventions
// - Only letters, numbers, underscore, and dollar signs
// - Can't start with a numner

//Mult-word formating
//firstName = camelCase
// first_name= underscore
// FirstName= PascalCase
// firstname = lowercase

//Re-assigning Variables
age = 31;
console.log(age);

let score;
score = 1.2;
console.log(score);

if (true) {
	score = score + 1;
}

console.log(score);

const x = 100;
// x = 200;

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
	name: 'soran',
};

person.name = 'Taak';
person.email = 'soran.tak@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;
const d = 10,
	e = 20,
	f = 13;

console.log(d);
console.log(a);
