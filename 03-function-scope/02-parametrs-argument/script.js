// Default Params
function registerUser(user = 'Bot') {
	// if(!user){
	// 	user = 'Asrin'
	// }
	return user + ' is registred';
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
	let total = 0;
	for (const num of numbers) {
		total += num;
	}
	return total;
}

console.log(sum(1, 2, 3, 5, 6));

// Objects as params
function loginUser(user) {
	return `The use ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
	id: 1,
	name: 'Soran',
};

console.log(loginUser(user));
console.log(loginUser({ name: 'Sara', id: 10 }));

// Arrays as params
function getRandom(arr) {
	const randomindex = Math.floor(Math.random() * arr.length);
	return arr[randomindex];
}
console.log(getRandom([11, 14, 15, 65]));
