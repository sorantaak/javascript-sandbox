// for (let i = 0; i <= 10; i++) {
// 	if (i === 7) {
// 		console.log('7 ismy lucky number');
// 	} else {
// 		console.log('Number ' + i);
// 	}
// 	console.log('Number: ' + i);
// }

//Nested Loop
for (let i = 1; i <= 100; i++) {
	console.log('Number ' + i);
	for (let j = 1; j <= 5; j++) {
		console.log(`${i} * ${j} = ${i * j}`);
	}
}

// Loop through an array
const names = ['Soran', 'Sahar', 'Sirwan', 'Mahsa'];

for (let i = 0; i < names.length; i++) {
	if (i === 2) {
		console.log(names[i] + ' is the best');
	} else {
		console.log(names[i]);
	}
}
