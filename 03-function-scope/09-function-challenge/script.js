// Challenge one
const getClsius = (f) => ((f - 32) * (5 / 9)).toFixed(4);
console.log(`The temperature is ${getClsius(50)} \xB0C`);

// Challenge two
function minMax(arr) {
	return { min: Math.min(...arr), max: Math.max(...arr) };
}
console.log(minMax([10, 20, 50, 5, 45, 32, 71]));

// Challenge three
(function (length, width) {
	console.log(
		`The area of rectangle with a length of ${length} and a width of ${width} is ${
			length * width
		}`
	);
})(10, 5);
