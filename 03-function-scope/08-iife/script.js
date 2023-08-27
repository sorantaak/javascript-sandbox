// const user = 'Asrin';
(function () {
	const user = 'Asrin';
	console.log(user);
	const hello = () => console.log('Hello from the IIFE');
	hello();
})();

(function (name) {
	console.log('Hello ' + name);
})('Soran');

(function hello() {
	console.log('Hello');
})();
