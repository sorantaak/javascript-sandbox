let x;
const person = {
	name: 'Soran Taak',
	age: 30,
	isAdmin: true,
	address: {
		street: '123 Main st',
		city: 'Mahabad',
		state: 'WA',
	},
	hobbies: ['Music', 'Sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Sahar';
person.isAdmin = false;

delete person.age;

person.hasChildren = true;
person.greet = function () {
	console.log(`Hello my name is ${this.name}`);
};
person.greet();

const person2 = {
	'first name': 'Brad',
	'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);
