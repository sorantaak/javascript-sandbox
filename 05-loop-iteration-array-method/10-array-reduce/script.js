const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
}, 0);
console.log(sum);

const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);

// Using a for loop
const sum3 = () => {
	let acc = 0;
	for (const curr of numbers) {
		acc += curr;
	}
	return acc;
};
console.log(sum3());

const cart = [
	{ id: 1, name: 'Product 1', price: 130 },
	{ id: 2, name: 'Product 1', price: 150 },
	{ id: 3, name: 'Product 1', price: 175 },
];

const total = cart.reduce(function (acc, product) {
	// console.log(acc)
	return acc + product.price;
}, 0);
console.log(total);
