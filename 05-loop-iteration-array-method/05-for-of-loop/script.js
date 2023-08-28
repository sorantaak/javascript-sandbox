// Loop through arrays
const items = ['Book', 'table', 'chair', 'kite'];
const users = [{ name: 'Soran' }, { name: 'Kate' }, { name: 'Steve' }];

// for (const item of items) {
// 	console.log(item);
// }

for (const user of users) {
	console.log(user.name);
}

// Loop over strings
const str = 'Hello World';
for (const letter of str) {
	console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'jhone');
map.set('age', 30);
console.log(map);

for (const [key, value] of map) {
	console.log(key, value);
}
