// Values are stored on the stack
const name = 'Soran';
const age = 42;

//Refrence values are stores on the heap
const person = {
	name: 'Sahar',
	age: 38,
};

let newName = name;
newName = 'Sahar';

let newPerson = person;
newPerson.name = 'Aboubakr';

console.log(name, newName);
console.log(person, newPerson);
