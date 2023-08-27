const age = 17;

// Using an if statement
if (age >= 18) {
	console.log('Ypu can vote!');
} else {
	console.log('You can not vote!');
}

//Using a ternary Operator
age >= 18 ? console.log('You Can vote!') : console.log('You can not vote!');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'Yopu can vote!' : 'You can not vote!';
console.log(canVote);
console.log(canVote2);

// Multiple statement
const auth = true;

// let redirect;
// if (auth) {
// 	alert('Weclome to the dashboard');
// 	redirect = '/dashboard';
// } else {
// 	alert('Access Denied');
// 	redirect = '/login';
// }
const redirect = auth
	? (alert('welcome to the dashboard'), '/dashboard')
	: (alert('Access Denid'), '/login');

console.log(redirect);

// auth ? console.log('Welcome to the dashboard') : null;
auth && console.log('Welcome to the dashboard')