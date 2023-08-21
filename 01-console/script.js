console.log(100);
console.log('Hello World');
console.log(10, 'adfd', true);
const x = 100;
console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({ name: 'soarn', email: 'sosran.ta@gmail.com' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding:10px; background-color:black; color:green';
console.log('%cHello world', styles); // %c effected style in console
