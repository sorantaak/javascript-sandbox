let x;
const name = 'soarn';
const age = 42;
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and Iam ${age} years old`;

//String proerties and Methods
const s = new String('Hello world');
x = typeof s;
x = s.length;

// Access value by key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('H');

x = s.substring(1, 4);

x = s.substring(7);

x = s.slice(0, 4);
x = s.slice(-11, -7);

x = '            Hello World ';
x = s.trim();

x = s.replace('world', 'Soran');

x = s.includes('Hello');

x = s.valueOf();

x = s.split('');

console.log(x);
