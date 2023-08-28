// for (let i = 1; i <= 100; i++) {
// 	let str = '';
// 	if (i % 3 === 0) {
// 		str += 'Fizz';
// 	}
// 	if (i % 5 === 0) {
// 		str += 'Buzz';
// 	}
// 	if (!str) continue;
// 	console.log(`${i} - ${str}`);
// }

// for (let i = 1; i <= 100; i++) {
// 	// if (i % 3 === 0 && i % 5 === 0) {
// 	if (i % 15 === 0) {
// 		console.log(i, 'FizzBuzz');
// 	} else if (i % 3 === 0) {
// 		console.log(i, 'Fizz');
// 	} else if (i % 5 === 0) {
// 		console.log(i, 'Buzz');
// 	} else {
// 		console.log(i);
// 	}
// }

// While loop
let j = 1;
while (j <= 100) {
	if (j % 15 === 0) {
		console.log(j, 'FizzBuzz');
	} else if (j % 3 === 0) {
		console.log(j, 'Fizz');
	} else if (j % 5 === 0) {
		console.log(j, 'Buzz');
	} else {
		console.log(j);
	}
	j++;
}
