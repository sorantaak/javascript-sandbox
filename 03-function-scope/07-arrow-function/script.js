// function add(a, b) {
// 	return a + b;
// }

// Arrow Function syntax
const add = (a, b) => {
	return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single para
const double = (a) => a * 2;

// Returening an object
const createObj = () => ({
	name: 'Soran',
});

const numbers = [1, 2, 3, 4];

numbers.forEach(function (n) {
	console.log(n);
});

// Arrow Function in callback
numbers.forEach((n) => console.log(n));

console.log(add(5, 10));
console.log(subtract(10, 5));
console.log(double(5));
console.log(createObj());
